// === Chapter 10: Eigenvalues & Eigenvectors ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: 'Eigenvalues & Eigenvectors',
    subtitle: 'Finding the directions that a matrix merely stretches',
    sections: [
        // ========== SECTION 1: Definition and Geometric Meaning ==========
        {
            id: 'sec10-1-definition',
            title: 'Definition and Geometric Meaning',
            content: `
<h2>10.1 Definition and Geometric Meaning</h2>

<div class="env-block intuition"><div class="env-title">Intuition — Why Eigenvalues?</div><div class="env-body">
A linear transformation \\(T: \\mathbb{R}^n \\to \\mathbb{R}^n\\) generally changes both the direction and length of a vector. But some special vectors only get scaled (stretched, shrunk, or flipped), without any change in direction. These are the <em>eigenvectors</em>, and the scaling factors are the <em>eigenvalues</em>. Understanding these special directions reveals the essential geometry of the transformation.
</div></div>

<p>Let \\(A\\) be an \\(n \\times n\\) matrix. When we apply \\(A\\) to an arbitrary vector \\(\\mathbf{v}\\), the result \\(A\\mathbf{v}\\) typically points in a completely different direction. But for certain nonzero vectors, the output is simply a scalar multiple of the input.</p>

<div class="env-block definition"><div class="env-title">Definition 10.1.1 — Eigenvalue and Eigenvector</div><div class="env-body">
Let \\(A\\) be an \\(n \\times n\\) matrix. A scalar \\(\\lambda\\) is called an <em>eigenvalue</em> of \\(A\\) if there exists a nonzero vector \\(\\mathbf{v} \\in \\mathbb{R}^n\\) such that
\\[
A\\mathbf{v} = \\lambda \\mathbf{v}.
\\]
Any such nonzero vector \\(\\mathbf{v}\\) is called an <em>eigenvector</em> of \\(A\\) corresponding to \\(\\lambda\\).
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
The zero vector is never considered an eigenvector, even though \\(A\\mathbf{0} = \\lambda\\mathbf{0}\\) trivially for any \\(\\lambda\\). The eigenvalue \\(\\lambda\\), however, is allowed to be zero.
</div></div>

<h3>Geometric Interpretation</h3>

<p>The equation \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\) says that the matrix \\(A\\) acts on \\(\\mathbf{v}\\) by simply rescaling it:</p>
<ul>
<li>If \\(\\lambda > 1\\), the eigenvector is <em>stretched</em>.</li>
<li>If \\(0 < \\lambda < 1\\), it is <em>shrunk</em>.</li>
<li>If \\(\\lambda < 0\\), it is <em>flipped</em> (reversed in direction) and possibly scaled.</li>
<li>If \\(\\lambda = 1\\), the eigenvector is <em>fixed</em> by the transformation.</li>
<li>If \\(\\lambda = 0\\), the eigenvector is sent to \\(\\mathbf{0}\\); it lies in the null space of \\(A\\).</li>
</ul>

<div class="viz-placeholder" data-viz="viz-eigen-explorer"></div>

<div class="env-block example"><div class="env-title">Example 10.1.2</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\). Consider \\(\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\):
\\[
A\\mathbf{v}_1 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} = 2\\mathbf{v}_1.
\\]
So \\(\\mathbf{v}_1\\) is an eigenvector with eigenvalue \\(\\lambda_1 = 2\\). Now consider \\(\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\):
\\[
A\\mathbf{v}_2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix} = 3\\mathbf{v}_2.
\\]
So \\(\\mathbf{v}_2\\) is an eigenvector with eigenvalue \\(\\lambda_2 = 3\\).
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 10.1.3</div><div class="env-body">
If \\(\\mathbf{v}\\) is an eigenvector of \\(A\\) corresponding to \\(\\lambda\\), then any nonzero scalar multiple \\(c\\mathbf{v}\\) (\\(c \\neq 0\\)) is also an eigenvector corresponding to \\(\\lambda\\).
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
\\(A(c\\mathbf{v}) = c(A\\mathbf{v}) = c(\\lambda \\mathbf{v}) = \\lambda(c\\mathbf{v})\\). Since \\(c \\neq 0\\) and \\(\\mathbf{v} \\neq \\mathbf{0}\\), we have \\(c\\mathbf{v} \\neq \\mathbf{0}\\).
<div class="qed">∎</div>
</div></div>

<div class="env-block warning"><div class="env-title">Warning</div><div class="env-body">
Eigenvalues and eigenvectors are defined only for <em>square</em> matrices. If \\(A\\) is \\(m \\times n\\) with \\(m \\neq n\\), the equation \\(A\\mathbf{v} = \\lambda\\mathbf{v}\\) makes no dimensional sense.
</div></div>

<h3>Eigenvalues of Familiar Matrices</h3>

<div class="env-block example"><div class="env-title">Example 10.1.4 — Identity and Zero Matrices</div><div class="env-body">
<ul>
<li>The identity matrix \\(I_n\\) has eigenvalue \\(\\lambda = 1\\) and every nonzero vector is an eigenvector.</li>
<li>The zero matrix \\(O_n\\) has eigenvalue \\(\\lambda = 0\\) and every nonzero vector is an eigenvector.</li>
<li>A diagonal matrix \\(D = \\operatorname{diag}(d_1, \\ldots, d_n)\\) has eigenvalues \\(d_1, \\ldots, d_n\\), with \\(\\mathbf{e}_i\\) as the corresponding eigenvectors.</li>
</ul>
</div></div>

<div class="env-block example"><div class="env-title">Example 10.1.5 — Projection Matrix</div><div class="env-body">
The projection matrix onto the \\(x\\)-axis is \\(P = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}\\). It has eigenvalue \\(\\lambda_1 = 1\\) with eigenvector \\(\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\), and eigenvalue \\(\\lambda_2 = 0\\) with eigenvector \\(\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\). Notice: every vector on the \\(x\\)-axis is fixed, and every vector on the \\(y\\)-axis is killed.
</div></div>
`,
            visualizations: [
                {
                    id: 'viz-eigen-explorer',
                    title: 'Eigenvalue Explorer',
                    description: 'Adjust the entries of a 2\\(\\times\\)2 matrix and observe how it transforms vectors. Eigenvectors (shown in green/purple) stay on their original line through the origin; all other vectors change direction. Drag the blue vector to see how arbitrary vectors are transformed.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 45 });
                        let a = 2, b = 1, c = 0, d = 3;

                        const sa = VizEngine.createSlider(controls, 'a', -4, 4, a, 0.1, v => { a = v; draw(); });
                        const sb = VizEngine.createSlider(controls, 'b', -4, 4, b, 0.1, v => { b = v; draw(); });
                        const sc = VizEngine.createSlider(controls, 'c', -4, 4, c, 0.1, v => { c = v; draw(); });
                        const sd = VizEngine.createSlider(controls, 'd', -4, 4, d, 0.1, v => { d = v; draw(); });

                        const probe = viz.addDraggable('probe', 1.5, 0.5, viz.colors.blue, 8, () => draw());

                        function draw() {
                            const M = [[a, b], [c, d]];
                            viz.clear();
                            viz.drawGrid();
                            viz.drawTransformedGrid(M, 6, viz.colors.grid + '55');
                            viz.drawAxes();

                            // Draw eigenvectors if real
                            const eigs = VizEngine.eigenvalues2(M);
                            if (eigs) {
                                const [l1, l2] = eigs;
                                const ev1 = VizEngine.eigenvector2(M, l1);
                                const ev2 = VizEngine.eigenvector2(M, l2);

                                // Draw eigenspaces as lines
                                viz.drawLine(0, 0, ev1[0], ev1[1], viz.colors.green + '55', 1.5);
                                viz.drawLine(0, 0, ev2[0], ev2[1], viz.colors.purple + '55', 1.5);

                                // Draw eigenvectors and their images
                                const s1 = 2;
                                viz.drawVec(ev1[0] * s1, ev1[1] * s1, viz.colors.green, 'v\u2081', 2.5);
                                viz.drawVec(ev1[0] * s1 * l1, ev1[1] * s1 * l1, viz.colors.green + '88', '\u03BB\u2081v\u2081', 1.5);

                                viz.drawVec(ev2[0] * s1, ev2[1] * s1, viz.colors.purple, 'v\u2082', 2.5);
                                viz.drawVec(ev2[0] * s1 * l2, ev2[1] * s1 * l2, viz.colors.purple + '88', '\u03BB\u2082v\u2082', 1.5);

                                // Labels
                                viz.screenText('\u03BB\u2081 = ' + l1.toFixed(2), 14, 20, viz.colors.green, 13, 'left');
                                viz.screenText('\u03BB\u2082 = ' + l2.toFixed(2), 14, 38, viz.colors.purple, 13, 'left');
                            } else {
                                viz.screenText('Complex eigenvalues (rotation)', 14, 20, viz.colors.red, 13, 'left');
                            }

                            // Probe vector and its image
                            const px = probe.x, py = probe.y;
                            const [tx, ty] = VizEngine.matVec(M, [px, py]);
                            viz.drawVec(px, py, viz.colors.blue, 'v', 2);
                            viz.drawVec(tx, ty, viz.colors.orange, 'Av', 2);

                            // Matrix display
                            viz.drawMatrix(M, viz.width - 130, 10, viz.colors.white, 50, 26, 13);

                            viz.drawDraggables();
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that \\(\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}\\) is an eigenvector of \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\). What is the corresponding eigenvalue?',
                    hint: 'Compute \\(A\\mathbf{v}\\) and check whether the result is a scalar multiple of \\(\\mathbf{v}\\).',
                    solution: '\\(A\\mathbf{v} = \\begin{pmatrix} 3-1 \\\\ 1-3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix} = 2\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = 2\\mathbf{v}\\). So \\(\\lambda = 2\\).'
                },
                {
                    question: 'Show that \\(\\lambda = 0\\) is an eigenvalue of \\(A\\) if and only if \\(A\\) is singular.',
                    hint: '\\(\\lambda = 0\\) is an eigenvalue iff there is a nonzero \\(\\mathbf{v}\\) with \\(A\\mathbf{v} = \\mathbf{0}\\). What does this say about \\(\\operatorname{Nul} A\\)?',
                    solution: '\\(\\lambda = 0\\) is an eigenvalue iff \\(\\exists\\, \\mathbf{v} \\neq \\mathbf{0}\\) with \\(A\\mathbf{v} = 0\\mathbf{v} = \\mathbf{0}\\). This means \\(\\operatorname{Nul} A \\neq \\{\\mathbf{0}\\}\\), which is equivalent to \\(A\\) being singular (non-invertible).'
                },
                {
                    question: 'If \\(A\\mathbf{v} = 5\\mathbf{v}\\), what is \\(A^2\\mathbf{v}\\)?',
                    hint: 'Apply \\(A\\) to both sides of \\(A\\mathbf{v} = 5\\mathbf{v}\\).',
                    solution: '\\(A^2\\mathbf{v} = A(A\\mathbf{v}) = A(5\\mathbf{v}) = 5(A\\mathbf{v}) = 5 \\cdot 5\\mathbf{v} = 25\\mathbf{v}\\). More generally, \\(A^k\\mathbf{v} = \\lambda^k \\mathbf{v}\\).'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\) (a 90-degree rotation). Does \\(A\\) have any real eigenvalues?',
                    hint: 'Think geometrically: does a 90-degree rotation leave any direction invariant?',
                    solution: 'No. A 90-degree rotation changes the direction of every nonzero vector (no vector stays on its original line through the origin). Algebraically, the characteristic polynomial is \\(\\lambda^2 + 1 = 0\\), which has no real roots. The eigenvalues are \\(\\lambda = \\pm i\\).'
                },
                {
                    question: 'Find all eigenvalues and eigenvectors of the diagonal matrix \\(D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}\\).',
                    hint: 'For a diagonal matrix, the standard basis vectors are eigenvectors.',
                    solution: '\\(D\\mathbf{e}_1 = 4\\mathbf{e}_1\\) so \\(\\lambda_1 = 4\\) with eigenvector \\(\\mathbf{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\). \\(D\\mathbf{e}_2 = -2\\mathbf{e}_2\\) so \\(\\lambda_2 = -2\\) with eigenvector \\(\\mathbf{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Prove that if \\(\\mathbf{v}\\) is an eigenvector of \\(A\\) with eigenvalue \\(\\lambda\\), and \\(A\\) is invertible, then \\(\\mathbf{v}\\) is an eigenvector of \\(A^{-1}\\) with eigenvalue \\(1/\\lambda\\).',
                    hint: 'Start from \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\) and apply \\(A^{-1}\\) to both sides. Why must \\(\\lambda \\neq 0\\)?',
                    solution: 'Since \\(A\\) is invertible, \\(\\lambda \\neq 0\\) (otherwise \\(A\\mathbf{v} = \\mathbf{0}\\) with \\(\\mathbf{v} \\neq \\mathbf{0}\\), contradicting invertibility). Applying \\(A^{-1}\\): \\(\\mathbf{v} = A^{-1}(\\lambda \\mathbf{v}) = \\lambda A^{-1}\\mathbf{v}\\), so \\(A^{-1}\\mathbf{v} = \\frac{1}{\\lambda}\\mathbf{v}\\).'
                }
            ]
        },

        // ========== SECTION 2: The Characteristic Polynomial ==========
        {
            id: 'sec10-2-characteristic-polynomial',
            title: 'The Characteristic Polynomial',
            content: `
<h2>10.2 The Characteristic Polynomial</h2>

<p>In Section 10.1 we verified eigenvalues by direct computation: guess a vector, multiply, and check. But how do we <em>find</em> eigenvalues systematically? The key insight is to rewrite the eigenvalue equation as a homogeneous system and then use the determinant.</p>

<h3>Deriving the Characteristic Equation</h3>

<p>The equation \\(A\\mathbf{v} = \\lambda\\mathbf{v}\\) can be rewritten as:</p>
\\[
A\\mathbf{v} - \\lambda\\mathbf{v} = \\mathbf{0} \\quad \\Longrightarrow \\quad (A - \\lambda I)\\mathbf{v} = \\mathbf{0}.
\\]

<p>For a nonzero solution \\(\\mathbf{v}\\) to exist, the matrix \\(A - \\lambda I\\) must be singular. By the Invertible Matrix Theorem, this happens precisely when its determinant is zero.</p>

<div class="env-block theorem"><div class="env-title">Theorem 10.2.1 — The Characteristic Equation</div><div class="env-body">
A scalar \\(\\lambda\\) is an eigenvalue of an \\(n \\times n\\) matrix \\(A\\) if and only if
\\[
\\det(A - \\lambda I) = 0.
\\]
</div></div>

<div class="env-block definition"><div class="env-title">Definition 10.2.2 — Characteristic Polynomial</div><div class="env-body">
The <em>characteristic polynomial</em> of an \\(n \\times n\\) matrix \\(A\\) is
\\[
p(\\lambda) = \\det(A - \\lambda I).
\\]
It is a polynomial of degree \\(n\\) in \\(\\lambda\\). The eigenvalues of \\(A\\) are precisely the roots of \\(p(\\lambda)\\).
</div></div>

<div class="env-block remark"><div class="env-title">Remark — Convention</div><div class="env-body">
Some texts define the characteristic polynomial as \\(\\det(\\lambda I - A)\\), which differs from \\(\\det(A - \\lambda I)\\) by a factor of \\((-1)^n\\). Both conventions give the same roots (eigenvalues). We use \\(\\det(A - \\lambda I)\\) here.
</div></div>

<h3>The 2\\(\\times\\)2 Case</h3>

<div class="env-block proposition"><div class="env-title">Proposition 10.2.3</div><div class="env-body">
For a \\(2 \\times 2\\) matrix \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\), the characteristic polynomial is
\\[
p(\\lambda) = \\lambda^2 - (a + d)\\lambda + (ad - bc) = \\lambda^2 - \\operatorname{tr}(A)\\,\\lambda + \\det(A).
\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
\\[
A - \\lambda I = \\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix},
\\]
so \\(\\det(A - \\lambda I) = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)\\).
<div class="qed">∎</div>
</div></div>

<div class="env-block example"><div class="env-title">Example 10.2.4</div><div class="env-body">
Find the eigenvalues of \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\).

The characteristic polynomial is \\(p(\\lambda) = \\lambda^2 - 5\\lambda + 6 = (\\lambda - 2)(\\lambda - 3)\\).

The eigenvalues are \\(\\lambda_1 = 2\\) and \\(\\lambda_2 = 3\\).
</div></div>

<div class="viz-placeholder" data-viz="viz-char-poly"></div>

<h3>The General Case</h3>

<div class="env-block theorem"><div class="env-title">Theorem 10.2.5 — Structure of the Characteristic Polynomial</div><div class="env-body">
For an \\(n \\times n\\) matrix \\(A\\), the characteristic polynomial \\(p(\\lambda) = \\det(A - \\lambda I)\\) has the form
\\[
p(\\lambda) = (-1)^n \\lambda^n + (-1)^{n-1} \\operatorname{tr}(A)\\,\\lambda^{n-1} + \\cdots + \\det(A).
\\]
In particular, the leading coefficient is \\((-1)^n\\), the coefficient of \\(\\lambda^{n-1}\\) is \\((-1)^{n-1}\\operatorname{tr}(A)\\), and the constant term is \\(\\det(A)\\).
</div></div>

<div class="env-block corollary"><div class="env-title">Corollary 10.2.6</div><div class="env-body">
An \\(n \\times n\\) matrix has at most \\(n\\) eigenvalues (counting with multiplicity), since its characteristic polynomial has degree \\(n\\).
</div></div>

<div class="env-block example"><div class="env-title">Example 10.2.7 — A 3\\(\\times\\)3 Matrix</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}\\). Since \\(A\\) is triangular, \\(\\det(A - \\lambda I) = (2 - \\lambda)(3 - \\lambda)(2 - \\lambda)\\). The eigenvalues are \\(\\lambda = 2\\) (with algebraic multiplicity 2) and \\(\\lambda = 3\\) (with algebraic multiplicity 1).
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 10.2.8 — Eigenvalues of Triangular Matrices</div><div class="env-body">
The eigenvalues of a triangular matrix (upper or lower) are precisely its diagonal entries.
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
If \\(A\\) is triangular with diagonal entries \\(a_{11}, a_{22}, \\ldots, a_{nn}\\), then \\(A - \\lambda I\\) is also triangular with diagonal entries \\(a_{ii} - \\lambda\\). Hence
\\[
\\det(A - \\lambda I) = \\prod_{i=1}^n (a_{ii} - \\lambda),
\\]
whose roots are \\(\\lambda = a_{11}, a_{22}, \\ldots, a_{nn}\\).
<div class="qed">∎</div>
</div></div>
`,
            visualizations: [
                {
                    id: 'viz-char-poly',
                    title: 'Characteristic Polynomial Plotter',
                    description: 'Adjust the entries of a 2\\(\\times\\)2 matrix and see its characteristic polynomial \\(p(\\lambda) = \\lambda^2 - \\mathrm{tr}(A)\\lambda + \\det(A)\\). The roots (where the curve crosses the horizontal axis) are the eigenvalues.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40, originX: 200, originY: 200 });
                        let ma = 4, mb = -2, mc = 1, md = 1;

                        VizEngine.createSlider(controls, 'a', -5, 5, ma, 0.1, v => { ma = v; draw(); });
                        VizEngine.createSlider(controls, 'b', -5, 5, mb, 0.1, v => { mb = v; draw(); });
                        VizEngine.createSlider(controls, 'c', -5, 5, mc, 0.1, v => { mc = v; draw(); });
                        VizEngine.createSlider(controls, 'd', -5, 5, md, 0.1, v => { md = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const tr = ma + md;
                            const det = ma * md - mb * mc;
                            const disc = tr * tr - 4 * det;

                            // Draw characteristic polynomial p(lambda) = lambda^2 - tr*lambda + det
                            viz.drawFunction(lam => lam * lam - tr * lam + det, -5, 8, viz.colors.blue, 2.5);

                            // Label axes
                            viz.screenText('\u03BB', viz.width - 15, viz.originY - 10, viz.colors.text, 14);
                            viz.screenText('p(\u03BB)', viz.originX + 10, 15, viz.colors.text, 14);

                            // Mark eigenvalues
                            if (disc >= 0) {
                                const sq = Math.sqrt(disc);
                                const l1 = (tr + sq) / 2;
                                const l2 = (tr - sq) / 2;
                                viz.drawPoint(l1, 0, viz.colors.green, '\u03BB\u2081=' + l1.toFixed(2), 6);
                                viz.drawPoint(l2, 0, viz.colors.purple, '\u03BB\u2082=' + l2.toFixed(2), 6);
                            } else {
                                viz.screenText('No real roots (complex eigenvalues)', 14, viz.height - 20, viz.colors.red, 12, 'left');
                            }

                            // Info
                            viz.screenText('tr(A) = ' + tr.toFixed(2), 14, 18, viz.colors.teal, 12, 'left');
                            viz.screenText('det(A) = ' + det.toFixed(2), 14, 34, viz.colors.orange, 12, 'left');
                            viz.screenText('\u0394 = ' + disc.toFixed(2), 14, 50, disc >= 0 ? viz.colors.green : viz.colors.red, 12, 'left');

                            // Matrix display
                            viz.drawMatrix([[ma, mb], [mc, md]], viz.width - 130, viz.height - 70, viz.colors.white, 50, 26, 13);
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the characteristic polynomial and eigenvalues of \\(A = \\begin{pmatrix} 5 & -4 \\\\ 2 & -1 \\end{pmatrix}\\).',
                    hint: 'Use \\(p(\\lambda) = \\lambda^2 - \\operatorname{tr}(A)\\lambda + \\det(A)\\).',
                    solution: '\\(\\operatorname{tr}(A) = 4\\), \\(\\det(A) = -5 + 8 = 3\\). So \\(p(\\lambda) = \\lambda^2 - 4\\lambda + 3 = (\\lambda - 1)(\\lambda - 3)\\). Eigenvalues: \\(\\lambda = 1, 3\\).'
                },
                {
                    question: 'Find the eigenvalues of the \\(3 \\times 3\\) upper triangular matrix \\(A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}\\).',
                    hint: 'Use the theorem about triangular matrices.',
                    solution: 'The eigenvalues are the diagonal entries: \\(\\lambda_1 = 1\\), \\(\\lambda_2 = 4\\), \\(\\lambda_3 = 6\\).'
                },
                {
                    question: 'For what values of \\(k\\) does \\(A = \\begin{pmatrix} 2 & k \\\\ 0 & 3 \\end{pmatrix}\\) have eigenvalue \\(\\lambda = 2\\)?',
                    hint: 'The matrix is upper triangular. What are its eigenvalues, regardless of \\(k\\)?',
                    solution: 'Since \\(A\\) is upper triangular, its eigenvalues are always 2 and 3, for every value of \\(k\\). So \\(\\lambda = 2\\) is always an eigenvalue.'
                },
                {
                    question: 'Show that \\(A\\) and \\(A^T\\) have the same characteristic polynomial, hence the same eigenvalues.',
                    hint: 'Use the fact that \\(\\det(B) = \\det(B^T)\\) for any square matrix.',
                    solution: '\\(\\det(A^T - \\lambda I) = \\det((A - \\lambda I)^T) = \\det(A - \\lambda I)\\). So the characteristic polynomials are identical.'
                },
                {
                    question: 'Find all \\(2 \\times 2\\) matrices whose only eigenvalue is \\(\\lambda = 0\\).',
                    hint: 'If \\(\\lambda = 0\\) is the only eigenvalue (with multiplicity 2), what are \\(\\operatorname{tr}(A)\\) and \\(\\det(A)\\)?',
                    solution: 'The characteristic polynomial must be \\(\\lambda^2\\), so \\(\\operatorname{tr}(A) = a + d = 0\\) and \\(\\det(A) = ad - bc = 0\\). With \\(d = -a\\), we need \\(-a^2 - bc = 0\\), i.e., \\(bc = -a^2\\). The solutions form a family: \\(A = \\begin{pmatrix} a & b \\\\ -a^2/b & -a \\end{pmatrix}\\) for \\(b \\neq 0\\), or \\(A = \\begin{pmatrix} 0 & 0 \\\\ c & 0 \\end{pmatrix}\\).'
                }
            ]
        },

        // ========== SECTION 3: Finding Eigenvectors ==========
        {
            id: 'sec10-3-finding-eigenvectors',
            title: 'Finding Eigenvectors',
            content: `
<h2>10.3 Finding Eigenvectors</h2>

<p>Once we have found an eigenvalue \\(\\lambda\\), the corresponding eigenvectors are the nonzero solutions of the homogeneous system \\((A - \\lambda I)\\mathbf{v} = \\mathbf{0}\\). This is a null space computation, which we already know how to do via row reduction.</p>

<div class="env-block definition"><div class="env-title">Definition 10.3.1 — Eigenspace</div><div class="env-body">
The <em>eigenspace</em> of \\(A\\) corresponding to eigenvalue \\(\\lambda\\) is the null space of \\(A - \\lambda I\\):
\\[
E_\\lambda = \\operatorname{Nul}(A - \\lambda I) = \\{\\mathbf{v} \\in \\mathbb{R}^n : A\\mathbf{v} = \\lambda\\mathbf{v}\\}.
\\]
The eigenspace is a subspace of \\(\\mathbb{R}^n\\). The eigenvectors for \\(\\lambda\\) are exactly the nonzero vectors in \\(E_\\lambda\\).
</div></div>

<h3>The Procedure</h3>

<p>To find all eigenvalues and eigenvectors of an \\(n \\times n\\) matrix \\(A\\):</p>
<ol>
<li><strong>Find eigenvalues.</strong> Solve \\(\\det(A - \\lambda I) = 0\\) for \\(\\lambda\\).</li>
<li><strong>Find eigenvectors.</strong> For each eigenvalue \\(\\lambda\\), row reduce \\(A - \\lambda I\\) and find a basis for \\(\\operatorname{Nul}(A - \\lambda I)\\).</li>
</ol>

<div class="env-block example"><div class="env-title">Example 10.3.2 — Complete Eigenanalysis</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\).

<strong>Step 1.</strong> Characteristic polynomial: \\(p(\\lambda) = \\lambda^2 - 5\\lambda + 6 = (\\lambda - 2)(\\lambda - 3)\\). Eigenvalues: \\(\\lambda_1 = 2\\), \\(\\lambda_2 = 3\\).

<strong>Step 2a.</strong> For \\(\\lambda_1 = 2\\):
\\[
A - 2I = \\begin{pmatrix} 2 & -2 \\\\ 1 & -1 \\end{pmatrix} \\xrightarrow{\\text{RREF}} \\begin{pmatrix} 1 & -1 \\\\ 0 & 0 \\end{pmatrix}.
\\]
Free variable \\(x_2 = t\\), so \\(x_1 = t\\). Eigenvectors: \\(\\mathbf{v} = t\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). Basis for \\(E_2\\): \\(\\left\\{\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\right\\}\\).

<strong>Step 2b.</strong> For \\(\\lambda_2 = 3\\):
\\[
A - 3I = \\begin{pmatrix} 1 & -2 \\\\ 1 & -2 \\end{pmatrix} \\xrightarrow{\\text{RREF}} \\begin{pmatrix} 1 & -2 \\\\ 0 & 0 \\end{pmatrix}.
\\]
Free variable \\(x_2 = t\\), so \\(x_1 = 2t\\). Eigenvectors: \\(\\mathbf{v} = t\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\). Basis for \\(E_3\\): \\(\\left\\{\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\right\\}\\).
</div></div>

<div class="env-block example"><div class="env-title">Example 10.3.3 — A 3\\(\\times\\)3 Example</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 0 \\\\ 2 & -4 & 2 \\end{pmatrix}\\).

<strong>Step 1.</strong> Since \\(A\\) is not triangular, we compute:
\\[
\\det(A - \\lambda I) = \\det \\begin{pmatrix} 1-\\lambda & 2 & 0 \\\\ 0 & 3-\\lambda & 0 \\\\ 2 & -4 & 2-\\lambda \\end{pmatrix}.
\\]
Expanding along the third column (only one nonzero entry): \\(\\det = (2-\\lambda)\\det\\begin{pmatrix} 1-\\lambda & 2 \\\\ 0 & 3-\\lambda \\end{pmatrix} = (2-\\lambda)(1-\\lambda)(3-\\lambda)\\).

Eigenvalues: \\(\\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3\\).

<strong>Step 2.</strong> For \\(\\lambda_1 = 1\\): Row reduce \\(A - I\\) to find \\(E_1 = \\operatorname{span}\\left\\{\\begin{pmatrix} 1 \\\\ 0 \\\\ -2 \\end{pmatrix}\\right\\}\\).

For \\(\\lambda_2 = 2\\): Row reduce \\(A - 2I\\) to find \\(E_2 = \\operatorname{span}\\left\\{\\begin{pmatrix} 4 \\\\ 0 \\\\ -6 \\end{pmatrix}\\right\\} = \\operatorname{span}\\left\\{\\begin{pmatrix} 2 \\\\ 0 \\\\ -3 \\end{pmatrix}\\right\\}\\).

For \\(\\lambda_3 = 3\\): Row reduce \\(A - 3I\\) to find \\(E_3 = \\operatorname{span}\\left\\{\\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}\\right\\}\\).
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 10.3.4 — Linear Independence of Eigenvectors</div><div class="env-body">
Eigenvectors corresponding to <em>distinct</em> eigenvalues are linearly independent.
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
We prove the case of two distinct eigenvalues; the general case follows by induction. Let \\(A\\mathbf{v}_1 = \\lambda_1 \\mathbf{v}_1\\) and \\(A\\mathbf{v}_2 = \\lambda_2 \\mathbf{v}_2\\) with \\(\\lambda_1 \\neq \\lambda_2\\). Suppose \\(c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 = \\mathbf{0}\\). Applying \\(A\\):
\\[
c_1 \\lambda_1 \\mathbf{v}_1 + c_2 \\lambda_2 \\mathbf{v}_2 = \\mathbf{0}.
\\]
Subtracting \\(\\lambda_2\\) times the original equation:
\\[
c_1(\\lambda_1 - \\lambda_2)\\mathbf{v}_1 = \\mathbf{0}.
\\]
Since \\(\\lambda_1 \\neq \\lambda_2\\) and \\(\\mathbf{v}_1 \\neq \\mathbf{0}\\), we get \\(c_1 = 0\\). Then \\(c_2 \\mathbf{v}_2 = \\mathbf{0}\\) implies \\(c_2 = 0\\).
<div class="qed">∎</div>
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
This theorem is fundamental: it says that if an \\(n \\times n\\) matrix has \\(n\\) distinct eigenvalues, we automatically get \\(n\\) linearly independent eigenvectors, forming a basis for \\(\\mathbb{R}^n\\). This will be the key to diagonalization in Chapter 11.
</div></div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find all eigenvalues and eigenvectors of \\(A = \\begin{pmatrix} 1 & 6 \\\\ 5 & 2 \\end{pmatrix}\\).',
                    hint: 'Compute \\(p(\\lambda) = \\lambda^2 - 3\\lambda - 28\\) and factor.',
                    solution: '\\(p(\\lambda) = \\lambda^2 - 3\\lambda - 28 = (\\lambda - 7)(\\lambda + 4)\\). Eigenvalues: \\(\\lambda_1 = 7, \\lambda_2 = -4\\). For \\(\\lambda_1 = 7\\): \\(A - 7I = \\begin{pmatrix} -6 & 6 \\\\ 5 & -5 \\end{pmatrix}\\), giving eigenvector \\(\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). For \\(\\lambda_2 = -4\\): \\(A + 4I = \\begin{pmatrix} 5 & 6 \\\\ 5 & 6 \\end{pmatrix}\\), giving eigenvector \\(\\begin{pmatrix} 6 \\\\ -5 \\end{pmatrix}\\).'
                },
                {
                    question: 'Find the eigenvalues of \\(A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\). What goes wrong when you try to find real eigenvectors?',
                    hint: 'The characteristic polynomial is \\(\\lambda^2 + 1\\).',
                    solution: '\\(p(\\lambda) = \\lambda^2 + 1 = 0\\) has no real solutions. The eigenvalues are \\(\\lambda = \\pm i\\) (complex). Over \\(\\mathbb{R}\\), there are no eigenvectors; the matrix is a rotation by \\(90^\\circ\\).'
                },
                {
                    question: 'Find the eigenspace \\(E_2\\) for the matrix \\(A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}\\).',
                    hint: 'Compute \\(A - 2I\\) and find its null space.',
                    solution: '\\(A - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}\\). RREF gives \\(x_2 = 0, x_3 = 0, x_1\\) free. So \\(E_2 = \\operatorname{span}\\{\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}\\}\\), which is one-dimensional despite \\(\\lambda = 2\\) having algebraic multiplicity 2.'
                },
                {
                    question: 'Show that \\(\\lambda = 1\\) is an eigenvalue of any idempotent matrix \\(A \\neq O\\) (where \\(A^2 = A\\)).',
                    hint: 'If \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\), apply \\(A\\) to both sides and use \\(A^2 = A\\).',
                    solution: 'If \\(\\lambda\\) is an eigenvalue, then \\(A^2\\mathbf{v} = A(\\lambda \\mathbf{v}) = \\lambda^2 \\mathbf{v}\\). But \\(A^2 = A\\), so \\(\\lambda \\mathbf{v} = \\lambda^2 \\mathbf{v}\\), giving \\(\\lambda(\\lambda - 1)\\mathbf{v} = \\mathbf{0}\\). Since \\(\\mathbf{v} \\neq \\mathbf{0}\\), \\(\\lambda = 0\\) or \\(\\lambda = 1\\). Since \\(A \\neq O\\), there exists \\(\\mathbf{w}\\) with \\(A\\mathbf{w} \\neq \\mathbf{0}\\); let \\(\\mathbf{u} = A\\mathbf{w}\\). Then \\(A\\mathbf{u} = A^2\\mathbf{w} = A\\mathbf{w} = \\mathbf{u}\\), so \\(\\lambda = 1\\) is realized.'
                },
                {
                    question: 'Let \\(A\\) be a \\(2 \\times 2\\) matrix with eigenvalues \\(\\lambda_1, \\lambda_2\\) and corresponding eigenvectors \\(\\mathbf{v}_1, \\mathbf{v}_2\\). Express \\(\\mathbf{x} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}\\) as a linear combination of eigenvectors of \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\) and use this to compute \\(A^5\\mathbf{x}\\).',
                    hint: 'From Example 10.3.2, the eigenvectors are \\(\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\) and \\(\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\). Solve \\(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}\\).',
                    solution: 'Solving \\(c_1 + 2c_2 = 3\\) and \\(c_1 + c_2 = 1\\) gives \\(c_2 = 2, c_1 = -1\\). So \\(\\mathbf{x} = -\\mathbf{v}_1 + 2\\mathbf{v}_2\\). Then \\(A^5\\mathbf{x} = -2^5\\mathbf{v}_1 + 2 \\cdot 3^5\\mathbf{v}_2 = -32\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} + 486\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 940 \\\\ 454 \\end{pmatrix}\\).'
                }
            ]
        },

        // ========== SECTION 4: Eigenspaces and Multiplicity ==========
        {
            id: 'sec10-4-multiplicity',
            title: 'Eigenspaces and Multiplicity',
            content: `
<h2>10.4 Eigenspaces and Algebraic vs Geometric Multiplicity</h2>

<p>When an eigenvalue is a repeated root of the characteristic polynomial, a subtlety arises: the number of independent eigenvectors may be less than the root's multiplicity. This distinction is fundamental to understanding when diagonalization succeeds or fails.</p>

<div class="env-block definition"><div class="env-title">Definition 10.4.1 — Algebraic Multiplicity</div><div class="env-body">
The <em>algebraic multiplicity</em> of an eigenvalue \\(\\lambda\\) is its multiplicity as a root of the characteristic polynomial \\(p(\\lambda) = \\det(A - \\lambda I)\\). We denote it \\(\\operatorname{am}(\\lambda)\\).
</div></div>

<div class="env-block definition"><div class="env-title">Definition 10.4.2 — Geometric Multiplicity</div><div class="env-body">
The <em>geometric multiplicity</em> of an eigenvalue \\(\\lambda\\) is the dimension of its eigenspace:
\\[
\\operatorname{gm}(\\lambda) = \\dim E_\\lambda = \\dim \\operatorname{Nul}(A - \\lambda I).
\\]
This equals the number of free variables in the row reduction of \\(A - \\lambda I\\), or equivalently, \\(n - \\operatorname{rank}(A - \\lambda I)\\).
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 10.4.3 — Multiplicity Inequality</div><div class="env-body">
For every eigenvalue \\(\\lambda\\) of a matrix \\(A\\),
\\[
1 \\le \\operatorname{gm}(\\lambda) \\le \\operatorname{am}(\\lambda).
\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof (sketch)</div><div class="env-body">
The lower bound \\(\\operatorname{gm}(\\lambda) \\ge 1\\) holds because \\(\\lambda\\) is an eigenvalue, so there is at least one eigenvector, meaning \\(E_\\lambda \\neq \\{\\mathbf{0}\\}\\). The upper bound \\(\\operatorname{gm}(\\lambda) \\le \\operatorname{am}(\\lambda)\\) requires showing that if \\(E_\\lambda\\) has dimension \\(k\\), then \\((\\lambda - \\lambda_0)^k\\) divides the characteristic polynomial, which can be established by extending a basis for \\(E_\\lambda\\) to a basis for \\(\\mathbb{R}^n\\) and examining the matrix in that basis.
<div class="qed">∎</div>
</div></div>

<h3>Examples Illustrating the Distinction</h3>

<div class="env-block example"><div class="env-title">Example 10.4.4 — Multiplicity Match</div><div class="env-body">
Consider \\(A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} = 3I\\). The characteristic polynomial is \\((3 - \\lambda)^2\\), so \\(\\lambda = 3\\) has algebraic multiplicity 2.

\\(A - 3I = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}\\), so \\(E_3 = \\mathbb{R}^2\\) and geometric multiplicity is 2.

Here \\(\\operatorname{am}(3) = \\operatorname{gm}(3) = 2\\). Every nonzero vector is an eigenvector.
</div></div>

<div class="env-block example"><div class="env-title">Example 10.4.5 — Multiplicity Mismatch (Defective Matrix)</div><div class="env-body">
Consider \\(A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}\\). The characteristic polynomial is \\((3 - \\lambda)^2\\), so \\(\\lambda = 3\\) has algebraic multiplicity 2.

\\(A - 3I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\), so the null space is \\(\\operatorname{span}\\left\\{\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\right\\}\\) and geometric multiplicity is 1.

Here \\(\\operatorname{am}(3) = 2 > \\operatorname{gm}(3) = 1\\). This matrix is called <em>defective</em>.
</div></div>

<div class="env-block definition"><div class="env-title">Definition 10.4.6 — Defective Matrix</div><div class="env-body">
A square matrix \\(A\\) is called <em>defective</em> if for some eigenvalue \\(\\lambda\\), \\(\\operatorname{gm}(\\lambda) < \\operatorname{am}(\\lambda)\\). Equivalently, \\(A\\) does not have enough linearly independent eigenvectors to form a basis for \\(\\mathbb{R}^n\\).
</div></div>

<div class="env-block example"><div class="env-title">Example 10.4.7 — A 3\\(\\times\\)3 Case</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}\\). The eigenvalue \\(\\lambda = 2\\) has \\(\\operatorname{am}(2) = 2\\) and \\(\\operatorname{gm}(2) = 2\\) (both \\(\\mathbf{e}_1\\) and \\(\\mathbf{e}_2\\) are eigenvectors). The eigenvalue \\(\\lambda = 5\\) has \\(\\operatorname{am}(5) = 1\\) and \\(\\operatorname{gm}(5) = 1\\).

Now contrast with \\(B = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}\\). The eigenvalue \\(\\lambda = 2\\) still has \\(\\operatorname{am}(2) = 2\\), but \\(B - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}\\) has rank 2, so \\(\\operatorname{gm}(2) = 1\\). Matrix \\(B\\) is defective.
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 10.4.8</div><div class="env-body">
Let \\(A\\) be an \\(n \\times n\\) matrix with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_k\\) (distinct). Then:
\\[
\\sum_{i=1}^k \\operatorname{am}(\\lambda_i) = n \\quad \\text{(counting all roots of the characteristic polynomial)},
\\]
\\[
\\sum_{i=1}^k \\operatorname{gm}(\\lambda_i) \\le n.
\\]
Moreover, \\(A\\) has a basis of eigenvectors for \\(\\mathbb{R}^n\\) if and only if \\(\\operatorname{gm}(\\lambda_i) = \\operatorname{am}(\\lambda_i)\\) for every \\(i\\).
</div></div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find the algebraic and geometric multiplicities of each eigenvalue of \\(A = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 5 & 1 \\\\ 0 & 0 & 5 \\end{pmatrix}\\).',
                    hint: 'The characteristic polynomial is \\((5 - \\lambda)^3\\). For the geometric multiplicity, find \\(\\dim \\operatorname{Nul}(A - 5I)\\).',
                    solution: 'The only eigenvalue is \\(\\lambda = 5\\) with \\(\\operatorname{am}(5) = 3\\). \\(A - 5I = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\) has rank 1, so \\(\\operatorname{gm}(5) = 3 - 1 = 2\\). The matrix is defective.'
                },
                {
                    question: 'Give an example of a \\(3 \\times 3\\) matrix with eigenvalue \\(\\lambda = 2\\) of algebraic multiplicity 3 and geometric multiplicity 1.',
                    hint: 'Consider a Jordan block.',
                    solution: '\\(A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 2 \\end{pmatrix}\\). Then \\(A - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\) has rank 2, giving \\(\\operatorname{gm}(2) = 1\\).'
                },
                {
                    question: 'Prove that if \\(A\\) is an \\(n \\times n\\) matrix with \\(n\\) distinct eigenvalues, then \\(\\operatorname{gm}(\\lambda_i) = \\operatorname{am}(\\lambda_i) = 1\\) for each \\(i\\).',
                    hint: 'If there are \\(n\\) distinct eigenvalues and the characteristic polynomial has degree \\(n\\), what is each algebraic multiplicity?',
                    solution: 'Since the characteristic polynomial has degree \\(n\\) and has \\(n\\) distinct roots, each root has algebraic multiplicity 1. By the multiplicity inequality, \\(1 \\le \\operatorname{gm}(\\lambda_i) \\le \\operatorname{am}(\\lambda_i) = 1\\), so \\(\\operatorname{gm}(\\lambda_i) = 1\\).'
                },
                {
                    question: 'True or False: If \\(\\operatorname{gm}(\\lambda) = 2\\), then \\(\\operatorname{am}(\\lambda) = 2\\).',
                    hint: 'The inequality says \\(\\operatorname{gm} \\le \\operatorname{am}\\). Can the algebraic multiplicity be strictly larger?',
                    solution: 'False. The inequality guarantees \\(\\operatorname{am}(\\lambda) \\ge 2\\), but the algebraic multiplicity could be 3 or more. For example, \\(A = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}\\) has \\(\\lambda = 0\\) with \\(\\operatorname{am}(0) = 3\\) but \\(\\operatorname{gm}(0) = 3\\) as well. For a case with strict inequality: take \\(A = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\) with \\(\\operatorname{am}(0) = 3, \\operatorname{gm}(0) = 2\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(4 \\times 4\\) with characteristic polynomial \\((\\lambda - 1)^2(\\lambda + 3)^2\\). What are the possible values of \\(\\operatorname{gm}(1)\\) and \\(\\operatorname{gm}(-3)\\)?',
                    hint: 'Apply the multiplicity inequality to each eigenvalue.',
                    solution: 'For \\(\\lambda = 1\\): \\(\\operatorname{am}(1) = 2\\) so \\(1 \\le \\operatorname{gm}(1) \\le 2\\). For \\(\\lambda = -3\\): \\(\\operatorname{am}(-3) = 2\\) so \\(1 \\le \\operatorname{gm}(-3) \\le 2\\). The possible combinations are \\((\\operatorname{gm}(1), \\operatorname{gm}(-3)) \\in \\{(1,1), (1,2), (2,1), (2,2)\\}\\).'
                }
            ]
        },

        // ========== SECTION 5: Trace, Determinant, and Eigenvalues ==========
        {
            id: 'sec10-5-trace-det',
            title: 'Trace, Determinant, and Eigenvalues',
            content: `
<h2>10.5 Trace, Determinant, and Eigenvalues</h2>

<p>The trace and determinant of a matrix, which we studied in earlier chapters, have elegant interpretations in terms of eigenvalues. These relationships give us quick sanity checks and deeper structural insight.</p>

<div class="env-block theorem"><div class="env-title">Theorem 10.5.1 — Eigenvalue-Trace-Determinant Relations</div><div class="env-body">
Let \\(A\\) be an \\(n \\times n\\) matrix with eigenvalues \\(\\lambda_1, \\lambda_2, \\ldots, \\lambda_n\\) (counted with algebraic multiplicity, possibly complex). Then:
\\[
\\operatorname{tr}(A) = \\sum_{i=1}^n \\lambda_i, \\qquad \\det(A) = \\prod_{i=1}^n \\lambda_i.
\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
The characteristic polynomial factors as
\\[
\\det(A - \\lambda I) = (-1)^n(\\lambda - \\lambda_1)(\\lambda - \\lambda_2)\\cdots(\\lambda - \\lambda_n).
\\]
Setting \\(\\lambda = 0\\): \\(\\det(A) = (-1)^n(-\\lambda_1)(-\\lambda_2)\\cdots(-\\lambda_n) = \\lambda_1\\lambda_2\\cdots\\lambda_n\\).

For the trace, compare the coefficient of \\(\\lambda^{n-1}\\) on both sides. On the left, expanding \\(\\det(A - \\lambda I)\\) by the Leibniz formula, the \\(\\lambda^{n-1}\\) term comes from the product of diagonal entries \\(\\prod_i(a_{ii} - \\lambda)\\), giving coefficient \\((-1)^{n-1}(a_{11} + \\cdots + a_{nn}) = (-1)^{n-1}\\operatorname{tr}(A)\\). On the right, expanding \\((-1)^n\\prod(\\lambda - \\lambda_i)\\), the \\(\\lambda^{n-1}\\) coefficient is \\((-1)^{n-1}(\\lambda_1 + \\cdots + \\lambda_n)\\). Equating gives \\(\\operatorname{tr}(A) = \\sum \\lambda_i\\).
<div class="qed">∎</div>
</div></div>

<div class="env-block example"><div class="env-title">Example 10.5.2 — Verification</div><div class="env-body">
For \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\) with eigenvalues \\(\\lambda_1 = 2\\) and \\(\\lambda_2 = 3\\):
<ul>
<li>\\(\\operatorname{tr}(A) = 4 + 1 = 5 = 2 + 3 = \\lambda_1 + \\lambda_2\\). \\(\\checkmark\\)</li>
<li>\\(\\det(A) = 4(1) - (-2)(1) = 6 = 2 \\times 3 = \\lambda_1 \\lambda_2\\). \\(\\checkmark\\)</li>
</ul>
</div></div>

<div class="env-block corollary"><div class="env-title">Corollary 10.5.3</div><div class="env-body">
A matrix \\(A\\) is singular if and only if at least one of its eigenvalues is zero.
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
\\(A\\) is singular iff \\(\\det(A) = 0\\) iff \\(\\prod \\lambda_i = 0\\) iff some \\(\\lambda_i = 0\\).
<div class="qed">∎</div>
</div></div>

<h3>Applications of the Trace-Eigenvalue Relationship</h3>

<div class="env-block proposition"><div class="env-title">Proposition 10.5.4</div><div class="env-body">
For any \\(n \\times n\\) matrix \\(A\\) and any positive integer \\(k\\):
\\[
\\operatorname{tr}(A^k) = \\sum_{i=1}^n \\lambda_i^k.
\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
If \\(\\lambda\\) is an eigenvalue of \\(A\\), then \\(\\lambda^k\\) is an eigenvalue of \\(A^k\\) (with the same eigenvector). The eigenvalues of \\(A^k\\) are \\(\\lambda_1^k, \\ldots, \\lambda_n^k\\), and the trace of \\(A^k\\) is their sum.
<div class="qed">∎</div>
</div></div>

<div class="env-block example"><div class="env-title">Example 10.5.5 — Quick Eigenvalue Check</div><div class="env-body">
Suppose we are told that a \\(3 \\times 3\\) matrix \\(A\\) has \\(\\operatorname{tr}(A) = 6\\) and \\(\\det(A) = 8\\), with eigenvalues \\(1, 2, \\lambda_3\\). From the trace: \\(1 + 2 + \\lambda_3 = 6\\), so \\(\\lambda_3 = 3\\). Check: \\(\\det(A) = 1 \\cdot 2 \\cdot 3 = 6 \\neq 8\\). Contradiction; so the given information is inconsistent.
</div></div>

<h3>The 2\\(\\times\\)2 Eigenvalue Shortcut</h3>

<div class="env-block proposition"><div class="env-title">Proposition 10.5.6 — 2\\(\\times\\)2 Eigenvalue Formulas</div><div class="env-body">
For a \\(2 \\times 2\\) matrix with trace \\(t\\) and determinant \\(d\\), the eigenvalues are
\\[
\\lambda = \\frac{t \\pm \\sqrt{t^2 - 4d}}{2}.
\\]
In particular:
<ul>
<li>If \\(t^2 - 4d > 0\\): two distinct real eigenvalues.</li>
<li>If \\(t^2 - 4d = 0\\): one repeated real eigenvalue \\(\\lambda = t/2\\).</li>
<li>If \\(t^2 - 4d < 0\\): two complex conjugate eigenvalues.</li>
</ul>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 10.5.7 — Cayley-Hamilton (Statement)</div><div class="env-body">
Every square matrix satisfies its own characteristic polynomial. That is, if \\(p(\\lambda) = \\det(A - \\lambda I)\\), then \\(p(A) = O\\) (the zero matrix).
</div></div>

<div class="env-block example"><div class="env-title">Example 10.5.8 — Cayley-Hamilton in Action</div><div class="env-body">
For \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\) with \\(p(\\lambda) = \\lambda^2 - 5\\lambda + 6\\), Cayley-Hamilton asserts \\(A^2 - 5A + 6I = O\\). Verify:
\\[
A^2 = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix}, \\quad A^2 - 5A + 6I = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix} - \\begin{pmatrix} 20 & -10 \\\\ 5 & 5 \\end{pmatrix} + \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}. \\; \\checkmark
\\]
This gives \\(A^{-1} = \\frac{1}{6}(5I - A) = \\frac{1}{6}\\begin{pmatrix} 1 & 2 \\\\ -1 & 4 \\end{pmatrix}\\) as a bonus.
</div></div>

<div class="viz-placeholder" data-viz="viz-trace-det-eig"></div>
`,
            visualizations: [
                {
                    id: 'viz-trace-det-eig',
                    title: 'Trace, Determinant, and Eigenvalues',
                    description: 'Adjust a 2\\(\\times\\)2 matrix and observe the relationships: \\(\\lambda_1 + \\lambda_2 = \\operatorname{tr}(A)\\) and \\(\\lambda_1 \\lambda_2 = \\det(A)\\). The discriminant \\(\\Delta = \\operatorname{tr}^2 - 4\\det\\) determines whether eigenvalues are real or complex.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35, originX: 280, originY: 220 });
                        let ma = 3, mb = 1, mc = 0, md = 2;

                        VizEngine.createSlider(controls, 'a', -5, 5, ma, 0.1, v => { ma = v; draw(); });
                        VizEngine.createSlider(controls, 'b', -5, 5, mb, 0.1, v => { mb = v; draw(); });
                        VizEngine.createSlider(controls, 'c', -5, 5, mc, 0.1, v => { mc = v; draw(); });
                        VizEngine.createSlider(controls, 'd', -5, 5, md, 0.1, v => { md = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[ma, mb], [mc, md]];
                            const tr = ma + md;
                            const det = ma * md - mb * mc;
                            const disc = tr * tr - 4 * det;

                            // Draw transformed unit square
                            viz.drawTransformedUnitSquare(M, viz.colors.blue + '22', viz.colors.blue, 1.5);

                            // Original unit square
                            viz.drawPolygon([[0,0],[1,0],[1,1],[0,1]], viz.colors.white + '11', viz.colors.white + '44', 1);

                            // Info panel
                            let y = 18;
                            const step = 18;
                            viz.screenText('Matrix A', 14, y, viz.colors.white, 14, 'left'); y += step;
                            viz.drawMatrix(M, 14, y, viz.colors.white, 40, 22, 12);
                            y += 60;

                            viz.screenText('tr(A) = ' + tr.toFixed(2), 14, y, viz.colors.teal, 13, 'left'); y += step;
                            viz.screenText('det(A) = ' + det.toFixed(2), 14, y, viz.colors.orange, 13, 'left'); y += step;
                            viz.screenText('\u0394 = tr\u00B2 \u2212 4det = ' + disc.toFixed(2), 14, y, disc >= 0 ? viz.colors.green : viz.colors.red, 13, 'left'); y += step + 4;

                            if (disc >= 0) {
                                const sq = Math.sqrt(disc);
                                const l1 = (tr + sq) / 2;
                                const l2 = (tr - sq) / 2;
                                viz.screenText('\u03BB\u2081 = ' + l1.toFixed(3), 14, y, viz.colors.green, 13, 'left'); y += step;
                                viz.screenText('\u03BB\u2082 = ' + l2.toFixed(3), 14, y, viz.colors.purple, 13, 'left'); y += step + 4;
                                viz.screenText('\u03BB\u2081 + \u03BB\u2082 = ' + (l1 + l2).toFixed(3) + ' = tr(A)', 14, y, viz.colors.teal, 12, 'left'); y += step;
                                viz.screenText('\u03BB\u2081\u00B7\u03BB\u2082 = ' + (l1 * l2).toFixed(3) + ' = det(A)', 14, y, viz.colors.orange, 12, 'left');

                                // Draw eigenvectors on the plane
                                const ev1 = VizEngine.eigenvector2(M, l1);
                                const ev2 = VizEngine.eigenvector2(M, l2);
                                viz.drawLine(0, 0, ev1[0], ev1[1], viz.colors.green + '44', 1);
                                viz.drawLine(0, 0, ev2[0], ev2[1], viz.colors.purple + '44', 1);
                                viz.drawVec(ev1[0] * 2, ev1[1] * 2, viz.colors.green, '\u03BB\u2081', 2);
                                viz.drawVec(ev2[0] * 2, ev2[1] * 2, viz.colors.purple, '\u03BB\u2082', 2);
                            } else {
                                const re = tr / 2;
                                const im = Math.sqrt(-disc) / 2;
                                viz.screenText('\u03BB = ' + re.toFixed(2) + ' \u00B1 ' + im.toFixed(2) + 'i', 14, y, viz.colors.pink, 13, 'left'); y += step + 4;
                                viz.screenText('Complex eigenvalues (rotation)', 14, y, viz.colors.red, 12, 'left');
                            }
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A \\(3 \\times 3\\) matrix has eigenvalues 1, 4, and \\(-2\\). Without computing the matrix, find \\(\\operatorname{tr}(A)\\) and \\(\\det(A)\\).',
                    hint: 'Use the sum and product formulas.',
                    solution: '\\(\\operatorname{tr}(A) = 1 + 4 + (-2) = 3\\). \\(\\det(A) = 1 \\cdot 4 \\cdot (-2) = -8\\).'
                },
                {
                    question: 'Show that the eigenvalues of a real \\(2 \\times 2\\) matrix are complex (non-real) if and only if \\(\\operatorname{tr}(A)^2 < 4\\det(A)\\).',
                    hint: 'The eigenvalues are complex iff the discriminant of the characteristic polynomial is negative.',
                    solution: 'The characteristic polynomial is \\(\\lambda^2 - \\operatorname{tr}(A)\\lambda + \\det(A)\\). Its discriminant is \\(\\Delta = \\operatorname{tr}(A)^2 - 4\\det(A)\\). The roots are complex iff \\(\\Delta < 0\\) iff \\(\\operatorname{tr}(A)^2 < 4\\det(A)\\).'
                },
                {
                    question: 'If \\(A\\) has eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\), what are the eigenvalues of \\(A + cI\\) for a scalar \\(c\\)? Use this to express \\(\\operatorname{tr}(A + cI)\\) in terms of eigenvalues.',
                    hint: 'If \\(A\\mathbf{v} = \\lambda \\mathbf{v}\\), compute \\((A + cI)\\mathbf{v}\\).',
                    solution: '\\((A + cI)\\mathbf{v} = A\\mathbf{v} + c\\mathbf{v} = (\\lambda + c)\\mathbf{v}\\). So the eigenvalues of \\(A + cI\\) are \\(\\lambda_1 + c, \\ldots, \\lambda_n + c\\). Then \\(\\operatorname{tr}(A + cI) = \\sum(\\lambda_i + c) = \\operatorname{tr}(A) + nc\\).'
                },
                {
                    question: 'Verify the Cayley-Hamilton theorem for \\(A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\).',
                    hint: 'The characteristic polynomial is \\(\\lambda^2 - 5\\lambda - 2\\). Compute \\(A^2 - 5A - 2I\\).',
                    solution: '\\(p(\\lambda) = \\lambda^2 - 5\\lambda - 2\\). \\(A^2 = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}\\). \\(A^2 - 5A - 2I = \\begin{pmatrix} 7-5-2 & 10-10-0 \\\\ 15-15-0 & 22-20-2 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Prove that similar matrices have the same eigenvalues. (Recall: \\(B = P^{-1}AP\\) is similar to \\(A\\).)',
                    hint: 'Show they have the same characteristic polynomial using \\(\\det(B - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P)\\).',
                    solution: '\\(\\det(B - \\lambda I) = \\det(P^{-1}AP - \\lambda P^{-1}IP) = \\det(P^{-1}(A - \\lambda I)P) = \\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)\\). So \\(A\\) and \\(B\\) have identical characteristic polynomials, hence the same eigenvalues with the same algebraic multiplicities.'
                },
                {
                    question: 'A matrix \\(A\\) satisfies \\(A^2 = A\\) (idempotent). Using eigenvalue properties, show that \\(\\operatorname{tr}(A) = \\operatorname{rank}(A)\\).',
                    hint: 'We showed that idempotent matrices have eigenvalues 0 and 1 only. How many of each?',
                    solution: 'From Exercise 10.3, the eigenvalues are 0 and 1. Let \\(k\\) eigenvalues equal 1 and \\(n-k\\) equal 0. Then \\(\\operatorname{tr}(A) = k\\). Also, \\(\\operatorname{rank}(A) = n - \\dim\\operatorname{Nul}(A)\\). Since \\(\\lambda = 0\\) has eigenspace equal to \\(\\operatorname{Nul}(A)\\), and for idempotent matrices \\(\\operatorname{gm} = \\operatorname{am}\\) (idempotent matrices are always diagonalizable), we get \\(\\dim\\operatorname{Nul}(A) = n - k\\), so \\(\\operatorname{rank}(A) = k = \\operatorname{tr}(A)\\).'
                }
            ]
        }
    ]
});
