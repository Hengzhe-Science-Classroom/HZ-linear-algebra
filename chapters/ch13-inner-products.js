// === Chapter 13: Inner Products & Orthogonality ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch13',
    number: 13,
    title: 'Inner Products & Orthogonality',
    subtitle: 'Length, angle, and perpendicularity in vector spaces',
    sections: [
        // ============================================================
        // SECTION 1: The Dot Product in R^n
        // ============================================================
        {
            id: 'ch13-sec01',
            title: 'The Dot Product in R\u207F',
            content: `
<h2>13.1 The Dot Product in \\(\\mathbb{R}^n\\)</h2>

<div class="env-block intuition">
    <div class="env-title">From Geometry to Algebra</div>
    <div class="env-body">
        <p>In \\(\\mathbb{R}^2\\) and \\(\\mathbb{R}^3\\), we have an intuitive understanding of length, angle, and perpendicularity. The dot product is the algebraic tool that captures all of these geometric concepts. It connects the coordinate description of vectors with their geometric properties, and it generalizes naturally to higher dimensions and abstract vector spaces.</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 13.1.1 (Dot Product)</div>
    <div class="env-body">
        <p>For vectors \\(\\mathbf{u} = (u_1, \\ldots, u_n)\\) and \\(\\mathbf{v} = (v_1, \\ldots, v_n)\\) in \\(\\mathbb{R}^n\\), the <strong>dot product</strong> (or <strong>standard inner product</strong>) is</p>
        \\[
        \\mathbf{u} \\cdot \\mathbf{v} = \\sum_{i=1}^n u_i v_i = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n.
        \\]
        <p>Equivalently, \\(\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v}\\) (viewing vectors as column matrices).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.1.2 (Properties of the Dot Product)</div>
    <div class="env-body">
        <p>For all \\(\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in \\mathbb{R}^n\\) and \\(c \\in \\mathbb{R}\\):</p>
        <ol>
            <li><strong>Symmetry:</strong> \\(\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}\\).</li>
            <li><strong>Linearity in the first argument:</strong> \\((c\\mathbf{u} + \\mathbf{w}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v}) + \\mathbf{w} \\cdot \\mathbf{v}\\).</li>
            <li><strong>Positive definiteness:</strong> \\(\\mathbf{u} \\cdot \\mathbf{u} \\ge 0\\), with equality if and only if \\(\\mathbf{u} = \\mathbf{0}\\).</li>
        </ol>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>(1) \\(\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i = \\sum v_i u_i = \\mathbf{v} \\cdot \\mathbf{u}\\).</p>
        <p>(2) \\((c\\mathbf{u} + \\mathbf{w}) \\cdot \\mathbf{v} = \\sum (cu_i + w_i)v_i = c\\sum u_i v_i + \\sum w_i v_i = c(\\mathbf{u} \\cdot \\mathbf{v}) + \\mathbf{w} \\cdot \\mathbf{v}\\).</p>
        <p>(3) \\(\\mathbf{u} \\cdot \\mathbf{u} = \\sum u_i^2 \\ge 0\\). The sum of squares is zero if and only if each \\(u_i = 0\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<h3>Geometric Meaning</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.1.3 (Geometric Interpretation)</div>
    <div class="env-body">
        <p>For nonzero vectors \\(\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n\\), the angle \\(\\theta\\) between them satisfies</p>
        \\[
        \\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\| \\cos\\theta,
        \\]
        <p>where \\(\\|\\mathbf{u}\\| = \\sqrt{\\mathbf{u} \\cdot \\mathbf{u}}\\). Equivalently,</p>
        \\[
        \\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|}.
        \\]
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Apply the law of cosines to the triangle with sides \\(\\mathbf{u}\\), \\(\\mathbf{v}\\), and \\(\\mathbf{u} - \\mathbf{v}\\):</p>
        \\[
        \\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta.
        \\]
        <p>Expanding the left side: \\(\\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\mathbf{u} \\cdot \\mathbf{u} - 2\\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v}\\). Substituting and simplifying: \\(-2\\mathbf{u} \\cdot \\mathbf{v} = -2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-dot-product-angle"></div>

<div class="env-block example">
    <div class="env-title">Example 13.1.4</div>
    <div class="env-body">
        <p>Find the angle between \\(\\mathbf{u} = (1, 2, 3)\\) and \\(\\mathbf{v} = (4, -5, 6)\\).</p>
        <p>\\(\\mathbf{u} \\cdot \\mathbf{v} = 4 - 10 + 18 = 12\\). \\(\\|\\mathbf{u}\\| = \\sqrt{14}\\), \\(\\|\\mathbf{v}\\| = \\sqrt{77}\\).</p>
        \\[
        \\cos\\theta = \\frac{12}{\\sqrt{14}\\sqrt{77}} = \\frac{12}{\\sqrt{1078}} \\approx 0.365, \\quad \\theta \\approx 68.6^\\circ.
        \\]
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 13.1.5 (Sign of the Dot Product)</div>
    <div class="env-body">
        <p>The sign of \\(\\mathbf{u} \\cdot \\mathbf{v}\\) encodes the angle:</p>
        <ul>
            <li>\\(\\mathbf{u} \\cdot \\mathbf{v} > 0 \\iff \\theta < 90^\\circ\\) (acute angle).</li>
            <li>\\(\\mathbf{u} \\cdot \\mathbf{v} = 0 \\iff \\theta = 90^\\circ\\) (perpendicular).</li>
            <li>\\(\\mathbf{u} \\cdot \\mathbf{v} < 0 \\iff \\theta > 90^\\circ\\) (obtuse angle).</li>
        </ul>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.1.6</div>
    <div class="env-body">
        <p>The standard basis vectors in \\(\\mathbb{R}^n\\) are mutually perpendicular: \\(\\mathbf{e}_i \\cdot \\mathbf{e}_j = \\delta_{ij}\\) (the Kronecker delta: 1 if \\(i = j\\), 0 otherwise). Any orthonormal basis has this property.</p>
    </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-dot-product-angle',
                    title: 'Dot Product and Angle Between Vectors',
                    description: 'Drag the endpoints of the two vectors to see how the dot product and angle change. When the vectors are perpendicular, the dot product is zero.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        const dragU = viz.addDraggable('u', 3, 1, viz.colors.blue, 8);
                        const dragV = viz.addDraggable('v', 1, 3, viz.colors.teal, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const ux = dragU.x, uy = dragU.y;
                            const vx = dragV.x, vy = dragV.y;

                            // Draw vectors
                            viz.drawVec(ux, uy, viz.colors.blue, 'u', 2.5);
                            viz.drawVec(vx, vy, viz.colors.teal, 'v', 2.5);

                            // Compute dot product and angle
                            const dot = ux * vx + uy * vy;
                            const magU = Math.sqrt(ux * ux + uy * uy);
                            const magV = Math.sqrt(vx * vx + vy * vy);
                            let theta = 0;
                            if (magU > 0.01 && magV > 0.01) {
                                const cosTheta = Math.max(-1, Math.min(1, dot / (magU * magV)));
                                theta = Math.acos(cosTheta);
                            }

                            // Draw angle arc
                            if (magU > 0.01 && magV > 0.01) {
                                const ctx = viz.ctx;
                                const [ox, oy] = viz.toScreen(0, 0);
                                const angU = Math.atan2(uy, ux);
                                const angV = Math.atan2(vy, vx);
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                // Draw arc from angU to angV (shorter way)
                                const arcR = 30;
                                let startAng = -angU;
                                let endAng = -angV;
                                ctx.arc(ox, oy, arcR, startAng, endAng, theta > Math.PI ? false : (angV > angU ? true : false));
                                ctx.stroke();
                            }

                            // Info display
                            const thetaDeg = (theta * 180 / Math.PI).toFixed(1);
                            const dotColor = dot > 0.01 ? viz.colors.green : (dot < -0.01 ? viz.colors.red : viz.colors.yellow);
                            viz.screenText('u = (' + ux.toFixed(1) + ', ' + uy.toFixed(1) + ')', 12, 20, viz.colors.blue, 13, 'left');
                            viz.screenText('v = (' + vx.toFixed(1) + ', ' + vy.toFixed(1) + ')', 12, 38, viz.colors.teal, 13, 'left');
                            viz.screenText('u \u00B7 v = ' + dot.toFixed(2), 12, 60, dotColor, 14, 'left');
                            viz.screenText('\u03B8 = ' + thetaDeg + '\u00B0', 12, 80, viz.colors.yellow, 13, 'left');
                            viz.screenText('||u|| = ' + magU.toFixed(2) + ',  ||v|| = ' + magV.toFixed(2), 12, 100, viz.colors.text, 12, 'left');

                            if (Math.abs(dot) < 0.3) {
                                viz.screenText('Perpendicular! (u \u00B7 v \u2248 0)', viz.width / 2, viz.height - 15, viz.colors.yellow, 13);
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
                    question: 'Compute \\(\\mathbf{u} \\cdot \\mathbf{v}\\) for \\(\\mathbf{u} = (2, -3, 1)\\) and \\(\\mathbf{v} = (5, 4, -2)\\). Is the angle between them acute, right, or obtuse?',
                    hint: 'Compute \\(u_1 v_1 + u_2 v_2 + u_3 v_3\\) and check the sign.',
                    solution: '\\(\\mathbf{u} \\cdot \\mathbf{v} = 2(5) + (-3)(4) + 1(-2) = 10 - 12 - 2 = -4\\). Since the dot product is negative, the angle is obtuse (\\(\\theta > 90^\\circ\\)).'
                },
                {
                    question: 'Find all values of \\(k\\) such that \\((1, k, 2)\\) and \\((3, -1, k)\\) are perpendicular.',
                    hint: 'Set the dot product equal to zero.',
                    solution: '\\((1)(3) + (k)(-1) + (2)(k) = 3 - k + 2k = 3 + k = 0\\). So \\(k = -3\\).'
                },
                {
                    question: 'Prove the <em>polarization identity</em>: \\(\\mathbf{u} \\cdot \\mathbf{v} = \\frac{1}{4}(\\|\\mathbf{u} + \\mathbf{v}\\|^2 - \\|\\mathbf{u} - \\mathbf{v}\\|^2)\\).',
                    hint: 'Expand both squared norms using \\(\\|\\mathbf{w}\\|^2 = \\mathbf{w} \\cdot \\mathbf{w}\\).',
                    solution: '\\(\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\mathbf{u} \\cdot \\mathbf{v} + \\|\\mathbf{v}\\|^2\\), \\(\\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 - 2\\mathbf{u} \\cdot \\mathbf{v} + \\|\\mathbf{v}\\|^2\\). Subtracting: \\(\\|\\mathbf{u}+\\mathbf{v}\\|^2 - \\|\\mathbf{u}-\\mathbf{v}\\|^2 = 4\\mathbf{u} \\cdot \\mathbf{v}\\). Dividing by 4 gives the result.'
                },
                {
                    question: 'Show that \\(\\mathbf{u} \\cdot \\mathbf{v} = \\frac{1}{2}(\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - \\|\\mathbf{u} - \\mathbf{v}\\|^2)\\).',
                    hint: 'Expand \\(\\|\\mathbf{u} - \\mathbf{v}\\|^2\\).',
                    solution: '\\(\\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 - 2\\mathbf{u} \\cdot \\mathbf{v} + \\|\\mathbf{v}\\|^2\\). Rearranging: \\(2\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - \\|\\mathbf{u} - \\mathbf{v}\\|^2\\). This is the law of cosines in vector form.'
                },
                {
                    question: 'Let \\(\\mathbf{u} = (\\cos\\alpha, \\sin\\alpha)\\) and \\(\\mathbf{v} = (\\cos\\beta, \\sin\\beta)\\). Compute \\(\\mathbf{u} \\cdot \\mathbf{v}\\) and use it to derive the cosine subtraction formula.',
                    hint: 'Both vectors have unit length. The angle between them is \\(\\alpha - \\beta\\).',
                    solution: '\\(\\mathbf{u} \\cdot \\mathbf{v} = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\). Since \\(\\|\\mathbf{u}\\| = \\|\\mathbf{v}\\| = 1\\), we also have \\(\\mathbf{u} \\cdot \\mathbf{v} = \\cos(\\alpha - \\beta)\\). Therefore \\(\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Inner Product Spaces
        // ============================================================
        {
            id: 'ch13-sec02',
            title: 'Inner Product Spaces',
            content: `
<h2>13.2 Inner Product Spaces</h2>

<p>The dot product on \\(\\mathbb{R}^n\\) has three essential properties: symmetry, linearity, and positive definiteness. Any function on a vector space satisfying these same axioms is called an <em>inner product</em>, and it endows the space with a geometry (lengths and angles) just like the dot product does for \\(\\mathbb{R}^n\\).</p>

<div class="env-block definition">
    <div class="env-title">Definition 13.2.1 (Inner Product)</div>
    <div class="env-body">
        <p>Let \\(V\\) be a real vector space. An <strong>inner product</strong> on \\(V\\) is a function \\(\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}\\) satisfying, for all \\(\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V\\) and \\(c \\in \\mathbb{R}\\):</p>
        <ol>
            <li><strong>Symmetry:</strong> \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle\\).</li>
            <li><strong>Linearity in the first argument:</strong> \\(\\langle c\\mathbf{u} + \\mathbf{w}, \\mathbf{v} \\rangle = c\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\langle \\mathbf{w}, \\mathbf{v} \\rangle\\).</li>
            <li><strong>Positive definiteness:</strong> \\(\\langle \\mathbf{u}, \\mathbf{u} \\rangle \\ge 0\\), with equality if and only if \\(\\mathbf{u} = \\mathbf{0}\\).</li>
        </ol>
        <p>A vector space equipped with an inner product is called an <strong>inner product space</strong>.</p>
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 13.2.2</div>
    <div class="env-body">
        <p>By symmetry (1) and linearity in the first argument (2), the inner product is also linear in the second argument. Together these say \\(\\langle \\cdot, \\cdot \\rangle\\) is <em>bilinear</em>. For complex vector spaces, symmetry is replaced by <em>conjugate symmetry</em>: \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\overline{\\langle \\mathbf{v}, \\mathbf{u} \\rangle}\\), and the inner product is sesquilinear (linear in one argument, conjugate-linear in the other).</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.2.3 (Standard Inner Product on \\(\\mathbb{R}^n\\))</div>
    <div class="env-body">
        <p>\\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T \\mathbf{v} = \\sum u_i v_i\\). This is the dot product from Section 13.1.</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.2.4 (Weighted Inner Product)</div>
    <div class="env-body">
        <p>Let \\(w_1, w_2, \\ldots, w_n > 0\\) be positive weights. Define</p>
        \\[
        \\langle \\mathbf{u}, \\mathbf{v} \\rangle_w = \\sum_{i=1}^n w_i u_i v_i.
        \\]
        <p>This is an inner product. In matrix form, \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle_w = \\mathbf{u}^T W \\mathbf{v}\\) where \\(W = \\operatorname{diag}(w_1, \\ldots, w_n)\\).</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.2.5 (Inner Product on \\(C[a,b]\\))</div>
    <div class="env-body">
        <p>On the space of continuous functions \\(C[a, b]\\), define</p>
        \\[
        \\langle f, g \\rangle = \\int_a^b f(x)\\, g(x)\\, dx.
        \\]
        <p>This satisfies all three axioms. The "angle" between functions and the "length" of a function are defined by this integral, leading to Fourier analysis and approximation theory.</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.2.6 (Inner Products via Positive Definite Matrices)</div>
    <div class="env-body">
        <p>Every inner product on \\(\\mathbb{R}^n\\) has the form \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T M \\mathbf{v}\\) for some symmetric positive definite matrix \\(M\\). Conversely, every symmetric positive definite \\(M\\) defines an inner product by this formula.</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Given an inner product \\(\\langle \\cdot, \\cdot \\rangle\\), define \\(M_{ij} = \\langle \\mathbf{e}_i, \\mathbf{e}_j \\rangle\\). By bilinearity, \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T M \\mathbf{v}\\). By symmetry of the inner product, \\(M^T = M\\). By positive definiteness, \\(\\mathbf{u}^T M \\mathbf{u} > 0\\) for all \\(\\mathbf{u} \\neq \\mathbf{0}\\), so \\(M\\) is positive definite.</p>
        <p>Conversely, if \\(M\\) is symmetric positive definite, then \\(\\mathbf{u}^T M \\mathbf{v}\\) is bilinear (by matrix multiplication), symmetric (since \\((\\mathbf{u}^T M \\mathbf{v})^T = \\mathbf{v}^T M^T \\mathbf{u} = \\mathbf{v}^T M \\mathbf{u}\\)), and positive definite.</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block warning">
    <div class="env-title">Warning</div>
    <div class="env-body">
        <p>The matrix \\(M\\) that represents the inner product depends on the chosen basis. If we change basis via \\(P\\), the matrix representing the same inner product in the new basis is \\(P^T M P\\). The standard dot product corresponds to \\(M = I\\) (in the standard basis).</p>
    </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Verify that \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 2u_1 v_1 + 3u_2 v_2\\) defines an inner product on \\(\\mathbb{R}^2\\).',
                    hint: 'Check symmetry, linearity, and positive definiteness. What is the matrix \\(M\\)?',
                    solution: 'Symmetry: \\(2u_1v_1 + 3u_2v_2 = 2v_1u_1 + 3v_2u_2\\). Linearity: straightforward from the algebraic form. Positive definiteness: \\(2u_1^2 + 3u_2^2 \\ge 0\\), and equals 0 iff \\(u_1 = u_2 = 0\\). The matrix is \\(M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\), which is symmetric positive definite.'
                },
                {
                    question: 'Show that \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_1 - u_1 v_2 - u_2 v_1 + 4u_2 v_2\\) defines an inner product on \\(\\mathbb{R}^2\\).',
                    hint: 'Write this as \\(\\mathbf{u}^T M \\mathbf{v}\\) and check that \\(M\\) is symmetric positive definite.',
                    solution: '\\(M = \\begin{pmatrix} 1 & -1 \\\\ -1 & 4 \\end{pmatrix}\\). This is symmetric. Eigenvalues: \\(\\frac{5 \\pm \\sqrt{9}}{2} = \\frac{5 \\pm 3}{2}\\), giving \\(\\lambda = 4\\) and \\(\\lambda = 1\\). Both positive, so \\(M\\) is positive definite and this defines an inner product.'
                },
                {
                    question: 'Why does \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_1 - u_2 v_2\\) fail to be an inner product on \\(\\mathbb{R}^2\\)?',
                    hint: 'Check positive definiteness with \\(\\mathbf{u} = (0, 1)\\).',
                    solution: '\\(\\langle (0,1), (0,1) \\rangle = 0 - 1 = -1 < 0\\). This violates positive definiteness. The matrix \\(M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\) is not positive definite (it is the Minkowski metric of special relativity, which defines a pseudo-inner product).'
                },
                {
                    question: 'For the function space \\(C[0, 1]\\) with \\(\\langle f, g \\rangle = \\int_0^1 f(x)g(x)\\,dx\\), compute \\(\\langle x, x^2 \\rangle\\) and \\(\\|x\\|\\).',
                    hint: 'Evaluate the integrals \\(\\int_0^1 x \\cdot x^2\\,dx\\) and \\(\\sqrt{\\int_0^1 x^2\\,dx}\\).',
                    solution: '\\(\\langle x, x^2 \\rangle = \\int_0^1 x^3\\,dx = \\frac{1}{4}\\). \\(\\|x\\| = \\sqrt{\\int_0^1 x^2\\,dx} = \\sqrt{\\frac{1}{3}} = \\frac{1}{\\sqrt{3}}\\).'
                },
                {
                    question: 'Prove that in any inner product space, \\(\\langle \\mathbf{u}, \\mathbf{0} \\rangle = 0\\) for all \\(\\mathbf{u}\\).',
                    hint: 'Use linearity: \\(\\mathbf{0} = 0 \\cdot \\mathbf{v}\\) for any \\(\\mathbf{v}\\).',
                    solution: '\\(\\langle \\mathbf{u}, \\mathbf{0} \\rangle = \\langle \\mathbf{u}, 0 \\cdot \\mathbf{v} \\rangle = 0 \\cdot \\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0\\) by linearity in the second argument (which follows from symmetry + linearity in the first).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Norms and Distance
        // ============================================================
        {
            id: 'ch13-sec03',
            title: 'Norms and Distance',
            content: `
<h2>13.3 Norms and Distance</h2>

<p>An inner product naturally defines a notion of length (norm) and distance. The two fundamental inequalities, Cauchy-Schwarz and the triangle inequality, are cornerstones of analysis and geometry in inner product spaces.</p>

<div class="env-block definition">
    <div class="env-title">Definition 13.3.1 (Induced Norm)</div>
    <div class="env-body">
        <p>In an inner product space \\(V\\), the <strong>norm</strong> (or length) of a vector \\(\\mathbf{v}\\) is</p>
        \\[
        \\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}.
        \\]
        <p>A vector with \\(\\|\\mathbf{v}\\| = 1\\) is called a <strong>unit vector</strong>.</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 13.3.2 (Distance)</div>
    <div class="env-body">
        <p>The <strong>distance</strong> between vectors \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) is \\(d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|\\).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.3.3 (Cauchy-Schwarz Inequality)</div>
    <div class="env-body">
        <p>For all \\(\\mathbf{u}, \\mathbf{v}\\) in an inner product space,</p>
        \\[
        |\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|.
        \\]
        <p>Equality holds if and only if \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) are linearly dependent (one is a scalar multiple of the other).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>If \\(\\mathbf{v} = \\mathbf{0}\\), both sides are 0. Otherwise, for any \\(t \\in \\mathbb{R}\\), consider</p>
        \\[
        0 \\le \\|\\mathbf{u} - t\\mathbf{v}\\|^2 = \\langle \\mathbf{u} - t\\mathbf{v}, \\mathbf{u} - t\\mathbf{v} \\rangle = \\|\\mathbf{u}\\|^2 - 2t\\langle \\mathbf{u}, \\mathbf{v} \\rangle + t^2 \\|\\mathbf{v}\\|^2.
        \\]
        <p>This is a quadratic in \\(t\\) that is always \\(\\ge 0\\). Its minimum occurs at \\(t = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{v}\\|^2}\\). Substituting:</p>
        \\[
        0 \\le \\|\\mathbf{u}\\|^2 - \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle^2}{\\|\\mathbf{v}\\|^2}.
        \\]
        <p>Rearranging gives \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle^2 \\le \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2\\). Taking square roots yields the result.</p>
        <p>Equality holds when \\(\\|\\mathbf{u} - t\\mathbf{v}\\|^2 = 0\\), i.e., \\(\\mathbf{u} = t\\mathbf{v}\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-cauchy-schwarz"></div>

<div class="env-block corollary">
    <div class="env-title">Corollary 13.3.4</div>
    <div class="env-body">
        <p>For any nonzero vectors \\(\\mathbf{u}, \\mathbf{v}\\),</p>
        \\[
        -1 \\le \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|} \\le 1,
        \\]
        <p>so the angle \\(\\theta = \\arccos\\!\\left(\\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|}\\right)\\) is well-defined. This generalizes the notion of angle to any inner product space.</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.3.5 (Triangle Inequality)</div>
    <div class="env-body">
        <p>For all \\(\\mathbf{u}, \\mathbf{v}\\) in an inner product space,</p>
        \\[
        \\|\\mathbf{u} + \\mathbf{v}\\| \\le \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|.
        \\]
        <p>Equality holds if and only if \\(\\mathbf{v} = c\\mathbf{u}\\) for some \\(c \\ge 0\\) (or one of them is zero).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        \\[
        \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2 \\le \\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\| + \\|\\mathbf{v}\\|^2 = (\\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|)^2,
        \\]
        <p>where the inequality uses Cauchy-Schwarz. Taking square roots (both sides are nonneg.) gives the result.</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.3.6 (Parallelogram Law)</div>
    <div class="env-body">
        <p>In any inner product space,</p>
        \\[
        \\|\\mathbf{u} + \\mathbf{v}\\|^2 + \\|\\mathbf{u} - \\mathbf{v}\\|^2 = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2.
        \\]
        <p>Geometrically: the sum of the squares of the diagonals of a parallelogram equals the sum of the squares of all four sides.</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Expand both sides:</p>
        \\[
        \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2, \\quad \\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 - 2\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2.
        \\]
        <p>Adding: the \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle\\) terms cancel, giving \\(2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 13.3.7</div>
    <div class="env-body">
        <p>The parallelogram law characterizes norms that come from inner products. A norm \\(\\|\\cdot\\|\\) on a vector space is induced by some inner product if and only if it satisfies the parallelogram law. (The inner product can then be recovered via the polarization identity from Exercise 13.1.3.)</p>
    </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-cauchy-schwarz',
                    title: 'Cauchy-Schwarz Inequality',
                    description: 'Drag vectors \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\). The blue bar shows \\(|\\mathbf{u} \\cdot \\mathbf{v}|\\) and the green bar shows \\(\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|\\). By Cauchy-Schwarz, blue never exceeds green. Equality holds when the vectors are parallel.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        const dragU = viz.addDraggable('u', 2, 1, viz.colors.blue, 8);
                        const dragV = viz.addDraggable('v', 1, 2.5, viz.colors.teal, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const ux = dragU.x, uy = dragU.y;
                            const vx = dragV.x, vy = dragV.y;

                            viz.drawVec(ux, uy, viz.colors.blue, 'u', 2.5);
                            viz.drawVec(vx, vy, viz.colors.teal, 'v', 2.5);

                            const dot = ux * vx + uy * vy;
                            const magU = Math.sqrt(ux * ux + uy * uy);
                            const magV = Math.sqrt(vx * vx + vy * vy);
                            const absDot = Math.abs(dot);
                            const product = magU * magV;

                            // Draw bar comparison at bottom
                            const ctx = viz.ctx;
                            const barY = viz.height - 55;
                            const barMaxW = viz.width - 200;
                            const scale = product > 0.01 ? barMaxW / (product * 1.2) : 1;

                            // Green bar: ||u|| ||v||
                            ctx.fillStyle = viz.colors.green + '44';
                            ctx.fillRect(100, barY, product * scale, 16);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(100, barY, product * scale, 16);

                            // Blue bar: |u . v|
                            ctx.fillStyle = viz.colors.blue + '66';
                            ctx.fillRect(100, barY + 22, absDot * scale, 16);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.strokeRect(100, barY + 22, absDot * scale, 16);

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('||u|| \u00B7 ||v|| = ' + product.toFixed(2), 100 + product * scale + 8, barY + 8);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('|u \u00B7 v| = ' + absDot.toFixed(2), 100 + absDot * scale + 8, barY + 30);

                            // Check near-equality (collinear)
                            const ratio = product > 0.01 ? absDot / product : 0;
                            if (ratio > 0.99) {
                                viz.screenText('Equality! Vectors are parallel.', viz.width / 2, barY - 10, viz.colors.yellow, 12);
                            }

                            viz.screenText('|u \u00B7 v| \u2264 ||u|| ||v||  (Cauchy-Schwarz)', viz.width / 2, 20, viz.colors.white, 13);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove the <em>reverse triangle inequality</em>: \\(|\\|\\mathbf{u}\\| - \\|\\mathbf{v}\\|| \\le \\|\\mathbf{u} - \\mathbf{v}\\|\\).',
                    hint: 'Write \\(\\mathbf{u} = (\\mathbf{u} - \\mathbf{v}) + \\mathbf{v}\\) and apply the triangle inequality.',
                    solution: '\\(\\|\\mathbf{u}\\| = \\|(\\mathbf{u} - \\mathbf{v}) + \\mathbf{v}\\| \\le \\|\\mathbf{u} - \\mathbf{v}\\| + \\|\\mathbf{v}\\|\\), so \\(\\|\\mathbf{u}\\| - \\|\\mathbf{v}\\| \\le \\|\\mathbf{u} - \\mathbf{v}\\|\\). By symmetry (swapping \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\)), \\(\\|\\mathbf{v}\\| - \\|\\mathbf{u}\\| \\le \\|\\mathbf{u} - \\mathbf{v}\\|\\). Thus \\(|\\|\\mathbf{u}\\| - \\|\\mathbf{v}\\|| \\le \\|\\mathbf{u} - \\mathbf{v}\\|\\).'
                },
                {
                    question: 'Show that the Cauchy-Schwarz inequality for sums is \\(\\left(\\sum a_i b_i\\right)^2 \\le \\left(\\sum a_i^2\\right)\\left(\\sum b_i^2\\right)\\).',
                    hint: 'Apply the abstract Cauchy-Schwarz inequality with the standard inner product on \\(\\mathbb{R}^n\\).',
                    solution: 'Set \\(\\mathbf{u} = (a_1, \\ldots, a_n)\\), \\(\\mathbf{v} = (b_1, \\ldots, b_n)\\). Then \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\sum a_i b_i\\), \\(\\|\\mathbf{u}\\|^2 = \\sum a_i^2\\), \\(\\|\\mathbf{v}\\|^2 = \\sum b_i^2\\). The abstract inequality \\(|\\langle \\mathbf{u}, \\mathbf{v} \\rangle|^2 \\le \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2\\) gives the result.'
                },
                {
                    question: 'Apply the Cauchy-Schwarz inequality on \\(C[0,1]\\) to show that \\(\\left(\\int_0^1 f(x)\\,dx\\right)^2 \\le \\int_0^1 f(x)^2\\,dx\\) for any continuous \\(f\\).',
                    hint: 'Take \\(g(x) = 1\\) and use \\(\\langle f, g \\rangle = \\int_0^1 f(x)\\,dx\\).',
                    solution: '\\(|\\langle f, 1 \\rangle|^2 \\le \\|f\\|^2 \\|1\\|^2\\). Here \\(\\langle f, 1 \\rangle = \\int_0^1 f\\,dx\\), \\(\\|f\\|^2 = \\int_0^1 f^2\\,dx\\), \\(\\|1\\|^2 = \\int_0^1 1\\,dx = 1\\). Thus \\((\\int_0^1 f\\,dx)^2 \\le \\int_0^1 f^2\\,dx\\).'
                },
                {
                    question: 'Verify the parallelogram law for \\(\\mathbf{u} = (1, 2)\\) and \\(\\mathbf{v} = (3, -1)\\) in \\(\\mathbb{R}^2\\) with the standard inner product.',
                    hint: 'Compute all four norms squared.',
                    solution: '\\(\\mathbf{u} + \\mathbf{v} = (4, 1)\\), \\(\\|\\mathbf{u}+\\mathbf{v}\\|^2 = 17\\). \\(\\mathbf{u} - \\mathbf{v} = (-2, 3)\\), \\(\\|\\mathbf{u}-\\mathbf{v}\\|^2 = 13\\). Sum = 30. \\(2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2 = 2(5) + 2(10) = 30\\). Verified.'
                },
                {
                    question: 'Prove that \\(\\|\\mathbf{u} + \\mathbf{v}\\|^2 + \\|\\mathbf{u} - \\mathbf{v}\\|^2 = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2\\) implies the Pythagorean theorem as a special case.',
                    hint: 'Set \\(\\mathbf{u} \\perp \\mathbf{v}\\) and note that \\(\\|\\mathbf{u} + \\mathbf{v}\\| = \\|\\mathbf{u} - \\mathbf{v}\\|\\) when \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0\\).',
                    solution: 'If \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0\\), then \\(\\|\\mathbf{u}+\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\) and \\(\\|\\mathbf{u}-\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\). The parallelogram law gives \\(2(\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2) = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2\\), which is trivially true. But the key insight is that orthogonality implies the Pythagorean theorem: \\(\\|\\mathbf{u}+\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Orthogonality
        // ============================================================
        {
            id: 'ch13-sec04',
            title: 'Orthogonality',
            content: `
<h2>13.4 Orthogonality</h2>

<p>Orthogonality (perpendicularity) is one of the most powerful geometric ideas in linear algebra. Orthogonal sets of vectors are automatically linearly independent, orthogonal bases simplify computations dramatically, and the orthogonal complement provides a canonical way to decompose any vector space into complementary pieces.</p>

<div class="env-block definition">
    <div class="env-title">Definition 13.4.1 (Orthogonal Vectors)</div>
    <div class="env-body">
        <p>Two vectors \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\) in an inner product space are <strong>orthogonal</strong> (written \\(\\mathbf{u} \\perp \\mathbf{v}\\)) if \\(\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0\\).</p>
    </div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 13.4.2 (Orthogonal and Orthonormal Sets)</div>
    <div class="env-body">
        <p>A set of vectors \\(\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}\\) is:</p>
        <ul>
            <li><strong>Orthogonal</strong> if \\(\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0\\) for all \\(i \\neq j\\).</li>
            <li><strong>Orthonormal</strong> if it is orthogonal and each vector has unit length: \\(\\|\\mathbf{v}_i\\| = 1\\).</li>
        </ul>
        <p>Equivalently, orthonormality means \\(\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = \\delta_{ij}\\).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.4.3</div>
    <div class="env-body">
        <p>An orthogonal set of nonzero vectors is linearly independent.</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Suppose \\(c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k = \\mathbf{0}\\). Take the inner product with \\(\\mathbf{v}_j\\):</p>
        \\[
        \\langle c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k, \\mathbf{v}_j \\rangle = c_j \\|\\mathbf{v}_j\\|^2 = 0,
        \\]
        <p>since all cross terms vanish by orthogonality. Since \\(\\mathbf{v}_j \\neq \\mathbf{0}\\), we have \\(\\|\\mathbf{v}_j\\|^2 > 0\\), so \\(c_j = 0\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.4.4 (Fourier Coefficients)</div>
    <div class="env-body">
        <p>If \\(\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}\\) is an orthogonal basis for a subspace \\(W\\), then for any \\(\\mathbf{w} \\in W\\),</p>
        \\[
        \\mathbf{w} = \\sum_{j=1}^k \\frac{\\langle \\mathbf{w}, \\mathbf{v}_j \\rangle}{\\|\\mathbf{v}_j\\|^2} \\mathbf{v}_j.
        \\]
        <p>If the basis is orthonormal, this simplifies to \\(\\mathbf{w} = \\sum_{j=1}^k \\langle \\mathbf{w}, \\mathbf{v}_j \\rangle \\mathbf{v}_j\\).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>Write \\(\\mathbf{w} = c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k\\). Taking the inner product with \\(\\mathbf{v}_j\\): \\(\\langle \\mathbf{w}, \\mathbf{v}_j \\rangle = c_j \\|\\mathbf{v}_j\\|^2\\), so \\(c_j = \\frac{\\langle \\mathbf{w}, \\mathbf{v}_j \\rangle}{\\|\\mathbf{v}_j\\|^2}\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<h3>Orthogonal Complement</h3>

<div class="env-block definition">
    <div class="env-title">Definition 13.4.5 (Orthogonal Complement)</div>
    <div class="env-body">
        <p>Let \\(W\\) be a subspace of an inner product space \\(V\\). The <strong>orthogonal complement</strong> of \\(W\\) is</p>
        \\[
        W^\\perp = \\{\\mathbf{v} \\in V : \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}.
        \\]
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.4.6 (Properties of the Orthogonal Complement)</div>
    <div class="env-body">
        <p>Let \\(W\\) be a subspace of a finite-dimensional inner product space \\(V\\). Then:</p>
        <ol>
            <li>\\(W^\\perp\\) is a subspace of \\(V\\).</li>
            <li>\\(V = W \\oplus W^\\perp\\) (orthogonal direct sum).</li>
            <li>\\(\\dim W^\\perp = \\dim V - \\dim W\\).</li>
            <li>\\((W^\\perp)^\\perp = W\\).</li>
        </ol>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (of parts 1 and 2)</div>
    <div class="env-body">
        <p>(1) If \\(\\mathbf{u}, \\mathbf{v} \\in W^\\perp\\) and \\(c \\in \\mathbb{R}\\), then for any \\(\\mathbf{w} \\in W\\): \\(\\langle c\\mathbf{u} + \\mathbf{v}, \\mathbf{w} \\rangle = c\\langle \\mathbf{u}, \\mathbf{w} \\rangle + \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0\\).</p>
        <p>(2) First, \\(W \\cap W^\\perp = \\{\\mathbf{0}\\}\\): if \\(\\mathbf{v} \\in W \\cap W^\\perp\\), then \\(\\langle \\mathbf{v}, \\mathbf{v} \\rangle = 0\\), so \\(\\mathbf{v} = \\mathbf{0}\\). By dimension counting (part 3), \\(\\dim W + \\dim W^\\perp = \\dim V\\), so \\(V = W \\oplus W^\\perp\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.4.7</div>
    <div class="env-body">
        <p>Let \\(W = \\operatorname{span}\\{(1, 1, 0)\\}\\) in \\(\\mathbb{R}^3\\). Then \\(W^\\perp = \\{(x, y, z) : x + y = 0\\} = \\operatorname{span}\\{(-1, 1, 0), (0, 0, 1)\\}\\). Note \\(\\dim W = 1\\), \\(\\dim W^\\perp = 2\\), and \\(\\mathbb{R}^3 = W \\oplus W^\\perp\\).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.4.8 (Pythagorean Theorem)</div>
    <div class="env-body">
        <p>If \\(\\mathbf{u} \\perp \\mathbf{v}\\), then \\(\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\).</p>
        <p>More generally, if \\(\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\) are mutually orthogonal, then \\(\\|\\mathbf{v}_1 + \\cdots + \\mathbf{v}_k\\|^2 = \\|\\mathbf{v}_1\\|^2 + \\cdots + \\|\\mathbf{v}_k\\|^2\\).</p>
    </div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Verify that \\(\\{(1, 1, 1), (1, -1, 0), (1, 1, -2)\\}\\) is an orthogonal set in \\(\\mathbb{R}^3\\).',
                    hint: 'Compute all three pairwise dot products.',
                    solution: '\\((1,1,1) \\cdot (1,-1,0) = 1 - 1 + 0 = 0\\). \\((1,1,1) \\cdot (1,1,-2) = 1 + 1 - 2 = 0\\). \\((1,-1,0) \\cdot (1,1,-2) = 1 - 1 + 0 = 0\\). All pairwise dot products are zero, confirming orthogonality.'
                },
                {
                    question: 'Express \\(\\mathbf{w} = (5, 3, -1)\\) in terms of the orthogonal basis from the previous exercise.',
                    hint: 'Use the Fourier coefficient formula: \\(c_j = \\frac{\\mathbf{w} \\cdot \\mathbf{v}_j}{\\mathbf{v}_j \\cdot \\mathbf{v}_j}\\).',
                    solution: '\\(c_1 = \\frac{5+3-1}{1+1+1} = \\frac{7}{3}\\). \\(c_2 = \\frac{5-3+0}{1+1+0} = \\frac{2}{2} = 1\\). \\(c_3 = \\frac{5+3+2}{1+1+4} = \\frac{10}{6} = \\frac{5}{3}\\). So \\(\\mathbf{w} = \\frac{7}{3}(1,1,1) + 1 \\cdot (1,-1,0) + \\frac{5}{3}(1,1,-2)\\). Verify: \\((\\frac{7}{3}+1+\\frac{5}{3}, \\frac{7}{3}-1+\\frac{5}{3}, \\frac{7}{3}+0-\\frac{10}{3}) = (5, 3, -1)\\).'
                },
                {
                    question: 'Find the orthogonal complement of \\(W = \\operatorname{span}\\{(1, 2, -1), (0, 1, 1)\\}\\) in \\(\\mathbb{R}^3\\).',
                    hint: 'Find all \\((x, y, z)\\) satisfying \\(x + 2y - z = 0\\) and \\(y + z = 0\\).',
                    solution: 'From \\(y + z = 0\\): \\(z = -y\\). From \\(x + 2y - z = 0\\): \\(x + 2y + y = 0\\), so \\(x = -3y\\). Thus \\(W^\\perp = \\operatorname{span}\\{(-3, 1, -1)\\}\\). This is a line in \\(\\mathbb{R}^3\\), consistent with \\(\\dim W^\\perp = 3 - 2 = 1\\).'
                },
                {
                    question: 'Normalize the orthogonal set \\(\\{(1, 1, 1), (1, -1, 0), (1, 1, -2)\\}\\) to obtain an orthonormal basis.',
                    hint: 'Divide each vector by its norm.',
                    solution: '\\(\\|(1,1,1)\\| = \\sqrt{3}\\), \\(\\|(1,-1,0)\\| = \\sqrt{2}\\), \\(\\|(1,1,-2)\\| = \\sqrt{6}\\). The orthonormal basis is \\(\\left\\{\\frac{1}{\\sqrt{3}}(1,1,1),\\; \\frac{1}{\\sqrt{2}}(1,-1,0),\\; \\frac{1}{\\sqrt{6}}(1,1,-2)\\right\\}\\).'
                },
                {
                    question: 'Prove that if \\(\\mathbf{u} \\perp \\mathbf{v}\\), then \\(\\|\\mathbf{u} + \\mathbf{v}\\| = \\|\\mathbf{u} - \\mathbf{v}\\|\\). Interpret this geometrically.',
                    hint: 'Expand \\(\\|\\mathbf{u} + \\mathbf{v}\\|^2\\) and \\(\\|\\mathbf{u} - \\mathbf{v}\\|^2\\) using the inner product.',
                    solution: '\\(\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\langle \\mathbf{u},\\mathbf{v}\\rangle + \\|\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\) (since \\(\\langle \\mathbf{u},\\mathbf{v}\\rangle = 0\\)). Similarly \\(\\|\\mathbf{u} - \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2\\). So \\(\\|\\mathbf{u}+\\mathbf{v}\\| = \\|\\mathbf{u}-\\mathbf{v}\\|\\). Geometrically: the diagonals of a rectangle have equal length.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Orthogonal Projection
        // ============================================================
        {
            id: 'ch13-sec05',
            title: 'Orthogonal Projection',
            content: `
<h2>13.5 Orthogonal Projection</h2>

<div class="env-block intuition">
    <div class="env-title">The Best Approximation Problem</div>
    <div class="env-body">
        <p>Given a vector \\(\\mathbf{b}\\) and a subspace \\(W\\), what vector in \\(W\\) is closest to \\(\\mathbf{b}\\)? The answer is the orthogonal projection of \\(\\mathbf{b}\\) onto \\(W\\): the component of \\(\\mathbf{b}\\) that "lies in" \\(W\\). This idea underpins least squares, Fourier analysis, and approximation theory.</p>
    </div>
</div>

<h3>Projection onto a Line</h3>

<div class="env-block definition">
    <div class="env-title">Definition 13.5.1 (Projection onto a Vector)</div>
    <div class="env-body">
        <p>The <strong>orthogonal projection</strong> of \\(\\mathbf{b}\\) onto a nonzero vector \\(\\mathbf{a}\\) is</p>
        \\[
        \\operatorname{proj}_{\\mathbf{a}} \\mathbf{b} = \\frac{\\langle \\mathbf{b}, \\mathbf{a} \\rangle}{\\langle \\mathbf{a}, \\mathbf{a} \\rangle} \\mathbf{a} = \\frac{\\langle \\mathbf{b}, \\mathbf{a} \\rangle}{\\|\\mathbf{a}\\|^2} \\mathbf{a}.
        \\]
        <p>The <strong>error</strong> (or residual) is \\(\\mathbf{e} = \\mathbf{b} - \\operatorname{proj}_{\\mathbf{a}} \\mathbf{b}\\), which is orthogonal to \\(\\mathbf{a}\\).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Verification of Orthogonality</div>
    <div class="env-body">
        <p>\\(\\langle \\mathbf{e}, \\mathbf{a} \\rangle = \\langle \\mathbf{b} - \\frac{\\langle \\mathbf{b}, \\mathbf{a} \\rangle}{\\|\\mathbf{a}\\|^2}\\mathbf{a},\\; \\mathbf{a} \\rangle = \\langle \\mathbf{b}, \\mathbf{a} \\rangle - \\frac{\\langle \\mathbf{b}, \\mathbf{a} \\rangle}{\\|\\mathbf{a}\\|^2} \\|\\mathbf{a}\\|^2 = 0\\). \\(\\checkmark\\)</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-orthogonal-projection"></div>

<h3>Projection onto a Subspace</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.5.2 (Orthogonal Projection onto a Subspace)</div>
    <div class="env-body">
        <p>Let \\(W\\) be a subspace of an inner product space \\(V\\), and let \\(\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}\\) be an orthogonal basis for \\(W\\). Then the orthogonal projection of \\(\\mathbf{b}\\) onto \\(W\\) is</p>
        \\[
        \\operatorname{proj}_W \\mathbf{b} = \\sum_{j=1}^k \\frac{\\langle \\mathbf{b}, \\mathbf{u}_j \\rangle}{\\|\\mathbf{u}_j\\|^2} \\mathbf{u}_j.
        \\]
        <p>The vector \\(\\hat{\\mathbf{b}} = \\operatorname{proj}_W \\mathbf{b}\\) is the unique vector in \\(W\\) satisfying \\(\\mathbf{b} - \\hat{\\mathbf{b}} \\in W^\\perp\\).</p>
    </div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 13.5.3 (Best Approximation)</div>
    <div class="env-body">
        <p>Let \\(W\\) be a finite-dimensional subspace of an inner product space \\(V\\), and let \\(\\mathbf{b} \\in V\\). Then \\(\\hat{\\mathbf{b}} = \\operatorname{proj}_W \\mathbf{b}\\) is the <strong>closest point in \\(W\\) to \\(\\mathbf{b}\\)</strong>:</p>
        \\[
        \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\| \\le \\|\\mathbf{b} - \\mathbf{w}\\| \\quad \\text{for all } \\mathbf{w} \\in W,
        \\]
        <p>with equality if and only if \\(\\mathbf{w} = \\hat{\\mathbf{b}}\\).</p>
    </div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body">
        <p>For any \\(\\mathbf{w} \\in W\\), write \\(\\mathbf{b} - \\mathbf{w} = (\\mathbf{b} - \\hat{\\mathbf{b}}) + (\\hat{\\mathbf{b}} - \\mathbf{w})\\). Now \\(\\mathbf{b} - \\hat{\\mathbf{b}} \\in W^\\perp\\) and \\(\\hat{\\mathbf{b}} - \\mathbf{w} \\in W\\), so they are orthogonal. By the Pythagorean theorem:</p>
        \\[
        \\|\\mathbf{b} - \\mathbf{w}\\|^2 = \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|^2 + \\|\\hat{\\mathbf{b}} - \\mathbf{w}\\|^2 \\ge \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|^2.
        \\]
        <p>Equality holds iff \\(\\|\\hat{\\mathbf{b}} - \\mathbf{w}\\| = 0\\), i.e., \\(\\mathbf{w} = \\hat{\\mathbf{b}}\\).</p>
        <div class="qed">&#8718;</div>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.5.4</div>
    <div class="env-body">
        <p>Project \\(\\mathbf{b} = (1, 2, 3)\\) onto \\(W = \\operatorname{span}\\{(1, 0, 1), (0, 1, 0)\\}\\). The basis is already orthogonal (check: \\((1,0,1) \\cdot (0,1,0) = 0\\)).</p>
        \\[
        \\operatorname{proj}_W \\mathbf{b} = \\frac{(1)(1) + (2)(0) + (3)(1)}{1 + 0 + 1}(1,0,1) + \\frac{(1)(0) + (2)(1) + (3)(0)}{0+1+0}(0,1,0)
        \\]
        \\[
        = \\frac{4}{2}(1,0,1) + 2(0,1,0) = (2, 0, 2) + (0, 2, 0) = (2, 2, 2).
        \\]
        <p>The error is \\(\\mathbf{e} = (1,2,3) - (2,2,2) = (-1, 0, 1)\\). Check: \\((-1,0,1) \\cdot (1,0,1) = 0\\) and \\((-1,0,1) \\cdot (0,1,0) = 0\\). The error is indeed in \\(W^\\perp\\).</p>
    </div>
</div>

<h3>The Projection Matrix</h3>

<div class="env-block proposition">
    <div class="env-title">Proposition 13.5.5 (Projection Matrix)</div>
    <div class="env-body">
        <p>If the columns of \\(A\\) form a basis for \\(W\\), then the projection matrix onto \\(W\\) is</p>
        \\[
        P = A(A^T A)^{-1} A^T.
        \\]
        <p>This matrix satisfies \\(P^2 = P\\) (idempotent) and \\(P^T = P\\) (symmetric).</p>
    </div>
</div>

<div class="env-block example">
    <div class="env-title">Example 13.5.6</div>
    <div class="env-body">
        <p>For projection onto \\(W = \\operatorname{span}\\{\\mathbf{a}\\}\\) (a one-dimensional subspace):</p>
        \\[
        P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T \\mathbf{a}}.
        \\]
        <p>For \\(\\mathbf{a} = (1, 2)^T\\): \\(P = \\frac{1}{5}\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}\\). Note \\(P^2 = P\\), \\(P^T = P\\), and \\(\\operatorname{rank}(P) = 1\\).</p>
    </div>
</div>

<div class="env-block remark">
    <div class="env-title">Looking Ahead</div>
    <div class="env-body">
        <p>The projection formula leads directly to the Gram-Schmidt process (Chapter 14), least squares approximation (Chapter 15), and the spectral theorem (Chapter 16). Any vector \\(\\mathbf{b}\\) decomposes as \\(\\mathbf{b} = \\operatorname{proj}_W \\mathbf{b} + (\\mathbf{b} - \\operatorname{proj}_W \\mathbf{b})\\), with the first component in \\(W\\) and the second in \\(W^\\perp\\). This orthogonal decomposition is the foundation of modern data analysis, signal processing, and quantum mechanics.</p>
    </div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-orthogonal-projection',
                    title: 'Orthogonal Projection onto a Line',
                    description: 'Drag the blue vector \\(\\mathbf{b}\\) and the green direction vector \\(\\mathbf{a}\\). The orange vector shows the projection \\(\\operatorname{proj}_{\\mathbf{a}} \\mathbf{b}\\), and the dashed line shows the error \\(\\mathbf{e} = \\mathbf{b} - \\hat{\\mathbf{b}}\\), which is always perpendicular to \\(\\mathbf{a}\\).',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 50 });

                        const dragB = viz.addDraggable('b', 2, 3, viz.colors.blue, 8);
                        const dragA = viz.addDraggable('a', 3, 1, viz.colors.green, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const bx = dragB.x, by = dragB.y;
                            const ax = dragA.x, ay = dragA.y;

                            // Draw span line
                            viz.drawLine(0, 0, ax, ay, viz.colors.green + '44', 1, true);

                            // Compute projection
                            const dotBA = bx * ax + by * ay;
                            const dotAA = ax * ax + ay * ay;
                            let projX = 0, projY = 0;
                            if (dotAA > 0.0001) {
                                const t = dotBA / dotAA;
                                projX = t * ax;
                                projY = t * ay;
                            }

                            // Draw right angle marker
                            const errX = bx - projX, errY = by - projY;
                            const errLen = Math.sqrt(errX * errX + errY * errY);
                            if (errLen > 0.1 && dotAA > 0.01) {
                                const aLen = Math.sqrt(dotAA);
                                const size = 0.2;
                                const unx = ax / aLen, uny = ay / aLen;
                                const enx = errX / errLen, eny = errY / errLen;
                                const ctx = viz.ctx;
                                ctx.strokeStyle = viz.colors.muted;
                                ctx.lineWidth = 1;
                                const [p1x, p1y] = viz.toScreen(projX + size * enx, projY + size * eny);
                                const [p2x, p2y] = viz.toScreen(projX + size * enx + size * unx, projY + size * eny + size * uny);
                                const [p3x, p3y] = viz.toScreen(projX + size * unx, projY + size * uny);
                                ctx.beginPath();
                                ctx.moveTo(p1x, p1y);
                                ctx.lineTo(p2x, p2y);
                                ctx.lineTo(p3x, p3y);
                                ctx.stroke();
                            }

                            // Draw error vector (dashed)
                            viz.drawSegment(projX, projY, bx, by, viz.colors.red, 1.5, true);

                            // Draw vectors
                            viz.drawVec(ax, ay, viz.colors.green, 'a', 2);
                            viz.drawVec(bx, by, viz.colors.blue, 'b', 2.5);
                            viz.drawVec(projX, projY, viz.colors.orange, 'proj', 2.5);

                            // Info
                            const scalarProj = dotAA > 0.01 ? dotBA / Math.sqrt(dotAA) : 0;
                            const errNorm = Math.sqrt(errX * errX + errY * errY);
                            viz.screenText('proj_a b = (' + projX.toFixed(2) + ', ' + projY.toFixed(2) + ')', 12, 20, viz.colors.orange, 13, 'left');
                            viz.screenText('error e = (' + errX.toFixed(2) + ', ' + errY.toFixed(2) + '),  ||e|| = ' + errNorm.toFixed(2), 12, 40, viz.colors.red, 12, 'left');
                            viz.screenText('a \u00B7 e = ' + (ax * errX + ay * errY).toFixed(4) + ' \u2248 0  (perpendicular)', 12, 58, viz.colors.text, 11, 'left');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find \\(\\operatorname{proj}_{\\mathbf{a}} \\mathbf{b}\\) for \\(\\mathbf{a} = (1, 3)\\) and \\(\\mathbf{b} = (4, 1)\\).',
                    hint: 'Use the formula \\(\\operatorname{proj}_{\\mathbf{a}} \\mathbf{b} = \\frac{\\mathbf{b} \\cdot \\mathbf{a}}{\\mathbf{a} \\cdot \\mathbf{a}} \\mathbf{a}\\).',
                    solution: '\\(\\mathbf{b} \\cdot \\mathbf{a} = 4 + 3 = 7\\). \\(\\mathbf{a} \\cdot \\mathbf{a} = 1 + 9 = 10\\). \\(\\operatorname{proj}_{\\mathbf{a}} \\mathbf{b} = \\frac{7}{10}(1, 3) = (0.7, 2.1)\\).'
                },
                {
                    question: 'Project \\(\\mathbf{b} = (1, 1, 1, 1)\\) onto \\(W = \\operatorname{span}\\{(1, 0, 1, 0), (0, 1, 0, 1)\\}\\). The given basis is already orthogonal.',
                    hint: 'Project onto each basis vector separately and sum.',
                    solution: '\\(\\operatorname{proj}_{\\mathbf{u}_1} \\mathbf{b} = \\frac{1+0+1+0}{1+0+1+0}(1,0,1,0) = (1,0,1,0)\\). \\(\\operatorname{proj}_{\\mathbf{u}_2} \\mathbf{b} = \\frac{0+1+0+1}{0+1+0+1}(0,1,0,1) = (0,1,0,1)\\). \\(\\operatorname{proj}_W \\mathbf{b} = (1,0,1,0) + (0,1,0,1) = (1,1,1,1) = \\mathbf{b}\\). So \\(\\mathbf{b} \\in W\\)!'
                },
                {
                    question: 'Show that the projection matrix \\(P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}\\) is idempotent: \\(P^2 = P\\).',
                    hint: 'Compute \\(P^2\\) directly, noting that \\(\\mathbf{a}^T \\mathbf{a}\\) is a scalar.',
                    solution: '\\(P^2 = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} \\cdot \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} = \\frac{\\mathbf{a}(\\mathbf{a}^T\\mathbf{a})\\mathbf{a}^T}{(\\mathbf{a}^T\\mathbf{a})^2} = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} = P\\). The key step uses \\(\\mathbf{a}^T \\mathbf{a}\\) being a scalar that passes through.'
                },
                {
                    question: 'Find the distance from \\(\\mathbf{b} = (1, 2, 3)\\) to the plane \\(W = \\operatorname{span}\\{(1, 0, 0), (0, 1, 0)\\}\\) (the \\(xy\\)-plane).',
                    hint: 'Project onto \\(W\\), then compute the norm of the error.',
                    solution: '\\(\\operatorname{proj}_W \\mathbf{b} = (1, 2, 0)\\) (just drop the \\(z\\)-component since the basis is standard). Error: \\(\\mathbf{e} = (0, 0, 3)\\). Distance: \\(\\|\\mathbf{e}\\| = 3\\). As expected, the distance from \\((1,2,3)\\) to the \\(xy\\)-plane is the absolute value of its \\(z\\)-coordinate.'
                },
                {
                    question: 'Prove that \\(I - P\\) is also a projection matrix (projecting onto \\(W^\\perp\\)). What are its properties?',
                    hint: 'Show \\((I - P)^2 = I - P\\) and \\((I - P)^T = I - P\\). What is \\((I - P)\\mathbf{b}\\)?',
                    solution: '\\((I-P)^2 = I - 2P + P^2 = I - 2P + P = I - P\\). \\((I-P)^T = I - P^T = I - P\\). So \\(I - P\\) is symmetric and idempotent, hence a projection. For any \\(\\mathbf{b}\\): \\((I-P)\\mathbf{b} = \\mathbf{b} - P\\mathbf{b} = \\mathbf{b} - \\operatorname{proj}_W \\mathbf{b} = \\mathbf{e}\\), the component orthogonal to \\(W\\). Thus \\(I - P\\) projects onto \\(W^\\perp\\).'
                },
                {
                    question: 'Let \\(f(x) = x\\) and \\(g(x) = 1\\) on \\(C[-1, 1]\\) with \\(\\langle f, g \\rangle = \\int_{-1}^1 fg\\,dx\\). Compute \\(\\operatorname{proj}_g f\\).',
                    hint: 'Use the projection formula. Note that \\(\\int_{-1}^1 x\\,dx = 0\\).',
                    solution: '\\(\\langle f, g \\rangle = \\int_{-1}^1 x \\cdot 1\\,dx = 0\\). So \\(\\operatorname{proj}_g f = \\frac{0}{\\|g\\|^2} g = 0\\). The function \\(f(x) = x\\) is orthogonal to the constant function \\(g(x) = 1\\) on \\([-1, 1]\\). This is because \\(x\\) is odd and 1 is even; their product is odd, and the integral of an odd function over a symmetric interval is zero.'
                }
            ]
        }
    ]
});
