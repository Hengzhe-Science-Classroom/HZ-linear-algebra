// === Chapter 16: Symmetric Matrices & Spectral Theorem ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch16',
    number: 16,
    title: 'Symmetric Matrices & Spectral Theorem',
    subtitle: 'Real eigenvalues, orthogonal eigenvectors, and the power of symmetry',
    sections: [
        // ========== SECTION 1: Symmetric Matrices ==========
        {
            id: 'sec01-symmetric-matrices',
            title: 'Symmetric Matrices',
            content: `
<h2>16.1 Symmetric Matrices</h2>

<p>Throughout this chapter we work in \\(\\mathbb{R}^n\\) with the standard inner product \\(\\langle x, y \\rangle = x^T y\\). A matrix \\(A \\in \\mathbb{R}^{n \\times n}\\) is <em>symmetric</em> if it equals its own transpose. This single condition, deceptively simple, has profound consequences: all eigenvalues are real, eigenvectors from distinct eigenvalues are orthogonal, and the matrix admits a particularly beautiful factorization. Symmetric matrices arise naturally whenever a problem has no preferred direction: covariance matrices in statistics, Hessians in optimization, adjacency matrices of undirected graphs, and stiffness matrices in structural engineering.</p>

<div class="env-block definition">
  <div class="env-title">Definition 16.1.1 (Symmetric Matrix)</div>
  <div class="env-body">
    <p>A matrix \\(A \\in \\mathbb{R}^{n \\times n}\\) is <em>symmetric</em> if \\(A = A^T\\), i.e., \\(a_{ij} = a_{ji}\\) for all \\(i, j\\).</p>
  </div>
</div>

<div class="env-block example">
  <div class="env-title">Example 16.1.2</div>
  <div class="env-body">
    <p>The matrix
    \\[
    A = \\begin{pmatrix} 2 & -1 \\\\ -1 & 3 \\end{pmatrix}
    \\]
    is symmetric because \\(a_{12} = a_{21} = -1\\). In contrast, \\(\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\) is not symmetric since the off-diagonal entries differ.</p>
  </div>
</div>

<p>Symmetric matrices form a vector subspace of \\(\\mathbb{R}^{n \\times n}\\). The dimension of this subspace is \\(n(n+1)/2\\), since each entry on or above the diagonal can be chosen freely, and the entries below are determined.</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 16.1.3 (Basic Properties)</div>
  <div class="env-body">
    <p>Let \\(A, B\\) be symmetric \\(n \\times n\\) matrices and \\(c \\in \\mathbb{R}\\). Then:</p>
    <ol>
      <li>\\(A + B\\) and \\(cA\\) are symmetric.</li>
      <li>\\(A^k\\) is symmetric for every positive integer \\(k\\).</li>
      <li>If \\(A\\) is invertible, then \\(A^{-1}\\) is symmetric.</li>
      <li>\\(AB\\) is symmetric if and only if \\(AB = BA\\).</li>
    </ol>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>(1) \\((A+B)^T = A^T + B^T = A + B\\), and \\((cA)^T = cA^T = cA\\).</p>
    <p>(2) \\((A^k)^T = (A^T)^k = A^k\\).</p>
    <p>(3) From \\(AA^{-1} = I\\), transpose both sides: \\((A^{-1})^T A^T = I\\), so \\((A^{-1})^T A = I\\), giving \\((A^{-1})^T = A^{-1}\\).</p>
    <p>(4) \\((AB)^T = B^T A^T = BA\\). Thus \\((AB)^T = AB\\) iff \\(BA = AB\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>The Key Inner Product Identity</h3>

<p>The single most important algebraic fact about symmetric matrices is the following identity, which drives nearly every result in this chapter.</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 16.1.4</div>
  <div class="env-body">
    <p>A matrix \\(A\\) is symmetric if and only if \\(\\langle Ax, y \\rangle = \\langle x, Ay \\rangle\\) for all \\(x, y \\in \\mathbb{R}^n\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>We have \\(\\langle Ax, y \\rangle = (Ax)^T y = x^T A^T y\\) and \\(\\langle x, Ay \\rangle = x^T (Ay)\\). These are equal for all \\(x, y\\) if and only if \\(A^T = A\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>Real Eigenvalues</h3>

<p>We saw in Chapter 12 that a real matrix can have complex eigenvalues. Symmetric matrices are special: all eigenvalues are real. This is perhaps the single most consequential property.</p>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.1.5 (Real Eigenvalues)</div>
  <div class="env-body">
    <p>Every eigenvalue of a real symmetric matrix is real.</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Let \\(A \\in \\mathbb{R}^{n \\times n}\\) be symmetric and let \\(\\lambda\\) be an eigenvalue with eigenvector \\(v \\in \\mathbb{C}^n\\) (allowing complex entries). We compute \\(\\bar{v}^T A v\\) in two ways.</p>
    <p>First, \\(Av = \\lambda v\\), so \\(\\bar{v}^T A v = \\lambda \\bar{v}^T v = \\lambda \\|v\\|^2\\).</p>
    <p>Second, since \\(A\\) is real and symmetric, \\(\\overline{Av} = A\\bar{v}\\), so \\(\\bar{v}^T A v = \\bar{v}^T A v = (A\\bar{v})^T v = \\bar{\\lambda} \\bar{v}^T v = \\bar{\\lambda} \\|v\\|^2\\).</p>
    <p>Since \\(v \\neq 0\\), we have \\(\\|v\\|^2 > 0\\), giving \\(\\lambda = \\bar{\\lambda}\\), so \\(\\lambda \\in \\mathbb{R}\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>Orthogonality of Eigenvectors</h3>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.1.6 (Orthogonal Eigenspaces)</div>
  <div class="env-body">
    <p>If \\(A\\) is symmetric and \\(v_1, v_2\\) are eigenvectors corresponding to distinct eigenvalues \\(\\lambda_1 \\neq \\lambda_2\\), then \\(v_1 \\perp v_2\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Using the symmetry identity:
    \\[
    \\lambda_1 \\langle v_1, v_2 \\rangle = \\langle Av_1, v_2 \\rangle = \\langle v_1, Av_2 \\rangle = \\lambda_2 \\langle v_1, v_2 \\rangle.
    \\]
    Since \\(\\lambda_1 \\neq \\lambda_2\\), we conclude \\(\\langle v_1, v_2 \\rangle = 0\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark</div>
  <div class="env-body">
    <p>For a general (non-symmetric) matrix, eigenvectors from distinct eigenvalues are linearly independent but need not be orthogonal. Symmetry upgrades independence to orthogonality, for free.</p>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-symmetric-eigenspaces"></div>
`,
            visualizations: [
                {
                    id: 'viz-symmetric-eigenspaces',
                    title: 'Eigenvectors of a Symmetric Matrix',
                    description: 'Drag the entries of a symmetric 2x2 matrix and observe how the eigenvectors are always orthogonal. The blue and teal arrows are eigenvectors; notice they always meet at a right angle.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        let a = 3, b = 1, d = 1;
                        // Matrix is [[a, b], [b, d]]

                        const sliderA = VizEngine.createSlider(controls, 'a\u2081\u2081', -4, 4, a, 0.1, v => { a = v; });
                        const sliderB = VizEngine.createSlider(controls, 'a\u2081\u2082 = a\u2082\u2081', -4, 4, b, 0.1, v => { b = v; });
                        const sliderD = VizEngine.createSlider(controls, 'a\u2082\u2082', -4, 4, d, 0.1, v => { d = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[a, b], [b, d]];
                            const evals = VizEngine.eigenvalues2(M);

                            if (evals) {
                                const lam1 = evals[0], lam2 = evals[1];
                                const v1 = VizEngine.eigenvector2(M, lam1);
                                const v2 = VizEngine.eigenvector2(M, lam2);

                                // Draw eigenspaces (lines through origin)
                                viz.drawLine(0, 0, v1[0], v1[1], viz.colors.blue + '44', 1, true);
                                viz.drawLine(0, 0, v2[0], v2[1], viz.colors.teal + '44', 1, true);

                                // Draw eigenvectors scaled by eigenvalue magnitude (capped)
                                const s1 = Math.min(Math.abs(lam1), 4) * Math.sign(lam1);
                                const s2 = Math.min(Math.abs(lam2), 4) * Math.sign(lam2);
                                viz.drawVec(v1[0] * 2.5, v1[1] * 2.5, viz.colors.blue, 'v\u2081');
                                viz.drawVec(v2[0] * 2.5, v2[1] * 2.5, viz.colors.teal, 'v\u2082');

                                // Draw Av1 and Av2
                                const Av1 = VizEngine.matVec(M, [v1[0] * 2.5, v1[1] * 2.5]);
                                const Av2 = VizEngine.matVec(M, [v2[0] * 2.5, v2[1] * 2.5]);
                                if (VizEngine.vecLen(Av1) < 10) {
                                    viz.drawVec(Av1[0], Av1[1], viz.colors.blue + 'aa', 'Av\u2081', 1.5);
                                }
                                if (VizEngine.vecLen(Av2) < 10) {
                                    viz.drawVec(Av2[0], Av2[1], viz.colors.teal + 'aa', 'Av\u2082', 1.5);
                                }

                                // Show right angle indicator
                                const dot = VizEngine.dot(v1, v2);
                                const len = 0.4;
                                const [sx, sy] = viz.toScreen(
                                    len * (v1[0] + v2[0]),
                                    len * (v1[1] + v2[1])
                                );
                                const [sx1, sy1] = viz.toScreen(len * v1[0], len * v1[1]);
                                const [sx2, sy2] = viz.toScreen(len * v2[0], len * v2[1]);
                                const [ox, oy] = viz.toScreen(0, 0);
                                viz.ctx.strokeStyle = viz.colors.yellow;
                                viz.ctx.lineWidth = 1;
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(sx1, sy1);
                                viz.ctx.lineTo(sx, sy);
                                viz.ctx.lineTo(sx2, sy2);
                                viz.ctx.stroke();

                                // Display info
                                viz.screenText('A = [[' + a.toFixed(1) + ', ' + b.toFixed(1) + '], [' + b.toFixed(1) + ', ' + d.toFixed(1) + ']]', viz.width / 2, 20, viz.colors.white, 13);
                                viz.screenText('\u03bb\u2081 = ' + lam1.toFixed(3) + ',  \u03bb\u2082 = ' + lam2.toFixed(3), viz.width / 2, 40, viz.colors.yellow, 12);
                                viz.screenText('v\u2081 \u00b7 v\u2082 = ' + dot.toFixed(4) + ' (orthogonal!)', viz.width / 2, viz.height - 15, viz.colors.green, 12);
                            } else {
                                viz.screenText('Complex eigenvalues (impossible for symmetric matrices)', viz.width / 2, viz.height / 2, viz.colors.red, 13);
                            }
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that for any matrix \\(B \\in \\mathbb{R}^{m \\times n}\\), the matrix \\(B^T B\\) is symmetric.',
                    hint: 'Compute \\((B^T B)^T\\) using the rule \\((XY)^T = Y^T X^T\\).',
                    solution: '\\((B^T B)^T = B^T (B^T)^T = B^T B\\). So \\(B^T B\\) is symmetric.'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 4 & 2 \\\\ 2 & 1 \\end{pmatrix}\\). Find the eigenvalues and verify they are real. Find orthogonal eigenvectors.',
                    hint: 'The characteristic polynomial is \\(\\lambda^2 - 5\\lambda = 0\\).',
                    solution: '\\(\\det(A - \\lambda I) = (4 - \\lambda)(1 - \\lambda) - 4 = \\lambda^2 - 5\\lambda = \\lambda(\\lambda - 5)\\). So \\(\\lambda_1 = 0\\), \\(\\lambda_2 = 5\\). For \\(\\lambda = 0\\): \\(v_1 = (1, -2)^T\\). For \\(\\lambda = 5\\): \\(v_2 = (2, 1)^T\\). Check: \\(v_1 \\cdot v_2 = 2 - 2 = 0\\). Orthogonal as guaranteed by Theorem 16.1.6.'
                },
                {
                    question: 'Prove that if \\(A\\) is symmetric and \\(\\lambda\\) is an eigenvalue, then \\(\\lambda^2\\) is an eigenvalue of \\(A^2\\).',
                    hint: 'If \\(Av = \\lambda v\\), what is \\(A^2 v\\)?',
                    solution: 'If \\(Av = \\lambda v\\), then \\(A^2 v = A(Av) = A(\\lambda v) = \\lambda Av = \\lambda^2 v\\). So \\(v\\) is an eigenvector of \\(A^2\\) with eigenvalue \\(\\lambda^2\\). (This holds for any matrix, not just symmetric ones.)'
                },
                {
                    question: 'Let \\(A\\) be a real symmetric matrix with \\(A^2 = I\\). What are the possible eigenvalues of \\(A\\)?',
                    hint: 'If \\(Av = \\lambda v\\), apply \\(A^2 = I\\) to both sides.',
                    solution: 'If \\(Av = \\lambda v\\), then \\(v = Iv = A^2 v = \\lambda^2 v\\), so \\(\\lambda^2 = 1\\), giving \\(\\lambda = \\pm 1\\). Since \\(A\\) is symmetric (hence real eigenvalues), the only possible eigenvalues are \\(1\\) and \\(-1\\).'
                },
                {
                    question: 'Show that the trace of a symmetric matrix equals the sum of its eigenvalues, and the determinant equals their product. Verify for \\(A = \\begin{pmatrix} 5 & 1 \\\\ 1 & 3 \\end{pmatrix}\\).',
                    hint: 'These facts hold for all square matrices (they follow from the characteristic polynomial). Compute the eigenvalues of \\(A\\) and check.',
                    solution: 'The characteristic polynomial of \\(A\\) is \\(\\lambda^2 - 8\\lambda + 14 = 0\\), giving \\(\\lambda = 4 \\pm \\sqrt{2}\\). Sum: \\((4 + \\sqrt{2}) + (4 - \\sqrt{2}) = 8 = \\operatorname{tr}(A)\\). Product: \\((4 + \\sqrt{2})(4 - \\sqrt{2}) = 16 - 2 = 14 = \\det(A)\\).'
                }
            ]
        },

        // ========== SECTION 2: The Spectral Theorem ==========
        {
            id: 'sec02-spectral-theorem',
            title: 'The Spectral Theorem',
            content: `
<h2>16.2 The Spectral Theorem</h2>

<p>The Spectral Theorem is one of the most important results in linear algebra. It says that every real symmetric matrix can be diagonalized by an orthogonal matrix. Equivalently, every symmetric matrix is a sum of rank-one projections onto mutually orthogonal directions, each scaled by the corresponding eigenvalue. This "spectral decomposition" reveals the complete geometric structure of the matrix.</p>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.2.1 (Spectral Theorem for Real Symmetric Matrices)</div>
  <div class="env-body">
    <p>Let \\(A \\in \\mathbb{R}^{n \\times n}\\) be symmetric. Then there exists an orthogonal matrix \\(Q\\) (i.e., \\(Q^T Q = I\\)) and a diagonal matrix \\(\\Lambda = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\) such that
    \\[
    A = Q \\Lambda Q^T.
    \\]
    The columns of \\(Q\\) are orthonormal eigenvectors of \\(A\\), and the diagonal entries of \\(\\Lambda\\) are the corresponding (real) eigenvalues.</p>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (What "Spectral" Means)</div>
  <div class="env-body">
    <p>The word "spectral" refers to the set of eigenvalues \\(\\{\\lambda_1, \\ldots, \\lambda_n\\}\\), called the <em>spectrum</em> of \\(A\\). The name was introduced by Hilbert, borrowing from the spectral lines of atomic physics, because eigenvalues of certain operators correspond to observable frequencies.</p>
  </div>
</div>

<h3>Spectral Decomposition (Outer Product Form)</h3>

<p>Writing \\(Q = [q_1 \\mid q_2 \\mid \\cdots \\mid q_n]\\), the factorization \\(A = Q\\Lambda Q^T\\) can be expanded as a sum of rank-one matrices:</p>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.2.2 (Spectral Decomposition)</div>
  <div class="env-body">
    <p>If \\(A\\) is real symmetric with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\) and corresponding orthonormal eigenvectors \\(q_1, \\ldots, q_n\\), then
    \\[
    A = \\lambda_1 q_1 q_1^T + \\lambda_2 q_2 q_2^T + \\cdots + \\lambda_n q_n q_n^T = \\sum_{i=1}^{n} \\lambda_i q_i q_i^T.
    \\]
    Each \\(q_i q_i^T\\) is the orthogonal projection matrix onto the line spanned by \\(q_i\\).</p>
  </div>
</div>

<div class="env-block example">
  <div class="env-title">Example 16.2.3</div>
  <div class="env-body">
    <p>Let \\(A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}\\). The eigenvalues are \\(\\lambda_1 = 3\\), \\(\\lambda_2 = 1\\), with orthonormal eigenvectors
    \\[
    q_1 = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\1\\end{pmatrix}, \\quad q_2 = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}1\\\\-1\\end{pmatrix}.
    \\]
    The spectral decomposition is
    \\[
    A = 3 \\cdot \\frac{1}{2}\\begin{pmatrix}1 & 1\\\\1 & 1\\end{pmatrix} + 1 \\cdot \\frac{1}{2}\\begin{pmatrix}1 & -1\\\\-1 & 1\\end{pmatrix} = \\frac{1}{2}\\begin{pmatrix}3+1 & 3-1\\\\3-1 & 3+1\\end{pmatrix} = \\begin{pmatrix}2 & 1\\\\1 & 2\\end{pmatrix}. \\quad \\checkmark
    \\]</p>
  </div>
</div>

<h3>Geometric Meaning: Rotate, Scale, Rotate Back</h3>

<p>The decomposition \\(A = Q \\Lambda Q^T\\) has a beautiful geometric interpretation. Applying \\(A\\) to a vector \\(x\\) proceeds in three steps:</p>
<ol>
  <li><strong>Rotate</strong>: \\(Q^T x\\) expresses \\(x\\) in the eigenvector basis (rotating to principal axes).</li>
  <li><strong>Scale</strong>: \\(\\Lambda (Q^T x)\\) stretches each coordinate by the corresponding eigenvalue.</li>
  <li><strong>Rotate back</strong>: \\(Q(\\Lambda Q^T x)\\) returns to the original coordinate system.</li>
</ol>

<p>This is why symmetric transformations feel "balanced": they stretch along orthogonal axes and then rotate back, so the axes of stretching are geometrically intrinsic to the matrix.</p>

<div class="viz-placeholder" data-viz="viz-spectral-decomposition"></div>

<h3>Consequences of the Spectral Theorem</h3>

<div class="env-block corollary">
  <div class="env-title">Corollary 16.2.4</div>
  <div class="env-body">
    <p>Every real symmetric matrix is diagonalizable (even if it has repeated eigenvalues).</p>
  </div>
</div>

<div class="env-block corollary">
  <div class="env-title">Corollary 16.2.5</div>
  <div class="env-body">
    <p>\\(\\operatorname{rank}(A) =\\) number of nonzero eigenvalues (counted with multiplicity).</p>
  </div>
</div>

<div class="env-block corollary">
  <div class="env-title">Corollary 16.2.6</div>
  <div class="env-body">
    <p>\\(\\|A\\|_2 = \\max_i |\\lambda_i|\\), where \\(\\|A\\|_2\\) is the spectral norm (largest singular value). For symmetric matrices, the singular values are \\(|\\lambda_i|\\).</p>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-spectral-decomposition',
                    title: 'Spectral Decomposition: \\(A = Q\\Lambda Q^T\\)',
                    description: 'Watch the three steps of a symmetric transformation: rotate to eigenbasis (\\(Q^T\\)), scale by eigenvalues (\\(\\Lambda\\)), rotate back (\\(Q\\)). Use the slider to animate the progression.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 55 });

                        let a11 = 2, a12 = 1, a22 = 2;
                        let t = 0; // animation parameter 0..3

                        VizEngine.createSlider(controls, 'a\u2081\u2081', -3, 5, a11, 0.1, v => { a11 = v; });
                        VizEngine.createSlider(controls, 'a\u2081\u2082', -3, 3, a12, 0.1, v => { a12 = v; });
                        VizEngine.createSlider(controls, 'a\u2082\u2082', -3, 5, a22, 0.1, v => { a22 = v; });
                        VizEngine.createSlider(controls, 'step', 0, 3, 0, 0.02, v => { t = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[a11, a12], [a12, a22]];
                            const evals = VizEngine.eigenvalues2(M);
                            if (!evals) {
                                viz.screenText('Complex eigenvalues -- adjust entries', viz.width / 2, viz.height / 2, viz.colors.red, 14);
                                return;
                            }

                            const lam1 = evals[0], lam2 = evals[1];
                            const ev1 = VizEngine.eigenvector2(M, lam1);
                            const ev2 = VizEngine.eigenvector2(M, lam2);

                            // Ensure right-handed system
                            const Q = [[ev1[0], ev2[0]], [ev1[1], ev2[1]]];
                            const QT = VizEngine.transpose(Q);

                            // Draw unit circle points and transform them based on t
                            const N = 80;
                            const pts = [];
                            for (let i = 0; i <= N; i++) {
                                const theta = (2 * Math.PI * i) / N;
                                let p = [Math.cos(theta), Math.sin(theta)];

                                if (t <= 1) {
                                    // Interpolate from identity to Q^T
                                    const cosA = ev1[0]; // angle of first eigenvector
                                    const sinA = ev1[1];
                                    const angle = Math.atan2(sinA, cosA) * t;
                                    const R = [[Math.cos(-angle), -Math.sin(-angle)], [Math.sin(-angle), Math.cos(-angle)]];
                                    p = VizEngine.matVec(R, p);
                                } else if (t <= 2) {
                                    // Apply Q^T, then interpolate scaling
                                    const s = t - 1;
                                    p = VizEngine.matVec(QT, p);
                                    p = [p[0] * (1 + s * (lam1 - 1)), p[1] * (1 + s * (lam2 - 1))];
                                } else {
                                    // Apply Q^T and Lambda, then interpolate Q rotation back
                                    const s = t - 2;
                                    p = VizEngine.matVec(QT, p);
                                    p = [p[0] * lam1, p[1] * lam2];
                                    // Interpolate from eigenbasis back to standard
                                    const cosA = ev1[0];
                                    const sinA = ev1[1];
                                    const angle = Math.atan2(sinA, cosA) * s;
                                    const R = [[Math.cos(angle), -Math.sin(angle)], [Math.sin(angle), Math.cos(angle)]];
                                    p = VizEngine.matVec(R, p);
                                }

                                pts.push(p);
                            }

                            // Draw transformed shape
                            viz.ctx.strokeStyle = viz.colors.blue;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            for (let i = 0; i <= N; i++) {
                                const [sx, sy] = viz.toScreen(pts[i][0], pts[i][1]);
                                i === 0 ? viz.ctx.moveTo(sx, sy) : viz.ctx.lineTo(sx, sy);
                            }
                            viz.ctx.stroke();

                            // Draw original unit circle for reference
                            viz.drawCircle(0, 0, 1, null, viz.colors.muted + '44', 1);

                            // Draw eigenvector directions
                            viz.drawLine(0, 0, ev1[0], ev1[1], viz.colors.orange + '66', 1, true);
                            viz.drawLine(0, 0, ev2[0], ev2[1], viz.colors.green + '66', 1, true);

                            // Labels
                            const stepNames = ['Original', 'Step 1: Q\u1d40 (rotate to eigenbasis)', 'Step 2: \u039b (scale by eigenvalues)', 'Step 3: Q (rotate back)'];
                            const stepIdx = Math.min(3, Math.floor(t));
                            viz.screenText(stepNames[stepIdx], viz.width / 2, 20, viz.colors.white, 13);
                            viz.screenText('\u03bb\u2081 = ' + lam1.toFixed(2) + ',  \u03bb\u2082 = ' + lam2.toFixed(2), viz.width / 2, 40, viz.colors.yellow, 12);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Orthogonally diagonalize \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\). That is, find orthogonal \\(Q\\) and diagonal \\(\\Lambda\\) with \\(A = Q\\Lambda Q^T\\).',
                    hint: 'Find the eigenvalues from \\(\\det(A - \\lambda I) = 0\\), then find orthonormal eigenvectors.',
                    solution: '\\(\\det(A - \\lambda I) = (3-\\lambda)^2 - 1 = \\lambda^2 - 6\\lambda + 8 = (\\lambda-4)(\\lambda-2)\\). Eigenvalues: \\(\\lambda_1 = 4, \\lambda_2 = 2\\). For \\(\\lambda=4\\): \\(v_1 = \\frac{1}{\\sqrt{2}}(1,1)^T\\). For \\(\\lambda=2\\): \\(v_2 = \\frac{1}{\\sqrt{2}}(1,-1)^T\\). So \\(Q = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\), \\(\\Lambda = \\begin{pmatrix}4&0\\\\0&2\\end{pmatrix}\\).'
                },
                {
                    question: 'Write the spectral decomposition of \\(A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}\\) as a sum of rank-one matrices.',
                    hint: 'Find eigenvalues and orthonormal eigenvectors, then use \\(A = \\lambda_1 q_1 q_1^T + \\lambda_2 q_2 q_2^T\\).',
                    solution: 'Characteristic polynomial: \\(\\lambda^2 - 7\\lambda + 6 = 0\\), so \\(\\lambda_1 = 6, \\lambda_2 = 1\\). For \\(\\lambda=6\\): eigenvector \\((2,1)^T\\), normalized: \\(q_1 = \\frac{1}{\\sqrt{5}}(2,1)^T\\). For \\(\\lambda=1\\): \\(q_2 = \\frac{1}{\\sqrt{5}}(-1,2)^T\\). Then \\(A = 6 \\cdot \\frac{1}{5}\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix} + 1 \\cdot \\frac{1}{5}\\begin{pmatrix}1&-2\\\\-2&4\\end{pmatrix}\\).'
                },
                {
                    question: 'If \\(A\\) is symmetric with eigenvalues \\(2, 3, 5\\), what are the eigenvalues of \\(A^2 - 3A + I\\)?',
                    hint: 'Since \\(A = Q\\Lambda Q^T\\), the matrix \\(p(A)\\) for any polynomial \\(p\\) has eigenvalues \\(p(\\lambda_i)\\).',
                    solution: 'For \\(p(\\lambda) = \\lambda^2 - 3\\lambda + 1\\): \\(p(2) = 4 - 6 + 1 = -1\\), \\(p(3) = 9 - 9 + 1 = 1\\), \\(p(5) = 25 - 15 + 1 = 11\\). The eigenvalues are \\(-1, 1, 11\\).'
                },
                {
                    question: 'Show that if \\(A\\) is symmetric and all eigenvalues are nonnegative, then there exists a symmetric matrix \\(B\\) with \\(B^2 = A\\).',
                    hint: 'Use the spectral decomposition \\(A = Q\\Lambda Q^T\\) and define \\(B = Q\\sqrt{\\Lambda}Q^T\\).',
                    solution: 'Write \\(A = Q\\Lambda Q^T\\) with \\(\\Lambda = \\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n)\\), \\(\\lambda_i \\ge 0\\). Define \\(B = Q\\operatorname{diag}(\\sqrt{\\lambda_1},\\ldots,\\sqrt{\\lambda_n})Q^T\\). Then \\(B\\) is symmetric (since \\(B^T = Q\\sqrt{\\Lambda}^T Q^T = B\\)) and \\(B^2 = Q\\sqrt{\\Lambda}Q^T Q\\sqrt{\\Lambda}Q^T = Q\\Lambda Q^T = A\\).'
                },
                {
                    question: 'Let \\(P = qq^T\\) where \\(q\\) is a unit vector. Show that \\(P\\) is symmetric, \\(P^2 = P\\), and find all eigenvalues of \\(P\\).',
                    hint: 'For idempotency: \\(P^2 = (qq^T)(qq^T) = q(q^Tq)q^T\\). Since \\(q\\) is a unit vector, what is \\(q^Tq\\)?',
                    solution: 'Symmetry: \\(P^T = (qq^T)^T = qq^T = P\\). Idempotency: \\(P^2 = qq^T qq^T = q(q^Tq)q^T = q \\cdot 1 \\cdot q^T = P\\). For eigenvalues: if \\(Pv = \\lambda v\\), then \\(P^2 v = \\lambda^2 v\\) but also \\(P^2 v = Pv = \\lambda v\\), so \\(\\lambda^2 = \\lambda\\), giving \\(\\lambda = 0\\) or \\(1\\). Since \\(Pq = q\\), \\(\\lambda = 1\\) occurs (with eigenvector \\(q\\)). Since \\(\\operatorname{rank}(P) = 1\\), there is one eigenvalue \\(1\\) and \\(n-1\\) eigenvalues \\(0\\).'
                }
            ]
        },

        // ========== SECTION 3: Proof of the Spectral Theorem ==========
        {
            id: 'sec03-proof-spectral-theorem',
            title: 'Proof of the Spectral Theorem',
            content: `
<h2>16.3 Proof of the Spectral Theorem</h2>

<p>We now prove the Spectral Theorem by induction on the dimension \\(n\\). The argument combines two facts we established in Section 16.1 (real eigenvalues and orthogonal eigenspaces) with one new ingredient: the key observation that a symmetric matrix maps the orthogonal complement of an eigenspace into itself.</p>

<div class="env-block lemma">
  <div class="env-title">Lemma 16.3.1 (Invariant Orthogonal Complement)</div>
  <div class="env-body">
    <p>Let \\(A\\) be a real symmetric matrix and let \\(W\\) be a subspace such that \\(A(W) \\subseteq W\\) (i.e., \\(W\\) is \\(A\\)-invariant). Then \\(W^\\perp\\) is also \\(A\\)-invariant.</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Let \\(y \\in W^\\perp\\). We must show \\(Ay \\in W^\\perp\\), i.e., \\(\\langle Ay, w \\rangle = 0\\) for all \\(w \\in W\\).</p>
    <p>By symmetry, \\(\\langle Ay, w \\rangle = \\langle y, Aw \\rangle\\). Since \\(W\\) is \\(A\\)-invariant, \\(Aw \\in W\\). Since \\(y \\in W^\\perp\\), we get \\(\\langle y, Aw \\rangle = 0\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark</div>
  <div class="env-body">
    <p>This lemma is <em>false</em> for non-symmetric matrices. For instance, the shear \\(\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}\\) preserves the \\(x\\)-axis, but does not preserve its orthogonal complement (the \\(y\\)-axis). Symmetry is essential.</p>
  </div>
</div>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.3.2 (Spectral Theorem, Full Proof)</div>
  <div class="env-body">
    <p>Every real symmetric \\(n \\times n\\) matrix \\(A\\) is orthogonally diagonalizable: there exists an orthogonal \\(Q\\) and diagonal \\(\\Lambda\\) with \\(A = Q\\Lambda Q^T\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof (by induction on \\(n\\))</div>
  <div class="env-body">
    <p><strong>Base case (\\(n = 1\\)):</strong> A \\(1 \\times 1\\) symmetric matrix \\(A = (a)\\) is already diagonal, with \\(Q = (1)\\).</p>

    <p><strong>Inductive step:</strong> Assume the theorem holds for all symmetric matrices of size \\((n-1) \\times (n-1)\\). Let \\(A \\in \\mathbb{R}^{n \\times n}\\) be symmetric.</p>

    <p><em>Step 1: Existence of a real eigenvalue.</em> By Theorem 16.1.5, \\(A\\) has at least one real eigenvalue \\(\\lambda_1\\). Let \\(q_1\\) be a unit eigenvector: \\(Aq_1 = \\lambda_1 q_1\\), \\(\\|q_1\\| = 1\\).</p>

    <p><em>Step 2: Restriction to the orthogonal complement.</em> Let \\(W = \\operatorname{span}(q_1)\\). This is a 1-dimensional \\(A\\)-invariant subspace. By Lemma 16.3.1, \\(W^\\perp\\) is also \\(A\\)-invariant, and \\(\\dim W^\\perp = n - 1\\).</p>

    <p><em>Step 3: Apply the induction hypothesis.</em> Choose an orthonormal basis \\(\\{e_2, \\ldots, e_n\\}\\) of \\(W^\\perp\\) and form the matrix \\(P = [e_2 \\mid \\cdots \\mid e_n] \\in \\mathbb{R}^{n \\times (n-1)}\\). The restriction \\(A|_{W^\\perp}\\) is represented (in this basis) by the \\((n-1) \\times (n-1)\\) matrix \\(B = P^T A P\\). Since \\(A\\) is symmetric, so is \\(B\\):
    \\[
    B^T = (P^T A P)^T = P^T A^T P = P^T A P = B.
    \\]
    By the induction hypothesis, \\(B = Q_0 \\Lambda_0 Q_0^T\\) for some orthogonal \\(Q_0 \\in \\mathbb{R}^{(n-1)\\times(n-1)}\\).</p>

    <p><em>Step 4: Assemble the full diagonalization.</em> Define
    \\[
    Q = \\begin{pmatrix} q_1 & PQ_0 \\end{pmatrix} \\in \\mathbb{R}^{n \\times n}.
    \\]
    Then \\(Q\\) is orthogonal (its columns are orthonormal), and
    \\[
    Q^T A Q = \\begin{pmatrix} \\lambda_1 & 0 \\\\ 0 & \\Lambda_0 \\end{pmatrix} = \\Lambda.
    \\]
    Rearranging: \\(A = Q \\Lambda Q^T\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block intuition">
  <div class="env-title">Intuition: Peeling Off Eigenspaces</div>
  <div class="env-body">
    <p>The proof works by "peeling off" one eigenspace at a time. We find an eigenvector \\(q_1\\), project it out, and the remaining \\((n-1)\\)-dimensional subspace is again preserved by \\(A\\). We repeat, peeling off eigenvectors one by one, each orthogonal to all previous ones. After \\(n\\) steps, we have a full orthonormal eigenbasis.</p>
  </div>
</div>

<h3>Handling Repeated Eigenvalues</h3>

<p>A common concern: what if an eigenvalue has multiplicity greater than 1? The proof handles this seamlessly. If \\(\\lambda\\) is an eigenvalue of multiplicity \\(k\\), its eigenspace \\(E_\\lambda\\) has dimension \\(k\\) (the geometric multiplicity equals the algebraic multiplicity for symmetric matrices). We can choose any orthonormal basis for \\(E_\\lambda\\); the decomposition is not unique, but it always exists.</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 16.3.3</div>
  <div class="env-body">
    <p>For a real symmetric matrix, the algebraic multiplicity and geometric multiplicity of every eigenvalue are equal.</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Let \\(\\lambda\\) have algebraic multiplicity \\(k\\). The Spectral Theorem gives \\(A = Q\\Lambda Q^T\\), where \\(\\lambda\\) appears \\(k\\) times on the diagonal of \\(\\Lambda\\). The corresponding \\(k\\) columns of \\(Q\\) are linearly independent eigenvectors, so the geometric multiplicity is at least \\(k\\). Since geometric multiplicity never exceeds algebraic multiplicity, they are equal.</p>
    <div class="qed">∎</div>
  </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Why does the proof of Lemma 16.3.1 fail for non-symmetric matrices? Give a concrete \\(2 \\times 2\\) example.',
                    hint: 'Consider an upper triangular matrix. Does the \\(x\\)-axis being invariant imply the \\(y\\)-axis is invariant?',
                    solution: 'Take \\(A = \\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\). The subspace \\(W = \\operatorname{span}(e_1)\\) is \\(A\\)-invariant since \\(Ae_1 = e_1\\). But \\(Ae_2 = (1,2)^T \\notin W^\\perp = \\operatorname{span}(e_2)\\). The proof fails because \\(\\langle Ay, w\\rangle = y^T A^T w \\neq y^T A w\\) when \\(A \\neq A^T\\).'
                },
                {
                    question: 'Carry out the inductive proof explicitly for the \\(2 \\times 2\\) case: diagonalize \\(A = \\begin{pmatrix}1 & 2\\\\2 & 4\\end{pmatrix}\\).',
                    hint: 'Find one eigenvalue and eigenvector, form \\(W^\\perp\\), and apply the base case to the \\(1 \\times 1\\) restriction.',
                    solution: 'Eigenvalues: \\(\\lambda^2 - 5\\lambda = 0\\), so \\(\\lambda_1 = 5, \\lambda_2 = 0\\). For \\(\\lambda_1 = 5\\): \\(q_1 = \\frac{1}{\\sqrt{5}}(1,2)^T\\). Then \\(W^\\perp = \\operatorname{span}(q_2)\\) with \\(q_2 = \\frac{1}{\\sqrt{5}}(-2,1)^T\\). The restriction \\(B = q_2^T A q_2 = \\frac{1}{5}(-2,1)\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\begin{pmatrix}-2\\\\1\\end{pmatrix} = \\frac{1}{5}(-2,1)(0,0)^T = 0\\). So \\(\\Lambda = \\operatorname{diag}(5,0)\\) and \\(Q = \\frac{1}{\\sqrt{5}}\\begin{pmatrix}1&-2\\\\2&1\\end{pmatrix}\\).'
                },
                {
                    question: 'Give an example of a \\(3 \\times 3\\) symmetric matrix with eigenvalue \\(\\lambda = 2\\) of multiplicity 2, and verify that the geometric multiplicity is also 2.',
                    hint: 'Try \\(A = \\operatorname{diag}(2, 2, 5)\\) or build one using \\(A = Q\\Lambda Q^T\\) with \\(\\Lambda = \\operatorname{diag}(2,2,5)\\).',
                    solution: 'Take \\(A = \\operatorname{diag}(2,2,5)\\). The characteristic polynomial is \\((2-\\lambda)^2(5-\\lambda)\\), so \\(\\lambda=2\\) has algebraic multiplicity 2. The eigenspace \\(E_2 = \\{x : (A-2I)x = 0\\} = \\{x : \\operatorname{diag}(0,0,3)x = 0\\} = \\operatorname{span}(e_1, e_2)\\), which has dimension 2. Geometric multiplicity = algebraic multiplicity = 2, as guaranteed.'
                },
                {
                    question: 'Show that the Spectral Theorem implies every real symmetric matrix \\(A\\) can be written as \\(A = \\sum_{i=1}^k \\lambda_i P_i\\) where \\(P_i\\) are orthogonal projection matrices satisfying \\(P_i P_j = 0\\) for \\(i \\neq j\\) and \\(\\sum P_i = I\\).',
                    hint: 'Group eigenvectors by distinct eigenvalues. If \\(\\lambda\\) has multiplicity \\(m\\), the projection onto its eigenspace is \\(P = \\sum_{j} q_j q_j^T\\) where the sum is over the \\(m\\) orthonormal eigenvectors.',
                    solution: 'Let the distinct eigenvalues be \\(\\lambda_1, \\ldots, \\lambda_k\\). For each \\(\\lambda_i\\), let \\(P_i = \\sum_{q_j \\in E_{\\lambda_i}} q_j q_j^T\\) be the orthogonal projection onto \\(E_{\\lambda_i}\\). Then \\(A = \\sum_i \\lambda_i P_i\\). Since the eigenspaces are mutually orthogonal, \\(P_i P_j = 0\\) for \\(i \\neq j\\). Since the eigenspaces span \\(\\mathbb{R}^n\\), \\(\\sum_i P_i = I\\). Each \\(P_i\\) satisfies \\(P_i^2 = P_i\\) and \\(P_i^T = P_i\\).'
                },
                {
                    question: 'Prove that a real symmetric matrix \\(A\\) is invertible if and only if \\(0\\) is not an eigenvalue.',
                    hint: 'Use the spectral decomposition \\(A = Q\\Lambda Q^T\\). When is this product invertible?',
                    solution: 'Since \\(Q\\) is orthogonal (hence invertible), \\(A = Q\\Lambda Q^T\\) is invertible iff \\(\\Lambda\\) is invertible iff all diagonal entries \\(\\lambda_i \\neq 0\\) iff \\(0\\) is not an eigenvalue. In that case \\(A^{-1} = Q\\Lambda^{-1}Q^T\\).'
                }
            ]
        },

        // ========== SECTION 4: Principal Axes and Geometric Interpretation ==========
        {
            id: 'sec04-principal-axes',
            title: 'Principal Axes & Geometry',
            content: `
<h2>16.4 Principal Axes and Geometric Interpretation</h2>

<p>The Spectral Theorem has a direct geometric interpretation through quadratic forms. Every real symmetric matrix \\(A\\) defines a quadratic form \\(Q(x) = x^T A x\\), and the level sets of this form (ellipses, hyperbolas, or other conic sections) have principal axes aligned with the eigenvectors of \\(A\\).</p>

<h3>Quadratic Forms</h3>

<div class="env-block definition">
  <div class="env-title">Definition 16.4.1 (Quadratic Form)</div>
  <div class="env-body">
    <p>A <em>quadratic form</em> on \\(\\mathbb{R}^n\\) is a function \\(Q : \\mathbb{R}^n \\to \\mathbb{R}\\) of the form
    \\[
    Q(x) = x^T A x = \\sum_{i,j} a_{ij} x_i x_j,
    \\]
    where \\(A\\) is a symmetric matrix (we can always assume symmetry since \\(x^T A x = x^T \\left(\\frac{A+A^T}{2}\\right) x\\)).</p>
  </div>
</div>

<div class="env-block example">
  <div class="env-title">Example 16.4.2</div>
  <div class="env-body">
    <p>For \\(A = \\begin{pmatrix}3 & 1\\\\1 & 2\\end{pmatrix}\\), the quadratic form is
    \\[
    Q(x_1, x_2) = 3x_1^2 + 2x_1 x_2 + 2x_2^2.
    \\]
    The cross term \\(2x_1 x_2\\) comes from the off-diagonal entries. The spectral decomposition will eliminate this cross term by rotating to the eigenvector basis.</p>
  </div>
</div>

<h3>The Principal Axis Theorem</h3>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.4.3 (Principal Axis Theorem)</div>
  <div class="env-body">
    <p>Let \\(Q(x) = x^T A x\\) be a quadratic form with \\(A\\) symmetric. Let \\(A = Q_0 \\Lambda Q_0^T\\) be the spectral decomposition. Under the change of variables \\(x = Q_0 y\\) (equivalently \\(y = Q_0^T x\\)), the quadratic form becomes
    \\[
    Q(x) = y^T \\Lambda y = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots + \\lambda_n y_n^2.
    \\]
    All cross terms vanish. The coordinate axes in the \\(y\\)-system (the <em>principal axes</em>) are aligned with the eigenvectors of \\(A\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Substituting \\(x = Q_0 y\\):
    \\[
    x^T A x = (Q_0 y)^T A (Q_0 y) = y^T Q_0^T A Q_0 y = y^T \\Lambda y = \\sum_i \\lambda_i y_i^2.
    \\]</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>Conic Sections and Ellipsoids</h3>

<p>In \\(\\mathbb{R}^2\\), the level set \\(x^T A x = 1\\) is a conic section. When all eigenvalues are positive, this is an <em>ellipse</em> with semi-axes of length \\(1/\\sqrt{\\lambda_i}\\) along the eigenvectors. The principal axes of the ellipse are the eigenvectors, and the lengths of the semi-axes are determined by the eigenvalues.</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 16.4.4 (Geometry of \\(x^TAx = 1\\))</div>
  <div class="env-body">
    <p>Let \\(A\\) be a \\(2 \\times 2\\) symmetric matrix with eigenvalues \\(\\lambda_1, \\lambda_2\\).</p>
    <ul>
      <li>If \\(\\lambda_1, \\lambda_2 > 0\\): the set \\(\\{x : x^TAx = 1\\}\\) is an <em>ellipse</em> with semi-axes \\(1/\\sqrt{\\lambda_1}\\) and \\(1/\\sqrt{\\lambda_2}\\).</li>
      <li>If \\(\\lambda_1 > 0, \\lambda_2 < 0\\) (or vice versa): it is a <em>hyperbola</em>.</li>
      <li>If one eigenvalue is zero: it is a pair of parallel lines (degenerate).</li>
    </ul>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-principal-axes-ellipse"></div>

<div class="env-block example">
  <div class="env-title">Example 16.4.5</div>
  <div class="env-body">
    <p>Identify and sketch the conic \\(5x_1^2 + 4x_1 x_2 + 2x_2^2 = 1\\).</p>
    <p>The associated matrix is \\(A = \\begin{pmatrix}5 & 2\\\\2 & 2\\end{pmatrix}\\). The eigenvalues are \\(\\lambda = \\frac{7 \\pm \\sqrt{25-16}}{2}\\), i.e., \\(\\lambda_1 = 6, \\lambda_2 = 1\\). Both are positive, so this is an ellipse. The semi-axes have lengths \\(1/\\sqrt{6}\\) and \\(1\\), aligned with the eigenvectors \\(q_1 = \\frac{1}{\\sqrt{5}}(2,1)^T\\) and \\(q_2 = \\frac{1}{\\sqrt{5}}(-1,2)^T\\).</p>
  </div>
</div>

<div class="env-block warning">
  <div class="env-title">Warning</div>
  <div class="env-body">
    <p>The semi-axis lengths are \\(1/\\sqrt{\\lambda_i}\\), not \\(\\sqrt{\\lambda_i}\\). Larger eigenvalues correspond to <em>shorter</em> semi-axes, because the quadratic form grows faster in that direction, so the level set \\(x^TAx = 1\\) is reached sooner.</p>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-principal-axes-ellipse',
                    title: 'Ellipse and Principal Axes',
                    description: 'Adjust the entries of a symmetric matrix and see how the ellipse \\(x^TAx = 1\\) changes. The dashed lines are the principal axes (eigenvector directions). Semi-axis lengths are \\(1/\\sqrt{\\lambda_i}\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 80 });

                        let a11 = 3, a12 = 1, a22 = 2;

                        VizEngine.createSlider(controls, 'a\u2081\u2081', 0.2, 6, a11, 0.1, v => { a11 = v; });
                        VizEngine.createSlider(controls, 'a\u2081\u2082', -3, 3, a12, 0.1, v => { a12 = v; });
                        VizEngine.createSlider(controls, 'a\u2082\u2082', 0.2, 6, a22, 0.1, v => { a22 = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[a11, a12], [a12, a22]];
                            const evals = VizEngine.eigenvalues2(M);

                            if (!evals || evals[0] <= 0.01 || evals[1] <= 0.01) {
                                viz.screenText('Need both eigenvalues > 0 for an ellipse', viz.width / 2, viz.height / 2, viz.colors.red, 14);
                                viz.screenText('\u03bb\u2081 = ' + (evals ? evals[0].toFixed(2) : '?') + ', \u03bb\u2082 = ' + (evals ? evals[1].toFixed(2) : '?'), viz.width / 2, viz.height / 2 + 20, viz.colors.yellow, 12);
                                return;
                            }

                            const lam1 = evals[0], lam2 = evals[1];
                            const v1 = VizEngine.eigenvector2(M, lam1);
                            const v2 = VizEngine.eigenvector2(M, lam2);

                            // The ellipse x^T A x = 1 in eigenbasis has semi-axes 1/sqrt(lam)
                            const r1 = 1 / Math.sqrt(lam1);
                            const r2 = 1 / Math.sqrt(lam2);
                            const angle = Math.atan2(v1[1], v1[0]);

                            // Draw ellipse
                            viz.drawEllipse(0, 0, r1, r2, angle, viz.colors.blue + '22', viz.colors.blue);

                            // Draw principal axes
                            const axLen = Math.max(r1, r2) * 1.5;
                            viz.drawSegment(-v1[0] * axLen, -v1[1] * axLen, v1[0] * axLen, v1[1] * axLen, viz.colors.orange, 1.5, true);
                            viz.drawSegment(-v2[0] * axLen, -v2[1] * axLen, v2[0] * axLen, v2[1] * axLen, viz.colors.green, 1.5, true);

                            // Draw semi-axes on ellipse
                            viz.drawVector(0, 0, v1[0] * r1, v1[1] * r1, viz.colors.orange, '1/\u221a\u03bb\u2081', 2);
                            viz.drawVector(0, 0, v2[0] * r2, v2[1] * r2, viz.colors.green, '1/\u221a\u03bb\u2082', 2);

                            // Info
                            viz.screenText('\u03bb\u2081 = ' + lam1.toFixed(2) + '  (semi-axis = ' + r1.toFixed(2) + ')', 10, 20, viz.colors.orange, 12, 'left');
                            viz.screenText('\u03bb\u2082 = ' + lam2.toFixed(2) + '  (semi-axis = ' + r2.toFixed(2) + ')', 10, 38, viz.colors.green, 12, 'left');
                            viz.screenText('x\u1d40Ax = 1', viz.width / 2, viz.height - 15, viz.colors.blue, 13);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Eliminate the cross term in \\(Q(x_1,x_2) = 2x_1^2 + 4x_1 x_2 + 5x_2^2\\) by finding the principal axes.',
                    hint: 'Write \\(Q = x^TAx\\) with \\(A = \\begin{pmatrix}2&2\\\\2&5\\end{pmatrix}\\), diagonalize \\(A\\), and use the change of variables \\(x = Q_0 y\\).',
                    solution: 'Characteristic polynomial: \\(\\lambda^2 - 7\\lambda + 6 = (\\lambda - 1)(\\lambda - 6) = 0\\). Eigenvalues: \\(\\lambda_1 = 1, \\lambda_2 = 6\\). In the principal axis coordinates: \\(Q = y_1^2 + 6y_2^2\\). The eigenvectors \\(q_1 = \\frac{1}{\\sqrt{5}}(2,-1)^T\\) and \\(q_2 = \\frac{1}{\\sqrt{5}}(1,2)^T\\) define the rotation.'
                },
                {
                    question: 'Classify the conic section \\(3x_1^2 - 2x_1 x_2 + 3x_2^2 = 8\\) and find its semi-axis lengths.',
                    hint: 'The matrix is \\(A = \\begin{pmatrix}3&-1\\\\-1&3\\end{pmatrix}\\). Find eigenvalues.',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 4, \\lambda_2 = 2\\). Both positive, so this is an ellipse. In standard form: \\(4y_1^2 + 2y_2^2 = 8\\), i.e., \\(\\frac{y_1^2}{2} + \\frac{y_2^2}{4} = 1\\). Semi-axes: \\(\\sqrt{2}\\) and \\(2\\). The eigenvectors \\(\\frac{1}{\\sqrt{2}}(1,-1)^T\\) and \\(\\frac{1}{\\sqrt{2}}(1,1)^T\\) give the principal directions.'
                },
                {
                    question: 'For a positive definite matrix \\(A\\), show that the volume of the ellipsoid \\(\\{x : x^TAx \\le 1\\}\\) in \\(\\mathbb{R}^n\\) is \\(\\frac{V_n}{\\sqrt{\\det A}}\\), where \\(V_n\\) is the volume of the unit ball.',
                    hint: 'Use the change of variables \\(x = Qy\\) to transform the ellipsoid into a product of intervals. The Jacobian of an orthogonal transformation is 1.',
                    solution: 'Under \\(x = Qy\\), the ellipsoid becomes \\(\\{y : \\sum \\lambda_i y_i^2 \\le 1\\}\\), i.e., an ellipsoid with semi-axes \\(1/\\sqrt{\\lambda_i}\\). Its volume is \\(V_n \\cdot \\prod_i \\frac{1}{\\sqrt{\\lambda_i}} = \\frac{V_n}{\\sqrt{\\prod \\lambda_i}} = \\frac{V_n}{\\sqrt{\\det A}}\\), since \\(\\det A = \\prod \\lambda_i\\).'
                },
                {
                    question: 'Show that the maximum of \\(x^TAx\\) on the unit sphere \\(\\|x\\| = 1\\) equals the largest eigenvalue of \\(A\\).',
                    hint: 'Write \\(x = Qy\\). On the unit sphere, \\(\\|y\\| = 1\\). Then \\(x^TAx = \\sum \\lambda_i y_i^2\\). Maximize this subject to \\(\\sum y_i^2 = 1\\).',
                    solution: 'Under the change \\(x = Qy\\), \\(x^TAx = \\sum_i \\lambda_i y_i^2\\) with \\(\\sum y_i^2 = 1\\). This is a weighted average of the \\(\\lambda_i\\) with weights \\(y_i^2\\) summing to 1. The maximum is \\(\\lambda_{\\max}\\), achieved when all weight is on the largest eigenvalue (\\(y\\) is the corresponding eigenvector). Similarly, the minimum is \\(\\lambda_{\\min}\\).'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix}2&1&0\\\\1&3&1\\\\0&1&2\\end{pmatrix}\\). Without computing eigenvalues, determine the sign of \\(\\det(A)\\) and whether the quadratic form \\(x^TAx\\) is positive definite.',
                    hint: 'Check the leading principal minors: \\(\\Delta_1 = 2\\), \\(\\Delta_2 = \\det\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}\\), \\(\\Delta_3 = \\det(A)\\). Sylvester\'s criterion: positive definite iff all \\(\\Delta_k > 0\\).',
                    solution: '\\(\\Delta_1 = 2 > 0\\). \\(\\Delta_2 = 6 - 1 = 5 > 0\\). \\(\\Delta_3 = 2(6-1) - 1(2-0) + 0 = 10 - 2 = 8 > 0\\). All leading principal minors are positive, so by Sylvester\'s criterion, \\(A\\) is positive definite and \\(\\det(A) = 8 > 0\\).'
                }
            ]
        },

        // ========== SECTION 5: Rayleigh Quotient and Min-Max ==========
        {
            id: 'sec05-rayleigh-quotient',
            title: 'Rayleigh Quotient & Min-Max',
            content: `
<h2>16.5 Rayleigh Quotient and Min-Max Characterization</h2>

<p>The Rayleigh quotient provides a variational characterization of eigenvalues: instead of solving \\(Ax = \\lambda x\\), we can find eigenvalues by optimizing a scalar function over the unit sphere. This perspective is fundamental in numerical linear algebra (the power method, Lanczos algorithm) and in physics (variational principles in quantum mechanics).</p>

<div class="env-block definition">
  <div class="env-title">Definition 16.5.1 (Rayleigh Quotient)</div>
  <div class="env-body">
    <p>For a symmetric matrix \\(A\\) and nonzero vector \\(x \\in \\mathbb{R}^n\\), the <em>Rayleigh quotient</em> is
    \\[
    R(x) = \\frac{x^T A x}{x^T x}.
    \\]
    Note that \\(R(\\alpha x) = R(x)\\) for any \\(\\alpha \\neq 0\\), so \\(R\\) is a function on the unit sphere.</p>
  </div>
</div>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.5.2 (Rayleigh Quotient Characterization)</div>
  <div class="env-body">
    <p>Let \\(A\\) be a real symmetric \\(n \\times n\\) matrix with eigenvalues \\(\\lambda_1 \\ge \\lambda_2 \\ge \\cdots \\ge \\lambda_n\\). Then:
    \\[
    \\lambda_1 = \\max_{x \\neq 0} R(x) = \\max_{\\|x\\|=1} x^T A x,
    \\]
    \\[
    \\lambda_n = \\min_{x \\neq 0} R(x) = \\min_{\\|x\\|=1} x^T A x.
    \\]
    The maximum is attained at any eigenvector corresponding to \\(\\lambda_1\\), and the minimum at any eigenvector corresponding to \\(\\lambda_n\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Write \\(A = Q\\Lambda Q^T\\) and set \\(y = Q^T x\\) (so \\(\\|y\\| = \\|x\\|\\)). Then
    \\[
    R(x) = \\frac{x^T A x}{x^T x} = \\frac{y^T \\Lambda y}{y^T y} = \\frac{\\sum_i \\lambda_i y_i^2}{\\sum_i y_i^2}.
    \\]
    This is a weighted average of the \\(\\lambda_i\\) with nonneg weights \\(y_i^2/\\|y\\|^2\\) summing to 1. It is maximized when all weight is on \\(\\lambda_1\\) (set \\(y = e_1\\), i.e., \\(x = q_1\\)), giving \\(R = \\lambda_1\\). Similarly, the minimum is \\(\\lambda_n\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-rayleigh-quotient"></div>

<h3>The Courant-Fischer Min-Max Theorem</h3>

<p>The Rayleigh quotient characterizes the extreme eigenvalues. What about the intermediate ones? The Courant-Fischer theorem provides a variational characterization of <em>every</em> eigenvalue.</p>

<div class="env-block theorem">
  <div class="env-title">Theorem 16.5.3 (Courant-Fischer Min-Max)</div>
  <div class="env-body">
    <p>Let \\(A\\) be a real symmetric \\(n \\times n\\) matrix with eigenvalues \\(\\lambda_1 \\ge \\lambda_2 \\ge \\cdots \\ge \\lambda_n\\). Then for \\(1 \\le k \\le n\\):
    \\[
    \\lambda_k = \\max_{\\dim V = k} \\min_{x \\in V,\\, x \\neq 0} R(x) = \\min_{\\dim W = n-k+1} \\max_{x \\in W,\\, x \\neq 0} R(x).
    \\]</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof (max-min form)</div>
  <div class="env-body">
    <p>We prove the max-min characterization \\(\\lambda_k = \\max_{\\dim V = k} \\min_{x \\in V \\setminus\\{0\\}} R(x)\\).</p>

    <p><strong>Step 1: \\(\\lambda_k \\ge \\max_{\\dim V = k}\\min R\\).</strong> No, we show the max is achieved. Take \\(V_k = \\operatorname{span}(q_1, \\ldots, q_k)\\). For \\(x = \\sum_{i=1}^k c_i q_i \\in V_k\\):
    \\[
    R(x) = \\frac{\\sum_{i=1}^k \\lambda_i c_i^2}{\\sum_{i=1}^k c_i^2} \\ge \\lambda_k,
    \\]
    since \\(\\lambda_i \\ge \\lambda_k\\) for \\(i \\le k\\). So \\(\\min_{x \\in V_k \\setminus\\{0\\}} R(x) \\ge \\lambda_k\\).</p>

    <p><strong>Step 2: For any \\(k\\)-dimensional \\(V\\), \\(\\min_{x \\in V \\setminus\\{0\\}} R(x) \\le \\lambda_k\\).</strong> Let \\(W = \\operatorname{span}(q_k, q_{k+1}, \\ldots, q_n)\\), which has dimension \\(n - k + 1\\). Since \\(\\dim V + \\dim W = k + (n - k + 1) = n + 1 > n\\), there exists nonzero \\(z \\in V \\cap W\\). Writing \\(z = \\sum_{i=k}^n c_i q_i\\):
    \\[
    R(z) = \\frac{\\sum_{i=k}^n \\lambda_i c_i^2}{\\sum_{i=k}^n c_i^2} \\le \\lambda_k.
    \\]
    So \\(\\min_{x \\in V \\setminus\\{0\\}} R(x) \\le R(z) \\le \\lambda_k\\).</p>

    <p>Combining Steps 1 and 2: the max over \\(V\\) is exactly \\(\\lambda_k\\), achieved at \\(V_k\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>Applications of the Rayleigh Quotient</h3>

<div class="env-block corollary">
  <div class="env-title">Corollary 16.5.4 (Eigenvalue Interlacing)</div>
  <div class="env-body">
    <p>If \\(B\\) is an \\((n-1) \\times (n-1)\\) principal submatrix of a symmetric \\(n \\times n\\) matrix \\(A\\), with eigenvalues \\(\\mu_1 \\ge \\cdots \\ge \\mu_{n-1}\\), then
    \\[
    \\lambda_1 \\ge \\mu_1 \\ge \\lambda_2 \\ge \\mu_2 \\ge \\cdots \\ge \\mu_{n-1} \\ge \\lambda_n.
    \\]</p>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (Numerical Computation)</div>
  <div class="env-body">
    <p>The Rayleigh quotient is the basis for iterative eigenvalue algorithms. Given an approximate eigenvector \\(x\\), \\(R(x)\\) is the best scalar approximation to the eigenvalue. If \\(x = q_k + \\varepsilon u\\) for small \\(\\varepsilon\\), then \\(R(x) = \\lambda_k + O(\\varepsilon^2)\\), meaning the Rayleigh quotient converges quadratically even when the eigenvector approximation is only first-order accurate.</p>
  </div>
</div>

<div class="env-block proposition">
  <div class="env-title">Proposition 16.5.5 (Rayleigh Quotient as Best Approximation)</div>
  <div class="env-body">
    <p>For a fixed nonzero \\(x\\), the Rayleigh quotient \\(R(x)\\) minimizes \\(\\|Ax - \\mu x\\|^2\\) over \\(\\mu \\in \\mathbb{R}\\). That is, \\(R(x)\\) is the scalar \\(\\mu\\) that makes \\(\\mu x\\) closest to \\(Ax\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Expand \\(\\|Ax - \\mu x\\|^2 = \\|Ax\\|^2 - 2\\mu x^TAx + \\mu^2 \\|x\\|^2\\). Taking the derivative with respect to \\(\\mu\\) and setting it to zero: \\(-2x^TAx + 2\\mu\\|x\\|^2 = 0\\), giving \\(\\mu = x^TAx / \\|x\\|^2 = R(x)\\).</p>
    <div class="qed">∎</div>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-rayleigh-quotient',
                    title: 'Rayleigh Quotient on the Unit Circle',
                    description: 'For a 2x2 symmetric matrix, the Rayleigh quotient \\(R(x) = x^TAx\\) restricted to \\(\\|x\\|=1\\) varies between \\(\\lambda_{\\min}\\) and \\(\\lambda_{\\max}\\). Drag the point on the unit circle and watch the quotient value. The maximum and minimum occur at the eigenvectors.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50, originX: 200, originY: 200 });

                        let a11 = 3, a12 = 1, a22 = 1;
                        let theta = 0.5;

                        VizEngine.createSlider(controls, 'a\u2081\u2081', -3, 5, a11, 0.1, v => { a11 = v; });
                        VizEngine.createSlider(controls, 'a\u2081\u2082', -3, 3, a12, 0.1, v => { a12 = v; });
                        VizEngine.createSlider(controls, 'a\u2082\u2082', -3, 5, a22, 0.1, v => { a22 = v; });

                        const probe = viz.addDraggable('probe', Math.cos(theta), Math.sin(theta), viz.colors.orange, 8, (wx, wy) => {
                            const len = Math.sqrt(wx * wx + wy * wy);
                            if (len > 0.01) {
                                probe.x = wx / len;
                                probe.y = wy / len;
                            }
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[a11, a12], [a12, a22]];
                            const evals = VizEngine.eigenvalues2(M);

                            // Draw unit circle
                            viz.drawCircle(0, 0, 1, null, viz.colors.muted, 1);

                            // Draw Rayleigh quotient as color on the circle
                            const N = 200;
                            for (let i = 0; i < N; i++) {
                                const t1 = (2 * Math.PI * i) / N;
                                const t2 = (2 * Math.PI * (i + 1)) / N;
                                const x1 = Math.cos(t1), y1 = Math.sin(t1);
                                const R1 = x1 * (a11 * x1 + a12 * y1) + y1 * (a12 * x1 + a22 * y1);
                                const x2 = Math.cos(t2), y2 = Math.sin(t2);

                                // Color based on R value
                                const rMin = evals ? Math.min(evals[0], evals[1]) : -2;
                                const rMax = evals ? Math.max(evals[0], evals[1]) : 2;
                                const frac = rMax > rMin ? (R1 - rMin) / (rMax - rMin) : 0.5;

                                const r = Math.floor(255 * frac);
                                const b = Math.floor(255 * (1 - frac));
                                const color = 'rgb(' + r + ',100,' + b + ')';

                                const [sx1, sy1] = viz.toScreen(x1 * 1.15, y1 * 1.15);
                                const [sx2, sy2] = viz.toScreen(x2 * 1.15, y2 * 1.15);
                                const [sx3, sy3] = viz.toScreen(x1 * 0.85, y1 * 0.85);

                                viz.ctx.fillStyle = color;
                                viz.ctx.fillRect(Math.min(sx1, sx2) - 2, Math.min(sy1, sy2) - 2, 5, 5);
                            }

                            // Draw eigenvectors if real
                            if (evals) {
                                const v1 = VizEngine.eigenvector2(M, evals[0]);
                                const v2 = VizEngine.eigenvector2(M, evals[1]);
                                viz.drawVec(v1[0] * 1.5, v1[1] * 1.5, viz.colors.red, '\u03bb\u2081', 1.5);
                                viz.drawVec(v2[0] * 1.5, v2[1] * 1.5, viz.colors.green, '\u03bb\u2082', 1.5);
                            }

                            // Current probe point
                            const px = probe.x, py = probe.y;
                            const Rval = px * (a11 * px + a12 * py) + py * (a12 * px + a22 * py);

                            // Draw Ax
                            const Ax = VizEngine.matVec(M, [px, py]);
                            if (VizEngine.vecLen(Ax) < 8) {
                                viz.drawVec(Ax[0], Ax[1], viz.colors.purple, 'Ax', 1.5);
                            }
                            viz.drawVec(px, py, viz.colors.orange, 'x', 2);

                            // Plot R(theta) on the right side
                            const plotX = viz.width - 180;
                            const plotW = 160;
                            const plotH = 120;
                            const plotY = 30;

                            viz.ctx.fillStyle = '#0e0e28';
                            viz.ctx.fillRect(plotX - 5, plotY - 5, plotW + 10, plotH + 10);
                            viz.ctx.strokeStyle = viz.colors.muted;
                            viz.ctx.lineWidth = 1;
                            viz.ctx.strokeRect(plotX, plotY, plotW, plotH);

                            // Plot R(theta) curve
                            const rMin = evals ? Math.min(evals[0], evals[1]) - 0.5 : -3;
                            const rMax = evals ? Math.max(evals[0], evals[1]) + 0.5 : 5;
                            viz.ctx.strokeStyle = viz.colors.blue;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            for (let i = 0; i <= 100; i++) {
                                const t = (2 * Math.PI * i) / 100;
                                const cx = Math.cos(t), cy = Math.sin(t);
                                const R = cx * (a11 * cx + a12 * cy) + cy * (a12 * cx + a22 * cy);
                                const sx = plotX + (t / (2 * Math.PI)) * plotW;
                                const sy = plotY + plotH - ((R - rMin) / (rMax - rMin)) * plotH;
                                i === 0 ? viz.ctx.moveTo(sx, sy) : viz.ctx.lineTo(sx, sy);
                            }
                            viz.ctx.stroke();

                            // Mark current angle
                            const curTheta = Math.atan2(py, px);
                            const curT = curTheta < 0 ? curTheta + 2 * Math.PI : curTheta;
                            const markerX = plotX + (curT / (2 * Math.PI)) * plotW;
                            const markerY = plotY + plotH - ((Rval - rMin) / (rMax - rMin)) * plotH;
                            viz.ctx.fillStyle = viz.colors.orange;
                            viz.ctx.beginPath();
                            viz.ctx.arc(markerX, markerY, 4, 0, Math.PI * 2);
                            viz.ctx.fill();

                            // Labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '10px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.fillText('R(\u03b8) vs \u03b8', plotX + plotW / 2, plotY - 8);
                            viz.ctx.fillText('0', plotX, plotY + plotH + 12);
                            viz.ctx.fillText('2\u03c0', plotX + plotW, plotY + plotH + 12);

                            // Display info
                            viz.screenText('R(x) = x\u1d40Ax = ' + Rval.toFixed(3), 10, viz.height - 35, viz.colors.orange, 13, 'left');
                            if (evals) {
                                viz.screenText('\u03bb_max = ' + Math.max(evals[0], evals[1]).toFixed(3) + ',  \u03bb_min = ' + Math.min(evals[0], evals[1]).toFixed(3), 10, viz.height - 15, viz.colors.yellow, 12, 'left');
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
                    question: 'Let \\(A = \\begin{pmatrix}4 & 1\\\\1 & 2\\end{pmatrix}\\). Compute \\(R(x)\\) for \\(x = (1, 1)^T\\) and compare with the eigenvalues.',
                    hint: 'Compute \\(x^TAx\\) and \\(x^Tx\\), then take the ratio.',
                    solution: '\\(x^TAx = (1,1)\\begin{pmatrix}4&1\\\\1&2\\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix} = (1,1)(5,3)^T = 8\\). \\(x^Tx = 2\\). So \\(R(x) = 4\\). The eigenvalues are \\(\\lambda = 3 \\pm \\sqrt{2}\\), i.e., approximately \\(4.41\\) and \\(1.59\\). Indeed \\(1.59 \\le 4 \\le 4.41\\).'
                },
                {
                    question: 'Prove that if \\(x\\) is an eigenvector of \\(A\\) with eigenvalue \\(\\lambda\\), then \\(R(x) = \\lambda\\).',
                    hint: 'Substitute \\(Ax = \\lambda x\\) directly into the definition of \\(R(x)\\).',
                    solution: '\\(R(x) = \\frac{x^TAx}{x^Tx} = \\frac{x^T(\\lambda x)}{x^Tx} = \\frac{\\lambda x^Tx}{x^Tx} = \\lambda\\).'
                },
                {
                    question: 'Show that the gradient of \\(R(x)\\) on the unit sphere vanishes at eigenvectors. (Use Lagrange multipliers to maximize \\(x^TAx\\) subject to \\(\\|x\\|^2 = 1\\).)',
                    hint: 'The Lagrangian is \\(L(x, \\mu) = x^TAx - \\mu(x^Tx - 1)\\). Set \\(\\nabla_x L = 0\\).',
                    solution: '\\(\\nabla_x (x^TAx) = 2Ax\\) and \\(\\nabla_x(x^Tx) = 2x\\). Setting \\(\\nabla L = 2Ax - 2\\mu x = 0\\) gives \\(Ax = \\mu x\\), which is the eigenvalue equation. So critical points of \\(R\\) on the sphere are exactly the eigenvectors, and the critical values are the eigenvalues.'
                },
                {
                    question: 'Use the Courant-Fischer theorem to prove that if \\(B = A + cI\\) for some scalar \\(c\\), then the eigenvalues of \\(B\\) are \\(\\lambda_i(B) = \\lambda_i(A) + c\\).',
                    hint: 'Compute \\(R_B(x) = x^TBx / x^Tx\\) in terms of \\(R_A(x)\\).',
                    solution: '\\(R_B(x) = \\frac{x^T(A+cI)x}{x^Tx} = \\frac{x^TAx + cx^Tx}{x^Tx} = R_A(x) + c\\). Since \\(R_B = R_A + c\\) for every \\(x\\), all the max-min values shift by \\(c\\): \\(\\lambda_k(B) = \\lambda_k(A) + c\\).'
                },
                {
                    question: 'Let \\(A\\) be positive definite. Show that \\(\\lambda_{\\min}(A) \\le \\frac{\\operatorname{tr}(A)}{n} \\le \\lambda_{\\max}(A)\\).',
                    hint: 'Recall \\(\\operatorname{tr}(A) = \\sum_i \\lambda_i\\). This is an average of eigenvalues.',
                    solution: 'Since \\(\\operatorname{tr}(A) = \\sum_{i=1}^n \\lambda_i\\) and \\(\\lambda_{\\min} \\le \\lambda_i \\le \\lambda_{\\max}\\) for all \\(i\\), we have \\(n\\lambda_{\\min} \\le \\sum \\lambda_i \\le n\\lambda_{\\max}\\), giving \\(\\lambda_{\\min} \\le \\operatorname{tr}(A)/n \\le \\lambda_{\\max}\\). Geometrically, the trace divided by \\(n\\) is the average eigenvalue.'
                },
                {
                    question: 'Verify the quadratic convergence of the Rayleigh quotient: if \\(x = q_1 + \\varepsilon q_2\\) where \\(q_1, q_2\\) are orthonormal eigenvectors with eigenvalues \\(\\lambda_1, \\lambda_2\\), show \\(R(x) = \\lambda_1 + O(\\varepsilon^2)\\).',
                    hint: 'Compute \\(x^TAx = \\lambda_1 + \\varepsilon^2 \\lambda_2\\) and \\(x^Tx = 1 + \\varepsilon^2\\), then expand the ratio.',
                    solution: '\\(x^TAx = \\lambda_1 \\|q_1\\|^2 + \\varepsilon^2 \\lambda_2 \\|q_2\\|^2 = \\lambda_1 + \\varepsilon^2\\lambda_2\\). \\(x^Tx = 1 + \\varepsilon^2\\). So \\(R(x) = \\frac{\\lambda_1 + \\varepsilon^2\\lambda_2}{1 + \\varepsilon^2} = (\\lambda_1 + \\varepsilon^2\\lambda_2)(1 - \\varepsilon^2 + O(\\varepsilon^4)) = \\lambda_1 + \\varepsilon^2(\\lambda_2 - \\lambda_1) + O(\\varepsilon^4)\\). The error is \\(O(\\varepsilon^2)\\), confirming quadratic convergence.'
                }
            ]
        }
    ]
});
