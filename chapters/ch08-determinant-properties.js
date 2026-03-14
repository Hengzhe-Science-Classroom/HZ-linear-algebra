// === Chapter 8: Properties of Determinants ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Properties of Determinants',
    subtitle: 'The unique multilinear alternating function that gives 1 on the identity',
    sections: [
        // ========== SECTION 1: Motivation and the 2x2 Case ==========
        {
            id: 'sec08-01-motivation-2x2',
            title: 'Motivation and the 2\u00D72 Case',
            content: `
<h2>8.1 Motivation and the 2\u00D72 Case</h2>

<div class="env-block intuition">
<div class="env-title">Why Determinants?</div>
<div class="env-body">
<p>We have studied matrices as representations of linear maps, analyzed their column and row spaces, and characterized invertibility through rank. But one fundamental question remains: can we attach a single <em>number</em> to a square matrix that captures whether it is invertible, how it scales volume, and what it does to orientation? The determinant is that number. It is arguably the most information-dense scalar invariant of a square matrix.</p>
</div>
</div>

<p>In this chapter, we develop the determinant from three axioms, derive its consequences, and explore computational methods. We begin with the concrete 2\u00D72 case, where the determinant has a beautiful geometric interpretation as signed area.</p>

<h3>The 2\u00D72 Determinant</h3>

<p>Consider a 2\u00D72 matrix whose columns are the vectors \\(\\mathbf{v}_1 = \\begin{pmatrix} a \\\\ c \\end{pmatrix}\\) and \\(\\mathbf{v}_2 = \\begin{pmatrix} b \\\\ d \\end{pmatrix}\\):</p>
\\[
A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}.
\\]

<div class="env-block definition">
<div class="env-title">Definition 8.1.1 (2\u00D72 Determinant)</div>
<div class="env-body">
<p>The <em>determinant</em> of a 2\u00D72 matrix \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\) is</p>
\\[
\\det(A) = ad - bc.
\\]
</div>
</div>

<h3>Geometric Interpretation: Signed Area</h3>

<p>The columns of \\(A\\) define a parallelogram in \\(\\mathbb{R}^2\\). The absolute value \\(|\\det(A)|\\) equals the area of this parallelogram, and the sign of \\(\\det(A)\\) encodes the orientation (counterclockwise vs. clockwise) of the pair \\((\\mathbf{v}_1, \\mathbf{v}_2)\\).</p>

<div class="env-block theorem">
<div class="env-title">Theorem 8.1.2 (Determinant as Signed Area)</div>
<div class="env-body">
<p>Let \\(\\mathbf{v}_1, \\mathbf{v}_2 \\in \\mathbb{R}^2\\) be the columns of \\(A\\). The parallelogram spanned by \\(\\mathbf{v}_1\\) and \\(\\mathbf{v}_2\\) has area \\(|\\det(A)|\\). Furthermore:</p>
<ul>
<li>\\(\\det(A) > 0\\) if and only if the rotation from \\(\\mathbf{v}_1\\) to \\(\\mathbf{v}_2\\) is counterclockwise (positive orientation).</li>
<li>\\(\\det(A) < 0\\) if and only if the rotation is clockwise (negative orientation).</li>
<li>\\(\\det(A) = 0\\) if and only if \\(\\mathbf{v}_1\\) and \\(\\mathbf{v}_2\\) are linearly dependent (the parallelogram collapses).</li>
</ul>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Write \\(\\mathbf{v}_1 = (a, c)^T\\) and \\(\\mathbf{v}_2 = (b, d)^T\\). The parallelogram has vertices \\(\\mathbf{0}, \\mathbf{v}_1, \\mathbf{v}_1 + \\mathbf{v}_2, \\mathbf{v}_2\\). Using the cross product formula for area in the plane,</p>
\\[
\\text{signed area} = a \\cdot d - b \\cdot c = \\det(A).
\\]
<p>The sign is positive when \\(\\mathbf{v}_2\\) lies to the left of \\(\\mathbf{v}_1\\) (counterclockwise), which can be verified by noting that the cross product \\(\\mathbf{v}_1 \\times \\mathbf{v}_2 = ad - bc\\) points in the positive \\(z\\)-direction precisely when the angle from \\(\\mathbf{v}_1\\) to \\(\\mathbf{v}_2\\) is between \\(0\\) and \\(\\pi\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-2x2-det-area"></div>

<div class="env-block example">
<div class="env-title">Example 8.1.3</div>
<div class="env-body">
<p>For the matrix \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}\\), we have \\(\\det(A) = 3 \\cdot 2 - 1 \\cdot 1 = 5\\). The parallelogram spanned by \\((3,1)^T\\) and \\((1,2)^T\\) has area 5, and the orientation is positive (counterclockwise).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.1.4</div>
<div class="env-body">
<p>For the matrix \\(B = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}\\), we have \\(\\det(B) = 1 \\cdot 4 - 2 \\cdot 2 = 0\\). The columns \\((1,2)^T\\) and \\((2,4)^T\\) are proportional, so the parallelogram degenerates to a line segment. This confirms that \\(B\\) is singular.</p>
</div>
</div>

<h3>Determinant and Invertibility</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 8.1.5</div>
<div class="env-body">
<p>A 2\u00D72 matrix \\(A\\) is invertible if and only if \\(\\det(A) \\neq 0\\). When invertible,</p>
\\[
A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Direct multiplication: \\(\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\frac{1}{ad-bc}\\begin{pmatrix} ad-bc & 0 \\\\ 0 & ad-bc \\end{pmatrix} = I\\). This is valid precisely when \\(ad - bc \\neq 0\\).</p>
<div class="qed">∎</div>
</div>
</div>

<p>The 2\u00D72 formula \\(ad - bc\\) is simple but ad hoc. To define the determinant for \\(n \\times n\\) matrices, we need a principled approach. In the next section, we identify three properties that <em>uniquely characterize</em> the determinant.</p>
`,
            visualizations: [
                {
                    id: 'viz-2x2-det-area',
                    title: 'Interactive 2\u00D72 Determinant as Parallelogram Area',
                    description: 'Drag the tips of the two column vectors to change the matrix. The shaded parallelogram has area \\(|\\det(A)|\\). Blue fill indicates positive orientation; red indicates negative. When \\(\\det = 0\\), the parallelogram collapses.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const d1 = viz.addDraggable('v1', 3, 1, viz.colors.blue, 8, (wx, wy) => {
                            d1.x = Math.round(wx * 4) / 4;
                            d1.y = Math.round(wy * 4) / 4;
                        });
                        const d2 = viz.addDraggable('v2', 1, 2, viz.colors.teal, 8, (wx, wy) => {
                            d2.x = Math.round(wx * 4) / 4;
                            d2.y = Math.round(wy * 4) / 4;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const a = d1.x, c = d1.y, b = d2.x, d = d2.y;
                            const det = a * d - b * c;

                            // Draw parallelogram
                            const fillColor = det > 0.01 ? viz.colors.blue + '33' :
                                              det < -0.01 ? viz.colors.red + '33' :
                                              viz.colors.yellow + '22';
                            const strokeColor = det > 0.01 ? viz.colors.blue :
                                                det < -0.01 ? viz.colors.red :
                                                viz.colors.yellow;
                            viz.drawParallelogram([a, c], [b, d], fillColor, strokeColor, 1.5);

                            // Draw column vectors
                            viz.drawVec(a, c, viz.colors.blue, 'v\u2081', 2.5);
                            viz.drawVec(b, d, viz.colors.teal, 'v\u2082', 2.5);

                            // Display matrix and determinant
                            viz.screenText('A = [' + a.toFixed(1) + ', ' + b.toFixed(1) + '; ' + c.toFixed(1) + ', ' + d.toFixed(1) + ']', viz.width / 2, 22, viz.colors.white, 13);
                            viz.screenText('det(A) = ' + a.toFixed(1) + '\u00B7' + d.toFixed(1) + ' \u2212 ' + b.toFixed(1) + '\u00B7' + c.toFixed(1) + ' = ' + det.toFixed(2), viz.width / 2, 42, viz.colors.orange, 13);

                            const areaLabel = '|det| = ' + Math.abs(det).toFixed(2) + ' (area)';
                            const orientLabel = det > 0.01 ? 'Positive orientation (CCW)' :
                                                det < -0.01 ? 'Negative orientation (CW)' :
                                                'Degenerate (det = 0)';
                            viz.screenText(areaLabel, viz.width / 2, viz.height - 32, viz.colors.orange, 12);
                            viz.screenText(orientLabel, viz.width / 2, viz.height - 14, strokeColor, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the determinant of \\(A = \\begin{pmatrix} 5 & 3 \\\\ -2 & 7 \\end{pmatrix}\\) and interpret it geometrically.',
                    hint: 'Use the formula \\(ad - bc\\). The sign tells you about orientation of the columns.',
                    solution: '\\(\\det(A) = 5 \\cdot 7 - 3 \\cdot (-2) = 35 + 6 = 41\\). The parallelogram spanned by \\((5,-2)^T\\) and \\((3,7)^T\\) has area 41, and the pair has positive (counterclockwise) orientation.'
                },
                {
                    question: 'For what value of \\(k\\) is the matrix \\(\\begin{pmatrix} 2 & k \\\\ 3 & 6 \\end{pmatrix}\\) singular?',
                    hint: 'A matrix is singular when its determinant equals zero.',
                    solution: '\\(\\det = 2 \\cdot 6 - k \\cdot 3 = 12 - 3k = 0\\), so \\(k = 4\\). At this value the columns \\((2,3)^T\\) and \\((4,6)^T\\) are proportional.'
                },
                {
                    question: 'Verify the 2\u00D72 inverse formula by computing \\(A^{-1}\\) for \\(A = \\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}\\) and checking \\(AA^{-1} = I\\).',
                    hint: 'First find \\(\\det(A) = 4 - 6 = -2\\). Then apply the formula \\(A^{-1} = \\frac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}\\).',
                    solution: '\\(\\det(A) = 4 \\cdot 1 - 3 \\cdot 2 = -2\\). So \\(A^{-1} = \\frac{1}{-2}\\begin{pmatrix} 1 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} -1/2 & 3/2 \\\\ 1 & -2 \\end{pmatrix}\\). Checking: \\(AA^{-1} = \\begin{pmatrix} 4(-1/2)+3(1) & 4(3/2)+3(-2) \\\\ 2(-1/2)+1(1) & 2(3/2)+1(-2) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that \\(\\det(A) = 0\\) if and only if the column vectors of \\(A\\) are linearly dependent, for a 2\u00D72 matrix \\(A\\).',
                    hint: 'Write \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\). The columns are dependent iff one is a scalar multiple of the other.',
                    solution: 'The columns \\((a,c)^T\\) and \\((b,d)^T\\) are linearly dependent iff there exists \\(t\\) with \\((b,d)^T = t(a,c)^T\\), i.e., \\(b = ta, d = tc\\). Then \\(\\det(A) = ad - bc = a(tc) - (ta)c = 0\\). Conversely, if \\(ad - bc = 0\\) and, say, \\(a \\neq 0\\), then \\(d = bc/a\\), so \\((b,d)^T = (b/a)(a,c)^T\\). If \\(a = c = 0\\), the first column is zero, making the columns dependent.'
                },
                {
                    question: 'If \\(A\\) is a 2\u00D72 matrix with \\(\\det(A) = 5\\) and \\(B\\) is a 2\u00D72 matrix with \\(\\det(B) = -3\\), what is \\(\\det(AB)\\)?',
                    hint: 'Think about areas of parallelograms under successive linear transformations.',
                    solution: 'By the product formula (which we will prove later in this chapter), \\(\\det(AB) = \\det(A)\\det(B) = 5 \\cdot (-3) = -15\\). Geometrically, \\(B\\) scales area by \\(|-3| = 3\\) and reverses orientation, then \\(A\\) scales by \\(|5| = 5\\). The net scaling is 15 with reversed orientation.'
                }
            ]
        },

        // ========== SECTION 2: Three Key Properties ==========
        {
            id: 'sec08-02-three-properties',
            title: 'Three Key Properties',
            content: `
<h2>8.2 Three Key Properties</h2>

<p>Rather than writing down a formula for the \\(n \\times n\\) determinant directly, we take an axiomatic approach. We specify three properties that a function \\(\\det\\colon M_{n \\times n}(\\mathbb{R}) \\to \\mathbb{R}\\) should satisfy, and then show that these three properties uniquely determine the function.</p>

<div class="env-block definition">
<div class="env-title">Definition 8.2.1 (The Three Defining Properties)</div>
<div class="env-body">
<p>The <em>determinant</em> is the unique function \\(\\det\\colon M_{n \\times n}(\\mathbb{R}) \\to \\mathbb{R}\\) satisfying:</p>
<p><strong>(P1) Multilinearity in each row:</strong> For each row \\(i\\), if we fix all other rows, then \\(\\det\\) is a linear function of the \\(i\\)-th row. That is, if row \\(i\\) of \\(A\\) is \\(t\\mathbf{r} + s\\mathbf{r}'\\), then</p>
\\[
\\det(A) = t \\cdot \\det(A_{\\mathbf{r}}) + s \\cdot \\det(A_{\\mathbf{r}'}),
\\]
<p>where \\(A_{\\mathbf{r}}\\) is the matrix with \\(\\mathbf{r}\\) in row \\(i\\) and \\(A_{\\mathbf{r}'}\\) is the matrix with \\(\\mathbf{r}'\\) in row \\(i\\) (all other rows unchanged).</p>

<p><strong>(P2) Alternating:</strong> If two adjacent rows of \\(A\\) are equal, then \\(\\det(A) = 0\\).</p>

<p><strong>(P3) Normalization:</strong> \\(\\det(I) = 1\\).</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.2.2</div>
<div class="env-body">
<p>Property (P1) says \\(\\det\\) is linear in <em>each</em> row separately. This is called <em>multilinearity</em>, and it is much weaker than linearity of the map \\(A \\mapsto \\det(A)\\) (which is false: \\(\\det(A + B) \\neq \\det(A) + \\det(B)\\) in general). Multilinearity means: fix \\(n-1\\) rows, and \\(\\det\\) becomes a linear function of the remaining row.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.2.3</div>
<div class="env-body">
<p>Some texts state (P2) as "the determinant changes sign when two rows are swapped." We will derive this from our version of (P2) in the next section. Our formulation is slightly cleaner for the axiomatic development.</p>
</div>
</div>

<h3>Why These Three Properties?</h3>

<div class="env-block intuition">
<div class="env-title">Geometric Motivation</div>
<div class="env-body">
<p>Think of the rows of \\(A\\) as edge vectors of an \\(n\\)-dimensional parallelepiped. Then:</p>
<ul>
<li><strong>(P1)</strong> Scaling one edge by \\(t\\) scales the volume by \\(t\\). Adding a component to one edge while keeping the others fixed works linearly on volume (think of shearing).</li>
<li><strong>(P2)</strong> If two edges are the same, the parallelepiped is flat (degenerate), so the volume is 0.</li>
<li><strong>(P3)</strong> The unit cube has volume 1.</li>
</ul>
</div>
</div>

<h3>Immediate Consequences of (P1) and (P2)</h3>

<div class="env-block lemma">
<div class="env-title">Lemma 8.2.4 (Row Swap Changes Sign)</div>
<div class="env-body">
<p>If \\(B\\) is obtained from \\(A\\) by swapping two rows, then \\(\\det(B) = -\\det(A)\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Let rows \\(i\\) and \\(j\\) of \\(A\\) be \\(\\mathbf{r}_i\\) and \\(\\mathbf{r}_j\\). Consider the matrix \\(C\\) with \\(\\mathbf{r}_i + \\mathbf{r}_j\\) in both rows \\(i\\) and \\(j\\). By (P2), \\(\\det(C) = 0\\). By multilinearity (P1), expanding in row \\(i\\) first and then row \\(j\\):</p>
\\[
0 = \\det(C) = \\det(\\ldots, \\mathbf{r}_i, \\ldots, \\mathbf{r}_i, \\ldots) + \\det(\\ldots, \\mathbf{r}_i, \\ldots, \\mathbf{r}_j, \\ldots) + \\det(\\ldots, \\mathbf{r}_j, \\ldots, \\mathbf{r}_i, \\ldots) + \\det(\\ldots, \\mathbf{r}_j, \\ldots, \\mathbf{r}_j, \\ldots).
\\]
<p>The first and last terms are zero by (P2). Thus \\(\\det(A) + \\det(B) = 0\\), giving \\(\\det(B) = -\\det(A)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block corollary">
<div class="env-title">Corollary 8.2.5</div>
<div class="env-body">
<p>If any two rows of \\(A\\) are equal (not necessarily adjacent), then \\(\\det(A) = 0\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Swap the two equal rows. The matrix does not change, so \\(\\det(A) = \\det(A)\\). But by Lemma 8.2.4, the swap gives \\(\\det(A) = -\\det(A)\\). Thus \\(2\\det(A) = 0\\), so \\(\\det(A) = 0\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block lemma">
<div class="env-title">Lemma 8.2.6 (Row of Zeros)</div>
<div class="env-body">
<p>If any row of \\(A\\) is the zero vector, then \\(\\det(A) = 0\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>If row \\(i\\) is \\(\\mathbf{0}\\), then by multilinearity (P1), \\(\\det(A) = 0 \\cdot \\det(A_{\\mathbf{0}}) = 0\\). (Set \\(t = 0\\) in the linearity of row \\(i\\).)</p>
<div class="qed">∎</div>
</div>
</div>

<h3>Uniqueness</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 8.2.7 (Uniqueness of the Determinant)</div>
<div class="env-body">
<p>There is at most one function \\(D\\colon M_{n \\times n}(\\mathbb{R}) \\to \\mathbb{R}\\) satisfying (P1), (P2), and (P3).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Sketch)</div>
<div class="env-body">
<p>By multilinearity, we can express each row as a linear combination of standard basis vectors \\(\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\). Expanding \\(D\\) via (P1), we get a sum of \\(n^n\\) terms, each of the form \\(D\\) evaluated on a matrix whose rows are standard basis vectors, multiplied by a product of entries. By (P2), \\(D\\) vanishes whenever two rows are the same standard basis vector. Thus only terms where the rows are a permutation of \\(\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\) survive, and by the sign rule from Lemma 8.2.4, each such \\(D\\)-value is \\(\\pm 1\\) (determined by \\(\\text{sgn}(\\sigma)\\) and (P3)). This determines \\(D\\) uniquely.</p>
<div class="qed">∎</div>
</div>
</div>

<p>We will make this argument completely explicit in Section 8.5 when we derive the Leibniz formula. For now, the key takeaway is: <strong>any function satisfying (P1), (P2), (P3) must be the same function</strong>. This means we are free to derive consequences from the three axioms without worrying about which formula we use.</p>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Verify property (P1) for the 2\u00D72 determinant. That is, show directly that \\(\\det\\begin{pmatrix} ta_1 + sa_1\' & tb_1 + sb_1\' \\\\ a_2 & b_2 \\end{pmatrix} = t\\det\\begin{pmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{pmatrix} + s\\det\\begin{pmatrix} a_1\' & b_1\' \\\\ a_2 & b_2 \\end{pmatrix}\\).',
                    hint: 'Expand the left side using \\(ad - bc\\) and simplify.',
                    solution: 'LHS: \\((ta_1 + sa_1\')b_2 - (tb_1 + sb_1\')a_2 = t(a_1 b_2 - b_1 a_2) + s(a_1\' b_2 - b_1\' a_2) = t\\det(\\ldots) + s\\det(\\ldots)\\) = RHS.'
                },
                {
                    question: 'Using only properties (P1), (P2), (P3), prove that if a row of \\(A\\) is a scalar multiple of another row, then \\(\\det(A) = 0\\).',
                    hint: 'If row \\(i\\) equals \\(c \\cdot\\) row \\(j\\), use multilinearity to factor out \\(c\\), then apply the alternating property.',
                    solution: 'Suppose row \\(i\\) is \\(c \\cdot \\mathbf{r}_j\\). By (P1), \\(\\det(A) = c \\cdot \\det(A\')\\), where \\(A\'\\) has \\(\\mathbf{r}_j\\) in both rows \\(i\\) and \\(j\\). By Corollary 8.2.5, \\(\\det(A\') = 0\\). Thus \\(\\det(A) = 0\\).'
                },
                {
                    question: 'Why is it important that (P2) says "two rows equal" rather than just "adjacent rows equal"? Show that the apparently weaker statement (adjacent rows) implies the general statement.',
                    hint: 'You can bring any two rows into adjacent positions by a sequence of adjacent swaps.',
                    solution: 'Suppose rows \\(i\\) and \\(j\\) (with \\(i < j\\)) are equal. By performing \\(j - i - 1\\) adjacent swaps, we can make them adjacent. After these swaps, the determinant has been multiplied by \\((-1)^{j-i-1}\\), but the two equal rows are now adjacent, so the result is 0. Hence \\((-1)^{j-i-1}\\det(A) = 0\\), giving \\(\\det(A) = 0\\). Actually, our proof of Lemma 8.2.4 goes directly from (P2) to the general sign-change property without needing adjacent-only, so the two formulations are equivalent.'
                },
                {
                    question: 'Let \\(D\\) be a function satisfying (P1) and (P2) but with \\(D(I) = 7\\) instead of (P3). Express \\(D\\) in terms of \\(\\det\\).',
                    hint: 'The uniqueness argument shows that (P1) and (P2) determine the function up to a scalar multiple.',
                    solution: 'From the uniqueness proof, any function satisfying (P1) and (P2) is of the form \\(D(A) = D(I) \\cdot \\det(A)\\). With \\(D(I) = 7\\), we get \\(D(A) = 7\\det(A)\\).'
                },
                {
                    question: 'Show that the map \\(A \\mapsto \\det(A)\\) is <em>not</em> a linear function from \\(M_{n \\times n}(\\mathbb{R})\\) to \\(\\mathbb{R}\\) for \\(n \\ge 2\\). Give a concrete counterexample.',
                    hint: 'Try \\(A = B = I\\) with \\(n = 2\\).',
                    solution: 'Let \\(n = 2\\) and \\(A = B = I\\). Then \\(\\det(A + B) = \\det\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} = 4\\), but \\(\\det(A) + \\det(B) = 1 + 1 = 2\\). Since \\(4 \\neq 2\\), the determinant is not additive (hence not linear). In general, \\(\\det(cA) = c^n \\det(A) \\neq c\\det(A)\\) for \\(n \\ge 2\\).'
                }
            ]
        },

        // ========== SECTION 3: Consequences of the Three Properties ==========
        {
            id: 'sec08-03-consequences',
            title: 'Consequences of the Three Properties',
            content: `
<h2>8.3 Consequences of the Three Properties</h2>

<p>The three axioms are remarkably powerful. In this section we derive the fundamental relationships between the determinant and elementary row operations, prove the product formula \\(\\det(AB) = \\det(A)\\det(B)\\), and establish the determinant of triangular matrices.</p>

<h3>Determinant and Row Operations</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 8.3.1 (Effect of Row Operations)</div>
<div class="env-body">
<p>Let \\(A\\) be an \\(n \\times n\\) matrix. The three types of elementary row operations affect \\(\\det(A)\\) as follows:</p>
<ol>
<li><strong>Row swap</strong> (\\(R_i \\leftrightarrow R_j\\)): \\(\\det \\to -\\det\\).</li>
<li><strong>Row scaling</strong> (\\(R_i \\to cR_i\\), \\(c \\neq 0\\)): \\(\\det \\to c \\cdot \\det\\).</li>
<li><strong>Row replacement</strong> (\\(R_i \\to R_i + cR_j\\), \\(i \\neq j\\)): \\(\\det\\) is unchanged.</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>(1) This is Lemma 8.2.4.</p>
<p>(2) By multilinearity (P1) applied to row \\(i\\): replacing row \\(i\\) by \\(c \\cdot \\text{row}_i\\) multiplies the determinant by \\(c\\).</p>
<p>(3) Let the \\(i\\)-th row of \\(A\\) be \\(\\mathbf{r}_i\\) and the \\(j\\)-th row be \\(\\mathbf{r}_j\\). The new matrix \\(A'\\) has row \\(i\\) equal to \\(\\mathbf{r}_i + c\\mathbf{r}_j\\). By multilinearity in row \\(i\\):</p>
\\[
\\det(A') = \\det(\\ldots, \\mathbf{r}_i + c\\mathbf{r}_j, \\ldots) = \\det(\\ldots, \\mathbf{r}_i, \\ldots) + c\\det(\\ldots, \\mathbf{r}_j, \\ldots, \\mathbf{r}_j, \\ldots).
\\]
<p>The second term has \\(\\mathbf{r}_j\\) in both rows \\(i\\) and \\(j\\), so it equals 0 by (P2). Thus \\(\\det(A') = \\det(A)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-row-ops-det"></div>

<h3>Computing Determinants via Row Reduction</h3>

<div class="env-block example">
<div class="env-title">Example 8.3.2</div>
<div class="env-body">
<p>Compute \\(\\det\\begin{pmatrix} 2 & 6 & 4 \\\\ 1 & 3 & 5 \\\\ 3 & 9 & 1 \\end{pmatrix}\\).</p>
<p>Step 1: \\(R_1 \\leftrightarrow R_2\\) (sign change): multiply by \\(-1\\).</p>
\\[
-\\det\\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 6 & 4 \\\\ 3 & 9 & 1 \\end{pmatrix}
\\]
<p>Step 2: \\(R_2 \\to R_2 - 2R_1\\), \\(R_3 \\to R_3 - 3R_1\\) (no change):</p>
\\[
-\\det\\begin{pmatrix} 1 & 3 & 5 \\\\ 0 & 0 & -6 \\\\ 0 & 0 & -14 \\end{pmatrix}
\\]
<p>The second and third columns of the lower-right 2\u00D72 block have zero in the (2,2) position. In fact, since the matrix has two zero entries in column 2 below the pivot, but column 2 has no pivot, the matrix is singular. We see that rows 2 and 3 are both in the span of \\((0, 0, *)\\), so row reduction leads to a row of zeros. Thus \\(\\det = 0\\).</p>
</div>
</div>

<h3>Triangular Matrices</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 8.3.3 (Determinant of Triangular Matrices)</div>
<div class="env-body">
<p>If \\(A\\) is upper triangular or lower triangular, then</p>
\\[
\\det(A) = a_{11} a_{22} \\cdots a_{nn} = \\prod_{i=1}^n a_{ii}.
\\]
<p>The determinant of a triangular matrix is the product of its diagonal entries.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>We prove the upper triangular case; the lower triangular case is analogous. Let \\(A\\) be upper triangular. We use row replacement operations (which do not change the determinant) to eliminate all off-diagonal entries above the diagonal, reducing \\(A\\) to a diagonal matrix \\(D = \\operatorname{diag}(a_{11}, \\ldots, a_{nn})\\). Then \\(\\det(A) = \\det(D)\\).</p>
<p>For the diagonal matrix, by multilinearity (P1), we can factor \\(a_{ii}\\) from each row \\(i\\):</p>
\\[
\\det(D) = a_{11} a_{22} \\cdots a_{nn} \\det(I) = a_{11} a_{22} \\cdots a_{nn}
\\]
<p>by (P3).</p>
<div class="qed">∎</div>
</div>
</div>

<h3>Determinant of Elementary Matrices</h3>

<div class="env-block proposition">
<div class="env-title">Proposition 8.3.4</div>
<div class="env-body">
<p>The elementary matrices have determinants:</p>
<ul>
<li>\\(\\det(E_{\\text{swap}}) = -1\\)</li>
<li>\\(\\det(E_{\\text{scale}}(c)) = c\\)</li>
<li>\\(\\det(E_{\\text{replace}}) = 1\\)</li>
</ul>
</div>
</div>

<h3>The Product Formula</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 8.3.5 (Multiplicativity of the Determinant)</div>
<div class="env-body">
<p>For any \\(n \\times n\\) matrices \\(A\\) and \\(B\\),</p>
\\[
\\det(AB) = \\det(A) \\det(B).
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p><strong>Case 1: \\(A\\) is singular.</strong> Then \\(\\det(A) = 0\\), and \\(AB\\) is also singular (since \\(\\operatorname{rank}(AB) \\le \\operatorname{rank}(A) < n\\)), so \\(\\det(AB) = 0 = 0 \\cdot \\det(B)\\).</p>
<p><strong>Case 2: \\(A\\) is invertible.</strong> Write \\(A = E_k E_{k-1} \\cdots E_1\\) as a product of elementary matrices. Then</p>
\\[
\\det(AB) = \\det(E_k \\cdots E_1 B).
\\]
<p>By Theorem 8.3.1, each left-multiplication by \\(E_i\\) multiplies the determinant by \\(\\det(E_i)\\):</p>
\\[
\\det(E_k \\cdots E_1 B) = \\det(E_k) \\cdots \\det(E_1) \\det(B).
\\]
<p>Similarly, \\(\\det(A) = \\det(E_k \\cdots E_1 I) = \\det(E_k) \\cdots \\det(E_1)\\). Combining: \\(\\det(AB) = \\det(A)\\det(B)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block corollary">
<div class="env-title">Corollary 8.3.6</div>
<div class="env-body">
<p>If \\(A\\) is invertible, then \\(\\det(A^{-1}) = \\frac{1}{\\det(A)}\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>\\(1 = \\det(I) = \\det(AA^{-1}) = \\det(A)\\det(A^{-1})\\), so \\(\\det(A^{-1}) = 1/\\det(A)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block corollary">
<div class="env-title">Corollary 8.3.7</div>
<div class="env-body">
<p>Similar matrices have the same determinant: if \\(B = P^{-1}AP\\), then \\(\\det(B) = \\det(A)\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 8.3.8 (Transpose)</div>
<div class="env-body">
<p>\\(\\det(A^T) = \\det(A)\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>If \\(A\\) is singular, so is \\(A^T\\) (they have the same rank), and both determinants are 0. If \\(A\\) is invertible, write \\(A = E_k \\cdots E_1\\). Then \\(A^T = E_1^T \\cdots E_k^T\\). One checks that each elementary matrix satisfies \\(\\det(E^T) = \\det(E)\\), so \\(\\det(A^T) = \\det(E_1^T) \\cdots \\det(E_k^T) = \\det(E_1) \\cdots \\det(E_k) = \\det(A)\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.3.9</div>
<div class="env-body">
<p>Since \\(\\det(A^T) = \\det(A)\\), every property we proved about rows also holds for columns. In particular, \\(\\det\\) is multilinear and alternating in the columns of \\(A\\).</p>
</div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-row-ops-det',
                    title: 'Row Operations and Their Effect on the Determinant',
                    description: 'Start with a 2\u00D72 matrix. Apply row operations and observe how the determinant (and the parallelogram) changes. Row replacement preserves area; row swap flips orientation; row scaling multiplies area.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35 });

                        let a = 3, b = 1, c = 1, d = 2;
                        let origDet = a * d - b * c;
                        let history = [];

                        const info = document.createElement('div');
                        info.style.cssText = 'color:#c9d1d9;font-size:0.82rem;padding:8px 16px;font-family:monospace;';
                        body.parentElement.appendChild(info);

                        const btnSwap = VizEngine.createButton(controls, 'Swap R\u2081\u2194R\u2082', () => {
                            [a, c] = [c, a]; [b, d] = [d, b];
                            history.push('Swap R\u2081\u2194R\u2082: det \u00D7 (-1)');
                        });
                        const btnScale = VizEngine.createButton(controls, 'R\u2081 \u00D7 2', () => {
                            a *= 2; b *= 2;
                            history.push('Scale R\u2081 by 2: det \u00D7 2');
                        });
                        const btnReplace = VizEngine.createButton(controls, 'R\u2082 += R\u2081', () => {
                            c += a; d += b;
                            history.push('R\u2082 += R\u2081: det unchanged');
                        });
                        const btnReset = VizEngine.createButton(controls, 'Reset', () => {
                            a = 3; b = 1; c = 1; d = 2;
                            history = [];
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const det = a * d - b * c;
                            const fillColor = det > 0.01 ? viz.colors.blue + '33' :
                                              det < -0.01 ? viz.colors.red + '33' :
                                              viz.colors.yellow + '22';
                            const strokeColor = det > 0.01 ? viz.colors.blue :
                                                det < -0.01 ? viz.colors.red :
                                                viz.colors.yellow;

                            viz.drawParallelogram([a, c], [b, d], fillColor, strokeColor, 1.5);
                            viz.drawVec(a, c, viz.colors.blue, 'R\u2081', 2);
                            viz.drawVec(b, d, viz.colors.teal, 'R\u2082', 2);

                            viz.screenText('det = ' + det.toFixed(1), viz.width / 2, 20, viz.colors.orange, 14);

                            const lastOp = history.length > 0 ? history[history.length - 1] : '(no operations yet)';
                            info.textContent = 'Last: ' + lastOp + ' | det = ' + det.toFixed(1);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}\\) using Theorem 8.3.3.',
                    hint: 'The matrix is upper triangular.',
                    solution: 'The matrix is upper triangular, so \\(\\det = 1 \\cdot 4 \\cdot 6 = 24\\).'
                },
                {
                    question: 'If \\(\\det(A) = 3\\), find \\(\\det(2A)\\) when \\(A\\) is \\(4 \\times 4\\).',
                    hint: 'Scaling every row by 2 is the same as replacing \\(A\\) by \\(2A\\). Use multilinearity.',
                    solution: 'Each of the 4 rows is scaled by 2, so \\(\\det(2A) = 2^4 \\det(A) = 16 \\cdot 3 = 48\\). In general, \\(\\det(cA) = c^n \\det(A)\\) for an \\(n \\times n\\) matrix.'
                },
                {
                    question: 'If \\(A\\) is \\(3 \\times 3\\) with \\(\\det(A) = -2\\), find \\(\\det(A^3)\\) and \\(\\det(A^{-1})\\).',
                    hint: 'Use the product formula \\(\\det(AB) = \\det(A)\\det(B)\\) repeatedly.',
                    solution: '\\(\\det(A^3) = (\\det A)^3 = (-2)^3 = -8\\). \\(\\det(A^{-1}) = 1/\\det(A) = -1/2\\).'
                },
                {
                    question: 'Prove that \\(\\det(A) = 0\\) if \\(A\\) has two proportional rows (i.e., row \\(i = c \\cdot\\) row \\(j\\) for some scalar \\(c\\) and \\(i \\neq j\\)).',
                    hint: 'Factor \\(c\\) out of row \\(i\\) using multilinearity, then use the alternating property.',
                    solution: 'By (P1), \\(\\det(A) = c \\cdot \\det(A\')\\) where \\(A\'\\) has the same vector in rows \\(i\\) and \\(j\\). By Corollary 8.2.5, \\(\\det(A\') = 0\\). So \\(\\det(A) = 0\\).'
                },
                {
                    question: 'Use row reduction to compute \\(\\det\\begin{pmatrix} 1 & 3 & 0 \\\\ 2 & 6 & 1 \\\\ -1 & 0 & 3 \\end{pmatrix}\\).',
                    hint: 'Eliminate below the first pivot using row replacement, then continue.',
                    solution: '\\(R_2 \\to R_2 - 2R_1\\): \\(\\begin{pmatrix} 1 & 3 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 3 \\end{pmatrix}\\). \\(R_3 \\to R_3 + R_1\\): \\(\\begin{pmatrix} 1 & 3 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 3 & 3 \\end{pmatrix}\\). \\(R_2 \\leftrightarrow R_3\\) (sign change): \\(-\\det\\begin{pmatrix} 1 & 3 & 0 \\\\ 0 & 3 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}\\). Now upper triangular: \\(\\det = -(1)(3)(1) = -3\\).'
                }
            ]
        },

        // ========== SECTION 4: Cofactor Expansion ==========
        {
            id: 'sec08-04-cofactor-expansion',
            title: 'Cofactor Expansion',
            content: `
<h2>8.4 Cofactor Expansion</h2>

<p>We now derive a recursive formula for the determinant: expressing the \\(n \\times n\\) determinant in terms of \\((n-1) \\times (n-1)\\) determinants. This is the <em>cofactor expansion</em> (also called Laplace expansion), and it works along any row or any column.</p>

<h3>Minors and Cofactors</h3>

<div class="env-block definition">
<div class="env-title">Definition 8.4.1 (Minor and Cofactor)</div>
<div class="env-body">
<p>Let \\(A\\) be an \\(n \\times n\\) matrix.</p>
<ul>
<li>The <em>\\((i,j)\\)-minor</em> \\(M_{ij}\\) is the determinant of the \\((n-1) \\times (n-1)\\) matrix obtained by deleting row \\(i\\) and column \\(j\\) from \\(A\\).</li>
<li>The <em>\\((i,j)\\)-cofactor</em> is \\(C_{ij} = (-1)^{i+j} M_{ij}\\).</li>
</ul>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.4.2 (Checkerboard Pattern)</div>
<div class="env-body">
<p>The sign factor \\((-1)^{i+j}\\) follows a checkerboard pattern:</p>
\\[
\\begin{pmatrix} + & - & + & \\cdots \\\\ - & + & - & \\cdots \\\\ + & - & + & \\cdots \\\\ \\vdots & \\vdots & \\vdots & \\ddots \\end{pmatrix}.
\\]
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 8.4.3 (Cofactor Expansion Along Row \\(i\\))</div>
<div class="env-body">
<p>For any row \\(i\\),</p>
\\[
\\det(A) = \\sum_{j=1}^{n} a_{ij} C_{ij} = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Sketch for Row 1)</div>
<div class="env-body">
<p>Write the first row as \\(\\mathbf{r}_1 = a_{11}\\mathbf{e}_1 + a_{12}\\mathbf{e}_2 + \\cdots + a_{1n}\\mathbf{e}_n\\). By multilinearity in row 1:</p>
\\[
\\det(A) = \\sum_{j=1}^{n} a_{1j} \\det(A_j),
\\]
<p>where \\(A_j\\) is \\(A\\) with \\(\\mathbf{e}_j\\) in place of row 1. For each \\(A_j\\), use row swaps to move \\(\\mathbf{e}_j\\) to position \\(j\\), then expand the resulting matrix. The result is \\((-1)^{1+j} M_{1j}\\), confirming the cofactor formula.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 8.4.4 (Cofactor Expansion Along Column \\(j\\))</div>
<div class="env-body">
<p>For any column \\(j\\),</p>
\\[
\\det(A) = \\sum_{i=1}^{n} a_{ij} C_{ij} = \\sum_{i=1}^{n} (-1)^{i+j} a_{ij} M_{ij}.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Since \\(\\det(A) = \\det(A^T)\\) (Theorem 8.3.8), a cofactor expansion along column \\(j\\) of \\(A\\) is the same as a cofactor expansion along row \\(j\\) of \\(A^T\\). The cofactors are the same because deleting row \\(i\\), column \\(j\\) from \\(A\\) is the same as deleting row \\(j\\), column \\(i\\) from \\(A^T\\), and \\((-1)^{i+j} = (-1)^{j+i}\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-cofactor-expansion"></div>

<div class="env-block example">
<div class="env-title">Example 8.4.5</div>
<div class="env-body">
<p>Compute \\(\\det\\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 0 \\end{pmatrix}\\) by expanding along the first row.</p>
\\[
\\det = 2 \\cdot \\det\\begin{pmatrix} -1 & 4 \\\\ 2 & 0 \\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix} 0 & 4 \\\\ 5 & 0 \\end{pmatrix} + 3 \\cdot \\det\\begin{pmatrix} 0 & -1 \\\\ 5 & 2 \\end{pmatrix}
\\]
\\[
= 2(0 - 8) - 1(0 - 20) + 3(0 + 5) = -16 + 20 + 15 = 19.
\\]
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.4.6 (Expansion Along a Row with Zeros)</div>
<div class="env-body">
<p>Compute \\(\\det\\begin{pmatrix} 3 & 0 & 0 & 2 \\\\ 1 & 0 & 5 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 4 & 0 & 1 & 3 \\end{pmatrix}\\) by expanding along column 2.</p>
<p>Since column 2 is all zeros, every term in the expansion is zero, so \\(\\det = 0\\). This makes sense: column 2 being zero means the matrix is singular.</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Computational Warning</div>
<div class="env-body">
<p>Cofactor expansion requires computing \\(n\\) determinants of size \\((n-1)\\times(n-1)\\), giving a time complexity of \\(O(n!)\\). For large matrices, row reduction to triangular form is vastly more efficient at \\(O(n^3)\\). Cofactor expansion is best used for small matrices (\\(n \\le 4\\)) or matrices with many zeros.</p>
</div>
</div>

<h3>Cofactor Expansion as a Theoretical Tool</h3>

<p>Despite its computational cost, cofactor expansion is invaluable theoretically. It proves that the determinant is a polynomial in the entries of \\(A\\), which has deep algebraic consequences. It also leads naturally to the adjugate matrix (Chapter 9) and to explicit formulas for the inverse.</p>
`,
            visualizations: [
                {
                    id: 'viz-cofactor-expansion',
                    title: 'Cofactor Expansion Visualizer (3\u00D73)',
                    description: 'Choose a row or column to expand along. The visualization highlights the relevant entries, their signs, and the corresponding 2\u00D72 minors. Entries with many zeros make the expansion shorter.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const A = [[2, 1, 3], [0, -1, 4], [5, 2, 0]];
                        let expandRow = 0;

                        const rowSlider = VizEngine.createSlider(controls, 'Row', 0, 2, 0, 1, val => {
                            expandRow = Math.round(val);
                        });

                        function minor(A, ri, cj) {
                            const sub = [];
                            for (let i = 0; i < 3; i++) {
                                if (i === ri) continue;
                                const row = [];
                                for (let j = 0; j < 3; j++) {
                                    if (j === cj) continue;
                                    row.push(A[i][j]);
                                }
                                sub.push(row);
                            }
                            return sub[0][0] * sub[1][1] - sub[0][1] * sub[1][0];
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const cellW = 56, cellH = 40;
                            const startX = 60, startY = 50;

                            // Title
                            viz.screenText('Cofactor Expansion Along Row ' + (expandRow + 1), viz.width / 2, 25, viz.colors.white, 15);

                            // Draw main matrix with brackets
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            // Left bracket
                            ctx.beginPath();
                            ctx.moveTo(startX, startY - 6);
                            ctx.lineTo(startX - 8, startY - 6);
                            ctx.lineTo(startX - 8, startY + 3 * cellH + 6);
                            ctx.lineTo(startX, startY + 3 * cellH + 6);
                            ctx.stroke();
                            // Right bracket
                            const rX = startX + 3 * cellW;
                            ctx.beginPath();
                            ctx.moveTo(rX, startY - 6);
                            ctx.lineTo(rX + 8, startY - 6);
                            ctx.lineTo(rX + 8, startY + 3 * cellH + 6);
                            ctx.lineTo(rX, startY + 3 * cellH + 6);
                            ctx.stroke();

                            // Matrix entries
                            ctx.font = '16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (let i = 0; i < 3; i++) {
                                for (let j = 0; j < 3; j++) {
                                    const px = startX + j * cellW + cellW / 2;
                                    const py = startY + i * cellH + cellH / 2;

                                    // Highlight expansion row
                                    if (i === expandRow) {
                                        ctx.fillStyle = viz.colors.orange + '33';
                                        ctx.fillRect(startX + j * cellW, startY + i * cellH, cellW, cellH);
                                    }
                                    // Dim deleted rows/cols for current column
                                    ctx.fillStyle = i === expandRow ? viz.colors.orange : viz.colors.white;
                                    ctx.fillText(A[i][j].toString(), px, py);
                                }
                            }

                            // Show expansion terms below
                            let detVal = 0;
                            const termsY = startY + 3 * cellH + 40;
                            viz.screenText('det = ', 40, termsY, viz.colors.white, 14, 'left');

                            let xPos = 80;
                            for (let j = 0; j < 3; j++) {
                                const sign = Math.pow(-1, expandRow + j);
                                const entry = A[expandRow][j];
                                const m = minor(A, expandRow, j);
                                const cofVal = sign * entry * m;
                                detVal += cofVal;

                                const signStr = sign > 0 ? '+' : '\u2212';
                                const prefix = j === 0 ? (sign > 0 ? '' : '\u2212') : (sign > 0 ? ' + ' : ' \u2212 ');
                                const termStr = prefix + Math.abs(entry) + '\u00B7(' + m + ')';

                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '13px -apple-system,monospace';
                                ctx.textAlign = 'left';
                                ctx.fillText(termStr, xPos, termsY);
                                xPos += ctx.measureText(termStr).width + 6;

                                // Show minor matrices
                                const minorY = termsY + 35 + j * 55;
                                const sub = [];
                                for (let ii = 0; ii < 3; ii++) {
                                    if (ii === expandRow) continue;
                                    const row = [];
                                    for (let jj = 0; jj < 3; jj++) {
                                        if (jj === j) continue;
                                        row.push(A[ii][jj]);
                                    }
                                    sub.push(row);
                                }
                                const signChar = (expandRow + j) % 2 === 0 ? '+' : '\u2212';
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('C_' + (expandRow+1) + (j+1) + ' = (' + signChar + ') \u00B7 det[' + sub[0] + '; ' + sub[1] + '] = ' + (sign * m), 40, minorY);
                            }

                            viz.screenText('= ' + detVal, xPos + 10, termsY, viz.colors.orange, 14, 'left');
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 3 & 1 & 0 \\\\ 0 & 4 & -1 \\end{pmatrix}\\) by cofactor expansion along the first row.',
                    hint: 'The formula is \\(a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}\\). Two of the entries are nonzero.',
                    solution: '\\(\\det = 1 \\cdot \\det\\begin{pmatrix} 1 & 0 \\\\ 4 & -1 \\end{pmatrix} - 0 \\cdot (\\ldots) + 2 \\cdot \\det\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix} = 1(-1 - 0) + 2(12 - 0) = -1 + 24 = 23\\).'
                },
                {
                    question: 'Compute the same determinant by expanding along column 2 instead. Verify you get the same answer.',
                    hint: 'Column 2 has entries \\(0, 1, 4\\). The zero entry saves work.',
                    solution: 'Expanding along column 2: \\((-1)^{1+2}(0)M_{12} + (-1)^{2+2}(1)M_{22} + (-1)^{3+2}(4)M_{32}\\). \\(M_{22} = \\det\\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix} = -1\\). \\(M_{32} = \\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 0 \\end{pmatrix} = -6\\). So \\(\\det = 0 + 1(-1) + (-4)(-6) = -1 + 24 = 23\\). Same answer.'
                },
                {
                    question: 'For a 4\u00D74 matrix with a row of zeros, explain without computation why the determinant is zero. How does cofactor expansion make this obvious?',
                    hint: 'If row \\(i\\) is all zeros, what happens when you expand along that row?',
                    solution: 'Expanding along the zero row: \\(\\det(A) = \\sum_j a_{ij} C_{ij}\\). Since \\(a_{ij} = 0\\) for all \\(j\\), every term is zero, so \\(\\det(A) = 0\\). This is also a direct consequence of multilinearity (Lemma 8.2.6).'
                },
                {
                    question: 'Let \\(A\\) be the \\(n \\times n\\) matrix with \\(a_{ij} = 1\\) if \\(|i - j| \\le 1\\) and \\(a_{ij} = 0\\) otherwise (a tridiagonal matrix of ones). Compute \\(\\det(A)\\) for \\(n = 1, 2, 3, 4\\) using cofactor expansion.',
                    hint: 'For each \\(n\\), expand along the first row or column. You should find a recurrence relation.',
                    solution: '\\(n=1\\): \\(\\det = 1\\). \\(n=2\\): \\(\\det\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix} = 0\\). \\(n=3\\): expand row 1: \\(1 \\cdot \\det\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix} + 0 = 0 - 1 = -1\\). \\(n=4\\): by the recurrence \\(D_n = D_{n-1} - D_{n-2}\\), \\(D_4 = -1 - 0 = -1\\).'
                },
                {
                    question: 'Prove that cofactor expansion along row \\(i\\) and cofactor expansion along row \\(i\'\\) give the same result (i.e., the determinant is well-defined regardless of which row you expand along).',
                    hint: 'Both expressions satisfy properties (P1), (P2), (P3). What does uniqueness tell you?',
                    solution: 'Fix any row \\(i\\). The function \\(D_i(A) = \\sum_j a_{ij} C_{ij}\\) satisfies: (P1) it is multilinear in the rows (the cofactors \\(C_{ij}\\) do not depend on row \\(i\\)); (P2) if two rows are equal, row operations can reduce to a case with two identical rows in the minor; (P3) \\(D_i(I) = a_{ii} \\cdot 1 = 1\\). By uniqueness (Theorem 8.2.7), \\(D_i\\) is the same function for all \\(i\\).'
                }
            ]
        },

        // ========== SECTION 5: The Leibniz Formula ==========
        {
            id: 'sec08-05-leibniz-formula',
            title: 'The Leibniz Formula',
            content: `
<h2>8.5 The Leibniz Formula</h2>

<p>We now arrive at the explicit formula for the determinant in terms of permutations. This is the <em>Leibniz formula</em>, and it makes the uniqueness argument from Section 8.2 completely explicit. While rarely used for hand computation (it has \\(n!\\) terms), it is essential for theoretical work and reveals the deep algebraic structure of the determinant.</p>

<h3>Permutations</h3>

<div class="env-block definition">
<div class="env-title">Definition 8.5.1 (Permutation)</div>
<div class="env-body">
<p>A <em>permutation</em> of \\(\\{1, 2, \\ldots, n\\}\\) is a bijection \\(\\sigma\\colon \\{1, \\ldots, n\\} \\to \\{1, \\ldots, n\\}\\). We write \\(\\sigma\\) in one-line notation as \\((\\sigma(1), \\sigma(2), \\ldots, \\sigma(n))\\). The set of all permutations of \\(\\{1, \\ldots, n\\}\\) is denoted \\(S_n\\), the <em>symmetric group</em>. It contains \\(n!\\) elements.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 8.5.2 (Inversions and Sign)</div>
<div class="env-body">
<p>An <em>inversion</em> in a permutation \\(\\sigma\\) is a pair \\((i, j)\\) with \\(i < j\\) but \\(\\sigma(i) > \\sigma(j)\\). The <em>sign</em> (or <em>signature</em>) of \\(\\sigma\\) is</p>
\\[
\\operatorname{sgn}(\\sigma) = (-1)^{\\text{number of inversions}} = \\begin{cases} +1 & \\text{if } \\sigma \\text{ is even (even number of inversions),} \\\\ -1 & \\text{if } \\sigma \\text{ is odd.} \\end{cases}
\\]
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.5.3</div>
<div class="env-body">
<p>For \\(n = 3\\), consider \\(\\sigma = (2, 3, 1)\\). The inversions are: \\((1,3)\\) since \\(\\sigma(1) = 2 > 1 = \\sigma(3)\\), and \\((2,3)\\) since \\(\\sigma(2) = 3 > 1 = \\sigma(3)\\). There are 2 inversions, so \\(\\operatorname{sgn}(\\sigma) = (-1)^2 = +1\\). This is an even permutation.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.5.4</div>
<div class="env-body">
<p>For \\(\\sigma = (2, 1, 3)\\) in \\(S_3\\): the only inversion is \\((1,2)\\) since \\(\\sigma(1) = 2 > 1 = \\sigma(2)\\). So \\(\\operatorname{sgn}(\\sigma) = -1\\) (odd permutation). This permutation is a single transposition swapping 1 and 2.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.5.5</div>
<div class="env-body">
<p>The sign of a permutation can also be defined as \\((-1)^k\\) where \\(k\\) is the number of transpositions (swaps of two elements) needed to build \\(\\sigma\\) from the identity. This is consistent because every transposition changes the parity of the number of inversions.</p>
</div>
</div>

<h3>The Leibniz Formula</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 8.5.6 (Leibniz Formula)</div>
<div class="env-body">
<p>For an \\(n \\times n\\) matrix \\(A = (a_{ij})\\),</p>
\\[
\\det(A) = \\sum_{\\sigma \\in S_n} \\operatorname{sgn}(\\sigma) \\prod_{i=1}^{n} a_{i,\\sigma(i)} = \\sum_{\\sigma \\in S_n} \\operatorname{sgn}(\\sigma) \\, a_{1\\sigma(1)} a_{2\\sigma(2)} \\cdots a_{n\\sigma(n)}.
\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>Write each row of \\(A\\) as a linear combination of standard basis vectors: row \\(i\\) is \\(\\sum_{j=1}^n a_{ij}\\mathbf{e}_j\\). By multilinearity (P1),</p>
\\[
\\det(A) = \\sum_{j_1=1}^n \\sum_{j_2=1}^n \\cdots \\sum_{j_n=1}^n a_{1j_1} a_{2j_2} \\cdots a_{nj_n} \\det(E),
\\]
<p>where \\(E\\) is the matrix with \\(\\mathbf{e}_{j_i}\\) in row \\(i\\). If any two indices \\(j_i = j_k\\) (with \\(i \\neq k\\)), then \\(E\\) has two equal rows, so \\(\\det(E) = 0\\) by (P2). The surviving terms have \\((j_1, \\ldots, j_n)\\) a permutation \\(\\sigma\\) of \\((1, \\ldots, n)\\).</p>
<p>For such a permutation, the matrix \\(E\\) is the permutation matrix \\(P_\\sigma\\). To bring \\(P_\\sigma\\) to \\(I\\), we need to undo \\(\\sigma\\) by transpositions, and each transposition flips the sign. Thus \\(\\det(P_\\sigma) = \\operatorname{sgn}(\\sigma)\\). By (P3), \\(\\det(I) = \\det(P_{\\text{id}}) = +1\\), consistent with \\(\\operatorname{sgn}(\\text{id}) = +1\\).</p>
<div class="qed">∎</div>
</div>
</div>

<h3>Verification for \\(n = 2\\) and \\(n = 3\\)</h3>

<div class="env-block example">
<div class="env-title">Example 8.5.7 (\\(n = 2\\))</div>
<div class="env-body">
<p>\\(S_2 = \\{(1,2),\\; (2,1)\\}\\). Signs: \\(\\operatorname{sgn}(1,2) = +1\\), \\(\\operatorname{sgn}(2,1) = -1\\).</p>
\\[
\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = (+1)\\,a \\cdot d + (-1)\\,b \\cdot c = ad - bc. \\quad \\checkmark
\\]
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.5.8 (\\(n = 3\\): The Rule of Sarrus)</div>
<div class="env-body">
<p>\\(S_3\\) has \\(3! = 6\\) permutations. The positive (even) permutations contribute the "downward diagonals" and the negative (odd) ones contribute the "upward diagonals":</p>
\\[
\\det\\begin{pmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{pmatrix} = a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3 - c_1 b_2 a_3 - b_1 a_2 c_3 - a_1 c_2 b_3.
\\]
<p>This is Sarrus' rule. It works only for 3\u00D73 matrices; there is no analogous "diagonal" shortcut for \\(n \\ge 4\\).</p>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Warning: Computational Complexity</div>
<div class="env-body">
<p>The Leibniz formula has \\(n!\\) terms. For \\(n = 10\\), this is 3,628,800 terms; for \\(n = 20\\), over \\(2.4 \\times 10^{18}\\). Even on modern computers, this is infeasible for large \\(n\\). The formula is primarily a theoretical tool. In practice, one computes determinants via row reduction (\\(O(n^3)\\)) or LU factorization.</p>
</div>
</div>

<h3>The Determinant as a Polynomial</h3>

<div class="env-block remark">
<div class="env-title">Remark 8.5.9</div>
<div class="env-body">
<p>The Leibniz formula shows that \\(\\det(A)\\) is a polynomial of degree \\(n\\) in the \\(n^2\\) entries of \\(A\\). Each monomial has degree exactly \\(n\\) (one factor from each row), and the polynomial is homogeneous. This polynomial nature is crucial for defining the <em>characteristic polynomial</em> \\(\\det(A - \\lambda I)\\), which we will study in Chapter 10.</p>
</div>
</div>

<p>We now have three complementary ways to think about the determinant: the axiomatic definition via (P1)-(P2)-(P3), the recursive cofactor expansion, and the explicit Leibniz formula. Each perspective illuminates different aspects. In the next chapter, we put the determinant to work: solving systems via Cramer's rule, computing inverses via the adjugate, and measuring volumes in higher dimensions.</p>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'List all 6 permutations in \\(S_3\\) and compute the sign of each by counting inversions.',
                    hint: 'A permutation \\((a,b,c)\\) has an inversion at \\((i,j)\\) whenever \\(i < j\\) and the \\(i\\)-th entry exceeds the \\(j\\)-th entry.',
                    solution: '\\((1,2,3)\\): 0 inversions, sign \\(+1\\). \\((1,3,2)\\): 1 inversion \\((2,3)\\), sign \\(-1\\). \\((2,1,3)\\): 1 inversion \\((1,2)\\), sign \\(-1\\). \\((2,3,1)\\): 2 inversions, sign \\(+1\\). \\((3,1,2)\\): 2 inversions, sign \\(+1\\). \\((3,2,1)\\): 3 inversions, sign \\(-1\\).'
                },
                {
                    question: 'Use the Leibniz formula to compute \\(\\det\\begin{pmatrix} 0 & 1 & 2 \\\\ 1 & 0 & 3 \\\\ 4 & 0 & 0 \\end{pmatrix}\\).',
                    hint: 'Most of the 6 terms will be zero because the matrix has many zero entries. Only terms where no factor is zero survive.',
                    solution: 'The 6 terms are: \\((1,2,3) \\to 0 \\cdot 0 \\cdot 0 = 0\\). \\((1,3,2) \\to -(0 \\cdot 3 \\cdot 0) = 0\\). \\((2,1,3) \\to -(1 \\cdot 1 \\cdot 0) = 0\\). \\((2,3,1) \\to +(1 \\cdot 3 \\cdot 4) = 12\\). \\((3,1,2) \\to +(2 \\cdot 1 \\cdot 0) = 0\\). \\((3,2,1) \\to -(2 \\cdot 0 \\cdot 4) = 0\\). Total: \\(\\det = 12\\).'
                },
                {
                    question: 'Prove that \\(\\det(A^T) = \\det(A)\\) using the Leibniz formula directly.',
                    hint: 'In the Leibniz formula for \\(A^T\\), the entry \\((A^T)_{i,\\sigma(i)} = a_{\\sigma(i),i}\\). Reindex the sum using \\(\\tau = \\sigma^{-1}\\).',
                    solution: '\\(\\det(A^T) = \\sum_{\\sigma} \\operatorname{sgn}(\\sigma) \\prod_i a_{\\sigma(i),i}\\). Setting \\(\\tau = \\sigma^{-1}\\) (so \\(\\operatorname{sgn}(\\tau) = \\operatorname{sgn}(\\sigma)\\) and \\(\\sigma(\\tau(j)) = j\\)), the product becomes \\(\\prod_j a_{j,\\tau(j)}\\). As \\(\\sigma\\) ranges over \\(S_n\\), so does \\(\\tau\\). Thus \\(\\det(A^T) = \\sum_{\\tau} \\operatorname{sgn}(\\tau) \\prod_j a_{j,\\tau(j)} = \\det(A)\\).'
                },
                {
                    question: 'Using the Leibniz formula, prove that the determinant of a matrix with a row of zeros is zero (re-deriving Lemma 8.2.6).',
                    hint: 'Every term in the Leibniz formula includes one factor from each row.',
                    solution: 'If row \\(k\\) is all zeros, then \\(a_{k,j} = 0\\) for all \\(j\\). Every term in the Leibniz sum contains the factor \\(a_{k,\\sigma(k)}\\), which is 0. Therefore every term is 0 and \\(\\det(A) = 0\\).'
                },
                {
                    question: 'How many nonzero terms does the Leibniz formula produce for the \\(n \\times n\\) identity matrix? What are they?',
                    hint: 'The identity matrix has \\(a_{ij} = \\delta_{ij}\\) (Kronecker delta). For which permutations is \\(\\prod_i a_{i,\\sigma(i)} \\neq 0\\)?',
                    solution: 'We need \\(a_{i,\\sigma(i)} \\neq 0\\) for all \\(i\\), which requires \\(\\sigma(i) = i\\) for all \\(i\\). The only such permutation is the identity \\(\\sigma = \\operatorname{id}\\). It contributes \\(\\operatorname{sgn}(\\operatorname{id}) \\cdot 1 = +1\\). There is exactly 1 nonzero term, confirming \\(\\det(I) = 1\\).'
                },
                {
                    question: 'A permutation matrix \\(P_\\sigma\\) has a 1 in position \\((i, \\sigma(i))\\) for each \\(i\\) and zeros elsewhere. Prove that \\(\\det(P_\\sigma) = \\operatorname{sgn}(\\sigma)\\) using the Leibniz formula.',
                    hint: 'Which terms in the sum over \\(S_n\\) are nonzero?',
                    solution: 'The \\((i,j)\\) entry of \\(P_\\sigma\\) is 1 if \\(j = \\sigma(i)\\) and 0 otherwise. In the Leibniz sum, the term for permutation \\(\\tau\\) is \\(\\operatorname{sgn}(\\tau) \\prod_i (P_\\sigma)_{i,\\tau(i)}\\). This product is nonzero only if \\(\\tau(i) = \\sigma(i)\\) for all \\(i\\), i.e., \\(\\tau = \\sigma\\). So \\(\\det(P_\\sigma) = \\operatorname{sgn}(\\sigma) \\cdot 1 = \\operatorname{sgn}(\\sigma)\\).'
                }
            ]
        }
    ]
});
