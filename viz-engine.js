// === VizEngine: Visualization toolkit for interactive math ===
class VizEngine {
    constructor(container, opts = {}) {
        const containerWidth = container.clientWidth ? container.clientWidth - 32 : 0;
        const defaultWidth = containerWidth > 560 ? Math.min(containerWidth, 900) : 560;
        this.width = opts.width || defaultWidth;
        this.height = opts.height || Math.round(this.width * 0.65);
        this.scale = opts.scale || 40;
        this.originX = opts.originX ?? this.width / 2;
        this.originY = opts.originY ?? this.height / 2;

        const dpr = window.devicePixelRatio || 1;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(dpr, dpr);
        container.appendChild(this.canvas);

        this.colors = {
            bg:'#0c0c20', grid:'#1a1a40', axis:'#4a4a7a', text:'#8b949e',
            white:'#f0f6fc', blue:'#58a6ff', teal:'#3fb9a0', orange:'#f0883e',
            green:'#3fb950', purple:'#bc8cff', red:'#f85149', yellow:'#d29922', pink:'#f778ba',
            muted:'#6e7681'
        };
        this.draggables = [];
        this.animationId = null;
        this._dragBound = false;
        this.dragState = null;
    }

    toScreen(x, y) { return [this.originX + x * this.scale, this.originY - y * this.scale]; }
    toMath(sx, sy) { return [(sx - this.originX) / this.scale, (this.originY - sy) / this.scale]; }

    clear() {
        this.ctx.fillStyle = this.colors.bg;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawGrid(spacing = 1) {
        const ctx = this.ctx;
        const minX = Math.floor(-this.originX / this.scale / spacing) * spacing;
        const maxX = Math.ceil((this.width - this.originX) / this.scale / spacing) * spacing;
        const minY = Math.floor(-(this.height - this.originY) / this.scale / spacing) * spacing;
        const maxY = Math.ceil(this.originY / this.scale / spacing) * spacing;
        ctx.strokeStyle = this.colors.grid; ctx.lineWidth = 0.5;
        for (let x = minX; x <= maxX; x += spacing) {
            const [sx] = this.toScreen(x, 0);
            ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, this.height); ctx.stroke();
        }
        for (let y = minY; y <= maxY; y += spacing) {
            const [, sy] = this.toScreen(0, y);
            ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(this.width, sy); ctx.stroke();
        }
    }

    drawAxes() {
        const ctx = this.ctx;
        ctx.strokeStyle = this.colors.axis; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, this.originY); ctx.lineTo(this.width, this.originY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(this.originX, 0); ctx.lineTo(this.originX, this.height); ctx.stroke();
        ctx.fillStyle = this.colors.text; ctx.font = '11px -apple-system,sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        const minX = Math.ceil(-this.originX / this.scale), maxX = Math.floor((this.width - this.originX) / this.scale);
        for (let x = minX; x <= maxX; x++) { if (x === 0) continue; const [sx] = this.toScreen(x, 0); ctx.fillText(x, sx, this.originY + 4); }
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        const minY = Math.ceil(-(this.height - this.originY) / this.scale), maxY = Math.floor(this.originY / this.scale);
        for (let y = minY; y <= maxY; y++) { if (y === 0) continue; const [, sy] = this.toScreen(0, y); ctx.fillText(y, this.originX - 6, sy); }
    }

    drawVector(x1, y1, x2, y2, color, label, lw = 2) {
        const ctx = this.ctx;
        const [sx1, sy1] = this.toScreen(x1, y1);
        const [sx2, sy2] = this.toScreen(x2, y2);
        const dx = sx2 - sx1, dy = sy2 - sy1, len = Math.sqrt(dx * dx + dy * dy);
        if (len < 1) return;
        const angle = Math.atan2(dy, dx);
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(sx2 - Math.cos(angle) * 10, sy2 - Math.sin(angle) * 10); ctx.stroke();
        ctx.fillStyle = color; ctx.beginPath();
        ctx.moveTo(sx2, sy2);
        ctx.lineTo(sx2 - 12 * Math.cos(angle - Math.PI / 6), sy2 - 12 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(sx2 - 12 * Math.cos(angle + Math.PI / 6), sy2 - 12 * Math.sin(angle + Math.PI / 6));
        ctx.closePath(); ctx.fill();
        if (label) {
            const ux = -dy / len, uy = dx / len;
            ctx.fillStyle = color; ctx.font = 'bold 14px -apple-system,sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(label, (sx1 + sx2) / 2 + ux * 16, (sy1 + sy2) / 2 + uy * 16);
        }
    }

    drawPoint(x, y, color, label, r = 5) {
        const ctx = this.ctx; const [sx, sy] = this.toScreen(x, y);
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill();
        if (label) { ctx.fillStyle = color; ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(label, sx + r + 4, sy - r); }
    }

    drawLine(x1, y1, x2, y2, color, lw = 1, dashed = false) {
        const ctx = this.ctx;
        const [sx1, sy1] = this.toScreen(x1, y1), [sx2, sy2] = this.toScreen(x2, y2);
        const dx = sx2 - sx1, dy = sy2 - sy1, len = Math.sqrt(dx * dx + dy * dy);
        if (len < 0.1) return;
        const ux = dx / len, uy = dy / len, ext = Math.max(this.width, this.height) * 2;
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        if (dashed) ctx.setLineDash([6, 4]);
        ctx.beginPath(); ctx.moveTo(sx1 - ux * ext, sy1 - uy * ext); ctx.lineTo(sx2 + ux * ext, sy2 + uy * ext); ctx.stroke();
        if (dashed) ctx.setLineDash([]);
    }

    drawSegment(x1, y1, x2, y2, color, lw = 1, dashed = false) {
        const ctx = this.ctx;
        const [sx1, sy1] = this.toScreen(x1, y1), [sx2, sy2] = this.toScreen(x2, y2);
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        if (dashed) ctx.setLineDash([6, 4]);
        ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(sx2, sy2); ctx.stroke();
        if (dashed) ctx.setLineDash([]);
    }

    drawPolygon(points, fill, stroke, lw = 1) {
        const ctx = this.ctx; ctx.beginPath();
        points.forEach(([x, y], i) => { const [sx, sy] = this.toScreen(x, y); i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy); });
        ctx.closePath();
        if (fill) { ctx.fillStyle = fill; ctx.fill(); }
        if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
    }

    drawCircle(cx, cy, r, fill, stroke, lw = 1) {
        const ctx = this.ctx; const [sx, sy] = this.toScreen(cx, cy);
        ctx.beginPath(); ctx.arc(sx, sy, r * this.scale, 0, Math.PI * 2);
        if (fill) { ctx.fillStyle = fill; ctx.fill(); }
        if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
    }

    drawEllipse(cx, cy, rx, ry, angle, fill, stroke) {
        const ctx = this.ctx; const [sx, sy] = this.toScreen(cx, cy);
        ctx.save(); ctx.translate(sx, sy); ctx.rotate(-angle);
        ctx.beginPath(); ctx.ellipse(0, 0, rx * this.scale, ry * this.scale, 0, 0, Math.PI * 2);
        if (fill) { ctx.fillStyle = fill; ctx.fill(); }
        if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
        ctx.restore();
    }

    drawText(text, x, y, color, size = 14, align = 'center', baseline = 'middle') {
        const ctx = this.ctx; const [sx, sy] = this.toScreen(x, y);
        ctx.fillStyle = color || this.colors.white; ctx.font = size + 'px -apple-system,sans-serif';
        ctx.textAlign = align; ctx.textBaseline = baseline; ctx.fillText(text, sx, sy);
    }

    screenText(text, px, py, color, size = 14, align = 'center', baseline = 'middle') {
        const ctx = this.ctx;
        ctx.fillStyle = color || this.colors.white; ctx.font = size + 'px -apple-system,sans-serif';
        ctx.textAlign = align; ctx.textBaseline = baseline; ctx.fillText(text, px, py);
    }

    drawTransformedUnitSquare(M, fill, stroke, lw = 2) {
        const [[a, b], [c, d]] = M;
        this.drawPolygon([[0,0],[a,c],[a+b,c+d],[b,d]], fill, stroke, lw);
    }

    addDraggable(id, x, y, color, radius = 8, onDrag) {
        const d = { id, x, y, color, radius: radius || 8, onDrag };
        this.draggables.push(d);
        if (!this._dragBound) {
            this._dragBound = true;
            const getPos = (e) => {
                const r = this.canvas.getBoundingClientRect();
                const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
                const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
                return this.toMath(cx, cy);
            };
            const startDrag = (e) => {
                const [wx, wy] = getPos(e);
                for (const dr of this.draggables) {
                    if (Math.sqrt((wx - dr.x) ** 2 + (wy - dr.y) ** 2) < dr.radius / this.scale * 2.5) {
                        this.dragState = dr; e.preventDefault(); break;
                    }
                }
            };
            const moveDrag = (e) => {
                if (!this.dragState) return;
                e.preventDefault();
                const [wx, wy] = getPos(e);
                this.dragState.x = wx; this.dragState.y = wy;
                if (this.dragState.onDrag) this.dragState.onDrag(wx, wy);
            };
            const endDrag = () => { this.dragState = null; };
            this.canvas.addEventListener('mousedown', startDrag);
            this.canvas.addEventListener('mousemove', moveDrag);
            this.canvas.addEventListener('mouseup', endDrag);
            this.canvas.addEventListener('mouseleave', endDrag);
            this.canvas.addEventListener('touchstart', startDrag, { passive: false });
            this.canvas.addEventListener('touchmove', moveDrag, { passive: false });
            this.canvas.addEventListener('touchend', endDrag);
        }
        return d;
    }

    drawDraggables() {
        for (const d of this.draggables) {
            const [sx, sy] = this.toScreen(d.x, d.y);
            const ctx = this.ctx;
            ctx.fillStyle = d.color + '33'; ctx.beginPath(); ctx.arc(sx, sy, d.radius + 4, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = d.color; ctx.beginPath(); ctx.arc(sx, sy, d.radius, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff44'; ctx.beginPath(); ctx.arc(sx - 2, sy - 2, d.radius * 0.3, 0, Math.PI * 2); ctx.fill();
        }
    }

    animate(drawFrame) {
        const loop = (t) => { drawFrame(t); this.animationId = requestAnimationFrame(loop); };
        this.animationId = requestAnimationFrame(loop);
    }

    stopAnimation() { if (this.animationId) { cancelAnimationFrame(this.animationId); this.animationId = null; } }

    static createSlider(container, label, min, max, val, step, onChange) {
        const g = document.createElement('div'); g.className = 'viz-slider-group';
        const l = document.createElement('span'); l.className = 'viz-slider-label'; l.textContent = label;
        const s = document.createElement('input'); s.type = 'range'; s.className = 'viz-slider';
        s.min = min; s.max = max; s.value = val; s.step = step || 0.1;
        const v = document.createElement('span'); v.className = 'viz-slider-value'; v.textContent = parseFloat(val).toFixed(1);
        s.addEventListener('input', () => { v.textContent = parseFloat(s.value).toFixed(step < 1 ? 1 : 0); onChange(parseFloat(s.value)); });
        g.appendChild(l); g.appendChild(s); g.appendChild(v); container.appendChild(g);
        return s;
    }

    static createButton(container, label, onClick) {
        const b = document.createElement('button');
        b.style.cssText = 'padding:4px 12px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;cursor:pointer;';
        b.textContent = label; b.addEventListener('click', onClick); container.appendChild(b); return b;
    }

    // === Static linear algebra utilities ===
    static matVec(M, v) { return [M[0][0]*v[0]+M[0][1]*v[1], M[1][0]*v[0]+M[1][1]*v[1]]; }
    static matMul(A, B) { return [[A[0][0]*B[0][0]+A[0][1]*B[1][0], A[0][0]*B[0][1]+A[0][1]*B[1][1]], [A[1][0]*B[0][0]+A[1][1]*B[1][0], A[1][0]*B[0][1]+A[1][1]*B[1][1]]]; }
    static det2(M) { return M[0][0]*M[1][1]-M[0][1]*M[1][0]; }
    static eigenvalues2(M) {
        const tr = M[0][0]+M[1][1], det = VizEngine.det2(M), disc = tr*tr-4*det;
        if (disc < 0) return null;
        const s = Math.sqrt(disc); return [(tr+s)/2, (tr-s)/2];
    }
    static eigenvector2(M, lam) {
        const a = M[0][0]-lam, b = M[0][1];
        if (Math.abs(b) > 1e-10) return VizEngine.normalize([1, -a/b]);
        if (Math.abs(a) > 1e-10) return [0, 1];
        const c = M[1][0], d = M[1][1]-lam;
        if (Math.abs(d) > 1e-10) return VizEngine.normalize([1, -c/d]);
        return [1, 0];
    }
    static normalize(v) { const l = Math.sqrt(v[0]*v[0]+v[1]*v[1]); return l < 1e-10 ? [0,0] : [v[0]/l, v[1]/l]; }
    static vecLen(v) { return Math.sqrt(v[0]*v[0]+v[1]*v[1]); }
    static dot(u, v) { return u[0]*v[0]+u[1]*v[1]; }
    static proj(u, v) { const d = VizEngine.dot(u,v)/VizEngine.dot(v,v); return [v[0]*d, v[1]*d]; }
    static lerp(a, b, t) { return a + (b - a) * t; }

    // === Linear Algebra-specific helpers ===

    // Draw a vector from origin with arrowhead (convenience wrapper)
    drawVec(x, y, color, label, lw) {
        this.drawVector(0, 0, x, y, color, label, lw);
    }

    // Draw a matrix as a formatted grid at screen position
    drawMatrix(matrix, px, py, color, cellW, cellH, fontSize) {
        const ctx = this.ctx;
        cellW = cellW || 50;
        cellH = cellH || 28;
        fontSize = fontSize || 13;
        const rows = matrix.length;
        const cols = matrix[0].length;
        const totalW = cols * cellW;
        const totalH = rows * cellH;

        // Brackets
        ctx.strokeStyle = color || this.colors.white;
        ctx.lineWidth = 2;
        const bw = 6;
        // left bracket
        ctx.beginPath();
        ctx.moveTo(px - bw + bw, py - 4);
        ctx.lineTo(px - bw, py - 4);
        ctx.lineTo(px - bw, py + totalH + 4);
        ctx.lineTo(px - bw + bw, py + totalH + 4);
        ctx.stroke();
        // right bracket
        ctx.beginPath();
        ctx.moveTo(px + totalW + bw - bw, py - 4);
        ctx.lineTo(px + totalW + bw, py - 4);
        ctx.lineTo(px + totalW + bw, py + totalH + 4);
        ctx.lineTo(px + totalW + bw - bw, py + totalH + 4);
        ctx.stroke();

        // Entries
        ctx.fillStyle = color || this.colors.white;
        ctx.font = fontSize + 'px -apple-system,sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const val = matrix[i][j];
                const text = Number.isInteger(val) ? val.toString() : val.toFixed(2);
                ctx.fillText(text, px + j * cellW + cellW / 2, py + i * cellH + cellH / 2);
            }
        }
    }

    // Draw a line through the origin with direction (a,b) representing a subspace
    drawSpan(a, b, color, lw) {
        if (Math.abs(a) < 1e-10 && Math.abs(b) < 1e-10) return;
        this.drawLine(0, 0, a, b, color, lw || 1.5, false);
    }

    // Highlight a parallelogram formed by two vectors from origin
    drawParallelogram(v1, v2, fill, stroke, lw) {
        this.drawPolygon([[0,0], v1, [v1[0]+v2[0], v1[1]+v2[1]], v2], fill, stroke, lw || 1.5);
    }

    // Draw a grid of transformed points (for visualizing linear transformations)
    drawTransformedGrid(M, range, color, lw) {
        range = range || 5;
        lw = lw || 0.5;
        color = color || this.colors.grid;
        // Horizontal grid lines (constant v)
        for (let v = -range; v <= range; v++) {
            this.ctx.strokeStyle = color; this.ctx.lineWidth = lw;
            this.ctx.beginPath();
            for (let u = -range; u <= range; u += 0.1) {
                const tx = M[0][0] * u + M[0][1] * v;
                const ty = M[1][0] * u + M[1][1] * v;
                const [sx, sy] = this.toScreen(tx, ty);
                u === -range ? this.ctx.moveTo(sx, sy) : this.ctx.lineTo(sx, sy);
            }
            this.ctx.stroke();
        }
        // Vertical grid lines (constant u)
        for (let u = -range; u <= range; u++) {
            this.ctx.strokeStyle = color; this.ctx.lineWidth = lw;
            this.ctx.beginPath();
            for (let v = -range; v <= range; v += 0.1) {
                const tx = M[0][0] * u + M[0][1] * v;
                const ty = M[1][0] * u + M[1][1] * v;
                const [sx, sy] = this.toScreen(tx, ty);
                v === -range ? this.ctx.moveTo(sx, sy) : this.ctx.lineTo(sx, sy);
            }
            this.ctx.stroke();
        }
    }

    // Draw highlighted row of an augmented matrix at screen coords
    drawAugmentedMatrix(matrix, rhs, px, py, color, highlightRow, cellW, cellH) {
        const ctx = this.ctx;
        cellW = cellW || 44;
        cellH = cellH || 26;
        const rows = matrix.length;
        const cols = matrix[0].length;
        const augCol = rhs ? 1 : 0;
        const totalCols = cols + augCol;
        const totalW = totalCols * cellW;
        const totalH = rows * cellH;

        // Background
        ctx.fillStyle = '#0e0e28';
        ctx.fillRect(px - 8, py - 6, totalW + 20, totalH + 12);

        // Brackets
        ctx.strokeStyle = color || this.colors.white;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, py - 4); ctx.lineTo(px - 6, py - 4); ctx.lineTo(px - 6, py + totalH + 4); ctx.lineTo(px, py + totalH + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px + totalW + 4, py - 4); ctx.lineTo(px + totalW + 10, py - 4); ctx.lineTo(px + totalW + 10, py + totalH + 4); ctx.lineTo(px + totalW + 4, py + totalH + 4);
        ctx.stroke();

        // Augmented line
        if (rhs) {
            const augX = px + cols * cellW;
            ctx.strokeStyle = this.colors.muted;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 3]);
            ctx.beginPath(); ctx.moveTo(augX, py - 4); ctx.lineTo(augX, py + totalH + 4); ctx.stroke();
            ctx.setLineDash([]);
        }

        // Entries
        ctx.font = '13px -apple-system,sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < rows; i++) {
            const isHighlight = (highlightRow !== undefined && highlightRow === i);
            for (let j = 0; j < cols; j++) {
                ctx.fillStyle = isHighlight ? this.colors.orange : (color || this.colors.white);
                const val = matrix[i][j];
                const text = Number.isInteger(val) ? val.toString() : (Math.abs(val) < 0.005 ? '0' : val.toFixed(2));
                ctx.fillText(text, px + j * cellW + cellW / 2, py + i * cellH + cellH / 2);
            }
            if (rhs) {
                ctx.fillStyle = isHighlight ? this.colors.teal : this.colors.teal;
                const val = rhs[i];
                const text = Number.isInteger(val) ? val.toString() : val.toFixed(2);
                ctx.fillText(text, px + cols * cellW + cellW / 2, py + i * cellH + cellH / 2);
            }
        }
    }

    // === Analysis-specific helpers (kept for compatibility) ===
    drawFunction(f, xMin, xMax, color, lw = 2, steps = 300) {
        const ctx = this.ctx;
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= steps; i++) {
            const x = xMin + (xMax - xMin) * i / steps;
            const y = f(x);
            if (!isFinite(y) || Math.abs(y) > 1e6) { started = false; continue; }
            const [sx, sy] = this.toScreen(x, y);
            if (!started) { ctx.moveTo(sx, sy); started = true; } else { ctx.lineTo(sx, sy); }
        }
        ctx.stroke();
    }

    drawEpsilonBand(L, epsilon, color) {
        const ctx = this.ctx;
        const [, sy1] = this.toScreen(0, L + epsilon);
        const [, sy2] = this.toScreen(0, L - epsilon);
        ctx.fillStyle = color + '22';
        ctx.fillRect(0, sy1, this.width, sy2 - sy1);
        ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(0, sy1); ctx.lineTo(this.width, sy1); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, sy2); ctx.lineTo(this.width, sy2); ctx.stroke();
        ctx.setLineDash([]);
    }

    drawDeltaBand(a, delta, color) {
        const ctx = this.ctx;
        const [sx1] = this.toScreen(a - delta, 0);
        const [sx2] = this.toScreen(a + delta, 0);
        ctx.fillStyle = color + '22';
        ctx.fillRect(sx1, 0, sx2 - sx1, this.height);
        ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(sx1, 0); ctx.lineTo(sx1, this.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx2, 0); ctx.lineTo(sx2, this.height); ctx.stroke();
        ctx.setLineDash([]);
    }

    shadeBetween(f1, f2, xMin, xMax, color, steps = 200) {
        const ctx = this.ctx;
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
            const x = xMin + (xMax - xMin) * i / steps;
            const [sx, sy] = this.toScreen(x, f1(x));
            i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
        }
        for (let i = steps; i >= 0; i--) {
            const x = xMin + (xMax - xMin) * i / steps;
            const [sx, sy] = this.toScreen(x, f2(x));
            ctx.lineTo(sx, sy);
        }
        ctx.closePath(); ctx.fill();
    }

    drawRiemannSums(f, a, b, n, type, color) {
        const ctx = this.ctx;
        const dx = (b - a) / n;
        for (let i = 0; i < n; i++) {
            const xL = a + i * dx;
            let h;
            if (type === 'left') h = f(xL);
            else if (type === 'right') h = f(xL + dx);
            else if (type === 'mid') h = f(xL + dx / 2);
            else if (type === 'upper') { h = -Infinity; for (let s = 0; s <= 10; s++) { h = Math.max(h, f(xL + dx * s / 10)); } }
            else { h = Infinity; for (let s = 0; s <= 10; s++) { h = Math.min(h, f(xL + dx * s / 10)); } }
            if (!isFinite(h)) continue;
            const [sx1, sy1] = this.toScreen(xL, Math.max(h, 0));
            const [sx2, sy2] = this.toScreen(xL + dx, Math.min(h, 0));
            const [, syAxis] = this.toScreen(0, 0);
            ctx.fillStyle = color + '44';
            ctx.fillRect(sx1, Math.min(sy1, syAxis), sx2 - sx1, Math.abs(sy1 - syAxis));
            ctx.strokeStyle = color; ctx.lineWidth = 1;
            ctx.strokeRect(sx1, Math.min(sy1, syAxis), sx2 - sx1, Math.abs(sy1 - syAxis));
        }
    }

    drawSequence(seq, nMax, color, r = 3) {
        for (let n = 0; n <= nMax; n++) {
            const y = seq(n);
            if (!isFinite(y)) continue;
            this.drawPoint(n, y, color, null, r);
        }
    }

    drawOpenInterval(a, b, y, color, lw = 3) {
        const ctx = this.ctx;
        const [sx1, sy1] = this.toScreen(a, y);
        const [sx2] = this.toScreen(b, y);
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(sx2, sy1); ctx.stroke();
        ctx.beginPath(); ctx.arc(sx1, sy1, 4, 0, Math.PI * 2); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(sx2, sy1, 4, 0, Math.PI * 2); ctx.stroke();
    }

    drawClosedInterval(a, b, y, color, lw = 3) {
        const ctx = this.ctx;
        const [sx1, sy1] = this.toScreen(a, y);
        const [sx2] = this.toScreen(b, y);
        ctx.strokeStyle = color; ctx.lineWidth = lw;
        ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(sx2, sy1); ctx.stroke();
        ctx.fillStyle = color;
        ctx.beginPath(); ctx.arc(sx1, sy1, 4, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(sx2, sy1, 4, 0, Math.PI * 2); ctx.fill();
    }

    // === 3x3 matrix operations ===
    static matVec3(M, v) {
        return [
            M[0][0]*v[0] + M[0][1]*v[1] + M[0][2]*v[2],
            M[1][0]*v[0] + M[1][1]*v[1] + M[1][2]*v[2],
            M[2][0]*v[0] + M[2][1]*v[1] + M[2][2]*v[2]
        ];
    }
    static matMul3(A, B) {
        const C = [[0,0,0],[0,0,0],[0,0,0]];
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                for (let k = 0; k < 3; k++)
                    C[i][j] += A[i][k] * B[k][j];
        return C;
    }
    static det3(M) {
        return M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1])
             - M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0])
             + M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0]);
    }
    static transpose(M) {
        const rows = M.length, cols = M[0].length;
        const T = [];
        for (let j = 0; j < cols; j++) {
            T[j] = [];
            for (let i = 0; i < rows; i++) T[j][i] = M[i][j];
        }
        return T;
    }
    static vecAdd(u, v) { return u.map((x, i) => x + v[i]); }
    static vecScale(c, v) { return v.map(x => c * x); }
    static vecSub(u, v) { return u.map((x, i) => x - v[i]); }
    static cross(u, v) {
        return [u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]];
    }
}
window.VizEngine = VizEngine;
