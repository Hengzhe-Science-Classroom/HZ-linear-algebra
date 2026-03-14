// === Chapter 12: Complex Eigenvalues & Jordan Form ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch12',
    number: 12,
    title: 'Complex Eigenvalues & Jordan Form',
    subtitle: 'What happens when eigenvalues are complex or repeated',
    sections: [
        // ============================================================
        // SECTION 1: Complex Eigenvalues of Real Matrices
        // ============================================================
        {
            id: 'ch12-sec01',
            title: 'Complex Eigenvalues of Real Matrices',
            content: `
<h2>12.1 Complex Eigenvalues of Real Matrices</h2>

<div class="env-block intuition">
    <div class="env-title">Why Complex Numbers Enter Linear Algebra</div>
    <div class="env-body">
        <p>Not every real matrix has real eigenvalues. The matrix \\(\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\) represents a 90-degree rotation; no nonzero vector in \\(\\mathbb{R}^2\\) is mapped to a scalar multiple of itself. The characteristic polynomial \\(\\lambda^2 + 1 = 0\\) has roots \\(\\lambda = \\pm i\\). To fully understand linear operators, we must extend our field to \\(\\mathbb{C}\\).</p>
    </div>
</div>

<p>Recall from Chapter 10 that the eigenvalues of an \\(n \\times n\\) matrix \\(A\\) are the roots of the characteristic polynomial \\(p(\\lambda) = \\det(A - \\lambda I)\\). Over \\(\\mathbb{R}\\), this polynomial may have complex roots. Over \\(\\mathbb{C}\\), the Fundamental Theorem of Algebra guarantees that \\(p(\\lambda)\\) always splits into linear factors.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.1.1 (Fundamental Theorem of Algebra)</div>
    <div class="env-body">
        <p>Every polynomial of degree \\(n \\ge 1\\) with complex coefficients has exactly \\(n\\) roots in \\(\\mathbb{C}\\), counted with multiplicity.</p>
    </div>
</div>

<div class="env-block corollary">
    <div class="env-title">Corollary 12.1.2</div>
    <div class="env-body">
        <p>Every \\(n \\times n\\) matrix with entries in \\(\\mathbb{C}\\) (or \\(\\mathbb{R}\\)) has exactly \\(n\\) eigenvalues in \\(\\mathbb{C}\\), counted with algebraic multiplicity.</p>
    </div>
</div>

<h3>Conjugate Pairs</h3>

<p>When the matrix \\(A\\) has <em>real</em> entries, its characteristic polynomial has real coefficients. This forces complex roots to appear in conjugate pairs.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.1.3 (Conjugate Pair Theorem)</div>
    <div class="env-body">
        <p>Let \\(A\\) be a real \\(n \\times n\\) matrix. If \\(\\lambda = a + bi\\) (with \\(b \\neq 0\\)) is an eigenvalue of \\(A\\), then \\(\\bar{\\lambda} = a - bi\\) is also an eigenvalue of \\(A\\), with the same algebraic multiplicity. Moreover, if \\(\\mathbf{v}\\) is an eigenvector for \\(\\lambda\\), then \\(\\bar{\\mathbf{v}}\\) is an eigenvector for \\(\\bar{\\lambda}\\).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Since \\(A\\) is real, \\(\\overline{A} = A\\). Starting from \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\), take complex conjugates:</p>
        \\[
        \\overline{A\\mathbf{v}} = \\overline{\\lambda \\mathbf{v}} \\implies A\\bar{\\mathbf{v}} = \\bar{\\lambda}\\,\\bar{\\mathbf{v}}.
        \\]
        <p>Thus \\(\\bar{\\lambda}\\) is an eigenvalue with eigenvector \\(\\bar{\\mathbf{v}}\\). Since the characteristic polynomial has real coefficients, if \\(\\lambda\\) is a root of multiplicity \\(k\\), so is \\(\\bar{\\lambda}\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.1.4</div>
    <div class="env-body">
        <p>Consider \\(A = \\begin{pmatrix} 1 & -2 \\\\ 1 & 3 \\end{pmatrix}\\). The characteristic polynomial is</p>
        \\[
        p(\\lambda) = \\lambda^2 - 4\\lambda + 5.
        \\]
        <p>The discriminant is \\(16 - 20 = -4 < 0\\), so the eigenvalues are</p>
        \\[
        \\lambda = \\frac{4 \\pm 2i}{2} = 2 \\pm i.
        \\]
        <p>For \\(\\lambda_1 = 2 + i\\), we solve \\((A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}\\):</p>
        \\[
        \\begin{pmatrix} -1 - i & -2 \\\\ 1 & 1 - i \\end{pmatrix} \\mathbf{v} = \\mathbf{0} \\implies \\mathbf{v}_1 = \\begin{pmatrix} 1 - i \\\\ -1 \\end{pmatrix}.
        \\]
        <p>Then \\(\\bar{\\mathbf{v}}_1 = \\begin{pmatrix} 1 + i \\\\ -1 \\end{pmatrix}\\) is the eigenvector for \\(\\lambda_2 = 2 - i\\).</p>
    </div>
</div>

<h3>The Rotation-Scaling Interpretation</h3>

<p>A complex eigenvalue \\(\\lambda = a + bi\\) can be written in polar form as \\(\\lambda = r e^{i\\theta}\\), where \\(r = |\\lambda| = \\sqrt{a^2 + b^2}\\) and \\(\\theta = \\arg(\\lambda)\\). The magnitude \\(r\\) represents a <em>scaling factor</em>, and the angle \\(\\theta\\) represents a <em>rotation</em>.</p>

<div class="env-block definition">
    <div class="env-title">Definition 12.1.5 (Polar Decomposition of a Complex Eigenvalue)</div>
    <div class="env-body">
        <p>For \\(\\lambda = a + bi \\neq 0\\), the <strong>modulus</strong> is \\(r = \\sqrt{a^2 + b^2}\\), and the <strong>argument</strong> is \\(\\theta = \\arctan(b/a)\\) (adjusted for quadrant). Then \\(\\lambda = r(\\cos\\theta + i\\sin\\theta)\\).</p>
        <ul>
            <li>If \\(r = 1\\): the transformation is a <em>pure rotation</em> by angle \\(\\theta\\).</li>
            <li>If \\(r > 1\\): the transformation is a <em>spiral outward</em> (rotation + expansion).</li>
            <li>If \\(r < 1\\): the transformation is a <em>spiral inward</em> (rotation + contraction).</li>
        </ul>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-complex-eigenvalue-rotation"></div>

<div class="env-block remark">
    <div class="env-title">Remark 12.1.6</div>
    <div class="env-body">
        <p>Complex eigenvalues always come in conjugate pairs \\(\\lambda, \\bar{\\lambda}\\) for real matrices. The pair represents opposite rotations with the same scaling. Geometrically, repeated application of \\(A\\) produces a spiral in the plane spanned by the real and imaginary parts of the eigenvector.</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.1.7</div>
    <div class="env-body">
        <p>The rotation matrix \\(R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\\) has eigenvalues \\(\\lambda = e^{\\pm i\\theta}\\). Here \\(r = 1\\) (pure rotation, no scaling) and the angle of rotation is \\(\\theta\\).</p>
    </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-complex-eigenvalue-rotation',
                    title: 'Complex Eigenvalue: Rotation-Scaling Action',
                    description: 'Adjust the real part \\(a\\) and imaginary part \\(b\\) of the eigenvalue \\(\\lambda = a + bi\\). The matrix \\(\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}\\) acts on the blue unit circle, rotating and scaling it. Click "Animate Spiral" to see iterated application.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 45 });

                        let a = 0.8, b = 0.6;
                        let animating = false;
                        let time = 0;

                        const sliderA = VizEngine.createSlider(controls, 'a (real)', -2, 2, a, 0.1, v => { a = v; });
                        const sliderB = VizEngine.createSlider(controls, 'b (imag)', -2, 2, b, 0.1, v => { b = v; });
                        const animBtn = VizEngine.createButton(controls, 'Animate Spiral', () => {
                            animating = !animating;
                            time = 0;
                            animBtn.textContent = animating ? 'Stop' : 'Animate Spiral';
                        });

                        function draw(t) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const r = Math.sqrt(a * a + b * b);
                            const theta = Math.atan2(b, a);

                            // Draw unit circle
                            viz.drawCircle(0, 0, 1, null, viz.colors.muted + '66', 1);

                            // Draw transformed unit circle (ellipse for general matrix, circle for rotation-scaling)
                            const ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (let i = 0; i <= 100; i++) {
                                const ang = (2 * Math.PI * i) / 100;
                                const ux = Math.cos(ang), uy = Math.sin(ang);
                                const tx = a * ux - b * uy;
                                const ty = b * ux + a * uy;
                                const [sx, sy] = viz.toScreen(tx, ty);
                                i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Show a sample vector and its image
                            const vx = 1, vy = 0;
                            const tvx = a * vx - b * vy;
                            const tvy = b * vx + a * vy;
                            viz.drawVec(vx, vy, viz.colors.teal, 'e\u2081', 2);
                            viz.drawVec(tvx, tvy, viz.colors.orange, 'Ae\u2081', 2);

                            // Draw angle arc
                            if (r > 0.1) {
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                const arcR = 25;
                                const [ox, oy] = viz.toScreen(0, 0);
                                ctx.arc(ox, oy, arcR, 0, -theta, theta > 0);
                                ctx.stroke();
                                const labelAng = -theta / 2;
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u03B8', ox + 38 * Math.cos(labelAng), oy + 38 * Math.sin(labelAng));
                            }

                            // Spiral animation
                            if (animating) {
                                time += 0.015;
                                const steps = Math.min(Math.floor(time * 10), 80);
                                ctx.strokeStyle = viz.colors.pink + '88';
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                let cx = 1, cy = 0;
                                const [s0x, s0y] = viz.toScreen(cx, cy);
                                ctx.moveTo(s0x, s0y);
                                for (let k = 1; k <= steps; k++) {
                                    const ncx = a * cx - b * cy;
                                    const ncy = b * cx + a * cy;
                                    cx = ncx; cy = ncy;
                                    const [sx, sy] = viz.toScreen(cx, cy);
                                    ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();
                                if (Math.abs(cx) < 20 && Math.abs(cy) < 20) {
                                    viz.drawPoint(cx, cy, viz.colors.pink, '', 4);
                                }
                            }

                            // Info text
                            const thetaDeg = (theta * 180 / Math.PI).toFixed(1);
                            viz.screenText('\u03BB = ' + a.toFixed(1) + ' + ' + b.toFixed(1) + 'i', 12, 20, viz.colors.white, 13, 'left');
                            viz.screenText('r = |\u03BB| = ' + r.toFixed(2) + ',  \u03B8 = ' + thetaDeg + '\u00B0', 12, 40, viz.colors.text, 12, 'left');
                            if (r > 1) viz.screenText('Spiral outward (expanding)', 12, 58, viz.colors.red, 11, 'left');
                            else if (r < 1 && r > 0.01) viz.screenText('Spiral inward (contracting)', 12, 58, viz.colors.green, 11, 'left');
                            else if (Math.abs(r - 1) < 0.05) viz.screenText('Pure rotation (|r| \u2248 1)', 12, 58, viz.colors.teal, 11, 'left');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the eigenvalues and eigenvectors of \\(A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\).',
                    hint: 'Compute \\(\\det(A - \\lambda I) = \\lambda^2 + 1\\).',
                    solution: 'The characteristic polynomial is \\(\\lambda^2 + 1 = 0\\), giving \\(\\lambda = \\pm i\\). For \\(\\lambda = i\\): \\((A - iI)\\mathbf{v} = 0\\) yields \\(\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -i \\end{pmatrix}\\). For \\(\\lambda = -i\\): \\(\\mathbf{v} = \\begin{pmatrix} 1 \\\\ i \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that a \\(3 \\times 3\\) real matrix must have at least one real eigenvalue.',
                    hint: 'The characteristic polynomial has degree 3 with real coefficients. Complex roots come in conjugate pairs.',
                    solution: 'The characteristic polynomial has degree 3 (odd). Complex roots come in conjugate pairs, so the number of complex (non-real) roots is even. Since 3 is odd, at least one root must be real.'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 3 & -5 \\\\ 1 & -1 \\end{pmatrix}\\). Find the modulus and argument of the eigenvalues.',
                    hint: 'The characteristic polynomial is \\(\\lambda^2 - 2\\lambda + 2 = 0\\).',
                    solution: '\\(\\lambda = \\frac{2 \\pm \\sqrt{4-8}}{2} = 1 \\pm i\\). The modulus is \\(r = \\sqrt{1^2 + 1^2} = \\sqrt{2}\\). The argument is \\(\\theta = \\arctan(1/1) = \\pi/4\\) (45 degrees). Since \\(r > 1\\), the transformation spirals outward.'
                },
                {
                    question: 'Prove that if \\(A\\) is a real \\(2 \\times 2\\) matrix with complex eigenvalues \\(\\lambda = a \\pm bi\\), then \\(\\det(A) = a^2 + b^2\\) and \\(\\operatorname{tr}(A) = 2a\\).',
                    hint: 'Use the relationships \\(\\det(A) = \\lambda_1 \\lambda_2\\) and \\(\\operatorname{tr}(A) = \\lambda_1 + \\lambda_2\\).',
                    solution: '\\(\\det(A) = \\lambda_1 \\lambda_2 = (a+bi)(a-bi) = a^2 + b^2\\). \\(\\operatorname{tr}(A) = \\lambda_1 + \\lambda_2 = (a+bi) + (a-bi) = 2a\\).'
                },
                {
                    question: 'Determine whether the eigenvalues of \\(A = \\begin{pmatrix} 2 & -3 \\\\ 3 & 2 \\end{pmatrix}\\) cause spiraling inward or outward. What is the scaling factor per iteration?',
                    hint: 'Find the eigenvalues and compute \\(|\\lambda|\\).',
                    solution: 'The characteristic polynomial is \\(\\lambda^2 - 4\\lambda + 13 = 0\\), giving \\(\\lambda = 2 \\pm 3i\\). The modulus is \\(|\\lambda| = \\sqrt{4 + 9} = \\sqrt{13} \\approx 3.61\\). Since \\(|\\lambda| > 1\\), the transformation spirals outward. Each iteration scales distances by \\(\\sqrt{13}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Real Canonical Form for Complex Eigenvalues
        // ============================================================
        {
            id: 'ch12-sec02',
            title: 'Real Canonical Form',
            content: `
<h2>12.2 Real Canonical Form for Complex Eigenvalues</h2>

<p>Complex eigenvalues give us a complete factorization over \\(\\mathbb{C}\\), but for real matrices we often want a <em>real</em> representation of the transformation. The real canonical form replaces each conjugate pair with a \\(2 \\times 2\\) rotation-scaling block, keeping everything in \\(\\mathbb{R}\\).</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.2.1 (Real Canonical Form for 2\\(\\times\\)2 Matrices)</div>
    <div class="env-body">
        <p>Let \\(A\\) be a real \\(2 \\times 2\\) matrix with complex eigenvalues \\(\\lambda = a + bi\\) and \\(\\bar{\\lambda} = a - bi\\) (where \\(b \\neq 0\\)). Let \\(\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}\\) be a complex eigenvector for \\(\\lambda\\), where \\(\\mathbf{u}, \\mathbf{w} \\in \\mathbb{R}^2\\). Then with respect to the basis \\(\\{\\mathbf{u}, \\mathbf{w}\\}\\), the matrix \\(A\\) has the real form</p>
        \\[
        [A]_{\\{\\mathbf{u}, \\mathbf{w}\\}} = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix} = r \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix},
        \\]
        <p>where \\(r = \\sqrt{a^2 + b^2}\\) and \\(\\theta = \\arctan(b/a)\\).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Starting from \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\) with \\(\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}\\) and \\(\\lambda = a + bi\\), expand:</p>
        \\[
        A(\\mathbf{u} + i\\mathbf{w}) = (a + bi)(\\mathbf{u} + i\\mathbf{w}) = (a\\mathbf{u} - b\\mathbf{w}) + i(b\\mathbf{u} + a\\mathbf{w}).
        \\]
        <p>Equating real and imaginary parts:</p>
        \\[
        A\\mathbf{u} = a\\mathbf{u} - b\\mathbf{w}, \\qquad A\\mathbf{w} = b\\mathbf{u} + a\\mathbf{w}.
        \\]
        <p>Let \\(P = \\begin{pmatrix} \\mathbf{u} & \\mathbf{w} \\end{pmatrix}\\). Then</p>
        \\[
        AP = P \\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix},
        \\]
        <p>so \\(P^{-1}AP = \\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}\\). Switching the sign convention on the off-diagonal to match the standard rotation form gives the stated result (the two conventions differ only by the choice of ordering \\(\\{\\mathbf{u}, \\mathbf{w}\\}\\) vs. \\(\\{\\mathbf{w}, \\mathbf{u}\\}\\)).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.2.2</div>
    <div class="env-body">
        <p>For \\(A = \\begin{pmatrix} 1 & -2 \\\\ 1 & 3 \\end{pmatrix}\\) with eigenvalue \\(\\lambda = 2 + i\\), the eigenvector is \\(\\mathbf{v} = \\begin{pmatrix} 1 - i \\\\ -1 \\end{pmatrix}\\). So \\(\\mathbf{u} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}\\), \\(\\mathbf{w} = \\begin{pmatrix} -1 \\\\ 0 \\end{pmatrix}\\). With \\(P = \\begin{pmatrix} 1 & -1 \\\\ -1 & 0 \\end{pmatrix}\\):</p>
        \\[
        P^{-1}AP = \\begin{pmatrix} 2 & 1 \\\\ -1 & 2 \\end{pmatrix} = \\sqrt{5}\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix},
        \\]
        <p>where \\(\\theta = \\arctan(1/2) \\approx 26.57^\\circ\\).</p>
    </div>
</div>

<h3>General Real Canonical Form</h3>

<p>For an \\(n \\times n\\) real matrix, the real canonical form is block-diagonal. Each real eigenvalue contributes a \\(1 \\times 1\\) block, and each conjugate pair contributes a \\(2 \\times 2\\) rotation-scaling block.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.2.3 (Real Canonical Form, General Case)</div>
    <div class="env-body">
        <p>Let \\(A\\) be a real \\(n \\times n\\) matrix with distinct eigenvalues. Suppose the real eigenvalues are \\(\\lambda_1, \\ldots, \\lambda_k\\) and the complex conjugate pairs are \\(\\alpha_j \\pm \\beta_j i\\) for \\(j = 1, \\ldots, m\\) (so \\(k + 2m = n\\)). Then \\(A\\) is similar over \\(\\mathbb{R}\\) to a block-diagonal matrix</p>
        \\[
        \\begin{pmatrix}
        \\lambda_1 & & & & & \\\\
        & \\ddots & & & & \\\\
        & & \\lambda_k & & & \\\\
        & & & C_1 & & \\\\
        & & & & \\ddots & \\\\
        & & & & & C_m
        \\end{pmatrix},
        \\quad C_j = \\begin{pmatrix} \\alpha_j & -\\beta_j \\\\ \\beta_j & \\alpha_j \\end{pmatrix}.
        \\]
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.2.4</div>
    <div class="env-body">
        <p>A \\(4 \\times 4\\) real matrix with eigenvalues \\(3, -1, 2 \\pm 5i\\) has real canonical form</p>
        \\[
        \\begin{pmatrix} 3 & 0 & 0 & 0 \\\\ 0 & -1 & 0 & 0 \\\\ 0 & 0 & 2 & -5 \\\\ 0 & 0 & 5 & 2 \\end{pmatrix}.
        \\]
    </div>
</div>

<div class="env-block warning">
    <div class="env-title">Warning</div>
    <div class="env-body">
        <p>The real canonical form requires distinct eigenvalues (or more precisely, that the matrix be diagonalizable over \\(\\mathbb{C}\\)). When eigenvalues are repeated and the matrix is not diagonalizable, we need the Jordan form, which is the subject of Sections 3 and 4.</p>
    </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find the real canonical form of \\(A = \\begin{pmatrix} 0 & -4 \\\\ 1 & 0 \\end{pmatrix}\\).',
                    hint: 'Find the eigenvalues: \\(\\lambda^2 + 4 = 0\\), so \\(\\lambda = \\pm 2i\\). Identify \\(a\\) and \\(b\\).',
                    solution: 'Eigenvalues are \\(\\pm 2i\\), so \\(a = 0, b = 2\\). The real canonical form is \\(\\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}\\). This is already in canonical form (the matrix itself is a rotation-scaling block with \\(r = 2, \\theta = 90^\\circ\\)).'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 3 & -2 \\\\ 4 & -1 \\end{pmatrix}\\). Find eigenvalues, the real canonical form, and the change-of-basis matrix \\(P\\).',
                    hint: 'Characteristic polynomial: \\(\\lambda^2 - 2\\lambda + 5 = 0\\).',
                    solution: '\\(\\lambda = 1 \\pm 2i\\). For \\(\\lambda = 1 + 2i\\): \\((A - (1+2i)I)\\mathbf{v} = 0\\) gives \\(\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 1 - i \\end{pmatrix}\\). So \\(\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\), \\(\\mathbf{w} = \\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix}\\). The change-of-basis is \\(P = \\begin{pmatrix} 1 & 0 \\\\ 1 & -1 \\end{pmatrix}\\), and \\(P^{-1}AP = \\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'A real \\(3 \\times 3\\) matrix has characteristic polynomial \\(p(\\lambda) = -(\\lambda - 2)(\\lambda^2 + 4\\lambda + 5)\\). Find its real canonical form.',
                    hint: 'The quadratic factor gives \\(\\lambda = -2 \\pm i\\).',
                    solution: 'Real eigenvalue: \\(\\lambda_1 = 2\\). Complex pair from \\(\\lambda^2 + 4\\lambda + 5 = 0\\): \\(\\lambda = -2 \\pm i\\), so \\(\\alpha = -2, \\beta = 1\\). Real canonical form: \\(\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -2 & -1 \\\\ 0 & 1 & -2 \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that the \\(2 \\times 2\\) rotation-scaling matrix \\(C = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}\\) satisfies \\(\\det(C) = a^2 + b^2\\) and \\(C^{-1} = \\frac{1}{a^2+b^2}\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}\\).',
                    hint: 'Compute \\(\\det(C)\\) directly and use the \\(2 \\times 2\\) inverse formula.',
                    solution: '\\(\\det(C) = a \\cdot a - (-b) \\cdot b = a^2 + b^2\\). By the \\(2 \\times 2\\) inverse formula: \\(C^{-1} = \\frac{1}{a^2+b^2}\\begin{pmatrix} a & b \\\\ -b & a \\end{pmatrix}\\). Note this is a rotation by \\(-\\theta\\) with scaling \\(1/r\\), as expected: the inverse of a rotation-scaling is a rotation in the opposite direction with reciprocal scaling.'
                },
                {
                    question: 'Prove that the \\(n\\)-th power of \\(C = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}\\) is \\(C^n = r^n \\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}\\), where \\(r = \\sqrt{a^2+b^2}\\) and \\(\\theta = \\arctan(b/a)\\).',
                    hint: 'Write \\(C = r R_\\theta\\) and use the fact that \\(R_\\theta^n = R_{n\\theta}\\).',
                    solution: '\\(C = r R_\\theta\\), so \\(C^n = r^n R_\\theta^n\\). Since \\(R_\\theta\\) is a rotation by \\(\\theta\\), composing it \\(n\\) times gives \\(R_{n\\theta}\\). Thus \\(C^n = r^n \\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Generalized Eigenvectors
        // ============================================================
        {
            id: 'ch12-sec03',
            title: 'Generalized Eigenvectors',
            content: `
<h2>12.3 Generalized Eigenvectors</h2>

<div class="env-block intuition">
    <div class="env-title">When Eigenvectors Are Not Enough</div>
    <div class="env-body">
        <p>In Chapter 11, we saw that not every matrix is diagonalizable. A matrix \\(A\\) is diagonalizable if and only if it has \\(n\\) linearly independent eigenvectors. When the geometric multiplicity falls short of the algebraic multiplicity for some eigenvalue, there are not enough eigenvectors to form a basis. Generalized eigenvectors fill this gap, providing the additional vectors needed to construct a "nearly diagonal" form.</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 12.3.1 (Generalized Eigenvector)</div>
    <div class="env-body">
        <p>Let \\(A\\) be an \\(n \\times n\\) matrix and \\(\\lambda\\) an eigenvalue. A nonzero vector \\(\\mathbf{v}\\) is a <strong>generalized eigenvector of rank \\(k\\)</strong> if</p>
        \\[
        (A - \\lambda I)^k \\mathbf{v} = \\mathbf{0} \\quad \\text{but} \\quad (A - \\lambda I)^{k-1} \\mathbf{v} \\neq \\mathbf{0}.
        \\]
        <p>A generalized eigenvector of rank 1 is an ordinary eigenvector.</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 12.3.2 (Generalized Eigenspace)</div>
    <div class="env-body">
        <p>The <strong>generalized eigenspace</strong> for eigenvalue \\(\\lambda\\) is</p>
        \\[
        G_\\lambda = \\ker(A - \\lambda I)^n = \\{\\mathbf{v} \\in \\mathbb{C}^n : (A - \\lambda I)^n \\mathbf{v} = \\mathbf{0}\\}.
        \\]
        <p>It suffices to use the exponent \\(n\\) (the matrix size), though the chain stabilizes at the algebraic multiplicity.</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.3.3</div>
    <div class="env-body">
        <p>Let \\(\\lambda\\) be an eigenvalue of \\(A\\) with algebraic multiplicity \\(m\\). Then:</p>
        <ol>
            <li>\\(\\dim G_\\lambda = m\\).</li>
            <li>The chain of subspaces \\(\\ker(A - \\lambda I) \\subseteq \\ker(A - \\lambda I)^2 \\subseteq \\cdots\\) stabilizes at or before step \\(m\\).</li>
            <li>\\(\\dim \\ker(A - \\lambda I) = \\) geometric multiplicity of \\(\\lambda\\).</li>
        </ol>
    </div>
</div>

<h3>Chains of Generalized Eigenvectors</h3>

<div class="env-block definition">
    <div class="env-title">Definition 12.3.4 (Jordan Chain)</div>
    <div class="env-body">
        <p>A <strong>Jordan chain</strong> of length \\(k\\) for eigenvalue \\(\\lambda\\) is a sequence of vectors \\(\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k\\) such that:</p>
        \\[
        (A - \\lambda I)\\mathbf{v}_1 = \\mathbf{0}, \\quad (A - \\lambda I)\\mathbf{v}_2 = \\mathbf{v}_1, \\quad \\ldots, \\quad (A - \\lambda I)\\mathbf{v}_k = \\mathbf{v}_{k-1}.
        \\]
        <p>Equivalently, \\(\\mathbf{v}_1\\) is an eigenvector, and each subsequent \\(\\mathbf{v}_j\\) satisfies \\((A - \\lambda I)^j \\mathbf{v}_j = \\mathbf{0}\\), \\((A - \\lambda I)^{j-1} \\mathbf{v}_j \\neq \\mathbf{0}\\).</p>
    </div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 12.3.5</div>
    <div class="env-body">
        <p>The vectors in a Jordan chain are linearly independent.</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Suppose \\(c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\cdots + c_k \\mathbf{v}_k = \\mathbf{0}\\). Apply \\((A - \\lambda I)^{k-1}\\): since \\((A - \\lambda I)^{k-1}\\mathbf{v}_j = \\mathbf{0}\\) for \\(j < k\\), and \\((A - \\lambda I)^{k-1}\\mathbf{v}_k = \\mathbf{v}_1 \\neq \\mathbf{0}\\), we get \\(c_k \\mathbf{v}_1 = \\mathbf{0}\\), so \\(c_k = 0\\). Applying \\((A - \\lambda I)^{k-2}\\) gives \\(c_{k-1} = 0\\), and continuing yields \\(c_j = 0\\) for all \\(j\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.3.6</div>
    <div class="env-body">
        <p>Consider \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\). The only eigenvalue is \\(\\lambda = 2\\) with algebraic multiplicity 2.</p>
        <p>\\(A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\). The eigenspace is \\(\\ker(A - 2I) = \\operatorname{span}\\{\\mathbf{e}_1\\}\\), so the geometric multiplicity is 1 (not enough for diagonalization).</p>
        <p>To find a generalized eigenvector, solve \\((A - 2I)\\mathbf{v}_2 = \\mathbf{v}_1 = \\mathbf{e}_1\\):</p>
        \\[
        \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\implies \\mathbf{v}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}.
        \\]
        <p>The Jordan chain is \\(\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\mathbf{v}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\). In the basis \\(\\{\\mathbf{v}_1, \\mathbf{v}_2\\}\\), the matrix is \\(\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\): a Jordan block.</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.3.7</div>
    <div class="env-body">
        <p>Consider \\(A = \\begin{pmatrix} 5 & 4 & 2 \\\\ -1 & 0 & -1 \\\\ 1 & 2 & 3 \\end{pmatrix}\\). One can verify that \\(\\lambda = 4\\) is an eigenvalue with algebraic multiplicity 2 and geometric multiplicity 1 (and \\(\\lambda = 0\\) has multiplicity 1).</p>
        <p>The eigenvector for \\(\\lambda = 4\\) is \\(\\mathbf{v}_1 = \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\end{pmatrix}\\). To find a generalized eigenvector, solve \\((A - 4I)\\mathbf{v}_2 = \\mathbf{v}_1\\). The Jordan chain gives us two vectors for the \\(\\lambda = 4\\) generalized eigenspace.</p>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-jordan-chain-action"></div>

<div class="env-block remark">
    <div class="env-title">Remark 12.3.8</div>
    <div class="env-body">
        <p>The key insight is how \\(A\\) acts on a Jordan chain. If \\(\\{\\mathbf{v}_1, \\mathbf{v}_2\\}\\) is a chain for \\(\\lambda\\), then:</p>
        \\[
        A\\mathbf{v}_1 = \\lambda \\mathbf{v}_1, \\qquad A\\mathbf{v}_2 = \\lambda \\mathbf{v}_2 + \\mathbf{v}_1.
        \\]
        <p>In the basis \\(\\{\\mathbf{v}_1, \\mathbf{v}_2\\}\\), this is the matrix \\(\\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}\\): the eigenvalue on the diagonal, with a 1 on the superdiagonal coupling the generalized eigenvector to the true eigenvector.</p>
    </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-jordan-chain-action',
                    title: 'Jordan Block Action on Generalized Eigenvectors',
                    description: 'Visualize how the Jordan block \\(J = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}\\) acts. The eigenvector \\(\\mathbf{v}_1\\) scales by \\(\\lambda\\), while the generalized eigenvector \\(\\mathbf{v}_2\\) both scales and "shears" toward \\(\\mathbf{v}_1\\). Click "Apply J" repeatedly to see the accumulation.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35 });

                        let lambda = 1.2;
                        let step = 0;
                        let points = [];

                        const sliderLam = VizEngine.createSlider(controls, '\u03BB', 0.3, 2.0, lambda, 0.1, v => {
                            lambda = v;
                            step = 0;
                            points = [];
                        });

                        const applyBtn = VizEngine.createButton(controls, 'Apply J', () => {
                            step++;
                        });

                        const resetBtn = VizEngine.createButton(controls, 'Reset', () => {
                            step = 0;
                            points = [];
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Show basis vectors
                            viz.drawVec(1, 0, viz.colors.muted + '88', 'v\u2081', 1.5);
                            viz.drawVec(0, 1, viz.colors.muted + '88', 'v\u2082', 1.5);

                            // The Jordan block J = [[lambda, 1], [0, lambda]]
                            // J^n * [0, 1]^T = [n * lambda^{n-1}, lambda^n]^T
                            // J^n * [1, 0]^T = [lambda^n, 0]^T

                            // Draw the eigenvector direction (x-axis)
                            viz.drawLine(0, 0, 1, 0, viz.colors.blue + '44', 1, true);
                            viz.screenText('Eigenspace (span v\u2081)', viz.width - 10, viz.height - 15, viz.colors.blue, 11, 'right');

                            // A starting point in the generalized eigenvector direction
                            const startX = 0, startY = 1;

                            // Compute J^step * (0, 1) and J^step * (1, 0)
                            // For v2 = (0, 1): J^n(0,1) = (n*lambda^{n-1}, lambda^n)
                            // For v1 = (1, 0): J^n(1,0) = (lambda^n, 0)

                            // Draw trajectory of v2 under repeated J application
                            const ctx = viz.ctx;
                            for (let k = 0; k <= step; k++) {
                                const lk = Math.pow(lambda, k);
                                const lk1 = k > 0 ? Math.pow(lambda, k - 1) : 0;
                                const px = k * lk1;
                                const py = lk;

                                if (k > 0) {
                                    const prevLk = Math.pow(lambda, k - 1);
                                    const prevLk1 = k > 1 ? Math.pow(lambda, k - 2) : 0;
                                    const prevPx = (k - 1) * prevLk1;
                                    const prevPy = prevLk;
                                    viz.drawSegment(prevPx, prevPy, px, py, viz.colors.orange + '66', 1, true);
                                }

                                const col = k === step ? viz.colors.orange : viz.colors.orange + '66';
                                const r = k === step ? 5 : 3;
                                viz.drawPoint(px, py, col, k === step ? 'J\u207F v\u2082' : '', r);
                            }

                            // Draw trajectory of v1
                            for (let k = 0; k <= step; k++) {
                                const lk = Math.pow(lambda, k);
                                const col = k === step ? viz.colors.blue : viz.colors.blue + '66';
                                const r = k === step ? 5 : 3;
                                viz.drawPoint(lk, 0, col, k === step ? 'J\u207F v\u2081' : '', r);
                            }

                            // Current state vector for generalized eigenvector
                            if (step > 0) {
                                const lk = Math.pow(lambda, step);
                                const lk1 = Math.pow(lambda, step - 1);
                                const px = step * lk1;
                                const py = lk;
                                viz.drawVec(px, py, viz.colors.orange, '', 2);
                                viz.drawVec(lk, 0, viz.colors.blue, '', 2);
                            }

                            // Info
                            viz.screenText('J = [[\u03BB, 1], [0, \u03BB]],  \u03BB = ' + lambda.toFixed(1), 12, 20, viz.colors.white, 13, 'left');
                            viz.screenText('Step n = ' + step, 12, 40, viz.colors.text, 12, 'left');
                            if (step > 0) {
                                const lk = Math.pow(lambda, step);
                                const lk1 = Math.pow(lambda, step - 1);
                                viz.screenText('J\u207F v\u2081 = (\u03BB\u207F, 0) = (' + lk.toFixed(2) + ', 0)', 12, 58, viz.colors.blue, 11, 'left');
                                viz.screenText('J\u207F v\u2082 = (n\u03BB\u207F\u207B\u00B9, \u03BB\u207F) = (' + (step * lk1).toFixed(2) + ', ' + lk.toFixed(2) + ')', 12, 74, viz.colors.orange, 11, 'left');
                            }

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find all generalized eigenvectors of \\(A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}\\).',
                    hint: 'Compute \\(A - 3I\\) and \\((A - 3I)^2\\). Find \\(\\ker(A - 3I)\\) and then solve \\((A - 3I)\\mathbf{v}_2 = \\mathbf{v}_1\\).',
                    solution: '\\(A - 3I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\). The eigenspace is \\(\\ker(A-3I) = \\operatorname{span}\\{\\mathbf{e}_1\\}\\). The generalized eigenvector satisfies \\((A-3I)\\mathbf{v}_2 = \\mathbf{e}_1\\), giving \\(\\mathbf{v}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\) (plus any multiple of \\(\\mathbf{e}_1\\)). Jordan chain: \\(\\mathbf{v}_1 = \\mathbf{e}_1\\), \\(\\mathbf{v}_2 = \\mathbf{e}_2\\).'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}\\). Find the Jordan chains for \\(\\lambda = 1\\).',
                    hint: 'Compute \\(A - I\\), \\((A - I)^2\\), \\((A - I)^3\\).',
                    solution: '\\(A - I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\), \\((A-I)^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}\\), \\((A-I)^3 = 0\\). We have \\(\\ker(A-I) = \\operatorname{span}\\{\\mathbf{e}_1\\}\\). Take \\(\\mathbf{v}_3 = \\mathbf{e}_3\\), then \\(\\mathbf{v}_2 = (A-I)\\mathbf{v}_3 = \\mathbf{e}_2\\), \\(\\mathbf{v}_1 = (A-I)\\mathbf{v}_2 = \\mathbf{e}_1\\). The chain of length 3 is \\(\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}\\).'
                },
                {
                    question: 'Show that if \\((A - \\lambda I)^k \\mathbf{v} = \\mathbf{0}\\), then \\((A - \\lambda I)^{k+1} \\mathbf{v} = \\mathbf{0}\\).',
                    hint: 'Multiply both sides of \\((A - \\lambda I)^k \\mathbf{v} = \\mathbf{0}\\) on the left by \\((A - \\lambda I)\\).',
                    solution: 'If \\((A - \\lambda I)^k \\mathbf{v} = \\mathbf{0}\\), then \\((A - \\lambda I)^{k+1} \\mathbf{v} = (A - \\lambda I) \\cdot (A - \\lambda I)^k \\mathbf{v} = (A - \\lambda I) \\cdot \\mathbf{0} = \\mathbf{0}\\). This shows that the kernels form a nested chain: \\(\\ker(A - \\lambda I)^k \\subseteq \\ker(A - \\lambda I)^{k+1}\\).'
                },
                {
                    question: 'Find the dimensions of \\(\\ker(A - 2I)\\), \\(\\ker(A - 2I)^2\\), and \\(\\ker(A - 2I)^3\\) for \\(A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}\\).',
                    hint: 'Compute the powers of \\(A - 2I\\) and find the null spaces.',
                    solution: '\\(A - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}\\). \\(\\ker(A-2I) = \\operatorname{span}\\{\\mathbf{e}_1, \\mathbf{e}_3\\}\\), dimension 2. \\((A-2I)^2 = 0\\), so \\(\\ker(A-2I)^2 = \\mathbb{R}^3\\), dimension 3. The chain stabilizes: dimensions are 2, 3, 3. The jump pattern (2, 1) tells us there is one chain of length 2 and one chain of length 1.'
                },
                {
                    question: 'Prove that generalized eigenvectors corresponding to <em>different</em> eigenvalues are linearly independent.',
                    hint: 'If \\(\\mathbf{v} \\in G_{\\lambda_1}\\) and \\(\\mathbf{w} \\in G_{\\lambda_2}\\) with \\(\\lambda_1 \\neq \\lambda_2\\), suppose \\(c_1 \\mathbf{v} + c_2 \\mathbf{w} = \\mathbf{0}\\). Apply \\((A - \\lambda_1 I)^n\\).',
                    solution: 'Suppose \\(c_1 \\mathbf{v} + c_2 \\mathbf{w} = \\mathbf{0}\\) with \\(\\mathbf{v} \\in G_{\\lambda_1}\\), \\(\\mathbf{w} \\in G_{\\lambda_2}\\). Apply \\((A - \\lambda_1 I)^n\\): since \\(\\mathbf{v} \\in G_{\\lambda_1}\\), the first term vanishes. For the second, \\((A - \\lambda_1 I)^n \\mathbf{w} \\neq \\mathbf{0}\\) because \\(\\lambda_1 \\neq \\lambda_2\\) (one can show this using the fact that \\((A - \\lambda_1 I)\\) restricted to \\(G_{\\lambda_2}\\) is invertible). Thus \\(c_2 = 0\\), and similarly \\(c_1 = 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Jordan Normal Form
        // ============================================================
        {
            id: 'ch12-sec04',
            title: 'Jordan Normal Form',
            content: `
<h2>12.4 Jordan Normal Form</h2>

<p>The Jordan normal form is the "best" form to which any square matrix can be reduced by a similarity transformation. When a matrix is not diagonalizable, the Jordan form provides the next simplest representation.</p>

<div class="env-block definition">
    <div class="env-title">Definition 12.4.1 (Jordan Block)</div>
    <div class="env-body">
        <p>A <strong>Jordan block</strong> of size \\(k\\) with eigenvalue \\(\\lambda\\) is the \\(k \\times k\\) matrix</p>
        \\[
        J_k(\\lambda) = \\begin{pmatrix}
        \\lambda & 1 & 0 & \\cdots & 0 \\\\
        0 & \\lambda & 1 & \\cdots & 0 \\\\
        \\vdots & & \\ddots & \\ddots & \\vdots \\\\
        0 & 0 & \\cdots & \\lambda & 1 \\\\
        0 & 0 & \\cdots & 0 & \\lambda
        \\end{pmatrix}.
        \\]
        <p>That is, \\(J_k(\\lambda) = \\lambda I + N\\) where \\(N\\) has 1's on the superdiagonal and 0's elsewhere.</p>
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body">
        <p>A \\(1 \\times 1\\) Jordan block \\(J_1(\\lambda) = (\\lambda)\\) is simply the eigenvalue itself. A diagonalizable matrix has Jordan form consisting entirely of \\(1 \\times 1\\) blocks.</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.4.2 (Jordan Normal Form)</div>
    <div class="env-body">
        <p>Let \\(A\\) be an \\(n \\times n\\) matrix over \\(\\mathbb{C}\\). Then there exists an invertible matrix \\(P\\) such that</p>
        \\[
        P^{-1}AP = J = \\begin{pmatrix}
        J_{k_1}(\\lambda_1) & & \\\\
        & \\ddots & \\\\
        & & J_{k_r}(\\lambda_r)
        \\end{pmatrix},
        \\]
        <p>where \\(\\lambda_1, \\ldots, \\lambda_r\\) are eigenvalues of \\(A\\) (not necessarily distinct) and \\(k_1 + \\cdots + k_r = n\\). This block-diagonal matrix \\(J\\) is called the <strong>Jordan normal form</strong> of \\(A\\). It is unique up to permutation of the blocks.</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (sketch)</div>
    <div class="env-body">
        <p>The proof proceeds in several steps:</p>
        <ol>
            <li>Decompose \\(\\mathbb{C}^n = G_{\\lambda_1} \\oplus G_{\\lambda_2} \\oplus \\cdots \\oplus G_{\\lambda_s}\\) into generalized eigenspaces (one for each distinct eigenvalue).</li>
            <li>Within each \\(G_{\\lambda_j}\\), find a basis of Jordan chains. The nilpotent map \\(N = (A - \\lambda_j I)|_{G_{\\lambda_j}}\\) can be reduced to a block-diagonal form with nilpotent Jordan blocks \\(J_k(0)\\). (This follows from the structure theorem for nilpotent operators.)</li>
            <li>Combining these bases gives the matrix \\(P\\) whose columns are the Jordan chain vectors, and the resulting form is the block-diagonal Jordan form \\(J\\).</li>
        </ol>
        <p>Uniqueness follows from the fact that the Jordan block structure is determined by the sequence of dimensions \\(\\dim \\ker(A - \\lambda I)^k\\) for \\(k = 1, 2, \\ldots\\)</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<h3>Determining the Jordan Structure</h3>

<div class="env-block proposition">
    <div class="env-title">Proposition 12.4.3 (Reading the Jordan Structure)</div>
    <div class="env-body">
        <p>For each eigenvalue \\(\\lambda\\), let \\(r_k = \\operatorname{rank}(A - \\lambda I)^k\\) and \\(n_k = \\dim \\ker(A - \\lambda I)^k\\). Then:</p>
        <ul>
            <li>The number of Jordan blocks for \\(\\lambda\\) is \\(n_1 = \\dim \\ker(A - \\lambda I)\\) (the geometric multiplicity).</li>
            <li>The number of blocks of size \\(\\ge k\\) is \\(n_k - n_{k-1}\\) (for \\(k \\ge 2\\), with \\(n_0 = 0\\)).</li>
            <li>The number of blocks of size exactly \\(k\\) is \\((n_k - n_{k-1}) - (n_{k+1} - n_k) = 2n_k - n_{k-1} - n_{k+1}\\).</li>
        </ul>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.4.4</div>
    <div class="env-body">
        <p>Consider a \\(6 \\times 6\\) matrix \\(A\\) with \\(\\lambda = 2\\) as the only eigenvalue (algebraic multiplicity 6). Suppose:</p>
        \\[
        \\dim\\ker(A-2I) = 3, \\quad \\dim\\ker(A-2I)^2 = 5, \\quad \\dim\\ker(A-2I)^3 = 6.
        \\]
        <p>Increments: \\(\\Delta_1 = 3, \\Delta_2 = 2, \\Delta_3 = 1\\). Number of blocks of each size:</p>
        <ul>
            <li>Size \\(\\ge 1\\): 3 blocks. Size \\(\\ge 2\\): 2 blocks. Size \\(\\ge 3\\): 1 block.</li>
            <li>Size exactly 1: \\(3 - 2 = 1\\). Size exactly 2: \\(2 - 1 = 1\\). Size exactly 3: \\(1\\).</li>
        </ul>
        <p>Jordan form: \\(J = J_3(2) \\oplus J_2(2) \\oplus J_1(2)\\).</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.4.5</div>
    <div class="env-body">
        <p>Find the Jordan form of \\(A = \\begin{pmatrix} 5 & 4 & 2 & 1 \\\\ 0 & 1 & -1 & -1 \\\\ -1 & -1 & 3 & 0 \\\\ 1 & 1 & -1 & 2 \\end{pmatrix}\\).</p>
        <p>Step 1: \\(p(\\lambda) = (\\lambda - 1)(\\lambda - 2)(\\lambda - 4)^2\\) (computed by expanding \\(\\det(A - \\lambda I)\\)).</p>
        <p>Step 2: For \\(\\lambda = 4\\): \\(\\operatorname{rank}(A - 4I) = 3\\), so \\(\\dim\\ker(A-4I) = 1\\). Since algebraic multiplicity is 2 but geometric is 1, we need a \\(J_2(4)\\) block.</p>
        <p>Step 3: For \\(\\lambda = 1\\) and \\(\\lambda = 2\\): algebraic = geometric = 1, so each gets a \\(J_1\\) block.</p>
        <p>Jordan form: \\(J = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 2 & 0 & 0 \\\\ 0 & 0 & 4 & 1 \\\\ 0 & 0 & 0 & 4 \\end{pmatrix}\\).</p>
    </div>
</div>

<div class="env-block warning">
    <div class="env-title">Common Mistakes</div>
    <div class="env-body">
        <ul>
            <li>Confusing algebraic and geometric multiplicity: the algebraic multiplicity determines the total block sizes, while the geometric multiplicity counts the number of blocks.</li>
            <li>Forgetting that Jordan form is unique only up to permutation of blocks.</li>
            <li>Assuming every matrix is diagonalizable. A matrix is diagonalizable if and only if all Jordan blocks are \\(1 \\times 1\\), i.e., geometric = algebraic multiplicity for every eigenvalue.</li>
        </ul>
    </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find all possible Jordan forms for a \\(4 \\times 4\\) matrix with characteristic polynomial \\((\\lambda - 3)^4\\).',
                    hint: 'The eigenvalue is \\(\\lambda = 3\\) with algebraic multiplicity 4. Consider all possible partitions of 4.',
                    solution: 'The partitions of 4 give the block structures: (i) \\(J_4(3)\\): one block of size 4 (geometric multiplicity 1). (ii) \\(J_3(3) \\oplus J_1(3)\\): blocks of sizes 3+1 (geom. mult. 2). (iii) \\(J_2(3) \\oplus J_2(3)\\): two blocks of size 2 (geom. mult. 2). (iv) \\(J_2(3) \\oplus J_1(3) \\oplus J_1(3)\\): blocks of sizes 2+1+1 (geom. mult. 3). (v) \\(J_1(3)^{\\oplus 4}\\): four \\(1 \\times 1\\) blocks (diagonalizable, geom. mult. 4).'
                },
                {
                    question: 'Compute \\(J_3(2)^n\\) for a general positive integer \\(n\\).',
                    hint: 'Write \\(J_3(2) = 2I + N\\) where \\(N\\) is nilpotent with \\(N^3 = 0\\). Use the binomial theorem.',
                    solution: '\\(J_3(2)^n = (2I + N)^n = \\sum_{k=0}^{2} \\binom{n}{k} 2^{n-k} N^k\\) (terms with \\(k \\ge 3\\) vanish since \\(N^3 = 0\\)). Thus \\(J_3(2)^n = 2^n I + n \\cdot 2^{n-1} N + \\binom{n}{2} 2^{n-2} N^2 = \\begin{pmatrix} 2^n & n \\cdot 2^{n-1} & \\binom{n}{2} 2^{n-2} \\\\ 0 & 2^n & n \\cdot 2^{n-1} \\\\ 0 & 0 & 2^n \\end{pmatrix}\\).'
                },
                {
                    question: 'A \\(5 \\times 5\\) matrix has eigenvalue \\(\\lambda = 0\\) with algebraic multiplicity 5. The dimensions of \\(\\ker A, \\ker A^2, \\ker A^3\\) are 2, 4, 5. Find the Jordan form.',
                    hint: 'Compute the increments: \\(\\Delta_1 = 2, \\Delta_2 = 2, \\Delta_3 = 1\\).',
                    solution: 'Increments: \\(\\Delta_1 = 2, \\Delta_2 = 2, \\Delta_3 = 1\\). Blocks of size \\(\\ge 1\\): 2. Size \\(\\ge 2\\): 2. Size \\(\\ge 3\\): 1. Blocks of size exactly 1: \\(2-2 = 0\\). Size exactly 2: \\(2-1 = 1\\). Size exactly 3: 1. Jordan form: \\(J_3(0) \\oplus J_2(0)\\).'
                },
                {
                    question: 'Show that similar matrices have the same Jordan form.',
                    hint: 'If \\(B = Q^{-1}AQ\\) and \\(P^{-1}AP = J\\), find a matrix that puts \\(B\\) in Jordan form.',
                    solution: '\\(B = Q^{-1}AQ\\), so \\(A = QBQ^{-1}\\). Then \\(J = P^{-1}AP = P^{-1}QBQ^{-1}P = (Q^{-1}P)^{-1} B (Q^{-1}P)\\). Thus \\(B\\) is also similar to \\(J\\). Since the Jordan form is unique (up to block ordering), \\(A\\) and \\(B\\) share the same Jordan form.'
                },
                {
                    question: 'Is \\(A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\) similar to \\(B = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}\\)?',
                    hint: 'Both have eigenvalue 0 with algebraic multiplicity 2. Compare the geometric multiplicities.',
                    solution: 'For \\(A\\): eigenvalue 0, geometric multiplicity \\(= \\dim\\ker A = 1\\). For \\(B\\): eigenvalue 0, geometric multiplicity \\(= \\dim\\ker B = 2\\). Since they have different geometric multiplicities, their Jordan forms differ (\\(A\\) is already in Jordan form \\(J_2(0)\\), while \\(B = J_1(0) \\oplus J_1(0)\\)). Therefore \\(A\\) and \\(B\\) are <em>not</em> similar.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Matrix Exponential Preview
        // ============================================================
        {
            id: 'ch12-sec05',
            title: 'Matrix Exponential Preview',
            content: `
<h2>12.5 Matrix Exponential Preview</h2>

<div class="env-block intuition">
    <div class="env-title">Why the Matrix Exponential?</div>
    <div class="env-body">
        <p>The scalar differential equation \\(y' = ay\\) has solution \\(y(t) = e^{at} y(0)\\). What about a system \\(\\mathbf{x}'(t) = A\\mathbf{x}(t)\\)? The answer is \\(\\mathbf{x}(t) = e^{At}\\mathbf{x}(0)\\), where \\(e^{At}\\) is the <em>matrix exponential</em>. The Jordan form makes this computable.</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 12.5.1 (Matrix Exponential)</div>
    <div class="env-body">
        <p>For an \\(n \\times n\\) matrix \\(A\\), the <strong>matrix exponential</strong> is defined by the power series</p>
        \\[
        e^A = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!} = I + A + \\frac{A^2}{2!} + \\frac{A^3}{3!} + \\cdots
        \\]
        <p>This series converges for every matrix \\(A\\) (with respect to any matrix norm).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.5.2 (Properties of the Matrix Exponential)</div>
    <div class="env-body">
        <ol>
            <li>\\(e^{0} = I\\).</li>
            <li>If \\(AB = BA\\), then \\(e^{A+B} = e^A e^B\\).</li>
            <li>\\(e^A\\) is always invertible, with \\((e^A)^{-1} = e^{-A}\\).</li>
            <li>\\(\\frac{d}{dt} e^{At} = A e^{At} = e^{At} A\\).</li>
            <li>If \\(A = PJP^{-1}\\), then \\(e^{At} = P e^{Jt} P^{-1}\\).</li>
        </ol>
    </div>
</div>

<h3>Exponential of a Diagonal Matrix</h3>

<p>If \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then</p>
\\[
e^{Dt} = \\operatorname{diag}(e^{\\lambda_1 t}, \\ldots, e^{\\lambda_n t}).
\\]

<h3>Exponential of a Jordan Block</h3>

<div class="env-block proposition">
    <div class="env-title">Proposition 12.5.3</div>
    <div class="env-body">
        <p>For the Jordan block \\(J_k(\\lambda) = \\lambda I + N\\), where \\(N\\) is the nilpotent superdiagonal matrix with \\(N^k = 0\\):</p>
        \\[
        e^{J_k(\\lambda) t} = e^{\\lambda t} \\sum_{j=0}^{k-1} \\frac{t^j}{j!} N^j = e^{\\lambda t} \\begin{pmatrix}
        1 & t & \\frac{t^2}{2!} & \\cdots & \\frac{t^{k-1}}{(k-1)!} \\\\
        0 & 1 & t & \\cdots & \\frac{t^{k-2}}{(k-2)!} \\\\
        \\vdots & & \\ddots & \\ddots & \\vdots \\\\
        0 & 0 & \\cdots & 1 & t \\\\
        0 & 0 & \\cdots & 0 & 1
        \\end{pmatrix}.
        \\]
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Since \\(\\lambda I\\) and \\(N\\) commute, \\(e^{J_k(\\lambda)t} = e^{\\lambda t I} \\cdot e^{Nt} = e^{\\lambda t} \\cdot e^{Nt}\\). Now \\(e^{Nt} = \\sum_{j=0}^{\\infty} \\frac{(Nt)^j}{j!}\\), and since \\(N^k = 0\\), the sum is finite: \\(e^{Nt} = \\sum_{j=0}^{k-1} \\frac{t^j}{j!} N^j\\). The matrix \\(N^j\\) has 1's on the \\(j\\)-th superdiagonal and 0's elsewhere, which gives the stated form.</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.5.4</div>
    <div class="env-body">
        <p>For the \\(2 \\times 2\\) Jordan block \\(J_2(3) = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}\\):</p>
        \\[
        e^{J_2(3) t} = e^{3t} \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} e^{3t} & t e^{3t} \\\\ 0 & e^{3t} \\end{pmatrix}.
        \\]
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.5.5</div>
    <div class="env-body">
        <p>For the rotation-scaling block \\(C = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}\\) (from a complex eigenvalue \\(\\lambda = a + bi\\)):</p>
        \\[
        e^{Ct} = e^{at} \\begin{pmatrix} \\cos(bt) & -\\sin(bt) \\\\ \\sin(bt) & \\cos(bt) \\end{pmatrix}.
        \\]
        <p>This is an exponentially modulated rotation: the system spirals with angular velocity \\(b\\) and growth/decay rate \\(a\\).</p>
    </div>
</div>

<h3>Application: Linear ODE Systems</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.5.6</div>
    <div class="env-body">
        <p>The initial value problem \\(\\mathbf{x}'(t) = A\\mathbf{x}(t)\\), \\(\\mathbf{x}(0) = \\mathbf{x}_0\\) has the unique solution</p>
        \\[
        \\mathbf{x}(t) = e^{At} \\mathbf{x}_0.
        \\]
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 12.5.7</div>
    <div class="env-body">
        <p>Solve \\(\\mathbf{x}' = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\mathbf{x}\\), \\(\\mathbf{x}(0) = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\).</p>
        <p>Here \\(A\\) has eigenvalues \\(\\pm i\\), so \\(a = 0, b = 1\\):</p>
        \\[
        \\mathbf{x}(t) = e^{At} \\mathbf{x}_0 = \\begin{pmatrix} \\cos t & -\\sin t \\\\ \\sin t & \\cos t \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} \\cos t \\\\ \\sin t \\end{pmatrix}.
        \\]
        <p>This is uniform circular motion, as expected from a pure rotation matrix.</p>
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Stability and Eigenvalues</div>
    <div class="env-body">
        <p>The long-term behavior of \\(\\mathbf{x}(t) = e^{At}\\mathbf{x}_0\\) is determined by the eigenvalues of \\(A\\):</p>
        <ul>
            <li>If all eigenvalues have \\(\\operatorname{Re}(\\lambda) < 0\\): the origin is <em>asymptotically stable</em> (solutions decay to 0).</li>
            <li>If any eigenvalue has \\(\\operatorname{Re}(\\lambda) > 0\\): the origin is <em>unstable</em> (solutions grow).</li>
            <li>If all eigenvalues have \\(\\operatorname{Re}(\\lambda) \\le 0\\) and those with \\(\\operatorname{Re}(\\lambda) = 0\\) have \\(1 \\times 1\\) Jordan blocks: the origin is <em>stable</em> (bounded but not necessarily decaying).</li>
        </ul>
    </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Compute \\(e^{At}\\) for \\(A = \\begin{pmatrix} 2 & 0 \\\\ 0 & -1 \\end{pmatrix}\\).',
                    hint: 'For a diagonal matrix, exponentiate each diagonal entry.',
                    solution: '\\(e^{At} = \\begin{pmatrix} e^{2t} & 0 \\\\ 0 & e^{-t} \\end{pmatrix}\\).'
                },
                {
                    question: 'Compute \\(e^{At}\\) for \\(A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\).',
                    hint: 'This is a Jordan block \\(J_2(1)\\).',
                    solution: '\\(A = J_2(1)\\). So \\(e^{At} = e^t \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} e^t & te^t \\\\ 0 & e^t \\end{pmatrix}\\).'
                },
                {
                    question: 'Solve \\(\\mathbf{x}\\prime = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}\\mathbf{x}\\), \\(\\mathbf{x}(0) = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}\\).',
                    hint: 'The eigenvalues are \\(\\pm 2i\\). Use the rotation formula for \\(e^{At}\\).',
                    solution: '\\(a = 0, b = 2\\). \\(e^{At} = \\begin{pmatrix} \\cos(2t) & -\\sin(2t) \\\\ \\sin(2t) & \\cos(2t) \\end{pmatrix}\\). So \\(\\mathbf{x}(t) = \\begin{pmatrix} 3\\cos(2t) \\\\ 3\\sin(2t) \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that \\(e^A e^{-A} = I\\) for any square matrix \\(A\\).',
                    hint: 'Use Property 2 of Theorem 12.5.2 with \\(B = -A\\). Note that \\(A\\) and \\(-A\\) commute.',
                    solution: 'Since \\(A(-A) = (-A)A\\), we can apply Property 2: \\(e^A e^{-A} = e^{A + (-A)} = e^0 = I\\). Similarly \\(e^{-A}e^A = I\\). Thus \\((e^A)^{-1} = e^{-A}\\).'
                },
                {
                    question: 'Classify the stability of the origin for \\(\\mathbf{x}\\prime = \\begin{pmatrix} -1 & 4 \\\\ -1 & -1 \\end{pmatrix}\\mathbf{x}\\).',
                    hint: 'Find the eigenvalues and check the real parts.',
                    solution: 'Characteristic polynomial: \\(\\lambda^2 + 2\\lambda + 5 = 0\\), giving \\(\\lambda = -1 \\pm 2i\\). Since \\(\\operatorname{Re}(\\lambda) = -1 < 0\\) for both eigenvalues, the origin is asymptotically stable. Solutions spiral inward toward the origin.'
                },
                {
                    question: 'Compute \\(e^{At}\\) for \\(A = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\).',
                    hint: 'This is a Jordan block \\(J_3(0)\\). Since \\(\\lambda = 0\\), the exponential factor is \\(e^{0 \\cdot t} = 1\\).',
                    solution: '\\(A = J_3(0)\\), so \\(e^{At} = I + tA + \\frac{t^2}{2}A^2 = \\begin{pmatrix} 1 & t & t^2/2 \\\\ 0 & 1 & t \\\\ 0 & 0 & 1 \\end{pmatrix}\\). Note \\(A^3 = 0\\) makes the series finite.'
                }
            ]
        }
    ]
});
