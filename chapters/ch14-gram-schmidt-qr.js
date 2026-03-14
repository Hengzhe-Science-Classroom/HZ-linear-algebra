// === Chapter 14: Gram-Schmidt & QR Factorization ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch14',
    number: 14,
    title: 'Gram-Schmidt & QR Factorization',
    subtitle: 'Building orthonormal bases and decomposing matrices',
    sections: [
        // ========== SECTION 1: Orthonormal Bases ==========
        {
            id: 'sec14-1-orthonormal-bases',
            title: 'Orthonormal Bases',
            content: `
<h2>14.1 Orthonormal Bases</h2>

<p>In Chapter 13 we introduced inner products and orthogonality. Now we put these tools to work. An <em>orthonormal basis</em> is a basis whose vectors are mutually orthogonal and each of unit length. Such bases dramatically simplify computations: coordinates become dot products, matrices become orthogonal, and projections reduce to summation formulas. This section makes these claims precise.</p>

<div class="env-block definition">
    <div class="env-title">Definition 14.1.1 (Orthonormal Set)</div>
    <div class="env-body"><p>A set of vectors \\(\\{\\mathbf{q}_1, \\mathbf{q}_2, \\ldots, \\mathbf{q}_k\\}\\) in an inner product space is called <strong>orthonormal</strong> if</p>
    \\[
    \\langle \\mathbf{q}_i, \\mathbf{q}_j \\rangle = \\delta_{ij} = \\begin{cases} 1 & i = j, \\\\ 0 & i \\neq j, \\end{cases}
    \\]
    <p>where \\(\\delta_{ij}\\) is the Kronecker delta. In other words, the vectors are pairwise orthogonal and each has unit norm.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>"Orthonormal" combines two requirements: <strong>ortho</strong> (mutually perpendicular) and <strong>normal</strong> (unit length). An orthogonal set that is not normalized can always be made orthonormal by dividing each vector by its norm.</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 14.1.2 (Orthonormal Sets are Linearly Independent)</div>
    <div class="env-body"><p>Every orthonormal set is linearly independent.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Suppose \\(c_1 \\mathbf{q}_1 + c_2 \\mathbf{q}_2 + \\cdots + c_k \\mathbf{q}_k = \\mathbf{0}\\). Taking the inner product of both sides with \\(\\mathbf{q}_j\\) gives</p>
    \\[
    c_j = \\langle c_1 \\mathbf{q}_1 + \\cdots + c_k \\mathbf{q}_k,\\, \\mathbf{q}_j \\rangle = \\langle \\mathbf{0},\\, \\mathbf{q}_j \\rangle = 0
    \\]
    <p>for every \\(j\\). Therefore all coefficients vanish, and the set is linearly independent.</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 14.1.3 (Orthonormal Basis)</div>
    <div class="env-body"><p>An <strong>orthonormal basis</strong> for a finite-dimensional inner product space \\(V\\) is an orthonormal set that spans \\(V\\). Equivalently, it is an orthonormal set with exactly \\(\\dim V\\) elements.</p></div>
</div>

<h3>Coordinates via Dot Products</h3>

<p>The most striking advantage of an orthonormal basis is how easily it yields coordinates. In an arbitrary basis, finding coordinates requires solving a linear system. In an orthonormal basis, it requires only dot products.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 14.1.4 (Fourier Coefficients)</div>
    <div class="env-body"><p>Let \\(\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}\\) be an orthonormal basis for \\(V\\). For any \\(\\mathbf{v} \\in V\\),</p>
    \\[
    \\mathbf{v} = \\sum_{i=1}^{n} \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle \\, \\mathbf{q}_i.
    \\]
    <p>The scalars \\(c_i = \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle\\) are called the <strong>Fourier coefficients</strong> of \\(\\mathbf{v}\\) with respect to this basis.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Since \\(\\{\\mathbf{q}_i\\}\\) is a basis, write \\(\\mathbf{v} = \\sum_{i=1}^n c_i \\mathbf{q}_i\\). Taking the inner product with \\(\\mathbf{q}_j\\):</p>
    \\[
    \\langle \\mathbf{v}, \\mathbf{q}_j \\rangle = \\sum_{i=1}^{n} c_i \\langle \\mathbf{q}_i, \\mathbf{q}_j \\rangle = c_j.
    \\]
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Intuition</div>
    <div class="env-body"><p>In an orthonormal basis, finding the component of \\(\\mathbf{v}\\) along \\(\\mathbf{q}_i\\) is like casting a shadow: \\(\\langle \\mathbf{v}, \\mathbf{q}_i \\rangle\\) measures how much of \\(\\mathbf{v}\\) points in the \\(\\mathbf{q}_i\\) direction. This is exactly the orthogonal projection onto that direction.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-on-coords"></div>

<h3>Parseval's Identity</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 14.1.5 (Parseval's Identity)</div>
    <div class="env-body"><p>If \\(\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}\\) is an orthonormal basis and \\(\\mathbf{v} = \\sum c_i \\mathbf{q}_i\\), then</p>
    \\[
    \\|\\mathbf{v}\\|^2 = \\sum_{i=1}^{n} |c_i|^2 = \\sum_{i=1}^{n} |\\langle \\mathbf{v}, \\mathbf{q}_i \\rangle|^2.
    \\]
    <p>The norm of a vector equals the root-sum-of-squares of its Fourier coefficients.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Compute directly:</p>
    \\[
    \\|\\mathbf{v}\\|^2 = \\langle \\mathbf{v}, \\mathbf{v} \\rangle = \\left\\langle \\sum_i c_i \\mathbf{q}_i,\\, \\sum_j c_j \\mathbf{q}_j \\right\\rangle = \\sum_i \\sum_j c_i \\overline{c_j} \\, \\delta_{ij} = \\sum_i |c_i|^2.
    \\]
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 14.1.6</div>
    <div class="env-body"><p>The standard basis \\(\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}\\) for \\(\\mathbb{R}^3\\) is orthonormal. Given \\(\\mathbf{v} = (3, -1, 4)\\), the Fourier coefficients are simply</p>
    \\[
    c_1 = \\langle \\mathbf{v}, \\mathbf{e}_1 \\rangle = 3, \\quad c_2 = -1, \\quad c_3 = 4.
    \\]
    <p>Parseval gives \\(\\|\\mathbf{v}\\|^2 = 9 + 1 + 16 = 26\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 14.1.7</div>
    <div class="env-body"><p>Consider the orthonormal basis \\(\\left\\{\\frac{1}{\\sqrt{2}}\\binom{1}{1},\\; \\frac{1}{\\sqrt{2}}\\binom{1}{-1}\\right\\}\\) for \\(\\mathbb{R}^2\\). To express \\(\\mathbf{v} = \\binom{3}{1}\\) in this basis, compute</p>
    \\[
    c_1 = \\frac{1}{\\sqrt{2}}(3 + 1) = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}, \\qquad c_2 = \\frac{1}{\\sqrt{2}}(3 - 1) = \\frac{2}{\\sqrt{2}} = \\sqrt{2}.
    \\]
    <p>Check: \\(c_1^2 + c_2^2 = 8 + 2 = 10 = \\|\\mathbf{v}\\|^2\\). \\(\\checkmark\\)</p></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-on-coords',
                    title: 'Coordinates in an Orthonormal Basis',
                    description: 'Drag the blue vector \\(\\mathbf{v}\\). The Fourier coefficients \\(c_1 = \\langle \\mathbf{v}, \\mathbf{q}_1 \\rangle\\) and \\(c_2 = \\langle \\mathbf{v}, \\mathbf{q}_2 \\rangle\\) are computed via dot products and displayed. The dashed lines show the projections.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        let angle = Math.PI / 6;
                        const q1 = () => [Math.cos(angle), Math.sin(angle)];
                        const q2 = () => [-Math.sin(angle), Math.cos(angle)];

                        const vDrag = viz.addDraggable('v', 3, 2, viz.colors.blue, 8, (wx, wy) => {
                            vDrag.x = wx; vDrag.y = wy;
                        });

                        VizEngine.createSlider(controls, 'Angle', 0, 90, 30, 1, (val) => {
                            angle = val * Math.PI / 180;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const qq1 = q1(), qq2 = q2();
                            const vx = vDrag.x, vy = vDrag.y;

                            // Draw ON basis vectors (extended)
                            viz.drawVector(0, 0, qq1[0] * 5, qq1[1] * 5, viz.colors.teal + '44', '', 1);
                            viz.drawVector(0, 0, qq2[0] * 5, qq2[1] * 5, viz.colors.orange + '44', '', 1);
                            viz.drawVector(0, 0, qq1[0], qq1[1], viz.colors.teal, 'q\u2081', 2.5);
                            viz.drawVector(0, 0, qq2[0], qq2[1], viz.colors.orange, 'q\u2082', 2.5);

                            // Fourier coefficients
                            const c1 = vx * qq1[0] + vy * qq1[1];
                            const c2 = vx * qq2[0] + vy * qq2[1];

                            // Projections
                            const p1x = c1 * qq1[0], p1y = c1 * qq1[1];
                            const p2x = c2 * qq2[0], p2y = c2 * qq2[1];

                            viz.drawSegment(vx, vy, p1x, p1y, viz.colors.teal + '88', 1.5, true);
                            viz.drawSegment(vx, vy, p2x, p2y, viz.colors.orange + '88', 1.5, true);
                            viz.drawSegment(0, 0, p1x, p1y, viz.colors.teal, 2);
                            viz.drawSegment(0, 0, p2x, p2y, viz.colors.orange, 2);

                            // The vector
                            viz.drawVector(0, 0, vx, vy, viz.colors.blue, 'v', 2.5);

                            // Info
                            viz.screenText('c\u2081 = \u27E8v, q\u2081\u27E9 = ' + c1.toFixed(2), 12, 20, viz.colors.teal, 13, 'left', 'top');
                            viz.screenText('c\u2082 = \u27E8v, q\u2082\u27E9 = ' + c2.toFixed(2), 12, 38, viz.colors.orange, 13, 'left', 'top');
                            viz.screenText('\u2016v\u2016\u00B2 = ' + (vx*vx + vy*vy).toFixed(2) + '   c\u2081\u00B2+c\u2082\u00B2 = ' + (c1*c1 + c2*c2).toFixed(2), 12, 56, viz.colors.white, 12, 'left', 'top');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the set \\(\\left\\{\\frac{1}{\\sqrt{3}}(1,1,1),\\; \\frac{1}{\\sqrt{2}}(1,-1,0),\\; \\frac{1}{\\sqrt{6}}(1,1,-2)\\right\\}\\) is orthonormal in \\(\\mathbb{R}^3\\).',
                    hint: 'Verify that every pair has dot product 0 and each vector has norm 1.',
                    solution: 'Compute all pairwise dot products: \\(\\frac{1}{\\sqrt{3}}\\cdot\\frac{1}{\\sqrt{2}}(1\\cdot1 + 1\\cdot(-1) + 1\\cdot0) = 0\\), \\(\\frac{1}{\\sqrt{3}}\\cdot\\frac{1}{\\sqrt{6}}(1 + 1 - 2) = 0\\), \\(\\frac{1}{\\sqrt{2}}\\cdot\\frac{1}{\\sqrt{6}}(1 - 1 + 0) = 0\\). Each norm: \\(\\|\\mathbf{q}_1\\|^2 = \\frac{1}{3}(1+1+1) = 1\\), \\(\\|\\mathbf{q}_2\\|^2 = \\frac{1}{2}(1+1+0) = 1\\), \\(\\|\\mathbf{q}_3\\|^2 = \\frac{1}{6}(1+1+4) = 1\\). All conditions are met.'
                },
                {
                    question: 'Let \\(\\{\\mathbf{q}_1, \\mathbf{q}_2\\}\\) be an orthonormal basis for \\(\\mathbb{R}^2\\). If \\(\\mathbf{v} = 5\\mathbf{q}_1 - 3\\mathbf{q}_2\\), compute \\(\\|\\mathbf{v}\\|\\).',
                    hint: 'Use Parseval\'s identity.',
                    solution: 'By Parseval, \\(\\|\\mathbf{v}\\|^2 = 5^2 + (-3)^2 = 25 + 9 = 34\\), so \\(\\|\\mathbf{v}\\| = \\sqrt{34}\\).'
                },
                {
                    question: 'Express \\(\\mathbf{v} = (2, 5)\\) in the orthonormal basis \\(\\left\\{\\frac{1}{\\sqrt{5}}(2,1),\\; \\frac{1}{\\sqrt{5}}(-1,2)\\right\\}\\).',
                    hint: 'Compute the Fourier coefficients \\(c_i = \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle\\).',
                    solution: '\\(c_1 = \\frac{1}{\\sqrt{5}}(4 + 5) = \\frac{9}{\\sqrt{5}} = \\frac{9\\sqrt{5}}{5}\\). \\(c_2 = \\frac{1}{\\sqrt{5}}(-2 + 10) = \\frac{8}{\\sqrt{5}} = \\frac{8\\sqrt{5}}{5}\\). Check: \\(c_1^2 + c_2^2 = \\frac{81}{5} + \\frac{64}{5} = \\frac{145}{5} = 29 = 4 + 25 = \\|\\mathbf{v}\\|^2\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Prove the Bessel inequality: if \\(\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_k\\}\\) is an orthonormal set (not necessarily a basis) in \\(V\\), then \\(\\sum_{i=1}^k |\\langle \\mathbf{v}, \\mathbf{q}_i \\rangle|^2 \\leq \\|\\mathbf{v}\\|^2\\) for any \\(\\mathbf{v} \\in V\\).',
                    hint: 'Consider the vector \\(\\mathbf{w} = \\mathbf{v} - \\sum_{i=1}^k \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle \\mathbf{q}_i\\) and compute \\(\\|\\mathbf{w}\\|^2 \\geq 0\\).',
                    solution: 'Define \\(\\mathbf{w} = \\mathbf{v} - \\sum_{i=1}^k c_i \\mathbf{q}_i\\) where \\(c_i = \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle\\). Then \\(\\|\\mathbf{w}\\|^2 = \\|\\mathbf{v}\\|^2 - 2\\sum |c_i|^2 + \\sum |c_i|^2 = \\|\\mathbf{v}\\|^2 - \\sum |c_i|^2\\). Since \\(\\|\\mathbf{w}\\|^2 \\geq 0\\), we get \\(\\sum |c_i|^2 \\leq \\|\\mathbf{v}\\|^2\\). Equality holds if and only if \\(\\mathbf{v}\\) lies in the span of \\(\\{\\mathbf{q}_i\\}\\).'
                },
                {
                    question: 'Why is the standard basis \\(\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}\\) orthonormal with respect to the standard inner product on \\(\\mathbb{R}^n\\) but not necessarily orthonormal with respect to an arbitrary inner product?',
                    hint: 'An inner product on \\(\\mathbb{R}^n\\) can be defined via a positive definite matrix \\(A\\): \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle_A = \\mathbf{u}^T A \\mathbf{v}\\).',
                    solution: 'With the standard inner product (\\(A = I\\)), \\(\\langle \\mathbf{e}_i, \\mathbf{e}_j \\rangle = \\mathbf{e}_i^T \\mathbf{e}_j = \\delta_{ij}\\). But for \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle_A = \\mathbf{u}^T A \\mathbf{v}\\), we get \\(\\langle \\mathbf{e}_i, \\mathbf{e}_j \\rangle_A = a_{ij}\\). This equals \\(\\delta_{ij}\\) only when \\(A = I\\). For instance, with \\(A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}\\), we get \\(\\langle \\mathbf{e}_1, \\mathbf{e}_2 \\rangle_A = 1 \\neq 0\\).'
                }
            ]
        },

        // ========== SECTION 2: The Gram-Schmidt Process ==========
        {
            id: 'sec14-2-gram-schmidt',
            title: 'The Gram-Schmidt Process',
            content: `
<h2>14.2 The Gram-Schmidt Process</h2>

<p>We know orthonormal bases are desirable. The natural question is: given an arbitrary basis, can we convert it into an orthonormal one? The answer is yes, and the constructive algorithm that does this is the <strong>Gram-Schmidt process</strong>.</p>

<div class="env-block intuition">
    <div class="env-title">The Core Idea</div>
    <div class="env-body"><p>Gram-Schmidt works iteratively. At each step, take the next basis vector, subtract off its components along all previously constructed orthonormal vectors (removing the "already covered" directions), and normalize the remainder. What is left is the genuinely new direction contributed by that vector.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 14.2.1 (Gram-Schmidt Orthogonalization)</div>
    <div class="env-body"><p>Let \\(\\{\\mathbf{a}_1, \\mathbf{a}_2, \\ldots, \\mathbf{a}_n\\}\\) be a basis for an inner product space \\(V\\). Define:</p>
    \\[
    \\mathbf{u}_1 = \\mathbf{a}_1, \\qquad \\mathbf{q}_1 = \\frac{\\mathbf{u}_1}{\\|\\mathbf{u}_1\\|}
    \\]
    <p>and for \\(k = 2, 3, \\ldots, n\\):</p>
    \\[
    \\mathbf{u}_k = \\mathbf{a}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle \\, \\mathbf{q}_j, \\qquad \\mathbf{q}_k = \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|}.
    \\]
    <p>Then \\(\\{\\mathbf{q}_1, \\mathbf{q}_2, \\ldots, \\mathbf{q}_n\\}\\) is an orthonormal basis for \\(V\\). Moreover, for each \\(k\\),</p>
    \\[
    \\operatorname{span}(\\mathbf{q}_1, \\ldots, \\mathbf{q}_k) = \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k).
    \\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>We proceed by induction on \\(k\\).</p>
    <p><strong>Base case</strong> (\\(k=1\\)): \\(\\mathbf{q}_1 = \\mathbf{a}_1/\\|\\mathbf{a}_1\\|\\) is a unit vector spanning the same line as \\(\\mathbf{a}_1\\). Since \\(\\mathbf{a}_1 \\neq \\mathbf{0}\\) (it is a basis vector), this is well-defined.</p>
    <p><strong>Inductive step</strong>: Assume \\(\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_{k-1}\\}\\) is orthonormal and spans the same subspace as \\(\\{\\mathbf{a}_1, \\ldots, \\mathbf{a}_{k-1}\\}\\). Define</p>
    \\[
    \\mathbf{u}_k = \\mathbf{a}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle \\, \\mathbf{q}_j.
    \\]
    <p>For each \\(i \\leq k-1\\):</p>
    \\[
    \\langle \\mathbf{u}_k, \\mathbf{q}_i \\rangle = \\langle \\mathbf{a}_k, \\mathbf{q}_i \\rangle - \\sum_{j=1}^{k-1} \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle \\underbrace{\\langle \\mathbf{q}_j, \\mathbf{q}_i \\rangle}_{\\delta_{ji}} = \\langle \\mathbf{a}_k, \\mathbf{q}_i \\rangle - \\langle \\mathbf{a}_k, \\mathbf{q}_i \\rangle = 0.
    \\]
    <p>Also \\(\\mathbf{u}_k \\neq \\mathbf{0}\\), since \\(\\mathbf{a}_k \\notin \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_{k-1})\\) (linear independence). Setting \\(\\mathbf{q}_k = \\mathbf{u}_k / \\|\\mathbf{u}_k\\|\\) completes the step.</p>
    <div class="qed">&#8718;</div></div>
</div>

<h3>Step-by-Step Example</h3>

<div class="env-block example">
    <div class="env-title">Example 14.2.2 (Gram-Schmidt in \\(\\mathbb{R}^3\\))</div>
    <div class="env-body"><p>Apply Gram-Schmidt to \\(\\mathbf{a}_1 = (1, 1, 1)\\), \\(\\mathbf{a}_2 = (1, 1, 0)\\), \\(\\mathbf{a}_3 = (1, 0, 0)\\).</p>
    <p><strong>Step 1:</strong> \\(\\mathbf{u}_1 = (1,1,1)\\), \\(\\|\\mathbf{u}_1\\| = \\sqrt{3}\\), \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{3}}(1,1,1)\\).</p>
    <p><strong>Step 2:</strong> \\(\\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{1}{\\sqrt{3}}(1+1+0) = \\frac{2}{\\sqrt{3}}\\).</p>
    \\[
    \\mathbf{u}_2 = (1,1,0) - \\frac{2}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{3}}(1,1,1) = (1,1,0) - \\frac{2}{3}(1,1,1) = \\left(\\frac{1}{3}, \\frac{1}{3}, -\\frac{2}{3}\\right).
    \\]
    <p>\\(\\|\\mathbf{u}_2\\| = \\frac{1}{3}\\sqrt{1+1+4} = \\frac{\\sqrt{6}}{3}\\), so \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 1, -2)\\).</p>
    <p><strong>Step 3:</strong> \\(\\langle \\mathbf{a}_3, \\mathbf{q}_1 \\rangle = \\frac{1}{\\sqrt{3}}\\), \\(\\langle \\mathbf{a}_3, \\mathbf{q}_2 \\rangle = \\frac{1}{\\sqrt{6}}\\).</p>
    \\[
    \\mathbf{u}_3 = (1,0,0) - \\frac{1}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{3}}(1,1,1) - \\frac{1}{\\sqrt{6}} \\cdot \\frac{1}{\\sqrt{6}}(1,1,-2) = (1,0,0) - \\frac{1}{3}(1,1,1) - \\frac{1}{6}(1,1,-2).
    \\]
    \\[
    = \\left(1 - \\frac{1}{3} - \\frac{1}{6},\\; -\\frac{1}{3} - \\frac{1}{6},\\; -\\frac{1}{3} + \\frac{1}{3}\\right) = \\left(\\frac{1}{2}, -\\frac{1}{2}, 0\\right).
    \\]
    <p>\\(\\|\\mathbf{u}_3\\| = \\frac{1}{\\sqrt{2}}\\), so \\(\\mathbf{q}_3 = \\frac{1}{\\sqrt{2}}(1, -1, 0)\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-gram-schmidt"></div>

<div class="env-block warning">
    <div class="env-title">Numerical Warning</div>
    <div class="env-body"><p>In floating-point arithmetic, the classical Gram-Schmidt algorithm can suffer from severe loss of orthogonality when the input vectors are nearly linearly dependent. The <strong>modified Gram-Schmidt</strong> variant (which re-orthogonalizes against the already-computed \\(\\mathbf{u}_j\\) rather than the original \\(\\mathbf{a}_j\\)) is more stable. Even better is the Householder approach (Section 14.5).</p></div>
</div>

<h3>Modified Gram-Schmidt</h3>

<p>The <strong>modified Gram-Schmidt</strong> (MGS) algorithm reorganizes the computation to improve numerical stability. Instead of computing all projections using the original \\(\\mathbf{a}_k\\), MGS sequentially subtracts projections from a running copy of the vector.</p>

<div class="env-block definition">
    <div class="env-title">Algorithm 14.2.3 (Modified Gram-Schmidt)</div>
    <div class="env-body"><p>For \\(k = 1, 2, \\ldots, n\\):</p>
    <ol>
    <li>Set \\(\\mathbf{v}_k = \\mathbf{a}_k\\).</li>
    <li>For \\(j = 1, 2, \\ldots, k-1\\): update \\(\\mathbf{v}_k \\leftarrow \\mathbf{v}_k - \\langle \\mathbf{v}_k, \\mathbf{q}_j \\rangle \\mathbf{q}_j\\).</li>
    <li>Set \\(\\mathbf{q}_k = \\mathbf{v}_k / \\|\\mathbf{v}_k\\|\\).</li>
    </ol>
    <p>The key difference from classical GS: in step 2, the inner products are computed with the <em>current</em> (partially orthogonalized) \\(\\mathbf{v}_k\\) rather than the original \\(\\mathbf{a}_k\\). This reduces the accumulation of rounding errors.</p></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-gram-schmidt',
                    title: 'Interactive Gram-Schmidt Process',
                    description: 'Watch the Gram-Schmidt process orthogonalize two vectors in \\(\\mathbb{R}^2\\). Drag \\(\\mathbf{a}_1\\) and \\(\\mathbf{a}_2\\) to see how the orthonormal basis \\(\\{\\mathbf{q}_1, \\mathbf{q}_2\\}\\) is constructed. The dashed line shows the projection being subtracted.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 45 });

                        const a1 = viz.addDraggable('a1', 3, 1, viz.colors.blue, 8, (wx, wy) => {
                            a1.x = wx; a1.y = wy;
                        });
                        const a2 = viz.addDraggable('a2', 1, 3, viz.colors.purple, 8, (wx, wy) => {
                            a2.x = wx; a2.y = wy;
                        });

                        let step = 0;
                        VizEngine.createButton(controls, 'Step', () => { step = (step + 1) % 4; });
                        VizEngine.createButton(controls, 'Reset', () => { step = 0; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const ax1 = a1.x, ay1 = a1.y;
                            const ax2 = a2.x, ay2 = a2.y;

                            // Step 0: show original vectors
                            viz.drawVector(0, 0, ax1, ay1, viz.colors.blue, 'a\u2081', 2);
                            viz.drawVector(0, 0, ax2, ay2, viz.colors.purple, 'a\u2082', 2);

                            const len1 = Math.sqrt(ax1*ax1 + ay1*ay1);

                            if (step >= 1 && len1 > 0.01) {
                                // q1 = a1 / ||a1||
                                const q1x = ax1 / len1, q1y = ay1 / len1;
                                viz.drawVector(0, 0, q1x, q1y, viz.colors.teal, 'q\u2081', 3);

                                if (step >= 2) {
                                    // projection of a2 onto q1
                                    const proj = ax2 * q1x + ay2 * q1y;
                                    const px = proj * q1x, py = proj * q1y;

                                    // show projection
                                    viz.drawSegment(0, 0, px, py, viz.colors.yellow, 2);
                                    viz.drawSegment(ax2, ay2, px, py, viz.colors.red + '88', 1.5, true);
                                    viz.drawPoint(px, py, viz.colors.yellow, 'proj', 4);

                                    // u2 = a2 - proj
                                    const u2x = ax2 - px, u2y = ay2 - py;
                                    viz.drawVector(0, 0, u2x, u2y, viz.colors.orange, 'u\u2082', 2);

                                    if (step >= 3) {
                                        const len2 = Math.sqrt(u2x*u2x + u2y*u2y);
                                        if (len2 > 0.01) {
                                            const q2x = u2x / len2, q2y = u2y / len2;
                                            viz.drawVector(0, 0, q2x, q2y, viz.colors.orange, 'q\u2082', 3);
                                        }
                                    }
                                }
                            }

                            // Step labels
                            const labels = [
                                'Step 0: Original basis {a\u2081, a\u2082}',
                                'Step 1: Normalize a\u2081 \u2192 q\u2081',
                                'Step 2: Subtract projection, get u\u2082',
                                'Step 3: Normalize u\u2082 \u2192 q\u2082  (Done!)'
                            ];
                            viz.screenText(labels[step], viz.width / 2, viz.height - 15, viz.colors.white, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Apply the Gram-Schmidt process to \\(\\mathbf{a}_1 = (1, 0, 1)\\), \\(\\mathbf{a}_2 = (0, 1, 1)\\) in \\(\\mathbb{R}^3\\). Find the orthonormal set \\(\\{\\mathbf{q}_1, \\mathbf{q}_2\\}\\).',
                    hint: 'Start with \\(\\mathbf{q}_1 = \\mathbf{a}_1 / \\|\\mathbf{a}_1\\|\\), then compute \\(\\mathbf{u}_2 = \\mathbf{a}_2 - \\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle \\mathbf{q}_1\\).',
                    solution: '\\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1,0,1)\\). \\(\\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{1}{\\sqrt{2}}(0+0+1) = \\frac{1}{\\sqrt{2}}\\). \\(\\mathbf{u}_2 = (0,1,1) - \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{\\sqrt{2}}(1,0,1) = (0,1,1) - \\frac{1}{2}(1,0,1) = (-\\frac{1}{2}, 1, \\frac{1}{2})\\). \\(\\|\\mathbf{u}_2\\| = \\sqrt{\\frac{1}{4}+1+\\frac{1}{4}} = \\sqrt{\\frac{3}{2}} = \\frac{\\sqrt{6}}{2}\\). \\(\\mathbf{q}_2 = \\frac{2}{\\sqrt{6}}(-\\frac{1}{2}, 1, \\frac{1}{2}) = \\frac{1}{\\sqrt{6}}(-1, 2, 1)\\).'
                },
                {
                    question: 'If \\(\\mathbf{a}_1\\) and \\(\\mathbf{a}_2\\) are already orthogonal, what does Gram-Schmidt reduce to?',
                    hint: 'What is the projection of \\(\\mathbf{a}_2\\) onto \\(\\mathbf{q}_1\\)?',
                    solution: 'If \\(\\langle \\mathbf{a}_1, \\mathbf{a}_2 \\rangle = 0\\), then \\(\\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\langle \\mathbf{a}_2, \\mathbf{a}_1/\\|\\mathbf{a}_1\\| \\rangle = 0\\). So \\(\\mathbf{u}_2 = \\mathbf{a}_2 - 0 = \\mathbf{a}_2\\). Gram-Schmidt just normalizes each vector: \\(\\mathbf{q}_i = \\mathbf{a}_i / \\|\\mathbf{a}_i\\|\\).'
                },
                {
                    question: 'Apply Gram-Schmidt to \\(\\mathbf{a}_1 = (1, 1)\\), \\(\\mathbf{a}_2 = (2, 2.001)\\). What difficulty arises? How does modified Gram-Schmidt help?',
                    hint: 'The vectors are nearly parallel, so \\(\\mathbf{u}_2\\) will be tiny and amplify rounding errors.',
                    solution: '\\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1,1)\\). \\(\\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{4.001}{\\sqrt{2}}\\). \\(\\mathbf{u}_2 = (2, 2.001) - \\frac{4.001}{2}(1,1) = (-0.0005, 0.0005)\\). The norm \\(\\|\\mathbf{u}_2\\| \\approx 0.000707\\) is extremely small, so division amplifies any floating-point error. Modified Gram-Schmidt reduces error buildup by re-projecting against already-computed \\(\\mathbf{q}_j\\) in sequence.'
                },
                {
                    question: 'Prove that the Gram-Schmidt process preserves the span at each step: \\(\\operatorname{span}(\\mathbf{q}_1, \\ldots, \\mathbf{q}_k) = \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k)\\).',
                    hint: 'Use induction. Each \\(\\mathbf{q}_k\\) is a linear combination of \\(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k\\), and each \\(\\mathbf{a}_k\\) can be written in terms of \\(\\mathbf{q}_1, \\ldots, \\mathbf{q}_k\\).',
                    solution: 'Induction on \\(k\\). Base: \\(\\mathbf{q}_1 = \\mathbf{a}_1 / \\|\\mathbf{a}_1\\|\\), so \\(\\operatorname{span}(\\mathbf{q}_1) = \\operatorname{span}(\\mathbf{a}_1)\\). Inductive step: \\(\\mathbf{u}_k = \\mathbf{a}_k - \\sum_{j<k} c_j \\mathbf{q}_j\\). By the inductive hypothesis, each \\(\\mathbf{q}_j\\) (\\(j < k\\)) is in \\(\\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_{j}) \\subseteq \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k)\\). So \\(\\mathbf{q}_k \\in \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k)\\). Conversely, \\(\\mathbf{a}_k = \\mathbf{u}_k + \\sum c_j \\mathbf{q}_j = \\|\\mathbf{u}_k\\| \\mathbf{q}_k + \\sum c_j \\mathbf{q}_j \\in \\operatorname{span}(\\mathbf{q}_1, \\ldots, \\mathbf{q}_k)\\).'
                },
                {
                    question: 'Use Gram-Schmidt to find an orthonormal basis for the subspace \\(W = \\{(x,y,z,w) \\in \\mathbb{R}^4 : x + y + z + w = 0\\}\\).',
                    hint: 'First find a basis for \\(W\\) (e.g., \\(\\mathbf{a}_1 = (1,-1,0,0)\\), \\(\\mathbf{a}_2 = (1,0,-1,0)\\), \\(\\mathbf{a}_3 = (1,0,0,-1)\\)), then apply Gram-Schmidt.',
                    solution: 'The constraint \\(w = -x-y-z\\) gives basis \\(\\{(1,-1,0,0), (1,0,-1,0), (1,0,0,-1)\\}\\). Apply GS: \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1,-1,0,0)\\). \\(\\mathbf{u}_2 = (1,0,-1,0) - \\frac{1}{2}(1,-1,0,0) = (\\frac{1}{2},\\frac{1}{2},-1,0)\\), \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{3/2}}(\\frac{1}{2},\\frac{1}{2},-1,0) = \\frac{1}{\\sqrt{6}}(1,1,-2,0)\\). \\(\\mathbf{u}_3 = (1,0,0,-1) - \\frac{1}{2}(1,-1,0,0) - \\frac{1}{6}(1,1,-2,0) = (\\frac{1}{3},\\frac{1}{3},\\frac{1}{3},-1)\\), \\(\\mathbf{q}_3 = \\frac{1}{2\\sqrt{3}/3}(\\frac{1}{3},\\frac{1}{3},\\frac{1}{3},-1) = \\frac{1}{2\\sqrt{3}}(1,1,1,-3)\\).'
                }
            ]
        },

        // ========== SECTION 3: QR Factorization ==========
        {
            id: 'sec14-3-qr-factorization',
            title: 'QR Factorization',
            content: `
<h2>14.3 QR Factorization</h2>

<p>The Gram-Schmidt process does more than just produce an orthonormal basis: it gives a factorization of the original matrix into the product of an orthogonal matrix and an upper triangular matrix. This is the <strong>QR factorization</strong>, one of the most important decompositions in numerical linear algebra.</p>

<div class="env-block definition">
    <div class="env-title">Definition 14.3.1 (QR Factorization)</div>
    <div class="env-body"><p>Let \\(A\\) be an \\(m \\times n\\) matrix with linearly independent columns. A <strong>QR factorization</strong> of \\(A\\) is a decomposition</p>
    \\[
    A = QR
    \\]
    <p>where \\(Q\\) is an \\(m \\times n\\) matrix with orthonormal columns (\\(Q^T Q = I_n\\)) and \\(R\\) is an \\(n \\times n\\) upper triangular matrix with positive diagonal entries.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 14.3.2 (Existence and Uniqueness)</div>
    <div class="env-body"><p>Every \\(m \\times n\\) matrix \\(A\\) with linearly independent columns has a unique QR factorization \\(A = QR\\) where \\(R\\) has positive diagonal entries.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (Existence via Gram-Schmidt)</div>
    <div class="env-body"><p>Let the columns of \\(A\\) be \\(\\mathbf{a}_1, \\ldots, \\mathbf{a}_n\\). Apply Gram-Schmidt to obtain \\(\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\). Since \\(\\operatorname{span}(\\mathbf{q}_1, \\ldots, \\mathbf{q}_k) = \\operatorname{span}(\\mathbf{a}_1, \\ldots, \\mathbf{a}_k)\\), we can write</p>
    \\[
    \\mathbf{a}_k = \\sum_{j=1}^{k} r_{jk} \\, \\mathbf{q}_j, \\qquad r_{jk} = \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle \\text{ for } j < k, \\quad r_{kk} = \\|\\mathbf{u}_k\\| > 0.
    \\]
    <p>In matrix form, \\(A = QR\\) where \\(Q = [\\mathbf{q}_1 \\mid \\cdots \\mid \\mathbf{q}_n]\\) and \\(R = (r_{jk})\\) is upper triangular with positive diagonal.</p>
    <p><strong>Uniqueness</strong>: If \\(A = Q_1 R_1 = Q_2 R_2\\), then \\(Q_2^T Q_1 = R_2 R_1^{-1}\\). The left side is orthogonal; the right side is upper triangular. An orthogonal upper triangular matrix must be diagonal with entries \\(\\pm 1\\). The positive diagonal constraint forces \\(R_1 = R_2\\) and \\(Q_1 = Q_2\\).</p>
    <div class="qed">&#8718;</div></div>
</div>

<h3>Reading the QR Factorization</h3>

<p>The factorization \\(A = QR\\) encodes the Gram-Schmidt process:</p>
<ul>
<li>The columns of \\(Q\\) are the orthonormal vectors \\(\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\).</li>
<li>The entries of \\(R\\) are the inner products \\(r_{jk} = \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle\\) (above the diagonal) and the norms \\(r_{kk} = \\|\\mathbf{u}_k\\|\\) (on the diagonal).</li>
<li>The column \\(\\mathbf{a}_k = r_{1k} \\mathbf{q}_1 + r_{2k} \\mathbf{q}_2 + \\cdots + r_{kk} \\mathbf{q}_k\\) expresses the original vector in the orthonormal basis.</li>
</ul>

<div class="env-block example">
    <div class="env-title">Example 14.3.3</div>
    <div class="env-body"><p>Factor \\(A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix}\\).</p>
    <p>From Example 14.2.2, we found \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{3}}(1,1,1)^T\\), \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1,1,-2)^T\\), \\(\\mathbf{q}_3 = \\frac{1}{\\sqrt{2}}(1,-1,0)^T\\).</p>
    <p>The \\(R\\) entries: \\(r_{11} = \\|\\mathbf{a}_1\\| = \\sqrt{3}\\), \\(r_{12} = \\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{2}{\\sqrt{3}}\\), \\(r_{13} = \\langle \\mathbf{a}_3, \\mathbf{q}_1 \\rangle = \\frac{1}{\\sqrt{3}}\\), \\(r_{22} = \\|\\mathbf{u}_2\\| = \\frac{\\sqrt{6}}{3}\\), \\(r_{23} = \\langle \\mathbf{a}_3, \\mathbf{q}_2 \\rangle = \\frac{1}{\\sqrt{6}}\\), \\(r_{33} = \\|\\mathbf{u}_3\\| = \\frac{1}{\\sqrt{2}}\\).</p>
    \\[
    A = \\underbrace{\\begin{pmatrix} 1/\\sqrt{3} & 1/\\sqrt{6} & 1/\\sqrt{2} \\\\ 1/\\sqrt{3} & 1/\\sqrt{6} & -1/\\sqrt{2} \\\\ 1/\\sqrt{3} & -2/\\sqrt{6} & 0 \\end{pmatrix}}_{Q} \\underbrace{\\begin{pmatrix} \\sqrt{3} & 2/\\sqrt{3} & 1/\\sqrt{3} \\\\ 0 & \\sqrt{6}/3 & 1/\\sqrt{6} \\\\ 0 & 0 & 1/\\sqrt{2} \\end{pmatrix}}_{R}
    \\]</div>
</div>

<div class="viz-placeholder" data-viz="viz-qr-decomp"></div>

<h3>Applications of QR</h3>

<p>The QR factorization is central to:</p>
<ul>
<li><strong>Solving least squares</strong> (Chapter 15): \\(A\\mathbf{x} = \\mathbf{b}\\) becomes \\(R\\mathbf{x} = Q^T \\mathbf{b}\\), a triangular system.</li>
<li><strong>Eigenvalue algorithms</strong>: the QR algorithm iterates QR factorizations to find eigenvalues.</li>
<li><strong>Stable computation</strong>: QR is numerically more stable than forming \\(A^T A\\) directly.</li>
</ul>
`,
            visualizations: [
                {
                    id: 'viz-qr-decomp',
                    title: 'QR Decomposition of a 2x2 Matrix',
                    description: 'Drag the column vectors of \\(A\\) to see the QR factorization update in real time. \\(Q\\) (green) holds the orthonormal directions, \\(R\\) (orange) holds the upper triangular coefficients.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const col1 = viz.addDraggable('c1', 3, 1, viz.colors.blue, 8, (wx, wy) => {
                            col1.x = wx; col1.y = wy;
                        });
                        const col2 = viz.addDraggable('c2', 1, 3, viz.colors.purple, 8, (wx, wy) => {
                            col2.x = wx; col2.y = wy;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const a1x = col1.x, a1y = col1.y;
                            const a2x = col2.x, a2y = col2.y;

                            // Draw original columns
                            viz.drawVector(0, 0, a1x, a1y, viz.colors.blue, 'a\u2081', 2);
                            viz.drawVector(0, 0, a2x, a2y, viz.colors.purple, 'a\u2082', 2);

                            // Gram-Schmidt
                            const len1 = Math.sqrt(a1x*a1x + a1y*a1y);
                            if (len1 < 0.01) { viz.drawDraggables(); return; }

                            const q1x = a1x / len1, q1y = a1y / len1;
                            const r11 = len1;
                            const r12 = a2x * q1x + a2y * q1y;
                            const u2x = a2x - r12 * q1x;
                            const u2y = a2y - r12 * q1y;
                            const r22 = Math.sqrt(u2x*u2x + u2y*u2y);

                            // Draw q1
                            viz.drawVector(0, 0, q1x, q1y, viz.colors.teal, 'q\u2081', 3);

                            if (r22 > 0.01) {
                                const q2x = u2x / r22, q2y = u2y / r22;
                                viz.drawVector(0, 0, q2x, q2y, viz.colors.green, 'q\u2082', 3);

                                // Show R matrix
                                viz.screenText('R = ', viz.width - 150, 20, viz.colors.orange, 14, 'left', 'top');
                                viz.drawMatrix(
                                    [[r11, r12], [0, r22]],
                                    viz.width - 130, 10, viz.colors.orange, 50, 24, 12
                                );
                            }

                            // Show unit square transformed
                            viz.drawTransformedUnitSquare([[q1x, (r22 > 0.01 ? u2x/r22 : 0)], [q1y, (r22 > 0.01 ? u2y/r22 : 0)]], viz.colors.teal + '15', viz.colors.teal + '44');

                            viz.screenText('A = QR', viz.width / 2, viz.height - 15, viz.colors.white, 13);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the QR factorization of \\(A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}\\).',
                    hint: 'Apply Gram-Schmidt to the columns, then read off \\(R\\) from the inner products.',
                    solution: '\\(\\mathbf{a}_1 = (1,2)\\), \\(\\|\\mathbf{a}_1\\| = \\sqrt{5}\\), \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{5}}(1,2)\\). \\(r_{12} = \\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{4}{\\sqrt{5}}\\). \\(\\mathbf{u}_2 = (2,1) - \\frac{4}{5}(1,2) = (\\frac{6}{5}, -\\frac{3}{5})\\). \\(r_{22} = \\frac{3}{\\sqrt{5}}\\cdot\\frac{1}{1} = \\frac{3\\sqrt{5}}{5}\\). Wait: \\(\\|\\mathbf{u}_2\\| = \\sqrt{\\frac{36}{25}+\\frac{9}{25}} = \\frac{3}{\\sqrt{5}}\\). \\(\\mathbf{q}_2 = \\frac{\\sqrt{5}}{3}\\cdot(\\frac{6}{5},-\\frac{3}{5}) = \\frac{1}{\\sqrt{5}}(2,-1)\\). So \\(Q = \\frac{1}{\\sqrt{5}}\\begin{pmatrix}1&2\\\\2&-1\\end{pmatrix}\\), \\(R = \\begin{pmatrix}\\sqrt{5}&4/\\sqrt{5}\\\\0&3/\\sqrt{5}\\end{pmatrix}\\).'
                },
                {
                    question: 'If \\(A\\) is already an orthogonal matrix (\\(A^T A = I\\)), what is its QR factorization?',
                    hint: 'The columns are already orthonormal.',
                    solution: 'If \\(A\\) has orthonormal columns, then \\(Q = A\\) and \\(R = I\\). The Gram-Schmidt process does nothing because all projections are zero and all norms are 1.'
                },
                {
                    question: 'Show that \\(\\det(A) = \\det(R) = r_{11} r_{22} \\cdots r_{nn}\\) when \\(A\\) is square.',
                    hint: 'Use \\(\\det(A) = \\det(Q)\\det(R)\\) and the fact that \\(|\\det(Q)| = 1\\).',
                    solution: 'Since \\(Q^T Q = I\\), \\(\\det(Q)^2 = 1\\), so \\(\\det(Q) = \\pm 1\\). With the convention that \\(r_{kk} > 0\\), we choose \\(\\det(Q) = +1\\) (this can always be arranged by flipping the sign of one column of \\(Q\\) and the corresponding row of \\(R\\)). Then \\(\\det(A) = \\det(Q)\\det(R) = r_{11} \\cdots r_{nn}\\).'
                },
                {
                    question: 'Explain why \\(R = Q^T A\\). What does this tell us about computing \\(R\\)?',
                    hint: 'Use \\(Q^T Q = I\\) and \\(A = QR\\).',
                    solution: 'From \\(A = QR\\), multiply both sides on the left by \\(Q^T\\): \\(Q^T A = Q^T Q R = IR = R\\). This tells us \\(r_{jk} = \\mathbf{q}_j^T \\mathbf{a}_k = \\langle \\mathbf{a}_k, \\mathbf{q}_j \\rangle\\), confirming that the entries of \\(R\\) are the Fourier coefficients of the columns of \\(A\\) with respect to the orthonormal basis formed by the columns of \\(Q\\).'
                },
                {
                    question: 'If \\(A\\) is \\(m \\times n\\) with \\(m > n\\) and linearly independent columns, what are the dimensions of \\(Q\\) and \\(R\\) in the "thin" QR factorization?',
                    hint: 'How many orthonormal vectors does Gram-Schmidt produce? How many coefficients per column?',
                    solution: 'Gram-Schmidt produces \\(n\\) orthonormal vectors in \\(\\mathbb{R}^m\\), so \\(Q\\) is \\(m \\times n\\). Each column of \\(A\\) is expressed using at most \\(k \\leq n\\) of the \\(\\mathbf{q}_j\\), so \\(R\\) is \\(n \\times n\\) upper triangular. Note: \\(Q^T Q = I_n\\), but \\(Q Q^T \\neq I_m\\) unless \\(m = n\\).'
                }
            ]
        },

        // ========== SECTION 4: Orthogonal Matrices ==========
        {
            id: 'sec14-4-orthogonal-matrices',
            title: 'Orthogonal Matrices',
            content: `
<h2>14.4 Orthogonal Matrices</h2>

<p>In the QR factorization, the matrix \\(Q\\) has orthonormal columns. When \\(Q\\) is square, it is called an <strong>orthogonal matrix</strong>, and it enjoys a remarkable collection of properties. Orthogonal matrices are the linear algebra analogues of rigid motions: they preserve lengths, angles, and volumes.</p>

<div class="env-block definition">
    <div class="env-title">Definition 14.4.1 (Orthogonal Matrix)</div>
    <div class="env-body"><p>A square matrix \\(Q \\in \\mathbb{R}^{n \\times n}\\) is <strong>orthogonal</strong> if</p>
    \\[
    Q^T Q = Q Q^T = I.
    \\]
    <p>Equivalently, \\(Q^{-1} = Q^T\\). The columns (and rows) of \\(Q\\) form an orthonormal basis for \\(\\mathbb{R}^n\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark on Terminology</div>
    <div class="env-body"><p>The name "orthogonal matrix" is slightly misleading; a better name would be "orthonormal matrix," since the columns are both orthogonal <em>and</em> normalized. In complex spaces, the analogue is called a <strong>unitary matrix</strong> (\\(U^*U = I\\)).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 14.4.2 (Properties of Orthogonal Matrices)</div>
    <div class="env-body"><p>Let \\(Q\\) be an orthogonal matrix. Then:</p>
    <ol>
    <li><strong>Isometry</strong>: \\(\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|\\) for all \\(\\mathbf{x}\\).</li>
    <li><strong>Preserves inner products</strong>: \\(\\langle Q\\mathbf{x}, Q\\mathbf{y} \\rangle = \\langle \\mathbf{x}, \\mathbf{y} \\rangle\\).</li>
    <li><strong>Determinant</strong>: \\(\\det(Q) = \\pm 1\\).</li>
    <li><strong>Eigenvalues</strong>: All eigenvalues have \\(|\\lambda| = 1\\).</li>
    <li><strong>Closure</strong>: If \\(Q_1, Q_2\\) are orthogonal, so is \\(Q_1 Q_2\\).</li>
    <li><strong>Inverse</strong>: \\(Q^{-1} = Q^T\\) is also orthogonal.</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (selected properties)</div>
    <div class="env-body"><p>(1) \\(\\|Q\\mathbf{x}\\|^2 = (Q\\mathbf{x})^T(Q\\mathbf{x}) = \\mathbf{x}^T Q^T Q \\mathbf{x} = \\mathbf{x}^T \\mathbf{x} = \\|\\mathbf{x}\\|^2\\).</p>
    <p>(2) \\(\\langle Q\\mathbf{x}, Q\\mathbf{y} \\rangle = (Q\\mathbf{x})^T(Q\\mathbf{y}) = \\mathbf{x}^T Q^T Q \\mathbf{y} = \\mathbf{x}^T \\mathbf{y}\\).</p>
    <p>(3) \\(\\det(Q^T Q) = \\det(I) = 1\\), so \\(\\det(Q)^2 = 1\\), giving \\(\\det(Q) = \\pm 1\\).</p>
    <p>(4) If \\(Q\\mathbf{x} = \\lambda \\mathbf{x}\\), then \\(\\|\\mathbf{x}\\| = \\|Q\\mathbf{x}\\| = |\\lambda|\\|\\mathbf{x}\\|\\), so \\(|\\lambda| = 1\\).</p>
    <div class="qed">&#8718;</div></div>
</div>

<h3>Rotations and Reflections</h3>

<p>Every \\(2 \\times 2\\) orthogonal matrix is either a rotation or a reflection.</p>

<div class="env-block proposition">
    <div class="env-title">Proposition 14.4.3</div>
    <div class="env-body"><p>Every \\(2 \\times 2\\) orthogonal matrix has one of two forms:</p>
    <ul>
    <li><strong>Rotation by angle \\(\\theta\\)</strong> (\\(\\det = +1\\)):
    \\[
    R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}
    \\]</li>
    <li><strong>Reflection</strong> (\\(\\det = -1\\)):
    \\[
    S_\\theta = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{pmatrix}
    \\]
    This reflects across the line making angle \\(\\theta/2\\) with the \\(x\\)-axis.</li>
    </ul></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Geometric Meaning of \\(\\det Q = \\pm 1\\)</div>
    <div class="env-body"><p>Orthogonal matrices with \\(\\det Q = +1\\) are <strong>proper rotations</strong> (they preserve orientation). Those with \\(\\det Q = -1\\) are <strong>improper rotations</strong>: they include a reflection, reversing orientation. The set of all \\(n \\times n\\) orthogonal matrices forms the <strong>orthogonal group</strong> \\(O(n)\\); the subset with \\(\\det = +1\\) is the <strong>special orthogonal group</strong> \\(SO(n)\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-orthogonal-transform"></div>

<div class="env-block example">
    <div class="env-title">Example 14.4.4 (Rotation)</div>
    <div class="env-body"><p>The matrix \\(R_{\\pi/4} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}\\) rotates every vector by \\(45^\\circ\\) counterclockwise. Its columns \\(\\frac{1}{\\sqrt{2}}(1,1)\\) and \\(\\frac{1}{\\sqrt{2}}(-1,1)\\) are orthonormal. \\(\\det(R_{\\pi/4}) = \\frac{1}{2}(1+1) = 1\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 14.4.5 (Reflection)</div>
    <div class="env-body"><p>The matrix \\(S = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\) reflects across the line \\(y = x\\). Check: \\(S^T S = I\\) and \\(\\det S = -1\\). The vector \\((a,b)\\) maps to \\((b,a)\\).</p></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-orthogonal-transform',
                    title: 'Rotation vs. Reflection',
                    description: 'Adjust the angle to see how a rotation (det = +1) and a reflection (det = -1) transform the unit square. Toggle between rotation and reflection modes.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 55 });

                        let theta = 0.5;
                        let mode = 'rotation';

                        VizEngine.createSlider(controls, '\u03B8', 0, 6.28, 0.5, 0.05, (val) => { theta = val; });
                        VizEngine.createButton(controls, 'Rotation', () => { mode = 'rotation'; });
                        VizEngine.createButton(controls, 'Reflection', () => { mode = 'reflection'; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            let M;
                            if (mode === 'rotation') {
                                M = [[Math.cos(theta), -Math.sin(theta)], [Math.sin(theta), Math.cos(theta)]];
                            } else {
                                M = [[Math.cos(theta), Math.sin(theta)], [Math.sin(theta), -Math.cos(theta)]];
                                // Draw reflection axis
                                const ax = Math.cos(theta / 2), ay = Math.sin(theta / 2);
                                viz.drawLine(0, 0, ax, ay, viz.colors.yellow + '55', 1.5, true);
                            }

                            // Original unit square
                            viz.drawPolygon([[0,0],[1,0],[1,1],[0,1]], viz.colors.blue + '15', viz.colors.blue + '44');
                            viz.drawVector(0, 0, 1, 0, viz.colors.blue + '88', '', 1.5);
                            viz.drawVector(0, 0, 0, 1, viz.colors.blue + '88', '', 1.5);

                            // Transformed
                            viz.drawTransformedUnitSquare(M, viz.colors.teal + '25', viz.colors.teal, 2);
                            const e1t = VizEngine.matVec(M, [1, 0]);
                            const e2t = VizEngine.matVec(M, [0, 1]);
                            viz.drawVector(0, 0, e1t[0], e1t[1], viz.colors.teal, 'Qe\u2081', 2);
                            viz.drawVector(0, 0, e2t[0], e2t[1], viz.colors.orange, 'Qe\u2082', 2);

                            const det = VizEngine.det2(M);
                            viz.screenText(mode.charAt(0).toUpperCase() + mode.slice(1) + '   det(Q) = ' + det.toFixed(2) + '   \u03B8 = ' + (theta * 180 / Math.PI).toFixed(0) + '\u00B0', viz.width / 2, viz.height - 15, viz.colors.white, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that \\(Q = \\frac{1}{3}\\begin{pmatrix} 2 & -2 & 1 \\\\ 1 & 2 & 2 \\\\ 2 & 1 & -2 \\end{pmatrix}\\) is orthogonal and determine whether it is a rotation or a reflection.',
                    hint: 'Check \\(Q^T Q = I\\) and compute \\(\\det Q\\).',
                    solution: 'Computing \\(Q^T Q\\): each diagonal entry is \\(\\frac{1}{9}(4+1+4) = 1\\). Off-diagonal: \\(\\frac{1}{9}(-4+2+2) = 0\\), \\(\\frac{1}{9}(2+2-2) = \\frac{2}{9} \\neq 0\\). Wait, let me recompute. Column 1 dot Column 2: \\(\\frac{1}{9}(2\\cdot(-2) + 1\\cdot 2 + 2\\cdot 1) = \\frac{1}{9}(-4+2+2) = 0\\). Column 1 dot Column 3: \\(\\frac{1}{9}(2\\cdot1+1\\cdot2+2\\cdot(-2)) = \\frac{1}{9}(2+2-4) = 0\\). Column 2 dot Column 3: \\(\\frac{1}{9}(-2+4-2) = 0\\). So \\(Q^T Q = I\\). \\(\\det Q = \\frac{1}{27}[2(−4−2)+2(−2−4)+1(1−4)] = \\frac{1}{27}[−12−12−3] = −1\\). Since \\(\\det Q = -1\\), it is a reflection (improper rotation).'
                },
                {
                    question: 'Prove that the product of two orthogonal matrices is orthogonal.',
                    hint: 'Use the definition \\(Q^T Q = I\\).',
                    solution: 'Let \\(Q_1, Q_2\\) be orthogonal. Then \\((Q_1 Q_2)^T (Q_1 Q_2) = Q_2^T Q_1^T Q_1 Q_2 = Q_2^T I Q_2 = Q_2^T Q_2 = I\\). So \\(Q_1 Q_2\\) is orthogonal.'
                },
                {
                    question: 'Show that if \\(\\lambda\\) is a real eigenvalue of an orthogonal matrix, then \\(\\lambda = \\pm 1\\).',
                    hint: 'Use the isometry property \\(\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|\\).',
                    solution: 'If \\(Q\\mathbf{x} = \\lambda \\mathbf{x}\\) with \\(\\mathbf{x} \\neq \\mathbf{0}\\), then \\(\\|\\mathbf{x}\\| = \\|Q\\mathbf{x}\\| = |\\lambda| \\|\\mathbf{x}\\|\\), so \\(|\\lambda| = 1\\). Since \\(\\lambda\\) is real, \\(\\lambda = 1\\) or \\(\\lambda = -1\\).'
                },
                {
                    question: 'Find all \\(2 \\times 2\\) orthogonal matrices whose first column is \\(\\frac{1}{\\sqrt{5}}(1, 2)^T\\).',
                    hint: 'The second column must be orthogonal to the first and have unit norm.',
                    solution: 'The second column \\((a, b)^T\\) must satisfy \\(a + 2b = 0\\) (orthogonality) and \\(a^2 + b^2 = 1\\) (unit norm). From \\(a = -2b\\): \\(4b^2 + b^2 = 1\\), so \\(b = \\pm \\frac{1}{\\sqrt{5}}\\). The two matrices are \\(Q_1 = \\frac{1}{\\sqrt{5}}\\begin{pmatrix}1&-2\\\\2&1\\end{pmatrix}\\) (rotation, \\(\\det = +1\\)) and \\(Q_2 = \\frac{1}{\\sqrt{5}}\\begin{pmatrix}1&2\\\\2&-1\\end{pmatrix}\\) (reflection, \\(\\det = -1\\)).'
                },
                {
                    question: 'Let \\(Q\\) be orthogonal and \\(A\\) be any matrix. Show that \\(\\|QA\\|_F = \\|A\\|_F\\) where \\(\\|\\cdot\\|_F\\) is the Frobenius norm.',
                    hint: 'Use \\(\\|A\\|_F^2 = \\operatorname{tr}(A^T A)\\) and the cyclic property of trace.',
                    solution: '\\(\\|QA\\|_F^2 = \\operatorname{tr}((QA)^T QA) = \\operatorname{tr}(A^T Q^T Q A) = \\operatorname{tr}(A^T A) = \\|A\\|_F^2\\). Orthogonal multiplication preserves the Frobenius norm. This is why QR-based algorithms are numerically stable: the errors are not amplified.'
                }
            ]
        },

        // ========== SECTION 5: Householder Reflections ==========
        {
            id: 'sec14-5-householder',
            title: 'Householder Reflections',
            content: `
<h2>14.5 Householder Reflections</h2>

<p>Although Gram-Schmidt provides an intuitive path to the QR factorization, it is numerically fragile. In practice, the most widely used method for QR factorization relies on <strong>Householder reflections</strong> (also called Householder transformations). These are orthogonal matrices of a special form that zero out entries below the diagonal, one column at a time.</p>

<div class="env-block definition">
    <div class="env-title">Definition 14.5.1 (Householder Reflection)</div>
    <div class="env-body"><p>Given a nonzero vector \\(\\mathbf{v} \\in \\mathbb{R}^n\\), the <strong>Householder reflection</strong> (or Householder matrix) is</p>
    \\[
    H = I - 2\\frac{\\mathbf{v}\\mathbf{v}^T}{\\mathbf{v}^T \\mathbf{v}}.
    \\]
    <p>Geometrically, \\(H\\) reflects vectors across the hyperplane orthogonal to \\(\\mathbf{v}\\).</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 14.5.2 (Properties of Householder Matrices)</div>
    <div class="env-body"><p>For any Householder matrix \\(H\\):</p>
    <ol>
    <li>\\(H\\) is symmetric: \\(H^T = H\\).</li>
    <li>\\(H\\) is orthogonal: \\(H^T H = I\\).</li>
    <li>\\(H\\) is involutory: \\(H^2 = I\\) (reflecting twice returns to the original).</li>
    <li>\\(\\det(H) = -1\\).</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Let \\(P = \\mathbf{v}\\mathbf{v}^T / (\\mathbf{v}^T \\mathbf{v})\\). Then \\(P\\) is the orthogonal projection onto \\(\\operatorname{span}(\\mathbf{v})\\), so \\(P = P^T\\) and \\(P^2 = P\\).</p>
    <p>(1) \\(H^T = (I - 2P)^T = I - 2P^T = I - 2P = H\\).</p>
    <p>(2, 3) \\(H^2 = (I - 2P)^2 = I - 4P + 4P^2 = I - 4P + 4P = I\\). So \\(H^{-1} = H = H^T\\).</p>
    <p>(4) \\(H\\) has eigenvalue \\(-1\\) for \\(\\mathbf{v}\\) and eigenvalue \\(+1\\) for all vectors in \\(\\mathbf{v}^\\perp\\) (an \\((n-1)\\)-dimensional subspace). Therefore \\(\\det(H) = (-1) \\cdot 1^{n-1} = -1\\).</p>
    <div class="qed">&#8718;</div></div>
</div>

<h3>The Key Idea: Zeroing Out a Column</h3>

<p>The power of Householder reflections lies in the following lemma.</p>

<div class="env-block lemma">
    <div class="env-title">Lemma 14.5.3</div>
    <div class="env-body"><p>Given any vector \\(\\mathbf{x} \\in \\mathbb{R}^n\\), we can find a Householder matrix \\(H\\) such that</p>
    \\[
    H\\mathbf{x} = \\|\\mathbf{x}\\| \\, \\mathbf{e}_1.
    \\]
    <p>Simply choose \\(\\mathbf{v} = \\mathbf{x} - \\|\\mathbf{x}\\| \\, \\mathbf{e}_1\\) (or \\(\\mathbf{v} = \\mathbf{x} + \\|\\mathbf{x}\\| \\, \\mathbf{e}_1\\) for better numerical stability when \\(x_1 > 0\\)).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Let \\(\\alpha = \\|\\mathbf{x}\\|\\) and \\(\\mathbf{v} = \\mathbf{x} - \\alpha \\mathbf{e}_1\\). Then</p>
    \\[
    H\\mathbf{x} = \\mathbf{x} - 2\\frac{\\mathbf{v}^T \\mathbf{x}}{\\mathbf{v}^T \\mathbf{v}} \\mathbf{v}.
    \\]
    <p>Compute: \\(\\mathbf{v}^T \\mathbf{x} = \\|\\mathbf{x}\\|^2 - \\alpha x_1 = \\alpha^2 - \\alpha x_1\\) and \\(\\mathbf{v}^T \\mathbf{v} = \\|\\mathbf{x}\\|^2 - 2\\alpha x_1 + \\alpha^2 = 2\\alpha^2 - 2\\alpha x_1 = 2(\\alpha^2 - \\alpha x_1)\\). So</p>
    \\[
    H\\mathbf{x} = \\mathbf{x} - \\mathbf{v} = \\alpha \\mathbf{e}_1.
    \\]
    <div class="qed">&#8718;</div></div>
</div>

<div class="viz-placeholder" data-viz="viz-householder"></div>

<h3>Householder QR Algorithm</h3>

<div class="env-block definition">
    <div class="env-title">Algorithm 14.5.4 (Householder QR)</div>
    <div class="env-body"><p>To factor \\(A \\in \\mathbb{R}^{m \\times n}\\) (\\(m \\geq n\\)):</p>
    <ol>
    <li>Choose \\(H_1\\) to zero out column 1 below the diagonal: \\(H_1 A = \\begin{pmatrix} r_{11} & * & \\cdots \\\\ 0 & & \\\\ \\vdots & & A' \\\\ 0 & & \\end{pmatrix}\\).</li>
    <li>Choose \\(\\tilde{H}_2\\) (acting on the lower-right \\((m-1) \\times (n-1)\\) block) to zero out column 2 below the diagonal. Embed as \\(H_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & \\tilde{H}_2 \\end{pmatrix}\\).</li>
    <li>Continue for \\(n\\) steps. Then \\(H_n \\cdots H_2 H_1 A = R\\), and \\(Q = H_1 H_2 \\cdots H_n\\).</li>
    </ol>
    <p>Since each \\(H_k\\) is orthogonal, \\(Q\\) is orthogonal, and \\(A = QR\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 14.5.5 (2x2 Householder QR)</div>
    <div class="env-body"><p>Factor \\(A = \\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}\\).</p>
    <p><strong>Step 1:</strong> The first column is \\(\\mathbf{x} = (3, 4)^T\\), \\(\\|\\mathbf{x}\\| = 5\\). Choose \\(\\mathbf{v} = (3-5, 4)^T = (-2, 4)^T\\). Then \\(\\mathbf{v}^T\\mathbf{v} = 20\\) and</p>
    \\[
    H_1 = I - \\frac{2}{20}\\begin{pmatrix} 4 & -8 \\\\ -8 & 16 \\end{pmatrix} = \\begin{pmatrix} 3/5 & 4/5 \\\\ 4/5 & -3/5 \\end{pmatrix}.
    \\]
    <p>\\(H_1 A = \\begin{pmatrix} 5 & 11/5 \\\\ 0 & 2/5 \\end{pmatrix} = R\\). So \\(Q = H_1^T = H_1 = \\begin{pmatrix} 3/5 & 4/5 \\\\ 4/5 & -3/5 \\end{pmatrix}\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Why Householder is Better</div>
    <div class="env-body"><p>The Householder approach has two main advantages over Gram-Schmidt:</p>
    <ol>
    <li><strong>Numerical stability</strong>: Householder reflections are exactly orthogonal (to machine precision), so the computed \\(Q\\) has orthonormal columns to within rounding errors. Classical Gram-Schmidt can produce \\(Q\\) that is far from orthogonal.</li>
    <li><strong>Efficiency</strong>: Householder QR requires about \\(2mn^2 - \\frac{2}{3}n^3\\) flops, the same as Gram-Schmidt, but with better memory access patterns.</li>
    </ol></div>
</div>

<div class="env-block warning">
    <div class="env-title">Sign Convention</div>
    <div class="env-body"><p>When \\(x_1 > 0\\), using \\(\\mathbf{v} = \\mathbf{x} - \\|\\mathbf{x}\\|\\mathbf{e}_1\\) can cause cancellation (small \\(v_1\\)). The standard practice is to choose \\(\\mathbf{v} = \\mathbf{x} + \\operatorname{sign}(x_1)\\|\\mathbf{x}\\|\\mathbf{e}_1\\) to avoid this.</p></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-householder',
                    title: 'Householder Reflection',
                    description: 'Drag the vector \\(\\mathbf{x}\\). The Householder reflection maps it onto the \\(x\\)-axis (i.e., \\(\\|\\mathbf{x}\\| \\mathbf{e}_1\\)). The dashed line shows the mirror hyperplane (perpendicular to \\(\\mathbf{v} = \\mathbf{x} - \\|\\mathbf{x}\\|\\mathbf{e}_1\\)).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const xd = viz.addDraggable('xvec', 2, 3, viz.colors.blue, 8, (wx, wy) => {
                            xd.x = wx; xd.y = wy;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const xx = xd.x, xy = xd.y;
                            const norm = Math.sqrt(xx*xx + xy*xy);
                            if (norm < 0.1) { viz.drawDraggables(); return; }

                            // v = x - ||x|| e1
                            const vx = xx - norm, vy = xy;
                            const vnorm = Math.sqrt(vx*vx + vy*vy);

                            // Draw the hyperplane (line perp to v through midpoint)
                            if (vnorm > 0.01) {
                                const mx = (xx + norm) / 2, my = xy / 2;
                                // Direction perpendicular to v
                                const px = -vy / vnorm, py = vx / vnorm;
                                viz.drawLine(mx, my, mx + px, my + py, viz.colors.yellow + '66', 1.5, true);
                            }

                            // Draw x
                            viz.drawVector(0, 0, xx, xy, viz.colors.blue, 'x', 2.5);

                            // Draw Hx = ||x|| e1
                            viz.drawVector(0, 0, norm, 0, viz.colors.teal, 'Hx', 2.5);

                            // Draw v
                            viz.drawVector(norm, 0, xx, xy, viz.colors.red + 'aa', 'v', 1.5);

                            // Arc showing the reflection
                            const angleX = Math.atan2(xy, xx);
                            if (Math.abs(angleX) > 0.05) {
                                const ctx = viz.ctx;
                                const [sx, sy] = viz.toScreen(0, 0);
                                ctx.strokeStyle = viz.colors.purple + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                const r = norm * viz.scale * 0.3;
                                ctx.arc(sx, sy, r, -angleX, 0, angleX > 0);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            viz.screenText('||x|| = ' + norm.toFixed(2), 12, 20, viz.colors.white, 12, 'left', 'top');
                            viz.screenText('H reflects x onto ||x||e\u2081', viz.width / 2, viz.height - 15, viz.colors.text, 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the Householder matrix \\(H\\) that maps \\(\\mathbf{x} = (1, 2, 2)^T\\) to \\(\\|\\mathbf{x}\\| \\mathbf{e}_1\\).',
                    hint: '\\(\\|\\mathbf{x}\\| = 3\\). Compute \\(\\mathbf{v} = \\mathbf{x} - 3\\mathbf{e}_1 = (-2, 2, 2)^T\\) and then \\(H = I - 2\\frac{\\mathbf{v}\\mathbf{v}^T}{\\mathbf{v}^T\\mathbf{v}}\\).',
                    solution: '\\(\\mathbf{v} = (-2, 2, 2)^T\\), \\(\\mathbf{v}^T \\mathbf{v} = 12\\). \\(\\mathbf{v}\\mathbf{v}^T = \\begin{pmatrix}4&-4&-4\\\\-4&4&4\\\\-4&4&4\\end{pmatrix}\\). \\(H = I - \\frac{1}{6}\\begin{pmatrix}4&-4&-4\\\\-4&4&4\\\\-4&4&4\\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}\\). Verify: \\(H(1,2,2)^T = \\frac{1}{3}(1+4+4, 2+2-4, 2-4+2)^T = (3, 0, 0)^T\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Prove that \\(H = I - 2\\mathbf{v}\\mathbf{v}^T / (\\mathbf{v}^T \\mathbf{v})\\) has eigenvalue \\(-1\\) with eigenvector \\(\\mathbf{v}\\), and eigenvalue \\(+1\\) for all \\(\\mathbf{w} \\perp \\mathbf{v}\\).',
                    hint: 'Apply \\(H\\) to \\(\\mathbf{v}\\) and to any \\(\\mathbf{w}\\) with \\(\\mathbf{v}^T \\mathbf{w} = 0\\).',
                    solution: '\\(H\\mathbf{v} = \\mathbf{v} - 2\\frac{\\mathbf{v}^T \\mathbf{v}}{\\mathbf{v}^T \\mathbf{v}}\\mathbf{v} = \\mathbf{v} - 2\\mathbf{v} = -\\mathbf{v}\\). So \\(\\lambda = -1\\). For \\(\\mathbf{w} \\perp \\mathbf{v}\\): \\(H\\mathbf{w} = \\mathbf{w} - 2\\frac{\\mathbf{v}^T \\mathbf{w}}{\\mathbf{v}^T \\mathbf{v}}\\mathbf{v} = \\mathbf{w} - 0 = \\mathbf{w}\\). So \\(\\lambda = +1\\).'
                },
                {
                    question: 'How many Householder reflections are needed to reduce a \\(5 \\times 3\\) matrix to upper triangular form?',
                    hint: 'Each Householder reflection zeros out one column below the diagonal.',
                    solution: 'For an \\(m \\times n\\) matrix with \\(m > n\\), we need \\(n\\) Householder reflections (one per column). For \\(5 \\times 3\\), we need 3 reflections: \\(H_1\\) zeros out 4 entries below \\(r_{11}\\), \\(H_2\\) zeros out 3 entries below \\(r_{22}\\), \\(H_3\\) zeros out 2 entries below \\(r_{33}\\).'
                },
                {
                    question: 'Explain why Householder reflections are called "reflections." What hyperplane is the mirror?',
                    hint: 'Think about what \\(P = \\mathbf{v}\\mathbf{v}^T / (\\mathbf{v}^T \\mathbf{v})\\) does geometrically.',
                    solution: '\\(P = \\mathbf{v}\\mathbf{v}^T / (\\mathbf{v}^T \\mathbf{v})\\) projects onto the line spanned by \\(\\mathbf{v}\\). The complement \\(I - P\\) projects onto the hyperplane \\(\\mathbf{v}^\\perp\\). The Householder matrix \\(H = I - 2P\\) maps \\(\\mathbf{x}\\) to \\(\\mathbf{x} - 2P\\mathbf{x}\\). Geometrically: subtract the component along \\(\\mathbf{v}\\) and then subtract it again, effectively flipping the \\(\\mathbf{v}\\)-component. This is a reflection across the hyperplane \\(\\{\\mathbf{w} : \\mathbf{v}^T \\mathbf{w} = 0\\}\\).'
                },
                {
                    question: 'Compare the operation counts: classical Gram-Schmidt requires \\(\\sim 2mn^2\\) flops, and Householder QR also requires \\(\\sim 2mn^2 - \\frac{2}{3}n^3\\) flops. For a \\(1000 \\times 100\\) matrix, which is faster and by how much?',
                    hint: 'Substitute \\(m = 1000\\), \\(n = 100\\) into both formulas.',
                    solution: 'CGS: \\(2 \\times 1000 \\times 100^2 = 20{,}000{,}000\\) flops. Householder: \\(20{,}000{,}000 - \\frac{2}{3} \\times 100^3 = 20{,}000{,}000 - 666{,}667 \\approx 19{,}333{,}333\\) flops. Householder is about 3% fewer flops in this case. The real advantage of Householder is not speed but numerical stability: the computed \\(Q\\) satisfies \\(\\|Q^T Q - I\\| \\sim \\varepsilon_{\\text{machine}}\\) regardless of the condition number of \\(A\\).'
                }
            ]
        }
    ]
});
