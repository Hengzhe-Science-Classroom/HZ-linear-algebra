// === Chapter 11: Diagonalization ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch11',
    number: 11,
    title: 'Diagonalization',
    subtitle: 'When a matrix is just scaling in the right coordinate system',
    sections: [
        // ========== SECTION 1: The Diagonalization Problem ==========
        {
            id: 'sec11-1-diagonalization-problem',
            title: 'The Diagonalization Problem',
            content: `
<h2>11.1 The Diagonalization Problem</h2>

<div class="env-block intuition"><div class="env-title">Intuition — The Core Idea</div><div class="env-body">
Diagonal matrices are the simplest matrices to work with: multiplying, raising to powers, and computing determinants are all trivial. The question of diagonalization asks: given a matrix \\(A\\), can we find a coordinate system in which \\(A\\) acts as a diagonal matrix? If yes, all computations with \\(A\\) reduce to computations with a diagonal matrix.
</div></div>

<div class="env-block definition"><div class="env-title">Definition 11.1.1 — Diagonalizable Matrix</div><div class="env-body">
An \\(n \\times n\\) matrix \\(A\\) is <em>diagonalizable</em> if there exists an invertible matrix \\(P\\) and a diagonal matrix \\(D\\) such that
\\[
A = PDP^{-1},
\\]
or equivalently, \\(P^{-1}AP = D\\).
</div></div>

<h3>What Are \\(P\\) and \\(D\\)?</h3>

<p>The factorization \\(A = PDP^{-1}\\) has a concrete meaning. If we write \\(P = \\begin{pmatrix} \\mathbf{v}_1 & \\mathbf{v}_2 & \\cdots & \\mathbf{v}_n \\end{pmatrix}\\) and \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then the equation \\(AP = PD\\) expands to:</p>
\\[
A\\begin{pmatrix} \\mathbf{v}_1 & \\cdots & \\mathbf{v}_n \\end{pmatrix} = \\begin{pmatrix} \\mathbf{v}_1 & \\cdots & \\mathbf{v}_n \\end{pmatrix}\\begin{pmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{pmatrix}.
\\]
<p>Comparing columns: \\(A\\mathbf{v}_i = \\lambda_i \\mathbf{v}_i\\) for each \\(i\\). So the columns of \\(P\\) are eigenvectors, and the diagonal entries of \\(D\\) are the corresponding eigenvalues.</p>

<div class="env-block theorem"><div class="env-title">Theorem 11.1.2 — Structure of Diagonalization</div><div class="env-body">
An \\(n \\times n\\) matrix \\(A\\) is diagonalizable if and only if \\(A\\) has \\(n\\) linearly independent eigenvectors. In that case:
<ul>
<li>\\(P\\) is the matrix whose columns are \\(n\\) linearly independent eigenvectors of \\(A\\);</li>
<li>\\(D\\) is the diagonal matrix of the corresponding eigenvalues, in the same order.</li>
</ul>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
(\\(\\Rightarrow\\)) If \\(A = PDP^{-1}\\), then \\(AP = PD\\). Column \\(i\\) gives \\(A\\mathbf{v}_i = \\lambda_i \\mathbf{v}_i\\). Since \\(P\\) is invertible, its columns \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\) are linearly independent. Each \\(\\mathbf{v}_i \\neq \\mathbf{0}\\) (being a column of an invertible matrix), so they are eigenvectors.

(\\(\\Leftarrow\\)) If \\(A\\) has \\(n\\) linearly independent eigenvectors \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\) with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\), form \\(P = (\\mathbf{v}_1 \\cdots \\mathbf{v}_n)\\). Then \\(P\\) is invertible (columns are linearly independent) and \\(AP = PD\\) where \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\). Multiplying by \\(P^{-1}\\) on the right: \\(A = PDP^{-1}\\).
<div class="qed">∎</div>
</div></div>

<div class="viz-placeholder" data-viz="viz-diagonalization"></div>

<div class="env-block example"><div class="env-title">Example 11.1.3 — Diagonalizing a 2\\(\\times\\)2 Matrix</div><div class="env-body">
Diagonalize \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\).

From Chapter 10, the eigenvalues are \\(\\lambda_1 = 2, \\lambda_2 = 3\\) with eigenvectors \\(\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, \\mathbf{v}_2 = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\).

Set \\(P = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\).

Verification: \\(P^{-1} = \\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix}\\), and
\\[
PDP^{-1} = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} = A. \\;\\checkmark
\\]
</div></div>

<div class="env-block remark"><div class="env-title">Remark — The Coordinate-Change Perspective</div><div class="env-body">
The equation \\(A = PDP^{-1}\\) says: to apply \\(A\\) to a vector \\(\\mathbf{x}\\), we can instead (1) change to the eigenvector coordinate system via \\(P^{-1}\\mathbf{x}\\), (2) scale each coordinate by the corresponding eigenvalue via \\(D\\), and (3) change back via \\(P\\). In the eigenvector basis, the linear transformation is just scaling along each axis.
</div></div>
`,
            visualizations: [
                {
                    id: 'viz-diagonalization',
                    title: 'Diagonalization Visualizer: \\(A = PDP^{-1}\\)',
                    description: 'Watch the three-step process: (1) \\(P^{-1}\\) transforms to the eigenvector coordinate system, (2) \\(D\\) scales along eigenaxes, (3) \\(P\\) transforms back. Drag the input vector to see each step.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });
                        let phase = 0; // 0: standard, 1: P^{-1} applied, 2: D applied, 3: P applied (=Ax)

                        const probe = viz.addDraggable('probe', 2, 1, viz.colors.blue, 8, () => draw());

                        // Matrix A = [[4,-2],[1,1]], eigenvalues 2,3, eigenvectors (1,1),(2,1)
                        const A = [[4, -2], [1, 1]];
                        const P = [[1, 2], [1, 1]];
                        const Pinv = [[-1, 2], [1, -1]];
                        const D = [[2, 0], [0, 3]];

                        VizEngine.createButton(controls, 'Standard basis', () => { phase = 0; draw(); });
                        VizEngine.createButton(controls, 'Step 1: P\u207B\u00B9x', () => { phase = 1; draw(); });
                        VizEngine.createButton(controls, 'Step 2: D(P\u207B\u00B9x)', () => { phase = 2; draw(); });
                        VizEngine.createButton(controls, 'Step 3: PD(P\u207B\u00B9x) = Ax', () => { phase = 3; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const x = [probe.x, probe.y];
                            const Pinvx = VizEngine.matVec(Pinv, x);
                            const DPinvx = VizEngine.matVec(D, Pinvx);
                            const Ax = VizEngine.matVec(A, x);

                            // Draw eigenvector directions
                            viz.drawLine(0, 0, 1, 1, viz.colors.green + '33', 1);
                            viz.drawLine(0, 0, 2, 1, viz.colors.purple + '33', 1);

                            // Labels for eigenvectors
                            viz.drawText('v\u2081', 3.5, 3.5, viz.colors.green + '66', 12);
                            viz.drawText('v\u2082', 4.5, 2.3, viz.colors.purple + '66', 12);

                            if (phase === 0) {
                                viz.drawVec(x[0], x[1], viz.colors.blue, 'x', 2.5);
                                viz.drawVec(Ax[0], Ax[1], viz.colors.orange, 'Ax', 2.5);
                                viz.screenText('Phase 0: Original. x (blue) and Ax (orange)', 14, viz.height - 16, viz.colors.text, 12, 'left');
                            } else if (phase === 1) {
                                viz.drawVec(x[0], x[1], viz.colors.blue + '44', 'x', 1.5);
                                viz.drawVec(Pinvx[0], Pinvx[1], viz.colors.teal, 'P\u207B\u00B9x', 2.5);
                                viz.screenText('Phase 1: Change to eigenvector coordinates', 14, viz.height - 16, viz.colors.text, 12, 'left');
                                viz.screenText('P\u207B\u00B9x = (' + Pinvx[0].toFixed(2) + ', ' + Pinvx[1].toFixed(2) + ')', 14, viz.height - 34, viz.colors.teal, 12, 'left');
                            } else if (phase === 2) {
                                viz.drawVec(Pinvx[0], Pinvx[1], viz.colors.teal + '44', 'P\u207B\u00B9x', 1.5);
                                viz.drawVec(DPinvx[0], DPinvx[1], viz.colors.yellow, 'DP\u207B\u00B9x', 2.5);
                                viz.screenText('Phase 2: Scale by eigenvalues (\u03BB\u2081=2, \u03BB\u2082=3)', 14, viz.height - 16, viz.colors.text, 12, 'left');
                                viz.screenText('DP\u207B\u00B9x = (' + DPinvx[0].toFixed(2) + ', ' + DPinvx[1].toFixed(2) + ')', 14, viz.height - 34, viz.colors.yellow, 12, 'left');
                            } else {
                                viz.drawVec(x[0], x[1], viz.colors.blue + '44', 'x', 1.5);
                                viz.drawVec(Ax[0], Ax[1], viz.colors.orange, 'Ax = PDP\u207B\u00B9x', 2.5);
                                viz.screenText('Phase 3: Transform back. Ax = PDP\u207B\u00B9x', 14, viz.height - 16, viz.colors.text, 12, 'left');
                                viz.screenText('Ax = (' + Ax[0].toFixed(2) + ', ' + Ax[1].toFixed(2) + ')', 14, viz.height - 34, viz.colors.orange, 12, 'left');
                            }

                            // Matrix info
                            viz.drawMatrix(A, viz.width - 130, 10, viz.colors.white, 44, 22, 12);
                            viz.screenText('A =', viz.width - 145, 28, viz.colors.white, 12, 'right');

                            viz.drawDraggables();
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Diagonalize \\(A = \\begin{pmatrix} 5 & -4 \\\\ 2 & -1 \\end{pmatrix}\\).',
                    hint: 'From Chapter 10, the eigenvalues are \\(\\lambda_1 = 1, \\lambda_2 = 3\\). Find eigenvectors and form \\(P\\).',
                    solution: 'For \\(\\lambda_1 = 1\\): \\(A - I = \\begin{pmatrix} 4 & -4 \\\\ 2 & -2 \\end{pmatrix}\\), eigenvector \\(\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). For \\(\\lambda_2 = 3\\): \\(A - 3I = \\begin{pmatrix} 2 & -4 \\\\ 2 & -4 \\end{pmatrix}\\), eigenvector \\(\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\). So \\(P = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}\\).'
                },
                {
                    question: 'Is the matrix \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\) diagonalizable? Explain.',
                    hint: 'Find the eigenvalues and check if there are 2 linearly independent eigenvectors.',
                    solution: 'The characteristic polynomial is \\((2 - \\lambda)^2\\), so the only eigenvalue is \\(\\lambda = 2\\). \\(A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\) has rank 1, so the eigenspace is one-dimensional. We need 2 independent eigenvectors but only have 1. Therefore \\(A\\) is not diagonalizable.'
                },
                {
                    question: 'If \\(A = PDP^{-1}\\), express \\(A^{-1}\\) in terms of \\(P\\) and \\(D\\) (assuming \\(A\\) is invertible).',
                    hint: 'What is the inverse of a product of matrices?',
                    solution: '\\(A^{-1} = (PDP^{-1})^{-1} = (P^{-1})^{-1}D^{-1}P^{-1} = PD^{-1}P^{-1}\\). Since \\(D\\) is diagonal with entries \\(\\lambda_i\\), \\(D^{-1} = \\operatorname{diag}(1/\\lambda_1, \\ldots, 1/\\lambda_n)\\). This works because invertibility of \\(A\\) means all \\(\\lambda_i \\neq 0\\).'
                },
                {
                    question: 'Show that if \\(A\\) is diagonalizable and all eigenvalues satisfy \\(|\\lambda_i| < 1\\), then \\(A^k \\to O\\) as \\(k \\to \\infty\\).',
                    hint: 'Use \\(A^k = PD^kP^{-1}\\) and consider what happens to \\(D^k\\).',
                    solution: '\\(A^k = PD^kP^{-1}\\). Since \\(D^k = \\operatorname{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)\\) and \\(|\\lambda_i| < 1\\) for all \\(i\\), we have \\(\\lambda_i^k \\to 0\\) as \\(k \\to \\infty\\). So \\(D^k \\to O\\), hence \\(A^k = PD^kP^{-1} \\to POP^{-1} = O\\).'
                },
                {
                    question: 'True or False: If \\(A\\) and \\(B\\) are both diagonalizable \\(n \\times n\\) matrices with the same eigenvalues (including multiplicities), then \\(A\\) and \\(B\\) are similar.',
                    hint: 'Consider \\(A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\). Wait, is \\(B\\) diagonalizable?',
                    solution: 'True. If \\(A = P_1 D P_1^{-1}\\) and \\(B = P_2 D P_2^{-1}\\) (same \\(D\\) since same eigenvalues), then \\(B = (P_2 P_1^{-1}) A (P_2 P_1^{-1})^{-1}\\), so \\(A\\) and \\(B\\) are similar. (Note: this works because both are diagonalizable. Two non-diagonalizable matrices with the same eigenvalues need not be similar.)'
                }
            ]
        },

        // ========== SECTION 2: The Diagonalization Theorem ==========
        {
            id: 'sec11-2-diagonalization-theorem',
            title: 'The Diagonalization Theorem',
            content: `
<h2>11.2 The Diagonalization Theorem</h2>

<p>When is a matrix guaranteed to be diagonalizable? We now state the complete answer, building on the concepts of algebraic and geometric multiplicity from Chapter 10.</p>

<div class="env-block theorem"><div class="env-title">Theorem 11.2.1 — The Diagonalization Theorem</div><div class="env-body">
An \\(n \\times n\\) matrix \\(A\\) is diagonalizable if and only if the following two conditions both hold:
<ol>
<li>The characteristic polynomial factors completely over \\(\\mathbb{R}\\) (i.e., all eigenvalues are real), so that
\\[
\\sum_{i=1}^k \\operatorname{am}(\\lambda_i) = n.
\\]</li>
<li>For each eigenvalue \\(\\lambda_i\\), the geometric multiplicity equals the algebraic multiplicity:
\\[
\\operatorname{gm}(\\lambda_i) = \\operatorname{am}(\\lambda_i) \\quad \\text{for all } i.
\\]</li>
</ol>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
(\\(\\Rightarrow\\)) If \\(A\\) is diagonalizable, then \\(A = PDP^{-1}\\) where \\(D\\) has the eigenvalues on the diagonal, giving \\(n\\) eigenvalues (counted with multiplicity) that are all real. The \\(n\\) columns of \\(P\\) are linearly independent eigenvectors. Grouping by eigenvalue: the eigenvectors for \\(\\lambda_i\\) must span a space of dimension \\(\\operatorname{am}(\\lambda_i)\\), so \\(\\operatorname{gm}(\\lambda_i) \\ge \\operatorname{am}(\\lambda_i)\\). Combined with the inequality \\(\\operatorname{gm} \\le \\operatorname{am}\\), we get equality.

(\\(\\Leftarrow\\)) If both conditions hold, then for each eigenvalue \\(\\lambda_i\\) we can find \\(\\operatorname{am}(\\lambda_i)\\) linearly independent eigenvectors. Since eigenvectors for distinct eigenvalues are automatically independent (Theorem 10.3.4 generalized), the total number of independent eigenvectors is \\(\\sum \\operatorname{am}(\\lambda_i) = n\\). So \\(A\\) has \\(n\\) linearly independent eigenvectors and is diagonalizable.
<div class="qed">∎</div>
</div></div>

<div class="env-block corollary"><div class="env-title">Corollary 11.2.2 — Distinct Eigenvalues Suffice</div><div class="env-body">
If an \\(n \\times n\\) matrix has \\(n\\) distinct real eigenvalues, then it is diagonalizable.
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
Each eigenvalue has algebraic multiplicity 1. By the multiplicity inequality, \\(1 \\le \\operatorname{gm}(\\lambda_i) \\le 1\\), so \\(\\operatorname{gm}(\\lambda_i) = 1\\) for all \\(i\\). Both conditions of the theorem are satisfied.
<div class="qed">∎</div>
</div></div>

<div class="env-block warning"><div class="env-title">Warning</div><div class="env-body">
The converse of Corollary 11.2.2 is false: a matrix can be diagonalizable even with repeated eigenvalues. For instance, \\(I_n\\) has the single eigenvalue \\(\\lambda = 1\\) with algebraic multiplicity \\(n\\), but it is diagonalizable (it is already diagonal!).
</div></div>

<h3>The Diagonalization Procedure</h3>

<p>Given an \\(n \\times n\\) matrix \\(A\\):</p>
<ol>
<li>Compute the characteristic polynomial \\(p(\\lambda) = \\det(A - \\lambda I)\\) and find all roots \\(\\lambda_1, \\ldots, \\lambda_k\\).</li>
<li>For each \\(\\lambda_i\\), find a basis \\(\\mathcal{B}_i\\) for the eigenspace \\(E_{\\lambda_i} = \\operatorname{Nul}(A - \\lambda_i I)\\).</li>
<li>Check: if \\(|\\mathcal{B}_i| = \\operatorname{am}(\\lambda_i)\\) for all \\(i\\), then \\(A\\) is diagonalizable. Form \\(P\\) by concatenating all the basis vectors, and \\(D\\) with the eigenvalues in the corresponding order.</li>
<li>If any \\(|\\mathcal{B}_i| < \\operatorname{am}(\\lambda_i)\\), then \\(A\\) is not diagonalizable.</li>
</ol>

<div class="env-block example"><div class="env-title">Example 11.2.3 — A 3\\(\\times\\)3 Diagonalization</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 2 \\end{pmatrix}\\).

<strong>Step 1.</strong> \\(\\det(A - \\lambda I) = (1-\\lambda)(2-\\lambda)^2\\). Eigenvalues: \\(\\lambda_1 = 1\\) (am = 1), \\(\\lambda_2 = 2\\) (am = 2).

<strong>Step 2.</strong> For \\(\\lambda_1 = 1\\): \\(A - I = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}\\), rank 2, nullity 1. \\(E_1 = \\operatorname{span}\\{\\mathbf{e}_1\\}\\). \\(\\operatorname{gm}(1) = 1 = \\operatorname{am}(1)\\). \\(\\checkmark\\)

For \\(\\lambda_2 = 2\\): \\(A - 2I = \\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\), rank 2, nullity 1. \\(E_2 = \\operatorname{span}\\{\\mathbf{e}_2\\}\\). \\(\\operatorname{gm}(2) = 1 < 2 = \\operatorname{am}(2)\\). \\(\\times\\)

<strong>Conclusion:</strong> \\(A\\) is <strong>not</strong> diagonalizable.
</div></div>

<div class="env-block example"><div class="env-title">Example 11.2.4 — Successful 3\\(\\times\\)3 Diagonalization</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}\\). This is already diagonal, so \\(A = I \\cdot D \\cdot I^{-1}\\) with \\(P = I\\) and \\(D = A\\).

More interestingly, consider \\(B = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}\\). Eigenvalues: 2, 3, 5 (all distinct). By Corollary 11.2.2, \\(B\\) is diagonalizable. The eigenvectors are \\(\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}\\), \\(\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}\\), \\(\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}\\), giving \\(P = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}\\).
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 11.2.5 — Diagonalizability of Special Matrices</div><div class="env-body">
<ul>
<li>Real symmetric matrices are always diagonalizable (in fact, orthogonally diagonalizable; see Chapter 16).</li>
<li>Matrices with \\(n\\) distinct real eigenvalues are always diagonalizable.</li>
<li>Projection matrices (\\(A^2 = A\\)) are always diagonalizable.</li>
<li>Involutions (\\(A^2 = I\\)) are always diagonalizable.</li>
</ul>
</div></div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Determine whether \\(A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}\\) is diagonalizable.',
                    hint: 'Find the eigenvalues and check whether the geometric multiplicity equals the algebraic multiplicity.',
                    solution: 'The characteristic polynomial is \\((3-\\lambda)^2\\), so \\(\\lambda = 3\\) has \\(\\operatorname{am}(3) = 2\\). \\(A - 3I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\) has rank 1, so \\(\\operatorname{gm}(3) = 1 \\neq 2\\). Not diagonalizable.'
                },
                {
                    question: 'Diagonalize \\(A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}\\) and verify that \\(A = PDP^{-1}\\).',
                    hint: 'The eigenvalues are 1 and 3 (distinct, so diagonalizable).',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 1, \\lambda_2 = 3\\). For \\(\\lambda_1 = 1\\): eigenvector \\(\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\). For \\(\\lambda_2 = 3\\): \\(A - 3I = \\begin{pmatrix} -2 & 2 \\\\ 0 & 0 \\end{pmatrix}\\), eigenvector \\(\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). \\(P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}\\). Check: \\(PDP^{-1} = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} = A\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Prove that a projection matrix \\(P\\) (satisfying \\(P^2 = P\\)) is diagonalizable.',
                    hint: 'Show that \\(\\operatorname{gm}(\\lambda) = \\operatorname{am}(\\lambda)\\) for each eigenvalue \\(\\lambda \\in \\{0, 1\\}\\). Use \\(\\mathbb{R}^n = \\operatorname{Col}(P) \\oplus \\operatorname{Nul}(P)\\).',
                    solution: 'The only eigenvalues are 0 and 1. Let \\(r = \\operatorname{rank}(P)\\). For any \\(\\mathbf{x}\\), write \\(\\mathbf{x} = P\\mathbf{x} + (\\mathbf{x} - P\\mathbf{x})\\). Since \\(P(P\\mathbf{x}) = P^2\\mathbf{x} = P\\mathbf{x}\\), we have \\(P\\mathbf{x} \\in E_1\\). And \\(P(\\mathbf{x} - P\\mathbf{x}) = P\\mathbf{x} - P^2\\mathbf{x} = \\mathbf{0}\\), so \\(\\mathbf{x} - P\\mathbf{x} \\in E_0\\). Thus \\(\\mathbb{R}^n = E_1 + E_0\\). Since \\(E_1 \\cap E_0 = \\{\\mathbf{0}\\}\\), this is a direct sum and \\(\\dim E_1 + \\dim E_0 = n\\). So \\(\\operatorname{gm}(0) + \\operatorname{gm}(1) = n = \\operatorname{am}(0) + \\operatorname{am}(1)\\). Combined with \\(\\operatorname{gm} \\le \\operatorname{am}\\), we get equality.'
                },
                {
                    question: 'Show that a diagonalizable matrix \\(A\\) with all eigenvalues equal to \\(\\lambda\\) must be \\(\\lambda I\\).',
                    hint: 'If \\(A = PDP^{-1}\\) and \\(D = \\lambda I\\), simplify.',
                    solution: 'If \\(D = \\lambda I\\), then \\(A = P(\\lambda I)P^{-1} = \\lambda P P^{-1} = \\lambda I\\).'
                },
                {
                    question: 'Can a matrix be diagonalizable over \\(\\mathbb{C}\\) but not over \\(\\mathbb{R}\\)? Give an example.',
                    hint: 'Consider a rotation matrix.',
                    solution: 'Yes. \\(A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\) has eigenvalues \\(\\pm i\\), so it has no real eigenvalues and is not diagonalizable over \\(\\mathbb{R}\\). Over \\(\\mathbb{C}\\), the eigenvalues are distinct, so it is diagonalizable: \\(P = \\begin{pmatrix} 1 & 1 \\\\ -i & i \\end{pmatrix}\\), \\(D = \\begin{pmatrix} i & 0 \\\\ 0 & -i \\end{pmatrix}\\).'
                }
            ]
        },

        // ========== SECTION 3: Computing Powers of Matrices ==========
        {
            id: 'sec11-3-matrix-powers',
            title: 'Computing Powers of Matrices',
            content: `
<h2>11.3 Computing Powers of Matrices</h2>

<p>One of the most important applications of diagonalization is computing \\(A^k\\) efficiently. Without diagonalization, computing \\(A^{100}\\) requires 99 matrix multiplications. With diagonalization, it requires only one.</p>

<div class="env-block theorem"><div class="env-title">Theorem 11.3.1 — Powers via Diagonalization</div><div class="env-body">
If \\(A = PDP^{-1}\\), then for any positive integer \\(k\\):
\\[
A^k = PD^kP^{-1},
\\]
where \\(D^k = \\operatorname{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)\\).
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
By induction. Base case \\(k = 1\\) is the definition. For the inductive step:
\\[
A^{k+1} = A \\cdot A^k = (PDP^{-1})(PD^kP^{-1}) = PD(P^{-1}P)D^kP^{-1} = PD^{k+1}P^{-1}.
\\]
The key is that the "middle" \\(P^{-1}P = I\\) telescopes away.
<div class="qed">∎</div>
</div></div>

<div class="env-block example"><div class="env-title">Example 11.3.2 — Computing \\(A^{10}\\)</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}\\) with \\(P = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\).

\\[
A^{10} = PD^{10}P^{-1} = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} 2^{10} & 0 \\\\ 0 & 3^{10} \\end{pmatrix}\\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix}
\\]
\\[
= \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} 1024 & 0 \\\\ 0 & 59049 \\end{pmatrix}\\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix}
\\]
\\[
= \\begin{pmatrix} 1024 & 118098 \\\\ 1024 & 59049 \\end{pmatrix}\\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 117074 & -116050 \\\\ 58025 & -57001 \\end{pmatrix}.
\\]
</div></div>

<div class="viz-placeholder" data-viz="viz-matrix-powers"></div>

<h3>Long-Term Behavior of \\(A^k\\)</h3>

<div class="env-block theorem"><div class="env-title">Theorem 11.3.3 — Convergence of Matrix Powers</div><div class="env-body">
Let \\(A\\) be a diagonalizable matrix with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\).
<ul>
<li>If \\(|\\lambda_i| < 1\\) for all \\(i\\), then \\(A^k \\to O\\) as \\(k \\to \\infty\\).</li>
<li>If some \\(|\\lambda_i| > 1\\), then \\(\\|A^k\\| \\to \\infty\\) (the entries blow up).</li>
<li>If \\(|\\lambda_i| \\le 1\\) for all \\(i\\) with \\(|\\lambda_i| = 1\\) only when \\(\\lambda_i = 1\\), and the eigenvalue 1 has \\(\\operatorname{gm}(1) = \\operatorname{am}(1)\\), then \\(A^k\\) converges to the projection onto the eigenspace \\(E_1\\).</li>
</ul>
</div></div>

<div class="env-block example"><div class="env-title">Example 11.3.4 — Markov Chain (Preview)</div><div class="env-body">
The transition matrix \\(A = \\begin{pmatrix} 0.7 & 0.4 \\\\ 0.3 & 0.6 \\end{pmatrix}\\) has eigenvalues \\(\\lambda_1 = 1\\) and \\(\\lambda_2 = 0.3\\). Since \\(|\\lambda_2| < 1\\), repeated application of \\(A\\) converges. For any initial probability vector \\(\\mathbf{x}_0\\), the sequence \\(\\mathbf{x}_k = A^k\\mathbf{x}_0\\) converges to the eigenvector of \\(\\lambda = 1\\) (the steady-state distribution):
\\[
\\mathbf{x}_\\infty = \\begin{pmatrix} 4/7 \\\\ 3/7 \\end{pmatrix}.
\\]
</div></div>

<h3>Computing \\(e^A\\) (Exponential)</h3>

<div class="env-block remark"><div class="env-title">Remark — Matrix Exponential</div><div class="env-body">
The matrix exponential \\(e^A = \\sum_{k=0}^\\infty \\frac{A^k}{k!}\\) is central to solving systems of differential equations \\(\\mathbf{x}' = A\\mathbf{x}\\). If \\(A = PDP^{-1}\\), then
\\[
e^A = P \\, e^D \\, P^{-1} = P \\, \\operatorname{diag}(e^{\\lambda_1}, \\ldots, e^{\\lambda_n}) \\, P^{-1},
\\]
reducing the computation of a matrix exponential to computing ordinary exponentials of scalars.
</div></div>
`,
            visualizations: [
                {
                    id: 'viz-matrix-powers',
                    title: 'Matrix Powers: \\(A^k\\)',
                    description: 'Watch how repeatedly applying a matrix transforms a set of points on the unit circle. When all eigenvalues have absolute value less than 1, the points collapse to the origin. When eigenvalues exceed 1 in magnitude, the points fly outward.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });
                        let ma = 0.8, mb = 0.3, mc = -0.2, md = 0.5;
                        let k = 0;

                        VizEngine.createSlider(controls, 'a', -2, 2, ma, 0.1, v => { ma = v; k = 0; draw(); });
                        VizEngine.createSlider(controls, 'b', -2, 2, mb, 0.1, v => { mb = v; k = 0; draw(); });
                        VizEngine.createSlider(controls, 'c', -2, 2, mc, 0.1, v => { mc = v; k = 0; draw(); });
                        VizEngine.createSlider(controls, 'd', -2, 2, md, 0.1, v => { md = v; k = 0; draw(); });

                        const kSlider = VizEngine.createSlider(controls, 'k', 0, 30, 0, 1, v => { k = Math.round(v); draw(); });

                        VizEngine.createButton(controls, 'Animate', () => {
                            k = 0;
                            kSlider.value = 0;
                            const interval = setInterval(() => {
                                k++;
                                kSlider.value = k;
                                kSlider.dispatchEvent(new Event('input'));
                                draw();
                                if (k >= 30) clearInterval(interval);
                            }, 200);
                        });

                        function matPow(M, n) {
                            let R = [[1, 0], [0, 1]]; // identity
                            for (let i = 0; i < n; i++) R = VizEngine.matMul(R, M);
                            return R;
                        }

                        function draw() {
                            const M = [[ma, mb], [mc, md]];
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Original unit circle points
                            const N = 24;
                            const pts = [];
                            for (let i = 0; i < N; i++) {
                                const th = (2 * Math.PI * i) / N;
                                pts.push([Math.cos(th), Math.sin(th)]);
                            }

                            // Draw original circle
                            for (let i = 0; i < N; i++) {
                                const [x, y] = pts[i];
                                const next = pts[(i + 1) % N];
                                viz.drawSegment(x, y, next[0], next[1], viz.colors.white + '33', 1);
                            }

                            // Apply M^k
                            const Mk = matPow(M, k);
                            const tpts = pts.map(p => VizEngine.matVec(Mk, p));

                            // Draw transformed shape
                            for (let i = 0; i < N; i++) {
                                const [x, y] = tpts[i];
                                const next = tpts[(i + 1) % N];
                                viz.drawSegment(x, y, next[0], next[1], viz.colors.blue, 1.5);
                                viz.drawPoint(x, y, viz.colors.blue, null, 3);
                            }

                            // Eigenvalue info
                            const eigs = VizEngine.eigenvalues2(M);
                            if (eigs) {
                                viz.screenText('\u03BB\u2081 = ' + eigs[0].toFixed(3), 14, 18, viz.colors.green, 12, 'left');
                                viz.screenText('\u03BB\u2082 = ' + eigs[1].toFixed(3), 14, 34, viz.colors.purple, 12, 'left');
                                viz.screenText('|\u03BB\u2081| = ' + Math.abs(eigs[0]).toFixed(3), 14, 50, viz.colors.green, 11, 'left');
                                viz.screenText('|\u03BB\u2082| = ' + Math.abs(eigs[1]).toFixed(3), 14, 64, viz.colors.purple, 11, 'left');
                            } else {
                                const tr = ma + md;
                                const det = ma * md - mb * mc;
                                const re = tr / 2;
                                const im = Math.sqrt(4 * det - tr * tr) / 2;
                                viz.screenText('\u03BB = ' + re.toFixed(2) + ' \u00B1 ' + im.toFixed(2) + 'i', 14, 18, viz.colors.pink, 12, 'left');
                                viz.screenText('|\u03BB| = ' + Math.sqrt(det).toFixed(3), 14, 34, viz.colors.pink, 11, 'left');
                            }

                            viz.screenText('k = ' + k, viz.width - 50, 20, viz.colors.orange, 16);
                            viz.drawMatrix(Mk, viz.width - 140, viz.height - 70, viz.colors.white, 55, 22, 11);
                            viz.screenText('A^' + k + ' =', viz.width - 155, viz.height - 52, viz.colors.white, 11, 'right');
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}\\). Use diagonalization to compute \\(A^5\\).',
                    hint: 'Eigenvalues are 1 and 3. Find \\(P\\), compute \\(D^5 = \\operatorname{diag}(1, 243)\\), and multiply.',
                    solution: 'Eigenvalues: 1, 3. Eigenvectors: \\(\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\), \\(\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). \\(P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\), \\(P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}\\). \\(A^5 = P\\begin{pmatrix} 1 & 0 \\\\ 0 & 243 \\end{pmatrix}P^{-1} = \\begin{pmatrix} 1 & 243 \\\\ 0 & 243 \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 242 \\\\ 0 & 243 \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that if \\(A\\) is diagonalizable with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\), then \\(\\operatorname{tr}(A^k) = \\lambda_1^k + \\cdots + \\lambda_n^k\\).',
                    hint: 'Use \\(A^k = PD^kP^{-1}\\) and the fact that \\(\\operatorname{tr}(XY) = \\operatorname{tr}(YX)\\).',
                    solution: '\\(\\operatorname{tr}(A^k) = \\operatorname{tr}(PD^kP^{-1}) = \\operatorname{tr}(D^kP^{-1}P) = \\operatorname{tr}(D^k) = \\lambda_1^k + \\cdots + \\lambda_n^k\\).'
                },
                {
                    question: 'The matrix \\(A = \\begin{pmatrix} 0.5 & 0.3 \\\\ 0.5 & 0.7 \\end{pmatrix}\\) is a stochastic matrix. Find \\(\\lim_{k \\to \\infty} A^k\\).',
                    hint: 'Diagonalize \\(A\\). One eigenvalue is 1 (always the case for stochastic matrices). What is the other?',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 1, \\lambda_2 = 0.2\\). For \\(\\lambda_1 = 1\\): eigenvector \\(\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\). For \\(\\lambda_2 = 0.2\\): eigenvector \\(\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}\\). \\(P = \\begin{pmatrix} 3 & 1 \\\\ 5 & -1 \\end{pmatrix}\\), \\(P^{-1} = \\frac{1}{-8}\\begin{pmatrix} -1 & -1 \\\\ -5 & 3 \\end{pmatrix}\\). As \\(k \\to \\infty\\), \\(0.2^k \\to 0\\), so \\(D^k \\to \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}\\). Then \\(A^\\infty = P\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}P^{-1} = \\frac{1}{8}\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 3/8 & 3/8 \\\\ 5/8 & 5/8 \\end{pmatrix}\\).'
                },
                {
                    question: 'Solve the system of differential equations \\(x_1\' = 3x_1, \\; x_2\' = -2x_2\\) using the matrix exponential.',
                    hint: 'The system is \\(\\mathbf{x}\' = A\\mathbf{x}\\) where \\(A = \\operatorname{diag}(3, -2)\\). The solution is \\(\\mathbf{x}(t) = e^{At}\\mathbf{x}(0)\\).',
                    solution: 'Since \\(A = \\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}\\) is already diagonal, \\(e^{At} = \\begin{pmatrix} e^{3t} & 0 \\\\ 0 & e^{-2t} \\end{pmatrix}\\). The solution is \\(x_1(t) = x_1(0)e^{3t}\\), \\(x_2(t) = x_2(0)e^{-2t}\\).'
                },
                {
                    question: 'If \\(A\\) is diagonalizable, prove that \\(A^k = O\\) for some positive integer \\(k\\) if and only if all eigenvalues of \\(A\\) are zero.',
                    hint: 'Use \\(A^k = PD^kP^{-1}\\) and the fact that \\(D^k = \\operatorname{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)\\).',
                    solution: '(\\(\\Rightarrow\\)) If \\(A^k = O\\), then \\(PD^kP^{-1} = O\\), so \\(D^k = O\\), meaning \\(\\lambda_i^k = 0\\) for all \\(i\\), hence \\(\\lambda_i = 0\\) for all \\(i\\). (\\(\\Leftarrow\\)) If all \\(\\lambda_i = 0\\), then \\(D = O\\), so \\(A = POP^{-1} = O\\), and \\(A^k = O\\) for any \\(k \\ge 1\\). (In fact, a diagonalizable nilpotent matrix must be the zero matrix.)'
                }
            ]
        },

        // ========== SECTION 4: Applications: Fibonacci and Recurrences ==========
        {
            id: 'sec11-4-fibonacci',
            title: 'Applications: Fibonacci & Recurrences',
            content: `
<h2>11.4 Applications: Fibonacci and Recurrences</h2>

<p>One of the most elegant applications of diagonalization is solving linear recurrences. The famous Fibonacci sequence, defined by \\(F_{n+2} = F_{n+1} + F_n\\), can be expressed using matrix powers, and diagonalization gives us a closed-form formula.</p>

<h3>The Matrix Method for Recurrences</h3>

<div class="env-block proposition"><div class="env-title">Proposition 11.4.1 — Fibonacci as Matrix Power</div><div class="env-body">
The Fibonacci sequence \\(F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n\\) satisfies:
\\[
\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}^n \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}.
\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
Let \\(\\mathbf{x}_n = \\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix}\\) and \\(A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\). Then
\\[
\\mathbf{x}_{n+1} = \\begin{pmatrix} F_{n+2} \\\\ F_{n+1} \\end{pmatrix} = \\begin{pmatrix} F_{n+1} + F_n \\\\ F_{n+1} \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = A\\mathbf{x}_n.
\\]
By induction, \\(\\mathbf{x}_n = A^n \\mathbf{x}_0 = A^n \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\).
<div class="qed">∎</div>
</div></div>

<h3>Diagonalizing the Fibonacci Matrix</h3>

<div class="env-block example"><div class="env-title">Example 11.4.2 — Binet's Formula</div><div class="env-body">
Let \\(A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\).

<strong>Eigenvalues:</strong> \\(p(\\lambda) = \\lambda^2 - \\lambda - 1 = 0\\), giving
\\[
\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618, \\qquad \\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618.
\\]
(Here \\(\\varphi\\) is the golden ratio.)

<strong>Eigenvectors:</strong> For \\(\\varphi\\): \\(\\mathbf{v}_1 = \\begin{pmatrix} \\varphi \\\\ 1 \\end{pmatrix}\\). For \\(\\psi\\): \\(\\mathbf{v}_2 = \\begin{pmatrix} \\psi \\\\ 1 \\end{pmatrix}\\).

<strong>Diagonalization:</strong> \\(P = \\begin{pmatrix} \\varphi & \\psi \\\\ 1 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} \\varphi & 0 \\\\ 0 & \\psi \\end{pmatrix}\\).

<strong>Closed form:</strong> From \\(\\mathbf{x}_n = PD^nP^{-1}\\mathbf{x}_0\\), extracting the second component:
\\[
\\boxed{F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}} = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{\\!n} - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^{\\!n}\\right].}
\\]
This is <em>Binet's formula</em>. Remarkably, even though \\(\\sqrt{5}\\) is irrational, the expression always yields an integer.
</div></div>

<div class="viz-placeholder" data-viz="viz-fibonacci"></div>

<div class="env-block remark"><div class="env-title">Remark — Asymptotic Growth</div><div class="env-body">
Since \\(|\\psi| < 1\\), the term \\(\\psi^n \\to 0\\) exponentially fast, so \\(F_n \\approx \\varphi^n / \\sqrt{5}\\) for large \\(n\\). The Fibonacci numbers grow exponentially at rate \\(\\varphi \\approx 1.618\\). Moreover, \\(F_{n+1}/F_n \\to \\varphi\\) (the golden ratio).
</div></div>

<h3>General Linear Recurrences</h3>

<div class="env-block theorem"><div class="env-title">Theorem 11.4.3 — General Second-Order Recurrence</div><div class="env-body">
The recurrence \\(a_{n+2} = \\alpha \\, a_{n+1} + \\beta \\, a_n\\) with initial conditions \\(a_0, a_1\\) is equivalent to the matrix equation
\\[
\\begin{pmatrix} a_{n+1} \\\\ a_n \\end{pmatrix} = \\begin{pmatrix} \\alpha & \\beta \\\\ 1 & 0 \\end{pmatrix}^n \\begin{pmatrix} a_1 \\\\ a_0 \\end{pmatrix}.
\\]
If the companion matrix \\(C = \\begin{pmatrix} \\alpha & \\beta \\\\ 1 & 0 \\end{pmatrix}\\) has distinct eigenvalues \\(r_1, r_2\\), the closed form is
\\[
a_n = c_1 r_1^n + c_2 r_2^n,
\\]
where \\(c_1, c_2\\) are determined by initial conditions.
</div></div>

<div class="env-block example"><div class="env-title">Example 11.4.4 — Lucas Numbers</div><div class="env-body">
The Lucas numbers satisfy \\(L_{n+2} = L_{n+1} + L_n\\) with \\(L_0 = 2, L_1 = 1\\) (same recurrence as Fibonacci, different initial conditions). The companion matrix is the same, with eigenvalues \\(\\varphi, \\psi\\). Solving for constants: \\(L_n = \\varphi^n + \\psi^n\\). The first few values: 2, 1, 3, 4, 7, 11, 18, 29, ...
</div></div>

<div class="env-block example"><div class="env-title">Example 11.4.5</div><div class="env-body">
Solve \\(a_{n+2} = 5a_{n+1} - 6a_n\\) with \\(a_0 = 1, a_1 = 4\\).

The companion matrix \\(C = \\begin{pmatrix} 5 & -6 \\\\ 1 & 0 \\end{pmatrix}\\) has eigenvalues \\(\\lambda^2 - 5\\lambda + 6 = 0\\), so \\(r_1 = 2, r_2 = 3\\). General solution: \\(a_n = c_1 \\cdot 2^n + c_2 \\cdot 3^n\\). From \\(a_0 = 1: c_1 + c_2 = 1\\). From \\(a_1 = 4: 2c_1 + 3c_2 = 4\\). Solving: \\(c_1 = -1, c_2 = 2\\). So \\(a_n = -2^n + 2 \\cdot 3^n\\).

Check: \\(a_0 = -1 + 2 = 1\\) \\(\\checkmark\\), \\(a_1 = -2 + 6 = 4\\) \\(\\checkmark\\), \\(a_2 = 5(4) - 6(1) = 14 = -4 + 18 = 14\\) \\(\\checkmark\\).
</div></div>
`,
            visualizations: [
                {
                    id: 'viz-fibonacci',
                    title: 'Fibonacci via Diagonalization',
                    description: 'The Fibonacci sequence computed using matrix powers. The blue curve shows the actual Fibonacci numbers, the green curve shows Binet\'s approximation \\(\\varphi^n/\\sqrt{5}\\), and the ratio \\(F_{n+1}/F_n\\) converges to the golden ratio \\(\\varphi \\approx 1.618\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 1, originX: 60, originY: 340 });
                        const phi = (1 + Math.sqrt(5)) / 2;
                        const psi = (1 - Math.sqrt(5)) / 2;

                        let maxN = 15;
                        VizEngine.createSlider(controls, 'N', 5, 25, maxN, 1, v => { maxN = Math.round(v); draw(); });

                        // Compute Fibonacci by matrix power
                        function fib(n) {
                            if (n <= 0) return 0;
                            if (n === 1) return 1;
                            let a = 0, b = 1;
                            for (let i = 2; i <= n; i++) { const c = a + b; a = b; b = c; }
                            return b;
                        }

                        function binet(n) {
                            return (Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5);
                        }

                        function draw() {
                            viz.clear();

                            const ctx = viz.ctx;
                            const W = viz.width, H = viz.height;
                            const pad = { l: 60, r: 30, t: 30, b: 50 };
                            const plotW = W - pad.l - pad.r;
                            const plotH = H - pad.t - pad.b;

                            // Background
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Compute data
                            const fibs = [];
                            for (let n = 0; n <= maxN; n++) fibs.push(fib(n));
                            const maxF = Math.max(...fibs, 1);

                            function toSx(n) { return pad.l + (n / maxN) * plotW; }
                            function toSy(f) { return pad.t + plotH - (f / maxF) * plotH; }

                            // Grid
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 0.5;
                            for (let i = 0; i <= 5; i++) {
                                const y = pad.t + (i / 5) * plotH;
                                ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
                                ctx.fillStyle = viz.colors.text; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
                                ctx.fillText(Math.round(maxF * (1 - i / 5)), pad.l - 8, y + 4);
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(pad.l, pad.t + plotH); ctx.lineTo(W - pad.r, pad.t + plotH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, pad.t + plotH); ctx.stroke();

                            // X labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
                            for (let n = 0; n <= maxN; n += Math.max(1, Math.floor(maxN / 10))) {
                                ctx.fillText(n, toSx(n), pad.t + plotH + 16);
                            }
                            ctx.fillText('n', W - pad.r + 15, pad.t + plotH + 4);

                            // Binet approximation curve
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (let n = 0; n <= maxN; n += 0.1) {
                                const val = binet(n);
                                const sx = toSx(n), sy = toSy(Math.max(0, val));
                                n === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Fibonacci points
                            for (let n = 0; n <= maxN; n++) {
                                const sx = toSx(n), sy = toSy(fibs[n]);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();
                                if (n <= 12 || n === maxN) {
                                    ctx.fillStyle = viz.colors.white; ctx.font = '9px sans-serif'; ctx.textAlign = 'center';
                                    ctx.fillText(fibs[n], sx, sy - 8);
                                }
                            }

                            // Connecting lines for Fibonacci
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (let n = 0; n <= maxN; n++) {
                                const sx = toSx(n), sy = toSy(fibs[n]);
                                n === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillRect(W - 200, 14, 12, 3);
                            ctx.fillStyle = viz.colors.blue; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
                            ctx.fillText('F\u2099 (exact)', W - 184, 19);

                            ctx.fillStyle = viz.colors.green;
                            ctx.fillRect(W - 200, 32, 12, 3);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('\u03C6\u207F/\u221A5 (Binet)', W - 184, 37);

                            // Ratio info
                            if (maxN >= 2) {
                                const ratio = fibs[maxN] / fibs[maxN - 1];
                                ctx.fillStyle = viz.colors.orange; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
                                ctx.fillText('F\u2099\u208A\u2081/F\u2099 = ' + (fibs[maxN] && fibs[maxN-1] ? ratio.toFixed(6) : 'N/A'), pad.l + 10, pad.t + 18);
                                ctx.fillText('\u03C6 = ' + phi.toFixed(6), pad.l + 10, pad.t + 34);
                            }
                        }
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use Binet\'s formula to compute \\(F_{10}\\) and verify it equals 55.',
                    hint: 'Plug \\(n = 10\\) into \\(F_n = (\\varphi^{10} - \\psi^{10})/\\sqrt{5}\\). Use \\(\\varphi \\approx 1.6180\\) and \\(\\psi \\approx -0.6180\\).',
                    solution: '\\(\\varphi^{10} \\approx 122.9919\\), \\(\\psi^{10} \\approx 0.0081\\). \\(F_{10} = (122.9919 - 0.0081)/\\sqrt{5} = 122.9838/2.2361 \\approx 55.0000\\). Indeed \\(F_{10} = 55\\).'
                },
                {
                    question: 'Solve the recurrence \\(a_{n+2} = 3a_{n+1} - 2a_n\\) with \\(a_0 = 0, a_1 = 1\\).',
                    hint: 'The companion matrix has eigenvalues 1 and 2.',
                    solution: 'Eigenvalues: \\(\\lambda^2 - 3\\lambda + 2 = (\\lambda-1)(\\lambda-2)= 0\\), so \\(r_1 = 1, r_2 = 2\\). General solution: \\(a_n = c_1 + c_2 \\cdot 2^n\\). From \\(a_0 = 0\\): \\(c_1 + c_2 = 0\\). From \\(a_1 = 1\\): \\(c_1 + 2c_2 = 1\\). So \\(c_2 = 1, c_1 = -1\\). Answer: \\(a_n = 2^n - 1\\). Check: 0, 1, 3, 7, 15, ... \\(\\checkmark\\)'
                },
                {
                    question: 'Find a closed-form expression for the \\(n\\)-th term of the sequence defined by \\(a_0 = 2, a_1 = 7, a_{n+2} = a_{n+1} + 6a_n\\).',
                    hint: 'The characteristic equation is \\(\\lambda^2 - \\lambda - 6 = (\\lambda - 3)(\\lambda + 2) = 0\\).',
                    solution: 'Eigenvalues: 3 and \\(-2\\). General form: \\(a_n = c_1 \\cdot 3^n + c_2 \\cdot (-2)^n\\). From \\(a_0 = 2\\): \\(c_1 + c_2 = 2\\). From \\(a_1 = 7\\): \\(3c_1 - 2c_2 = 7\\). Solving: \\(c_1 = 11/5, c_2 = -1/5\\). So \\(a_n = \\frac{11 \\cdot 3^n - (-2)^n}{5}\\).'
                },
                {
                    question: 'Show that \\(F_{n+1}F_{n-1} - F_n^2 = (-1)^n\\) (Cassini\'s identity) using the matrix approach.',
                    hint: 'Consider \\(\\det(A^n)\\) where \\(A\\) is the Fibonacci matrix. Use \\(\\det(A^n) = (\\det A)^n\\).',
                    solution: 'Let \\(A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\). Then \\(A^n = \\begin{pmatrix} F_{n+1} & F_n \\\\ F_n & F_{n-1} \\end{pmatrix}\\) (provable by induction). Taking determinants: \\(\\det(A^n) = F_{n+1}F_{n-1} - F_n^2\\). But \\(\\det(A^n) = (\\det A)^n = (-1)^n\\). So \\(F_{n+1}F_{n-1} - F_n^2 = (-1)^n\\).'
                },
                {
                    question: 'A population model has two age classes with transition matrix \\(M = \\begin{pmatrix} 0 & 2 \\\\ 0.5 & 0 \\end{pmatrix}\\). Does the population grow, decline, or stabilize? Find the long-term growth rate.',
                    hint: 'Find the eigenvalues. The dominant eigenvalue (largest in absolute value) determines the growth rate.',
                    solution: 'Eigenvalues: \\(\\lambda^2 - 1 = 0\\), so \\(\\lambda = 1\\) and \\(\\lambda = -1\\). Both have \\(|\\lambda| = 1\\), so the population neither grows nor declines, but oscillates. The dominant eigenvalue is 1, so the long-term growth rate is 0% per time step. The population eventually settles into the eigenvector for \\(\\lambda = 1\\): \\(\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}\\) (2:1 ratio of young to old).'
                }
            ]
        },

        // ========== SECTION 5: When Diagonalization Fails ==========
        {
            id: 'sec11-5-defective',
            title: 'When Diagonalization Fails',
            content: `
<h2>11.5 When Diagonalization Fails</h2>

<p>Not every matrix is diagonalizable. In this section, we study what goes wrong and preview the more general Jordan normal form, which handles all cases.</p>

<h3>Defective Matrices Revisited</h3>

<div class="env-block definition"><div class="env-title">Recall: Definition 10.4.6 — Defective Matrix</div><div class="env-body">
A matrix is <em>defective</em> if the geometric multiplicity of some eigenvalue is strictly less than its algebraic multiplicity. Equivalently, there are not enough linearly independent eigenvectors to form a basis.
</div></div>

<div class="env-block example"><div class="env-title">Example 11.5.1 — The Prototypical Defective Matrix</div><div class="env-body">
The matrix \\(A = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}\\) (a <em>Jordan block</em>) has only one eigenvalue \\(\\lambda\\) with \\(\\operatorname{am}(\\lambda) = 2\\) but \\(\\operatorname{gm}(\\lambda) = 1\\). The only eigenvectors are multiples of \\(\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\).

Geometrically, \\(A\\) performs a scaling by \\(\\lambda\\) plus a shear (adding a component of the second coordinate to the first). This shear is the "defective" part: it cannot be eliminated by a change of basis.
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 11.5.2 — Characterizations of Non-Diagonalizability</div><div class="env-body">
The following are equivalent for an \\(n \\times n\\) matrix \\(A\\):
<ol>
<li>\\(A\\) is not diagonalizable.</li>
<li>There exists an eigenvalue \\(\\lambda\\) with \\(\\operatorname{gm}(\\lambda) < \\operatorname{am}(\\lambda)\\).</li>
<li>The eigenvectors of \\(A\\) do not span \\(\\mathbb{R}^n\\) (or \\(\\mathbb{C}^n\\)).</li>
<li>\\(A\\) is not similar to any diagonal matrix.</li>
</ol>
</div></div>

<h3>Generalized Eigenvectors</h3>

<p>When a matrix is defective, we cannot find enough ordinary eigenvectors. The remedy is to introduce <em>generalized eigenvectors</em>.</p>

<div class="env-block definition"><div class="env-title">Definition 11.5.3 — Generalized Eigenvector</div><div class="env-body">
A nonzero vector \\(\\mathbf{w}\\) is a <em>generalized eigenvector</em> of \\(A\\) corresponding to eigenvalue \\(\\lambda\\) of rank \\(k\\) if
\\[
(A - \\lambda I)^k \\mathbf{w} = \\mathbf{0} \\quad \\text{but} \\quad (A - \\lambda I)^{k-1} \\mathbf{w} \\neq \\mathbf{0}.
\\]
Ordinary eigenvectors are the special case \\(k = 1\\).
</div></div>

<div class="env-block example"><div class="env-title">Example 11.5.4</div><div class="env-body">
For \\(A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}\\) with \\(\\lambda = 3\\):

\\(A - 3I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\), \\((A - 3I)^2 = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}\\).

The eigenvector (rank 1 generalized eigenvector) is \\(\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\).

A rank 2 generalized eigenvector: choose \\(\\mathbf{w} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\). Check: \\((A - 3I)\\mathbf{w} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\mathbf{v}_1 \\neq \\mathbf{0}\\), and \\((A - 3I)^2 \\mathbf{w} = \\mathbf{0}\\). \\(\\checkmark\\)
</div></div>

<h3>Preview of Jordan Normal Form</h3>

<div class="env-block theorem"><div class="env-title">Theorem 11.5.5 — Jordan Normal Form (Statement)</div><div class="env-body">
Every square matrix \\(A\\) over \\(\\mathbb{C}\\) is similar to a matrix in <em>Jordan normal form</em>:
\\[
J = \\begin{pmatrix} J_{n_1}(\\lambda_1) & & \\\\ & \\ddots & \\\\ & & J_{n_k}(\\lambda_k) \\end{pmatrix},
\\]
where each <em>Jordan block</em> is
\\[
J_m(\\lambda) = \\begin{pmatrix} \\lambda & 1 & & \\\\ & \\lambda & \\ddots & \\\\ & & \\ddots & 1 \\\\ & & & \\lambda \\end{pmatrix} \\in \\mathbb{C}^{m \\times m}.
\\]
The Jordan form is unique up to permutation of blocks.
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
A matrix is diagonalizable if and only if all its Jordan blocks are \\(1 \\times 1\\). The Jordan form is the "next best thing" to diagonalization for defective matrices. We will study it in detail in Chapter 12.
</div></div>

<div class="env-block example"><div class="env-title">Example 11.5.6 — Jordan Form of a 3\\(\\times\\)3 Matrix</div><div class="env-body">
Consider \\(A = \\begin{pmatrix} 5 & 4 & 2 \\\\ -1 & 0 & -1 \\\\ 1 & 2 & 3 \\end{pmatrix}\\). The characteristic polynomial is \\((\\lambda - 1)(\\lambda - 3)^2\\).

For \\(\\lambda = 3\\): \\(\\operatorname{am}(3) = 2\\) but \\(\\operatorname{gm}(3) = 1\\) (one linearly independent eigenvector). So \\(A\\) is defective, and its Jordan form is
\\[
J = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 3 \\end{pmatrix}.
\\]
The \\(2 \\times 2\\) Jordan block \\(J_2(3)\\) reflects the deficiency.
</div></div>

<h3>Why It Matters</h3>

<div class="env-block intuition"><div class="env-title">Intuition — Practical Impact</div><div class="env-body">
Defective matrices arise naturally in differential equations, control theory, and physics. When a system has a defective coefficient matrix, the solutions involve terms like \\(t^k e^{\\lambda t}\\) (polynomial times exponential), rather than pure exponentials. The generalized eigenvectors generate these polynomial-growth modes.
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 11.5.7 — Powers of Jordan Blocks</div><div class="env-body">
For a \\(2 \\times 2\\) Jordan block \\(J = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}\\):
\\[
J^k = \\begin{pmatrix} \\lambda^k & k\\lambda^{k-1} \\\\ 0 & \\lambda^k \\end{pmatrix}.
\\]
Note the \\(k\\lambda^{k-1}\\) term: this is polynomial growth (in \\(k\\)) modulated by exponential growth (\\(\\lambda^{k-1}\\)), which does not occur for diagonalizable matrices.
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
Write \\(J = \\lambda I + N\\) where \\(N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\). Since \\(N^2 = O\\) and \\(\\lambda I\\) commutes with \\(N\\), the binomial theorem gives:
\\[
J^k = (\\lambda I + N)^k = \\sum_{j=0}^{k} \\binom{k}{j} \\lambda^{k-j} N^j = \\lambda^k I + k\\lambda^{k-1} N = \\begin{pmatrix} \\lambda^k & k\\lambda^{k-1} \\\\ 0 & \\lambda^k \\end{pmatrix}.
\\]
<div class="qed">∎</div>
</div></div>

<div class="env-block warning"><div class="env-title">Warning</div><div class="env-body">
The fact that "most" matrices are diagonalizable (in a measure-theoretic sense: the set of non-diagonalizable matrices has Lebesgue measure zero in \\(\\mathbb{R}^{n \\times n}\\)) does not mean defective matrices are unimportant. They arise in structured problems (e.g., nilpotent operators, repeated eigenvalues from symmetry constraints) and their behavior is qualitatively different.
</div></div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Show that the matrix \\(N = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}\\) is nilpotent (\\(N^k = O\\) for some \\(k\\)) and find the smallest such \\(k\\). Is \\(N\\) diagonalizable?',
                    hint: 'Compute \\(N^2\\) and \\(N^3\\).',
                    solution: '\\(N^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix} \\neq O\\), \\(N^3 = O\\). The smallest \\(k\\) is 3. The only eigenvalue is 0 (with \\(\\operatorname{am} = 3\\)), but \\(\\operatorname{gm}(0) = \\dim\\operatorname{Nul}(N) = 1\\). Since \\(1 < 3\\), \\(N\\) is defective and not diagonalizable.'
                },
                {
                    question: 'Find the generalized eigenvectors of \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\) and form a generalized eigenvector basis.',
                    hint: 'The eigenvalue is \\(\\lambda = 2\\). Find \\(\\mathbf{v}_1\\) in \\(\\ker(A - 2I)\\) and \\(\\mathbf{w}\\) in \\(\\ker(A - 2I)^2 \\setminus \\ker(A - 2I)\\).',
                    solution: '\\(A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\). Eigenvector: \\(\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}\\). \\((A-2I)^2 = O\\), so every vector is in \\(\\ker(A-2I)^2\\). Choose \\(\\mathbf{w} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\). Check: \\((A-2I)\\mathbf{w} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\neq \\mathbf{0}\\). The generalized eigenvector basis is \\(\\{\\mathbf{v}_1, \\mathbf{w}\\} = \\left\\{\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\right\\}\\).'
                },
                {
                    question: 'Compute \\(J^{100}\\) for \\(J = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\).',
                    hint: 'Use the formula \\(J^k = \\begin{pmatrix} \\lambda^k & k\\lambda^{k-1} \\\\ 0 & \\lambda^k \\end{pmatrix}\\) with \\(\\lambda = 1\\).',
                    solution: '\\(J^{100} = \\begin{pmatrix} 1^{100} & 100 \\cdot 1^{99} \\\\ 0 & 1^{100} \\end{pmatrix} = \\begin{pmatrix} 1 & 100 \\\\ 0 & 1 \\end{pmatrix}\\). The off-diagonal entry grows linearly, a signature of defective behavior.'
                },
                {
                    question: 'Give an example of a \\(4 \\times 4\\) matrix with eigenvalues 2 and 3, where \\(\\lambda = 2\\) has \\(\\operatorname{am} = 3, \\operatorname{gm} = 2\\) and \\(\\lambda = 3\\) has \\(\\operatorname{am} = 1, \\operatorname{gm} = 1\\). What is its Jordan form?',
                    hint: 'The Jordan blocks for \\(\\lambda = 2\\) must have sizes summing to 3, with 2 blocks (since gm = number of blocks). So the blocks are \\(J_2(2)\\) and \\(J_1(2)\\).',
                    solution: 'The Jordan form is \\(J = \\begin{pmatrix} 2 & 1 & 0 & 0 \\\\ 0 & 2 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\end{pmatrix}\\). The two Jordan blocks for \\(\\lambda = 2\\) are a \\(2 \\times 2\\) block and a \\(1 \\times 1\\) block (giving gm = 2 blocks). The single \\(1 \\times 1\\) block for \\(\\lambda = 3\\) reflects am = gm = 1.'
                },
                {
                    question: 'Prove: if \\(A\\) is a real \\(n \\times n\\) matrix with \\(n\\) distinct real eigenvalues, then \\(A\\) cannot be defective.',
                    hint: 'Use the relationship between distinct eigenvalues and linear independence of eigenvectors.',
                    solution: 'By Theorem 10.3.4, eigenvectors from distinct eigenvalues are linearly independent. With \\(n\\) distinct eigenvalues, we obtain \\(n\\) linearly independent eigenvectors. By Theorem 11.1.2, \\(A\\) is diagonalizable, hence not defective.'
                },
                {
                    question: 'Show that the matrix exponential of a \\(2 \\times 2\\) Jordan block \\(J = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}\\) is \\(e^J = \\begin{pmatrix} e^\\lambda & e^\\lambda \\\\ 0 & e^\\lambda \\end{pmatrix}\\).',
                    hint: 'Write \\(J = \\lambda I + N\\) and use \\(e^{\\lambda I + N} = e^{\\lambda I} e^N\\) (since \\(\\lambda I\\) and \\(N\\) commute). Compute \\(e^N\\) using \\(N^2 = O\\).',
                    solution: 'Since \\(\\lambda I\\) and \\(N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\) commute, \\(e^J = e^{\\lambda I}e^N = e^\\lambda I \\cdot (I + N + \\frac{N^2}{2!} + \\cdots)\\). But \\(N^2 = O\\), so \\(e^N = I + N = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\). Thus \\(e^J = e^\\lambda \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} e^\\lambda & e^\\lambda \\\\ 0 & e^\\lambda \\end{pmatrix}\\).'
                }
            ]
        }
    ]
});
