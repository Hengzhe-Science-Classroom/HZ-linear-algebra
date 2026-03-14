// ================================================================
// Chapter 4 — Basis & Dimension
// Creative theme: "The DNA of a Vector Space"
//   Every vector space has a minimal set of building blocks — a basis.
//   Once you know the basis, you know everything: every vector can be
//   uniquely decomposed, and the number of basis vectors (dimension)
//   is an intrinsic invariant.  We then connect dimension to rank
//   and unlock the Rank-Nullity Theorem.
// ================================================================
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: 'Basis & Dimension',
    subtitle: 'Minimal spanning sets and the intrinsic size of a vector space',
    sections: [
        // ============================================================
        //  SECTION 1 — Basis of a Vector Space
        // ============================================================
        {
            id: 'ch04-sec01',
            title: 'Basis of a Vector Space',
            content: `
                <h2>Basis of a Vector Space</h2>

                <div class="env-block motivation">
                    <div class="env-title">Why Bases Matter</div>
                    <div class="env-body">
                        <p>In Chapter 3, we studied spanning sets and linearly independent sets.  A spanning set can express every vector, but may contain redundant vectors.  A linearly independent set has no redundancy, but may fail to reach every vector.  A <strong>basis</strong> is the sweet spot: it spans the whole space with no redundancy whatsoever.  Once you have a basis, every vector has a unique address, and computations reduce to manipulating coordinates.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 — Basis</div>
                    <div class="env-body">
                        <p>Let \\(V\\) be a vector space over a field \\(F\\).  A set \\(\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}\\) is a <strong>basis</strong> for \\(V\\) if:</p>
                        <ol>
                            <li>\\(\\mathcal{B}\\) <strong>spans</strong> \\(V\\): every \\(\\mathbf{v} \\in V\\) can be written as a linear combination \\(\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n\\).</li>
                            <li>\\(\\mathcal{B}\\) is <strong>linearly independent</strong>: the only solution to \\(c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}\\) is \\(c_1 = \\cdots = c_n = 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.2 — Uniqueness of Representation</div>
                    <div class="env-body">
                        <p>If \\(\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}\\) is a basis for \\(V\\), then every \\(\\mathbf{v} \\in V\\) can be written <em>uniquely</em> as</p>
                        \\[
                            \\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n.
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Existence follows from the spanning property.  For uniqueness, suppose \\(\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = d_1\\mathbf{v}_1 + \\cdots + d_n\\mathbf{v}_n\\).  Subtracting gives</p>
                        \\[
                            (c_1 - d_1)\\mathbf{v}_1 + \\cdots + (c_n - d_n)\\mathbf{v}_n = \\mathbf{0}.
                        \\]
                        <p>Linear independence forces \\(c_i - d_i = 0\\) for all \\(i\\), so \\(c_i = d_i\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Standard Basis of \\(\\mathbb{R}^n\\)</div>
                    <div class="env-body">
                        <p>The <strong>standard basis</strong> of \\(\\mathbb{R}^n\\) is \\(\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}\\) where \\(\\mathbf{e}_i\\) has a 1 in position \\(i\\) and 0 elsewhere.  For \\(\\mathbb{R}^2\\):</p>
                        \\[
                            \\mathbf{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\quad
                            \\mathbf{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}.
                        \\]
                        <p>Any vector \\(\\begin{pmatrix} a \\\\ b \\end{pmatrix} = a\\mathbf{e}_1 + b\\mathbf{e}_2\\), and linear independence is immediate.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Non-Standard Basis of \\(\\mathbb{R}^2\\)</div>
                    <div class="env-body">
                        <p>The set \\(\\left\\{\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}\\right\\}\\) is also a basis for \\(\\mathbb{R}^2\\).  To verify:</p>
                        <ul>
                            <li><strong>Linear independence:</strong> \\(c_1\\begin{pmatrix}1\\\\1\\end{pmatrix} + c_2\\begin{pmatrix}1\\\\-1\\end{pmatrix} = \\mathbf{0}\\) gives \\(c_1+c_2=0\\) and \\(c_1-c_2=0\\), so \\(c_1=c_2=0\\).</li>
                            <li><strong>Spanning:</strong> For any \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\), set \\(c_1 = (a+b)/2\\), \\(c_2 = (a-b)/2\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Basis of \\(P_n(\\mathbb{R})\\)</div>
                    <div class="env-body">
                        <p>The space \\(P_n(\\mathbb{R})\\) of polynomials of degree \\(\\le n\\) has standard basis \\(\\{1, x, x^2, \\ldots, x^n\\}\\).  Any polynomial \\(a_0 + a_1 x + \\cdots + a_n x^n\\) is uniquely expressed in this basis.  But \\(\\{1, 1+x, 1+x+x^2, \\ldots\\}\\) works equally well.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 4.3 — Equivalent Characterizations of a Basis</div>
                    <div class="env-body">
                        <p>A set \\(\\mathcal{B} \\subseteq V\\) is a basis if and only if \\(\\mathcal{B}\\) is:</p>
                        <ul>
                            <li>a <em>maximal</em> linearly independent set (adding any vector destroys independence), or</li>
                            <li>a <em>minimal</em> spanning set (removing any vector destroys the span).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (minimal spanning set \\(\\Leftrightarrow\\) basis)</div>
                    <div class="env-body">
                        <p>(\\(\\Rightarrow\\)) Suppose \\(\\mathcal{B}\\) is a minimal spanning set.  If \\(\\mathcal{B}\\) were linearly dependent, some \\(\\mathbf{v}_k\\) would be a linear combination of the others, so \\(\\mathcal{B} \\setminus \\{\\mathbf{v}_k\\}\\) would still span \\(V\\), contradicting minimality.  Hence \\(\\mathcal{B}\\) is linearly independent.</p>
                        <p>(\\(\\Leftarrow\\)) If \\(\\mathcal{B}\\) is a basis and we remove some \\(\\mathbf{v}_k\\), then \\(\\mathbf{v}_k\\) cannot be expressed as a linear combination of the remaining vectors (by linear independence), so the span shrinks.  Hence \\(\\mathcal{B}\\) is a minimal spanning set.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Intuition</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{R}^2\\), a basis is a pair of non-collinear vectors.  They define a coordinate grid that tiles the entire plane.  The standard basis gives the usual square grid; a non-standard basis gives a parallelogram grid.  The interactive visualization below lets you drag basis vectors and watch the coordinate grid deform in real time.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch04-basis-grid"></div>
            `,
            visualizations: [
                {
                    id: 'ch04-basis-grid',
                    title: 'Basis Vectors and Coordinate Grid',
                    description: 'Drag the two basis vectors to see how the coordinate grid changes. Every point in the plane can be reached as a linear combination of these two vectors.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { scale: 40 });
                        var b1 = viz.addDraggable('b1', 1, 0, viz.colors.blue, 8);
                        var b2 = viz.addDraggable('b2', 0, 1, viz.colors.teal, 8);

                        VizEngine.createButton(controls, 'Reset to Standard', function() {
                            b1.x = 1; b1.y = 0; b2.x = 0; b2.y = 1;
                        });
                        VizEngine.createButton(controls, 'Skewed Basis', function() {
                            b1.x = 1; b1.y = 0.5; b2.x = -0.3; b2.y = 1;
                        });

                        function draw() {
                            viz.clear();
                            // Draw transformed grid
                            var M = [[b1.x, b2.x], [b1.y, b2.y]];
                            var det = VizEngine.det2(M);

                            if (Math.abs(det) > 0.01) {
                                viz.drawTransformedGrid(M, 8, viz.colors.grid + '88', 0.5);
                                // Draw parallelogram for unit cell
                                viz.drawParallelogram([b1.x, b1.y], [b2.x, b2.y], viz.colors.purple + '22', viz.colors.purple, 1);
                            }

                            viz.drawAxes();
                            viz.drawVec(b1.x, b1.y, viz.colors.blue, 'b\u2081', 2.5);
                            viz.drawVec(b2.x, b2.y, viz.colors.teal, 'b\u2082', 2.5);

                            // Show determinant
                            var ctx = viz.ctx;
                            ctx.fillStyle = Math.abs(det) < 0.01 ? viz.colors.red : viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('det = ' + det.toFixed(3), 10, 10);
                            if (Math.abs(det) < 0.01) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Vectors are (nearly) collinear \u2014 NOT a basis!', 10, 28);
                            } else {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('Valid basis (det \u2260 0)', 10, 28);
                            }

                            // Show coordinates of b1, b2
                            ctx.fillStyle = viz.colors.blue;
                            ctx.textAlign = 'right';
                            ctx.fillText('b\u2081 = (' + b1.x.toFixed(2) + ', ' + b1.y.toFixed(2) + ')', viz.width - 10, 10);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('b\u2082 = (' + b2.x.toFixed(2) + ', ' + b2.y.toFixed(2) + ')', viz.width - 10, 28);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether \\(\\left\\{\\begin{pmatrix}1\\\\2\\end{pmatrix}, \\begin{pmatrix}3\\\\6\\end{pmatrix}\\right\\}\\) is a basis for \\(\\mathbb{R}^2\\).  Justify your answer.',
                    hint: 'Check linear independence: is one vector a scalar multiple of the other?',
                    solution: 'Since \\(\\begin{pmatrix}3\\\\6\\end{pmatrix} = 3\\begin{pmatrix}1\\\\2\\end{pmatrix}\\), the two vectors are linearly dependent.  Hence this set is not a basis for \\(\\mathbb{R}^2\\).'
                },
                {
                    question: 'Find a basis for the subspace \\(W = \\{(x,y,z) \\in \\mathbb{R}^3 : x + y + z = 0\\}\\).',
                    hint: 'Express one variable in terms of the others: \\(z = -x - y\\).  Write the general element in terms of free parameters.',
                    solution: 'A general element is \\((x, y, -x-y) = x(1,0,-1) + y(0,1,-1)\\).  The vectors \\((1,0,-1)\\) and \\((0,1,-1)\\) are linearly independent (neither is a scalar multiple of the other), so they form a basis for \\(W\\).'
                },
                {
                    question: 'Prove that \\(\\{1, x-1, (x-1)^2\\}\\) is a basis for \\(P_2(\\mathbb{R})\\).',
                    hint: 'Show linear independence by expanding the relation \\(a + b(x-1) + c(x-1)^2 = 0\\) for all \\(x\\) and collecting powers of \\(x\\).',
                    solution: 'Expand: \\(a + b(x-1) + c(x^2 - 2x + 1) = cx^2 + (b-2c)x + (a - b + c) = 0\\) for all \\(x\\).  So \\(c = 0\\), \\(b - 2c = 0\\) gives \\(b = 0\\), and \\(a - b + c = 0\\) gives \\(a = 0\\).  Independence is verified.  Since \\(\\dim P_2 = 3\\) and we have 3 linearly independent vectors, they form a basis.'
                },
                {
                    question: 'Let \\(\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}\\) be a basis for \\(V\\).  Prove that any set of \\(n+1\\) vectors in \\(V\\) must be linearly dependent.',
                    hint: 'Express each of the \\(n+1\\) vectors as a linear combination of the \\(n\\) basis vectors.  This gives a homogeneous system of \\(n\\) equations in \\(n+1\\) unknowns.',
                    solution: 'Write \\(\\mathbf{w}_j = \\sum_{i=1}^n a_{ij} \\mathbf{v}_i\\) for \\(j = 1,\\ldots,n+1\\).  The relation \\(\\sum_j c_j \\mathbf{w}_j = \\mathbf{0}\\) becomes \\(\\sum_i \\left(\\sum_j a_{ij} c_j\\right) \\mathbf{v}_i = \\mathbf{0}\\).  By independence of \\(\\mathcal{B}\\), each coefficient vanishes: \\(\\sum_j a_{ij} c_j = 0\\) for \\(i = 1,\\ldots,n\\).  This is a homogeneous system of \\(n\\) equations in \\(n+1\\) unknowns, which always has a nontrivial solution.'
                },
                {
                    question: 'Show that the set of \\(2 \\times 2\\) symmetric matrices forms a subspace of \\(M_{2 \\times 2}(\\mathbb{R})\\), and find a basis.',
                    hint: 'A symmetric matrix satisfies \\(A = A^T\\).  Write \\(A = \\begin{pmatrix}a & b\\\\b & c\\end{pmatrix}\\) and express it using three simple matrices.',
                    solution: 'Closure under addition and scalar multiplication is straightforward.  A general symmetric matrix is \\(\\begin{pmatrix}a & b\\\\b & c\\end{pmatrix} = a\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix} + b\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix} + c\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\).  These three matrices are linearly independent, so they form a basis.  The dimension is 3.'
                }
            ]
        },

        // ============================================================
        //  SECTION 2 — Coordinates and Change of Basis
        // ============================================================
        {
            id: 'ch04-sec02',
            title: 'Coordinates and Change of Basis',
            content: `
                <h2>Coordinates and Change of Basis</h2>

                <p>A basis does more than decompose vectors; it provides a <em>coordinate system</em>.  Different bases give different coordinates for the same vector, and the transition between them is governed by an invertible matrix.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.4 — Coordinate Vector</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}\\) be an <em>ordered</em> basis for \\(V\\), and let \\(\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n\\).  The <strong>coordinate vector</strong> of \\(\\mathbf{v}\\) relative to \\(\\mathcal{B}\\) is</p>
                        \\[
                            [\\mathbf{v}]_{\\mathcal{B}} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix} \\in \\mathbb{R}^n.
                        \\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Coordinates in a Non-Standard Basis</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B} = \\left\\{\\begin{pmatrix}1\\\\1\\end{pmatrix}, \\begin{pmatrix}1\\\\-1\\end{pmatrix}\\right\\}\\) and \\(\\mathbf{v} = \\begin{pmatrix}3\\\\1\\end{pmatrix}\\).  We solve \\(c_1\\begin{pmatrix}1\\\\1\\end{pmatrix} + c_2\\begin{pmatrix}1\\\\-1\\end{pmatrix} = \\begin{pmatrix}3\\\\1\\end{pmatrix}\\):</p>
                        \\[
                            c_1 + c_2 = 3, \\quad c_1 - c_2 = 1 \\implies c_1 = 2, \\; c_2 = 1.
                        \\]
                        <p>So \\([\\mathbf{v}]_{\\mathcal{B}} = \\begin{pmatrix}2\\\\1\\end{pmatrix}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.5 — Change-of-Basis Matrix (Transition Matrix)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B} = \\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_n\\}\\) and \\(\\mathcal{C} = \\{\\mathbf{w}_1,\\ldots,\\mathbf{w}_n\\}\\) be two ordered bases for \\(V\\).  The <strong>change-of-basis matrix</strong> from \\(\\mathcal{B}\\) to \\(\\mathcal{C}\\) is the \\(n \\times n\\) matrix \\(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\) whose columns are the coordinate vectors of the \\(\\mathbf{v}_j\\) in the basis \\(\\mathcal{C}\\):</p>
                        \\[
                            P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\Big[ [\\mathbf{v}_1]_{\\mathcal{C}} \\;\\; [\\mathbf{v}_2]_{\\mathcal{C}} \\;\\; \\cdots \\;\\; [\\mathbf{v}_n]_{\\mathcal{C}} \\Big].
                        \\]
                        <p>It satisfies \\([\\mathbf{v}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_{\\mathcal{B}}\\) for every \\(\\mathbf{v} \\in V\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.6 — Properties of the Transition Matrix</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B}\\), \\(\\mathcal{C}\\), \\(\\mathcal{D}\\) be ordered bases for \\(V\\).  Then:</p>
                        <ol>
                            <li>\\(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\) is invertible, with \\(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}^{-1} = P_{\\mathcal{B} \\leftarrow \\mathcal{C}}\\).</li>
                            <li>\\(P_{\\mathcal{D} \\leftarrow \\mathcal{B}} = P_{\\mathcal{D} \\leftarrow \\mathcal{C}} \\, P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\) (chain rule).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) Apply the transition formula twice: \\([\\mathbf{v}]_{\\mathcal{B}} = P_{\\mathcal{B}\\leftarrow\\mathcal{C}} P_{\\mathcal{C}\\leftarrow\\mathcal{B}} [\\mathbf{v}]_{\\mathcal{B}}\\) for all \\(\\mathbf{v}\\), so the product is the identity.</p>
                        <p>(2) \\([\\mathbf{v}]_{\\mathcal{D}} = P_{\\mathcal{D}\\leftarrow\\mathcal{C}}[\\mathbf{v}]_{\\mathcal{C}} = P_{\\mathcal{D}\\leftarrow\\mathcal{C}} P_{\\mathcal{C}\\leftarrow\\mathcal{B}} [\\mathbf{v}]_{\\mathcal{B}}\\), which must equal \\(P_{\\mathcal{D}\\leftarrow\\mathcal{B}}[\\mathbf{v}]_{\\mathcal{B}}\\) for all \\(\\mathbf{v}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Computing the Transition Matrix</div>
                    <div class="env-body">
                        <p>When both bases are given explicitly in \\(\\mathbb{R}^n\\), a practical method is to form the augmented matrix \\([\\,\\mathcal{C} \\;|\\; \\mathcal{B}\\,]\\) (columns of \\(\\mathcal{C}\\) on the left, \\(\\mathcal{B}\\) on the right) and row-reduce.  When the left block becomes \\(I\\), the right block is \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">What Does a Change of Basis Look Like?</div>
                    <div class="env-body">
                        <p>Imagine standing on a grid and then tilting your head: the world looks different, but nothing has moved.  A change of basis changes the "grid lines" you use to describe points, not the points themselves.  In the visualization below, drag basis vectors to watch how the coordinates of a fixed point change.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch04-change-of-basis"></div>
            `,
            visualizations: [
                {
                    id: 'ch04-change-of-basis',
                    title: 'Change of Basis: Same Vector, Different Coordinates',
                    description: 'Drag the blue basis vectors to see how the coordinates of the fixed red point change. The dashed lines show the decomposition in the new basis.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { scale: 40 });
                        var b1 = viz.addDraggable('b1', 1, 0, viz.colors.blue, 8);
                        var b2 = viz.addDraggable('b2', 0, 1, viz.colors.teal, 8);
                        var pt = viz.addDraggable('pt', 3, 2, viz.colors.red, 8);

                        VizEngine.createButton(controls, 'Standard Basis', function() {
                            b1.x = 1; b1.y = 0; b2.x = 0; b2.y = 1;
                        });
                        VizEngine.createButton(controls, 'Rotated 45\u00B0', function() {
                            var a = Math.sqrt(2)/2;
                            b1.x = a; b1.y = a; b2.x = -a; b2.y = a;
                        });

                        function draw() {
                            viz.clear();
                            var M = [[b1.x, b2.x], [b1.y, b2.y]];
                            var det = VizEngine.det2(M);
                            var ctx = viz.ctx;

                            if (Math.abs(det) > 0.01) {
                                viz.drawTransformedGrid(M, 8, viz.colors.grid + '55', 0.5);

                                // Compute coordinates of pt in basis B
                                var invDet = 1.0 / det;
                                var c1 = invDet * (M[1][1] * pt.x - M[0][1] * pt.y);
                                var c2 = invDet * (-M[1][0] * pt.x + M[0][0] * pt.y);

                                // Draw decomposition lines (dashed)
                                var comp1x = c1 * b1.x;
                                var comp1y = c1 * b1.y;
                                var comp2x = c2 * b2.x;
                                var comp2y = c2 * b2.y;
                                viz.drawSegment(0, 0, comp1x, comp1y, viz.colors.blue + 'aa', 1.5, true);
                                viz.drawSegment(comp1x, comp1y, pt.x, pt.y, viz.colors.teal + 'aa', 1.5, true);

                                // Show coordinates
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText('Standard: (' + pt.x.toFixed(2) + ', ' + pt.y.toFixed(2) + ')', 10, 10);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('[v]_B = (' + c1.toFixed(2) + ', ' + c2.toFixed(2) + ')', 10, 30);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('Basis vectors are collinear \u2014 not a valid basis!', viz.width / 2, 20);
                            }

                            viz.drawAxes();
                            viz.drawVec(b1.x, b1.y, viz.colors.blue, 'b\u2081', 2.5);
                            viz.drawVec(b2.x, b2.y, viz.colors.teal, 'b\u2082', 2.5);
                            viz.drawPoint(pt.x, pt.y, viz.colors.red, 'v', 6);
                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\mathcal{B} = \\left\\{\\begin{pmatrix}2\\\\1\\end{pmatrix}, \\begin{pmatrix}1\\\\1\\end{pmatrix}\\right\\}\\).  Find \\([\\mathbf{v}]_{\\mathcal{B}}\\) for \\(\\mathbf{v} = \\begin{pmatrix}5\\\\3\\end{pmatrix}\\).',
                    hint: 'Solve \\(c_1\\begin{pmatrix}2\\\\1\\end{pmatrix} + c_2\\begin{pmatrix}1\\\\1\\end{pmatrix} = \\begin{pmatrix}5\\\\3\\end{pmatrix}\\).',
                    solution: 'The system \\(2c_1 + c_2 = 5\\), \\(c_1 + c_2 = 3\\) gives \\(c_1 = 2\\), \\(c_2 = 1\\).  So \\([\\mathbf{v}]_{\\mathcal{B}} = \\begin{pmatrix}2\\\\1\\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(\\mathcal{B} = \\{\\mathbf{e}_1, \\mathbf{e}_2\\}\\) (standard) and \\(\\mathcal{C} = \\left\\{\\begin{pmatrix}1\\\\1\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\end{pmatrix}\\right\\}\\).  Find \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\).',
                    hint: 'Express each standard basis vector in terms of \\(\\mathcal{C}\\).',
                    solution: '\\(\\mathbf{e}_1 = \\begin{pmatrix}1\\\\0\\end{pmatrix} = 1 \\cdot \\begin{pmatrix}1\\\\1\\end{pmatrix} + (-1)\\begin{pmatrix}0\\\\1\\end{pmatrix}\\), so \\([\\mathbf{e}_1]_{\\mathcal{C}} = \\begin{pmatrix}1\\\\-1\\end{pmatrix}\\).  Similarly \\(\\mathbf{e}_2 = 0 \\cdot \\begin{pmatrix}1\\\\1\\end{pmatrix} + 1 \\cdot \\begin{pmatrix}0\\\\1\\end{pmatrix}\\), so \\([\\mathbf{e}_2]_{\\mathcal{C}} = \\begin{pmatrix}0\\\\1\\end{pmatrix}\\).  Thus \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}} = \\begin{pmatrix}1 & 0\\\\-1 & 1\\end{pmatrix}\\).'
                },
                {
                    question: 'Verify that \\(P_{\\mathcal{B}\\leftarrow\\mathcal{C}} = P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}\\) for the bases in the previous exercise.',
                    hint: 'Compute \\(P_{\\mathcal{B}\\leftarrow\\mathcal{C}}\\) directly by expressing \\(\\mathcal{C}\\) vectors in \\(\\mathcal{B}\\) (standard) coordinates, then invert \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\).',
                    solution: '\\(P_{\\mathcal{B}\\leftarrow\\mathcal{C}} = \\begin{pmatrix}1 & 0\\\\1 & 1\\end{pmatrix}\\) (columns are the \\(\\mathcal{C}\\) vectors in standard coordinates).  Inverting \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}} = \\begin{pmatrix}1&0\\\\-1&1\\end{pmatrix}\\) gives \\(\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}\\).  They agree.'
                },
                {
                    question: 'Prove that the coordinate map \\(\\mathbf{v} \\mapsto [\\mathbf{v}]_{\\mathcal{B}}\\) is a linear isomorphism from \\(V\\) to \\(\\mathbb{R}^n\\).',
                    hint: 'Show linearity (\\([\\alpha\\mathbf{u} + \\beta\\mathbf{v}]_{\\mathcal{B}} = \\alpha[\\mathbf{u}]_{\\mathcal{B}} + \\beta[\\mathbf{v}]_{\\mathcal{B}}\\)) and bijectivity (use uniqueness of representation).',
                    solution: 'If \\(\\mathbf{u} = \\sum a_i \\mathbf{v}_i\\) and \\(\\mathbf{v} = \\sum b_i \\mathbf{v}_i\\), then \\(\\alpha\\mathbf{u}+\\beta\\mathbf{v} = \\sum(\\alpha a_i + \\beta b_i)\\mathbf{v}_i\\), so the map sends it to \\(\\alpha(a_i) + \\beta(b_i)\\).  Injectivity: if \\([\\mathbf{v}]_{\\mathcal{B}} = \\mathbf{0}\\), all coefficients are 0, so \\(\\mathbf{v} = \\mathbf{0}\\).  Surjectivity: given \\((c_1,\\ldots,c_n) \\in \\mathbb{R}^n\\), the vector \\(\\sum c_i \\mathbf{v}_i\\) maps to it.'
                },
                {
                    question: 'Let \\(\\mathcal{B}\\), \\(\\mathcal{C}\\), \\(\\mathcal{D}\\) be three bases for \\(\\mathbb{R}^2\\).  If \\(P_{\\mathcal{C}\\leftarrow\\mathcal{B}} = \\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\) and \\(P_{\\mathcal{D}\\leftarrow\\mathcal{C}} = \\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}\\), find \\(P_{\\mathcal{D}\\leftarrow\\mathcal{B}}\\).',
                    hint: 'Use the chain rule: \\(P_{\\mathcal{D}\\leftarrow\\mathcal{B}} = P_{\\mathcal{D}\\leftarrow\\mathcal{C}} P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\).',
                    solution: '\\(P_{\\mathcal{D}\\leftarrow\\mathcal{B}} = \\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix} = \\begin{pmatrix}2&-2\\\\2&4\\end{pmatrix}\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 3 — Dimension
        // ============================================================
        {
            id: 'ch04-sec03',
            title: 'Dimension',
            content: `
                <h2>Dimension</h2>

                <p>Intuitively, a line is "1-dimensional" and a plane is "2-dimensional."  The notion of basis makes this precise: the dimension of a space is the number of vectors in any basis.  But first, we must prove that all bases have the <em>same</em> number of elements.</p>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 4.7 — Steinitz Exchange Lemma</div>
                    <div class="env-body">
                        <p>Let \\(V\\) be a vector space spanned by a set of \\(n\\) vectors.  If \\(\\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_m\\}\\) is a linearly independent set in \\(V\\), then \\(m \\le n\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\(\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_n\\}\\) span \\(V\\).  Since \\(\\mathbf{w}_1 \\in V\\), we can write \\(\\mathbf{w}_1 = \\sum a_i \\mathbf{v}_i\\) with some \\(a_k \\neq 0\\).  Replace \\(\\mathbf{v}_k\\) by \\(\\mathbf{w}_1\\); the resulting set still spans \\(V\\).  Repeat: at each step, insert a \\(\\mathbf{w}_j\\) and remove a \\(\\mathbf{v}_i\\).  If \\(m > n\\), after \\(n\\) steps all \\(\\mathbf{v}_i\\) are gone and the \\(\\mathbf{w}_j\\) for \\(j > n\\) would be linear combinations of \\(\\mathbf{w}_1,\\ldots,\\mathbf{w}_n\\), contradicting independence.  Hence \\(m \\le n\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.8 — Invariance of Basis Size</div>
                    <div class="env-body">
                        <p>If \\(V\\) has a finite basis, then every basis of \\(V\\) has the same number of elements.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B}\\) and \\(\\mathcal{C}\\) be bases with \\(|\\mathcal{B}| = n\\) and \\(|\\mathcal{C}| = m\\).  Since \\(\\mathcal{B}\\) spans and \\(\\mathcal{C}\\) is independent, the Steinitz lemma gives \\(m \\le n\\).  Reversing roles, \\(n \\le m\\).  Hence \\(m = n\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.9 — Dimension</div>
                    <div class="env-body">
                        <p>The <strong>dimension</strong> of a finite-dimensional vector space \\(V\\), written \\(\\dim V\\), is the number of vectors in any (and hence every) basis of \\(V\\).  By convention, \\(\\dim\\{\\mathbf{0}\\} = 0\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Common Dimensions</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\dim \\mathbb{R}^n = n\\) (standard basis has \\(n\\) elements).</li>
                            <li>\\(\\dim P_n(\\mathbb{R}) = n+1\\) (basis \\(\\{1, x, \\ldots, x^n\\}\\)).</li>
                            <li>\\(\\dim M_{m \\times n}(\\mathbb{R}) = mn\\) (the \\(mn\\) matrix units \\(E_{ij}\\)).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.10 — Dimension of a Subspace</div>
                    <div class="env-body">
                        <p>If \\(W\\) is a subspace of a finite-dimensional space \\(V\\), then:</p>
                        <ol>
                            <li>\\(W\\) is finite-dimensional and \\(\\dim W \\le \\dim V\\).</li>
                            <li>\\(\\dim W = \\dim V\\) if and only if \\(W = V\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) Any linearly independent set in \\(W\\) is also linearly independent in \\(V\\), so its size is at most \\(\\dim V\\) by the Steinitz lemma.  Hence independent sets in \\(W\\) have bounded size, and a maximal one (which is a basis for \\(W\\)) exists with \\(\\dim W \\le \\dim V\\).</p>
                        <p>(2) If \\(\\dim W = \\dim V = n\\), let \\(\\{\\mathbf{w}_1,\\ldots,\\mathbf{w}_n\\}\\) be a basis for \\(W\\).  This is an independent set of \\(n\\) vectors in \\(V\\), so it is also a basis for \\(V\\) (since \\(n = \\dim V\\) independent vectors always span).  Hence \\(W = V\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.11</div>
                    <div class="env-body">
                        <p>In an \\(n\\)-dimensional space:</p>
                        <ul>
                            <li>Any linearly independent set of \\(n\\) vectors is automatically a basis.</li>
                            <li>Any spanning set of \\(n\\) vectors is automatically a basis.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The corollary requires knowing the dimension in advance.  A set of \\(n\\) linearly independent vectors that does <em>not</em> live in an \\(n\\)-dimensional space need not be a basis (it could live in a larger space).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'What is the dimension of the subspace \\(W = \\{(a, b, c, d) \\in \\mathbb{R}^4 : a = b + c,\\; d = 0\\}\\)?',
                    hint: 'Express the general element in terms of free parameters and count how many independent parameters you have.',
                    solution: 'A general element is \\((b+c, b, c, 0) = b(1,1,0,0) + c(1,0,1,0)\\).  These two vectors are independent, so \\(\\dim W = 2\\).'
                },
                {
                    question: 'Show that if \\(\\dim V = n\\), then any set of \\(n+1\\) vectors in \\(V\\) is linearly dependent.',
                    hint: 'Apply the Steinitz Exchange Lemma: a linearly independent set has at most \\(n\\) elements.',
                    solution: 'If \\(\\{\\mathbf{w}_1,\\ldots,\\mathbf{w}_{n+1}\\}\\) were linearly independent, the Steinitz lemma (with the \\(n\\)-element basis as the spanning set) would give \\(n+1 \\le n\\), a contradiction.'
                },
                {
                    question: 'Find the dimension of the solution space of \\(x_1 + 2x_2 - x_3 + x_4 = 0\\) in \\(\\mathbb{R}^4\\).',
                    hint: 'This is a single homogeneous equation in 4 unknowns.  How many free variables are there?',
                    solution: 'One equation, four unknowns, rank 1.  The solution space has dimension \\(4 - 1 = 3\\).  Explicitly: \\(x_1 = -2x_2 + x_3 - x_4\\), giving basis \\(\\{(-2,1,0,0), (1,0,1,0), (-1,0,0,1)\\}\\).'
                },
                {
                    question: 'Prove: if \\(W_1\\) and \\(W_2\\) are subspaces of \\(V\\) with \\(W_1 \\subseteq W_2\\) and \\(\\dim W_1 = \\dim W_2\\), then \\(W_1 = W_2\\).',
                    hint: 'A basis for \\(W_1\\) is an independent set in \\(W_2\\) of the right size.',
                    solution: 'Let \\(\\mathcal{B}\\) be a basis for \\(W_1\\).  Then \\(|\\mathcal{B}| = \\dim W_1 = \\dim W_2\\), and \\(\\mathcal{B} \\subseteq W_2\\) is linearly independent.  By Corollary 4.11, \\(\\mathcal{B}\\) is a basis for \\(W_2\\), so \\(W_1 = \\operatorname{span}\\mathcal{B} = W_2\\).'
                },
                {
                    question: 'Show that every subspace of \\(\\mathbb{R}^3\\) has dimension 0, 1, 2, or 3.  Describe each geometrically.',
                    hint: 'Use Theorem 4.10.  Dimension 0 is the origin, dimension 1 is a line through the origin, etc.',
                    solution: 'By Theorem 4.10, \\(\\dim W \\le 3\\).  Dimension 0: \\(W = \\{\\mathbf{0}\\}\\) (origin).  Dimension 1: \\(W = \\operatorname{span}\\{\\mathbf{v}\\}\\) (line through origin).  Dimension 2: \\(W = \\operatorname{span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}\\) (plane through origin).  Dimension 3: \\(W = \\mathbb{R}^3\\) (all of 3-space).'
                }
            ]
        },

        // ============================================================
        //  SECTION 4 — Rank of a Matrix
        // ============================================================
        {
            id: 'ch04-sec04',
            title: 'Rank of a Matrix',
            content: `
                <h2>Rank of a Matrix</h2>

                <p>The rank of a matrix captures how much "information" it carries.  Remarkably, you can compute rank by looking at rows or columns; you always get the same answer.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.12 — Row Rank and Column Rank</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be an \\(m \\times n\\) matrix.</p>
                        <ul>
                            <li>The <strong>column rank</strong> is \\(\\dim(\\text{column space of } A)\\), i.e., the dimension of the span of the columns of \\(A\\).</li>
                            <li>The <strong>row rank</strong> is \\(\\dim(\\text{row space of } A)\\), i.e., the dimension of the span of the rows of \\(A\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.13 — Row Rank Equals Column Rank</div>
                    <div class="env-body">
                        <p>For any matrix \\(A\\), the row rank equals the column rank.  This common value is called the <strong>rank</strong> of \\(A\\), written \\(\\operatorname{rank}(A)\\) or \\(\\operatorname{rk}(A)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(r\\) be the column rank and let \\(\\{\\mathbf{c}_1, \\ldots, \\mathbf{c}_r\\}\\) be a basis for the column space.  Write the \\(j\\)-th column as \\(\\mathbf{a}_j = \\sum_{k=1}^r b_{kj} \\mathbf{c}_k\\).  The \\(i\\)-th row of \\(A\\) is then</p>
                        \\[
                            (a_{i1}, a_{i2}, \\ldots, a_{in}) = \\sum_{k=1}^r (\\mathbf{c}_k)_i \\, (b_{k1}, b_{k2}, \\ldots, b_{kn}).
                        \\]
                        <p>So every row is a linear combination of the \\(r\\) vectors \\((b_{k1}, \\ldots, b_{kn})\\), which means row rank \\(\\le r =\\) column rank.  Applying the same argument to \\(A^T\\) gives column rank \\(\\le\\) row rank.  Equality follows.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 4.14 — Rank and Row Echelon Form</div>
                    <div class="env-body">
                        <p>\\(\\operatorname{rank}(A)\\) equals the number of pivots in any row echelon form of \\(A\\).  Equivalently, it is the number of nonzero rows after Gaussian elimination.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.15 — Rank-Nullity Theorem (Dimension Theorem)</div>
                    <div class="env-body">
                        <p>For any \\(m \\times n\\) matrix \\(A\\),</p>
                        \\[
                            \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n,
                        \\]
                        <p>where \\(\\operatorname{nullity}(A) = \\dim(\\operatorname{Null}(A))\\) is the dimension of the null space of \\(A\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Row reduce \\(A\\) to echelon form.  The number of pivot columns is \\(r = \\operatorname{rank}(A)\\), and the number of free variables is \\(n - r\\).  The free variables parametrize the null space, each contributing one basis vector.  Hence \\(\\operatorname{nullity}(A) = n - r\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Rank-Nullity Theorem in Pictures</div>
                    <div class="env-body">
                        <p>Think of the matrix \\(A\\) as a function from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\).  The domain (\\(\\mathbb{R}^n\\)) splits into two complementary pieces: the null space (what gets "crushed" to zero) and a complement (which maps bijectively onto the column space).  Rank-Nullity says these two pieces account for all \\(n\\) dimensions.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Computing Rank and Nullity</div>
                    <div class="env-body">
                        <p>Let \\(A = \\begin{pmatrix}1 & 2 & 1 & 0\\\\2 & 4 & 3 & 1\\\\3 & 6 & 4 & 1\\end{pmatrix}\\).  Row reduce:</p>
                        \\[
                            A \\to \\begin{pmatrix}1 & 2 & 1 & 0\\\\0 & 0 & 1 & 1\\\\0 & 0 & 0 & 0\\end{pmatrix}.
                        \\]
                        <p>Pivots in columns 1 and 3: \\(\\operatorname{rank}(A) = 2\\).  Free variables \\(x_2, x_4\\): \\(\\operatorname{nullity}(A) = 2\\).  Check: \\(2 + 2 = 4 = n\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch04-rank-viz"></div>
            `,
            visualizations: [
                {
                    id: 'ch04-rank-viz',
                    title: 'Rank Visualizer',
                    description: 'Enter a matrix and see its rank, pivot columns, null space dimension, and row echelon form.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;

                        // Current matrix (3x4 default)
                        var mat = [[1,2,1,0],[2,4,3,1],[3,6,4,1]];
                        var rows = 3, cols = 4;

                        // Create input area
                        var inputDiv = document.createElement('div');
                        inputDiv.style.cssText = 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px;';
                        var mLabel = document.createElement('span');
                        mLabel.style.cssText = 'color:#c9d1d9;font-size:0.82rem;';
                        mLabel.textContent = 'Matrix (rows separated by ";", entries by ","):';
                        var mInput = document.createElement('input');
                        mInput.type = 'text';
                        mInput.value = '1,2,1,0; 2,4,3,1; 3,6,4,1';
                        mInput.style.cssText = 'padding:4px 8px;border:1px solid #30363d;border-radius:4px;background:#161b22;color:#c9d1d9;font-size:0.82rem;width:300px;font-family:monospace;';
                        inputDiv.appendChild(mLabel);
                        inputDiv.appendChild(mInput);
                        body.parentNode.insertBefore(inputDiv, body);

                        function parseMatrix(str) {
                            try {
                                var rowStrs = str.split(';');
                                var m = [];
                                for (var i = 0; i < rowStrs.length; i++) {
                                    var entries = rowStrs[i].trim().split(',').map(function(s) { return parseFloat(s.trim()); });
                                    if (entries.some(isNaN)) return null;
                                    m.push(entries);
                                }
                                if (m.length === 0) return null;
                                var nc = m[0].length;
                                for (var i = 1; i < m.length; i++) {
                                    if (m[i].length !== nc) return null;
                                }
                                return m;
                            } catch(e) { return null; }
                        }

                        function rref(matrix) {
                            // Deep copy
                            var m = matrix.map(function(r) { return r.slice(); });
                            var nr = m.length, nc = m[0].length;
                            var pivotCols = [];
                            var pr = 0;
                            for (var c = 0; c < nc && pr < nr; c++) {
                                // Find pivot
                                var maxRow = pr;
                                for (var r = pr + 1; r < nr; r++) {
                                    if (Math.abs(m[r][c]) > Math.abs(m[maxRow][c])) maxRow = r;
                                }
                                if (Math.abs(m[maxRow][c]) < 1e-10) continue;
                                // Swap
                                var tmp = m[pr]; m[pr] = m[maxRow]; m[maxRow] = tmp;
                                pivotCols.push(c);
                                // Scale
                                var s = m[pr][c];
                                for (var j = 0; j < nc; j++) m[pr][j] /= s;
                                // Eliminate
                                for (var r = 0; r < nr; r++) {
                                    if (r === pr) continue;
                                    var f = m[r][c];
                                    for (var j = 0; j < nc; j++) m[r][j] -= f * m[pr][j];
                                }
                                pr++;
                            }
                            return { rref: m, pivots: pivotCols, rank: pivotCols.length };
                        }

                        function draw() {
                            viz.clear();
                            var result = rref(mat);
                            var rank = result.rank;
                            var nullity = cols - rank;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Original Matrix A (' + rows + '\u00D7' + cols + ')', 20, 15);

                            // Draw original matrix
                            viz.drawMatrix(mat, 30, 42, viz.colors.white, 55, 28, 14);

                            // Draw arrow
                            var arrowX = 30 + cols * 55 + 40;
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '24px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('\u2192', arrowX, 42 + rows * 14);
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('row reduce', arrowX, 42 + rows * 14 + 20);

                            // Draw RREF
                            var rrefX = arrowX + 40;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('RREF', rrefX, 15);

                            // Color pivot columns
                            for (var i = 0; i < rows; i++) {
                                for (var j = 0; j < cols; j++) {
                                    var val = result.rref[i][j];
                                    var isPivotCol = result.pivots.indexOf(j) !== -1;
                                    var color = isPivotCol ? viz.colors.orange : viz.colors.white;
                                    var text = Math.abs(val) < 0.005 ? '0' : (Number.isInteger(val) ? val.toString() : val.toFixed(2));
                                    ctx.fillStyle = color;
                                    ctx.font = '14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(text, rrefX + j * 55 + 27, 42 + i * 28 + 14);
                                }
                            }

                            // Summary box
                            var sumY = 42 + rows * 28 + 30;
                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(20, sumY, 660, 120);
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(20, sumY, 660, 120);

                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('rank(A) = ' + rank, 40, sumY + 12);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('nullity(A) = ' + nullity, 40, sumY + 36);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('rank + nullity = ' + rank + ' + ' + nullity + ' = ' + (rank + nullity) + ' = n \u2713', 40, sumY + 60);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Pivot columns: ' + result.pivots.map(function(c){return c+1;}).join(', '), 40, sumY + 88);
                            var freeCols = [];
                            for (var j = 0; j < cols; j++) {
                                if (result.pivots.indexOf(j) === -1) freeCols.push(j + 1);
                            }
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('Free columns: ' + (freeCols.length > 0 ? freeCols.join(', ') : 'none'), 300, sumY + 88);

                            // Rank bar visualization
                            var barY = sumY + 120 + 20;
                            if (barY + 50 < viz.height) {
                                var barW = 500;
                                var barH = 20;
                                var barX = 100;
                                ctx.fillStyle = viz.colors.grid;
                                ctx.fillRect(barX, barY, barW, barH);
                                var rankW = (rank / cols) * barW;
                                ctx.fillStyle = viz.colors.orange + 'aa';
                                ctx.fillRect(barX, barY, rankW, barH);
                                ctx.fillStyle = viz.colors.blue + 'aa';
                                ctx.fillRect(barX + rankW, barY, barW - rankW, barH);

                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('rank = ' + rank, barX + rankW / 2, barY + barH + 4);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('nullity = ' + nullity, barX + rankW + (barW - rankW) / 2, barY + barH + 4);
                                ctx.fillStyle = viz.colors.white;
                                ctx.fillText('\u2190 n = ' + cols + ' \u2192', barX + barW / 2, barY - 16);
                            }
                        }

                        mInput.addEventListener('input', function() {
                            var parsed = parseMatrix(mInput.value);
                            if (parsed) {
                                mat = parsed;
                                rows = parsed.length;
                                cols = parsed[0].length;
                                mInput.style.borderColor = '#30363d';
                                draw();
                            } else {
                                mInput.style.borderColor = '#f85149';
                            }
                        });

                        VizEngine.createButton(controls, '3\u00D74 Example', function() {
                            mInput.value = '1,2,1,0; 2,4,3,1; 3,6,4,1';
                            mat = [[1,2,1,0],[2,4,3,1],[3,6,4,1]]; rows = 3; cols = 4; draw();
                        });
                        VizEngine.createButton(controls, 'Full Rank 3\u00D73', function() {
                            mInput.value = '1,0,0; 0,1,0; 0,0,1';
                            mat = [[1,0,0],[0,1,0],[0,0,1]]; rows = 3; cols = 3; draw();
                        });
                        VizEngine.createButton(controls, 'Rank 1', function() {
                            mInput.value = '1,2,3; 2,4,6; 3,6,9';
                            mat = [[1,2,3],[2,4,6],[3,6,9]]; rows = 3; cols = 3; draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the rank and nullity of \\(A = \\begin{pmatrix}1 & 3 & 5\\\\2 & 6 & 10\\end{pmatrix}\\).',
                    hint: 'Row reduce.  Notice that the second row is twice the first.',
                    solution: 'Row reduce: \\(R_2 - 2R_1 \\to \\begin{pmatrix}1&3&5\\\\0&0&0\\end{pmatrix}\\).  One pivot, so \\(\\operatorname{rank} = 1\\), \\(\\operatorname{nullity} = 3 - 1 = 2\\).'
                },
                {
                    question: 'If \\(A\\) is a \\(5 \\times 7\\) matrix with \\(\\operatorname{rank}(A) = 3\\), what is \\(\\operatorname{nullity}(A)\\)?  What is \\(\\dim(\\text{column space})\\)?',
                    hint: 'Use the Rank-Nullity Theorem with \\(n = 7\\).  Column rank equals rank.',
                    solution: '\\(\\operatorname{nullity} = 7 - 3 = 4\\).  \\(\\dim(\\text{column space}) = \\operatorname{rank} = 3\\).'
                },
                {
                    question: 'Prove that \\(\\operatorname{rank}(A) = \\operatorname{rank}(A^T)\\).',
                    hint: 'Row rank of \\(A\\) = column rank of \\(A^T\\).',
                    solution: '\\(\\operatorname{rank}(A) = \\text{row rank of } A = \\text{column rank of } A^T = \\operatorname{rank}(A^T)\\).  (Row rank = column rank was proved in Theorem 4.13.)'
                },
                {
                    question: 'Show that for any \\(m \\times n\\) matrix \\(A\\), \\(\\operatorname{rank}(A) \\le \\min(m, n)\\).',
                    hint: 'The column space is a subspace of \\(\\mathbb{R}^m\\), the row space is a subspace of \\(\\mathbb{R}^n\\).',
                    solution: '\\(\\operatorname{rank}(A) = \\dim(\\text{col space}) \\le m\\) (since the column space lies in \\(\\mathbb{R}^m\\)).  Also \\(\\operatorname{rank}(A) = \\dim(\\text{row space}) \\le n\\).  Hence \\(\\operatorname{rank}(A) \\le \\min(m,n)\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(m \\times n\\) and \\(B\\) be \\(n \\times p\\).  Prove that \\(\\operatorname{rank}(AB) \\le \\min(\\operatorname{rank}(A), \\operatorname{rank}(B))\\).',
                    hint: 'For \\(\\operatorname{rank}(AB) \\le \\operatorname{rank}(A)\\): every column of \\(AB\\) is a linear combination of columns of \\(A\\).  For \\(\\operatorname{rank}(AB) \\le \\operatorname{rank}(B)\\): use \\(\\operatorname{Null}(B) \\subseteq \\operatorname{Null}(AB)\\).',
                    solution: 'Each column of \\(AB\\) is \\(A(B\\mathbf{e}_j)\\), a linear combination of columns of \\(A\\).  So \\(\\text{col}(AB) \\subseteq \\text{col}(A)\\), giving \\(\\operatorname{rank}(AB) \\le \\operatorname{rank}(A)\\).  Next, \\(\\operatorname{Null}(B) \\subseteq \\operatorname{Null}(AB)\\), so \\(\\operatorname{nullity}(B) \\le \\operatorname{nullity}(AB)\\).  By Rank-Nullity, \\(p - \\operatorname{rank}(B) \\le p - \\operatorname{rank}(AB)\\), hence \\(\\operatorname{rank}(AB) \\le \\operatorname{rank}(B)\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 5 — Applications of Rank
        // ============================================================
        {
            id: 'ch04-sec05',
            title: 'Applications of Rank',
            content: `
                <h2>Applications of Rank</h2>

                <p>The rank of a matrix connects to almost every question you can ask about a linear system.  In this section, we collect the most important consequences.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.16 — Solvability of \\(A\\mathbf{x} = \\mathbf{b}\\)</div>
                    <div class="env-body">
                        <p>The system \\(A\\mathbf{x} = \\mathbf{b}\\) is consistent if and only if \\(\\operatorname{rank}(A) = \\operatorname{rank}([A \\,|\\, \\mathbf{b}])\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(A\\mathbf{x} = \\mathbf{b}\\) is consistent iff \\(\\mathbf{b} \\in \\text{col}(A)\\).  Adding \\(\\mathbf{b}\\) as a new column changes the column space iff \\(\\mathbf{b} \\notin \\text{col}(A)\\), i.e., iff it increases the rank.  So consistency is equivalent to the rank staying the same.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.17 — Counting Solutions</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be \\(m \\times n\\) with \\(\\operatorname{rank}(A) = r\\), and suppose \\(A\\mathbf{x} = \\mathbf{b}\\) is consistent.  Then:</p>
                        <ul>
                            <li>If \\(r = n\\) (full column rank): the solution is <strong>unique</strong>.</li>
                            <li>If \\(r < n\\): there are <strong>infinitely many</strong> solutions, parametrized by \\(n - r\\) free variables.</li>
                        </ul>
                        <p>The general solution has the form \\(\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h\\) where \\(\\mathbf{x}_p\\) is a particular solution and \\(\\mathbf{x}_h \\in \\operatorname{Null}(A)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.18 — The Invertible Matrix Theorem (Rank Version)</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be an \\(n \\times n\\) matrix.  The following are equivalent:</p>
                        <ol>
                            <li>\\(A\\) is invertible.</li>
                            <li>\\(\\operatorname{rank}(A) = n\\).</li>
                            <li>\\(\\operatorname{Null}(A) = \\{\\mathbf{0}\\}\\).</li>
                            <li>The columns of \\(A\\) form a basis for \\(\\mathbb{R}^n\\).</li>
                            <li>The rows of \\(A\\) form a basis for \\(\\mathbb{R}^n\\).</li>
                            <li>\\(A\\mathbf{x} = \\mathbf{b}\\) has a unique solution for every \\(\\mathbf{b} \\in \\mathbb{R}^n\\).</li>
                            <li>\\(\\det(A) \\neq 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (selected implications)</div>
                    <div class="env-body">
                        <p>(1)\\(\\Rightarrow\\)(2): If \\(A\\) is invertible, \\(A\\) row-reduces to \\(I\\), which has \\(n\\) pivots.</p>
                        <p>(2)\\(\\Rightarrow\\)(3): By Rank-Nullity, \\(\\operatorname{nullity} = n - n = 0\\).</p>
                        <p>(3)\\(\\Rightarrow\\)(4): The columns are linearly independent (null space is trivial) and there are \\(n\\) of them in \\(\\mathbb{R}^n\\), so they form a basis.</p>
                        <p>(4)\\(\\Rightarrow\\)(6): A basis spans \\(\\mathbb{R}^n\\), so \\(A\\mathbf{x} = \\mathbf{b}\\) is always consistent; independence gives uniqueness.</p>
                        <p>(6)\\(\\Rightarrow\\)(1): The map \\(\\mathbf{x} \\mapsto A\\mathbf{x}\\) is bijective, hence \\(A\\) is invertible.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Using Rank to Decide Invertibility</div>
                    <div class="env-body">
                        <p>Is \\(A = \\begin{pmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\5 & 6 & 0\\end{pmatrix}\\) invertible?  Row reduce:</p>
                        \\[
                            \\begin{pmatrix}1&2&3\\\\0&1&4\\\\5&6&0\\end{pmatrix} \\to \\begin{pmatrix}1&2&3\\\\0&1&4\\\\0&-4&-15\\end{pmatrix} \\to \\begin{pmatrix}1&2&3\\\\0&1&4\\\\0&0&1\\end{pmatrix}.
                        \\]
                        <p>Three pivots, \\(\\operatorname{rank} = 3 = n\\).  So \\(A\\) is invertible.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.19 — Dimension Formula for Sum of Subspaces</div>
                    <div class="env-body">
                        <p>If \\(W_1\\) and \\(W_2\\) are subspaces of a finite-dimensional vector space, then</p>
                        \\[
                            \\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2).
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\(\\{\\mathbf{u}_1,\\ldots,\\mathbf{u}_k\\}\\) be a basis for \\(W_1 \\cap W_2\\).  Extend to a basis \\(\\{\\mathbf{u}_1,\\ldots,\\mathbf{u}_k,\\mathbf{v}_1,\\ldots,\\mathbf{v}_p\\}\\) of \\(W_1\\) and to \\(\\{\\mathbf{u}_1,\\ldots,\\mathbf{u}_k,\\mathbf{w}_1,\\ldots,\\mathbf{w}_q\\}\\) of \\(W_2\\).  One shows that \\(\\{\\mathbf{u}_1,\\ldots,\\mathbf{u}_k,\\mathbf{v}_1,\\ldots,\\mathbf{v}_p,\\mathbf{w}_1,\\ldots,\\mathbf{w}_q\\}\\) is a basis for \\(W_1 + W_2\\).  The count gives \\(k + p + q = (k+p) + (k+q) - k\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Summary: What Rank Tells You</div>
                    <div class="env-body">
                        <table style="width:100%;border-collapse:collapse;margin:8px 0;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="text-align:left;padding:4px 8px;">Question</th>
                                <th style="text-align:left;padding:4px 8px;">Answer via Rank</th>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Is \\(A\\mathbf{x} = \\mathbf{b}\\) consistent?</td>
                                <td style="padding:4px 8px;">Iff \\(\\operatorname{rank}(A) = \\operatorname{rank}([A|\\mathbf{b}])\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Is the solution unique?</td>
                                <td style="padding:4px 8px;">Iff \\(\\operatorname{rank}(A) = n\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Is \\(A\\) invertible?</td>
                                <td style="padding:4px 8px;">Iff \\(\\operatorname{rank}(A) = n\\) (square \\(A\\))</td>
                            </tr>
                            <tr>
                                <td style="padding:4px 8px;">How many free variables?</td>
                                <td style="padding:4px 8px;">\\(n - \\operatorname{rank}(A)\\)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(A\\) be \\(3 \\times 3\\) with \\(\\operatorname{rank}(A) = 2\\).  Can \\(A\\mathbf{x} = \\mathbf{b}\\) be consistent for every \\(\\mathbf{b} \\in \\mathbb{R}^3\\)?  Explain.',
                    hint: 'For consistency for all \\(\\mathbf{b}\\), the column space must be all of \\(\\mathbb{R}^3\\).',
                    solution: 'No.  The column space has dimension 2, which is a proper subspace of \\(\\mathbb{R}^3\\).  There exist vectors \\(\\mathbf{b} \\notin \\text{col}(A)\\) for which the system is inconsistent.'
                },
                {
                    question: 'Show that if \\(A\\) is \\(m \\times n\\) with \\(m < n\\), then \\(A\\mathbf{x} = \\mathbf{0}\\) has infinitely many solutions.',
                    hint: 'By Rank-Nullity, \\(\\operatorname{nullity} = n - \\operatorname{rank} \\ge n - m > 0\\).',
                    solution: '\\(\\operatorname{rank}(A) \\le m < n\\), so \\(\\operatorname{nullity}(A) = n - \\operatorname{rank}(A) \\ge n - m \\ge 1\\).  The null space is a nontrivial subspace, hence it contains infinitely many vectors (any scalar multiple of a nonzero null vector).'
                },
                {
                    question: 'Let \\(A\\) be \\(n \\times n\\).  Prove that \\(A\\) is invertible if and only if the only solution to \\(A\\mathbf{x} = \\mathbf{0}\\) is \\(\\mathbf{x} = \\mathbf{0}\\).',
                    hint: 'Use the Invertible Matrix Theorem: \\(A\\) invertible \\(\\Leftrightarrow\\) \\(\\operatorname{Null}(A) = \\{\\mathbf{0}\\}\\).',
                    solution: '(\\(\\Rightarrow\\)) If \\(A\\) is invertible and \\(A\\mathbf{x} = \\mathbf{0}\\), multiply by \\(A^{-1}\\): \\(\\mathbf{x} = A^{-1}\\mathbf{0} = \\mathbf{0}\\).  (\\(\\Leftarrow\\)) If \\(\\operatorname{Null}(A) = \\{\\mathbf{0}\\}\\), then \\(\\operatorname{nullity} = 0\\), so \\(\\operatorname{rank} = n\\), and \\(A\\) is invertible by Theorem 4.18.'
                },
                {
                    question: 'Let \\(W_1 = \\operatorname{span}\\{(1,0,1), (0,1,1)\\}\\) and \\(W_2 = \\operatorname{span}\\{(1,1,0), (0,1,1)\\}\\) in \\(\\mathbb{R}^3\\).  Find \\(\\dim(W_1 \\cap W_2)\\) and \\(\\dim(W_1 + W_2)\\).',
                    hint: 'Stack all four vectors and row reduce to find the rank of \\(W_1 + W_2\\).  Then use the dimension formula.',
                    solution: 'Stack \\(\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\\\0&1&1\\end{pmatrix}\\) and row reduce to get rank 3.  So \\(\\dim(W_1+W_2) = 3\\), meaning \\(W_1+W_2 = \\mathbb{R}^3\\).  By the dimension formula: \\(3 = 2 + 2 - \\dim(W_1 \\cap W_2)\\), so \\(\\dim(W_1 \\cap W_2) = 1\\).'
                },
                {
                    question: 'Prove: \\(\\operatorname{rank}(A + B) \\le \\operatorname{rank}(A) + \\operatorname{rank}(B)\\).',
                    hint: 'Use the fact that \\(\\text{col}(A+B) \\subseteq \\text{col}(A) + \\text{col}(B)\\).',
                    solution: 'Every column of \\(A+B\\) is the sum of a column of \\(A\\) and a column of \\(B\\), so \\(\\text{col}(A+B) \\subseteq \\text{col}(A) + \\text{col}(B)\\).  Therefore \\(\\operatorname{rank}(A+B) = \\dim(\\text{col}(A+B)) \\le \\dim(\\text{col}(A) + \\text{col}(B)) \\le \\dim(\\text{col}(A)) + \\dim(\\text{col}(B)) = \\operatorname{rank}(A) + \\operatorname{rank}(B)\\).'
                }
            ]
        }
    ]
});
