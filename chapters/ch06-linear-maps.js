window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Linear Maps',
    subtitle: 'Functions that respect the vector space structure',
    sections: [
        // ============================================================
        // Section 1: Definition and Examples
        // ============================================================
        {
            id: 'ch06-sec01',
            title: 'Definition and Examples',
            content: `
                <h2>Definition and Examples</h2>

                <div class="env-block motivation">
                    <div class="env-title">Why Linear Maps?</div>
                    <div class="env-body">
                        <p>Vector spaces are the objects of linear algebra, but to understand them deeply we need the <em>maps</em> between them. A linear map is a function between vector spaces that respects both addition and scalar multiplication. These maps are the backbone of the entire subject: every matrix defines a linear map, every system of linear equations is secretly about a linear map, and the deepest structural theorems (rank-nullity, spectral decomposition, SVD) are all statements about linear maps.</p>
                        <p><strong>Chapter roadmap:</strong> We define linear maps and explore key examples (rotation, projection, differentiation), then study their kernel and image, prove the Dimension Theorem, classify maps as injective/surjective/invertible, and finally connect finite-dimensional spaces to \\(\\mathbb{R}^n\\) via isomorphisms.</p>
                    </div>
                </div>

                <p>We begin with the central definition of this chapter.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 (Linear Map)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) and \\(W\\) be vector spaces over a field \\(F\\). A function \\(T: V \\to W\\) is called a <strong>linear map</strong> (or <strong>linear transformation</strong>) if for all \\(u, v \\in V\\) and all \\(\\alpha, \\beta \\in F\\),</p>
                        \\[T(\\alpha u + \\beta v) = \\alpha\\, T(u) + \\beta\\, T(v).\\]
                        <p>Equivalently, \\(T\\) satisfies two separate conditions:</p>
                        <ol>
                            <li><strong>Additivity:</strong> \\(T(u + v) = T(u) + T(v)\\) for all \\(u, v \\in V\\).</li>
                            <li><strong>Homogeneity:</strong> \\(T(\\alpha v) = \\alpha\\, T(v)\\) for all \\(\\alpha \\in F\\), \\(v \\in V\\).</li>
                        </ol>
                        <p>We write \\(\\mathcal{L}(V, W)\\) for the set of all linear maps from \\(V\\) to \\(W\\), and \\(\\mathcal{L}(V)\\) when \\(V = W\\) (in which case elements are called <strong>linear operators</strong>).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>A linear map preserves the two fundamental operations of a vector space. Geometrically, lines through the origin map to lines through the origin (or collapse to the origin), and the grid of the domain deforms but stays "straight" and "evenly spaced" in the image. The origin always maps to the origin.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.1 (Elementary Properties)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map. Then:</p>
                        <ol>
                            <li>\\(T(0_V) = 0_W\\).</li>
                            <li>\\(T(-v) = -T(v)\\) for all \\(v \\in V\\).</li>
                            <li>\\(T\\!\\left(\\sum_{i=1}^{n} \\alpha_i v_i\\right) = \\sum_{i=1}^{n} \\alpha_i\\, T(v_i)\\) for any finite linear combination.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) \\(T(0_V) = T(0 \\cdot v) = 0 \\cdot T(v) = 0_W\\) for any \\(v \\in V\\).</p>
                        <p>(2) \\(T(-v) = T((-1)v) = (-1)T(v) = -T(v)\\).</p>
                        <p>(3) Induction on \\(n\\). The base case \\(n = 1\\) is homogeneity. For the inductive step, write \\(\\sum_{i=1}^{n} \\alpha_i v_i = \\left(\\sum_{i=1}^{n-1} \\alpha_i v_i\\right) + \\alpha_n v_n\\), apply additivity, then the inductive hypothesis and homogeneity.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.1 (Rotation in \\(\\mathbb{R}^2\\))</div>
                    <div class="env-body">
                        <p>Fix an angle \\(\\theta\\). The map \\(R_\\theta: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) defined by</p>
                        \\[R_\\theta(x, y) = (x\\cos\\theta - y\\sin\\theta,\\; x\\sin\\theta + y\\cos\\theta)\\]
                        <p>is linear. It has matrix</p>
                        \\[\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}.\\]
                        <p>Since \\(\\det R_\\theta = 1\\) for all \\(\\theta\\), rotations preserve area and orientation.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.2 (Orthogonal Projection)</div>
                    <div class="env-body">
                        <p>Let \\(\\ell\\) be a line through the origin in \\(\\mathbb{R}^2\\) with unit direction \\(\\hat{u}\\). The orthogonal projection onto \\(\\ell\\) is</p>
                        \\[P_\\ell(v) = (v \\cdot \\hat{u})\\,\\hat{u}.\\]
                        <p>Linearity: \\(P_\\ell(\\alpha v + \\beta w) = ((\\alpha v + \\beta w) \\cdot \\hat{u})\\,\\hat{u} = \\alpha(v \\cdot \\hat{u})\\hat{u} + \\beta(w \\cdot \\hat{u})\\hat{u} = \\alpha P_\\ell(v) + \\beta P_\\ell(w)\\).</p>
                        <p>Note that \\(P_\\ell^2 = P_\\ell\\) (projecting twice is the same as projecting once).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.3 (Differentiation)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{P}_n\\) denote the space of real polynomials of degree at most \\(n\\). The differentiation operator \\(D: \\mathcal{P}_n \\to \\mathcal{P}_{n-1}\\) defined by \\(D(p) = p'\\) is linear:</p>
                        \\[D(\\alpha p + \\beta q) = (\\alpha p + \\beta q)' = \\alpha p' + \\beta q' = \\alpha D(p) + \\beta D(q).\\]
                        <p>This is an example where \\(V \\neq W\\) (the domain and codomain have different dimensions).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.4 (Reflection and Shear)</div>
                    <div class="env-body">
                        <p><strong>Reflection</strong> across the \\(x\\)-axis: \\(T(x,y) = (x, -y)\\), with matrix \\(\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\).</p>
                        <p><strong>Shear</strong> in the \\(x\\)-direction by factor \\(k\\): \\(T(x,y) = (x + ky, y)\\), with matrix \\(\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}\\).</p>
                        <p>Both are linear (verify by checking the defining property).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch06-transform-explorer"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.1 (Extension Principle)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) and \\(W\\) be vector spaces over \\(F\\), and let \\(\\{v_1, \\ldots, v_n\\}\\) be a basis for \\(V\\). For any choice of vectors \\(w_1, \\ldots, w_n \\in W\\), there exists a <em>unique</em> linear map \\(T: V \\to W\\) satisfying \\(T(v_i) = w_i\\) for each \\(i\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Existence.</strong> Every \\(v \\in V\\) has a unique expansion \\(v = \\sum_{i=1}^n \\alpha_i v_i\\). Define \\(T(v) = \\sum_{i=1}^n \\alpha_i w_i\\). This is well-defined by uniqueness of the basis expansion. To check linearity, let \\(v = \\sum \\alpha_i v_i\\) and \\(u = \\sum \\beta_i v_i\\). Then</p>
                        \\[T(\\alpha v + \\beta u) = T\\!\\left(\\sum_i (\\alpha\\alpha_i + \\beta\\beta_i) v_i\\right) = \\sum_i (\\alpha\\alpha_i + \\beta\\beta_i) w_i = \\alpha \\sum_i \\alpha_i w_i + \\beta \\sum_i \\beta_i w_i = \\alpha T(v) + \\beta T(u).\\]
                        <p><strong>Uniqueness.</strong> If \\(S: V \\to W\\) is another linear map with \\(S(v_i) = w_i\\), then for any \\(v = \\sum \\alpha_i v_i\\),</p>
                        \\[S(v) = \\sum_i \\alpha_i S(v_i) = \\sum_i \\alpha_i w_i = T(v).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The Extension Principle tells us that a linear map from a finite-dimensional space is completely determined by what it does to a basis. This is one of the most useful facts in linear algebra: to define \\(T\\), just specify \\(T(v_1), \\ldots, T(v_n)\\); linearity forces everything else.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Not every function between vector spaces is linear! For instance, \\(T(x,y) = (x^2, y)\\) fails homogeneity: \\(T(2,0) = (4,0) \\neq 2\\,(1,0) = 2\\,T(1,0)\\). Similarly, translations \\(T(v) = v + b\\) with \\(b \\neq 0\\) are not linear because \\(T(0) = b \\neq 0\\).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.2 (\\(\\mathcal{L}(V,W)\\) is a Vector Space)</div>
                    <div class="env-body">
                        <p>Let \\(V, W\\) be vector spaces over \\(F\\). Define addition and scalar multiplication on \\(\\mathcal{L}(V,W)\\) pointwise:</p>
                        \\[(T + S)(v) = T(v) + S(v), \\qquad (\\alpha T)(v) = \\alpha\\, T(v).\\]
                        <p>Then \\(\\mathcal{L}(V,W)\\) is itself a vector space over \\(F\\). If \\(\\dim V = n\\) and \\(\\dim W = m\\), then \\(\\dim \\mathcal{L}(V,W) = mn\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The vector space axioms are inherited from \\(W\\). The zero element is the zero map \\(v \\mapsto 0_W\\). The dimension claim follows from the Extension Principle: a linear map \\(T: V \\to W\\) is determined by the \\(n\\) images \\(T(v_i) \\in W\\), and each image lives in the \\(m\\)-dimensional space \\(W\\), giving \\(mn\\) free parameters.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ch06-transform-explorer',
                    title: 'Interactive Linear Transformation Explorer',
                    description: 'Choose a transformation type and adjust its parameters. Watch how the grid and unit square deform. Drag the pink test vector to see where it maps.',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {width: 560, height: 420, scale: 45});

                        const state = { type: 'rotation', angle: 0.5, k: 1.0, sx: 1.5, sy: 1.0 };

                        // Type selector
                        const typeDiv = document.createElement('div');
                        typeDiv.style.cssText = 'margin-bottom:8px;display:flex;gap:4px;flex-wrap:wrap;';
                        const types = [
                            ['rotation', 'Rotation'], ['projection', 'Projection'],
                            ['reflection', 'Reflection'], ['shear', 'Shear'],
                            ['scaling', 'Scaling']
                        ];
                        types.forEach(([val, label]) => {
                            const btn = document.createElement('button');
                            btn.textContent = label;
                            btn.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:' + (val === state.type ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            btn.addEventListener('click', () => {
                                state.type = val;
                                typeDiv.querySelectorAll('button').forEach(b => b.style.background = '#1a1a40');
                                btn.style.background = '#58a6ff33';
                                updateSliderVisibility();
                                draw();
                            });
                            typeDiv.appendChild(btn);
                        });
                        controls.appendChild(typeDiv);

                        const angleSlider = VizEngine.createSlider(controls, 'Angle (rad)', -3.14, 3.14, 0.5, 0.05, v => { state.angle = v; draw(); });
                        const kSlider = VizEngine.createSlider(controls, 'Shear factor k', -2, 2, 1.0, 0.1, v => { state.k = v; draw(); });
                        const sxSlider = VizEngine.createSlider(controls, 'Scale x', -2, 2, 1.5, 0.1, v => { state.sx = v; draw(); });
                        const sySlider = VizEngine.createSlider(controls, 'Scale y', -2, 2, 1.0, 0.1, v => { state.sy = v; draw(); });

                        function updateSliderVisibility() {
                            const t = state.type;
                            angleSlider.parentElement.style.display = (t === 'rotation' || t === 'projection' || t === 'reflection') ? '' : 'none';
                            kSlider.parentElement.style.display = (t === 'shear') ? '' : 'none';
                            sxSlider.parentElement.style.display = (t === 'scaling') ? '' : 'none';
                            sySlider.parentElement.style.display = (t === 'scaling') ? '' : 'none';
                        }
                        updateSliderVisibility();

                        const testVec = viz.addDraggable('tv', 1.5, 1.0, viz.colors.pink, 8, () => draw());

                        function getMatrix() {
                            const t = state.type, a = state.angle;
                            const c = Math.cos(a), s = Math.sin(a);
                            if (t === 'rotation') return [[c, -s], [s, c]];
                            if (t === 'projection') return [[c*c, c*s], [c*s, s*s]];
                            if (t === 'reflection') return [[c*c - s*s, 2*c*s], [2*c*s, s*s - c*c]];
                            if (t === 'shear') return [[1, state.k], [0, 1]];
                            if (t === 'scaling') return [[state.sx, 0], [0, state.sy]];
                            return [[1,0],[0,1]];
                        }

                        function draw() {
                            const M = getMatrix();
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Original unit square (ghost)
                            viz.drawPolygon([[0,0],[1,0],[1,1],[0,1]], viz.colors.blue + '15', viz.colors.blue + '33', 1);

                            // Transformed grid
                            viz.drawTransformedGrid(M, 5, viz.colors.teal + '30', 0.6);

                            // Transformed unit square
                            viz.drawTransformedUnitSquare(M, viz.colors.teal + '33', viz.colors.teal, 2);

                            // Transformed basis vectors
                            const Te1 = VizEngine.matVec(M, [1, 0]);
                            const Te2 = VizEngine.matVec(M, [0, 1]);
                            viz.drawVector(0, 0, Te1[0], Te1[1], viz.colors.orange, 'T(e\u2081)', 2.5);
                            viz.drawVector(0, 0, Te2[0], Te2[1], viz.colors.purple, 'T(e\u2082)', 2.5);

                            // Test vector and its image
                            const v = [testVec.x, testVec.y];
                            const Tv = VizEngine.matVec(M, v);
                            viz.drawVector(0, 0, v[0], v[1], viz.colors.pink, 'v', 2);
                            viz.drawVector(0, 0, Tv[0], Tv[1], viz.colors.yellow, 'T(v)', 2.5);

                            // Info
                            const det = VizEngine.det2(M);
                            viz.screenText('det = ' + det.toFixed(3), 10, 20, viz.colors.text, 12, 'left', 'top');
                            viz.screenText('Type: ' + state.type, 10, 36, viz.colors.white, 12, 'left', 'top');

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the map \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) defined by \\(T(x,y) = (2x - y,\\, x + 3y)\\) is linear, and find its matrix.',
                    hint: 'Check \\(T(\\alpha u + \\beta v) = \\alpha T(u) + \\beta T(v)\\) directly. For the matrix, compute \\(T(e_1)\\) and \\(T(e_2)\\).',
                    solution: 'Let \\(u = (x_1, y_1)\\), \\(v = (x_2, y_2)\\). Then \\(T(\\alpha u + \\beta v) = (2(\\alpha x_1 + \\beta x_2) - (\\alpha y_1 + \\beta y_2),\\; (\\alpha x_1 + \\beta x_2) + 3(\\alpha y_1 + \\beta y_2)) = \\alpha T(u) + \\beta T(v)\\). The matrix is \\(\\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}\\).'
                },
                {
                    question: 'Prove that the map \\(T: \\mathbb{R}^2 \\to \\mathbb{R}\\) defined by \\(T(x,y) = xy\\) is <em>not</em> linear.',
                    hint: 'Find a specific counterexample. Try \\(T(1,1) + T(1,1)\\) vs. \\(T(2,2)\\).',
                    solution: '\\(T(1,1) = 1\\), so \\(2\\,T(1,1) = 2\\). But \\(T(2,2) = 4 \\neq 2\\). Homogeneity fails: \\(T(2 \\cdot (1,1)) = T(2,2) = 4 \\neq 2 \\cdot T(1,1) = 2\\).'
                },
                {
                    question: 'Let \\(D: \\mathcal{P}_3 \\to \\mathcal{P}_2\\) be differentiation. Using the basis \\(\\{1, x, x^2, x^3\\}\\) for \\(\\mathcal{P}_3\\) and \\(\\{1, x, x^2\\}\\) for \\(\\mathcal{P}_2\\), write down the matrix of \\(D\\).',
                    hint: 'Compute \\(D(1) = 0\\), \\(D(x) = 1\\), \\(D(x^2) = 2x\\), \\(D(x^3) = 3x^2\\) and express each in the target basis.',
                    solution: 'The matrix is \\(\\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\end{pmatrix}\\). Each column is the coordinate vector of the image of the corresponding basis element.'
                },
                {
                    question: 'Show that the composition of two linear maps is linear. That is, if \\(T: V \\to W\\) and \\(S: W \\to U\\) are linear, then \\(S \\circ T: V \\to U\\) is linear.',
                    hint: 'Expand \\((S \\circ T)(\\alpha u + \\beta v)\\) using linearity of \\(T\\) first, then \\(S\\).',
                    solution: '\\((S \\circ T)(\\alpha u + \\beta v) = S(T(\\alpha u + \\beta v)) = S(\\alpha T(u) + \\beta T(v)) = \\alpha S(T(u)) + \\beta S(T(v)) = \\alpha (S \\circ T)(u) + \\beta (S \\circ T)(v)\\).'
                },
                {
                    question: 'Determine \\(\\dim \\mathcal{L}(\\mathbb{R}^3, \\mathbb{R}^4)\\).',
                    hint: 'Use the dimension formula \\(\\dim \\mathcal{L}(V,W) = (\\dim V)(\\dim W)\\).',
                    solution: '\\(\\dim \\mathcal{L}(\\mathbb{R}^3, \\mathbb{R}^4) = 3 \\times 4 = 12\\). Each linear map corresponds to a \\(4 \\times 3\\) matrix, which has 12 entries.'
                }
            ]
        },

        // ============================================================
        // Section 2: Kernel and Image
        // ============================================================
        {
            id: 'ch06-sec02',
            title: 'Kernel and Image',
            content: `
                <h2>Kernel and Image</h2>

                <div class="env-block motivation">
                    <div class="env-title">Two Fundamental Subspaces</div>
                    <div class="env-body">
                        <p>Every linear map \\(T: V \\to W\\) comes with two naturally attached subspaces: the <strong>kernel</strong> (everything that maps to zero) and the <strong>image</strong> (everything that gets hit). The kernel measures how much information \\(T\\) loses; the image measures how much of the codomain \\(T\\) can reach. Together, they lead to the Dimension Theorem (next section).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.2 (Kernel)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map. The <strong>kernel</strong> (or <strong>null space</strong>) of \\(T\\) is</p>
                        \\[\\ker T = \\{v \\in V : T(v) = 0_W\\}.\\]
                        <p>The <strong>nullity</strong> of \\(T\\) is \\(\\text{nullity}(T) = \\dim \\ker T\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.3 (Image)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map. The <strong>image</strong> (or <strong>range</strong>) of \\(T\\) is</p>
                        \\[\\operatorname{im} T = \\{T(v) : v \\in V\\} = \\{w \\in W : w = T(v) \\text{ for some } v \\in V\\}.\\]
                        <p>The <strong>rank</strong> of \\(T\\) is \\(\\operatorname{rank}(T) = \\dim \\operatorname{im} T\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.2 (Kernel and Image are Subspaces)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map. Then:</p>
                        <ol>
                            <li>\\(\\ker T\\) is a subspace of \\(V\\).</li>
                            <li>\\(\\operatorname{im} T\\) is a subspace of \\(W\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> We verify the three subspace criteria for \\(\\ker T \\subseteq V\\):</p>
                        <ul>
                            <li><em>Non-empty:</em> \\(T(0_V) = 0_W\\), so \\(0_V \\in \\ker T\\).</li>
                            <li><em>Closed under addition:</em> If \\(u, v \\in \\ker T\\), then \\(T(u+v) = T(u) + T(v) = 0 + 0 = 0\\).</li>
                            <li><em>Closed under scalar multiplication:</em> If \\(v \\in \\ker T\\) and \\(\\alpha \\in F\\), then \\(T(\\alpha v) = \\alpha T(v) = \\alpha \\cdot 0 = 0\\).</li>
                        </ul>
                        <p><strong>(2)</strong> Similarly for \\(\\operatorname{im} T \\subseteq W\\):</p>
                        <ul>
                            <li>\\(0_W = T(0_V) \\in \\operatorname{im} T\\).</li>
                            <li>If \\(T(u), T(v) \\in \\operatorname{im} T\\), then \\(T(u) + T(v) = T(u+v) \\in \\operatorname{im} T\\).</li>
                            <li>If \\(T(v) \\in \\operatorname{im} T\\), then \\(\\alpha T(v) = T(\\alpha v) \\in \\operatorname{im} T\\).</li>
                        </ul>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.5 (Projection Kernel and Image)</div>
                    <div class="env-body">
                        <p>Consider the projection \\(P: \\mathbb{R}^3 \\to \\mathbb{R}^3\\) defined by \\(P(x, y, z) = (x, y, 0)\\). Then:</p>
                        <ul>
                            <li>\\(\\ker P = \\{(0, 0, z) : z \\in \\mathbb{R}\\}\\) is the \\(z\\)-axis. Nullity = 1.</li>
                            <li>\\(\\operatorname{im} P = \\{(x, y, 0) : x, y \\in \\mathbb{R}\\}\\) is the \\(xy\\)-plane. Rank = 2.</li>
                        </ul>
                        <p>Notice: nullity + rank = 1 + 2 = 3 = \\(\\dim \\mathbb{R}^3\\). This is not a coincidence!</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.6 (Differentiation Kernel and Image)</div>
                    <div class="env-body">
                        <p>For \\(D: \\mathcal{P}_3 \\to \\mathcal{P}_2\\) (differentiation):</p>
                        <ul>
                            <li>\\(\\ker D = \\{\\text{constant polynomials}\\} = \\operatorname{span}\\{1\\}\\). Nullity = 1.</li>
                            <li>\\(\\operatorname{im} D = \\mathcal{P}_2\\) (every polynomial of degree \\(\\leq 2\\) is the derivative of some polynomial of degree \\(\\leq 3\\)). Rank = 3.</li>
                        </ul>
                        <p>Again: nullity + rank = 1 + 3 = 4 = \\(\\dim \\mathcal{P}_3\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch06-kernel-image"></div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.3 (Image from a Spanning Set)</div>
                    <div class="env-body">
                        <p>If \\(\\{v_1, \\ldots, v_n\\}\\) spans \\(V\\), then \\(\\{T(v_1), \\ldots, T(v_n)\\}\\) spans \\(\\operatorname{im} T\\).</p>
                        <p>In particular, if \\(\\{v_1, \\ldots, v_n\\}\\) is a basis for \\(V\\), the image is spanned by (though not necessarily a basis formed by) the images of the basis vectors.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(w \\in \\operatorname{im} T\\), so \\(w = T(v)\\) for some \\(v \\in V\\). Write \\(v = \\sum \\alpha_i v_i\\). Then \\(w = T(v) = \\sum \\alpha_i T(v_i)\\), which is in \\(\\operatorname{span}\\{T(v_1), \\ldots, T(v_n)\\}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.1</div>
                    <div class="env-body">
                        <p>If \\(V\\) is finite-dimensional, then \\(\\operatorname{im} T\\) is also finite-dimensional and \\(\\operatorname{rank}(T) \\leq \\dim V\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div name="env-title">Remark (Connection to Matrices)</div>
                    <div class="env-body">
                        <p>For a matrix \\(A \\in \\mathbb{R}^{m \\times n}\\), the linear map \\(T_A(x) = Ax\\) has \\(\\ker T_A = \\text{null}(A)\\) (the null space of \\(A\\)) and \\(\\operatorname{im} T_A = \\text{col}(A)\\) (the column space of \\(A\\)). The concepts of kernel/image for maps and null space/column space for matrices are the same thing seen from different angles.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ch06-kernel-image',
                    title: 'Kernel and Image Visualizer',
                    description: 'Adjust the 2x2 matrix to see how the kernel (null space) and image (column space) change geometrically. The blue line/region shows the kernel in the domain; the orange line/region shows the image in the codomain.',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {width: 560, height: 420, scale: 45});

                        let a = 1, b = 2, c = 0.5, d = 1;
                        const aS = VizEngine.createSlider(controls, 'a', -3, 3, a, 0.1, v => { a = v; draw(); });
                        const bS = VizEngine.createSlider(controls, 'b', -3, 3, b, 0.1, v => { b = v; draw(); });
                        const cS = VizEngine.createSlider(controls, 'c', -3, 3, c, 0.1, v => { c = v; draw(); });
                        const dS = VizEngine.createSlider(controls, 'd', -3, 3, d, 0.1, v => { d = v; draw(); });

                        const infoDiv = document.createElement('div');
                        infoDiv.style.cssText = 'margin-top:8px;font-size:12px;color:#8b949e;line-height:1.6;';
                        controls.appendChild(infoDiv);

                        function draw() {
                            const M = [[a, b], [c, d]];
                            const det = VizEngine.det2(M);

                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Transformed grid
                            viz.drawTransformedGrid(M, 5, viz.colors.teal + '25', 0.5);
                            viz.drawTransformedUnitSquare(M, viz.colors.orange + '22', viz.colors.orange, 1.5);

                            // Column vectors (span the image)
                            viz.drawVector(0, 0, a, c, viz.colors.orange, 'col 1', 2.5);
                            viz.drawVector(0, 0, b, d, viz.colors.yellow, 'col 2', 2.5);

                            if (Math.abs(det) < 0.05) {
                                // Singular: kernel is a line, image is a line
                                // Kernel direction: solve [a b; c d]v = 0
                                // Use (b, -a) or (d, -c) as kernel direction
                                let kx, ky;
                                if (Math.abs(a) + Math.abs(c) > 0.01) {
                                    kx = -b; ky = a;
                                    if (Math.abs(kx) < 0.01 && Math.abs(ky) < 0.01) { kx = -d; ky = c; }
                                } else {
                                    kx = 1; ky = 0;
                                }
                                const kLen = Math.sqrt(kx*kx + ky*ky);
                                if (kLen > 0.01) {
                                    kx /= kLen; ky /= kLen;
                                    viz.drawLine(0, 0, kx, ky, viz.colors.blue, 2.5, false);
                                    viz.drawText('ker T', kx * 3.5, ky * 3.5, viz.colors.blue, 14);
                                }

                                // Image is the span of the (non-zero) column
                                let ix = a, iy = c;
                                if (Math.abs(ix) + Math.abs(iy) < 0.01) { ix = b; iy = d; }
                                const iLen = Math.sqrt(ix*ix + iy*iy);
                                if (iLen > 0.01) {
                                    viz.drawLine(0, 0, ix/iLen, iy/iLen, viz.colors.green, 2, true);
                                    viz.drawText('im T', ix/iLen * 4, iy/iLen * 4, viz.colors.green, 14);
                                }

                                infoDiv.innerHTML = 'det = ' + det.toFixed(3) + ' (singular!)<br>Kernel: 1-dimensional line &mdash; Rank: 1<br>nullity + rank = 1 + 1 = 2';
                            } else {
                                // Non-singular: kernel = {0}, image = all of R^2
                                viz.drawPoint(0, 0, viz.colors.blue, 'ker T = {0}', 6);
                                infoDiv.innerHTML = 'det = ' + det.toFixed(3) + ' (invertible)<br>Kernel: {0} &mdash; Image: all of R&sup2;<br>nullity + rank = 0 + 2 = 2';
                            }

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(T: \\mathbb{R}^3 \\to \\mathbb{R}^2\\) be defined by \\(T(x,y,z) = (x - y, 2y + z)\\). Find \\(\\ker T\\) and \\(\\operatorname{im} T\\).',
                    hint: 'For the kernel, solve \\(x - y = 0\\) and \\(2y + z = 0\\) simultaneously. For the image, compute \\(T(e_1), T(e_2), T(e_3)\\) and determine what they span.',
                    solution: 'Kernel: \\(x = y\\) and \\(z = -2y\\), so \\(\\ker T = \\{(t, t, -2t) : t \\in \\mathbb{R}\\} = \\operatorname{span}\\{(1,1,-2)\\}\\). Nullity = 1. Image: \\(T(e_1) = (1,0)\\), \\(T(e_2) = (-1,2)\\), \\(T(e_3) = (0,1)\\). These span \\(\\mathbb{R}^2\\), so \\(\\operatorname{im} T = \\mathbb{R}^2\\), rank = 2.'
                },
                {
                    question: 'Let \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) be projection onto the \\(x\\)-axis: \\(T(x,y) = (x, 0)\\). Find \\(\\ker T\\), \\(\\operatorname{im} T\\), and verify that \\(T^2 = T\\).',
                    hint: '\\(\\ker T\\) consists of all vectors that map to \\((0,0)\\). Compute \\(T(T(x,y))\\).',
                    solution: '\\(\\ker T = \\{(0, y) : y \\in \\mathbb{R}\\}\\) (the \\(y\\)-axis). \\(\\operatorname{im} T = \\{(x, 0) : x \\in \\mathbb{R}\\}\\) (the \\(x\\)-axis). \\(T^2(x,y) = T(x, 0) = (x, 0) = T(x,y)\\), confirming \\(T^2 = T\\).'
                },
                {
                    question: 'Prove that \\(T\\) is injective if and only if \\(\\ker T = \\{0\\}\\).',
                    hint: 'For the forward direction, if \\(T\\) is injective and \\(v \\in \\ker T\\), what can you say about \\(T(v) = T(0)\\)? For the converse, assume \\(T(u) = T(v)\\) and use linearity.',
                    solution: '(\\(\\Rightarrow\\)) If \\(T\\) is injective and \\(v \\in \\ker T\\), then \\(T(v) = 0 = T(0)\\), so \\(v = 0\\). (\\(\\Leftarrow\\)) If \\(\\ker T = \\{0\\}\\) and \\(T(u) = T(v)\\), then \\(T(u - v) = 0\\), so \\(u - v \\in \\ker T = \\{0\\}\\), hence \\(u = v\\).'
                },
                {
                    question: 'Give an example of a linear map \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^3\\) with \\(\\operatorname{rank}(T) = 2\\).',
                    hint: 'You need \\(T\\) to be injective (since \\(\\dim \\mathbb{R}^2 = 2\\)). Try sending the standard basis to two linearly independent vectors in \\(\\mathbb{R}^3\\).',
                    solution: 'Define \\(T(x,y) = (x, y, x + y)\\). Then \\(T(e_1) = (1,0,1)\\), \\(T(e_2) = (0,1,1)\\), which are linearly independent in \\(\\mathbb{R}^3\\). So \\(\\operatorname{rank}(T) = 2\\) and \\(\\ker T = \\{0\\}\\).'
                },
                {
                    question: 'Let \\(T: V \\to W\\) be linear with \\(V\\) finite-dimensional. Show that \\(\\operatorname{im} T = \\operatorname{span}\\{T(v_1), \\ldots, T(v_n)\\}\\) for any basis \\(\\{v_1, \\ldots, v_n\\}\\) of \\(V\\).',
                    hint: 'Show both set inclusions. Use the fact that every \\(v \\in V\\) can be written as a linear combination of the basis.',
                    solution: '(\\(\\supseteq\\)) Each \\(T(v_i) \\in \\operatorname{im} T\\), and \\(\\operatorname{im} T\\) is a subspace, so the span is contained. (\\(\\subseteq\\)) If \\(w \\in \\operatorname{im} T\\), then \\(w = T(v) = T(\\sum \\alpha_i v_i) = \\sum \\alpha_i T(v_i)\\), so \\(w\\) is in the span.'
                }
            ]
        },

        // ============================================================
        // Section 3: The Dimension Theorem
        // ============================================================
        {
            id: 'ch06-sec03',
            title: 'The Dimension Theorem',
            content: `
                <h2>The Dimension Theorem (Rank-Nullity)</h2>

                <div class="env-block motivation">
                    <div class="env-title">The Fundamental Equation</div>
                    <div class="env-body">
                        <p>The Dimension Theorem (also called the Rank-Nullity Theorem) is one of the most important results in linear algebra. It says that for a linear map \\(T: V \\to W\\) on a finite-dimensional domain, the dimensions of the kernel and image always sum to the dimension of the domain. Nothing is created or destroyed; what the map "collapses" (the kernel) and what it "produces" (the image) account for all the dimensions of \\(V\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.3 (Dimension Theorem / Rank-Nullity Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) be a finite-dimensional vector space and \\(T: V \\to W\\) a linear map. Then</p>
                        \\[\\dim V = \\dim \\ker T + \\dim \\operatorname{im} T,\\]
                        <p>or equivalently,</p>
                        \\[\\dim V = \\operatorname{nullity}(T) + \\operatorname{rank}(T).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\dim V = n\\), \\(\\dim \\ker T = k\\). Choose a basis \\(\\{u_1, \\ldots, u_k\\}\\) for \\(\\ker T\\). By the basis extension theorem, extend this to a basis \\(\\{u_1, \\ldots, u_k, v_1, \\ldots, v_{n-k}\\}\\) for \\(V\\).</p>

                        <p><strong>Claim:</strong> \\(\\{T(v_1), \\ldots, T(v_{n-k})\\}\\) is a basis for \\(\\operatorname{im} T\\).</p>

                        <p><em>Spanning:</em> Let \\(w \\in \\operatorname{im} T\\), so \\(w = T(v)\\) for some \\(v \\in V\\). Write \\(v = \\sum_{i=1}^k a_i u_i + \\sum_{j=1}^{n-k} b_j v_j\\). Then</p>
                        \\[w = T(v) = \\sum_{i=1}^k a_i \\underbrace{T(u_i)}_{=\\,0} + \\sum_{j=1}^{n-k} b_j T(v_j) = \\sum_{j=1}^{n-k} b_j T(v_j).\\]

                        <p><em>Linear independence:</em> Suppose \\(\\sum_{j=1}^{n-k} c_j T(v_j) = 0\\). By linearity, \\(T\\!\\left(\\sum_{j} c_j v_j\\right) = 0\\), so \\(\\sum_{j} c_j v_j \\in \\ker T\\). Write \\(\\sum_{j} c_j v_j = \\sum_{i} a_i u_i\\), i.e., \\(\\sum_{i} a_i u_i - \\sum_{j} c_j v_j = 0\\). Since \\(\\{u_1, \\ldots, u_k, v_1, \\ldots, v_{n-k}\\}\\) is a basis, all coefficients are zero. In particular, all \\(c_j = 0\\).</p>

                        <p>Therefore \\(\\dim \\operatorname{im} T = n - k\\), which gives \\(n = k + (n - k) = \\dim \\ker T + \\dim \\operatorname{im} T\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of \\(V\\) as a pipe of "width" \\(n\\). The kernel is the part of the pipe that gets squeezed shut (nullity dimensions are lost). What passes through the squeeze is the image (rank dimensions survive). The total width is always preserved: lost + surviving = total.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.7</div>
                    <div class="env-body">
                        <p>Let \\(T: \\mathbb{R}^4 \\to \\mathbb{R}^3\\) be defined by \\(T(x_1, x_2, x_3, x_4) = (x_1 + x_2, x_3 - x_4, x_1 + x_2 + x_3 - x_4)\\).</p>
                        <p>The third component equals the sum of the first two, so the image has dimension at most 2. Indeed, \\(\\operatorname{im} T = \\operatorname{span}\\{(1,0,1), (0,1,1)\\}\\), so \\(\\operatorname{rank} = 2\\).</p>
                        <p>By the Dimension Theorem, \\(\\operatorname{nullity} = 4 - 2 = 2\\). Let us verify: the kernel consists of all \\((x_1, x_2, x_3, x_4)\\) with \\(x_1 + x_2 = 0\\) and \\(x_3 - x_4 = 0\\), i.e., \\(\\ker T = \\operatorname{span}\\{(1, -1, 0, 0), (0, 0, 1, 1)\\}\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.2</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be linear with \\(V\\) finite-dimensional.</p>
                        <ol>
                            <li>\\(\\operatorname{rank}(T) \\leq \\min(\\dim V, \\dim W)\\).</li>
                            <li>If \\(\\dim V > \\dim W\\), then \\(T\\) is not injective (the kernel is nontrivial).</li>
                            <li>If \\(\\dim V < \\dim W\\), then \\(T\\) is not surjective (the image is proper).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) \\(\\operatorname{rank}(T) \\leq \\dim V\\) by the Dimension Theorem, and \\(\\operatorname{rank}(T) = \\dim \\operatorname{im} T \\leq \\dim W\\) since \\(\\operatorname{im} T \\subseteq W\\).</p>
                        <p>(2) If \\(\\dim V > \\dim W\\), then \\(\\operatorname{nullity} = \\dim V - \\operatorname{rank}(T) \\geq \\dim V - \\dim W > 0\\).</p>
                        <p>(3) If \\(\\dim V < \\dim W\\), then \\(\\operatorname{rank}(T) \\leq \\dim V < \\dim W\\), so \\(\\operatorname{im} T \\neq W\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.8 (Application: Systems of Equations)</div>
                    <div class="env-body">
                        <p>A homogeneous system \\(Ax = 0\\) with \\(A \\in \\mathbb{R}^{m \\times n}\\) and \\(n > m\\) always has a nontrivial solution. By the Dimension Theorem, \\(\\operatorname{nullity}(A) = n - \\operatorname{rank}(A) \\geq n - m > 0\\).</p>
                        <p>This is the "more unknowns than equations implies free variables" principle, now with a clean proof.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.3 (Square Matrices)</div>
                    <div class="env-body">
                        <p>For a linear operator \\(T: V \\to V\\) on a finite-dimensional space, the following are equivalent:</p>
                        <ol>
                            <li>\\(T\\) is injective.</li>
                            <li>\\(T\\) is surjective.</li>
                            <li>\\(T\\) is invertible.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(n = \\dim V\\). By the Dimension Theorem, \\(n = \\operatorname{nullity} + \\operatorname{rank}\\).</p>
                        <p>\\(T\\) injective \\(\\Leftrightarrow\\) \\(\\operatorname{nullity} = 0\\) \\(\\Leftrightarrow\\) \\(\\operatorname{rank} = n\\) \\(\\Leftrightarrow\\) \\(\\operatorname{im} T = V\\) \\(\\Leftrightarrow\\) \\(T\\) surjective.</p>
                        <p>Injective + surjective is precisely invertible.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Corollary 6.3 is special to <em>finite-dimensional</em> spaces! In infinite dimensions, a linear operator can be injective but not surjective (e.g., the right shift \\((x_1, x_2, \\ldots) \\mapsto (0, x_1, x_2, \\ldots)\\) on \\(\\ell^2\\)) or surjective but not injective (the left shift).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(T: \\mathbb{R}^5 \\to \\mathbb{R}^3\\) be linear with \\(\\operatorname{rank}(T) = 3\\). What is \\(\\operatorname{nullity}(T)\\)? Is \\(T\\) surjective? Is \\(T\\) injective?',
                    hint: 'Use the Dimension Theorem. Compare the rank to \\(\\dim \\mathbb{R}^3\\).',
                    solution: 'Nullity = \\(5 - 3 = 2\\). Since \\(\\operatorname{rank} = 3 = \\dim \\mathbb{R}^3\\), \\(T\\) is surjective. Since nullity \\(> 0\\), \\(T\\) is not injective.'
                },
                {
                    question: 'Prove that there is no surjective linear map \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^3\\).',
                    hint: 'Use the bound \\(\\operatorname{rank}(T) \\leq \\dim V\\).',
                    solution: 'By the Dimension Theorem, \\(\\operatorname{rank}(T) \\leq \\dim \\mathbb{R}^2 = 2 < 3 = \\dim \\mathbb{R}^3\\). So \\(\\operatorname{im} T\\) is a proper subspace of \\(\\mathbb{R}^3\\), and \\(T\\) cannot be surjective.'
                },
                {
                    question: 'Let \\(T: V \\to V\\) be a linear operator on a finite-dimensional space with \\(T^2 = T\\) (a projection). Prove that \\(V = \\ker T \\oplus \\operatorname{im} T\\).',
                    hint: 'Show that every \\(v\\) can be written as \\(v = (v - Tv) + Tv\\). Check that \\(v - Tv \\in \\ker T\\) and \\(Tv \\in \\operatorname{im} T\\). Then show the intersection is trivial.',
                    solution: 'Write \\(v = (v - Tv) + Tv\\). Since \\(T(v - Tv) = Tv - T^2 v = Tv - Tv = 0\\), we have \\(v - Tv \\in \\ker T\\). Obviously \\(Tv \\in \\operatorname{im} T\\). For uniqueness: if \\(w \\in \\ker T \\cap \\operatorname{im} T\\), then \\(Tw = 0\\) and \\(w = Tu\\) for some \\(u\\), so \\(w = Tu = T^2 u = Tw = 0\\).'
                },
                {
                    question: 'A linear map \\(T: \\mathbb{R}^4 \\to \\mathbb{R}^4\\) satisfies \\(\\operatorname{rank}(T) = 2\\). What is \\(\\dim \\ker T\\)? Can you find the rank of \\(T^2\\)?',
                    hint: 'The Dimension Theorem gives \\(\\dim \\ker T\\). For \\(T^2\\), note that \\(\\operatorname{im} T^2 \\subseteq \\operatorname{im} T\\), so \\(\\operatorname{rank}(T^2) \\leq \\operatorname{rank}(T)\\). The exact rank of \\(T^2\\) depends on \\(T\\).',
                    solution: '\\(\\dim \\ker T = 4 - 2 = 2\\). For \\(T^2\\), we know \\(\\operatorname{im} T^2 \\subseteq \\operatorname{im} T\\), so \\(\\operatorname{rank}(T^2) \\leq 2\\). Also \\(\\ker T \\subseteq \\ker T^2\\), so \\(\\operatorname{nullity}(T^2) \\geq 2\\). The exact rank of \\(T^2\\) can be 0, 1, or 2 depending on \\(T\\). For example, if \\(T\\) is a projection of rank 2 then \\(\\operatorname{rank}(T^2) = 2\\); if \\(T\\) is nilpotent of rank 2 then \\(\\operatorname{rank}(T^2)\\) could be 0.'
                },
                {
                    question: 'Use the Dimension Theorem to prove: if \\(A\\) is an \\(m \\times n\\) matrix with \\(m < n\\), then the columns of \\(A\\) are linearly dependent.',
                    hint: 'Think of \\(T_A(x) = Ax\\). If the columns were independent, what would the rank be?',
                    solution: 'The columns of \\(A\\) are linearly dependent if and only if \\(\\ker T_A \\neq \\{0\\}\\). By the Dimension Theorem, \\(\\operatorname{nullity}(T_A) = n - \\operatorname{rank}(T_A) \\geq n - m > 0\\). So the kernel is nontrivial, meaning the columns are dependent.'
                }
            ]
        },

        // ============================================================
        // Section 4: Injective, Surjective, and Invertible Maps
        // ============================================================
        {
            id: 'ch06-sec04',
            title: 'Injective, Surjective, and Invertible Maps',
            content: `
                <h2>Injective, Surjective, and Invertible Maps</h2>

                <div class="env-block motivation">
                    <div class="env-title">Classifying Linear Maps</div>
                    <div class="env-body">
                        <p>We have seen that the kernel and image carry rich structural information. Now we use them to classify linear maps into three important categories: injective (one-to-one), surjective (onto), and invertible (bijective). For finite-dimensional spaces, the Dimension Theorem provides clean algebraic characterizations.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.4</div>
                    <div class="env-body">
                        <p>A linear map \\(T: V \\to W\\) is:</p>
                        <ul>
                            <li><strong>Injective</strong> (one-to-one) if \\(T(u) = T(v) \\Rightarrow u = v\\).</li>
                            <li><strong>Surjective</strong> (onto) if \\(\\operatorname{im} T = W\\).</li>
                            <li><strong>Invertible</strong> (bijective) if it is both injective and surjective.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.4 (Characterizations of Injectivity)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map. The following are equivalent:</p>
                        <ol>
                            <li>\\(T\\) is injective.</li>
                            <li>\\(\\ker T = \\{0\\}\\).</li>
                            <li>\\(T\\) maps every linearly independent set to a linearly independent set.</li>
                            <li>If \\(\\{v_1, \\ldots, v_k\\}\\) is linearly independent, then \\(\\{T(v_1), \\ldots, T(v_k)\\}\\) is linearly independent.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)\\(\\Rightarrow\\)(2):</strong> If \\(v \\in \\ker T\\), then \\(T(v) = 0 = T(0)\\). Injectivity gives \\(v = 0\\).</p>

                        <p><strong>(2)\\(\\Rightarrow\\)(3):</strong> Let \\(\\{v_1, \\ldots, v_k\\}\\) be independent and suppose \\(\\sum c_i T(v_i) = 0\\). Then \\(T(\\sum c_i v_i) = 0\\), so \\(\\sum c_i v_i \\in \\ker T = \\{0\\}\\). By independence, all \\(c_i = 0\\).</p>

                        <p><strong>(3)\\(\\Rightarrow\\)(4):</strong> Immediate (4 is a special case of 3).</p>

                        <p><strong>(4)\\(\\Rightarrow\\)(1):</strong> Suppose \\(T(u) = T(v)\\), i.e., \\(T(u - v) = 0\\). If \\(u \\neq v\\), then \\(\\{u - v\\}\\) is linearly independent, so \\(\\{T(u - v)\\} = \\{0\\}\\) should be linearly independent, a contradiction. Hence \\(u = v\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.5 (Characterizations of Surjectivity)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be linear with \\(V\\) finite-dimensional. The following are equivalent:</p>
                        <ol>
                            <li>\\(T\\) is surjective.</li>
                            <li>\\(\\operatorname{rank}(T) = \\dim W\\).</li>
                            <li>If \\(\\{v_1, \\ldots, v_n\\}\\) spans \\(V\\), then \\(\\{T(v_1), \\ldots, T(v_n)\\}\\) spans \\(W\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1)\\(\\Leftrightarrow\\)(2): \\(T\\) surjective \\(\\Leftrightarrow\\) \\(\\operatorname{im} T = W\\) \\(\\Leftrightarrow\\) \\(\\dim \\operatorname{im} T = \\dim W\\).</p>
                        <p>(1)\\(\\Leftrightarrow\\)(3): If the \\(v_i\\) span \\(V\\), then the \\(T(v_i)\\) span \\(\\operatorname{im} T\\) (Proposition 6.3). So \\(\\operatorname{im} T = W\\) if and only if the \\(T(v_i)\\) span \\(W\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.6 (Invertible Maps)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be a linear map between finite-dimensional spaces. Then \\(T\\) is invertible if and only if:</p>
                        <ol>
                            <li>\\(\\ker T = \\{0\\}\\) and \\(\\operatorname{im} T = W\\), or equivalently,</li>
                            <li>\\(\\dim V = \\dim W\\) and \\(T\\) is injective (or, equivalently, surjective).</li>
                        </ol>
                        <p>Moreover, the inverse \\(T^{-1}: W \\to V\\) is also linear.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The first characterization is the definition. For the second, if \\(\\dim V = \\dim W = n\\) and \\(T\\) is injective, then \\(\\operatorname{nullity} = 0\\), so \\(\\operatorname{rank} = n = \\dim W\\), hence \\(T\\) is surjective. The reverse direction is symmetric.</p>

                        <p><strong>Linearity of \\(T^{-1}\\):</strong> Let \\(w_1, w_2 \\in W\\) and \\(\\alpha, \\beta \\in F\\). Set \\(v_i = T^{-1}(w_i)\\). Then</p>
                        \\[T(\\alpha v_1 + \\beta v_2) = \\alpha T(v_1) + \\beta T(v_2) = \\alpha w_1 + \\beta w_2,\\]
                        <p>so \\(T^{-1}(\\alpha w_1 + \\beta w_2) = \\alpha v_1 + \\beta v_2 = \\alpha T^{-1}(w_1) + \\beta T^{-1}(w_2)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.9</div>
                    <div class="env-body">
                        <p>The rotation \\(R_\\theta: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) is invertible for every \\(\\theta\\), with inverse \\(R_\\theta^{-1} = R_{-\\theta}\\). The kernel is \\(\\{0\\}\\) (only the zero vector is fixed at the origin after rotation by a nonzero angle) and the image is all of \\(\\mathbb{R}^2\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.10</div>
                    <div class="env-body">
                        <p>The orthogonal projection \\(P\\) onto a proper subspace is never invertible: its kernel consists of the orthogonal complement, which is nontrivial. For projection onto the \\(x\\)-axis in \\(\\mathbb{R}^2\\), \\(\\ker P = \\{(0, y)\\}\\), so \\(P\\) is not injective.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.4 (Left and Right Inverses)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) be linear with \\(V, W\\) finite-dimensional.</p>
                        <ol>
                            <li>\\(T\\) has a <strong>left inverse</strong> (i.e., \\(S \\circ T = I_V\\) for some linear \\(S: W \\to V\\)) if and only if \\(T\\) is injective.</li>
                            <li>\\(T\\) has a <strong>right inverse</strong> (i.e., \\(T \\circ S = I_W\\) for some linear \\(S: W \\to V\\)) if and only if \\(T\\) is surjective.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>For square matrices (\\(n \\times n\\)), a left inverse equals a right inverse equals the two-sided inverse. This is a nontrivial algebraic fact: if \\(BA = I\\) then also \\(AB = I\\).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(T: \\mathbb{R}^3 \\to \\mathbb{R}^3\\) have matrix \\(A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -1 \\\\ 1 & 1 & 1 \\end{pmatrix}\\). Is \\(T\\) invertible?',
                    hint: 'Compute \\(\\det A\\). If nonzero, the map is invertible.',
                    solution: '\\(\\det A = 1(1 \\cdot 1 - (-1) \\cdot 1) - 0 + 2(0 \\cdot 1 - 1 \\cdot 1) = 1 \\cdot 2 + 2 \\cdot (-1) = 0\\). So \\(T\\) is not invertible.'
                },
                {
                    question: 'Find all linear maps \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) such that \\(T^2 = 0\\) but \\(T \\neq 0\\).',
                    hint: 'If \\(T^2 = 0\\), then \\(\\operatorname{im} T \\subseteq \\ker T\\). Use the Dimension Theorem to find the rank and nullity.',
                    solution: '\\(\\operatorname{im} T \\subseteq \\ker T\\). By the Dimension Theorem, \\(\\operatorname{rank} + \\operatorname{nullity} = 2\\). Since \\(T \\neq 0\\), rank \\(\\geq 1\\). Since \\(\\operatorname{im} T \\subseteq \\ker T\\), rank \\(\\leq\\) nullity. So rank = 1, nullity = 1. The image is a 1-dimensional subspace contained in the kernel. Any such \\(T\\) has matrix similar to \\(\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(T: V \\to W\\) and \\(S: W \\to V\\) be linear maps with \\(S \\circ T = I_V\\). Prove that \\(T\\) is injective and \\(S\\) is surjective.',
                    hint: 'For injectivity: if \\(T(u) = T(v)\\), apply \\(S\\). For surjectivity: given \\(v \\in V\\), find \\(w \\in W\\) with \\(S(w) = v\\).',
                    solution: '<strong>T injective:</strong> If \\(T(u) = T(v)\\), then \\(u = S(T(u)) = S(T(v)) = v\\). <strong>S surjective:</strong> For any \\(v \\in V\\), let \\(w = T(v)\\). Then \\(S(w) = S(T(v)) = v\\).'
                },
                {
                    question: 'Prove: if \\(T: V \\to V\\) is a linear operator on a finite-dimensional space and \\(T\\) is injective, then \\(T\\) maps every basis to a basis.',
                    hint: 'Use the fact that \\(T\\) injective implies \\(T\\) preserves linear independence, and count dimensions.',
                    solution: 'Let \\(\\{v_1, \\ldots, v_n\\}\\) be a basis for \\(V\\). Since \\(T\\) is injective, by Theorem 6.4 the set \\(\\{T(v_1), \\ldots, T(v_n)\\}\\) is linearly independent. It has \\(n = \\dim V\\) elements, so it is a basis for \\(V\\).'
                },
                {
                    question: 'Show that a linear map \\(T: \\mathbb{R}^n \\to \\mathbb{R}^n\\) is invertible if and only if \\(T\\) maps some basis of \\(\\mathbb{R}^n\\) to a basis of \\(\\mathbb{R}^n\\).',
                    hint: 'Forward: use the previous exercise. Backward: if the images of a basis form a basis, what does that say about rank?',
                    solution: '(\\(\\Rightarrow\\)) If \\(T\\) is invertible, it is injective and maps the standard basis to a basis (by the previous exercise). (\\(\\Leftarrow\\)) If \\(T\\) maps a basis \\(\\{v_1, \\ldots, v_n\\}\\) to a basis \\(\\{T(v_1), \\ldots, T(v_n)\\}\\), then \\(\\operatorname{im} T\\) contains \\(n\\) linearly independent vectors, so \\(\\operatorname{rank} = n\\), and \\(T\\) is surjective, hence invertible.'
                }
            ]
        },

        // ============================================================
        // Section 5: Isomorphisms and Finite-Dimensional Spaces
        // ============================================================
        {
            id: 'ch06-sec05',
            title: 'Isomorphisms and Finite-Dimensional Spaces',
            content: `
                <h2>Isomorphisms and Finite-Dimensional Spaces</h2>

                <div class="env-block motivation">
                    <div class="env-title">When Are Two Spaces "the Same"?</div>
                    <div class="env-body">
                        <p>Two vector spaces are <em>isomorphic</em> if there is an invertible linear map between them. This is the strongest possible equivalence: isomorphic spaces are structurally identical. The punchline of this section is remarkable: every \\(n\\)-dimensional vector space over \\(F\\) is isomorphic to \\(F^n\\). Dimension alone determines the "type" of a finite-dimensional vector space.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.5 (Isomorphism)</div>
                    <div class="env-body">
                        <p>An invertible linear map \\(T: V \\to W\\) is called an <strong>isomorphism</strong>. We say \\(V\\) and \\(W\\) are <strong>isomorphic</strong>, written \\(V \\cong W\\), if there exists an isomorphism between them.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.5 (Isomorphism is an Equivalence Relation)</div>
                    <div class="env-body">
                        <p>The relation "is isomorphic to" satisfies:</p>
                        <ol>
                            <li><strong>Reflexive:</strong> \\(V \\cong V\\) (via the identity map).</li>
                            <li><strong>Symmetric:</strong> \\(V \\cong W \\Rightarrow W \\cong V\\) (via \\(T^{-1}\\)).</li>
                            <li><strong>Transitive:</strong> \\(V \\cong W\\) and \\(W \\cong U\\) \\(\\Rightarrow\\) \\(V \\cong U\\) (via composition).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.7 (The Coordinate Isomorphism)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) be a vector space over \\(F\\) with basis \\(\\mathcal{B} = \\{v_1, \\ldots, v_n\\}\\). The <strong>coordinate map</strong></p>
                        \\[\\phi_{\\mathcal{B}}: V \\to F^n, \\quad \\phi_{\\mathcal{B}}\\!\\left(\\sum_{i=1}^n \\alpha_i v_i\\right) = (\\alpha_1, \\ldots, \\alpha_n)\\]
                        <p>is an isomorphism.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Well-defined:</strong> Each \\(v \\in V\\) has a <em>unique</em> expansion in the basis, so the map is well-defined.</p>

                        <p><strong>Linear:</strong> If \\(v = \\sum \\alpha_i v_i\\) and \\(u = \\sum \\beta_i v_i\\), then \\(\\alpha v + \\beta u = \\sum (\\alpha \\alpha_i + \\beta \\beta_i) v_i\\), so</p>
                        \\[\\phi_{\\mathcal{B}}(\\alpha v + \\beta u) = (\\alpha\\alpha_1 + \\beta\\beta_1, \\ldots) = \\alpha (\\alpha_1, \\ldots) + \\beta (\\beta_1, \\ldots) = \\alpha\\,\\phi_{\\mathcal{B}}(v) + \\beta\\,\\phi_{\\mathcal{B}}(u).\\]

                        <p><strong>Injective:</strong> If \\(\\phi_{\\mathcal{B}}(v) = 0\\), then all \\(\\alpha_i = 0\\), so \\(v = 0\\). Hence \\(\\ker \\phi_{\\mathcal{B}} = \\{0\\}\\).</p>

                        <p><strong>Surjective:</strong> Given \\((\\alpha_1, \\ldots, \\alpha_n) \\in F^n\\), the vector \\(v = \\sum \\alpha_i v_i\\) satisfies \\(\\phi_{\\mathcal{B}}(v) = (\\alpha_1, \\ldots, \\alpha_n)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.8 (Classification of Finite-Dimensional Spaces)</div>
                    <div class="env-body">
                        <p>Two finite-dimensional vector spaces \\(V\\) and \\(W\\) over the same field \\(F\\) are isomorphic if and only if \\(\\dim V = \\dim W\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> Let \\(T: V \\to W\\) be an isomorphism. Since \\(T\\) is injective, \\(\\operatorname{nullity} = 0\\). By the Dimension Theorem, \\(\\dim V = \\operatorname{rank}(T) = \\dim \\operatorname{im} T = \\dim W\\).</p>
                        <p><strong>(\\(\\Leftarrow\\))</strong> If \\(\\dim V = \\dim W = n\\), then both \\(V \\cong F^n\\) and \\(W \\cong F^n\\) (via their coordinate maps). By transitivity, \\(V \\cong W\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>This theorem says that, up to isomorphism, there is only one \\(n\\)-dimensional vector space over \\(F\\): namely \\(F^n\\). The space \\(\\mathcal{P}_3\\) of polynomials of degree \\(\\leq 3\\) and \\(\\mathbb{R}^4\\) "look different," but as vector spaces they are identical twins. The isomorphism \\(a + bx + cx^2 + dx^3 \\mapsto (a, b, c, d)\\) sets up a perfect correspondence.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.11</div>
                    <div class="env-body">
                        <p>The space of \\(2 \\times 2\\) real matrices \\(M_{2 \\times 2}(\\mathbb{R})\\) is isomorphic to \\(\\mathbb{R}^4\\) via</p>
                        \\[\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\mapsto (a, b, c, d).\\]
                        <p>Both have dimension 4 over \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.12</div>
                    <div class="env-body">
                        <p>The set \\(\\{(x, y, z) \\in \\mathbb{R}^3 : x + y + z = 0\\}\\) is a 2-dimensional subspace of \\(\\mathbb{R}^3\\), hence isomorphic to \\(\\mathbb{R}^2\\). An explicit isomorphism: \\((x, y, z) \\mapsto (x, y)\\) (since \\(z = -x - y\\)).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.9 (Isomorphism and Bases)</div>
                    <div class="env-body">
                        <p>A linear map \\(T: V \\to W\\) is an isomorphism if and only if \\(T\\) maps some (equivalently, every) basis of \\(V\\) to a basis of \\(W\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> Suppose \\(T\\) is an isomorphism and \\(\\{v_1, \\ldots, v_n\\}\\) is a basis for \\(V\\). Since \\(T\\) is injective, the set \\(\\{T(v_1), \\ldots, T(v_n)\\}\\) is linearly independent. Since \\(T\\) is surjective, it spans \\(W\\). So it is a basis.</p>
                        <p><strong>(\\(\\Leftarrow\\))</strong> If \\(T\\) maps a basis to a basis, then the images span \\(W\\) (surjective) and are independent (injective, since no nontrivial combination in the kernel).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.4</div>
                    <div class="env-body">
                        <p>\\(\\dim \\mathcal{L}(V, W) = (\\dim V)(\\dim W)\\). In particular, \\(\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)\\) where \\(n = \\dim V\\) and \\(m = \\dim W\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The classification theorem is elegant, but isomorphisms are not "canonical" (there is no single preferred one). Different choices of basis give different coordinate maps \\(\\phi_{\\mathcal{B}}\\). This ambiguity is precisely what Chapter 7 addresses: the matrix of a linear map depends on the choice of bases, and changing bases gives "similar" matrices.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Isomorphism preserves <em>vector space structure</em> only. If the spaces carry additional structure (inner product, norm, ordering), an isomorphism of vector spaces need not preserve it. For example, \\(\\mathbb{R}^2\\) with the standard inner product and \\(\\mathbb{R}^2\\) with a weighted inner product are isomorphic as vector spaces but not as inner product spaces (unless the isomorphism also preserves the inner product).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Prove that \\(\\mathcal{P}_2\\) (real polynomials of degree \\(\\leq 2\\)) is isomorphic to \\(\\mathbb{R}^3\\). Write an explicit isomorphism.',
                    hint: 'Use the coordinate map with respect to the basis \\(\\{1, x, x^2\\}\\).',
                    solution: 'The map \\(\\phi: \\mathcal{P}_2 \\to \\mathbb{R}^3\\) defined by \\(\\phi(a + bx + cx^2) = (a, b, c)\\) is an isomorphism. It is linear (check directly), injective (kernel is \\(\\{0\\}\\) since \\(a = b = c = 0\\) forces the polynomial to be zero), and surjective (given \\((a,b,c)\\), the polynomial \\(a + bx + cx^2\\) maps to it).'
                },
                {
                    question: 'Show that the space of \\(n \\times n\\) symmetric matrices is isomorphic to \\(\\mathbb{R}^{n(n+1)/2}\\).',
                    hint: 'How many independent entries does a symmetric matrix have? Find a basis.',
                    solution: 'A symmetric \\(n \\times n\\) matrix \\(A\\) has \\(a_{ij} = a_{ji}\\), so it is determined by the entries on and above the diagonal: \\(a_{ij}\\) for \\(i \\leq j\\). There are \\(n + (n-1) + \\cdots + 1 = n(n+1)/2\\) such entries. The corresponding basis consists of matrices \\(E_{ij} + E_{ji}\\) (for \\(i < j\\)) and \\(E_{ii}\\). Since \\(\\dim = n(n+1)/2\\), the space is isomorphic to \\(\\mathbb{R}^{n(n+1)/2}\\).'
                },
                {
                    question: 'Let \\(V\\) and \\(W\\) be finite-dimensional with \\(\\dim V = \\dim W\\). Prove that \\(T: V \\to W\\) is an isomorphism if and only if \\(\\ker T = \\{0\\}\\).',
                    hint: 'Use the Dimension Theorem: if nullity = 0 and \\(\\dim V = \\dim W\\), what is the rank?',
                    solution: '(\\(\\Rightarrow\\)) Clear: isomorphisms are injective. (\\(\\Leftarrow\\)) If \\(\\ker T = \\{0\\}\\), then nullity = 0. By the Dimension Theorem, \\(\\operatorname{rank} = \\dim V = \\dim W\\), so \\(\\operatorname{im} T = W\\). Thus \\(T\\) is bijective.'
                },
                {
                    question: 'Give an example of two vector spaces that are isomorphic as sets (same cardinality) but not isomorphic as vector spaces.',
                    hint: 'Think about \\(\\mathbb{R}\\) and \\(\\mathbb{R}^2\\) as sets vs. as vector spaces over \\(\\mathbb{R}\\).',
                    solution: '\\(\\mathbb{R}\\) and \\(\\mathbb{R}^2\\) both have cardinality \\(|\\mathbb{R}|\\) (there exists a bijection between them as sets). But as vector spaces over \\(\\mathbb{R}\\), \\(\\dim \\mathbb{R} = 1 \\neq 2 = \\dim \\mathbb{R}^2\\), so they are not isomorphic.'
                },
                {
                    question: 'Let \\(T: V \\to V\\) be an isomorphism and \\(U \\subseteq V\\) a subspace. Prove that \\(T(U) = \\{T(u) : u \\in U\\}\\) is a subspace of \\(V\\) with \\(\\dim T(U) = \\dim U\\).',
                    hint: 'Use the restriction \\(T|_U: U \\to V\\). Since \\(T\\) is injective, the restriction is injective. What does the Dimension Theorem say?',
                    solution: '\\(T(U)\\) is a subspace (as the image of a subspace under a linear map). The restriction \\(T|_U: U \\to T(U)\\) is a linear bijection (injective because \\(T\\) is, surjective by definition of \\(T(U)\\)). So \\(T|_U\\) is an isomorphism, and \\(\\dim T(U) = \\dim U\\).'
                }
            ]
        }
    ]
});
