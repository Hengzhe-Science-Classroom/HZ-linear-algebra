window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch18',
    number: 18,
    title: 'Quadratic Forms & Positive Definiteness',
    subtitle: 'When is x^T A x always positive? The geometry of curvature',
    sections: [
        // ============================================================
        // SECTION 1: Quadratic Forms
        // ============================================================
        {
            id: 'ch18-sec01',
            title: 'Quadratic Forms',
            content: `
                <h2>Quadratic Forms</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We introduce quadratic forms \\(Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}\\), show that every quadratic form has a unique associated symmetric matrix, and develop the geometric intuition of quadratic forms as "curved bowls" in higher dimensions.</p>

                <p>A quadratic form is a homogeneous polynomial of degree 2 in several variables. In one variable, \\(Q(x) = ax^2\\) is the simplest example: its sign depends on \\(a\\). In several variables, the situation is richer and leads to profound connections with eigenvalues and geometry.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.1 (Quadratic Form)</div>
                    <div class="env-body">
                        <p>A <strong>quadratic form</strong> on \\(\\mathbb{R}^n\\) is a function \\(Q \\colon \\mathbb{R}^n \\to \\mathbb{R}\\) of the form</p>
                        \\[Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} = \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j\\]
                        <p>where \\(A = [a_{ij}]\\) is an \\(n \\times n\\) real matrix.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 18.2</div>
                    <div class="env-body">
                        <p>For \\(n = 2\\), let \\(A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}\\). Then</p>
                        \\[Q(x_1, x_2) = \\begin{bmatrix} x_1 & x_2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = 2x_1^2 + 3x_1 x_2 + x_2 x_1 + 4x_2^2 = 2x_1^2 + 4x_1 x_2 + 4x_2^2.\\]
                    </div>
                </div>

                <p>Notice that the cross terms \\(a_{12}\\) and \\(a_{21}\\) both contribute to the coefficient of \\(x_1 x_2\\). This means different matrices can produce the same quadratic form. To remove this ambiguity, we work with symmetric matrices.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.3 (Symmetric Representative)</div>
                    <div class="env-body">
                        <p>Every quadratic form \\(Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}\\) can be written as \\(Q(\\mathbf{x}) = \\mathbf{x}^T B \\mathbf{x}\\) where \\(B = \\frac{1}{2}(A + A^T)\\) is symmetric. Moreover, \\(B\\) is the <em>unique</em> symmetric matrix representing \\(Q\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(\\mathbf{x}^T A \\mathbf{x}\\) is a scalar, it equals its own transpose: \\(\\mathbf{x}^T A \\mathbf{x} = (\\mathbf{x}^T A \\mathbf{x})^T = \\mathbf{x}^T A^T \\mathbf{x}\\). Adding these two expressions and dividing by 2 gives \\(\\mathbf{x}^T A \\mathbf{x} = \\mathbf{x}^T \\left(\\frac{A + A^T}{2}\\right) \\mathbf{x}\\), and \\(B = \\frac{1}{2}(A + A^T)\\) is symmetric.</p>
                        <p>For uniqueness: if \\(B_1\\) and \\(B_2\\) are both symmetric with \\(\\mathbf{x}^T B_1 \\mathbf{x} = \\mathbf{x}^T B_2 \\mathbf{x}\\) for all \\(\\mathbf{x}\\), then \\(\\mathbf{x}^T(B_1 - B_2)\\mathbf{x} = 0\\) for all \\(\\mathbf{x}\\). Setting \\(\\mathbf{x} = \\mathbf{e}_i\\) gives \\((B_1)_{ii} = (B_2)_{ii}\\), and setting \\(\\mathbf{x} = \\mathbf{e}_i + \\mathbf{e}_j\\) gives \\((B_1)_{ij} + (B_1)_{ji} = (B_2)_{ij} + (B_2)_{ji}\\). Since both are symmetric, \\((B_1)_{ij} = (B_2)_{ij}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Convention</div>
                    <div class="env-body">
                        <p>From now on, when we write "the matrix of a quadratic form," we always mean the unique symmetric matrix \\(A = A^T\\).</p>
                    </div>
                </div>

                <h3>The Two-Variable Case</h3>

                <p>For \\(n = 2\\), the general quadratic form with symmetric matrix is:</p>
                \\[Q(x, y) = \\begin{bmatrix} x & y \\end{bmatrix} \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = ax^2 + 2bxy + cy^2.\\]

                <p>The contour curves \\(Q(x,y) = k\\) are conic sections (ellipses, hyperbolas, or degenerate cases), and their shape is governed by the eigenvalues of the matrix.</p>

                <div class="viz-placeholder" data-viz="quadratic-form-contours"></div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Picture</div>
                    <div class="env-body">
                        <p>Think of \\(z = Q(x, y)\\) as a surface over the \\(xy\\)-plane. When both eigenvalues are positive, the surface is a bowl opening upward (positive definite). When they have opposite signs, it is a saddle (indefinite). The contour lines reveal this geometry: ellipses for bowls, hyperbolas for saddles.</p>
                    </div>
                </div>

                <h3>Diagonalization by the Spectral Theorem</h3>

                <p>Since \\(A\\) is symmetric, the spectral theorem (Chapter 16) guarantees an orthogonal diagonalization \\(A = P \\Lambda P^T\\) where \\(P\\) is orthogonal and \\(\\Lambda = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\). Substituting \\(\\mathbf{y} = P^T \\mathbf{x}\\):</p>
                \\[Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} = \\mathbf{x}^T P \\Lambda P^T \\mathbf{x} = \\mathbf{y}^T \\Lambda \\mathbf{y} = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots + \\lambda_n y_n^2.\\]

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.4 (Principal Axis Theorem)</div>
                    <div class="env-body">
                        <p>Every quadratic form \\(Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}\\) with \\(A\\) symmetric can be reduced, by the orthogonal change of variables \\(\\mathbf{x} = P \\mathbf{y}\\), to a form with no cross terms:</p>
                        \\[Q = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots + \\lambda_n y_n^2\\]
                        <p>where \\(\\lambda_1, \\ldots, \\lambda_n\\) are the eigenvalues of \\(A\\) and the columns of \\(P\\) are the corresponding orthonormal eigenvectors.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 18.5</div>
                    <div class="env-body">
                        <p>Consider \\(Q(x_1, x_2) = 5x_1^2 + 4x_1 x_2 + 5x_2^2\\). The associated symmetric matrix is \\(A = \\begin{bmatrix} 5 & 2 \\\\ 2 & 5 \\end{bmatrix}\\) with eigenvalues \\(\\lambda_1 = 7\\) and \\(\\lambda_2 = 3\\). In principal axes: \\(Q = 7y_1^2 + 3y_2^2\\). Since both eigenvalues are positive, \\(Q > 0\\) for all \\(\\mathbf{x} \\neq \\mathbf{0}\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'quadratic-form-contours',
                    title: 'Interactive Quadratic Form Contours',
                    description: 'Drag the sliders to change the symmetric matrix entries \\(a, b, c\\) and watch the contour plot of \\(Q(x,y) = ax^2 + 2bxy + cy^2\\) update in real time. Eigenvalues and classification are shown.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var a = 2, b = 1, c = 3;

                        VizEngine.createSlider(controls, 'a: ', -4, 6, a, 0.2, function(v) { a = v; });
                        VizEngine.createSlider(controls, 'b: ', -4, 4, b, 0.2, function(v) { b = v; });
                        VizEngine.createSlider(controls, 'c: ', -4, 6, c, 0.2, function(v) { c = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Compute eigenvalues
                            var tr = a + c;
                            var det = a * c - b * b;
                            var disc = tr * tr - 4 * det;
                            var lam1, lam2;
                            if (disc < 0) {
                                lam1 = tr / 2;
                                lam2 = tr / 2;
                            } else {
                                var sq = Math.sqrt(disc);
                                lam1 = (tr + sq) / 2;
                                lam2 = (tr - sq) / 2;
                            }

                            // Determine classification
                            var classification;
                            if (lam1 > 1e-10 && lam2 > 1e-10) classification = 'Positive Definite';
                            else if (lam1 >= -1e-10 && lam2 >= -1e-10) classification = 'Positive Semidefinite';
                            else if (lam1 < -1e-10 && lam2 < -1e-10) classification = 'Negative Definite';
                            else if (lam1 <= 1e-10 && lam2 <= 1e-10) classification = 'Negative Semidefinite';
                            else classification = 'Indefinite';

                            var classColor = (classification === 'Positive Definite') ? viz.colors.green :
                                             (classification === 'Negative Definite') ? viz.colors.red :
                                             (classification === 'Indefinite') ? viz.colors.orange : viz.colors.yellow;

                            // Draw contour lines
                            var levels = [-8, -4, -2, -1, -0.5, 0.5, 1, 2, 4, 8];
                            var contourColors = {
                                pos: viz.colors.blue + '88',
                                neg: viz.colors.red + '88',
                                zero: viz.colors.white
                            };

                            for (var li = 0; li < levels.length; li++) {
                                var level = levels[li];
                                var color = level > 0 ? contourColors.pos : contourColors.neg;
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                var started = false;
                                // Parametric sweep: sample points on the contour
                                for (var th = 0; th <= 2 * Math.PI + 0.05; th += 0.02) {
                                    var cx = Math.cos(th);
                                    var cy = Math.sin(th);
                                    var qval = a * cx * cx + 2 * b * cx * cy + c * cy * cy;
                                    if (Math.abs(qval) < 1e-8) continue;
                                    var r2 = level / qval;
                                    if (r2 < 0) { started = false; continue; }
                                    var r = Math.sqrt(r2);
                                    var px = cx * r;
                                    var py = cy * r;
                                    if (Math.abs(px) > 8 || Math.abs(py) > 8) { started = false; continue; }
                                    var sp = viz.toScreen(px, py);
                                    if (!started) { ctx.moveTo(sp[0], sp[1]); started = true; }
                                    else ctx.lineTo(sp[0], sp[1]);
                                }
                                ctx.stroke();
                            }

                            // Draw eigenvector directions
                            if (disc >= 0) {
                                var M = [[a, b], [b, c]];
                                var ev1 = VizEngine.eigenvector2(M, lam1);
                                var ev2 = VizEngine.eigenvector2(M, lam2);
                                viz.drawLine(0, 0, ev1[0], ev1[1], viz.colors.teal, 1.5, true);
                                viz.drawLine(0, 0, ev2[0], ev2[1], viz.colors.purple, 1.5, true);
                            }

                            // Info panel
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('A = [' + a.toFixed(1) + ', ' + b.toFixed(1) + '; ' + b.toFixed(1) + ', ' + c.toFixed(1) + ']', 12, 12);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('\u03BB\u2081 = ' + lam1.toFixed(3), 12, 30);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('\u03BB\u2082 = ' + lam2.toFixed(3), 12, 46);
                            ctx.fillStyle = classColor;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText(classification, 12, 64);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write the quadratic form \\(Q(x_1, x_2) = 3x_1^2 - 2x_1 x_2 + 5x_2^2\\) in the form \\(\\mathbf{x}^T A \\mathbf{x}\\) with \\(A\\) symmetric.',
                    hint: 'The diagonal entries of \\(A\\) are the coefficients of \\(x_i^2\\). The off-diagonal entry \\(a_{12} = a_{21}\\) is half the coefficient of \\(x_1 x_2\\).',
                    solution: 'The coefficient of \\(x_1^2\\) is 3, of \\(x_2^2\\) is 5, and of \\(x_1 x_2\\) is \\(-2\\). So \\(a_{12} = a_{21} = -1\\). Thus \\(A = \\begin{bmatrix} 3 & -1 \\\\ -1 & 5 \\end{bmatrix}\\).'
                },
                {
                    question: 'If \\(A\\) is a \\(3 \\times 3\\) skew-symmetric matrix (\\(A^T = -A\\)), show that \\(\\mathbf{x}^T A \\mathbf{x} = 0\\) for all \\(\\mathbf{x} \\in \\mathbb{R}^3\\).',
                    hint: 'Observe that \\(\\mathbf{x}^T A \\mathbf{x}\\) is a scalar, so it equals its transpose. Use \\(A^T = -A\\).',
                    solution: 'Since \\(\\mathbf{x}^T A \\mathbf{x}\\) is a \\(1 \\times 1\\) matrix, it equals its transpose: \\(\\mathbf{x}^T A \\mathbf{x} = (\\mathbf{x}^T A \\mathbf{x})^T = \\mathbf{x}^T A^T \\mathbf{x} = \\mathbf{x}^T(-A)\\mathbf{x} = -\\mathbf{x}^T A \\mathbf{x}\\). Hence \\(2\\mathbf{x}^T A \\mathbf{x} = 0\\), so \\(\\mathbf{x}^T A \\mathbf{x} = 0\\).'
                },
                {
                    question: 'Apply the Principal Axis Theorem to \\(Q(x,y) = 2x^2 + 4xy + 2y^2\\). Find the eigenvalues and the form of \\(Q\\) in principal axes.',
                    hint: 'The symmetric matrix is \\(A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix}\\). Compute \\(\\det(A - \\lambda I) = 0\\).',
                    solution: 'The characteristic polynomial is \\(\\lambda^2 - 4\\lambda = 0\\), so \\(\\lambda_1 = 4\\) and \\(\\lambda_2 = 0\\). In principal axes, \\(Q = 4y_1^2 + 0 \\cdot y_2^2 = 4y_1^2\\). The form is positive semidefinite (not positive definite, since one eigenvalue is zero).'
                },
                {
                    question: 'Let \\(Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}\\) where \\(A\\) is symmetric. Show that \\(\\nabla Q(\\mathbf{x}) = 2A\\mathbf{x}\\).',
                    hint: 'Write \\(Q(\\mathbf{x}) = \\sum_{i,j} a_{ij} x_i x_j\\) and compute \\(\\partial Q / \\partial x_k\\). Use symmetry of \\(A\\).',
                    solution: '\\(\\frac{\\partial Q}{\\partial x_k} = \\sum_j a_{kj} x_j + \\sum_i a_{ik} x_i = \\sum_j a_{kj} x_j + \\sum_j a_{jk} x_j\\). Since \\(A\\) is symmetric, \\(a_{kj} = a_{jk}\\), so this equals \\(2 \\sum_j a_{kj} x_j = 2(A\\mathbf{x})_k\\). In vector form, \\(\\nabla Q = 2A\\mathbf{x}\\).'
                },
                {
                    question: 'Find the maximum and minimum values of \\(Q(x,y) = 3x^2 + 2xy + 3y^2\\) on the unit circle \\(x^2 + y^2 = 1\\).',
                    hint: 'The eigenvalues of the associated symmetric matrix give the extreme values of \\(Q\\) on the unit sphere.',
                    solution: 'The symmetric matrix is \\(A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}\\) with eigenvalues \\(\\lambda_1 = 4\\) and \\(\\lambda_2 = 2\\). On the unit circle, \\(Q = \\lambda_1 y_1^2 + \\lambda_2 y_2^2\\) with \\(y_1^2 + y_2^2 = 1\\). The maximum is \\(\\lambda_1 = 4\\) (achieved along the eigenvector for \\(\\lambda_1\\)) and the minimum is \\(\\lambda_2 = 2\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Classification
        // ============================================================
        {
            id: 'ch18-sec02',
            title: 'Classification: Definite, Semidefinite, Indefinite',
            content: `
                <h2>Classification of Quadratic Forms</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We classify quadratic forms into five types based on their sign behavior, and show that the classification is completely determined by the eigenvalues of the associated symmetric matrix.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.6 (Classification of Quadratic Forms)</div>
                    <div class="env-body">
                        <p>Let \\(Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}\\) with \\(A\\) symmetric. Then \\(Q\\) (and \\(A\\)) is called:</p>
                        <ul>
                            <li><strong>Positive definite</strong> if \\(Q(\\mathbf{x}) > 0\\) for all \\(\\mathbf{x} \\neq \\mathbf{0}\\).</li>
                            <li><strong>Positive semidefinite</strong> if \\(Q(\\mathbf{x}) \\geq 0\\) for all \\(\\mathbf{x}\\).</li>
                            <li><strong>Negative definite</strong> if \\(Q(\\mathbf{x}) < 0\\) for all \\(\\mathbf{x} \\neq \\mathbf{0}\\).</li>
                            <li><strong>Negative semidefinite</strong> if \\(Q(\\mathbf{x}) \\leq 0\\) for all \\(\\mathbf{x}\\).</li>
                            <li><strong>Indefinite</strong> if \\(Q\\) takes both positive and negative values.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.7 (Eigenvalue Classification)</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be a real symmetric \\(n \\times n\\) matrix with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\). Then:</p>
                        <ul>
                            <li>\\(A\\) is positive definite \\(\\iff\\) all \\(\\lambda_i > 0\\).</li>
                            <li>\\(A\\) is positive semidefinite \\(\\iff\\) all \\(\\lambda_i \\geq 0\\).</li>
                            <li>\\(A\\) is negative definite \\(\\iff\\) all \\(\\lambda_i < 0\\).</li>
                            <li>\\(A\\) is negative semidefinite \\(\\iff\\) all \\(\\lambda_i \\leq 0\\).</li>
                            <li>\\(A\\) is indefinite \\(\\iff\\) \\(A\\) has both positive and negative eigenvalues.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the Principal Axis Theorem, there exists an orthogonal \\(P\\) such that \\(A = P\\Lambda P^T\\). With \\(\\mathbf{y} = P^T \\mathbf{x}\\), the map \\(\\mathbf{x} \\mapsto \\mathbf{y}\\) is a bijection (since \\(P\\) is invertible), and \\(\\mathbf{x} \\neq \\mathbf{0}\\) iff \\(\\mathbf{y} \\neq \\mathbf{0}\\). Now</p>
                        \\[Q(\\mathbf{x}) = \\mathbf{y}^T \\Lambda \\mathbf{y} = \\lambda_1 y_1^2 + \\cdots + \\lambda_n y_n^2.\\]
                        <p>If all \\(\\lambda_i > 0\\) and \\(\\mathbf{y} \\neq \\mathbf{0}\\), then at least one \\(y_i \\neq 0\\), so \\(Q > 0\\). Conversely, if some \\(\\lambda_k \\leq 0\\), taking \\(\\mathbf{y} = \\mathbf{e}_k\\) gives \\(Q = \\lambda_k \\leq 0\\), contradicting positive definiteness. The other cases follow analogously.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="definiteness-checker"></div>

                <div class="env-block example">
                    <div class="env-title">Example 18.8</div>
                    <div class="env-body">
                        <p>Classify each quadratic form:</p>
                        <p><strong>(a)</strong> \\(Q = 4x^2 + 4xy + 4y^2\\). Matrix: \\(A = \\begin{bmatrix} 4 & 2 \\\\ 2 & 4 \\end{bmatrix}\\). Eigenvalues: \\(6, 2\\). Both positive, so <em>positive definite</em>.</p>
                        <p><strong>(b)</strong> \\(Q = x^2 - 6xy + 9y^2\\). Matrix: \\(A = \\begin{bmatrix} 1 & -3 \\\\ -3 & 9 \\end{bmatrix}\\). Eigenvalues: \\(10, 0\\). <em>Positive semidefinite</em> (and \\(Q = (x - 3y)^2 \\geq 0\\), confirming this).</p>
                        <p><strong>(c)</strong> \\(Q = x^2 - y^2\\). Matrix: \\(A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}\\). Eigenvalues: \\(1, -1\\). <em>Indefinite</em>.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 18.9</div>
                    <div class="env-body">
                        <p>A symmetric matrix \\(A\\) is positive definite if and only if \\(A\\) is invertible and all its eigenvalues are positive. Equivalently, \\(A \\succ 0\\) implies \\(\\det(A) > 0\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Caution</div>
                    <div class="env-body">
                        <p>The converse of "positive definite implies \\(\\det(A) > 0\\)" is <strong>false</strong>. For instance, \\(A = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}\\) has \\(\\det(A) = 1 > 0\\) but is negative definite. You need <em>all</em> eigenvalues positive, not just a positive determinant.</p>
                    </div>
                </div>

                <h3>The Rayleigh Quotient</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.10 (Rayleigh Quotient)</div>
                    <div class="env-body">
                        <p>For a symmetric matrix \\(A\\) and nonzero vector \\(\\mathbf{x}\\), the <strong>Rayleigh quotient</strong> is</p>
                        \\[R(\\mathbf{x}) = \\frac{\\mathbf{x}^T A \\mathbf{x}}{\\mathbf{x}^T \\mathbf{x}}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.11 (Min-Max Characterization)</div>
                    <div class="env-body">
                        <p>If \\(A\\) is symmetric with eigenvalues \\(\\lambda_1 \\geq \\lambda_2 \\geq \\cdots \\geq \\lambda_n\\), then</p>
                        \\[\\lambda_n = \\min_{\\mathbf{x} \\neq \\mathbf{0}} R(\\mathbf{x}), \\qquad \\lambda_1 = \\max_{\\mathbf{x} \\neq \\mathbf{0}} R(\\mathbf{x}).\\]
                        <p>The extrema are achieved at the corresponding eigenvectors.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Meaning</div>
                    <div class="env-body">
                        <p>The Rayleigh quotient \\(R(\\mathbf{x})\\) measures how much \\(A\\) "stretches" the direction \\(\\mathbf{x}\\). The maximum stretching occurs along the dominant eigenvector (largest eigenvalue), and the minimum along the last eigenvector (smallest eigenvalue). The quadratic form \\(Q\\) on the unit sphere is exactly the Rayleigh quotient.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'definiteness-checker',
                    title: 'Positive/Negative Definiteness Checker',
                    description: 'Enter the entries of a 2\\(\\times\\)2 symmetric matrix and see its eigenvalues, classification, and contour plot.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });

                        // Input fields
                        var inputDiv = document.createElement('div');
                        inputDiv.style.cssText = 'display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap;margin-bottom:8px;';

                        function makeInput(label, val) {
                            var wrap = document.createElement('span');
                            wrap.style.cssText = 'display:inline-flex;align-items:center;gap:3px;';
                            var lbl = document.createElement('span');
                            lbl.textContent = label;
                            lbl.style.cssText = 'color:#8b949e;font-size:0.82rem;';
                            var inp = document.createElement('input');
                            inp.type = 'number';
                            inp.value = val;
                            inp.step = '0.5';
                            inp.style.cssText = 'width:56px;padding:3px 5px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.82rem;text-align:center;';
                            wrap.appendChild(lbl);
                            wrap.appendChild(inp);
                            return { el: wrap, inp: inp };
                        }

                        var aInp = makeInput('a\u2081\u2081 =', '3');
                        var bInp = makeInput('a\u2081\u2082 =', '1');
                        var cInp = makeInput('a\u2082\u2082 =', '2');
                        inputDiv.appendChild(aInp.el);
                        inputDiv.appendChild(bInp.el);
                        inputDiv.appendChild(cInp.el);
                        container.appendChild(inputDiv);

                        var resultDiv = document.createElement('div');
                        resultDiv.style.cssText = 'text-align:center;color:#c9d1d9;font-size:0.85rem;min-height:40px;margin-bottom:4px;';
                        container.appendChild(resultDiv);

                        function draw() {
                            var a = parseFloat(aInp.inp.value) || 0;
                            var b = parseFloat(bInp.inp.value) || 0;
                            var c = parseFloat(cInp.inp.value) || 0;

                            var tr = a + c;
                            var det = a * c - b * b;
                            var disc = tr * tr - 4 * det;
                            var lam1, lam2;
                            if (disc < 0) { lam1 = tr / 2; lam2 = tr / 2; }
                            else { var sq = Math.sqrt(disc); lam1 = (tr + sq) / 2; lam2 = (tr - sq) / 2; }

                            var cls, clr;
                            if (lam1 > 1e-10 && lam2 > 1e-10) { cls = 'POSITIVE DEFINITE'; clr = '#3fb950'; }
                            else if (lam1 >= -1e-10 && lam2 >= -1e-10) { cls = 'POSITIVE SEMIDEFINITE'; clr = '#d29922'; }
                            else if (lam1 < -1e-10 && lam2 < -1e-10) { cls = 'NEGATIVE DEFINITE'; clr = '#f85149'; }
                            else if (lam1 <= 1e-10 && lam2 <= 1e-10) { cls = 'NEGATIVE SEMIDEFINITE'; clr = '#f0883e'; }
                            else { cls = 'INDEFINITE'; clr = '#bc8cff'; }

                            resultDiv.innerHTML = '<span style="color:' + clr + ';font-weight:bold;">' + cls + '</span> &mdash; '
                                + '\u03BB\u2081 = ' + lam1.toFixed(3) + ', \u03BB\u2082 = ' + lam2.toFixed(3)
                                + ' &mdash; det = ' + det.toFixed(3) + ', tr = ' + tr.toFixed(3);

                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Draw contour lines
                            var levels = [-6, -3, -1.5, -0.5, 0.5, 1.5, 3, 6];
                            for (var li = 0; li < levels.length; li++) {
                                var level = levels[li];
                                var color = level > 0 ? viz.colors.blue + '99' : viz.colors.red + '99';
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.2;
                                ctx.beginPath();
                                var started = false;
                                for (var th = 0; th <= 2 * Math.PI + 0.05; th += 0.015) {
                                    var cx = Math.cos(th);
                                    var cy = Math.sin(th);
                                    var qval = a * cx * cx + 2 * b * cx * cy + c * cy * cy;
                                    if (Math.abs(qval) < 1e-8) { started = false; continue; }
                                    var r2 = level / qval;
                                    if (r2 < 0) { started = false; continue; }
                                    var r = Math.sqrt(r2);
                                    var px = cx * r;
                                    var py = cy * r;
                                    if (Math.abs(px) > 8 || Math.abs(py) > 8) { started = false; continue; }
                                    var sp = viz.toScreen(px, py);
                                    if (!started) { ctx.moveTo(sp[0], sp[1]); started = true; }
                                    else ctx.lineTo(sp[0], sp[1]);
                                }
                                ctx.stroke();
                            }

                            // Draw eigenvector directions
                            if (disc >= 0) {
                                var M = [[a, b], [b, c]];
                                var ev1 = VizEngine.eigenvector2(M, lam1);
                                var ev2 = VizEngine.eigenvector2(M, lam2);
                                viz.drawLine(0, 0, ev1[0], ev1[1], viz.colors.teal, 1.5, true);
                                viz.drawLine(0, 0, ev2[0], ev2[1], viz.colors.purple, 1.5, true);

                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                var sp1 = viz.toScreen(ev1[0] * 4.5, ev1[1] * 4.5);
                                ctx.fillText('\u03BB\u2081=' + lam1.toFixed(2), sp1[0] + 4, sp1[1]);
                                ctx.fillStyle = viz.colors.purple;
                                var sp2 = viz.toScreen(ev2[0] * 4.5, ev2[1] * 4.5);
                                ctx.fillText('\u03BB\u2082=' + lam2.toFixed(2), sp2[0] + 4, sp2[1]);
                            }
                        }

                        aInp.inp.addEventListener('input', draw);
                        bInp.inp.addEventListener('input', draw);
                        cInp.inp.addEventListener('input', draw);
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Classify the quadratic form \\(Q(x,y,z) = x^2 + 2y^2 + 3z^2 + 2xy\\). Find the eigenvalues of the associated symmetric matrix.',
                    hint: 'The symmetric matrix is \\(A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}\\). One eigenvalue is obvious from the block structure.',
                    solution: 'One eigenvalue is \\(\\lambda_3 = 3\\) (from the \\((3,3)\\) block). The upper-left \\(2 \\times 2\\) block \\(\\begin{bmatrix} 1 & 1 \\\\ 1 & 2 \\end{bmatrix}\\) has eigenvalues \\(\\frac{3 \\pm \\sqrt{5}}{2}\\), giving \\(\\lambda_1 \\approx 2.618\\) and \\(\\lambda_2 \\approx 0.382\\). All eigenvalues are positive, so \\(Q\\) is <em>positive definite</em>.'
                },
                {
                    question: 'Show that if \\(A \\succ 0\\) (positive definite), then \\(A^{-1} \\succ 0\\).',
                    hint: 'If \\(A\\) has eigenvalues \\(\\lambda_i > 0\\), what are the eigenvalues of \\(A^{-1}\\)?',
                    solution: 'If \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\) with \\(\\lambda > 0\\), then \\(A^{-1}\\mathbf{v} = \\frac{1}{\\lambda}\\mathbf{v}\\). Since \\(\\lambda > 0\\), we have \\(1/\\lambda > 0\\). All eigenvalues of \\(A^{-1}\\) are positive, so \\(A^{-1} \\succ 0\\).'
                },
                {
                    question: 'Let \\(A = \\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}\\). Compute the Rayleigh quotient \\(R(\\mathbf{x})\\) for \\(\\mathbf{x} = (1, 1)^T\\) and \\(\\mathbf{x} = (1, -1)^T\\). Verify that these give the eigenvalues.',
                    hint: 'Compute \\(\\mathbf{x}^T A \\mathbf{x}\\) and \\(\\mathbf{x}^T \\mathbf{x}\\) for each vector.',
                    solution: 'For \\(\\mathbf{x} = (1,1)^T\\): \\(\\mathbf{x}^T A \\mathbf{x} = 2 - 1 - 1 + 2 = 2\\), \\(\\mathbf{x}^T\\mathbf{x} = 2\\), so \\(R = 1\\). For \\(\\mathbf{x} = (1,-1)^T\\): \\(\\mathbf{x}^T A \\mathbf{x} = 2 + 1 + 1 + 2 = 6\\), \\(\\mathbf{x}^T\\mathbf{x} = 2\\), so \\(R = 3\\). Indeed, the eigenvalues are \\(\\lambda_1 = 3\\) and \\(\\lambda_2 = 1\\), and \\((1,1)^T\\) and \\((1,-1)^T\\) are the eigenvectors.'
                },
                {
                    question: 'Prove that if \\(A\\) and \\(B\\) are both positive definite, then \\(A + B\\) is positive definite.',
                    hint: 'Use the definition directly: \\(\\mathbf{x}^T(A+B)\\mathbf{x} = \\mathbf{x}^T A \\mathbf{x} + \\mathbf{x}^T B \\mathbf{x}\\).',
                    solution: 'For any \\(\\mathbf{x} \\neq \\mathbf{0}\\): \\(\\mathbf{x}^T(A+B)\\mathbf{x} = \\mathbf{x}^T A \\mathbf{x} + \\mathbf{x}^T B \\mathbf{x} > 0 + 0 = 0\\), since both \\(A\\) and \\(B\\) are positive definite. Hence \\(A + B\\) is positive definite.'
                },
                {
                    question: 'Is the matrix \\(A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}\\) positive definite? Find a specific nonzero vector \\(\\mathbf{x}\\) such that \\(\\mathbf{x}^T A \\mathbf{x} < 0\\).',
                    hint: 'Compute the eigenvalues. If one is negative, the corresponding eigenvector will give \\(Q < 0\\).',
                    solution: 'The eigenvalues are \\(\\lambda_1 = 3\\) and \\(\\lambda_2 = -1\\). Since \\(\\lambda_2 < 0\\), \\(A\\) is indefinite, not positive definite. The eigenvector for \\(\\lambda_2 = -1\\) is \\(\\mathbf{x} = (1, -1)^T\\): \\(\\mathbf{x}^T A \\mathbf{x} = 1 - 2 - 2 + 1 = -2 < 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Tests for Positive Definiteness
        // ============================================================
        {
            id: 'ch18-sec03',
            title: 'Tests for Positive Definiteness',
            content: `
                <h2>Tests for Positive Definiteness</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> Computing eigenvalues is expensive for large matrices. We present three practical tests for positive definiteness: the eigenvalue test (conceptual foundation), the leading principal minor test (Sylvester's criterion), and the Cholesky factorization test (algorithmic).</p>

                <h3>Test 1: Eigenvalue Test</h3>

                <p>We have already established this in Theorem 18.7: \\(A \\succ 0\\) if and only if all eigenvalues are positive. This is the conceptual gold standard but involves solving a degree-\\(n\\) polynomial, which is impractical for large \\(n\\).</p>

                <h3>Test 2: Leading Principal Minors (Sylvester's Criterion)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.12 (Leading Principal Minor)</div>
                    <div class="env-body">
                        <p>The \\(k\\)-th <strong>leading principal minor</strong> of an \\(n \\times n\\) matrix \\(A\\) is the determinant of the \\(k \\times k\\) upper-left submatrix:</p>
                        \\[\\Delta_k = \\det(A_k), \\quad \\text{where } A_k = \\begin{bmatrix} a_{11} & \\cdots & a_{1k} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{k1} & \\cdots & a_{kk} \\end{bmatrix}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.13 (Sylvester's Criterion)</div>
                    <div class="env-body">
                        <p>A symmetric matrix \\(A\\) is positive definite if and only if all its leading principal minors are positive:</p>
                        \\[\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\ldots, \\quad \\Delta_n > 0.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch for \\(n = 2\\))</div>
                    <div class="env-body">
                        <p>For \\(n = 2\\), \\(A = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}\\). We need \\(\\Delta_1 = a > 0\\) and \\(\\Delta_2 = ac - b^2 > 0\\).</p>
                        <p>(\\(\\Rightarrow\\)) If \\(A \\succ 0\\), then \\(\\mathbf{e}_1^T A \\mathbf{e}_1 = a > 0\\), and \\(\\det(A) = \\lambda_1 \\lambda_2 > 0\\) since both eigenvalues are positive.</p>
                        <p>(\\(\\Leftarrow\\)) If \\(a > 0\\) and \\(ac - b^2 > 0\\), then \\(\\operatorname{tr}(A) = a + c\\). Since \\(ac > b^2 \\geq 0\\) and \\(a > 0\\), we get \\(c > 0\\), so \\(\\operatorname{tr} > 0\\). Also \\(\\det > 0\\). Since eigenvalues satisfy \\(\\lambda_1 + \\lambda_2 = \\operatorname{tr} > 0\\) and \\(\\lambda_1 \\lambda_2 = \\det > 0\\), both eigenvalues must be positive.</p>
                        <p>The general case proceeds by induction on \\(n\\), using Schur complements.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 18.14</div>
                    <div class="env-body">
                        <p>Test whether \\(A = \\begin{bmatrix} 2 & -1 & 0 \\\\ -1 & 3 & -1 \\\\ 0 & -1 & 2 \\end{bmatrix}\\) is positive definite.</p>
                        <p>\\(\\Delta_1 = 2 > 0\\). \\(\\Delta_2 = \\det\\begin{bmatrix} 2 & -1 \\\\ -1 & 3 \\end{bmatrix} = 6 - 1 = 5 > 0\\). \\(\\Delta_3 = \\det(A) = 2(6-1) - (-1)(-2-0) + 0 = 10 - 2 = 8 > 0\\). All positive, so \\(A\\) is positive definite.</p>
                    </div>
                </div>

                <h3>Test 3: Cholesky Factorization</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.15</div>
                    <div class="env-body">
                        <p>A symmetric matrix \\(A\\) is positive definite if and only if \\(A\\) has a Cholesky factorization \\(A = LL^T\\) where \\(L\\) is lower triangular with positive diagonal entries.</p>
                    </div>
                </div>

                <p>This test is algorithmic: attempt the Cholesky factorization. If it succeeds (no square roots of negative numbers encountered), then \\(A \\succ 0\\). We develop this factorization fully in the next section.</p>

                <h3>Summary of Equivalent Conditions</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.16 (Equivalent Conditions for Positive Definiteness)</div>
                    <div class="env-body">
                        <p>For a symmetric matrix \\(A \\in \\mathbb{R}^{n \\times n}\\), the following are equivalent:</p>
                        <ol>
                            <li>\\(A\\) is positive definite (\\(\\mathbf{x}^T A \\mathbf{x} > 0\\) for all \\(\\mathbf{x} \\neq \\mathbf{0}\\)).</li>
                            <li>All eigenvalues of \\(A\\) are positive.</li>
                            <li>All leading principal minors of \\(A\\) are positive.</li>
                            <li>\\(A\\) has a Cholesky factorization \\(A = LL^T\\) with \\(L\\) lower triangular, \\(L_{ii} > 0\\).</li>
                            <li>All pivots in Gaussian elimination (without row exchanges) are positive.</li>
                            <li>\\(A = R^T R\\) for some invertible matrix \\(R\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Computational Cost</div>
                    <div class="env-body">
                        <p>Computing eigenvalues costs \\(O(n^3)\\) iterations. Sylvester's criterion requires \\(n\\) determinants. The Cholesky factorization costs \\(\\frac{1}{3}n^3\\) flops and is the fastest practical test. In numerical linear algebra, attempting a Cholesky factorization is the standard way to check positive definiteness.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Use Sylvester\'s criterion to determine whether \\(A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}\\) is positive definite.',
                    hint: 'Compute \\(\\Delta_1 = a_{11}\\) and \\(\\Delta_2 = \\det(A)\\).',
                    solution: '\\(\\Delta_1 = 1 > 0\\). \\(\\Delta_2 = 1 \\cdot 3 - 2^2 = -1 < 0\\). Since \\(\\Delta_2 < 0\\), \\(A\\) is not positive definite. (In fact it is indefinite, with eigenvalues \\(2 \\pm \\sqrt{5}\\).)'
                },
                {
                    question: 'Let \\(A = \\begin{bmatrix} 4 & 2 & 0 \\\\ 2 & 5 & 3 \\\\ 0 & 3 & 6 \\end{bmatrix}\\). Check positive definiteness using leading principal minors.',
                    hint: 'Compute \\(\\Delta_1\\), \\(\\Delta_2\\), \\(\\Delta_3\\) step by step.',
                    solution: '\\(\\Delta_1 = 4 > 0\\). \\(\\Delta_2 = 4 \\cdot 5 - 2^2 = 16 > 0\\). \\(\\Delta_3 = 4(30 - 9) - 2(12 - 0) + 0 = 84 - 24 = 60 > 0\\). All positive, so \\(A\\) is positive definite.'
                },
                {
                    question: 'If \\(A \\succ 0\\) and \\(c > 0\\), show that \\(cA \\succ 0\\).',
                    hint: 'Use the eigenvalue test or the definition directly.',
                    solution: 'For any \\(\\mathbf{x} \\neq \\mathbf{0}\\): \\(\\mathbf{x}^T(cA)\\mathbf{x} = c(\\mathbf{x}^T A \\mathbf{x}) > 0\\) since \\(c > 0\\) and \\(\\mathbf{x}^T A \\mathbf{x} > 0\\). Alternatively, the eigenvalues of \\(cA\\) are \\(c\\lambda_i\\), all positive.'
                },
                {
                    question: 'Prove that condition 6 in Theorem 18.16 (\\(A = R^T R\\) with \\(R\\) invertible) implies positive definiteness.',
                    hint: 'Compute \\(\\mathbf{x}^T A \\mathbf{x} = \\mathbf{x}^T R^T R \\mathbf{x}\\) and let \\(\\mathbf{y} = R\\mathbf{x}\\).',
                    solution: '\\(\\mathbf{x}^T A \\mathbf{x} = \\mathbf{x}^T R^T R \\mathbf{x} = (R\\mathbf{x})^T(R\\mathbf{x}) = \\|R\\mathbf{x}\\|^2 \\geq 0\\). Since \\(R\\) is invertible, \\(\\mathbf{x} \\neq \\mathbf{0}\\) implies \\(R\\mathbf{x} \\neq \\mathbf{0}\\), so \\(\\|R\\mathbf{x}\\|^2 > 0\\). Thus \\(A \\succ 0\\).'
                },
                {
                    question: 'Show that Sylvester\'s criterion does NOT work for testing positive <em>semi</em>definiteness. Give a counterexample.',
                    hint: 'Find a matrix with all leading principal minors \\(\\geq 0\\) that is not positive semidefinite.',
                    solution: 'Consider \\(A = \\begin{bmatrix} 0 & 0 \\\\ 0 & -1 \\end{bmatrix}\\). The leading principal minors are \\(\\Delta_1 = 0 \\geq 0\\) and \\(\\Delta_2 = 0 \\geq 0\\), but \\(A\\) is not positive semidefinite since \\(\\mathbf{e}_2^T A \\mathbf{e}_2 = -1 < 0\\). Sylvester\'s criterion (all minors \\(\\geq 0\\)) is necessary but not sufficient for PSD; one must check <em>all</em> principal minors, not just leading ones.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Cholesky Factorization
        // ============================================================
        {
            id: 'ch18-sec04',
            title: 'Cholesky Factorization',
            content: `
                <h2>Cholesky Factorization</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We derive the Cholesky factorization \\(A = LL^T\\), prove its existence and uniqueness for positive definite matrices, present the algorithm, and discuss its computational advantages over LU factorization.</p>

                <div class="env-block intuition">
                    <div class="env-title">Motivation</div>
                    <div class="env-body">
                        <p>The LU factorization writes \\(A = LU\\) as a product of lower and upper triangular matrices. For symmetric positive definite \\(A\\), we can do better: the upper triangular factor \\(U\\) is exactly \\(DL^T\\), and by absorbing \\(\\sqrt{D}\\) into \\(L\\), we get \\(A = LL^T\\). This is the Cholesky factorization; it is roughly twice as fast as LU and is the workhorse of numerical optimization.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.17 (Cholesky Factorization)</div>
                    <div class="env-body">
                        <p>If \\(A\\) is a real symmetric positive definite \\(n \\times n\\) matrix, then there exists a unique lower triangular matrix \\(L\\) with positive diagonal entries such that \\(A = LL^T\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (by induction on \\(n\\))</div>
                    <div class="env-body">
                        <p><strong>Base case (\\(n = 1\\)):</strong> \\(A = [a]\\) with \\(a > 0\\). Take \\(L = [\\sqrt{a}]\\).</p>
                        <p><strong>Inductive step:</strong> Partition \\(A\\) as</p>
                        \\[A = \\begin{bmatrix} A_{n-1} & \\mathbf{b} \\\\ \\mathbf{b}^T & c \\end{bmatrix}\\]
                        <p>where \\(A_{n-1}\\) is the \\((n-1) \\times (n-1)\\) leading submatrix (positive definite by Sylvester's criterion). By the inductive hypothesis, \\(A_{n-1} = L_{n-1}L_{n-1}^T\\). We seek</p>
                        \\[L = \\begin{bmatrix} L_{n-1} & \\mathbf{0} \\\\ \\boldsymbol{\\ell}^T & \\ell_{nn} \\end{bmatrix}\\]
                        <p>such that \\(LL^T = A\\). Expanding:</p>
                        <ul>
                            <li>\\(L_{n-1} \\boldsymbol{\\ell} = \\mathbf{b}\\), so \\(\\boldsymbol{\\ell} = L_{n-1}^{-1} \\mathbf{b}\\) (forward substitution).</li>
                            <li>\\(\\boldsymbol{\\ell}^T \\boldsymbol{\\ell} + \\ell_{nn}^2 = c\\), so \\(\\ell_{nn} = \\sqrt{c - \\|\\boldsymbol{\\ell}\\|^2}\\).</li>
                        </ul>
                        <p>The quantity under the square root is positive because \\(\\det(A) = \\det(A_{n-1})(c - \\mathbf{b}^T A_{n-1}^{-1} \\mathbf{b}) > 0\\) and \\(\\mathbf{b}^T A_{n-1}^{-1} \\mathbf{b} = \\|\\boldsymbol{\\ell}\\|^2\\).</p>
                        <p>Uniqueness follows from the requirement \\(\\ell_{nn} > 0\\) at each step.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h3>The Algorithm</h3>

                <p>The Cholesky algorithm computes \\(L\\) column by column:</p>
                \\[\\ell_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} \\ell_{jk}^2}, \\qquad \\ell_{ij} = \\frac{1}{\\ell_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} \\ell_{ik}\\ell_{jk}\\right) \\quad \\text{for } i > j.\\]

                <div class="env-block example">
                    <div class="env-title">Example 18.18</div>
                    <div class="env-body">
                        <p>Compute the Cholesky factorization of \\(A = \\begin{bmatrix} 4 & 2 \\\\ 2 & 5 \\end{bmatrix}\\).</p>
                        <p><strong>Step 1:</strong> \\(\\ell_{11} = \\sqrt{4} = 2\\).</p>
                        <p><strong>Step 2:</strong> \\(\\ell_{21} = \\frac{a_{21}}{\\ell_{11}} = \\frac{2}{2} = 1\\).</p>
                        <p><strong>Step 3:</strong> \\(\\ell_{22} = \\sqrt{a_{22} - \\ell_{21}^2} = \\sqrt{5 - 1} = 2\\).</p>
                        <p>So \\(L = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\). Check: \\(LL^T = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 4 & 2 \\\\ 2 & 5 \\end{bmatrix} = A\\). \\(\\checkmark\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cholesky-stepper"></div>

                <div class="env-block remark">
                    <div class="env-title">Computational Savings</div>
                    <div class="env-body">
                        <p>The Cholesky factorization requires approximately \\(\\frac{n^3}{3}\\) flops, compared to \\(\\frac{2n^3}{3}\\) for general LU factorization. It also requires no pivoting (the positive definiteness guarantees numerical stability), and it uses only half the storage (since \\(L\\) determines \\(L^T\\)).</p>
                    </div>
                </div>

                <h3>Connection to LU Factorization</h3>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 18.19</div>
                    <div class="env-body">
                        <p>If \\(A = LDL^T\\) is the \\(LDL^T\\) factorization (from Chapter 2) with unit lower triangular \\(L\\) and diagonal \\(D = \\operatorname{diag}(d_1, \\ldots, d_n)\\), then the Cholesky factor is \\(\\tilde{L} = L \\cdot \\operatorname{diag}(\\sqrt{d_1}, \\ldots, \\sqrt{d_n})\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 18.20</div>
                    <div class="env-body">
                        <p>The pivots in Gaussian elimination on a symmetric positive definite matrix are \\(d_1, \\ldots, d_n > 0\\), confirming condition 5 of Theorem 18.16.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'cholesky-stepper',
                    title: 'Cholesky Decomposition Stepper',
                    description: 'Watch the Cholesky factorization of a 3\\(\\times\\)3 positive definite matrix computed step by step.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 1, originX: 0, originY: 0 });

                        // Fixed PD matrix
                        var A = [[4, 2, -2], [2, 10, 2], [-2, 2, 5]];
                        var L = [[0,0,0],[0,0,0],[0,0,0]];
                        var step = 0;
                        var maxSteps = 6;
                        var descriptions = [
                            'Initial: A is symmetric positive definite. We will find L such that A = LL\u1d40.',
                            'Step 1: \u2113\u2081\u2081 = \u221a(a\u2081\u2081) = \u221a4 = 2',
                            'Step 2: \u2113\u2082\u2081 = a\u2082\u2081/\u2113\u2081\u2081 = 2/2 = 1, \u2113\u2083\u2081 = a\u2083\u2081/\u2113\u2081\u2081 = -2/2 = -1',
                            'Step 3: \u2113\u2082\u2082 = \u221a(a\u2082\u2082 - \u2113\u2082\u2081\u00b2) = \u221a(10 - 1) = 3',
                            'Step 4: \u2113\u2083\u2082 = (a\u2083\u2082 - \u2113\u2083\u2081\u2113\u2082\u2081)/\u2113\u2082\u2082 = (2 - (-1)(1))/3 = 1',
                            'Step 5: \u2113\u2083\u2083 = \u221a(a\u2083\u2083 - \u2113\u2083\u2081\u00b2 - \u2113\u2083\u2082\u00b2) = \u221a(5 - 1 - 1) = \u221a3 \u2248 1.732',
                            'Complete! A = LL\u1d40. Verify by multiplying.'
                        ];

                        // Precompute L values at each step
                        var Lsteps = [
                            [[0,0,0],[0,0,0],[0,0,0]],
                            [[2,0,0],[0,0,0],[0,0,0]],
                            [[2,0,0],[1,0,0],[-1,0,0]],
                            [[2,0,0],[1,3,0],[-1,0,0]],
                            [[2,0,0],[1,3,0],[-1,1,0]],
                            [[2,0,0],[1,3,0],[-1,1,Math.sqrt(3)]],
                            [[2,0,0],[1,3,0],[-1,1,Math.sqrt(3)]]
                        ];

                        var btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:4px;';
                        VizEngine.createButton(btnRow, '\u25c0 Prev', function() { if (step > 0) { step--; draw(); } });
                        VizEngine.createButton(btnRow, 'Next \u25b6', function() { if (step < maxSteps) { step++; draw(); } });
                        VizEngine.createButton(btnRow, 'Reset', function() { step = 0; draw(); });
                        container.appendChild(btnRow);

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var w = viz.width, h = viz.height;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cholesky Factorization: A = LL\u1d40', w / 2, 24);

                            // Step description
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText(descriptions[step], w / 2, 48);

                            // Draw matrix A
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('A =', 40, h * 0.35);
                            viz.drawMatrix(A, 60, h * 0.35 - 40, viz.colors.white, 56, 28, 13);

                            // Draw current L
                            var Lcur = Lsteps[step];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('L =', w / 2 - 50, h * 0.35);

                            // Highlight new entries
                            var cellW = 56, cellH = 28;
                            var lx = w / 2 - 30;
                            var ly = h * 0.35 - 40;

                            // Draw L matrix brackets and entries manually
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            var tw = 3 * cellW, th = 3 * cellH;
                            ctx.beginPath();
                            ctx.moveTo(lx, ly - 4); ctx.lineTo(lx - 6, ly - 4); ctx.lineTo(lx - 6, ly + th + 4); ctx.lineTo(lx, ly + th + 4);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(lx + tw, ly - 4); ctx.lineTo(lx + tw + 6, ly - 4); ctx.lineTo(lx + tw + 6, ly + th + 4); ctx.lineTo(lx + tw, ly + th + 4);
                            ctx.stroke();

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            for (var i = 0; i < 3; i++) {
                                for (var j = 0; j < 3; j++) {
                                    var val = Lcur[i][j];
                                    var isNew = false;
                                    if (step > 0) {
                                        var prev = Lsteps[step - 1][i][j];
                                        if (Math.abs(val - prev) > 1e-8) isNew = true;
                                    } else if (step === 0) {
                                        isNew = false;
                                    }
                                    ctx.fillStyle = isNew ? viz.colors.orange : (Math.abs(val) < 1e-8 ? viz.colors.muted : viz.colors.teal);
                                    var text = Math.abs(val) < 1e-8 ? '0' : (Number.isInteger(val) ? val.toString() : val.toFixed(3));
                                    ctx.fillText(text, lx + j * cellW + cellW / 2, ly + i * cellH + cellH / 2);
                                }
                            }

                            // If complete, show verification
                            if (step === maxSteps) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Verification: LL\u1d40 =', w / 2, h * 0.72);

                                // Compute LL^T
                                var result = [[0,0,0],[0,0,0],[0,0,0]];
                                var Lf = Lsteps[maxSteps];
                                for (var ii = 0; ii < 3; ii++) {
                                    for (var jj = 0; jj < 3; jj++) {
                                        var s = 0;
                                        for (var kk = 0; kk < 3; kk++) s += Lf[ii][kk] * Lf[jj][kk];
                                        result[ii][jj] = Math.round(s * 1000) / 1000;
                                    }
                                }
                                viz.drawMatrix(result, w / 2 - 80, h * 0.72 + 8, viz.colors.green, 56, 28, 13);
                            }

                            // Step indicator
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Step ' + step + ' / ' + maxSteps, w - 12, h - 10);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the Cholesky factorization of \\(A = \\begin{bmatrix} 9 & 6 \\\\ 6 & 8 \\end{bmatrix}\\).',
                    hint: 'Start with \\(\\ell_{11} = \\sqrt{a_{11}}\\), then find \\(\\ell_{21}\\) and \\(\\ell_{22}\\).',
                    solution: '\\(\\ell_{11} = \\sqrt{9} = 3\\). \\(\\ell_{21} = 6/3 = 2\\). \\(\\ell_{22} = \\sqrt{8 - 4} = 2\\). So \\(L = \\begin{bmatrix} 3 & 0 \\\\ 2 & 2 \\end{bmatrix}\\). Check: \\(LL^T = \\begin{bmatrix} 9 & 6 \\\\ 6 & 8 \\end{bmatrix} = A\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Explain why the Cholesky factorization of \\(A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}\\) fails. What does this tell you about \\(A\\)?',
                    hint: 'Try the algorithm: \\(\\ell_{11} = 1\\), \\(\\ell_{21} = 2\\), \\(\\ell_{22} = \\sqrt{3 - 4}\\).',
                    solution: 'We get \\(\\ell_{11} = 1\\), \\(\\ell_{21} = 2\\), \\(\\ell_{22} = \\sqrt{3 - 4} = \\sqrt{-1}\\), which is not real. The factorization fails, telling us \\(A\\) is <em>not</em> positive definite. (Indeed, \\(\\det(A) = -1 < 0\\), so \\(A\\) is indefinite.)'
                },
                {
                    question: 'Show that the Cholesky factor \\(L\\) of a positive definite matrix \\(A\\) has the property \\(\\det(L) = \\sqrt{\\det(A)}\\).',
                    hint: 'Use \\(\\det(A) = \\det(LL^T) = \\det(L)\\det(L^T)\\).',
                    solution: '\\(\\det(A) = \\det(LL^T) = \\det(L)\\det(L^T) = \\det(L)^2\\). Since \\(L\\) has positive diagonal entries, \\(\\det(L) = \\prod \\ell_{ii} > 0\\). Thus \\(\\det(L) = \\sqrt{\\det(A)}\\).'
                },
                {
                    question: 'Compute the Cholesky factorization of \\(A = \\begin{bmatrix} 1 & -1 & 0 \\\\ -1 & 5 & -2 \\\\ 0 & -2 & 6 \\end{bmatrix}\\).',
                    hint: 'Proceed column by column. For column 1: \\(\\ell_{11} = 1\\), \\(\\ell_{21} = -1\\), \\(\\ell_{31} = 0\\). Then column 2, and column 3.',
                    solution: 'Column 1: \\(\\ell_{11} = 1\\), \\(\\ell_{21} = -1\\), \\(\\ell_{31} = 0\\). Column 2: \\(\\ell_{22} = \\sqrt{5 - 1} = 2\\), \\(\\ell_{32} = (- 2 - 0)/2 = -1\\). Column 3: \\(\\ell_{33} = \\sqrt{6 - 0 - 1} = \\sqrt{5}\\). So \\(L = \\begin{bmatrix} 1 & 0 & 0 \\\\ -1 & 2 & 0 \\\\ 0 & -1 & \\sqrt{5} \\end{bmatrix}\\).'
                },
                {
                    question: 'Why does Cholesky factorization not require pivoting, unlike general LU factorization?',
                    hint: 'Think about what positive definiteness guarantees about the diagonal elements encountered during elimination.',
                    solution: 'In Cholesky, each diagonal element \\(\\ell_{jj} = \\sqrt{a_{jj} - \\sum_{k<j} \\ell_{jk}^2}\\) is the square root of a positive number (guaranteed by positive definiteness of the leading submatrix). Since all pivots are positive, no row exchanges are needed for numerical stability. This is a significant computational advantage: no pivoting strategy is required, and the algorithm is unconditionally stable.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Applications: Optimization and Hessians
        // ============================================================
        {
            id: 'ch18-sec05',
            title: 'Applications: Optimization and Hessians',
            content: `
                <h2>Applications: Optimization and Hessians</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We connect quadratic forms to multivariable optimization via the Hessian matrix. The second derivative test generalizes from single-variable calculus, and positive definiteness of the Hessian characterizes local minima. We conclude with convexity.</p>

                <h3>The Hessian Matrix</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.21 (Hessian Matrix)</div>
                    <div class="env-body">
                        <p>Let \\(f \\colon \\mathbb{R}^n \\to \\mathbb{R}\\) be twice continuously differentiable. The <strong>Hessian matrix</strong> of \\(f\\) at \\(\\mathbf{x}\\) is the \\(n \\times n\\) symmetric matrix</p>
                        \\[H_f(\\mathbf{x}) = \\left[\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}\\right]_{i,j=1}^{n}.\\]
                        <p>By Clairaut's theorem (equality of mixed partials), \\(H_f\\) is symmetric.</p>
                    </div>
                </div>

                <h3>Taylor's Theorem and the Second Derivative Test</h3>

                <p>Recall Taylor's theorem in several variables around a critical point \\(\\mathbf{x}_0\\) (where \\(\\nabla f(\\mathbf{x}_0) = \\mathbf{0}\\)):</p>
                \\[f(\\mathbf{x}_0 + \\mathbf{h}) = f(\\mathbf{x}_0) + \\frac{1}{2} \\mathbf{h}^T H_f(\\mathbf{x}_0) \\mathbf{h} + O(\\|\\mathbf{h}\\|^3).\\]

                <p>For small \\(\\mathbf{h}\\), the sign of \\(f(\\mathbf{x}_0 + \\mathbf{h}) - f(\\mathbf{x}_0)\\) is determined by the quadratic form \\(\\mathbf{h}^T H_f \\mathbf{h}\\).</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.22 (Second Derivative Test in Several Variables)</div>
                    <div class="env-body">
                        <p>Let \\(f \\colon \\mathbb{R}^n \\to \\mathbb{R}\\) be \\(C^2\\) and let \\(\\mathbf{x}_0\\) be a critical point (\\(\\nabla f(\\mathbf{x}_0) = \\mathbf{0}\\)).</p>
                        <ul>
                            <li>If \\(H_f(\\mathbf{x}_0) \\succ 0\\) (positive definite), then \\(\\mathbf{x}_0\\) is a strict local minimum.</li>
                            <li>If \\(H_f(\\mathbf{x}_0) \\prec 0\\) (negative definite), then \\(\\mathbf{x}_0\\) is a strict local maximum.</li>
                            <li>If \\(H_f(\\mathbf{x}_0)\\) is indefinite, then \\(\\mathbf{x}_0\\) is a saddle point.</li>
                            <li>If \\(H_f(\\mathbf{x}_0)\\) is semidefinite (but not definite), the test is inconclusive.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (positive definite case)</div>
                    <div class="env-body">
                        <p>If \\(H = H_f(\\mathbf{x}_0) \\succ 0\\), let \\(\\lambda_{\\min}\\) be the smallest eigenvalue of \\(H\\). Then \\(\\mathbf{h}^T H \\mathbf{h} \\geq \\lambda_{\\min} \\|\\mathbf{h}\\|^2\\) for all \\(\\mathbf{h}\\). By continuity of second derivatives, for \\(\\|\\mathbf{h}\\|\\) small enough:</p>
                        \\[f(\\mathbf{x}_0 + \\mathbf{h}) - f(\\mathbf{x}_0) = \\frac{1}{2}\\mathbf{h}^T H \\mathbf{h} + O(\\|\\mathbf{h}\\|^3) \\geq \\frac{\\lambda_{\\min}}{2}\\|\\mathbf{h}\\|^2 - C\\|\\mathbf{h}\\|^3 = \\|\\mathbf{h}\\|^2\\left(\\frac{\\lambda_{\\min}}{2} - C\\|\\mathbf{h}\\|\\right) > 0\\]
                        <p>for \\(\\|\\mathbf{h}\\| < \\frac{\\lambda_{\\min}}{2C}\\). Hence \\(\\mathbf{x}_0\\) is a strict local minimum.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 18.23</div>
                    <div class="env-body">
                        <p>Classify the critical points of \\(f(x, y) = x^3 + y^3 - 3xy\\).</p>
                        <p>Setting \\(\\nabla f = (3x^2 - 3y, 3y^2 - 3x) = \\mathbf{0}\\) gives \\(x^2 = y\\) and \\(y^2 = x\\), so \\(x^4 = x\\), yielding \\(x = 0\\) or \\(x = 1\\). Critical points: \\((0,0)\\) and \\((1,1)\\).</p>
                        <p>The Hessian is \\(H = \\begin{bmatrix} 6x & -3 \\\\ -3 & 6y \\end{bmatrix}\\).</p>
                        <p>At \\((0,0)\\): \\(H = \\begin{bmatrix} 0 & -3 \\\\ -3 & 0 \\end{bmatrix}\\) with eigenvalues \\(\\pm 3\\). <em>Indefinite</em>, so \\((0,0)\\) is a <strong>saddle point</strong>.</p>
                        <p>At \\((1,1)\\): \\(H = \\begin{bmatrix} 6 & -3 \\\\ -3 & 6 \\end{bmatrix}\\) with eigenvalues \\(9\\) and \\(3\\). <em>Positive definite</em>, so \\((1,1)\\) is a <strong>local minimum</strong>.</p>
                    </div>
                </div>

                <h3>Convexity</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 18.24 (Convex Function)</div>
                    <div class="env-body">
                        <p>A \\(C^2\\) function \\(f \\colon \\mathbb{R}^n \\to \\mathbb{R}\\) is <strong>convex</strong> if and only if \\(H_f(\\mathbf{x}) \\succeq 0\\) (positive semidefinite) for all \\(\\mathbf{x} \\in \\mathbb{R}^n\\). It is <strong>strictly convex</strong> if \\(H_f(\\mathbf{x}) \\succ 0\\) for all \\(\\mathbf{x}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 18.25</div>
                    <div class="env-body">
                        <p>If \\(f\\) is strictly convex, then any critical point is the unique global minimum of \\(f\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\mathbf{x}_0\\) be a critical point. For any \\(\\mathbf{x} \\neq \\mathbf{x}_0\\), the function \\(g(t) = f(\\mathbf{x}_0 + t(\\mathbf{x} - \\mathbf{x}_0))\\) satisfies \\(g'(0) = 0\\) (since \\(\\nabla f(\\mathbf{x}_0) = \\mathbf{0}\\)) and \\(g''(t) = (\\mathbf{x} - \\mathbf{x}_0)^T H_f(\\cdot)(\\mathbf{x} - \\mathbf{x}_0) > 0\\). So \\(g\\) is strictly convex on \\(\\mathbb{R}\\), and \\(g(1) > g(0)\\), i.e., \\(f(\\mathbf{x}) > f(\\mathbf{x}_0)\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why This Matters</div>
                    <div class="env-body">
                        <p>In optimization (machine learning, economics, engineering), convexity is the dividing line between "easy" and "hard" problems. A convex optimization problem has <em>no local minima traps</em>; every local minimum is global. The condition for convexity is precisely that the Hessian (a quadratic form!) is positive semidefinite everywhere. This is why positive definiteness appears throughout optimization theory.</p>
                    </div>
                </div>

                <h3>The Two-Variable Case Revisited</h3>

                <p>For \\(f(x,y)\\) with critical point at \\((x_0, y_0)\\), the Hessian is</p>
                \\[H = \\begin{bmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{bmatrix}.\\]

                <p>By Sylvester's criterion:</p>
                <ul>
                    <li><strong>Local min:</strong> \\(f_{xx} > 0\\) and \\(f_{xx} f_{yy} - f_{xy}^2 > 0\\).</li>
                    <li><strong>Local max:</strong> \\(f_{xx} < 0\\) and \\(f_{xx} f_{yy} - f_{xy}^2 > 0\\).</li>
                    <li><strong>Saddle:</strong> \\(f_{xx} f_{yy} - f_{xy}^2 < 0\\).</li>
                </ul>

                <p>This recovers the familiar second derivative test from multivariable calculus, now understood through the lens of quadratic forms and positive definiteness.</p>

                <div class="env-block remark">
                    <div class="env-title">The Determinant Condition</div>
                    <div class="env-body">
                        <p>The quantity \\(D = f_{xx}f_{yy} - f_{xy}^2 = \\det(H)\\) is called the <strong>discriminant</strong>. When \\(D > 0\\), the eigenvalues have the same sign (both positive if \\(f_{xx} > 0\\), both negative if \\(f_{xx} < 0\\)). When \\(D < 0\\), the eigenvalues have opposite signs, giving a saddle.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Find and classify all critical points of \\(f(x,y) = x^2 + xy + y^2 + x - y\\).',
                    hint: 'Set \\(\\nabla f = (2x + y + 1, x + 2y - 1) = \\mathbf{0}\\) and solve. Then compute the Hessian.',
                    solution: 'From \\(2x + y = -1\\) and \\(x + 2y = 1\\): \\(x = -1\\), \\(y = 1\\). The Hessian is \\(H = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}\\) with eigenvalues \\(3\\) and \\(1\\), both positive. So \\((-1, 1)\\) is a <strong>strict local minimum</strong> (in fact, global, since \\(H\\) is constant and positive definite, making \\(f\\) strictly convex).'
                },
                {
                    question: 'Show that \\(f(x,y) = e^{x^2 + y^2}\\) is strictly convex in a neighborhood of the origin.',
                    hint: 'Compute the Hessian at \\((0,0)\\) and check positive definiteness.',
                    solution: '\\(f_x = 2xe^{x^2+y^2}\\), \\(f_{xx} = (2 + 4x^2)e^{x^2+y^2}\\), \\(f_{yy} = (2 + 4y^2)e^{x^2+y^2}\\), \\(f_{xy} = 4xye^{x^2+y^2}\\). At \\((0,0)\\): \\(H = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = 2I \\succ 0\\). By continuity, \\(H \\succ 0\\) in a neighborhood of the origin, so \\(f\\) is strictly convex there.'
                },
                {
                    question: 'If \\(A \\succ 0\\) and \\(\\mathbf{b} \\in \\mathbb{R}^n\\), show that \\(f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} - \\mathbf{b}^T \\mathbf{x}\\) has a unique minimizer at \\(\\mathbf{x}^* = A^{-1}\\mathbf{b}\\).',
                    hint: 'Compute \\(\\nabla f\\) and set it to zero. Then check the Hessian.',
                    solution: '\\(\\nabla f = A\\mathbf{x} - \\mathbf{b} = \\mathbf{0}\\) gives \\(\\mathbf{x}^* = A^{-1}\\mathbf{b}\\) (exists and is unique since \\(A \\succ 0\\) implies \\(A\\) is invertible). The Hessian is \\(H_f = A \\succ 0\\) everywhere, so \\(f\\) is strictly convex and \\(\\mathbf{x}^*\\) is the unique global minimum.'
                },
                {
                    question: 'The function \\(f(x,y) = x^4 + y^4\\) has a critical point at \\((0,0)\\). What does the second derivative test say? Is \\((0,0)\\) actually a minimum?',
                    hint: 'Compute the Hessian at \\((0,0)\\). What happens when the Hessian is semidefinite?',
                    solution: 'The Hessian at \\((0,0)\\) is \\(H = \\begin{bmatrix} 12x^2 & 0 \\\\ 0 & 12y^2 \\end{bmatrix}\\bigg|_{(0,0)} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}\\), which is positive semidefinite (all eigenvalues are zero). The test is <em>inconclusive</em>. However, \\(f(x,y) = x^4 + y^4 \\geq 0 = f(0,0)\\) for all \\((x,y)\\), so \\((0,0)\\) is indeed a global minimum. The second derivative test fails to detect it because the leading behavior is fourth-order, not second-order.'
                },
                {
                    question: 'In least squares regression, we minimize \\(\\|A\\mathbf{x} - \\mathbf{b}\\|^2 = \\mathbf{x}^T A^T A \\mathbf{x} - 2\\mathbf{b}^T A \\mathbf{x} + \\|\\mathbf{b}\\|^2\\). Show that if \\(A\\) has full column rank, then \\(A^T A\\) is positive definite and the minimizer is unique.',
                    hint: 'Show \\(\\mathbf{x}^T A^T A \\mathbf{x} = \\|A\\mathbf{x}\\|^2\\) and use the full rank condition.',
                    solution: '\\(\\mathbf{x}^T(A^T A)\\mathbf{x} = (A\\mathbf{x})^T(A\\mathbf{x}) = \\|A\\mathbf{x}\\|^2 \\geq 0\\). If \\(\\mathbf{x} \\neq \\mathbf{0}\\) and \\(A\\) has full column rank, then \\(A\\mathbf{x} \\neq \\mathbf{0}\\), so \\(\\|A\\mathbf{x}\\|^2 > 0\\). Hence \\(A^T A \\succ 0\\). The Hessian of the objective is \\(2A^T A \\succ 0\\), so the objective is strictly convex with unique minimizer \\(\\mathbf{x}^* = (A^T A)^{-1} A^T \\mathbf{b}\\).'
                }
            ]
        }
    ]
});
