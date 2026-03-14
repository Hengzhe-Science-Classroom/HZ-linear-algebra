// === Chapter 17: Singular Value Decomposition ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Singular Value Decomposition',
    subtitle: 'The crown jewel: every matrix is rotation \u00b7 stretch \u00b7 rotation',
    sections: [
        // ========== SECTION 1: Motivation and Statement ==========
        {
            id: 'sec01-svd-motivation',
            title: 'Motivation & Statement',
            content: `
<h2>17.1 Motivation and Statement of the SVD</h2>

<p>The eigenvalue decomposition \\(A = Q\\Lambda Q^{-1}\\) requires \\(A\\) to be square and diagonalizable. The Spectral Theorem (Chapter 16) improved this to \\(A = Q\\Lambda Q^T\\) for symmetric matrices. But what about rectangular matrices, or non-diagonalizable matrices? Is there a universal factorization that applies to <em>every</em> matrix?</p>

<p>The answer is the <em>Singular Value Decomposition</em> (SVD), which is arguably the most important and versatile factorization in all of linear algebra. Every matrix, of any shape, has an SVD.</p>

<div class="env-block intuition">
  <div class="env-title">Geometric Intuition</div>
  <div class="env-body">
    <p>Any linear transformation can be decomposed into three steps:</p>
    <ol>
      <li><strong>Rotate</strong> (or reflect) the input space, aligning the "important directions" with the coordinate axes.</li>
      <li><strong>Stretch</strong> each coordinate axis by a nonnegative factor (the singular values), possibly changing the dimension.</li>
      <li><strong>Rotate</strong> (or reflect) the output space, placing the stretched axes into their final positions.</li>
    </ol>
    <p>In 2D, this means: every matrix maps the unit circle to an ellipse. The SVD identifies the axes of this ellipse (left singular vectors), the semi-axis lengths (singular values), and the pre-image directions on the unit circle (right singular vectors).</p>
  </div>
</div>

<div class="env-block theorem">
  <div class="env-title">Theorem 17.1.1 (Singular Value Decomposition)</div>
  <div class="env-body">
    <p>Let \\(A \\in \\mathbb{R}^{m \\times n}\\) with \\(\\operatorname{rank}(A) = r\\). Then there exist:</p>
    <ul>
      <li>An orthogonal matrix \\(U \\in \\mathbb{R}^{m \\times m}\\) (columns are <em>left singular vectors</em>),</li>
      <li>An orthogonal matrix \\(V \\in \\mathbb{R}^{n \\times n}\\) (columns are <em>right singular vectors</em>),</li>
      <li>A matrix \\(\\Sigma \\in \\mathbb{R}^{m \\times n}\\) with nonneg entries only on the "diagonal" \\(\\sigma_{ii}\\),</li>
    </ul>
    <p>such that
    \\[
    A = U \\Sigma V^T,
    \\]
    where \\(\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge \\sigma_r > 0 = \\sigma_{r+1} = \\cdots = \\sigma_{\\min(m,n)}\\). The \\(\\sigma_i\\) are called the <em>singular values</em> of \\(A\\).</p>
  </div>
</div>

<div class="env-block definition">
  <div class="env-title">Definition 17.1.2 (Singular Values)</div>
  <div class="env-body">
    <p>The <em>singular values</em> of \\(A\\) are the nonneg real numbers \\(\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0\\) appearing on the diagonal of \\(\\Sigma\\). Equivalently, they are the square roots of the eigenvalues of \\(A^T A\\) (or \\(A A^T\\)):
    \\[
    \\sigma_i = \\sqrt{\\lambda_i(A^T A)}.
    \\]</p>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (SVD vs. Eigendecomposition)</div>
  <div class="env-body">
    <table style="width:100%;border-collapse:collapse;margin:8px 0;">
      <tr style="border-bottom:1px solid #30363d;">
        <th style="padding:4px 8px;text-align:left;">Feature</th>
        <th style="padding:4px 8px;text-align:left;">Eigendecomposition</th>
        <th style="padding:4px 8px;text-align:left;">SVD</th>
      </tr>
      <tr><td style="padding:4px 8px;">Matrix shape</td><td style="padding:4px 8px;">Square only</td><td style="padding:4px 8px;">Any \\(m \\times n\\)</td></tr>
      <tr><td style="padding:4px 8px;">Always exists?</td><td style="padding:4px 8px;">No (need diagonalizable)</td><td style="padding:4px 8px;">Yes, always</td></tr>
      <tr><td style="padding:4px 8px;">Orthogonal factors?</td><td style="padding:4px 8px;">Only for symmetric</td><td style="padding:4px 8px;">Always orthogonal</td></tr>
      <tr><td style="padding:4px 8px;">Diagonal values</td><td style="padding:4px 8px;">Eigenvalues (can be negative, complex)</td><td style="padding:4px 8px;">Singular values (always \\(\\ge 0\\))</td></tr>
    </table>
  </div>
</div>

<h3>The Compact (Reduced) SVD</h3>

<div class="env-block definition">
  <div class="env-title">Definition 17.1.3 (Compact SVD)</div>
  <div class="env-body">
    <p>The <em>compact</em> or <em>reduced</em> SVD retains only the \\(r\\) nonzero singular values:
    \\[
    A = U_r \\Sigma_r V_r^T,
    \\]
    where \\(U_r \\in \\mathbb{R}^{m \\times r}\\), \\(\\Sigma_r = \\operatorname{diag}(\\sigma_1, \\ldots, \\sigma_r)\\), \\(V_r \\in \\mathbb{R}^{n \\times r}\\). The columns of \\(U_r\\) form an orthonormal basis for \\(\\operatorname{col}(A)\\), and the columns of \\(V_r\\) form an orthonormal basis for \\(\\operatorname{row}(A)\\).</p>
  </div>
</div>

<h3>Outer Product Form</h3>

<p>Just as the spectral decomposition writes a symmetric matrix as a sum of rank-one matrices, so does the SVD for any matrix:</p>

\\[
A = \\sigma_1 u_1 v_1^T + \\sigma_2 u_2 v_2^T + \\cdots + \\sigma_r u_r v_r^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T.
\\]

<p>Each \\(u_i v_i^T\\) is a rank-one matrix. The singular values \\(\\sigma_i\\) tell us how important each rank-one "layer" is.</p>

<div class="viz-placeholder" data-viz="viz-svd-geometric"></div>
`,
            visualizations: [
                {
                    id: 'viz-svd-geometric',
                    title: 'SVD Geometry: Unit Circle to Ellipse',
                    description: 'Every 2x2 matrix maps the unit circle to an ellipse. The right singular vectors (\\(v_1, v_2\\), blue) on the unit circle map to the left singular vectors (\\(u_1, u_2\\), red) scaled by singular values on the ellipse. Adjust matrix entries to explore.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        let m00 = 2, m01 = 1, m10 = 0.5, m11 = 1.5;

                        VizEngine.createSlider(controls, 'a', -3, 3, m00, 0.1, v => { m00 = v; });
                        VizEngine.createSlider(controls, 'b', -3, 3, m01, 0.1, v => { m01 = v; });
                        VizEngine.createSlider(controls, 'c', -3, 3, m10, 0.1, v => { m10 = v; });
                        VizEngine.createSlider(controls, 'd', -3, 3, m11, 0.1, v => { m11 = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[m00, m01], [m10, m11]];

                            // Compute SVD via A^T A
                            const ATA = VizEngine.matMul(VizEngine.transpose(M), M);
                            const evals = VizEngine.eigenvalues2(ATA);

                            if (!evals) {
                                viz.screenText('Degenerate case', viz.width / 2, viz.height / 2, viz.colors.red, 14);
                                return;
                            }

                            // Sort eigenvalues descending
                            let lam1 = Math.max(evals[0], evals[1]);
                            let lam2 = Math.min(evals[0], evals[1]);
                            lam1 = Math.max(lam1, 0);
                            lam2 = Math.max(lam2, 0);
                            const sig1 = Math.sqrt(lam1);
                            const sig2 = Math.sqrt(lam2);

                            // Right singular vectors (eigenvectors of A^T A)
                            const v1 = VizEngine.eigenvector2(ATA, lam1);
                            let v2 = VizEngine.eigenvector2(ATA, lam2);

                            // Ensure v1, v2 form right-handed system
                            if (v1[0] * v2[1] - v1[1] * v2[0] < 0) {
                                v2 = [-v2[0], -v2[1]];
                            }

                            // Left singular vectors: u_i = Av_i / sigma_i
                            let u1 = [0, 0], u2 = [0, 0];
                            if (sig1 > 1e-10) {
                                const Av1 = VizEngine.matVec(M, v1);
                                u1 = [Av1[0] / sig1, Av1[1] / sig1];
                            }
                            if (sig2 > 1e-10) {
                                const Av2 = VizEngine.matVec(M, v2);
                                u2 = [Av2[0] / sig2, Av2[1] / sig2];
                            }

                            // Draw unit circle
                            viz.drawCircle(0, 0, 1, null, viz.colors.muted + '66', 1);

                            // Draw transformed ellipse
                            const N = 120;
                            viz.ctx.strokeStyle = viz.colors.blue;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            for (let i = 0; i <= N; i++) {
                                const t = (2 * Math.PI * i) / N;
                                const p = [Math.cos(t), Math.sin(t)];
                                const tp = VizEngine.matVec(M, p);
                                const [sx, sy] = viz.toScreen(tp[0], tp[1]);
                                i === 0 ? viz.ctx.moveTo(sx, sy) : viz.ctx.lineTo(sx, sy);
                            }
                            viz.ctx.stroke();

                            // Draw right singular vectors on unit circle
                            viz.drawVec(v1[0], v1[1], viz.colors.teal, 'v\u2081', 2);
                            viz.drawVec(v2[0], v2[1], viz.colors.teal, 'v\u2082', 2);

                            // Draw where v1, v2 map to (sigma * u)
                            if (sig1 > 1e-10) {
                                viz.drawVec(u1[0] * sig1, u1[1] * sig1, viz.colors.red, '\u03c3\u2081u\u2081', 2);
                            }
                            if (sig2 > 1e-10) {
                                viz.drawVec(u2[0] * sig2, u2[1] * sig2, viz.colors.orange, '\u03c3\u2082u\u2082', 2);
                            }

                            // Info
                            viz.screenText('\u03c3\u2081 = ' + sig1.toFixed(3) + ',  \u03c3\u2082 = ' + sig2.toFixed(3), viz.width / 2, 20, viz.colors.yellow, 13);
                            viz.screenText('Blue circle \u2192 Blue ellipse (image under A)', viz.width / 2, viz.height - 30, viz.colors.text, 11);
                            viz.screenText('Teal: right singular vectors | Red/Orange: scaled left singular vectors', viz.width / 2, viz.height - 12, viz.colors.text, 10);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'For \\(A = \\begin{pmatrix}3 & 0\\\\0 & 2\\end{pmatrix}\\), write down the SVD. What are the singular values, left singular vectors, and right singular vectors?',
                    hint: 'For a diagonal matrix with nonneg entries, the SVD is trivial.',
                    solution: 'Since \\(A\\) is already diagonal with nonneg entries, \\(U = V = I_2\\), \\(\\Sigma = \\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}\\). The singular values are \\(\\sigma_1 = 3, \\sigma_2 = 2\\). Both left and right singular vectors are the standard basis vectors \\(e_1, e_2\\).'
                },
                {
                    question: 'If \\(A\\) is symmetric positive definite, how does the SVD relate to the eigendecomposition?',
                    hint: 'For symmetric \\(A\\), \\(A = Q\\Lambda Q^T\\). If all eigenvalues are positive, how does this compare to \\(U\\Sigma V^T\\)?',
                    solution: 'If \\(A = Q\\Lambda Q^T\\) with \\(\\Lambda = \\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n)\\) and all \\(\\lambda_i > 0\\), then this is already the SVD with \\(U = V = Q\\) and \\(\\Sigma = \\Lambda\\). The singular values equal the eigenvalues. For symmetric positive semi-definite, the singular values are still the eigenvalues. For symmetric with negative eigenvalues, \\(\\sigma_i = |\\lambda_i|\\) and some columns of \\(U\\) get sign-flipped.'
                },
                {
                    question: 'Show that \\(\\|A\\|_F^2 = \\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2\\), where \\(\\|A\\|_F = \\sqrt{\\sum_{ij} a_{ij}^2}\\) is the Frobenius norm.',
                    hint: 'Use the fact that \\(\\|A\\|_F^2 = \\operatorname{tr}(A^TA)\\) and that \\(A^TA = V\\Sigma^T\\Sigma V^T\\).',
                    solution: '\\(\\|A\\|_F^2 = \\operatorname{tr}(A^TA) = \\operatorname{tr}(V\\Sigma^T U^T U\\Sigma V^T) = \\operatorname{tr}(V\\Sigma^T\\Sigma V^T) = \\operatorname{tr}(\\Sigma^T\\Sigma V^TV) = \\operatorname{tr}(\\Sigma^T\\Sigma) = \\sum_i \\sigma_i^2\\). The last step uses the cyclic property of trace and orthogonality of \\(V\\).'
                },
                {
                    question: 'What are the singular values of the matrix \\(A = \\begin{pmatrix}1 & 1\\\\0 & 0\\end{pmatrix}\\)?',
                    hint: 'Compute \\(A^TA\\) and find its eigenvalues.',
                    solution: '\\(A^TA = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix} + \\cdots\\). Wait, let us compute directly: \\(A^TA = \\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\). Eigenvalues of \\(A^TA\\): \\(\\lambda^2 - 2\\lambda = 0\\), so \\(\\lambda = 2, 0\\). Singular values: \\(\\sigma_1 = \\sqrt{2}, \\sigma_2 = 0\\). The rank is 1.'
                },
                {
                    question: 'Show that the nonzero singular values of \\(A\\) and \\(A^T\\) are the same.',
                    hint: 'The eigenvalues of \\(A^TA\\) and \\(AA^T\\) have the same nonzero values (this is a general fact).',
                    solution: 'The singular values of \\(A^T\\) are the square roots of eigenvalues of \\((A^T)^T A^T = AA^T\\). But the nonzero eigenvalues of \\(A^TA\\) and \\(AA^T\\) are the same (if \\(A^TAv = \\lambda v\\) with \\(\\lambda \\neq 0\\), set \\(u = Av\\); then \\(AA^Tu = AA^TAv = A(\\lambda v) = \\lambda Av = \\lambda u\\)). So the nonzero singular values are identical.'
                }
            ]
        },

        // ========== SECTION 2: Computing the SVD ==========
        {
            id: 'sec02-computing-svd',
            title: 'Computing the SVD',
            content: `
<h2>17.2 Computing the SVD</h2>

<p>The SVD exists for every matrix, but how do we compute it? The key insight is that \\(A^TA\\) and \\(AA^T\\) are symmetric positive semi-definite, so we can apply the Spectral Theorem from Chapter 16 to these matrices.</p>

<h3>The Connection: \\(A^TA\\) and \\(AA^T\\)</h3>

<div class="env-block proposition">
  <div class="env-title">Proposition 17.2.1</div>
  <div class="env-body">
    <p>If \\(A = U\\Sigma V^T\\), then:</p>
    <ul>
      <li>\\(A^TA = V\\Sigma^T\\Sigma V^T = V \\operatorname{diag}(\\sigma_1^2, \\ldots, \\sigma_n^2) V^T\\),</li>
      <li>\\(AA^T = U\\Sigma\\Sigma^T U^T = U \\operatorname{diag}(\\sigma_1^2, \\ldots, \\sigma_m^2) U^T\\).</li>
    </ul>
    <p>Thus: the eigenvalues of \\(A^TA\\) are \\(\\sigma_i^2\\), the right singular vectors are the eigenvectors of \\(A^TA\\), and the left singular vectors are the eigenvectors of \\(AA^T\\).</p>
  </div>
</div>

<h3>Algorithm for Computing the SVD</h3>

<div class="env-block definition">
  <div class="env-title">Algorithm 17.2.2 (SVD Computation)</div>
  <div class="env-body">
    <p>Given \\(A \\in \\mathbb{R}^{m \\times n}\\):</p>
    <ol>
      <li><strong>Compute \\(A^TA\\)</strong> (an \\(n \\times n\\) symmetric positive semi-definite matrix).</li>
      <li><strong>Diagonalize:</strong> Find eigenvalues \\(\\lambda_1 \\ge \\cdots \\ge \\lambda_n \\ge 0\\) and orthonormal eigenvectors \\(v_1, \\ldots, v_n\\). Set \\(V = [v_1 \\mid \\cdots \\mid v_n]\\).</li>
      <li><strong>Singular values:</strong> \\(\\sigma_i = \\sqrt{\\lambda_i}\\). Form \\(\\Sigma\\) as an \\(m \\times n\\) matrix with \\(\\sigma_i\\) on the diagonal.</li>
      <li><strong>Left singular vectors:</strong> For \\(i = 1, \\ldots, r\\) (where \\(\\sigma_i > 0\\)), set \\(u_i = \\frac{1}{\\sigma_i} Av_i\\). Extend \\(\\{u_1, \\ldots, u_r\\}\\) to an orthonormal basis of \\(\\mathbb{R}^m\\).</li>
    </ol>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Why Step 4 Works</div>
  <div class="env-body">
    <p>We verify that \\(u_i = Av_i / \\sigma_i\\) gives orthonormal vectors. For \\(i \\neq j\\):
    \\[
    u_i^T u_j = \\frac{v_i^T A^T A v_j}{\\sigma_i \\sigma_j} = \\frac{v_i^T (\\sigma_j^2 v_j)}{\\sigma_i \\sigma_j} = \\frac{\\sigma_j}{\\sigma_i} v_i^T v_j = 0.
    \\]
    For \\(i = j\\): \\(u_i^T u_i = \\frac{v_i^T A^T A v_i}{\\sigma_i^2} = \\frac{\\sigma_i^2}{\\sigma_i^2} = 1\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block example">
  <div class="env-title">Example 17.2.3</div>
  <div class="env-body">
    <p>Find the SVD of \\(A = \\begin{pmatrix}1 & 1\\\\1 & 0\\\\0 & 1\\end{pmatrix}\\).</p>

    <p><em>Step 1:</em> \\(A^TA = \\begin{pmatrix}2 & 1\\\\1 & 2\\end{pmatrix}\\).</p>

    <p><em>Step 2:</em> Eigenvalues: \\(\\lambda_1 = 3, \\lambda_2 = 1\\). Eigenvectors: \\(v_1 = \\frac{1}{\\sqrt{2}}(1,1)^T\\), \\(v_2 = \\frac{1}{\\sqrt{2}}(1,-1)^T\\).</p>

    <p><em>Step 3:</em> \\(\\sigma_1 = \\sqrt{3}, \\sigma_2 = 1\\).</p>

    <p><em>Step 4:</em>
    \\[
    u_1 = \\frac{Av_1}{\\sigma_1} = \\frac{1}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{2}}\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix} = \\frac{1}{\\sqrt{6}}\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix},
    \\]
    \\[
    u_2 = \\frac{Av_2}{\\sigma_2} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix}.
    \\]
    Extend to \\(u_3\\) orthogonal to both: \\(u_3 = \\frac{1}{\\sqrt{3}}(1, -1, -1)^T\\) (after checking orthogonality and normalizing).</p>

    <p>The SVD is \\(A = U \\Sigma V^T\\) with
    \\[
    U = \\begin{pmatrix} 2/\\sqrt{6} & 0 & 1/\\sqrt{3}\\\\ 1/\\sqrt{6} & 1/\\sqrt{2} & -1/\\sqrt{3}\\\\ 1/\\sqrt{6} & -1/\\sqrt{2} & -1/\\sqrt{3}\\end{pmatrix}, \\quad \\Sigma = \\begin{pmatrix}\\sqrt{3} & 0\\\\ 0 & 1\\\\ 0 & 0\\end{pmatrix}, \\quad V = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}1 & 1\\\\ 1 & -1\\end{pmatrix}.
    \\]</p>
  </div>
</div>

<div class="env-block warning">
  <div class="env-title">Warning (Numerical Practice)</div>
  <div class="env-body">
    <p>In practice, one does <em>not</em> compute the SVD by forming \\(A^TA\\) explicitly. This squares the condition number and can lose significant digits. Instead, production algorithms (Golub-Kahan bidiagonalization, divide-and-conquer) work directly with \\(A\\). The method above is correct in exact arithmetic and is the right way to understand the theory.</p>
  </div>
</div>

<h3>Existence and Uniqueness</h3>

<div class="env-block theorem">
  <div class="env-title">Theorem 17.2.4 (Existence)</div>
  <div class="env-body">
    <p>Every matrix \\(A \\in \\mathbb{R}^{m \\times n}\\) has a singular value decomposition \\(A = U\\Sigma V^T\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>The matrix \\(A^TA\\) is symmetric and positive semi-definite (since \\(x^T A^TA x = \\|Ax\\|^2 \\ge 0\\)). By the Spectral Theorem, \\(A^TA = V D V^T\\) where \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\) with \\(\\lambda_i \\ge 0\\). Set \\(\\sigma_i = \\sqrt{\\lambda_i}\\) and define \\(u_i = Av_i/\\sigma_i\\) for \\(\\sigma_i > 0\\). Extend \\(\\{u_1,\\ldots,u_r\\}\\) to an orthonormal basis of \\(\\mathbb{R}^m\\). Then \\(AV = U\\Sigma\\), giving \\(A = U\\Sigma V^T\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (Uniqueness)</div>
  <div class="env-body">
    <p>The singular values are unique (in decreasing order). The singular vectors are unique up to sign when all singular values are distinct. If \\(\\sigma_i = \\sigma_j\\) for \\(i \\neq j\\), the corresponding singular vectors can be rotated within their shared subspace.</p>
  </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Compute the SVD of \\(A = \\begin{pmatrix}3 & 0\\\\0 & -2\\end{pmatrix}\\).',
                    hint: '\\(A^TA = \\begin{pmatrix}9&0\\\\0&4\\end{pmatrix}\\). The eigenvalues are \\(9\\) and \\(4\\).',
                    solution: '\\(\\sigma_1 = 3, \\sigma_2 = 2\\). \\(V = I\\) (eigenvectors of \\(A^TA\\) are \\(e_1, e_2\\)). \\(u_1 = Ae_1/3 = e_1\\), \\(u_2 = Ae_2/2 = -e_2\\). So \\(U = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}\\), \\(\\Sigma = \\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}\\), \\(V = I\\). Check: \\(U\\Sigma V^T = \\begin{pmatrix}3&0\\\\0&-2\\end{pmatrix} = A\\). Note that the singular values are \\(|3| = 3\\) and \\(|-2| = 2\\), both nonneg.'
                },
                {
                    question: 'Find the singular values of \\(A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}\\).',
                    hint: 'Compute \\(A^TA = \\begin{pmatrix}10&14\\\\14&20\\end{pmatrix}\\) and find its eigenvalues.',
                    solution: '\\(A^TA = \\begin{pmatrix}10&14\\\\14&20\\end{pmatrix}\\). Characteristic polynomial: \\(\\lambda^2 - 30\\lambda + (200-196) = \\lambda^2 - 30\\lambda + 4 = 0\\). \\(\\lambda = \\frac{30 \\pm \\sqrt{900-16}}{2} = 15 \\pm \\sqrt{221}\\). So \\(\\sigma_1 = \\sqrt{15 + \\sqrt{221}} \\approx 5.465\\) and \\(\\sigma_2 = \\sqrt{15 - \\sqrt{221}} \\approx 0.366\\).'
                },
                {
                    question: 'Let \\(A\\) be an \\(m \\times n\\) matrix with SVD \\(A = U\\Sigma V^T\\). Show that \\(\\operatorname{rank}(A)\\) equals the number of nonzero singular values.',
                    hint: 'Use the fact that \\(U\\) and \\(V\\) are invertible (orthogonal), so they do not change the rank.',
                    solution: 'Since \\(U\\) and \\(V\\) are orthogonal (hence invertible), \\(\\operatorname{rank}(A) = \\operatorname{rank}(U\\Sigma V^T) = \\operatorname{rank}(\\Sigma)\\). The rank of the diagonal matrix \\(\\Sigma\\) is the number of nonzero diagonal entries, which is the number of nonzero singular values.'
                },
                {
                    question: 'Compute the SVD of \\(A = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\) (a \\(3 \\times 1\\) matrix).',
                    hint: '\\(A^TA = (14)\\) is a \\(1 \\times 1\\) matrix.',
                    solution: '\\(A^TA = (1^2 + 2^2 + 3^2) = (14)\\). So \\(\\sigma_1 = \\sqrt{14}\\), \\(V = (1)\\). \\(u_1 = A \\cdot 1 / \\sqrt{14} = \\frac{1}{\\sqrt{14}}(1,2,3)^T\\). Extend to \\(u_2, u_3\\) (any orthonormal completion). \\(\\Sigma = \\begin{pmatrix}\\sqrt{14}\\\\0\\\\0\\end{pmatrix}\\).'
                },
                {
                    question: 'Show that the singular values of \\(cA\\) are \\(|c| \\sigma_i(A)\\) for any scalar \\(c\\).',
                    hint: '\\((cA)^T(cA) = c^2 A^TA\\). What are the eigenvalues?',
                    solution: 'The eigenvalues of \\((cA)^T(cA) = c^2 A^TA\\) are \\(c^2 \\lambda_i\\) where \\(\\lambda_i\\) are eigenvalues of \\(A^TA\\). So \\(\\sigma_i(cA) = \\sqrt{c^2 \\lambda_i} = |c| \\sqrt{\\lambda_i} = |c| \\sigma_i(A)\\).'
                }
            ]
        },

        // ========== SECTION 3: Geometric Interpretation ==========
        {
            id: 'sec03-geometry',
            title: 'Geometric Interpretation',
            content: `
<h2>17.3 Geometric Interpretation of the SVD</h2>

<p>The SVD provides the definitive answer to the question: "What does a linear transformation look like geometrically?" Every linear map decomposes into a rotation (or reflection), a coordinate-wise stretch, and another rotation.</p>

<h3>The Three Steps</h3>

<div class="env-block theorem">
  <div class="env-title">Theorem 17.3.1 (Geometric Decomposition)</div>
  <div class="env-body">
    <p>Let \\(A = U\\Sigma V^T\\) be the SVD of \\(A \\in \\mathbb{R}^{m \\times n}\\). The action of \\(A\\) on a vector \\(x \\in \\mathbb{R}^n\\) decomposes as:</p>
    <ol>
      <li><strong>\\(V^T\\):</strong> Rotate/reflect \\(x\\) in \\(\\mathbb{R}^n\\) so that the right singular vectors align with coordinate axes.</li>
      <li><strong>\\(\\Sigma\\):</strong> Scale coordinate \\(i\\) by \\(\\sigma_i\\) and pad or truncate dimensions (if \\(m \\neq n\\)).</li>
      <li><strong>\\(U\\):</strong> Rotate/reflect in \\(\\mathbb{R}^m\\) to place the result along the left singular vectors.</li>
    </ol>
  </div>
</div>

<h3>Unit Sphere to Ellipsoid</h3>

<p>The image of the unit sphere \\(S^{n-1} = \\{x \\in \\mathbb{R}^n : \\|x\\| = 1\\}\\) under \\(A\\) is an ellipsoid (possibly degenerate) in \\(\\mathbb{R}^m\\):
\\[
A(S^{n-1}) = \\{Ax : \\|x\\| = 1\\}.
\\]
The semi-axes of this ellipsoid have lengths \\(\\sigma_1, \\sigma_2, \\ldots, \\sigma_r\\) and point in the directions \\(u_1, u_2, \\ldots, u_r\\).</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 17.3.2</div>
  <div class="env-body">
    <p>The maximum stretching of \\(A\\) is \\(\\sigma_1 = \\max_{\\|x\\|=1} \\|Ax\\|\\), achieved at \\(x = v_1\\). The minimum (nonzero) stretching is \\(\\sigma_r = \\min_{\\|x\\|=1, x \\in \\operatorname{row}(A)} \\|Ax\\|\\), achieved at \\(x = v_r\\).</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Set \\(y = V^Tx\\), so \\(\\|y\\| = \\|x\\| = 1\\). Then \\(\\|Ax\\|^2 = \\|\\Sigma y\\|^2 = \\sum_i \\sigma_i^2 y_i^2\\). Subject to \\(\\sum y_i^2 = 1\\), this weighted sum is maximized when all weight is on \\(\\sigma_1^2\\) (giving \\(y = e_1\\), i.e., \\(x = v_1\\)) and minimized (among nonzero singular values) when all weight is on \\(\\sigma_r^2\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-svd-steps"></div>

<h3>The Spectral Norm and Condition Number</h3>

<div class="env-block definition">
  <div class="env-title">Definition 17.3.3</div>
  <div class="env-body">
    <p>The <em>spectral norm</em> (operator 2-norm) of \\(A\\) is
    \\[
    \\|A\\|_2 = \\max_{\\|x\\|=1} \\|Ax\\| = \\sigma_1.
    \\]
    The <em>condition number</em> of \\(A\\) (when \\(A\\) is invertible) is
    \\[
    \\kappa(A) = \\frac{\\sigma_1}{\\sigma_n} = \\|A\\|_2 \\|A^{-1}\\|_2.
    \\]</p>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (Geometric Meaning of Condition Number)</div>
  <div class="env-body">
    <p>The condition number measures how much the unit sphere gets distorted into an ellipsoid. If \\(\\kappa \\approx 1\\), the image is nearly spherical and the transformation is well-conditioned. If \\(\\kappa \\gg 1\\), the ellipsoid is very elongated (one direction is stretched far more than another), and numerical computations with \\(A\\) are unreliable.</p>
  </div>
</div>

<h3>Four Fundamental Subspaces via SVD</h3>

<p>The SVD directly reveals the four fundamental subspaces of \\(A\\) (from Chapter 5):</p>

<div class="env-block proposition">
  <div class="env-title">Proposition 17.3.4</div>
  <div class="env-body">
    <ul>
      <li>\\(\\operatorname{col}(A) = \\operatorname{span}(u_1, \\ldots, u_r)\\)</li>
      <li>\\(\\operatorname{null}(A^T) = \\operatorname{span}(u_{r+1}, \\ldots, u_m)\\)</li>
      <li>\\(\\operatorname{row}(A) = \\operatorname{span}(v_1, \\ldots, v_r)\\)</li>
      <li>\\(\\operatorname{null}(A) = \\operatorname{span}(v_{r+1}, \\ldots, v_n)\\)</li>
    </ul>
    <p>Each pair is an orthogonal decomposition: \\(\\mathbb{R}^m = \\operatorname{col}(A) \\oplus \\operatorname{null}(A^T)\\) and \\(\\mathbb{R}^n = \\operatorname{row}(A) \\oplus \\operatorname{null}(A)\\).</p>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-svd-steps',
                    title: 'SVD Step-by-Step: \\(V^T\\), then \\(\\Sigma\\), then \\(U\\)',
                    description: 'Watch the transformation \\(A = U\\Sigma V^T\\) applied step by step to the unit circle. Use the slider to animate through the three stages.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 55 });

                        let m00 = 2, m01 = 1, m10 = 0.5, m11 = 1.5;
                        let t = 0;

                        VizEngine.createSlider(controls, 'a', -3, 3, m00, 0.1, v => { m00 = v; });
                        VizEngine.createSlider(controls, 'b', -3, 3, m01, 0.1, v => { m01 = v; });
                        VizEngine.createSlider(controls, 'c', -3, 3, m10, 0.1, v => { m10 = v; });
                        VizEngine.createSlider(controls, 'd', -3, 3, m11, 0.1, v => { m11 = v; });
                        VizEngine.createSlider(controls, 'step', 0, 3, 0, 0.02, v => { t = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const M = [[m00, m01], [m10, m11]];
                            const ATA = VizEngine.matMul(VizEngine.transpose(M), M);
                            const evals = VizEngine.eigenvalues2(ATA);

                            if (!evals) {
                                viz.screenText('Degenerate case', viz.width / 2, viz.height / 2, viz.colors.red, 14);
                                return;
                            }

                            let lam1 = Math.max(evals[0], evals[1]);
                            let lam2 = Math.min(evals[0], evals[1]);
                            lam1 = Math.max(lam1, 0);
                            lam2 = Math.max(lam2, 0);
                            const sig1 = Math.sqrt(lam1);
                            const sig2 = Math.sqrt(lam2);

                            // Right singular vectors
                            const v1 = VizEngine.eigenvector2(ATA, lam1);
                            let v2 = VizEngine.eigenvector2(ATA, lam2);
                            if (v1[0] * v2[1] - v1[1] * v2[0] < 0) v2 = [-v2[0], -v2[1]];

                            const V = [[v1[0], v2[0]], [v1[1], v2[1]]];
                            const VT = VizEngine.transpose(V);

                            // Left singular vectors
                            let u1 = [1, 0], u2 = [0, 1];
                            if (sig1 > 1e-10) {
                                const Av1 = VizEngine.matVec(M, v1);
                                u1 = [Av1[0] / sig1, Av1[1] / sig1];
                            }
                            if (sig2 > 1e-10) {
                                const Av2 = VizEngine.matVec(M, v2);
                                u2 = [Av2[0] / sig2, Av2[1] / sig2];
                            }
                            // Ensure right-handed
                            if (u1[0] * u2[1] - u1[1] * u2[0] < 0) u2 = [-u2[0], -u2[1]];

                            const U = [[u1[0], u2[0]], [u1[1], u2[1]]];

                            // Draw transformed unit circle based on step
                            const N = 100;
                            const pts = [];
                            for (let i = 0; i <= N; i++) {
                                const theta = (2 * Math.PI * i) / N;
                                let p = [Math.cos(theta), Math.sin(theta)];

                                if (t <= 1) {
                                    // Interpolate V^T rotation
                                    const angle1 = Math.atan2(v1[1], v1[0]);
                                    const a = -angle1 * t;
                                    const R = [[Math.cos(a), -Math.sin(a)], [Math.sin(a), Math.cos(a)]];
                                    p = VizEngine.matVec(R, p);
                                } else if (t <= 2) {
                                    // Apply V^T, then interpolate sigma scaling
                                    const s = t - 1;
                                    p = VizEngine.matVec(VT, p);
                                    p = [p[0] * (1 + s * (sig1 - 1)), p[1] * (1 + s * (sig2 - 1))];
                                } else {
                                    // Apply V^T, Sigma, then interpolate U rotation
                                    const s = t - 2;
                                    p = VizEngine.matVec(VT, p);
                                    p = [p[0] * sig1, p[1] * sig2];
                                    const angle2 = Math.atan2(u1[1], u1[0]);
                                    const a = angle2 * s;
                                    const R = [[Math.cos(a), -Math.sin(a)], [Math.sin(a), Math.cos(a)]];
                                    p = VizEngine.matVec(R, p);
                                }

                                pts.push(p);
                            }

                            // Draw reference unit circle
                            viz.drawCircle(0, 0, 1, null, viz.colors.muted + '33', 1);

                            // Draw transformed shape
                            viz.ctx.strokeStyle = viz.colors.blue;
                            viz.ctx.lineWidth = 2.5;
                            viz.ctx.beginPath();
                            for (let i = 0; i <= N; i++) {
                                const [sx, sy] = viz.toScreen(pts[i][0], pts[i][1]);
                                i === 0 ? viz.ctx.moveTo(sx, sy) : viz.ctx.lineTo(sx, sy);
                            }
                            viz.ctx.stroke();

                            // Fill
                            viz.ctx.fillStyle = viz.colors.blue + '11';
                            viz.ctx.fill();

                            // Labels
                            const stepNames = ['Original unit circle', 'Step 1: V\u1d40 (rotate right singular vectors to axes)', 'Step 2: \u03a3 (stretch by singular values)', 'Step 3: U (rotate to left singular vectors)'];
                            const stepIdx = Math.min(3, Math.floor(t));
                            viz.screenText(stepNames[stepIdx], viz.width / 2, 20, viz.colors.white, 12);
                            viz.screenText('\u03c3\u2081 = ' + sig1.toFixed(2) + ',  \u03c3\u2082 = ' + sig2.toFixed(2) + '  |  \u03ba = ' + (sig2 > 0.001 ? (sig1 / sig2).toFixed(1) : '\u221e'), viz.width / 2, 40, viz.colors.yellow, 12);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A matrix \\(A\\) has singular values \\(\\sigma_1 = 5, \\sigma_2 = 2\\). What is \\(\\|A\\|_2\\)? What is \\(\\kappa(A)\\)?',
                    hint: 'The spectral norm is the largest singular value. The condition number is the ratio of largest to smallest.',
                    solution: '\\(\\|A\\|_2 = \\sigma_1 = 5\\). \\(\\kappa(A) = \\sigma_1/\\sigma_2 = 5/2 = 2.5\\).'
                },
                {
                    question: 'If \\(Q\\) is an orthogonal matrix, what are its singular values? What is \\(\\kappa(Q)\\)?',
                    hint: 'Compute \\(Q^TQ\\) and find its eigenvalues.',
                    solution: '\\(Q^TQ = I\\), so the eigenvalues of \\(Q^TQ\\) are all 1. Thus all singular values are \\(\\sqrt{1} = 1\\). \\(\\kappa(Q) = 1/1 = 1\\). Orthogonal matrices have perfect condition number.'
                },
                {
                    question: 'Show that \\(\\|Ax\\| \\le \\sigma_1 \\|x\\|\\) for all \\(x\\), and this bound is tight.',
                    hint: 'Write \\(x = V y\\), so \\(\\|Ax\\| = \\|\\Sigma y\\|\\). Bound each term.',
                    solution: '\\(\\|Ax\\|^2 = \\|U\\Sigma V^Tx\\|^2 = \\|\\Sigma V^Tx\\|^2 = \\sum_i \\sigma_i^2 (V^Tx)_i^2 \\le \\sigma_1^2 \\sum_i (V^Tx)_i^2 = \\sigma_1^2 \\|V^Tx\\|^2 = \\sigma_1^2 \\|x\\|^2\\). So \\(\\|Ax\\| \\le \\sigma_1\\|x\\|\\). Equality holds for \\(x = v_1\\): \\(\\|Av_1\\| = \\sigma_1\\|v_1\\| = \\sigma_1\\).'
                },
                {
                    question: 'Describe geometrically what happens when \\(\\sigma_2 = 0\\) (rank-1 matrix in \\(\\mathbb{R}^{2\\times 2}\\)). What does the unit circle map to?',
                    hint: 'The image of \\(A\\) is 1-dimensional. What shape is a "flat ellipse"?',
                    solution: 'When \\(\\sigma_2 = 0\\), the matrix has rank 1 and the unit circle maps to a line segment of length \\(2\\sigma_1\\) in the direction \\(u_1\\). The "ellipse" degenerates to a segment because there is no stretching in the second direction. Geometrically, the transformation collapses one dimension entirely.'
                },
                {
                    question: 'Show that the four fundamental subspaces can be read directly from the SVD columns, as stated in Proposition 17.3.4.',
                    hint: 'Use \\(AV = U\\Sigma\\) to see what happens to each \\(v_i\\). For \\(i \\le r\\), \\(Av_i = \\sigma_i u_i \\neq 0\\). For \\(i > r\\), \\(Av_i = 0\\).',
                    solution: 'From \\(A = U\\Sigma V^T\\), we get \\(AV = U\\Sigma\\), so \\(Av_i = \\sigma_i u_i\\). For \\(i \\le r\\): \\(Av_i = \\sigma_i u_i \\in \\operatorname{col}(A)\\), confirming \\(v_i \\in \\operatorname{row}(A)\\) and \\(u_i \\in \\operatorname{col}(A)\\). For \\(i > r\\): \\(Av_i = 0\\), so \\(v_i \\in \\operatorname{null}(A)\\). Similarly, \\(A^Tu_i = \\sigma_i v_i\\) for \\(i \\le r\\) and \\(A^Tu_i = 0\\) for \\(i > r\\), giving \\(u_i \\in \\operatorname{null}(A^T)\\) for \\(i > r\\).'
                }
            ]
        },

        // ========== SECTION 4: Low-Rank Approximation ==========
        {
            id: 'sec04-low-rank',
            title: 'Low-Rank Approximation',
            content: `
<h2>17.4 Low-Rank Approximation and the Eckart-Young Theorem</h2>

<p>One of the most powerful applications of the SVD is <em>optimal low-rank approximation</em>. Given a matrix \\(A\\) of rank \\(r\\), what is the best rank-\\(k\\) approximation to \\(A\\) (for \\(k < r\\))? The SVD provides an explicit answer, and the Eckart-Young theorem guarantees it is optimal.</p>

<h3>Truncated SVD</h3>

<div class="env-block definition">
  <div class="env-title">Definition 17.4.1 (Truncated SVD)</div>
  <div class="env-body">
    <p>Given the SVD \\(A = \\sum_{i=1}^r \\sigma_i u_i v_i^T\\), the <em>rank-\\(k\\) truncated SVD</em> is
    \\[
    A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T = U_k \\Sigma_k V_k^T,
    \\]
    where we keep only the \\(k\\) largest singular values and their corresponding singular vectors.</p>
  </div>
</div>

<div class="env-block theorem">
  <div class="env-title">Theorem 17.4.2 (Eckart-Young-Mirsky)</div>
  <div class="env-body">
    <p>Let \\(A \\in \\mathbb{R}^{m \\times n}\\) with singular values \\(\\sigma_1 \\ge \\cdots \\ge \\sigma_r > 0\\). For any \\(k < r\\):
    \\[
    A_k = \\arg\\min_{\\operatorname{rank}(B) \\le k} \\|A - B\\|_2, \\quad \\text{with } \\|A - A_k\\|_2 = \\sigma_{k+1},
    \\]
    \\[
    A_k = \\arg\\min_{\\operatorname{rank}(B) \\le k} \\|A - B\\|_F, \\quad \\text{with } \\|A - A_k\\|_F = \\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}.
    \\]
    The rank-\\(k\\) truncated SVD is the best rank-\\(k\\) approximation in both the spectral and Frobenius norms.</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof (Spectral Norm Case)</div>
  <div class="env-body">
    <p><strong>Upper bound:</strong> \\(A - A_k = \\sum_{i=k+1}^r \\sigma_i u_i v_i^T\\). The singular values of this matrix are \\(\\sigma_{k+1}, \\ldots, \\sigma_r\\), so \\(\\|A - A_k\\|_2 = \\sigma_{k+1}\\).</p>

    <p><strong>Lower bound:</strong> Let \\(B\\) be any matrix with \\(\\operatorname{rank}(B) \\le k\\). Then \\(\\operatorname{null}(B)\\) has dimension \\(\\ge n - k\\). The subspace \\(W = \\operatorname{span}(v_1, \\ldots, v_{k+1})\\) has dimension \\(k + 1\\). Since \\((n - k) + (k + 1) = n + 1 > n\\), there exists nonzero \\(z \\in \\operatorname{null}(B) \\cap W\\). Write \\(z = \\sum_{i=1}^{k+1} c_i v_i\\). Then \\(Bz = 0\\), so
    \\[
    \\|A - B\\|_2 \\ge \\frac{\\|(A-B)z\\|}{\\|z\\|} = \\frac{\\|Az\\|}{\\|z\\|} = \\frac{\\sqrt{\\sum_{i=1}^{k+1} \\sigma_i^2 c_i^2}}{\\sqrt{\\sum_{i=1}^{k+1} c_i^2}} \\ge \\sigma_{k+1}.
    \\]</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (The Power of Truncation)</div>
  <div class="env-body">
    <p>In many real datasets, the singular values decay rapidly: \\(\\sigma_1 \\gg \\sigma_2 \\gg \\sigma_3 \\gg \\cdots\\). In such cases, a low-rank approximation \\(A_k\\) with \\(k \\ll r\\) captures most of the "information" in \\(A\\), while reducing storage from \\(mn\\) entries to \\(k(m + n)\\) entries (the \\(k\\) columns of \\(U_k\\), \\(V_k\\), and \\(k\\) singular values).</p>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-low-rank"></div>

<h3>Measuring Approximation Quality</h3>

<div class="env-block definition">
  <div class="env-title">Definition 17.4.3 (Relative Energy Captured)</div>
  <div class="env-body">
    <p>The fraction of "energy" (Frobenius norm squared) captured by the rank-\\(k\\) approximation is
    \\[
    \\frac{\\|A_k\\|_F^2}{\\|A\\|_F^2} = \\frac{\\sigma_1^2 + \\cdots + \\sigma_k^2}{\\sigma_1^2 + \\cdots + \\sigma_r^2}.
    \\]
    If this ratio is close to 1 for small \\(k\\), the matrix is "effectively low-rank."</p>
  </div>
</div>

<div class="env-block example">
  <div class="env-title">Example 17.4.4</div>
  <div class="env-body">
    <p>A \\(1000 \\times 500\\) data matrix has singular values that decay as \\(\\sigma_i \\approx 100/i\\). The top 10 singular values capture
    \\[
    \\frac{\\sum_{i=1}^{10} (100/i)^2}{\\sum_{i=1}^{500} (100/i)^2} = \\frac{\\sum_{i=1}^{10} 1/i^2}{\\sum_{i=1}^{500} 1/i^2} \\approx \\frac{1.550}{1.643} \\approx 94.3\\%
    \\]
    of the total energy. A rank-10 approximation (storing \\(10 \\times 1500 = 15000\\) numbers) captures 94% of the information in the original \\(500000\\)-entry matrix.</p>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-low-rank',
                    title: 'Low-Rank Approximation of a Matrix',
                    description: 'A 5x5 matrix is displayed as a color grid. Use the slider to keep only the top-k singular values and see how the approximation improves. The error (Frobenius norm) is shown.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 1, originX: 0, originY: 0, width: 560, height: 340 });

                        // Create a 5x5 matrix with known structure
                        const origMatrix = [
                            [4, 3, 2, 3, 4],
                            [3, 5, 3, 2, 1],
                            [2, 3, 6, 4, 3],
                            [3, 2, 4, 5, 4],
                            [4, 1, 3, 4, 7]
                        ];

                        let rank = 5;
                        VizEngine.createSlider(controls, 'rank k', 1, 5, 5, 1, v => { rank = Math.round(v); });

                        // Simple SVD for small matrix via eigendecomp of A^T A
                        // For a 5x5, we'll use a power-iteration-like approach
                        // Actually, let's just precompute the singular values and vectors numerically
                        // Using Jacobi eigenvalue algorithm for A^T A

                        function matMulGen(A, B) {
                            const m = A.length, n = B[0].length, p = B.length;
                            const C = Array.from({length: m}, () => Array(n).fill(0));
                            for (let i = 0; i < m; i++)
                                for (let j = 0; j < n; j++)
                                    for (let k = 0; k < p; k++)
                                        C[i][j] += A[i][k] * B[k][j];
                            return C;
                        }

                        function transposeGen(A) {
                            const m = A.length, n = A[0].length;
                            return Array.from({length: n}, (_, j) => Array.from({length: m}, (_, i) => A[i][j]));
                        }

                        // Precompute SVD using power iteration for each singular value
                        // (simplified for 5x5)
                        function computeSVD(A) {
                            const n = A.length;
                            const AT = transposeGen(A);
                            const ATA = matMulGen(AT, A);

                            // Jacobi eigenvalue for symmetric ATA
                            // Simple power iteration for top eigenvalues
                            const sigmas = [];
                            const us = [];
                            const vs = [];
                            let residual = A.map(r => [...r]);

                            for (let s = 0; s < n; s++) {
                                // Power iteration on residual^T * residual
                                const RT = transposeGen(residual);
                                const RTR = matMulGen(RT, residual);
                                let v = Array(n).fill(0);
                                v[0] = 1;

                                for (let iter = 0; iter < 100; iter++) {
                                    let nv = Array(n).fill(0);
                                    for (let i = 0; i < n; i++)
                                        for (let j = 0; j < n; j++)
                                            nv[i] += RTR[i][j] * v[j];
                                    let norm = Math.sqrt(nv.reduce((s, x) => s + x * x, 0));
                                    if (norm < 1e-14) break;
                                    v = nv.map(x => x / norm);
                                }

                                // sigma = ||Av||
                                let Av = Array(n).fill(0);
                                for (let i = 0; i < n; i++)
                                    for (let j = 0; j < n; j++)
                                        Av[i] += residual[i][j] * v[j];

                                let sigma = Math.sqrt(Av.reduce((s, x) => s + x * x, 0));
                                if (sigma < 1e-10) {
                                    sigmas.push(0);
                                    vs.push(v);
                                    us.push(Array(n).fill(0));
                                    continue;
                                }

                                let u = Av.map(x => x / sigma);
                                sigmas.push(sigma);
                                vs.push(v);
                                us.push(u);

                                // Deflate
                                for (let i = 0; i < n; i++)
                                    for (let j = 0; j < n; j++)
                                        residual[i][j] -= sigma * u[i] * v[j];
                            }

                            return { sigmas, us, vs };
                        }

                        const svd = computeSVD(origMatrix);

                        function reconstructRank(k) {
                            const n = 5;
                            const R = Array.from({length: n}, () => Array(n).fill(0));
                            for (let s = 0; s < k; s++) {
                                for (let i = 0; i < n; i++)
                                    for (let j = 0; j < n; j++)
                                        R[i][j] += svd.sigmas[s] * svd.us[s][i] * svd.vs[s][j];
                            }
                            return R;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const n = 5;
                            const cellW = 44, cellH = 36;
                            const gap = 40;

                            // Original matrix
                            const ox = 20, oy = 50;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Original A', ox + n * cellW / 2, oy - 15);

                            for (let i = 0; i < n; i++) {
                                for (let j = 0; j < n; j++) {
                                    const val = origMatrix[i][j];
                                    const intensity = Math.floor(255 * val / 8);
                                    ctx.fillStyle = 'rgb(' + Math.floor(intensity * 0.35) + ',' + Math.floor(intensity * 0.45) + ',' + intensity + ')';
                                    ctx.fillRect(ox + j * cellW, oy + i * cellH, cellW - 2, cellH - 2);
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = '12px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(val.toFixed(1), ox + j * cellW + cellW / 2 - 1, oy + i * cellH + cellH / 2);
                                }
                            }

                            // Approximation
                            const approx = reconstructRank(rank);
                            const ax = ox + n * cellW + gap;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Rank-' + rank + ' approx A_k', ax + n * cellW / 2, oy - 15);

                            for (let i = 0; i < n; i++) {
                                for (let j = 0; j < n; j++) {
                                    const val = approx[i][j];
                                    const intensity = Math.floor(255 * Math.max(0, Math.min(val, 8)) / 8);
                                    ctx.fillStyle = 'rgb(' + Math.floor(intensity * 0.35) + ',' + Math.floor(intensity * 0.45) + ',' + intensity + ')';
                                    ctx.fillRect(ax + j * cellW, oy + i * cellH, cellW - 2, cellH - 2);
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = '12px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(val.toFixed(1), ax + j * cellW + cellW / 2 - 1, oy + i * cellH + cellH / 2);
                                }
                            }

                            // Singular values bar chart
                            const barX = 20, barY = oy + n * cellH + 30;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Singular Values:', barX, barY - 5);

                            const maxSig = svd.sigmas[0] || 1;
                            const barW = 300 / n;
                            for (let i = 0; i < n; i++) {
                                const h = (svd.sigmas[i] / maxSig) * 50;
                                const isKept = i < rank;
                                ctx.fillStyle = isKept ? viz.colors.blue : viz.colors.muted + '44';
                                ctx.fillRect(barX + i * (barW + 5), barY + 50 - h, barW, h);
                                ctx.fillStyle = isKept ? viz.colors.blue : viz.colors.muted;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u03c3' + (i + 1) + '=' + svd.sigmas[i].toFixed(1), barX + i * (barW + 5) + barW / 2, barY + 62);
                            }

                            // Error
                            let errSq = 0;
                            let totalSq = 0;
                            for (let i = 0; i < n; i++) {
                                errSq += svd.sigmas[i] * svd.sigmas[i];
                                totalSq += svd.sigmas[i] * svd.sigmas[i];
                            }
                            let keptSq = 0;
                            for (let i = 0; i < rank; i++) keptSq += svd.sigmas[i] * svd.sigmas[i];
                            const energy = totalSq > 0 ? (keptSq / totalSq * 100) : 100;
                            const frobErr = Math.sqrt(totalSq - keptSq);

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Energy captured: ' + energy.toFixed(1) + '%   |   ||A - A_k||_F = ' + frobErr.toFixed(2), barX + 200, barY + 20);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A matrix \\(A\\) has singular values \\(10, 5, 1, 0.1\\). What is the Frobenius norm error of the best rank-2 approximation?',
                    hint: '\\(\\|A - A_2\\|_F = \\sqrt{\\sigma_3^2 + \\sigma_4^2}\\).',
                    solution: '\\(\\|A - A_2\\|_F = \\sqrt{1^2 + 0.1^2} = \\sqrt{1.01} \\approx 1.005\\). The spectral norm error is \\(\\|A - A_2\\|_2 = \\sigma_3 = 1\\). The rank-2 approximation captures \\((100 + 25)/(100 + 25 + 1 + 0.01) \\times 100 \\approx 99.2\\%\\) of the energy.'
                },
                {
                    question: 'Prove that the best rank-1 approximation to \\(A\\) is \\(\\sigma_1 u_1 v_1^T\\).',
                    hint: 'This is the special case \\(k = 1\\) of the Eckart-Young theorem.',
                    solution: 'By Eckart-Young, \\(A_1 = \\sigma_1 u_1 v_1^T\\) minimizes \\(\\|A - B\\|\\) over all rank-1 matrices \\(B\\) in both spectral and Frobenius norms. Error: \\(\\|A - A_1\\|_2 = \\sigma_2\\) and \\(\\|A - A_1\\|_F = \\sqrt{\\sigma_2^2 + \\cdots + \\sigma_r^2}\\).'
                },
                {
                    question: 'How many numbers must be stored for the rank-\\(k\\) truncated SVD of an \\(m \\times n\\) matrix? Compare with the full matrix.',
                    hint: 'You need the \\(k\\) singular values, \\(k\\) columns of \\(U\\) (each length \\(m\\)), and \\(k\\) columns of \\(V\\) (each length \\(n\\)).',
                    solution: 'Storage: \\(k + km + kn = k(1 + m + n)\\) numbers. Full matrix: \\(mn\\) numbers. The SVD is cheaper when \\(k(m + n + 1) < mn\\), i.e., \\(k < \\frac{mn}{m + n + 1} \\approx \\frac{mn}{m+n}\\). For a \\(1000 \\times 1000\\) matrix, this means \\(k < 500\\).'
                },
                {
                    question: 'Show that if \\(A\\) has rank \\(r\\), the rank-\\(r\\) truncated SVD recovers \\(A\\) exactly (zero error).',
                    hint: 'The truncated SVD with \\(k = r\\) keeps all nonzero singular values.',
                    solution: 'When \\(k = r\\), \\(A_r = \\sum_{i=1}^r \\sigma_i u_i v_i^T = A\\) since all terms with \\(\\sigma_i = 0\\) (for \\(i > r\\)) contribute nothing. Error: \\(\\|A - A_r\\|_F = \\sqrt{\\sigma_{r+1}^2 + \\cdots} = 0\\).'
                },
                {
                    question: 'A \\(100 \\times 50\\) matrix has \\(\\sigma_1 = 20, \\sigma_2 = 15, \\sigma_3 = 2, \\sigma_4 = 1\\), and all other singular values less than \\(0.5\\). What rank should you choose to capture at least 99% of the energy?',
                    hint: 'Compute \\(\\frac{\\sigma_1^2 + \\cdots + \\sigma_k^2}{\\sum \\sigma_i^2}\\) for increasing \\(k\\). The denominator is at most \\(400 + 225 + 4 + 1 + 46 \\times 0.25 = 641.5\\).',
                    solution: 'Total energy \\(\\le 400 + 225 + 4 + 1 + 46 \\times 0.25 = 641.5\\). With \\(k=2\\): energy \\(= 625/641.5 \\approx 97.4\\%\\). With \\(k=3\\): \\(629/641.5 \\approx 98.1\\%\\). With \\(k=4\\): \\(630/641.5 \\approx 98.2\\%\\). We need more, but the remaining 46 singular values contribute at most 11.5 total. Actually, \\(k=2\\) gives 97.4% and \\(k=3\\) or \\(k=4\\) may not reach 99% depending on exact values. A safe choice is \\(k \\approx 4\\) or so, giving storage of \\(4 \\times 151 = 604\\) vs. \\(5000\\). For a precise answer, we would need exact singular values; the key insight is that the first two capture the vast majority.'
                }
            ]
        },

        // ========== SECTION 5: Applications ==========
        {
            id: 'sec05-applications',
            title: 'Applications',
            content: `
<h2>17.5 Applications: PCA, Image Compression, and the Pseudoinverse</h2>

<p>The SVD is not merely a theoretical factorization; it is the computational backbone of numerous algorithms across science, engineering, and data analysis. In this section we explore three central applications.</p>

<h3>Principal Component Analysis (PCA)</h3>

<div class="env-block definition">
  <div class="env-title">Definition 17.5.1 (PCA via SVD)</div>
  <div class="env-body">
    <p>Given a centered data matrix \\(X \\in \\mathbb{R}^{n \\times p}\\) (\\(n\\) observations, \\(p\\) variables, each column mean-centered), the <em>principal components</em> are the right singular vectors \\(v_1, v_2, \\ldots\\) of \\(X\\). The \\(k\\)-th <em>principal component score</em> vector is the \\(k\\)-th column of \\(XV_k = U_k \\Sigma_k\\).</p>
  </div>
</div>

<div class="env-block proposition">
  <div class="env-title">Proposition 17.5.2 (PCA Optimality)</div>
  <div class="env-body">
    <p>The first \\(k\\) principal components solve two equivalent optimization problems:</p>
    <ol>
      <li><strong>Maximum variance:</strong> Find the \\(k\\)-dimensional subspace that maximizes the variance of the projected data.</li>
      <li><strong>Minimum reconstruction error:</strong> Find the \\(k\\)-dimensional subspace that minimizes \\(\\sum_i \\|x_i - \\hat{x}_i\\|^2\\), where \\(\\hat{x}_i\\) is the projection of \\(x_i\\) onto the subspace.</li>
    </ol>
    <p>Both are solved by \\(\\operatorname{span}(v_1, \\ldots, v_k)\\), which is exactly the truncated SVD.</p>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof Sketch</div>
  <div class="env-body">
    <p>The sample covariance matrix is \\(\\frac{1}{n-1}X^TX\\). Its eigenvectors are the right singular vectors \\(v_i\\), and its eigenvalues are \\(\\sigma_i^2/(n-1)\\). The total variance projected onto \\(v_k\\) is \\(\\sigma_k^2/(n-1)\\). Maximum variance in \\(k\\) dimensions = pick the \\(k\\) largest \\(\\sigma_i^2\\). By Eckart-Young, this also minimizes reconstruction error.</p>
    <div class="qed">∎</div>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark</div>
  <div class="env-body">
    <p>PCA via the SVD is numerically superior to computing eigenvalues of \\(X^TX\\), because forming \\(X^TX\\) squares the condition number. In practice, one always computes PCA via the SVD of \\(X\\) directly.</p>
  </div>
</div>

<h3>Image Compression</h3>

<p>A grayscale image is a matrix of pixel intensities. The SVD provides a natural compression: store only the top \\(k\\) singular values and vectors, recovering an approximate image that uses far less storage.</p>

<div class="env-block example">
  <div class="env-title">Example 17.5.3</div>
  <div class="env-body">
    <p>A \\(512 \\times 512\\) grayscale image requires \\(262{,}144\\) numbers. Its rank-20 SVD approximation requires \\(20 \\times (512 + 512 + 1) = 20{,}500\\) numbers, a compression ratio of about \\(13:1\\). If the singular values decay rapidly (as they do for natural images with smooth regions), the visual quality remains excellent.</p>
  </div>
</div>

<div class="viz-placeholder" data-viz="viz-image-compression"></div>

<h3>The Moore-Penrose Pseudoinverse</h3>

<p>The SVD provides a clean definition and computation of the pseudoinverse, which generalizes the matrix inverse to non-square and singular matrices.</p>

<div class="env-block definition">
  <div class="env-title">Definition 17.5.4 (Pseudoinverse)</div>
  <div class="env-body">
    <p>If \\(A = U\\Sigma V^T\\) with \\(\\Sigma = \\operatorname{diag}(\\sigma_1, \\ldots, \\sigma_r, 0, \\ldots, 0)\\), the <em>Moore-Penrose pseudoinverse</em> is
    \\[
    A^+ = V \\Sigma^+ U^T,
    \\]
    where \\(\\Sigma^+ = \\operatorname{diag}(1/\\sigma_1, \\ldots, 1/\\sigma_r, 0, \\ldots, 0)^T\\) (an \\(n \\times m\\) matrix).</p>
  </div>
</div>

<div class="env-block theorem">
  <div class="env-title">Theorem 17.5.5 (Properties of the Pseudoinverse)</div>
  <div class="env-body">
    <p>The pseudoinverse \\(A^+\\) is the unique matrix satisfying the four <em>Moore-Penrose conditions</em>:</p>
    <ol>
      <li>\\(AA^+A = A\\)</li>
      <li>\\(A^+AA^+ = A^+\\)</li>
      <li>\\((AA^+)^T = AA^+\\) (i.e., \\(AA^+\\) is symmetric)</li>
      <li>\\((A^+A)^T = A^+A\\) (i.e., \\(A^+A\\) is symmetric)</li>
    </ol>
  </div>
</div>

<div class="env-block proof">
  <div class="env-title">Proof</div>
  <div class="env-body">
    <p>Using the SVD: \\(AA^+ = U\\Sigma V^T V\\Sigma^+ U^T = U\\Sigma\\Sigma^+U^T = U \\operatorname{diag}(1,\\ldots,1,0,\\ldots,0) U^T\\), which is the orthogonal projector onto \\(\\operatorname{col}(A)\\). This is manifestly symmetric. Similarly, \\(A^+A = V\\operatorname{diag}(1,\\ldots,1,0,\\ldots,0) V^T\\) is the projector onto \\(\\operatorname{row}(A)\\), also symmetric. Conditions (1) and (2) follow from \\(\\Sigma\\Sigma^+\\Sigma = \\Sigma\\) and \\(\\Sigma^+\\Sigma\\Sigma^+ = \\Sigma^+\\).</p>
    <div class="qed">∎</div>
  </div>
</div>

<h3>Least Squares via the Pseudoinverse</h3>

<div class="env-block corollary">
  <div class="env-title">Corollary 17.5.6</div>
  <div class="env-body">
    <p>The least-squares solution to \\(Ax \\approx b\\) (minimizing \\(\\|Ax - b\\|_2\\)) with minimum norm is
    \\[
    x^* = A^+ b = \\sum_{i=1}^r \\frac{u_i^T b}{\\sigma_i} v_i.
    \\]
    This generalizes the formula from Chapter 15: when \\(A\\) has full column rank, \\(A^+ = (A^TA)^{-1}A^T\\).</p>
  </div>
</div>

<div class="env-block remark">
  <div class="env-title">Remark (Regularization)</div>
  <div class="env-body">
    <p>When small singular values are present, the pseudoinverse amplifies noise (dividing by small \\(\\sigma_i\\)). <em>Tikhonov regularization</em> (ridge regression) replaces \\(1/\\sigma_i\\) with \\(\\sigma_i/(\\sigma_i^2 + \\alpha)\\), effectively damping the contribution of small singular values. This is equivalent to the <em>truncated SVD</em> with soft thresholding.</p>
  </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-image-compression',
                    title: 'Image Compression with SVD',
                    description: 'A simple 16x16 pixel pattern is compressed by keeping only the top-k singular values. Watch the image quality improve as k increases. The percentage shows energy captured.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 1, originX: 0, originY: 0, width: 560, height: 320 });

                        // Create a 16x16 pattern with structure
                        const N = 16;
                        const image = [];
                        for (let i = 0; i < N; i++) {
                            image[i] = [];
                            for (let j = 0; j < N; j++) {
                                // Create a pattern: gradient + block + diagonal
                                let val = (i + j) / (2 * N); // gradient
                                if (i >= 4 && i < 12 && j >= 4 && j < 12) val += 0.3; // center block
                                if (Math.abs(i - j) <= 1) val += 0.2; // diagonal
                                if (i >= 2 && i < 6 && j >= 10 && j < 14) val += 0.25; // small block
                                image[i][j] = Math.min(1, val);
                            }
                        }

                        let rank = N;
                        VizEngine.createSlider(controls, 'rank k', 1, N, N, 1, v => { rank = Math.round(v); });

                        // Simple SVD via power iteration
                        function svdImage(A) {
                            const n = A.length;
                            const sigmas = [], us = [], vs = [];
                            let R = A.map(r => [...r]);

                            for (let s = 0; s < n; s++) {
                                // Compute R^T R
                                let v = Array(n).fill(0);
                                v[s % n] = 1;

                                for (let iter = 0; iter < 200; iter++) {
                                    // multiply R^T * R * v
                                    let Rv = Array(n).fill(0);
                                    for (let i = 0; i < n; i++)
                                        for (let j = 0; j < n; j++)
                                            Rv[i] += R[i][j] * v[j];

                                    let RTRv = Array(n).fill(0);
                                    for (let i = 0; i < n; i++)
                                        for (let j = 0; j < n; j++)
                                            RTRv[i] += R[j][i] * Rv[j];

                                    let norm = Math.sqrt(RTRv.reduce((s, x) => s + x * x, 0));
                                    if (norm < 1e-14) { v = RTRv; break; }
                                    v = RTRv.map(x => x / norm);
                                }

                                let Rv = Array(n).fill(0);
                                for (let i = 0; i < n; i++)
                                    for (let j = 0; j < n; j++)
                                        Rv[i] += R[i][j] * v[j];

                                let sigma = Math.sqrt(Rv.reduce((s, x) => s + x * x, 0));
                                if (sigma < 1e-12) { sigmas.push(0); us.push(Array(n).fill(0)); vs.push(v); continue; }

                                let u = Rv.map(x => x / sigma);
                                sigmas.push(sigma);
                                us.push(u);
                                vs.push(v);

                                for (let i = 0; i < n; i++)
                                    for (let j = 0; j < n; j++)
                                        R[i][j] -= sigma * u[i] * v[j];
                            }
                            return { sigmas, us, vs };
                        }

                        const svd = svdImage(image);

                        function reconstruct(k) {
                            const R = Array.from({length: N}, () => Array(N).fill(0));
                            for (let s = 0; s < k; s++) {
                                for (let i = 0; i < N; i++)
                                    for (let j = 0; j < N; j++)
                                        R[i][j] += svd.sigmas[s] * svd.us[s][i] * svd.vs[s][j];
                            }
                            return R;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const cellSize = 14;
                            const gap = 60;

                            // Original
                            const ox = 30, oy = 45;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Original (rank ' + N + ')', ox + N * cellSize / 2, oy - 8);

                            for (let i = 0; i < N; i++) {
                                for (let j = 0; j < N; j++) {
                                    const v = Math.max(0, Math.min(1, image[i][j]));
                                    const g = Math.floor(v * 255);
                                    ctx.fillStyle = 'rgb(' + g + ',' + g + ',' + g + ')';
                                    ctx.fillRect(ox + j * cellSize, oy + i * cellSize, cellSize - 1, cellSize - 1);
                                }
                            }

                            // Compressed
                            const approx = reconstruct(rank);
                            const cx = ox + N * cellSize + gap;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Rank-' + rank + ' approx', cx + N * cellSize / 2, oy - 8);

                            for (let i = 0; i < N; i++) {
                                for (let j = 0; j < N; j++) {
                                    const v = Math.max(0, Math.min(1, approx[i][j]));
                                    const g = Math.floor(v * 255);
                                    ctx.fillStyle = 'rgb(' + g + ',' + g + ',' + g + ')';
                                    ctx.fillRect(cx + j * cellSize, oy + i * cellSize, cellSize - 1, cellSize - 1);
                                }
                            }

                            // Singular value bars
                            const barX = 30, barY = oy + N * cellSize + 25;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Singular values:', barX, barY - 5);

                            const maxS = svd.sigmas[0] || 1;
                            const barW = Math.min(25, (viz.width - 80) / N);
                            for (let i = 0; i < N; i++) {
                                const h = (svd.sigmas[i] / maxS) * 40;
                                const kept = i < rank;
                                ctx.fillStyle = kept ? viz.colors.blue : viz.colors.muted + '33';
                                ctx.fillRect(barX + i * (barW + 2), barY + 40 - h, barW, h);
                            }

                            // Stats
                            let totalSq = 0, keptSq = 0;
                            for (let i = 0; i < N; i++) totalSq += svd.sigmas[i] * svd.sigmas[i];
                            for (let i = 0; i < rank; i++) keptSq += svd.sigmas[i] * svd.sigmas[i];
                            const energy = totalSq > 0 ? (keptSq / totalSq * 100) : 100;
                            const storage = rank * (1 + N + N);
                            const original = N * N;
                            const ratio = original / storage;

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Energy: ' + energy.toFixed(1) + '%  |  Storage: ' + storage + ' / ' + original + ' (' + ratio.toFixed(1) + 'x compression)', barX, barY + 55);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Explain in one sentence why PCA and the truncated SVD solve the same problem.',
                    hint: 'Think about what PCA optimizes (variance / reconstruction error) and what the Eckart-Young theorem guarantees.',
                    solution: 'PCA seeks the k-dimensional subspace maximizing projected variance (or equivalently minimizing reconstruction error), and the Eckart-Young theorem shows the truncated SVD provides exactly this optimal subspace, since the principal components are the right singular vectors of the centered data matrix.'
                },
                {
                    question: 'Compute the pseudoinverse of \\(A = \\begin{pmatrix}1 & 0\\\\0 & 0\\\\0 & 1\\end{pmatrix}\\).',
                    hint: '\\(A^TA = I_2\\), so \\(A\\) has orthonormal columns. What is \\(A^+\\) when \\(A\\) has full column rank?',
                    solution: 'Since \\(A\\) has orthonormal columns (\\(A^TA = I_2\\)), \\(A^+ = (A^TA)^{-1}A^T = A^T = \\begin{pmatrix}1&0&0\\\\0&0&1\\end{pmatrix}\\). Alternatively: singular values are \\(\\sigma_1 = \\sigma_2 = 1\\), so \\(\\Sigma^+ = \\begin{pmatrix}1&0&0\\\\0&1&0\\end{pmatrix}\\), and \\(A^+ = V\\Sigma^+U^T = A^T\\).'
                },
                {
                    question: 'Show that \\(AA^+\\) is the orthogonal projection onto \\(\\operatorname{col}(A)\\) and \\(A^+A\\) is the orthogonal projection onto \\(\\operatorname{row}(A)\\).',
                    hint: 'Use the SVD to compute these products and show they equal \\(U_rU_r^T\\) and \\(V_rV_r^T\\).',
                    solution: '\\(AA^+ = U\\Sigma V^T V\\Sigma^+ U^T = U\\Sigma\\Sigma^+U^T\\). Since \\(\\Sigma\\Sigma^+ = \\operatorname{diag}(1,\\ldots,1,0,\\ldots,0)\\) (\\(r\\) ones), \\(AA^+ = U_r U_r^T\\), the projector onto \\(\\operatorname{span}(u_1,\\ldots,u_r) = \\operatorname{col}(A)\\). Similarly \\(A^+A = V_r V_r^T\\), projecting onto \\(\\operatorname{row}(A)\\).'
                },
                {
                    question: 'If \\(A\\) is invertible, show that \\(A^+ = A^{-1}\\).',
                    hint: 'When \\(A\\) is invertible, all singular values are nonzero.',
                    solution: 'If \\(A = U\\Sigma V^T\\) with all \\(\\sigma_i > 0\\), then \\(A^+ = V\\Sigma^{-1}U^T\\) (since \\(\\Sigma^+ = \\Sigma^{-1}\\) when all entries are nonzero). But \\(A^{-1} = (U\\Sigma V^T)^{-1} = V\\Sigma^{-1}U^T = A^+\\).'
                },
                {
                    question: 'A data matrix \\(X \\in \\mathbb{R}^{100 \\times 10}\\) is centered. Its SVD gives singular values \\(\\sigma_1 = 30, \\sigma_2 = 20, \\sigma_3 = 5\\), and \\(\\sigma_i < 1\\) for \\(i \\ge 4\\). How many principal components would you retain, and what fraction of variance do they explain?',
                    hint: 'Variance explained by component \\(i\\) is proportional to \\(\\sigma_i^2\\). The total is \\(\\sum \\sigma_i^2\\).',
                    solution: 'The first three components explain \\(\\frac{900 + 400 + 25}{900 + 400 + 25 + 7 \\times 1} \\ge \\frac{1325}{1332} \\approx 99.5\\%\\) of the variance (overestimating the remaining \\(\\sigma_i \\le 1\\)). Even two components capture \\(\\frac{1300}{1332} \\approx 97.6\\%\\). A reasonable choice is \\(k = 2\\) or \\(k = 3\\). The "elbow" is at \\(k = 3\\) where \\(\\sigma_3 = 5\\) drops to \\(\\sigma_4 < 1\\).'
                },
                {
                    question: 'Prove that \\(\\|A^+\\|_2 = 1/\\sigma_r\\) where \\(\\sigma_r\\) is the smallest nonzero singular value of \\(A\\).',
                    hint: 'The singular values of \\(A^+\\) are \\(1/\\sigma_r, 1/\\sigma_{r-1}, \\ldots, 1/\\sigma_1, 0, \\ldots, 0\\).',
                    solution: 'The SVD of \\(A^+\\) is \\(A^+ = V\\Sigma^+U^T\\). The nonzero diagonal entries of \\(\\Sigma^+\\) are \\(1/\\sigma_1, \\ldots, 1/\\sigma_r\\). Since \\(\\sigma_1 \\ge \\cdots \\ge \\sigma_r > 0\\), the singular values of \\(A^+\\) in decreasing order are \\(1/\\sigma_r \\ge \\cdots \\ge 1/\\sigma_1\\). Thus \\(\\|A^+\\|_2 = 1/\\sigma_r\\).'
                }
            ]
        }
    ]
});
