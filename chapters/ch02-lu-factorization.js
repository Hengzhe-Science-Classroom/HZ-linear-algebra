// === Chapter 2: LU Factorization ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch02',
    number: 2,
    title: 'LU Factorization',
    subtitle: 'Decomposing elimination into triangular factors',
    sections: [
        // ===== SECTION 1: Triangular Matrices and Their Properties =====
        {
            id: 'sec-triangular',
            title: 'Triangular Matrices and Their Properties',
            content: `
<h2>Triangular Matrices and Their Properties</h2>

<div class="env-block intuition">
<div class="env-title">Why Triangular Matrices?</div>
<div class="env-body">
<p>In Chapter 0 we saw that Gaussian elimination transforms a system \\(Ax = b\\) into an upper-triangular system, which can be solved by back substitution. In Chapter 1 we learned to multiply matrices. The natural next question is: can we <em>record</em> the elimination process as a matrix factorization \\(A = LU\\)?</p>
<p>Before answering that, we need to understand the two building blocks of the factorization: <strong>lower-triangular</strong> and <strong>upper-triangular</strong> matrices. These matrices are special because they make solving linear systems trivially easy, requiring only sequential substitution rather than full elimination.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 2.1 — Triangular Matrices</div>
<div class="env-body">
<p>An \\(n \\times n\\) matrix \\(L\\) is <strong>lower triangular</strong> if \\(l_{ij} = 0\\) whenever \\(i < j\\). That is, all entries above the main diagonal are zero:</p>
\\[L = \\begin{pmatrix} l_{11} & 0 & \\cdots & 0 \\\\ l_{21} & l_{22} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & \\cdots & l_{nn} \\end{pmatrix}.\\]
<p>An \\(n \\times n\\) matrix \\(U\\) is <strong>upper triangular</strong> if \\(u_{ij} = 0\\) whenever \\(i > j\\). That is, all entries below the main diagonal are zero:</p>
\\[U = \\begin{pmatrix} u_{11} & u_{12} & \\cdots & u_{1n} \\\\ 0 & u_{22} & \\cdots & u_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & u_{nn} \\end{pmatrix}.\\]
<p>A triangular matrix is <strong>unit triangular</strong> if all its diagonal entries equal 1.</p>
</div>
</div>

<p>Triangular matrices enjoy several algebraic closure properties that make them a natural class to work with.</p>

<div class="env-block proposition">
<div class="env-title">Proposition 2.1 — Closure Properties of Triangular Matrices</div>
<div class="env-body">
<p>Let \\(L_1, L_2\\) be lower-triangular \\(n \\times n\\) matrices. Then:</p>
<ol>
<li>\\(L_1 + L_2\\) is lower triangular.</li>
<li>\\(L_1 L_2\\) is lower triangular, and \\(\\text{diag}(L_1 L_2) = \\text{diag}(L_1) \\cdot \\text{diag}(L_2)\\) (entry-by-entry product of diagonals).</li>
<li>If \\(L_1\\) is invertible (i.e., all diagonal entries are nonzero), then \\(L_1^{-1}\\) is lower triangular.</li>
<li>If both \\(L_1\\) and \\(L_2\\) are unit lower triangular, so is \\(L_1 L_2\\).</li>
</ol>
<p>Analogous statements hold for upper-triangular matrices.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>(1) is immediate from the definition, since if \\((L_1)_{ij} = 0\\) and \\((L_2)_{ij} = 0\\) for \\(i < j\\), then \\((L_1 + L_2)_{ij} = 0\\).</p>
<p>(2) For the product \\(C = L_1 L_2\\), the \\((i,j)\\) entry is \\(c_{ij} = \\sum_{k=1}^{n} (L_1)_{ik}(L_2)_{kj}\\). If \\(i < j\\), then every term in this sum is zero: when \\(k \\leq i < j\\), we have \\((L_2)_{kj} = 0\\); when \\(k > i\\), we have \\((L_1)_{ik} = 0\\). The diagonal claim follows by setting \\(i = j\\): \\(c_{ii} = (L_1)_{ii}(L_2)_{ii}\\).</p>
<p>(3) can be proved by showing that back substitution on \\(L_1 X = I\\) yields a lower-triangular \\(X\\), or by induction using the block structure of triangular matrices.</p>
<p>(4) follows from (2): the diagonal of \\(L_1 L_2\\) consists of \\(1 \\cdot 1 = 1\\) in each position.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 2.1 — Determinant of a Triangular Matrix</div>
<div class="env-body">
<p>The determinant of a triangular matrix is the product of its diagonal entries:</p>
\\[\\det(L) = l_{11} \\, l_{22} \\cdots l_{nn}.\\]
<p>In particular, a triangular matrix is invertible if and only if every diagonal entry is nonzero.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>We prove this for upper-triangular matrices; the lower-triangular case is analogous (or follows by taking transposes). Expand the determinant along the first column. Since \\(u_{i1} = 0\\) for \\(i > 1\\), only the \\((1,1)\\) entry survives, giving \\(\\det(U) = u_{11} \\det(U')\\), where \\(U'\\) is the \\((n-1) \\times (n-1)\\) upper-triangular submatrix. Induction gives the result.</p>
<div class="qed">∎</div>
</div>
</div>

<h3>Forward and Back Substitution</h3>

<p>The practical importance of triangular matrices is that the systems \\(Lc = b\\) and \\(Ux = c\\) can be solved without elimination, by simple sequential substitution.</p>

<div class="env-block definition">
<div class="env-title">Definition 2.2 — Forward Substitution</div>
<div class="env-body">
<p>Given a unit lower-triangular system \\(Lc = b\\), the unknowns are determined one at a time from top to bottom:</p>
\\[c_i = b_i - \\sum_{j=1}^{i-1} l_{ij} \\, c_j, \\qquad i = 1, 2, \\ldots, n.\\]
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 2.3 — Back Substitution</div>
<div class="env-body">
<p>Given an upper-triangular system \\(Ux = c\\) with \\(u_{ii} \\neq 0\\), the unknowns are determined from bottom to top:</p>
\\[x_i = \\frac{1}{u_{ii}}\\Bigl(c_i - \\sum_{j=i+1}^{n} u_{ij} \\, x_j\\Bigr), \\qquad i = n, n-1, \\ldots, 1.\\]
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 2.2 — Cost of Triangular Solves</div>
<div class="env-body">
<p>Forward substitution and back substitution each require \\(\\mathcal{O}(n^2)\\) arithmetic operations, compared to \\(\\mathcal{O}(n^3)\\) for full Gaussian elimination.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.1</div>
<div class="env-body">
<p>Solve \\(Lc = b\\) where</p>
\\[L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -1 & 3 & 1 \\end{pmatrix}, \\qquad b = \\begin{pmatrix} 5 \\\\ 4 \\\\ 7 \\end{pmatrix}.\\]
<p>Forward substitution gives:</p>
<ul>
<li>\\(c_1 = 5\\)</li>
<li>\\(c_2 = 4 - 2(5) = -6\\)</li>
<li>\\(c_3 = 7 - (-1)(5) - 3(-6) = 7 + 5 + 18 = 30\\)</li>
</ul>
<p>So \\(c = (5, -6, 30)^T\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-forward-back-sub"></div>
`,
            visualizations: [
                {
                    id: 'viz-forward-back-sub',
                    title: 'Forward & Back Substitution Visualizer',
                    description: 'Watch how forward substitution solves \\(Lc = b\\) step by step, followed by back substitution for \\(Ux = c\\). Click "Step" to advance one variable at a time.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { width: 700, height: 420, scale: 1, originX: 0, originY: 0 });

                        // L, U, b for a 3x3 example
                        const L = [[1, 0, 0], [2, 1, 0], [-1, 3, 1]];
                        const U = [[2, 1, -1], [0, 3, 2], [0, 0, 5]];
                        const b = [5, 4, 7];

                        let step = 0; // 0-2: forward sub, 3-5: back sub
                        const c = [null, null, null];
                        const x = [null, null, null];

                        function forwardStep(i) {
                            let val = b[i];
                            for (let j = 0; j < i; j++) val -= L[i][j] * c[j];
                            c[i] = val;
                        }

                        function backStep(i) {
                            let val = c[i];
                            for (let j = i + 1; j < 3; j++) val -= U[i][j] * x[j];
                            x[i] = val / U[i][i];
                        }

                        const stepBtn = VizEngine.createButton(controls, 'Step', () => {
                            if (step < 3) forwardStep(step);
                            else if (step < 6) backStep(5 - (step - 3));
                            step++;
                            if (step > 6) step = 6;
                            draw();
                        });

                        const resetBtn = VizEngine.createButton(controls, 'Reset', () => {
                            step = 0;
                            c[0] = c[1] = c[2] = null;
                            x[0] = x[1] = x[2] = null;
                            draw();
                        });

                        function fmtVal(v) {
                            if (v === null) return '?';
                            return Number.isInteger(v) ? v.toString() : v.toFixed(2);
                        }

                        function draw() {
                            const ctx = viz.ctx;
                            viz.clear();

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';

                            // Phase label
                            const phase = step < 3 ? 'Forward Substitution: Lc = b' : 'Back Substitution: Ux = c';
                            ctx.fillStyle = step < 3 ? viz.colors.teal : viz.colors.orange;
                            ctx.fillText(phase, 20, 15);

                            // Draw L matrix
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('L =', 20, 55);
                            viz.drawAugmentedMatrix(L, b, 60, 45, viz.colors.white, step < 3 ? step : -1, 44, 28);

                            // Draw c vector
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('c =', 290, 55);
                            for (let i = 0; i < 3; i++) {
                                const solved = c[i] !== null;
                                ctx.fillStyle = solved ? viz.colors.teal : '#555';
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(fmtVal(c[i]), 340, 50 + i * 28);
                            }
                            ctx.textAlign = 'left';

                            // Draw U matrix
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('U =', 20, 175);
                            const cVals = c.map(v => v !== null ? v : 0);
                            viz.drawAugmentedMatrix(U, cVals, 60, 165, viz.colors.white, step >= 3 && step < 6 ? (5 - (step - 3)) : -1, 44, 28);

                            // Draw x vector
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('x =', 290, 175);
                            for (let i = 0; i < 3; i++) {
                                const solved = x[i] !== null;
                                ctx.fillStyle = solved ? viz.colors.orange : '#555';
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(fmtVal(x[i]), 340, 170 + i * 28);
                            }
                            ctx.textAlign = 'left';

                            // Computation trace
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '13px -apple-system,sans-serif';
                            const traceY = 290;
                            ctx.fillText('Computation:', 20, traceY);
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '12px -apple-system,monospace';

                            if (step >= 1 && step <= 3) {
                                const traces = [
                                    'c\u2081 = b\u2081 = 5',
                                    'c\u2082 = b\u2082 - l\u2082\u2081c\u2081 = 4 - 2(5) = -6',
                                    'c\u2083 = b\u2083 - l\u2083\u2081c\u2081 - l\u2083\u2082c\u2082 = 7 - (-1)(5) - 3(-6) = 30'
                                ];
                                for (let i = 0; i < Math.min(step, 3); i++) {
                                    ctx.fillText(traces[i], 30, traceY + 22 + i * 20);
                                }
                            }

                            if (step >= 4) {
                                const traces2 = [
                                    'x\u2083 = c\u2083 / u\u2083\u2083 = 30 / 5 = 6',
                                    'x\u2082 = (c\u2082 - u\u2082\u2083x\u2083) / u\u2082\u2082 = (-6 - 2(6)) / 3 = -6',
                                    'x\u2081 = (c\u2081 - u\u2081\u2082x\u2082 - u\u2081\u2083x\u2083) / u\u2081\u2081 = (5 - 1(-6) - (-1)(6)) / 2 = 8.5'
                                ];
                                for (let i = 0; i < Math.min(step - 3, 3); i++) {
                                    ctx.fillText(traces2[i], 30, traceY + 22 + i * 20);
                                }
                            }

                            if (step === 0) {
                                ctx.fillStyle = '#6e7681';
                                ctx.fillText('Click "Step" to begin forward substitution', 30, traceY + 22);
                            }

                            if (step === 6) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('Done! Solution: x = (8.5, -6, 6)', 20, traceY + 90);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Solve the lower-triangular system \\(Lc = b\\) by forward substitution, where \\[L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -3 & 1 & 0 \\\\ 2 & 4 & 1 \\end{pmatrix}, \\qquad b = \\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix}.\\]',
                    hint: 'Compute \\(c_1 = b_1\\), then \\(c_2 = b_1 - l_{21}c_1\\), then \\(c_3 = b_3 - l_{31}c_1 - l_{32}c_2\\).',
                    solution: '\\(c_1 = 2\\). Then \\(c_2 = 1 - (-3)(2) = 7\\). Then \\(c_3 = -3 - 2(2) - 4(7) = -3 - 4 - 28 = -35\\). So \\(c = (2, 7, -35)^T\\).'
                },
                {
                    question: 'Solve the upper-triangular system \\(Ux = c\\) by back substitution, where \\[U = \\begin{pmatrix} 3 & -1 & 2 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & -1 \\end{pmatrix}, \\qquad c = \\begin{pmatrix} 9 \\\\ 8 \\\\ -3 \\end{pmatrix}.\\]',
                    hint: 'Start from the bottom: \\(x_3 = c_3 / u_{33}\\), then work upward.',
                    solution: '\\(x_3 = -3 / (-1) = 3\\). Then \\(x_2 = (8 - 4 \\cdot 3)/2 = -4/2 = -2\\). Then \\(x_1 = (9 - (-1)(-2) - 2 \\cdot 3)/3 = (9 - 2 - 6)/3 = 1/3\\). So \\(x = (1/3,\\, -2,\\, 3)^T\\).'
                },
                {
                    question: 'Prove that if \\(L\\) is a unit lower-triangular matrix, then \\(L^{-1}\\) is also unit lower triangular.',
                    hint: 'Use the column-by-column definition \\(L \\cdot L^{-1} = I\\) and solve by forward substitution. What do the diagonal entries of \\(L^{-1}\\) turn out to be?',
                    solution: 'Write \\(L^{-1} = X\\) so that \\(LX = I\\). The \\(j\\)-th column of \\(X\\) satisfies \\(Lx_j = e_j\\). By forward substitution (Prop 2.1(3)), \\(X\\) is lower triangular. For the diagonal: \\(1 \\cdot x_{jj} = (e_j)_j = 1\\) since \\(l_{jj} = 1\\), so \\(x_{jj} = 1\\) and \\(X\\) is unit lower triangular.'
                },
                {
                    question: 'Let \\(L\\) be \\(n \\times n\\) lower triangular. Show that forward substitution for \\(Lc = b\\) requires exactly \\(\\frac{n(n-1)}{2}\\) multiplications and \\(\\frac{n(n-1)}{2}\\) additions (assuming \\(L\\) is unit lower triangular).',
                    hint: 'Count the operations in the formula \\(c_i = b_i - \\sum_{j=1}^{i-1} l_{ij}c_j\\). The \\(i\\)-th step uses \\(i-1\\) multiplications.',
                    solution: 'Step \\(i\\) computes \\(c_i = b_i - \\sum_{j=1}^{i-1} l_{ij}c_j\\), which needs \\(i-1\\) multiplications and \\(i-1\\) subtractions. Summing from \\(i=1\\) to \\(n\\): total multiplications \\(= \\sum_{i=1}^n (i-1) = \\frac{n(n-1)}{2}\\), and similarly for additions.'
                },
                {
                    question: 'Compute the product \\[\\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & -1 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 3 & 5 & 1 \\end{pmatrix}\\] and verify that the result is unit lower triangular.',
                    hint: 'Use the standard row-by-column rule. Check that each diagonal entry is 1 and all entries above the diagonal are 0.',
                    solution: 'The product is \\(\\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 3 & 4 & 1 \\end{pmatrix}\\). Indeed: row 1 is \\((1,0,0)\\); row 2: \\((2,1,0)\\); row 3: \\((0+0+3,\\, 0-1+5,\\, 0+0+1) = (3,4,1)\\). The result is unit lower triangular, confirming Proposition 2.1(4).'
                }
            ]
        },

        // ===== SECTION 2: From Elimination to LU =====
        {
            id: 'sec-elimination-to-lu',
            title: 'From Elimination to LU',
            content: `
<h2>From Elimination to LU</h2>

<div class="env-block intuition">
<div class="env-title">Recording the Multipliers</div>
<div class="env-body">
<p>In Chapter 0, we performed Gaussian elimination by applying a sequence of elementary row operations to \\(A\\), producing an upper-triangular matrix \\(U\\). Each row operation "subtract \\(\\ell_{ij}\\) times row \\(j\\) from row \\(i\\)" can be encoded as left multiplication by an <em>elementary lower-triangular matrix</em>. The key insight of LU factorization is that when we undo all these operations, the multipliers \\(\\ell_{ij}\\) assemble neatly into a single lower-triangular matrix \\(L\\).</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 2.4 — Elementary Row Operation Matrix</div>
<div class="env-body">
<p>The matrix \\(E_{ij}(m)\\), obtained from the identity by placing \\(-m\\) in position \\((i, j)\\) with \\(i > j\\), represents the row operation "subtract \\(m\\) times row \\(j\\) from row \\(i\\)." It is unit lower triangular:</p>
\\[E_{ij}(m) = I - m \\, e_i e_j^T.\\]
<p>Its inverse is \\(E_{ij}(m)^{-1} = E_{ij}(-m)\\), obtained by simply flipping the sign of the multiplier.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.2</div>
<div class="env-body">
<p>For \\(n = 3\\), the operation "subtract \\(m\\) times row 1 from row 2" corresponds to:</p>
\\[E_{21}(m) = \\begin{pmatrix} 1 & 0 & 0 \\\\ -m & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\qquad E_{21}(m)^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ m & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}.\\]
</div>
</div>

<h3>Building \\(L\\) from the Multipliers</h3>

<p>Gaussian elimination (without row exchanges) applies a sequence of elimination matrices:</p>
\\[E_{n,n-1} \\cdots E_{32} \\cdot E_{31} \\cdot E_{21} \\cdot A = U.\\]
<p>Solving for \\(A\\):</p>
\\[A = E_{21}^{-1} \\, E_{31}^{-1} \\, E_{32}^{-1} \\cdots E_{n,n-1}^{-1} \\, U = L \\, U.\\]

<div class="env-block theorem">
<div class="env-title">Theorem 2.2 — The Multiplier Assembly Rule</div>
<div class="env-body">
<p>If Gaussian elimination on \\(A\\) proceeds without row exchanges, using multiplier \\(\\ell_{ij} = a_{ij}^{(j)} / a_{jj}^{(j)}\\) to eliminate position \\((i,j)\\), then:</p>
\\[L = \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ \\ell_{21} & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\ell_{n1} & \\ell_{n2} & \\cdots & 1 \\end{pmatrix}.\\]
<p>That is, the multipliers \\(\\ell_{ij}\\) go directly into position \\((i,j)\\) of \\(L\\), with 1s on the diagonal.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>We must show that the product \\(L = E_{21}^{-1} \\, E_{31}^{-1} \\, E_{32}^{-1} \\cdots\\) has the stated form. The key fact is that when elimination matrices for <em>different columns</em> are multiplied in the correct order, their entries do not interact. Specifically, \\(E_{ij}(-m)\\) places \\(m\\) in position \\((i,j)\\). When we multiply matrices that place entries in column \\(j\\) with matrices that place entries in column \\(j' > j\\), the column-\\(j\\) entries are not disturbed (because the \\((j, j')\\) entry of the accumulating product remains zero). Therefore the multipliers simply "fill in" to their natural positions.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.3 — A Complete 3x3 LU Factorization</div>
<div class="env-body">
<p>Factor \\(A = \\begin{pmatrix} 2 & 1 & -1 \\\\ 4 & 5 & 1 \\\\ -2 & 2 & 7 \\end{pmatrix}\\).</p>
<p><strong>Step 1.</strong> Eliminate below position \\((1,1)\\). Multipliers: \\(\\ell_{21} = 4/2 = 2\\), \\(\\ell_{31} = -2/2 = -1\\).</p>
\\[\\begin{pmatrix} 2 & 1 & -1 \\\\ 4 & 5 & 1 \\\\ -2 & 2 & 7 \\end{pmatrix} \\to \\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 3 \\\\ 0 & 3 & 6 \\end{pmatrix}.\\]
<p><strong>Step 2.</strong> Eliminate below position \\((2,2)\\). Multiplier: \\(\\ell_{32} = 3/3 = 1\\).</p>
\\[\\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 3 \\\\ 0 & 3 & 6 \\end{pmatrix} \\to \\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 3 \\\\ 0 & 0 & 3 \\end{pmatrix} = U.\\]
<p>So \\(L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -1 & 1 & 1 \\end{pmatrix}\\) and we verify \\(A = LU\\).</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark</div>
<div class="env-body">
<p>The beauty of this result is its simplicity. You perform ordinary Gaussian elimination exactly as in Chapter 0, and the multipliers you compute along the way are precisely the below-diagonal entries of \\(L\\). No extra work is needed.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-lu-stepper"></div>
`,
            visualizations: [
                {
                    id: 'viz-lu-stepper',
                    title: 'Interactive LU Decomposition Stepper',
                    description: 'Watch the matrix \\(A\\) being decomposed step by step. At each step the multiplier is computed, the elimination is applied to form \\(U\\), and the multiplier is placed into \\(L\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { width: 700, height: 460, scale: 1, originX: 0, originY: 0 });

                        // Matrix to decompose
                        const A0 = [[2, 1, -1], [4, 5, 1], [-2, 2, 7]];

                        let step = 0;
                        // States: 0=initial, 1=after E21, 2=after E31, 3=after E32 (done)
                        const states = [
                            { mat: [[2,1,-1],[4,5,1],[-2,2,7]], L: [[1,0,0],[0,1,0],[0,0,1]], msg: 'Initial matrix A', highlight: -1, mult: '' },
                            { mat: [[2,1,-1],[0,3,3],[-2,2,7]], L: [[1,0,0],[2,1,0],[0,0,1]], msg: 'R\u2082 \u2190 R\u2082 - 2R\u2081  (multiplier \u2113\u2082\u2081 = 2)', highlight: 1, mult: '\u2113\u2082\u2081 = 4/2 = 2' },
                            { mat: [[2,1,-1],[0,3,3],[0,3,6]], L: [[1,0,0],[2,1,0],[-1,0,1]], msg: 'R\u2083 \u2190 R\u2083 - (-1)R\u2081  (multiplier \u2113\u2083\u2081 = -1)', highlight: 2, mult: '\u2113\u2083\u2081 = -2/2 = -1' },
                            { mat: [[2,1,-1],[0,3,3],[0,0,3]], L: [[1,0,0],[2,1,0],[-1,1,1]], msg: 'R\u2083 \u2190 R\u2083 - 1\u00b7R\u2082  (multiplier \u2113\u2083\u2082 = 1)', highlight: 2, mult: '\u2113\u2083\u2082 = 3/3 = 1' }
                        ];

                        VizEngine.createButton(controls, 'Step', () => { if (step < 3) step++; draw(); });
                        VizEngine.createButton(controls, 'Reset', () => { step = 0; draw(); });

                        function draw() {
                            const ctx = viz.ctx;
                            viz.clear();
                            const s = states[step];

                            // Title
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(s.msg, 20, 25);

                            // Draw current matrix (working toward U)
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText(step === 3 ? 'U =' : 'Working matrix:', 20, 60);
                            viz.drawAugmentedMatrix(s.mat, null, 50, 80, step === 3 ? viz.colors.orange : viz.colors.white, s.highlight);

                            // Draw L
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('L =', 300, 60);
                            viz.drawAugmentedMatrix(s.L, null, 330, 80, viz.colors.teal, -1);

                            // Multiplier info
                            if (s.mult) {
                                ctx.fillStyle = viz.colors.purple;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.fillText('Multiplier: ' + s.mult, 20, 200);
                            }

                            // Original A for reference
                            ctx.fillStyle = '#6e7681';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Original A =', 20, 250);
                            viz.drawAugmentedMatrix(A0, null, 50, 268, '#6e7681', -1, 40, 24);

                            // Show A = LU check at the end
                            if (step === 3) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('A = LU factorization complete!', 20, 380);
                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Verify: L \u00d7 U reproduces the original matrix A.', 20, 402);
                            }

                            // Step indicator
                            ctx.fillStyle = '#6e7681';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Step ' + step + ' / 3', viz.width - 20, viz.height - 15);
                            ctx.textAlign = 'left';
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the LU factorization of \\(A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 3 & 8 & 7 \\\\ 2 & 6 & 10 \\end{pmatrix}\\).',
                    hint: 'Perform Gaussian elimination. The multipliers are \\(\\ell_{21} = 3\\), \\(\\ell_{31} = 2\\), and then \\(\\ell_{32} = ?\\).',
                    solution: 'Elimination: \\(R_2 - 3R_1\\): \\((0, 2, 4)\\). \\(R_3 - 2R_1\\): \\((0, 2, 8)\\). Then \\(R_3 - R_2\\): \\((0, 0, 4)\\). So \\(\\ell_{32} = 1\\), \\(U = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 4 \\end{pmatrix}\\), \\(L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 3 & 1 & 0 \\\\ 2 & 1 & 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Why does the inverse of \\(E_{ij}(m)\\) simply flip the sign of the multiplier? Give both an algebraic and an intuitive explanation.',
                    hint: 'Algebraically, compute \\(E_{ij}(m) \\cdot E_{ij}(-m)\\). Intuitively, think about what "undo" means for a row operation.',
                    solution: 'Algebraically: \\((I - me_ie_j^T)(I + me_ie_j^T) = I - m^2 e_i e_j^T e_i e_j^T = I\\), since \\(e_j^T e_i = 0\\) for \\(i \\neq j\\). Intuitively: if we subtracted \\(m\\) times row \\(j\\) from row \\(i\\), the undo operation adds \\(m\\) times row \\(j\\) back to row \\(i\\).'
                },
                {
                    question: 'Show by direct computation that in the \\(3 \\times 3\\) case, \\(E_{21}^{-1} E_{31}^{-1} E_{32}^{-1}\\) places all multipliers in their natural positions (Theorem 2.2).',
                    hint: 'Write out the three \\(3 \\times 3\\) inverse-elimination matrices and multiply them left to right.',
                    solution: 'We have \\(E_{21}^{-1} = \\begin{pmatrix}1&0&0\\\\\\ell_{21}&1&0\\\\0&0&1\\end{pmatrix}\\), \\(E_{31}^{-1} = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\\\ell_{31}&0&1\\end{pmatrix}\\), \\(E_{32}^{-1} = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&\\ell_{32}&1\\end{pmatrix}\\). Their product is \\(\\begin{pmatrix}1&0&0\\\\\\ell_{21}&1&0\\\\\\ell_{31}&\\ell_{32}&1\\end{pmatrix}\\). The key is that multiplying by \\(E_{32}^{-1}\\) on the right adds \\(\\ell_{32}\\) to position \\((3,2)\\) without disturbing the column-1 entries.'
                },
                {
                    question: 'Consider \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}\\). Does \\(A = LU\\) exist (without row exchanges)? Why or why not?',
                    hint: 'What happens at the first step of Gaussian elimination?',
                    solution: 'No. The pivot \\(a_{11} = 0\\), so we cannot form the multiplier \\(\\ell_{21} = a_{21}/a_{11}\\). Elimination fails without a row exchange. We will handle this case in Section 4 with permutation matrices.'
                },
                {
                    question: 'If \\(A = LU\\) with \\(L\\) unit lower triangular, is the factorization unique (given that \\(U\\) has nonzero diagonal)?',
                    hint: 'Suppose \\(A = L_1 U_1 = L_2 U_2\\). What can you say about \\(L_2^{-1} L_1\\)?',
                    solution: 'Yes. If \\(L_1 U_1 = L_2 U_2\\), then \\(L_2^{-1} L_1 = U_2 U_1^{-1}\\). The left side is unit lower triangular (product of unit lower-triangular matrices); the right side is upper triangular. A matrix that is simultaneously lower triangular and upper triangular must be diagonal. Since the left side has all diagonal entries equal to 1, we get \\(L_2^{-1}L_1 = I\\), so \\(L_1 = L_2\\) and \\(U_1 = U_2\\).'
                }
            ]
        },

        // ===== SECTION 3: The LU Factorization Algorithm =====
        {
            id: 'sec-lu-algorithm',
            title: 'The LU Factorization Algorithm',
            content: `
<h2>The LU Factorization Algorithm</h2>

<p>We now formalize the algorithm and state the precise conditions under which \\(A = LU\\) exists.</p>

<div class="env-block theorem">
<div class="env-title">Theorem 2.3 — Existence of LU Factorization</div>
<div class="env-body">
<p>An \\(n \\times n\\) matrix \\(A\\) admits a factorization \\(A = LU\\) with \\(L\\) unit lower triangular and \\(U\\) upper triangular if and only if all leading principal minors of \\(A\\) are nonzero:</p>
\\[\\det(A_k) \\neq 0 \\quad \\text{for } k = 1, 2, \\ldots, n-1,\\]
<p>where \\(A_k\\) is the \\(k \\times k\\) upper-left submatrix of \\(A\\). When the factorization exists, it is unique.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof sketch</div>
<div class="env-body">
<p><em>(Necessity.)</em> If \\(A = LU\\), then \\(A_k = L_k U_k\\) where \\(L_k, U_k\\) are the leading \\(k \\times k\\) submatrices of \\(L, U\\). Since \\(\\det(L_k) = 1\\), we have \\(\\det(A_k) = \\det(U_k) = u_{11} \\cdots u_{kk}\\). For elimination to succeed at step \\(k\\), we need the pivot \\(u_{kk} \\neq 0\\), which requires \\(\\det(A_k) \\neq 0\\).</p>
<p><em>(Sufficiency.)</em> If every leading principal minor is nonzero, then at each step of elimination, the pivot is the ratio \\(\\det(A_k)/\\det(A_{k-1}) \\neq 0\\), so the multipliers are well-defined and elimination proceeds to completion.</p>
<p><em>(Uniqueness.)</em> See Exercise 5 from Section 2.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block warning">
<div class="env-title">When LU Fails</div>
<div class="env-body">
<p>The matrix \\(A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}\\) has \\(\\det(A_1) = 1 \\neq 0\\) but \\(\\det(A) = 0\\). So \\(A = LU\\) exists but \\(U\\) is singular: \\(L = \\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}\\), \\(U = \\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}\\). This is fine; the theorem only requires \\(\\det(A_k) \\neq 0\\) for \\(k < n\\).</p>
<p>In contrast, \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}\\) has \\(\\det(A_1) = 0\\), so no LU factorization exists without row exchanges.</p>
</div>
</div>

<h3>The Algorithm</h3>

<p>The standard in-place LU algorithm overwrites \\(A\\) with both \\(L\\) and \\(U\\) (since the diagonal of \\(L\\) is known to be all 1s, it need not be stored).</p>

<div class="env-block definition">
<div class="env-title">Algorithm: In-place LU Factorization</div>
<div class="env-body">
<p><strong>Input:</strong> \\(n \\times n\\) matrix \\(A\\) with nonzero leading principal minors.</p>
<p><strong>Output:</strong> \\(A\\) is overwritten so that its upper triangle (including diagonal) stores \\(U\\) and its strict lower triangle stores the multipliers of \\(L\\).</p>
<pre style="color:#c9d1d9;font-size:0.85rem;line-height:1.6;">
for k = 1 to n-1:
    for i = k+1 to n:
        A[i][k] = A[i][k] / A[k][k]        // multiplier
        for j = k+1 to n:
            A[i][j] = A[i][j] - A[i][k] * A[k][j]  // eliminate
</pre>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 2.3 — Operation Count</div>
<div class="env-body">
<p>The LU factorization of an \\(n \\times n\\) matrix requires \\(\\frac{2}{3}n^3 + \\mathcal{O}(n^2)\\) floating-point operations. Once \\(L\\) and \\(U\\) are known, each solve \\(Ax = b\\) costs only \\(2n^2 + \\mathcal{O}(n)\\) operations.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>At step \\(k\\) of elimination, we compute \\(n - k\\) multipliers and update an \\((n-k) \\times (n-k)\\) submatrix, requiring \\((n-k)^2\\) multiply-add pairs. The total is:</p>
\\[\\sum_{k=1}^{n-1}(n-k)^2 = \\sum_{m=1}^{n-1} m^2 = \\frac{(n-1)n(2n-1)}{6} \\approx \\frac{n^3}{3}.\\]
<p>Counting both multiplications and additions doubles this to \\(\\frac{2}{3}n^3\\). Each subsequent solve requires one forward substitution (\\(n^2\\)) and one back substitution (\\(n^2\\)).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.4 — Cost Comparison</div>
<div class="env-body">
<p>Suppose we need to solve \\(Ax_i = b_i\\) for \\(m = 1000\\) different right-hand sides, with \\(n = 500\\).</p>
<ul>
<li><strong>Repeated elimination:</strong> \\(m \\cdot \\frac{2}{3}n^3 \\approx 8.3 \\times 10^{10}\\) operations.</li>
<li><strong>LU then solve:</strong> \\(\\frac{2}{3}n^3 + m \\cdot 2n^2 \\approx 8.3 \\times 10^7 + 5 \\times 10^8 \\approx 5.8 \\times 10^8\\) operations.</li>
</ul>
<p>The LU approach is roughly <strong>140 times faster</strong>.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Connection to \\(A^{-1}\\)</div>
<div class="env-body">
<p>Computing \\(A^{-1}\\) explicitly is equivalent to solving \\(AX = I\\), which means \\(n\\) right-hand sides. Using LU, this costs \\(\\frac{2}{3}n^3 + n \\cdot 2n^2 = \\frac{2}{3}n^3 + 2n^3 \\approx \\frac{8}{3}n^3\\). But if you only need to solve \\(Ax = b\\) for a few right-hand sides, storing \\(L\\) and \\(U\\) is far more efficient than computing \\(A^{-1}\\).</p>
</div>
</div>
`,
            exercises: [
                {
                    question: 'Verify the leading principal minor condition for \\(A = \\begin{pmatrix} 2 & 4 & -2 \\\\ 1 & 3 & 1 \\\\ -1 & 1 & 5 \\end{pmatrix}\\), then compute the LU factorization.',
                    hint: 'Check \\(\\det(A_1) = 2\\) and \\(\\det(A_2) = \\det\\begin{pmatrix}2&4\\\\1&3\\end{pmatrix} = 2\\).',
                    solution: '\\(\\det(A_1) = 2 \\neq 0\\), \\(\\det(A_2) = 6 - 4 = 2 \\neq 0\\). So LU exists. Elimination: \\(\\ell_{21} = 1/2\\), \\(\\ell_{31} = -1/2\\). After step 1: rows become \\((2,4,-2)\\), \\((0,1,2)\\), \\((0,3,4)\\). Then \\(\\ell_{32} = 3\\). After step 2: \\((0,0,-2)\\). So \\(U = \\begin{pmatrix}2&4&-2\\\\0&1&2\\\\0&0&-2\\end{pmatrix}\\), \\(L = \\begin{pmatrix}1&0&0\\\\1/2&1&0\\\\-1/2&3&1\\end{pmatrix}\\).'
                },
                {
                    question: 'Prove that the pivots of \\(U\\) satisfy \\(u_{kk} = \\det(A_k) / \\det(A_{k-1})\\) for \\(k \\geq 1\\) (with \\(\\det(A_0) = 1\\)).',
                    hint: 'Use the fact that \\(\\det(A_k) = \\det(L_k)\\det(U_k) = u_{11} u_{22} \\cdots u_{kk}\\).',
                    solution: 'Since \\(A_k = L_k U_k\\) and \\(\\det(L_k) = 1\\), we have \\(\\det(A_k) = \\prod_{i=1}^k u_{ii}\\). Thus \\(u_{kk} = \\det(A_k)/\\det(A_{k-1})\\).'
                },
                {
                    question: 'Show that if \\(A\\) is symmetric and has an LU factorization \\(A = LU\\), then \\(A\\) can be written as \\(A = LDL^T\\) where \\(D\\) is diagonal.',
                    hint: 'Write \\(U = DU_0\\) where \\(D = \\text{diag}(u_{11}, \\ldots, u_{nn})\\) and \\(U_0\\) is unit upper triangular. Use symmetry \\(A = A^T\\).',
                    solution: 'Write \\(A = LU = L(DU_0)\\) where \\(U_0\\) has 1s on the diagonal. Then \\(A^T = U_0^T D L^T\\). Since \\(A = A^T\\), we get \\(LDU_0 = U_0^T D L^T\\). The left side is \\(L \\cdot (DU_0)\\) and \\(U_0^T\\) is unit lower triangular. By uniqueness of LU, \\(L = U_0^T\\), so \\(U_0 = L^T\\) and \\(A = LDL^T\\).'
                },
                {
                    question: 'How many floating-point multiplications does the LU algorithm use for a \\(4 \\times 4\\) matrix? Count exactly.',
                    hint: 'At step \\(k\\), there are \\(n-k\\) multipliers to compute and \\((n-k)^2\\) multiply-subtract updates.',
                    solution: 'Step \\(k=1\\): 3 multipliers + \\(3 \\times 3 = 9\\) updates = 12 multiplications. Step \\(k=2\\): 2 multipliers + \\(2 \\times 2 = 4\\) updates = 6. Step \\(k=3\\): 1 multiplier + 1 update = 2. Total: \\(12 + 6 + 2 = 20\\) multiplications. (The formula gives \\(\\sum_{k=1}^{3}(4-k)+(4-k)^2 = \\sum_{m=1}^{3}m + m^2 = 6 + 14 = 20\\).)'
                },
                {
                    question: 'For which \\(2 \\times 2\\) matrices \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\) does the LU factorization exist? Write out \\(L\\) and \\(U\\) explicitly.',
                    hint: 'The only leading principal minor condition is \\(\\det(A_1) = a \\neq 0\\).',
                    solution: 'LU exists if and only if \\(a \\neq 0\\). Then \\(\\ell_{21} = c/a\\) and \\(L = \\begin{pmatrix}1&0\\\\c/a&1\\end{pmatrix}\\), \\(U = \\begin{pmatrix}a&b\\\\0&d - bc/a\\end{pmatrix}\\). The second pivot is \\(d - bc/a = (ad-bc)/a = \\det(A)/a\\), which may be zero (\\(A\\) may be singular).'
                }
            ]
        },

        // ===== SECTION 4: Row Exchanges and PA = LU =====
        {
            id: 'sec-pa-lu',
            title: 'Row Exchanges and PA = LU',
            content: `
<h2>Row Exchanges and PA = LU</h2>

<div class="env-block intuition">
<div class="env-title">What If a Pivot Is Zero?</div>
<div class="env-body">
<p>When Gaussian elimination encounters a zero (or dangerously small) pivot, it swaps rows to bring a nonzero entry into the pivot position. Row exchanges are represented by <em>permutation matrices</em>, and the factorization generalizes to \\(PA = LU\\), where \\(P\\) is a permutation matrix that records all the row swaps.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 2.5 — Permutation Matrix</div>
<div class="env-body">
<p>A <strong>permutation matrix</strong> \\(P\\) is obtained by rearranging the rows (or columns) of the identity matrix. Equivalently, \\(P\\) is a square matrix with exactly one 1 in each row and each column, and 0s elsewhere.</p>
<p>Key properties:</p>
<ul>
<li>\\(P\\) is orthogonal: \\(P^{-1} = P^T\\).</li>
<li>\\(\\det(P) = \\pm 1\\) (\\(+1\\) for even permutations, \\(-1\\) for odd).</li>
<li>\\(PA\\) reorders the rows of \\(A\\) according to the permutation.</li>
</ul>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 2.4 — Permutation Matrices Form a Group</div>
<div class="env-body">
<p>The set of \\(n \\times n\\) permutation matrices forms a group under multiplication. This group has \\(n!\\) elements and is isomorphic to the symmetric group \\(S_n\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.5 — The Six 3x3 Permutation Matrices</div>
<div class="env-body">
<p>For \\(n = 3\\), there are \\(3! = 6\\) permutation matrices, corresponding to the six ways to reorder three rows:</p>
\\[I = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix},\\quad P_{12} = \\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix},\\quad P_{13} = \\begin{pmatrix}0&0&1\\\\0&1&0\\\\1&0&0\\end{pmatrix},\\]
\\[P_{23} = \\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix},\\quad P_{123} = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix},\\quad P_{132} = \\begin{pmatrix}0&1&0\\\\0&0&1\\\\1&0&0\\end{pmatrix}.\\]
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 2.4 — PA = LU Factorization</div>
<div class="env-body">
<p>Every invertible \\(n \\times n\\) matrix \\(A\\) admits a factorization</p>
\\[PA = LU,\\]
<p>where \\(P\\) is a permutation matrix, \\(L\\) is unit lower triangular with \\(|\\ell_{ij}| \\leq 1\\), and \\(U\\) is upper triangular. This is the factorization produced by Gaussian elimination with <strong>partial pivoting</strong>.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof sketch</div>
<div class="env-body">
<p>At each step \\(k\\) of elimination, partial pivoting selects the entry of largest absolute value in column \\(k\\) (at or below the diagonal) as the pivot, swapping rows if necessary. Because the pivot is the largest entry, all multipliers satisfy \\(|\\ell_{ij}| \\leq 1\\). The permutation matrix \\(P\\) accumulates all row swaps. Since \\(A\\) is invertible, there is always a nonzero entry to use as a pivot, so the algorithm completes.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 2.6 — Partial Pivoting</div>
<div class="env-body">
<p>At step \\(k\\), <strong>partial pivoting</strong> selects the pivot row \\(r\\) satisfying</p>
\\[|a_{rk}^{(k)}| = \\max_{i \\geq k} |a_{ik}^{(k)}|,\\]
<p>then swaps rows \\(k\\) and \\(r\\) before computing the multipliers. This ensures numerical stability by keeping multipliers bounded.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.6</div>
<div class="env-body">
<p>Factor \\(A = \\begin{pmatrix} 0 & 2 & 1 \\\\ 1 & 1 & 0 \\\\ 2 & 0 & 3 \\end{pmatrix}\\) using \\(PA = LU\\).</p>
<p><strong>Step 1.</strong> Column 1: largest entry is \\(|a_{31}| = 2\\). Swap rows 1 and 3:</p>
\\[\\begin{pmatrix} 2 & 0 & 3 \\\\ 1 & 1 & 0 \\\\ 0 & 2 & 1 \\end{pmatrix}.\\]
<p>Multipliers: \\(\\ell_{21} = 1/2\\), \\(\\ell_{31} = 0\\). After elimination:</p>
\\[\\begin{pmatrix} 2 & 0 & 3 \\\\ 0 & 1 & -3/2 \\\\ 0 & 2 & 1 \\end{pmatrix}.\\]
<p><strong>Step 2.</strong> Column 2, rows 2-3: largest is \\(|a_{32}| = 2\\). Swap rows 2 and 3:</p>
\\[\\begin{pmatrix} 2 & 0 & 3 \\\\ 0 & 2 & 1 \\\\ 0 & 1 & -3/2 \\end{pmatrix}.\\]
<p>Multiplier: \\(\\ell_{32} = 1/2\\). After elimination:</p>
\\[U = \\begin{pmatrix} 2 & 0 & 3 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & -2 \\end{pmatrix}.\\]
<p>The final permutation and factors are:</p>
\\[P = \\begin{pmatrix}0&0&1\\\\0&1&0\\\\1&0&0\\end{pmatrix} \\cdot \\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix} = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix},\\]
\\[L = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\1/2&1/2&1\\end{pmatrix}.\\]
<p>(Note: when rows are swapped during elimination, the corresponding multipliers in \\(L\\) must also be rearranged.)</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Why Partial Pivoting Matters</div>
<div class="env-body">
<p>Without pivoting, a small pivot like \\(10^{-15}\\) produces multipliers of order \\(10^{15}\\), amplifying rounding errors catastrophically. Partial pivoting ensures \\(|\\ell_{ij}| \\leq 1\\), which dramatically improves numerical stability. In practice, all serious implementations of LU factorization use partial pivoting.</p>
</div>
</div>
`,
            exercises: [
                {
                    question: 'How many \\(4 \\times 4\\) permutation matrices are there? How many of them have \\(\\det(P) = +1\\)?',
                    hint: 'There are \\(4!\\) permutation matrices. Even permutations have determinant \\(+1\\).',
                    solution: 'There are \\(4! = 24\\) permutation matrices. Exactly half, i.e., 12, are even permutations with \\(\\det(P) = +1\\), and 12 are odd permutations with \\(\\det(P) = -1\\).'
                },
                {
                    question: 'Prove that \\(P^{-1} = P^T\\) for any permutation matrix.',
                    hint: 'Compute \\((P^T P)_{ij}\\). The \\((i,j)\\) entry is \\(\\sum_k P_{ki} P_{kj}\\). When is this nonzero?',
                    solution: '\\((P^T P)_{ij} = \\sum_k P_{ki} P_{kj}\\). Since each column of \\(P\\) has exactly one 1, \\(P_{ki} P_{kj}\\) is nonzero only if columns \\(i\\) and \\(j\\) both have their 1 in the same row \\(k\\). If \\(i \\neq j\\), this is impossible (each row has exactly one 1), so the sum is 0. If \\(i = j\\), exactly one row \\(k\\) has \\(P_{ki} = 1\\), so the sum is 1. Hence \\(P^T P = I\\).'
                },
                {
                    question: 'Compute the \\(PA = LU\\) factorization of \\(A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\) using partial pivoting.',
                    hint: 'The largest entry in column 1 is 3, so swap rows 1 and 2 first.',
                    solution: 'Swap rows: \\(P = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\), \\(PA = \\begin{pmatrix}3&4\\\\1&2\\end{pmatrix}\\). Multiplier \\(\\ell_{21} = 1/3\\). Then \\(U = \\begin{pmatrix}3&4\\\\0&2/3\\end{pmatrix}\\), \\(L = \\begin{pmatrix}1&0\\\\1/3&1\\end{pmatrix}\\). Check: \\(LU = \\begin{pmatrix}3&4\\\\1&2\\end{pmatrix} = PA\\).'
                },
                {
                    question: 'Show that if \\(P\\) is a permutation matrix and \\(L\\) is lower triangular, then \\(PLP^T\\) is generally <em>not</em> lower triangular. Why does this matter for \\(PA = LU\\)?',
                    hint: 'Try \\(P = P_{12}\\) (swap rows 1 and 2) and \\(L = \\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}\\).',
                    solution: '\\(PLP^T = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix} = \\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}\\), which is upper triangular, not lower. This is why we cannot simply factor \\(A = LU\\) and then permute; the permutation must be applied to \\(A\\) before factoring, i.e., we factor \\(PA\\), not \\(A\\).'
                },
                {
                    question: 'In the \\(PA = LU\\) factorization, explain how to solve \\(Ax = b\\): write down the three steps explicitly.',
                    hint: 'Rewrite \\(Ax = b\\) as \\(LUx = Pb\\), then use forward and back substitution.',
                    solution: 'Step 1: Compute \\(Pb\\) (reorder entries of \\(b\\) according to \\(P\\)). Step 2: Solve \\(Lc = Pb\\) by forward substitution. Step 3: Solve \\(Ux = c\\) by back substitution. Total cost is \\(\\mathcal{O}(n^2)\\) after the \\(\\mathcal{O}(n^3)\\) factorization.'
                }
            ]
        },

        // ===== SECTION 5: Applications: Solving Multiple Systems =====
        {
            id: 'sec-applications',
            title: 'Applications: Solving Multiple Systems',
            content: `
<h2>Applications: Solving Multiple Systems</h2>

<div class="env-block intuition">
<div class="env-title">The Power of Factorization</div>
<div class="env-body">
<p>The real payoff of LU factorization is not in solving a single system \\(Ax = b\\); for that, ordinary elimination is equally efficient. The payoff comes when we need to solve many systems with the <em>same</em> coefficient matrix \\(A\\) but different right-hand sides \\(b_1, b_2, \\ldots, b_m\\). We factor \\(A\\) once (\\(\\frac{2}{3}n^3\\) work), then each solve costs only \\(2n^2\\).</p>
</div>
</div>

<h3>Application 1: Computing the Inverse</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 2.5 — Computing \\(A^{-1}\\) via LU</div>
<div class="env-body">
<p>To compute \\(A^{-1}\\), solve \\(Ax_j = e_j\\) for \\(j = 1, \\ldots, n\\), where \\(e_j\\) is the \\(j\\)-th standard basis vector. The columns \\(x_1, \\ldots, x_n\\) of \\(A^{-1}\\) are obtained by \\(n\\) forward-back substitutions using the LU factors.</p>
<p>Total cost: \\(\\frac{2}{3}n^3 + 2n^3 = \\frac{8}{3}n^3\\).</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Don't Compute \\(A^{-1}\\) Unless You Need It</div>
<div class="env-body">
<p>A common mistake is to compute \\(A^{-1}\\) and then multiply \\(x = A^{-1}b\\). This is both slower and less numerically stable than solving \\(Ax = b\\) via LU directly. Only compute \\(A^{-1}\\) if you genuinely need the entries of the inverse matrix.</p>
</div>
</div>

<h3>Application 2: Determinant</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 2.6 — Determinant via LU</div>
<div class="env-body">
<p>If \\(PA = LU\\), then</p>
\\[\\det(A) = \\det(P^{-1}) \\cdot \\det(L) \\cdot \\det(U) = (-1)^s \\cdot \\prod_{i=1}^n u_{ii},\\]
<p>where \\(s\\) is the number of row exchanges performed by partial pivoting. This computes the determinant in \\(\\mathcal{O}(n^3)\\) operations, far faster than cofactor expansion (\\(\\mathcal{O}(n!)\\)).</p>
</div>
</div>

<h3>Application 3: Tridiagonal Systems</h3>

<div class="env-block definition">
<div class="env-title">Definition 2.7 — Tridiagonal Matrix</div>
<div class="env-body">
<p>A matrix is <strong>tridiagonal</strong> if \\(a_{ij} = 0\\) whenever \\(|i - j| > 1\\):</p>
\\[A = \\begin{pmatrix} d_1 & u_1 & & \\\\ l_2 & d_2 & u_2 & \\\\ & \\ddots & \\ddots & \\ddots \\\\ & & l_n & d_n \\end{pmatrix}.\\]
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 2.5 — Tridiagonal LU is \\(\\mathcal{O}(n)\\)</div>
<div class="env-body">
<p>The LU factorization of a tridiagonal matrix requires only \\(\\mathcal{O}(n)\\) operations (not \\(\\mathcal{O}(n^3)\\)). The resulting \\(L\\) is bidiagonal (lower) and \\(U\\) is bidiagonal (upper). Solving the system \\(Ax = b\\) is also \\(\\mathcal{O}(n)\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>At step \\(k\\), only one multiplier \\(\\ell_{k+1,k} = l_{k+1}/d_k'\\) is needed, and only one entry \\(d_{k+1}' = d_{k+1} - \\ell_{k+1,k} \\cdot u_k\\) is updated. Each step is \\(\\mathcal{O}(1)\\), and there are \\(n-1\\) steps, so the total is \\(\\mathcal{O}(n)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 2.7 — Tridiagonal System</div>
<div class="env-body">
<p>The tridiagonal system arising in cubic spline interpolation:</p>
\\[\\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 4 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix}.\\]
<p>LU: \\(\\ell_{21} = 1/2\\), \\(d_2' = 4 - 1/2 = 7/2\\), \\(\\ell_{32} = 2/7\\), \\(d_3' = 2 - 2/7 = 12/7\\).</p>
\\[L = \\begin{pmatrix}1&0&0\\\\1/2&1&0\\\\0&2/7&1\\end{pmatrix}, \\quad U = \\begin{pmatrix}2&1&0\\\\0&7/2&1\\\\0&0&12/7\\end{pmatrix}.\\]
<p>Forward substitution: \\(c_1 = 1\\), \\(c_2 = 5 - 1/2 = 9/2\\), \\(c_3 = 1 - (2/7)(9/2) = 1 - 9/7 = -2/7\\).</p>
<p>Back substitution: \\(x_3 = (-2/7)/(12/7) = -1/6\\), \\(x_2 = (9/2 - (-1/6))/(7/2) = (28/6)/(7/2) = 4/3\\), \\(x_1 = (1 - 4/3)/2 = -1/6\\).</p>
</div>
</div>

<h3>Application 4: Matrix Equations</h3>

<div class="env-block remark">
<div class="env-title">Solving \\(AX = B\\)</div>
<div class="env-body">
<p>The matrix equation \\(AX = B\\), where \\(B\\) is \\(n \\times m\\), is equivalent to \\(m\\) separate systems \\(Ax_j = b_j\\). With LU factorization, the total cost is \\(\\frac{2}{3}n^3 + 2mn^2\\), compared to \\(\\frac{2}{3}mn^3\\) without LU.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-cost-comparison"></div>
`,
            visualizations: [
                {
                    id: 'viz-cost-comparison',
                    title: 'LU vs. Repeated Elimination: Cost Comparison',
                    description: 'Compare the operation count of solving \\(m\\) systems by repeated elimination vs. LU factorization. Adjust \\(n\\) and \\(m\\) with the sliders.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { width: 600, height: 360, scale: 1, originX: 0, originY: 0 });

                        let n = 100, m = 10;
                        const nSlider = VizEngine.createSlider(controls, 'n =', 10, 500, n, 10, v => { n = v; draw(); });
                        const mSlider = VizEngine.createSlider(controls, 'm =', 1, 100, m, 1, v => { m = v; draw(); });

                        function draw() {
                            const ctx = viz.ctx;
                            viz.clear();

                            const costElim = m * (2/3) * n * n * n;
                            const costLU = (2/3) * n * n * n + 2 * m * n * n;
                            const speedup = costElim / costLU;

                            const maxCost = Math.max(costElim, costLU);
                            const barMax = 480;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Cost Comparison: n = ' + n + ', m = ' + m + ' right-hand sides', 20, 25);

                            // Bar 1: Repeated elimination
                            const h1 = (costElim / maxCost) * barMax;
                            ctx.fillStyle = viz.colors.red + '88';
                            ctx.fillRect(60, 60, h1, 40);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Repeated elim.: ' + (costElim / 1e6).toFixed(1) + 'M ops', 60, 55);

                            // Bar 2: LU factorization
                            const h2 = (costLU / maxCost) * barMax;
                            ctx.fillStyle = viz.colors.green + '88';
                            ctx.fillRect(60, 130, h2, 40);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('LU + solves: ' + (costLU / 1e6).toFixed(1) + 'M ops', 60, 125);

                            // LU bar breakdown
                            const factorPart = (2/3) * n * n * n;
                            const solvePart = 2 * m * n * n;
                            const hf = (factorPart / maxCost) * barMax;
                            const hs = (solvePart / maxCost) * barMax;
                            ctx.fillStyle = viz.colors.teal + '44';
                            ctx.fillRect(60, 130, hf, 40);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(60 + hf, 130);
                            ctx.lineTo(60 + hf, 170);
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('Factor: ' + (factorPart / 1e6).toFixed(1) + 'M', 60, 185);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Solves: ' + (solvePart / 1e6).toFixed(1) + 'M', 200, 185);

                            // Speedup
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Speedup: ' + speedup.toFixed(1) + '\u00d7', viz.width / 2, 230);

                            // Formulas
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Repeated: m \u00d7 \u2154n\u00b3', 60, 270);
                            ctx.fillText('LU: \u2154n\u00b3 + 2mn\u00b2', 60, 290);
                            ctx.fillText('As m grows, the speedup approaches n/3.', 60, 320);
                            ctx.fillText('For n=' + n + ', max theoretical speedup \u2248 ' + (n/3).toFixed(0) + '\u00d7', 60, 340);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Using the LU factorization from Example 2.3, solve \\(Ax = b\\) for \\(b = (3, 13, 4)^T\\).',
                    hint: 'First solve \\(Lc = b\\) by forward substitution, then \\(Ux = c\\) by back substitution.',
                    solution: 'Forward: \\(c_1 = 3\\), \\(c_2 = 13 - 2(3) = 7\\), \\(c_3 = 4 - (-1)(3) - 1(7) = 0\\). Back: \\(x_3 = 0/3 = 0\\), \\(x_2 = (7 - 3 \\cdot 0)/3 = 7/3\\), \\(x_1 = (3 - 1 \\cdot 7/3 - (-1) \\cdot 0)/2 = (3 - 7/3)/2 = (2/3)/2 = 1/3\\). So \\(x = (1/3,\\, 7/3,\\, 0)^T\\).'
                },
                {
                    question: 'What is the operation count for computing \\(\\det(A)\\) via LU factorization? Compare this to cofactor expansion.',
                    hint: 'The LU factorization costs \\(\\frac{2}{3}n^3\\) and then the determinant is the product of \\(n\\) diagonal entries.',
                    solution: 'Via LU: \\(\\frac{2}{3}n^3 + n \\approx \\frac{2}{3}n^3\\) operations. Via cofactor expansion: at least \\(\\mathcal{O}(n!)\\) operations (the number of terms in the Leibniz formula). For \\(n = 20\\), \\(n^3 \\approx 8000\\) vs \\(n! \\approx 2.4 \\times 10^{18}\\); LU is astronomically faster.'
                },
                {
                    question: 'A diagonally dominant matrix \\(A\\) satisfies \\(|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|\\) for every \\(i\\). Prove that LU factorization of such a matrix succeeds without pivoting.',
                    hint: 'Show by induction that after each elimination step, the reduced matrix is still diagonally dominant, so the pivot is always nonzero.',
                    solution: 'At step 1, \\(|a_{11}| > \\sum_{j > 1} |a_{1j}|\\) ensures \\(a_{11} \\neq 0\\). After eliminating column 1, the Schur complement \\(S = A_{22} - (1/a_{11})a_{21}a_{12}^T\\) satisfies \\(|s_{ii}| > \\sum_{j \\neq i} |s_{ij}|\\) (can be verified by estimating the elimination updates). So \\(S\\) is diagonally dominant, and induction applies. At every step the pivot is nonzero, so no row exchanges are needed.'
                },
                {
                    question: 'Write the LU factorization of the \\(4 \\times 4\\) tridiagonal matrix \\(A\\) with \\(d_i = 4\\), \\(l_i = u_i = -1\\) (i.e., the negative discrete Laplacian).',
                    hint: 'Compute \\(\\ell_{k+1,k} = -1/d_k\'\\) and \\(d_{k+1}\' = 4 - \\ell_{k+1,k} \\cdot (-1)\\) iteratively.',
                    solution: '\\(d_1\' = 4\\). \\(\\ell_2 = -1/4\\), \\(d_2\' = 4 - (-1/4)(-1) = 15/4\\). \\(\\ell_3 = -1/(15/4) = -4/15\\), \\(d_3\' = 4 - (-4/15)(-1) = 56/15\\). \\(\\ell_4 = -1/(56/15) = -15/56\\), \\(d_4\' = 4 - (-15/56)(-1) = 209/56\\). The pattern: \\(d_k\' = (k+1)\\cdot\\text{something}\\), approaching but never reaching a limit.'
                },
                {
                    question: 'Suppose \\(A\\) is \\(1000 \\times 1000\\) and you need to solve \\(Ax = b\\) for 500 different right-hand sides. Compare the total operation count using (a) LU factorization and (b) Gaussian elimination on each system separately.',
                    hint: 'Use the formulas: LU factor = \\(\\frac{2}{3}n^3\\), each solve = \\(2n^2\\), each full elimination = \\(\\frac{2}{3}n^3\\).',
                    solution: '(a) LU: \\(\\frac{2}{3}(10^3)^3 + 500 \\times 2 \\times (10^3)^2 = \\frac{2}{3} \\times 10^9 + 10^9 = \\frac{5}{3} \\times 10^9 \\approx 1.67 \\times 10^9\\). (b) Repeated: \\(500 \\times \\frac{2}{3} \\times 10^9 = \\frac{1000}{3} \\times 10^9 \\approx 3.33 \\times 10^{11}\\). Speedup: \\(\\approx 200\\times\\).'
                },
                {
                    question: 'Prove that if \\(A\\) is invertible, then \\(\\det(A) = (-1)^s \\prod_{i=1}^n u_{ii}\\) where \\(PA = LU\\) and \\(s\\) is the number of row swaps.',
                    hint: 'Use \\(\\det(PA) = \\det(P)\\det(A)\\) and \\(\\det(PA) = \\det(L)\\det(U)\\).',
                    solution: '\\(PA = LU\\) gives \\(\\det(P)\\det(A) = \\det(L)\\det(U)\\). Since \\(L\\) is unit lower triangular, \\(\\det(L) = 1\\). Since \\(U\\) is upper triangular, \\(\\det(U) = \\prod u_{ii}\\). Each row swap changes the sign of \\(\\det(P)\\), so \\(\\det(P) = (-1)^s\\). Therefore \\(\\det(A) = (-1)^s \\prod u_{ii}\\).'
                }
            ]
        }
    ]
});
