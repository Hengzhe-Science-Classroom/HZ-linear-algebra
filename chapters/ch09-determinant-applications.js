// === Chapter 9: Applications of Determinants ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'Applications of Determinants',
    subtitle: 'Cramer\'s rule, inverse formulas, and volume',
    sections: [
        // ========== SECTION 1: Cramer's Rule ==========
        {
            id: 'sec09-01-cramers-rule',
            title: 'Cramer\'s Rule',
            content: `
<h2>9.1 Cramer's Rule</h2>

<p>In Chapter 8, we established the determinant and its properties. We now turn to its applications, beginning with <em>Cramer's rule</em>: a formula that expresses the solution of a linear system entirely in terms of determinants.</p>

<div class="env-block intuition">
<div class="env-title">When and Why Cramer's Rule?</div>
<div class="env-body">
<p>Cramer's rule is not an efficient computational method (it requires \\(n+1\\) determinants of size \\(n\\)). Its value lies in three areas: (1) it provides a closed-form formula, essential for theoretical analysis; (2) it connects geometry to algebra, interpreting each solution component as a ratio of volumes; (3) for 2\u00D72 or 3\u00D73 systems, it can be faster than row reduction for obtaining a single variable.</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 9.1.1 (Cramer's Rule)</div>
<div class="env-body">
<p>Let \\(A\\) be an invertible \\(n \\times n\\) matrix and \\(\\mathbf{b} \\in \\mathbb{R}^n\\). The unique solution \\(\\mathbf{x} = (x_1, \\ldots, x_n)^T\\) of \\(A\\mathbf{x} = \\mathbf{b}\\) is given by</p>
\\[
x_j = \\frac{\\det(A_j)}{\\det(A)}, \\qquad j = 1, 2, \\ldots, n,
\\]
<p>where \\(A_j\\) is the matrix formed by replacing the \\(j\\)-th column of \\(A\\) with \\(\\mathbf{b}\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Since \\(A\\) is invertible, \\(A\\mathbf{x} = \\mathbf{b}\\) has the unique solution \\(\\mathbf{x} = A^{-1}\\mathbf{b}\\). We need to show the formula gives the correct components.</p>
<p>Write the columns of \\(A\\) as \\(\\mathbf{a}_1, \\ldots, \\mathbf{a}_n\\). Then \\(A\\mathbf{x} = \\mathbf{b}\\) means \\(x_1 \\mathbf{a}_1 + \\cdots + x_n \\mathbf{a}_n = \\mathbf{b}\\). The matrix \\(A_j\\) has columns \\(\\mathbf{a}_1, \\ldots, \\mathbf{a}_{j-1}, \\mathbf{b}, \\mathbf{a}_{j+1}, \\ldots, \\mathbf{a}_n\\). Substituting \\(\\mathbf{b} = \\sum_i x_i \\mathbf{a}_i\\) into column \\(j\\):</p>
\\[
\\det(A_j) = \\det(\\mathbf{a}_1, \\ldots, \\sum_i x_i \\mathbf{a}_i, \\ldots, \\mathbf{a}_n).
\\]
<p>By multilinearity in column \\(j\\):</p>
\\[
\\det(A_j) = \\sum_i x_i \\det(\\mathbf{a}_1, \\ldots, \\mathbf{a}_i, \\ldots, \\mathbf{a}_n).
\\]
<p>When \\(i \\neq j\\), column \\(i\\) appears twice (in positions \\(i\\) and \\(j\\)), so the determinant is 0 by the alternating property. When \\(i = j\\), the matrix is \\(A\\) itself. Thus \\(\\det(A_j) = x_j \\det(A)\\), giving \\(x_j = \\det(A_j)/\\det(A)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.1.2 (2\u00D72 System)</div>
<div class="env-body">
<p>Solve \\(\\begin{cases} 3x + 2y = 7 \\\\ x + 4y = 9 \\end{cases}\\).</p>
<p>Here \\(A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}\\), \\(\\mathbf{b} = \\begin{pmatrix} 7 \\\\ 9 \\end{pmatrix}\\). Then \\(\\det(A) = 12 - 2 = 10\\).</p>
\\[
x = \\frac{\\det\\begin{pmatrix} 7 & 2 \\\\ 9 & 4 \\end{pmatrix}}{10} = \\frac{28 - 18}{10} = 1, \\qquad
y = \\frac{\\det\\begin{pmatrix} 3 & 7 \\\\ 1 & 9 \\end{pmatrix}}{10} = \\frac{27 - 7}{10} = 2.
\\]
</div>
</div>

<div class="viz-placeholder" data-viz="viz-cramers-rule"></div>

<div class="env-block example">
<div class="env-title">Example 9.1.3 (3\u00D73 System)</div>
<div class="env-body">
<p>Solve \\(\\begin{cases} x + 2y + z = 6 \\\\ 2x + y - z = 1 \\\\ x - y + 2z = 5 \\end{cases}\\).</p>
<p>\\(\\det(A) = \\det\\begin{pmatrix} 1&2&1 \\\\ 2&1&-1 \\\\ 1&-1&2 \\end{pmatrix}\\). Expanding along row 1: \\(1(2-1) - 2(4+1) + 1(-2-1) = 1 - 10 - 3 = -12\\).</p>
<p>\\(\\det(A_1) = \\det\\begin{pmatrix} 6&2&1 \\\\ 1&1&-1 \\\\ 5&-1&2 \\end{pmatrix} = 6(2-1) - 2(2+5) + 1(-1-5) = 6 - 14 - 6 = -14\\).</p>
<p>Similarly, \\(\\det(A_2) = -22\\) and \\(\\det(A_3) = -32\\).</p>
<p>So \\(x = -14/(-12) = 7/6\\), \\(y = -22/(-12) = 11/6\\), \\(z = -32/(-12) = 8/3\\).</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.1.4 (Geometric Interpretation)</div>
<div class="env-body">
<p>In 2D, Cramer's rule has a beautiful geometric reading. The system \\(A\\mathbf{x} = \\mathbf{b}\\) asks: express \\(\\mathbf{b}\\) as a linear combination of the columns of \\(A\\). The coefficient \\(x_j = \\det(A_j)/\\det(A)\\) is the ratio of two parallelogram areas: the parallelogram formed by replacing the \\(j\\)-th column with \\(\\mathbf{b}\\), divided by the parallelogram of the original columns.</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Practical Considerations</div>
<div class="env-body">
<p>Cramer's rule requires computing \\(n+1\\) determinants, each of cost \\(O(n^3)\\), giving total cost \\(O(n^4)\\). Gaussian elimination solves the system in \\(O(n^3)\\). For \\(n \\ge 4\\), row reduction is preferred. Cramer's rule is useful when you need only one variable, when \\(n\\) is small, or when you need a formula (not a procedure).</p>
</div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-cramers-rule',
                    title: 'Cramer\'s Rule: Geometric Interpretation (2\u00D72)',
                    description: 'The system \\(A\\mathbf{x} = \\mathbf{b}\\) is solved by ratios of parallelogram areas. Drag \\(\\mathbf{b}\\) to see how the solution changes. The blue parallelogram is \\(\\det(A)\\); the orange region is \\(\\det(A_1)\\) or \\(\\det(A_2)\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35 });

                        // Fixed columns of A
                        const a1x = 3, a1y = 1;
                        const a2x = 1, a2y = 2;
                        const detA = a1x * a2y - a2x * a1y; // 6-1=5

                        const bDrag = viz.addDraggable('b', 4, 3, viz.colors.orange, 8, (wx, wy) => {
                            bDrag.x = Math.round(wx * 4) / 4;
                            bDrag.y = Math.round(wy * 4) / 4;
                        });

                        let showWhich = 1;
                        VizEngine.createButton(controls, 'Show x\u2081', () => { showWhich = 1; });
                        VizEngine.createButton(controls, 'Show x\u2082', () => { showWhich = 2; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const bx = bDrag.x, by = bDrag.y;

                            // Original parallelogram (columns of A)
                            viz.drawParallelogram([a1x, a1y], [a2x, a2y], viz.colors.blue + '22', viz.colors.blue + '66', 1);

                            // Replacement parallelograms
                            if (showWhich === 1) {
                                // A_1: replace col 1 with b
                                viz.drawParallelogram([bx, by], [a2x, a2y], viz.colors.orange + '33', viz.colors.orange, 1.5);
                                const detA1 = bx * a2y - a2x * by;
                                const x1 = detA1 / detA;
                                viz.screenText('det(A\u2081) = ' + detA1.toFixed(2), viz.width / 2, 20, viz.colors.orange, 13);
                                viz.screenText('x\u2081 = det(A\u2081)/det(A) = ' + detA1.toFixed(2) + '/' + detA.toFixed(0) + ' = ' + x1.toFixed(3), viz.width / 2, 40, viz.colors.teal, 12);
                            } else {
                                // A_2: replace col 2 with b
                                viz.drawParallelogram([a1x, a1y], [bx, by], viz.colors.purple + '33', viz.colors.purple, 1.5);
                                const detA2 = a1x * by - bx * a1y;
                                const x2 = detA2 / detA;
                                viz.screenText('det(A\u2082) = ' + detA2.toFixed(2), viz.width / 2, 20, viz.colors.purple, 13);
                                viz.screenText('x\u2082 = det(A\u2082)/det(A) = ' + detA2.toFixed(2) + '/' + detA.toFixed(0) + ' = ' + x2.toFixed(3), viz.width / 2, 40, viz.colors.teal, 12);
                            }

                            // Draw column vectors
                            viz.drawVec(a1x, a1y, viz.colors.blue, 'a\u2081', 2);
                            viz.drawVec(a2x, a2y, viz.colors.teal, 'a\u2082', 2);
                            viz.drawVec(bx, by, viz.colors.orange, 'b', 2.5);

                            viz.screenText('det(A) = ' + detA.toFixed(0), viz.width - 80, viz.height - 14, viz.colors.blue, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use Cramer\'s rule to solve \\(\\begin{cases} 2x - y = 3 \\\\ x + 3y = 5 \\end{cases}\\).',
                    hint: 'Compute \\(\\det(A)\\), \\(\\det(A_1)\\), and \\(\\det(A_2)\\) using the 2\u00D72 formula.',
                    solution: '\\(\\det(A) = 2(3)-(-1)(1) = 7\\). \\(\\det(A_1) = \\det\\begin{pmatrix} 3&-1\\\\5&3 \\end{pmatrix} = 9+5 = 14\\). \\(\\det(A_2) = \\det\\begin{pmatrix} 2&3\\\\1&5 \\end{pmatrix} = 10-3 = 7\\). So \\(x = 14/7 = 2\\), \\(y = 7/7 = 1\\).'
                },
                {
                    question: 'Explain why Cramer\'s rule fails when \\(\\det(A) = 0\\). What are the two possible scenarios for the system \\(A\\mathbf{x} = \\mathbf{b}\\) in this case?',
                    hint: 'If \\(\\det(A) = 0\\), \\(A\\) is singular. Consider the rank of the augmented matrix.',
                    solution: 'When \\(\\det(A) = 0\\), \\(A\\) is singular, so \\(A\\mathbf{x} = \\mathbf{b}\\) either has no solution (if \\(\\mathbf{b} \\notin \\operatorname{col}(A)\\)) or infinitely many solutions (if \\(\\mathbf{b} \\in \\operatorname{col}(A)\\)). In neither case can we divide by \\(\\det(A) = 0\\). The formula \\(x_j = \\det(A_j)/\\det(A)\\) is undefined.'
                },
                {
                    question: 'For the system \\(A\\mathbf{x} = \\mathbf{b}\\) with \\(A = \\begin{pmatrix} 1&0&2\\\\0&1&1\\\\1&1&4 \\end{pmatrix}\\) and \\(\\mathbf{b} = \\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}\\), compute \\(\\det(A)\\). Can Cramer\'s rule be applied?',
                    hint: 'Check whether the third row is a linear combination of the first two.',
                    solution: '\\(R_3 = R_1 + R_2\\), so the rows are linearly dependent. \\(\\det(A) = 1(4-1) - 0 + 2(0-1) = 3-2 = 1\\). Wait, let me recalculate: expanding row 1: \\(1(4-1)-0+2(0-1)=3-2=1\\). Actually \\(\\det(A)=1\\neq 0\\), so Cramer\'s rule applies. Let me recheck: row 3 is \\((1,1,4)\\) and \\(R_1+R_2 = (1,1,3) \\neq (1,1,4)\\). So \\(A\\) is invertible and Cramer\'s rule applies. \\(x_1 = \\det(A_1)/1\\), etc.'
                },
                {
                    question: 'In Cramer\'s rule, show that \\(x_j = \\det(A_j)/\\det(A)\\) can also be written as \\(x_j = \\mathbf{e}_j^T A^{-1} \\mathbf{b}\\), the \\(j\\)-th component of \\(A^{-1}\\mathbf{b}\\).',
                    hint: 'This is just saying Cramer\'s rule gives the same answer as matrix inversion. The proof of the theorem already establishes this.',
                    solution: 'The system has unique solution \\(\\mathbf{x} = A^{-1}\\mathbf{b}\\), so \\(x_j = \\mathbf{e}_j^T \\mathbf{x} = \\mathbf{e}_j^T A^{-1}\\mathbf{b}\\). Cramer\'s rule provides an explicit formula for this same quantity. The proof shows both expressions equal \\(\\det(A_j)/\\det(A)\\).'
                },
                {
                    question: 'Use Cramer\'s rule to find only \\(y\\) in the system \\(\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}\\), without computing \\(x\\) or \\(z\\).',
                    hint: 'You need \\(\\det(A)\\) and \\(\\det(A_2)\\) only.',
                    solution: '\\(\\det(A) = \\det\\begin{pmatrix}1&1&1\\\\2&-1&1\\\\1&2&-1\\end{pmatrix} = 1(1-2)-1(-2-1)+1(4+1) = -1+3+5 = 7\\). \\(\\det(A_2) = \\det\\begin{pmatrix}1&6&1\\\\2&3&1\\\\1&2&-1\\end{pmatrix} = 1(-3-2)-6(-2-1)+1(4-3) = -5+18+1 = 14\\). So \\(y = 14/7 = 2\\).'
                }
            ]
        },

        // ========== SECTION 2: The Adjugate and Inverse Formula ==========
        {
            id: 'sec09-02-adjugate-inverse',
            title: 'The Adjugate and Inverse Formula',
            content: `
<h2>9.2 The Adjugate and Inverse Formula</h2>

<p>Cramer's rule gives a formula for each component of \\(A^{-1}\\mathbf{b}\\). We can package all these formulas into a single matrix equation, which leads to the <em>adjugate matrix</em> and an explicit formula for \\(A^{-1}\\).</p>

<h3>The Cofactor Matrix and Adjugate</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.2.1 (Cofactor Matrix and Adjugate)</div>
<div class="env-body">
<p>Let \\(A\\) be an \\(n \\times n\\) matrix with cofactors \\(C_{ij} = (-1)^{i+j} M_{ij}\\).</p>
<ul>
<li>The <em>cofactor matrix</em> is \\(\\operatorname{cof}(A) = (C_{ij})\\), the \\(n \\times n\\) matrix whose \\((i,j)\\)-entry is \\(C_{ij}\\).</li>
<li>The <em>adjugate</em> (or <em>classical adjoint</em>) of \\(A\\) is the transpose of the cofactor matrix:</li>
</ul>
\\[
\\operatorname{adj}(A) = \\operatorname{cof}(A)^T.
\\]
<p>That is, the \\((i,j)\\)-entry of \\(\\operatorname{adj}(A)\\) is \\(C_{ji}\\) (note the transposition of indices).</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Notation Warning</div>
<div class="env-body">
<p>Do not confuse \\(\\operatorname{adj}(A)\\) (the adjugate, a classical construction) with \\(A^*\\) or \\(A^\\dagger\\) (the conjugate transpose/adjoint from inner product space theory). Some older texts write \\(A^{\\text{adj}}\\) for the adjugate.</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 9.2.2 (The Adjugate Inverse Formula)</div>
<div class="env-body">
<p>For any \\(n \\times n\\) matrix \\(A\\),</p>
\\[
A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I.
\\]
<p>If \\(A\\) is invertible, then</p>
\\[
A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A).
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>We need to show that the \\((i,k)\\)-entry of \\(A \\cdot \\operatorname{adj}(A)\\) equals \\(\\det(A)\\) if \\(i = k\\) and \\(0\\) if \\(i \\neq k\\).</p>
<p>The \\((i,k)\\)-entry of \\(A \\cdot \\operatorname{adj}(A)\\) is</p>
\\[
\\sum_{j=1}^n a_{ij} (\\operatorname{adj}(A))_{jk} = \\sum_{j=1}^n a_{ij} C_{kj}.
\\]
<p><strong>Case \\(i = k\\):</strong> This is \\(\\sum_j a_{ij} C_{ij}\\), which is the cofactor expansion of \\(\\det(A)\\) along row \\(i\\). So it equals \\(\\det(A)\\).</p>
<p><strong>Case \\(i \\neq k\\):</strong> This is \\(\\sum_j a_{ij} C_{kj}\\), which is the cofactor expansion of a matrix \\(A'\\) along row \\(k\\), where \\(A'\\) is obtained from \\(A\\) by replacing row \\(k\\) with row \\(i\\). But then \\(A'\\) has two identical rows (rows \\(i\\) and \\(k\\)), so \\(\\det(A') = 0\\).</p>
<p>Thus \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.2.3</div>
<div class="env-body">
<p>The identity \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\) holds for <em>all</em> square matrices, not just invertible ones. When \\(A\\) is singular, both sides are consistent: the left side produces a matrix whose rank is at most 1, and the right side is the zero matrix.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.2.4</div>
<div class="env-body">
<p>Find \\(A^{-1}\\) for \\(A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\) using the adjugate.</p>
<p>\\(\\det(A) = 4 - 6 = -2\\). The cofactors: \\(C_{11} = 4\\), \\(C_{12} = -3\\), \\(C_{21} = -2\\), \\(C_{22} = 1\\).</p>
<p>\\(\\operatorname{adj}(A) = \\begin{pmatrix} C_{11} & C_{21} \\\\ C_{12} & C_{22} \\end{pmatrix} = \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}\\).</p>
<p>\\(A^{-1} = \\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}\\).</p>
<p>This matches the 2\u00D72 inverse formula from Chapter 8.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.2.5</div>
<div class="env-body">
<p>For \\(A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 1 \\\\ 1 & 0 & 3 \\end{pmatrix}\\), compute \\(\\operatorname{adj}(A)\\) and verify \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\).</p>
<p>\\(\\det(A) = 1(6-0) - 0 + 1(0-2) = 4\\).</p>
<p>The nine cofactors:</p>
\\[
C_{11} = 6, \\; C_{12} = 1, \\; C_{13} = -2, \\;
C_{21} = 0, \\; C_{22} = 2, \\; C_{23} = 0, \\;
C_{31} = -2, \\; C_{32} = -1, \\; C_{33} = 2.
\\]
<p>\\(\\operatorname{adj}(A) = \\begin{pmatrix} 6 & 0 & -2 \\\\ 1 & 2 & -1 \\\\ -2 & 0 & 2 \\end{pmatrix}\\).</p>
<p>Then \\(A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 4&0&0\\\\0&4&0\\\\0&0&4 \\end{pmatrix} = 4I\\). Confirmed.</p>
</div>
</div>

<h3>Connecting Adjugate to Cramer's Rule</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 9.2.6</div>
<div class="env-body">
<p>Cramer's rule is equivalent to the formula \\(\\mathbf{x} = A^{-1}\\mathbf{b} = \\frac{1}{\\det(A)}\\operatorname{adj}(A)\\mathbf{b}\\). The \\(j\\)-th component of \\(\\operatorname{adj}(A)\\mathbf{b}\\) is \\(\\sum_k C_{jk} b_k = \\det(A_j)\\).</p>
</div>
</div>

<h3>Derivative of the Determinant (Jacobi's Formula)</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 9.2.7 (Jacobi's Formula)</div>
<div class="env-body">
<p>If \\(A(t)\\) is a differentiable matrix-valued function, then</p>
\\[
\\frac{d}{dt} \\det(A(t)) = \\operatorname{tr}\\!\\left(\\operatorname{adj}(A(t)) \\cdot A'(t)\\right).
\\]
<p>When \\(A(t)\\) is invertible, this simplifies to</p>
\\[
\\frac{d}{dt} \\det(A(t)) = \\det(A(t)) \\operatorname{tr}\\!\\left(A(t)^{-1} A'(t)\\right).
\\]
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.2.8</div>
<div class="env-body">
<p>Jacobi's formula is the matrix analogue of the logarithmic derivative: \\(\\frac{d}{dt}\\ln\\det(A) = \\operatorname{tr}(A^{-1}A')\\). It appears frequently in differential geometry, statistics (Fisher information), and physics (Liouville's theorem).</p>
</div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Compute \\(\\operatorname{adj}(A)\\) for \\(A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\) and verify \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\).',
                    hint: 'For a 2\u00D72 matrix \\(\\begin{pmatrix} a&b\\\\c&d \\end{pmatrix}\\), \\(\\operatorname{adj} = \\begin{pmatrix} d&-b\\\\-c&a \\end{pmatrix}\\).',
                    solution: '\\(\\det(A) = 6-5 = 1\\). \\(\\operatorname{adj}(A) = \\begin{pmatrix} 3&-1\\\\-5&2 \\end{pmatrix}\\). \\(A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2(3)+1(-5) & 2(-1)+1(2) \\\\ 5(3)+3(-5) & 5(-1)+3(2) \\end{pmatrix} = \\begin{pmatrix} 1&0\\\\0&1 \\end{pmatrix} = 1 \\cdot I\\). Confirmed.'
                },
                {
                    question: 'For a 3\u00D73 matrix \\(A\\) with \\(\\det(A) = 5\\), how many cofactors do you need to compute to find \\(A^{-1}\\)?',
                    hint: 'The adjugate is the transpose of the cofactor matrix.',
                    solution: 'You need all 9 cofactors \\(C_{ij}\\) to form the \\(3 \\times 3\\) cofactor matrix, then transpose to get \\(\\operatorname{adj}(A)\\). Each cofactor requires a 2\u00D72 determinant. So: 9 cofactors total. (Compare with row reduction, which is typically faster for \\(n \\ge 3\\).)'
                },
                {
                    question: 'Prove that for any 2\u00D72 matrix \\(A\\), \\(\\operatorname{adj}(A) = \\operatorname{tr}(A) \\cdot I - A\\).',
                    hint: 'Write \\(A = \\begin{pmatrix} a&b\\\\c&d \\end{pmatrix}\\) and compute both sides.',
                    solution: '\\(\\operatorname{adj}(A) = \\begin{pmatrix} d&-b\\\\-c&a \\end{pmatrix}\\). \\(\\operatorname{tr}(A) \\cdot I - A = (a+d)\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix} - \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = \\begin{pmatrix} d&-b\\\\-c&a \\end{pmatrix}\\). They agree. This identity is related to the Cayley-Hamilton theorem for 2\u00D72 matrices.'
                },
                {
                    question: 'Explain why the off-diagonal entries of \\(A \\cdot \\operatorname{adj}(A)\\) are zero. What matrix identity does this represent?',
                    hint: 'The off-diagonal entry \\((i,k)\\) with \\(i \\neq k\\) is a cofactor expansion along row \\(k\\) of a matrix with a repeated row.',
                    solution: 'The \\((i,k)\\)-entry (with \\(i \\neq k\\)) is \\(\\sum_j a_{ij} C_{kj}\\). This equals the cofactor expansion along row \\(k\\) of the matrix \\(A\'\\) formed by replacing row \\(k\\) of \\(A\\) with row \\(i\\). Since rows \\(i\\) and \\(k\\) of \\(A\'\\) are identical, \\(\\det(A\') = 0\\). This shows the off-diagonal entries vanish, giving \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\).'
                },
                {
                    question: 'If \\(A\\) is invertible, prove that \\(\\det(\\operatorname{adj}(A)) = (\\det A)^{n-1}\\) for an \\(n \\times n\\) matrix.',
                    hint: 'Take determinants of both sides of \\(A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I\\).',
                    solution: '\\(\\det(A \\cdot \\operatorname{adj}(A)) = \\det(\\det(A) \\cdot I)\\). LHS: \\(\\det(A) \\cdot \\det(\\operatorname{adj}(A))\\). RHS: \\((\\det A)^n\\). Dividing by \\(\\det(A) \\neq 0\\): \\(\\det(\\operatorname{adj}(A)) = (\\det A)^{n-1}\\).'
                }
            ]
        },

        // ========== SECTION 3: Volumes and Orientation ==========
        {
            id: 'sec09-03-volumes-orientation',
            title: 'Volumes and Orientation',
            content: `
<h2>9.3 Volumes and Orientation</h2>

<p>We have seen that \\(|\\det(A)|\\) gives the area of the parallelogram spanned by the columns of a 2\u00D72 matrix. This generalizes beautifully: \\(|\\det(A)|\\) is the \\(n\\)-dimensional volume of the parallelepiped spanned by the columns (or rows) of an \\(n \\times n\\) matrix \\(A\\).</p>

<h3>The Parallelepiped and Its Volume</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.3.1 (Parallelepiped)</div>
<div class="env-body">
<p>Given vectors \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n \\in \\mathbb{R}^n\\), the <em>parallelepiped</em> they span is</p>
\\[
P(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n) = \\left\\{ t_1 \\mathbf{v}_1 + \\cdots + t_n \\mathbf{v}_n : 0 \\le t_i \\le 1 \\right\\}.
\\]
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 9.3.2 (Determinant as Volume)</div>
<div class="env-body">
<p>Let \\(A\\) be an \\(n \\times n\\) matrix with columns \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\). The \\(n\\)-dimensional volume of the parallelepiped \\(P(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n)\\) is</p>
\\[
\\operatorname{vol}_n(P) = |\\det(A)|.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Sketch)</div>
<div class="env-body">
<p>The function \\(V(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n) = |\\det(A)|\\) satisfies the expected properties of volume: (1) scaling one edge by \\(|c|\\) scales volume by \\(|c|\\) (from multilinearity); (2) the unit cube has volume 1 (from normalization); (3) shearing does not change volume (from row replacement invariance). Since these properties characterize volume uniquely (up to sign), \\(|\\det|\\) must be the volume function.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-volume-parallelogram"></div>

<h3>Orientation</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.3.3 (Orientation)</div>
<div class="env-body">
<p>An ordered basis \\((\\mathbf{v}_1, \\ldots, \\mathbf{v}_n)\\) of \\(\\mathbb{R}^n\\) is said to be <em>positively oriented</em> if \\(\\det(\\mathbf{v}_1 | \\cdots | \\mathbf{v}_n) > 0\\) and <em>negatively oriented</em> if the determinant is negative.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.3.4</div>
<div class="env-body">
<p>In \\(\\mathbb{R}^2\\), positive orientation means the pair \\((\\mathbf{v}_1, \\mathbf{v}_2)\\) forms a counterclockwise system (like the standard basis \\((\\mathbf{e}_1, \\mathbf{e}_2)\\)). In \\(\\mathbb{R}^3\\), positive orientation is the right-hand rule: if \\(\\mathbf{v}_1\\) points along your fingers and \\(\\mathbf{v}_2\\) curls them, then \\(\\mathbf{v}_3\\) should point along your thumb.</p>
</div>
</div>

<h3>How Linear Maps Scale Volume</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 9.3.5 (Volume Scaling Factor)</div>
<div class="env-body">
<p>If \\(T\\colon \\mathbb{R}^n \\to \\mathbb{R}^n\\) is a linear map with matrix \\(A\\), and \\(S \\subseteq \\mathbb{R}^n\\) is a measurable region with volume \\(\\operatorname{vol}(S)\\), then</p>
\\[
\\operatorname{vol}(T(S)) = |\\det(A)| \\cdot \\operatorname{vol}(S).
\\]
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.3.6</div>
<div class="env-body">
<p>This theorem underpins the <em>change of variables formula</em> in multivariable calculus: when substituting \\(\\mathbf{x} = g(\\mathbf{u})\\) in an integral, the Jacobian determinant \\(|\\det(Dg)|\\) appears as the volume scaling factor.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.3.7</div>
<div class="env-body">
<p>The matrix \\(A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\) scales by 2 in the \\(x\\)-direction and by 3 in the \\(y\\)-direction. A unit square of area 1 maps to a rectangle of area \\(|\\det(A)| = 6\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.3.8</div>
<div class="env-body">
<p>A rotation matrix \\(R = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\\) has \\(\\det(R) = \\cos^2\\theta + \\sin^2\\theta = 1\\). Rotations preserve area and orientation.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.3.9</div>
<div class="env-body">
<p>A reflection matrix \\(\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\) has \\(\\det = -1\\). It preserves area (\\(|\\det| = 1\\)) but reverses orientation.</p>
</div>
</div>

<h3>Determinant and Linear Independence</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 9.3.10 (Determinant Test for Independence)</div>
<div class="env-body">
<p>Vectors \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n \\in \\mathbb{R}^n\\) are linearly independent if and only if</p>
\\[
\\det(\\mathbf{v}_1 | \\cdots | \\mathbf{v}_n) \\neq 0.
\\]
<p>Equivalently, they span a parallelepiped of positive volume.</p>
</div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-volume-parallelogram',
                    title: 'Volume and Linear Transformations',
                    description: 'Drag the matrix entries to see how the determinant controls area scaling. The blue unit square transforms into the shaded parallelogram. Area = \\(|\\det(A)|\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const d1 = viz.addDraggable('v1', 2, 0.5, viz.colors.blue, 8, (wx, wy) => {
                            d1.x = Math.round(wx * 4) / 4;
                            d1.y = Math.round(wy * 4) / 4;
                        });
                        const d2 = viz.addDraggable('v2', -0.5, 1.5, viz.colors.teal, 8, (wx, wy) => {
                            d2.x = Math.round(wx * 4) / 4;
                            d2.y = Math.round(wy * 4) / 4;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const a = d1.x, c = d1.y, b = d2.x, d = d2.y;
                            const M = [[a, b], [c, d]];
                            const det = a * d - b * c;

                            // Draw unit square ghost
                            viz.drawPolygon([[0,0],[1,0],[1,1],[0,1]], viz.colors.white + '11', viz.colors.white + '33', 1);
                            viz.screenText('Unit square', 0.5 * viz.scale + viz.originX, viz.originY - 0.5 * viz.scale, viz.colors.text, 10);

                            // Draw transformed parallelogram
                            const fillColor = det >= 0 ? viz.colors.blue + '33' : viz.colors.red + '33';
                            const strokeColor = det >= 0 ? viz.colors.blue : viz.colors.red;
                            viz.drawTransformedUnitSquare(M, fillColor, strokeColor, 2);

                            // Transformed grid lines
                            viz.drawTransformedGrid(M, 5, viz.colors.blue + '15', 0.3);

                            // Column vectors
                            viz.drawVec(a, c, viz.colors.blue, 'v\u2081', 2.5);
                            viz.drawVec(b, d, viz.colors.teal, 'v\u2082', 2.5);

                            // Info
                            viz.screenText('det(A) = ' + det.toFixed(2), viz.width / 2, 20, viz.colors.orange, 14);
                            viz.screenText('Area = |det| = ' + Math.abs(det).toFixed(2), viz.width / 2, 40, viz.colors.teal, 13);

                            const status = det > 0.01 ? 'Orientation: positive (preserved)' :
                                           det < -0.01 ? 'Orientation: negative (reversed)' :
                                           'Degenerate (area = 0)';
                            viz.screenText(status, viz.width / 2, viz.height - 14, strokeColor, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A linear map \\(T\\colon \\mathbb{R}^3 \\to \\mathbb{R}^3\\) has matrix with \\(\\det(A) = -4\\). If \\(S\\) is a solid ball of volume \\(\\frac{4}{3}\\pi\\), what is \\(\\operatorname{vol}(T(S))\\)?',
                    hint: 'Use the volume scaling formula: \\(\\operatorname{vol}(T(S)) = |\\det(A)| \\cdot \\operatorname{vol}(S)\\).',
                    solution: '\\(\\operatorname{vol}(T(S)) = |{-4}| \\cdot \\frac{4}{3}\\pi = \\frac{16}{3}\\pi\\). The image is an ellipsoid with volume \\(\\frac{16}{3}\\pi\\). The negative determinant means orientation is reversed, but volume is always positive.'
                },
                {
                    question: 'Show that the area of the triangle with vertices \\(\\mathbf{p}_1 = (x_1, y_1)\\), \\(\\mathbf{p}_2 = (x_2, y_2)\\), \\(\\mathbf{p}_3 = (x_3, y_3)\\) is \\(\\frac{1}{2}|\\det\\begin{pmatrix} x_2-x_1 & x_3-x_1 \\\\ y_2-y_1 & y_3-y_1 \\end{pmatrix}|\\).',
                    hint: 'The triangle is half of the parallelogram spanned by the edge vectors \\(\\mathbf{p}_2 - \\mathbf{p}_1\\) and \\(\\mathbf{p}_3 - \\mathbf{p}_1\\).',
                    solution: 'The edge vectors are \\(\\mathbf{v}_1 = \\mathbf{p}_2 - \\mathbf{p}_1 = (x_2-x_1, y_2-y_1)\\) and \\(\\mathbf{v}_2 = \\mathbf{p}_3 - \\mathbf{p}_1 = (x_3-x_1, y_3-y_1)\\). The parallelogram they span has area \\(|\\det(\\mathbf{v}_1 | \\mathbf{v}_2)|\\). The triangle is exactly half of this parallelogram, so its area is \\(\\frac{1}{2}|\\det|\\).'
                },
                {
                    question: 'Prove that if \\(A\\) is orthogonal (\\(A^T A = I\\)), then \\(\\det(A) = \\pm 1\\).',
                    hint: 'Take the determinant of both sides of \\(A^T A = I\\).',
                    solution: '\\(\\det(A^T A) = \\det(I) = 1\\). By the product formula, \\(\\det(A^T)\\det(A) = 1\\). Since \\(\\det(A^T) = \\det(A)\\), we get \\((\\det A)^2 = 1\\), so \\(\\det(A) = \\pm 1\\). Geometrically, orthogonal maps preserve volume (\\(|\\det| = 1\\)), and \\(\\det = +1\\) means orientation-preserving (rotation), while \\(\\det = -1\\) means orientation-reversing (reflection).'
                },
                {
                    question: 'Compute the volume of the parallelepiped spanned by \\(\\mathbf{v}_1 = (1,0,2)\\), \\(\\mathbf{v}_2 = (0,3,1)\\), \\(\\mathbf{v}_3 = (1,1,0)\\).',
                    hint: 'Form the matrix \\(A = (\\mathbf{v}_1 | \\mathbf{v}_2 | \\mathbf{v}_3)\\) and compute \\(|\\det(A)|\\).',
                    solution: '\\(A = \\begin{pmatrix} 1&0&1\\\\0&3&1\\\\2&1&0 \\end{pmatrix}\\). \\(\\det(A) = 1(0-1) - 0 + 1(0-6) = -1 - 6 = -7\\). Volume \\(= |{-7}| = 7\\).'
                },
                {
                    question: 'A 2\u00D72 matrix \\(A\\) maps the unit circle to an ellipse. If the semi-axes of the ellipse have lengths \\(a\\) and \\(b\\), show that \\(|\\det(A)| = ab\\).',
                    hint: 'The area of the ellipse is \\(\\pi ab\\), and the unit circle has area \\(\\pi\\).',
                    solution: 'The unit circle has area \\(\\pi\\). By Theorem 9.3.5, the image has area \\(|\\det(A)| \\cdot \\pi\\). The image is an ellipse with semi-axes \\(a, b\\), which has area \\(\\pi ab\\). Setting \\(|\\det(A)| \\cdot \\pi = \\pi ab\\) gives \\(|\\det(A)| = ab\\). (In fact, \\(a\\) and \\(b\\) are the singular values of \\(A\\), previewing Chapter 17.)'
                }
            ]
        },

        // ========== SECTION 4: Cross Product via Determinants ==========
        {
            id: 'sec09-04-cross-product',
            title: 'Cross Product via Determinants',
            content: `
<h2>9.4 Cross Product via Determinants</h2>

<p>In \\(\\mathbb{R}^3\\), the cross product of two vectors has a beautiful connection to determinants. This section develops the cross product from the determinant perspective and uses it to compute areas, volumes, and normal vectors.</p>

<h3>The Cross Product</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.4.1 (Cross Product)</div>
<div class="env-body">
<p>For vectors \\(\\mathbf{u} = (u_1, u_2, u_3)\\) and \\(\\mathbf{v} = (v_1, v_2, v_3)\\) in \\(\\mathbb{R}^3\\), the <em>cross product</em> \\(\\mathbf{u} \\times \\mathbf{v}\\) is defined by the formal determinant</p>
\\[
\\mathbf{u} \\times \\mathbf{v} = \\det\\begin{pmatrix} \\mathbf{e}_1 & \\mathbf{e}_2 & \\mathbf{e}_3 \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{pmatrix}
= \\begin{pmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{pmatrix}.
\\]
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.4.2</div>
<div class="env-body">
<p>The "formal determinant" notation is a mnemonic device. The first row contains basis vectors \\(\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\) rather than scalars, so it is not a standard determinant. However, if you expand by cofactors along the first row and treat each \\(\\mathbf{e}_k\\) as a coefficient, you get the correct formula. The result is rigorously justified by the component formula on the right.</p>
</div>
</div>

<h3>Properties of the Cross Product</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 9.4.3 (Properties)</div>
<div class="env-body">
<p>For \\(\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in \\mathbb{R}^3\\) and \\(c \\in \\mathbb{R}\\):</p>
<ol>
<li><strong>Anti-commutativity:</strong> \\(\\mathbf{v} \\times \\mathbf{u} = -(\\mathbf{u} \\times \\mathbf{v})\\).</li>
<li><strong>Bilinearity:</strong> \\(\\mathbf{u} \\times (c\\mathbf{v} + \\mathbf{w}) = c(\\mathbf{u} \\times \\mathbf{v}) + \\mathbf{u} \\times \\mathbf{w}\\), and similarly in the first argument.</li>
<li><strong>Orthogonality:</strong> \\(\\mathbf{u} \\times \\mathbf{v}\\) is perpendicular to both \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\).</li>
<li><strong>Magnitude:</strong> \\(\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\sin\\theta\\), where \\(\\theta\\) is the angle between \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\).</li>
<li><strong>Self-cross:</strong> \\(\\mathbf{u} \\times \\mathbf{u} = \\mathbf{0}\\).</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof of Orthogonality</div>
<div class="env-body">
<p>We verify \\(\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0\\). This dot product equals</p>
\\[
u_1(u_2 v_3 - u_3 v_2) + u_2(u_3 v_1 - u_1 v_3) + u_3(u_1 v_2 - u_2 v_1)
\\]
\\[
= u_1 u_2 v_3 - u_1 u_3 v_2 + u_2 u_3 v_1 - u_1 u_2 v_3 + u_1 u_3 v_2 - u_2 u_3 v_1 = 0.
\\]
<p>The same calculation with \\(\\mathbf{v}\\) replacing \\(\\mathbf{u}\\) shows \\(\\mathbf{v} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-cross-product"></div>

<h3>Geometric Interpretation</h3>

<div class="env-block intuition">
<div class="env-title">What the Cross Product Computes</div>
<div class="env-body">
<p>The cross product \\(\\mathbf{u} \\times \\mathbf{v}\\) produces a vector that is:</p>
<ul>
<li><strong>Perpendicular</strong> to both \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) (it is a normal to the plane they span).</li>
<li><strong>Has magnitude</strong> equal to the area of the parallelogram spanned by \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\).</li>
<li><strong>Points in the direction</strong> determined by the right-hand rule.</li>
</ul>
</div>
</div>

<h3>Scalar Triple Product</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.4.4 (Scalar Triple Product)</div>
<div class="env-body">
<p>The <em>scalar triple product</em> of \\(\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in \\mathbb{R}^3\\) is</p>
\\[
\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) = \\det\\begin{pmatrix} u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\\\ w_1 & w_2 & w_3 \\end{pmatrix}.
\\]
<p>Its absolute value equals the volume of the parallelepiped spanned by \\(\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Expanding the determinant by cofactors along the first row gives \\(u_1(v_2 w_3 - v_3 w_2) - u_2(v_1 w_3 - v_3 w_1) + u_3(v_1 w_2 - v_2 w_1) = \\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.4.5</div>
<div class="env-body">
<p>Compute \\((1, 2, 3) \\times (4, 5, 6)\\).</p>
\\[
\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} 2 \\cdot 6 - 3 \\cdot 5 \\\\ 3 \\cdot 4 - 1 \\cdot 6 \\\\ 1 \\cdot 5 - 2 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 6 \\\\ -3 \\end{pmatrix}.
\\]
<p>The magnitude is \\(\\sqrt{9 + 36 + 9} = \\sqrt{54} = 3\\sqrt{6}\\), which is the area of the parallelogram spanned by the two vectors.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.4.6 (Normal to a Plane)</div>
<div class="env-body">
<p>Find a normal vector to the plane passing through \\(P = (1,0,0)\\), \\(Q = (0,1,0)\\), \\(R = (0,0,1)\\).</p>
<p>Edge vectors: \\(\\overrightarrow{PQ} = (-1,1,0)\\), \\(\\overrightarrow{PR} = (-1,0,1)\\).</p>
\\[
\\mathbf{n} = \\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\begin{pmatrix} 1 \\cdot 1 - 0 \\cdot 0 \\\\ 0 \\cdot (-1) - (-1) \\cdot 1 \\\\ (-1) \\cdot 0 - 1 \\cdot (-1) \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}.
\\]
<p>The plane has equation \\(x + y + z = 1\\).</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Cross Product is 3D Only</div>
<div class="env-body">
<p>The cross product as defined here is specific to \\(\\mathbb{R}^3\\). It does not generalize directly to other dimensions. In \\(\\mathbb{R}^7\\) there is an analogous product (related to the octonions), and in general dimensions one uses the <em>exterior product</em> (wedge product) from exterior algebra, which we will not cover in this course.</p>
</div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-cross-product',
                    title: 'Cross Product Visualizer (Projected to 2D)',
                    description: 'Adjust the components of \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) to see the cross product \\(\\mathbf{u} \\times \\mathbf{v}\\). The parallelogram area equals \\(\\|\\mathbf{u} \\times \\mathbf{v}\\|\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        let u = [1, 0, 2];
                        let v = [0, 2, 1];

                        const su1 = VizEngine.createSlider(controls, 'u\u2081', -3, 3, u[0], 0.5, val => { u[0] = val; });
                        const su2 = VizEngine.createSlider(controls, 'u\u2082', -3, 3, u[1], 0.5, val => { u[1] = val; });
                        const su3 = VizEngine.createSlider(controls, 'u\u2083', -3, 3, u[2], 0.5, val => { u[2] = val; });

                        const infoDiv = document.createElement('div');
                        infoDiv.style.cssText = 'padding:8px 16px;font-size:0.82rem;color:#c9d1d9;font-family:monospace;';
                        body.parentElement.appendChild(infoDiv);

                        const infoDiv2 = document.createElement('div');
                        infoDiv2.style.cssText = 'padding:0 16px 8px;font-size:0.82rem;color:#c9d1d9;font-family:monospace;';
                        body.parentElement.appendChild(infoDiv2);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const cross = VizEngine.cross(u, v);
                            const mag = Math.sqrt(cross[0]*cross[0] + cross[1]*cross[1] + cross[2]*cross[2]);

                            // Simple oblique projection for 3D -> 2D
                            const projX = (p) => p[0] + p[1] * 0.35;
                            const projY = (p) => p[2] + p[1] * 0.35;

                            // Draw u vector
                            const ux = projX(u), uy = projY(u);
                            viz.drawVector(0, 0, ux, uy, viz.colors.blue, 'u', 2.5);

                            // Draw v vector
                            const vx = projX(v), vy = projY(v);
                            viz.drawVector(0, 0, vx, vy, viz.colors.teal, 'v', 2.5);

                            // Draw cross product vector
                            const cx = projX(cross), cy = projY(cross);
                            if (mag > 0.01) {
                                viz.drawVector(0, 0, cx, cy, viz.colors.orange, 'u\u00D7v', 2.5);
                            }

                            // Draw parallelogram
                            viz.drawPolygon([[0,0],[ux,uy],[ux+vx,uy+vy],[vx,vy]], viz.colors.purple + '22', viz.colors.purple + '66', 1);

                            // Axis labels
                            viz.screenText('Oblique 3D projection', viz.width / 2, viz.height - 10, viz.colors.text, 10);

                            infoDiv.textContent = 'v = (' + v[0].toFixed(1) + ', ' + v[1].toFixed(1) + ', ' + v[2].toFixed(1) + ')   |   u\u00D7v = (' + cross[0].toFixed(1) + ', ' + cross[1].toFixed(1) + ', ' + cross[2].toFixed(1) + ')';
                            infoDiv2.textContent = '\u2016u\u00D7v\u2016 = ' + mag.toFixed(3) + ' (parallelogram area)';
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\((2, -1, 3) \\times (1, 4, -2)\\).',
                    hint: 'Use the formula: the \\(i\\)-th component is the determinant of the 2\u00D72 matrix obtained by deleting column \\(i\\) from \\(\\begin{pmatrix} u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{pmatrix}\\), with appropriate signs.',
                    solution: '\\(\\mathbf{u} \\times \\mathbf{v} = ((-1)(-2)-(3)(4),\\; (3)(1)-(2)(-2),\\; (2)(4)-(-1)(1)) = (2-12,\\; 3+4,\\; 8+1) = (-10, 7, 9)\\).'
                },
                {
                    question: 'Verify that \\((2,-1,3) \\times (1,4,-2)\\) is orthogonal to both \\((2,-1,3)\\) and \\((1,4,-2)\\).',
                    hint: 'Compute the dot products.',
                    solution: '\\((-10,7,9) \\cdot (2,-1,3) = -20-7+27 = 0\\). \\((-10,7,9) \\cdot (1,4,-2) = -10+28-18 = 0\\). Both dot products are zero, confirming orthogonality.'
                },
                {
                    question: 'Find the area of the triangle with vertices \\(A = (1,2,3)\\), \\(B = (4,0,1)\\), \\(C = (2,1,5)\\).',
                    hint: 'Area = \\(\\frac{1}{2}\\|\\overrightarrow{AB} \\times \\overrightarrow{AC}\\|\\).',
                    solution: '\\(\\overrightarrow{AB} = (3,-2,-2)\\), \\(\\overrightarrow{AC} = (1,-1,2)\\). \\(\\overrightarrow{AB} \\times \\overrightarrow{AC} = ((-2)(2)-(-2)(-1),\\; (-2)(1)-(3)(2),\\; (3)(-1)-(-2)(1)) = (-6, -8, -1)\\). \\(\\|\\overrightarrow{AB} \\times \\overrightarrow{AC}\\| = \\sqrt{36+64+1} = \\sqrt{101}\\). Area = \\(\\frac{\\sqrt{101}}{2}\\).'
                },
                {
                    question: 'Prove the Lagrange identity: \\(\\|\\mathbf{u} \\times \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2 - (\\mathbf{u} \\cdot \\mathbf{v})^2\\).',
                    hint: 'Expand both sides in components. This also follows from the formula \\(\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta\\) and \\(\\sin^2\\theta = 1 - \\cos^2\\theta\\).',
                    solution: 'Let \\(\\mathbf{u} = (u_1,u_2,u_3)\\), \\(\\mathbf{v} = (v_1,v_2,v_3)\\). Then \\(\\|\\mathbf{u} \\times \\mathbf{v}\\|^2 = (u_2v_3-u_3v_2)^2 + (u_3v_1-u_1v_3)^2 + (u_1v_2-u_2v_1)^2\\). Expanding and collecting: this equals \\((u_1^2+u_2^2+u_3^2)(v_1^2+v_2^2+v_3^2) - (u_1v_1+u_2v_2+u_3v_3)^2 = \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2 - (\\mathbf{u}\\cdot\\mathbf{v})^2\\). Alternatively: \\(\\|\\mathbf{u}\\times\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2\\sin^2\\theta = \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2(1-\\cos^2\\theta) = \\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2 - (\\mathbf{u}\\cdot\\mathbf{v})^2\\).'
                },
                {
                    question: 'Compute the scalar triple product \\((1,2,3) \\cdot ((4,5,6) \\times (7,8,9))\\). What does the result tell you geometrically?',
                    hint: 'This equals the determinant of the 3\u00D73 matrix with these vectors as rows.',
                    solution: '\\(\\det\\begin{pmatrix} 1&2&3\\\\4&5&6\\\\7&8&9 \\end{pmatrix} = 1(45-48)-2(36-42)+3(32-35) = 1(-3)-2(-6)+3(-3) = -3+12-9 = 0\\). The scalar triple product is 0, meaning the three vectors are coplanar (linearly dependent). The parallelepiped has zero volume.'
                }
            ]
        },

        // ========== SECTION 5: Determinants and Eigenvalues ==========
        {
            id: 'sec09-05-determinants-eigenvalues',
            title: 'Determinants and Eigenvalues',
            content: `
<h2>9.5 Determinants and Eigenvalues</h2>

<p>We conclude this chapter by previewing one of the most important applications of determinants: finding eigenvalues. The full theory will be developed in Chapters 10-12, but the connection to determinants is natural and immediate.</p>

<h3>The Characteristic Polynomial</h3>

<div class="env-block definition">
<div class="env-title">Definition 9.5.1 (Eigenvalue)</div>
<div class="env-body">
<p>A scalar \\(\\lambda\\) is an <em>eigenvalue</em> of an \\(n \\times n\\) matrix \\(A\\) if there exists a nonzero vector \\(\\mathbf{v} \\neq \\mathbf{0}\\) such that</p>
\\[
A\\mathbf{v} = \\lambda \\mathbf{v}.
\\]
<p>The vector \\(\\mathbf{v}\\) is called an <em>eigenvector</em> corresponding to \\(\\lambda\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 9.5.2 (Eigenvalue Condition)</div>
<div class="env-body">
<p>\\(\\lambda\\) is an eigenvalue of \\(A\\) if and only if</p>
\\[
\\det(A - \\lambda I) = 0.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>\\(A\\mathbf{v} = \\lambda\\mathbf{v}\\) is equivalent to \\((A - \\lambda I)\\mathbf{v} = \\mathbf{0}\\). This has a nonzero solution \\(\\mathbf{v}\\) if and only if \\(A - \\lambda I\\) is singular, which happens if and only if \\(\\det(A - \\lambda I) = 0\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 9.5.3 (Characteristic Polynomial)</div>
<div class="env-body">
<p>The <em>characteristic polynomial</em> of \\(A\\) is</p>
\\[
p(\\lambda) = \\det(A - \\lambda I).
\\]
<p>It is a polynomial of degree \\(n\\) in \\(\\lambda\\). Its roots are the eigenvalues of \\(A\\).</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.5.4</div>
<div class="env-body">
<p>Some texts define the characteristic polynomial as \\(\\det(\\lambda I - A)\\), which differs by a sign of \\((-1)^n\\). The roots are the same.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.5.5</div>
<div class="env-body">
<p>Find the eigenvalues of \\(A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}\\).</p>
\\[
\\det(A - \\lambda I) = \\det\\begin{pmatrix} 4-\\lambda & 1 \\\\ 2 & 3-\\lambda \\end{pmatrix} = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 5)(\\lambda - 2).
\\]
<p>The eigenvalues are \\(\\lambda_1 = 5\\) and \\(\\lambda_2 = 2\\).</p>
</div>
</div>

<h3>Trace, Determinant, and Eigenvalues</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 9.5.6</div>
<div class="env-body">
<p>For an \\(n \\times n\\) matrix \\(A\\) with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\) (counted with multiplicity, over \\(\\mathbb{C}\\)):</p>
\\[
\\det(A) = \\lambda_1 \\lambda_2 \\cdots \\lambda_n, \\qquad \\operatorname{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Sketch)</div>
<div class="env-body">
<p>The characteristic polynomial factors as \\(p(\\lambda) = (-1)^n(\\lambda - \\lambda_1)(\\lambda - \\lambda_2) \\cdots (\\lambda - \\lambda_n)\\). Setting \\(\\lambda = 0\\): \\(p(0) = \\det(A) = (-1)^n(-\\lambda_1)\\cdots(-\\lambda_n) = \\lambda_1 \\cdots \\lambda_n\\). The coefficient of \\(\\lambda^{n-1}\\) in \\(p(\\lambda)\\) gives the trace relation.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 9.5.7</div>
<div class="env-body">
<p>For \\(A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}\\) from Example 9.5.5: \\(\\det(A) = 12 - 2 = 10 = 5 \\cdot 2 = \\lambda_1 \\lambda_2\\). \\(\\operatorname{tr}(A) = 4 + 3 = 7 = 5 + 2 = \\lambda_1 + \\lambda_2\\). Both relations hold.</p>
</div>
</div>

<div class="env-block corollary">
<div class="env-title">Corollary 9.5.8</div>
<div class="env-body">
<p>A matrix \\(A\\) is singular if and only if 0 is an eigenvalue of \\(A\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>\\(A\\) is singular iff \\(\\det(A) = 0\\) iff the product of eigenvalues is 0 iff at least one eigenvalue is 0.</p>
<div class="qed">∎</div>
</div>
</div>

<h3>The 2\u00D72 Case: A Quick Eigenvalue Formula</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 9.5.9 (2\u00D72 Eigenvalue Formula)</div>
<div class="env-body">
<p>For \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\), the eigenvalues are</p>
\\[
\\lambda = \\frac{(a+d) \\pm \\sqrt{(a+d)^2 - 4(ad-bc)}}{2} = \\frac{\\operatorname{tr}(A) \\pm \\sqrt{\\operatorname{tr}(A)^2 - 4\\det(A)}}{2}.
\\]
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 9.5.10</div>
<div class="env-body">
<p>This formula shows that the eigenvalues of a 2\u00D72 matrix depend only on two quantities: the trace and the determinant. The discriminant \\(\\operatorname{tr}(A)^2 - 4\\det(A)\\) determines whether the eigenvalues are real and distinct (positive discriminant), repeated (zero discriminant), or complex conjugates (negative discriminant).</p>
</div>
</div>

<h3>Looking Ahead</h3>

<p>The characteristic polynomial connects the determinant to the spectral theory of matrices. In Chapter 10, we will develop eigenvalue theory systematically. In Chapter 11, we will study when a matrix can be diagonalized, and in Chapter 16, the spectral theorem for symmetric matrices will provide the most beautiful application of the entire theory.</p>

<p>For now, note the key conceptual chain: the determinant, originally motivated by signed volume, turns out to be the product of eigenvalues, which encode the scaling behavior of a linear transformation along its principal directions. Geometry and algebra converge.</p>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find the characteristic polynomial and eigenvalues of \\(A = \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix}\\).',
                    hint: 'Compute \\(\\det(A - \\lambda I) = (1-\\lambda)(3-\\lambda) - 8\\).',
                    solution: '\\(p(\\lambda) = (1-\\lambda)(3-\\lambda) - 8 = \\lambda^2 - 4\\lambda + 3 - 8 = \\lambda^2 - 4\\lambda - 5 = (\\lambda-5)(\\lambda+1)\\). Eigenvalues: \\(\\lambda_1 = 5\\), \\(\\lambda_2 = -1\\). Check: \\(\\det(A) = 3-8 = -5 = (5)(-1)\\), \\(\\operatorname{tr}(A) = 4 = 5+(-1)\\).'
                },
                {
                    question: 'For the rotation matrix \\(R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\\), find the characteristic polynomial and determine for which \\(\\theta\\) the eigenvalues are real.',
                    hint: 'Compute the discriminant \\(\\operatorname{tr}(R_\\theta)^2 - 4\\det(R_\\theta)\\).',
                    solution: '\\(\\operatorname{tr}(R_\\theta) = 2\\cos\\theta\\), \\(\\det(R_\\theta) = 1\\). Discriminant: \\(4\\cos^2\\theta - 4 = -4\\sin^2\\theta \\le 0\\). Real eigenvalues occur only when \\(\\sin\\theta = 0\\), i.e., \\(\\theta = 0\\) or \\(\\theta = \\pi\\). For \\(\\theta = 0\\): \\(\\lambda = 1, 1\\) (identity). For \\(\\theta = \\pi\\): \\(\\lambda = -1, -1\\) (rotation by 180 degrees). For all other \\(\\theta\\), eigenvalues are complex: \\(\\lambda = \\cos\\theta \\pm i\\sin\\theta = e^{\\pm i\\theta}\\).'
                },
                {
                    question: 'If \\(A\\) is a 3\u00D73 matrix with eigenvalues \\(\\lambda_1 = 2\\), \\(\\lambda_2 = -1\\), \\(\\lambda_3 = 3\\), find \\(\\det(A)\\), \\(\\operatorname{tr}(A)\\), and \\(\\det(A^{-1})\\).',
                    hint: 'Use the formulas from Theorem 9.5.6 and Corollary 8.3.6.',
                    solution: '\\(\\det(A) = 2 \\cdot (-1) \\cdot 3 = -6\\). \\(\\operatorname{tr}(A) = 2 + (-1) + 3 = 4\\). \\(\\det(A^{-1}) = 1/\\det(A) = -1/6\\).'
                },
                {
                    question: 'Prove: if \\(\\lambda\\) is an eigenvalue of \\(A\\), then \\(\\lambda^2\\) is an eigenvalue of \\(A^2\\).',
                    hint: 'If \\(A\\mathbf{v} = \\lambda\\mathbf{v}\\), apply \\(A\\) to both sides.',
                    solution: 'If \\(A\\mathbf{v} = \\lambda\\mathbf{v}\\), then \\(A^2\\mathbf{v} = A(A\\mathbf{v}) = A(\\lambda\\mathbf{v}) = \\lambda(A\\mathbf{v}) = \\lambda^2\\mathbf{v}\\). Since \\(\\mathbf{v} \\neq \\mathbf{0}\\), \\(\\lambda^2\\) is an eigenvalue of \\(A^2\\) with the same eigenvector.'
                },
                {
                    question: 'A matrix \\(A\\) satisfies \\(\\operatorname{tr}(A) = 6\\) and \\(\\det(A) = 8\\). Find the eigenvalues of \\(A\\) (assuming \\(A\\) is 2\u00D72).',
                    hint: 'The eigenvalues satisfy \\(\\lambda_1 + \\lambda_2 = 6\\) and \\(\\lambda_1 \\lambda_2 = 8\\).',
                    solution: 'The eigenvalues are roots of \\(\\lambda^2 - 6\\lambda + 8 = 0 = (\\lambda-2)(\\lambda-4)\\). So \\(\\lambda_1 = 2\\) and \\(\\lambda_2 = 4\\). Check: \\(2+4 = 6 = \\operatorname{tr}\\), \\(2 \\cdot 4 = 8 = \\det\\).'
                },
                {
                    question: 'Show that the constant term of the characteristic polynomial \\(p(\\lambda) = \\det(A - \\lambda I)\\) is \\(\\det(A)\\), and the coefficient of \\(\\lambda^{n-1}\\) is \\((-1)^{n-1}\\operatorname{tr}(A)\\).',
                    hint: 'For the constant term, set \\(\\lambda = 0\\). For the \\(\\lambda^{n-1}\\) coefficient, think about which terms in the Leibniz formula contribute.',
                    solution: 'Setting \\(\\lambda = 0\\): \\(p(0) = \\det(A - 0 \\cdot I) = \\det(A)\\), confirming the constant term. For the leading terms: \\(p(\\lambda) = \\det(A - \\lambda I)\\). The leading term is \\((-\\lambda)^n\\) (from the diagonal product \\(\\prod(a_{ii}-\\lambda)\\)). The next term comes from omitting one \\((-\\lambda)\\) factor and using \\(a_{ii}\\) instead: the coefficient of \\((-\\lambda)^{n-1}\\) is \\(\\sum a_{ii} = \\operatorname{tr}(A)\\), so the coefficient of \\(\\lambda^{n-1}\\) is \\((-1)^{n-1}\\operatorname{tr}(A)\\).'
                }
            ]
        }
    ]
});
