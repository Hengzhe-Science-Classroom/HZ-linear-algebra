window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',
    number: 0,
    title: 'Systems of Linear Equations & Row Reduction',
    subtitle: 'The geometric and algebraic perspectives on solving Ax = b',
    sections: [
        // ===================== Section 1: Linear Equations and Their Geometry =====================
        {
            id: 'ch00-sec01',
            title: 'Linear Equations and Their Geometry',
            content: `<h2>Linear Equations and Their Geometry</h2>

                <div class="env-block intuition">
                    <div class="env-title">Why Start Here?</div>
                    <div class="env-body"><p>Linear algebra begins with the most concrete question: <em>how do we solve systems of linear equations?</em> This is a problem you have encountered since secondary school, but the systematic methods developed here scale to thousands of unknowns and form the computational backbone of modern science, engineering, and data analysis. Every subsequent topic in this course (vector spaces, linear transformations, eigenvalues) ultimately connects back to solving \\(A\\mathbf{x} = \\mathbf{b}\\).</p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Linear Equation)</div>
                    <div class="env-body"><p>A <strong>linear equation</strong> in the variables \\(x_1, x_2, \\ldots, x_n\\) is an equation of the form
                    \\[a_1 x_1 + a_2 x_2 + \\cdots + a_n x_n = b\\]
                    where \\(a_1, a_2, \\ldots, a_n\\) and \\(b\\) are real (or complex) constants. The constants \\(a_i\\) are called <strong>coefficients</strong>, and \\(b\\) is the <strong>constant term</strong> (or right-hand side).</p></div>
                </div>

                <p>The defining feature of a linear equation is that each variable appears to the first power and is not multiplied by any other variable. Expressions like \\(x_1 x_2\\), \\(x_1^2\\), \\(\\sin(x_1)\\), or \\(\\sqrt{x_2}\\) would make an equation <em>nonlinear</em>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (System of Linear Equations)</div>
                    <div class="env-body"><p>A <strong>system of linear equations</strong> (or <strong>linear system</strong>) is a collection of one or more linear equations involving the same variables:
                    \\[\\begin{aligned}
                    a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\
                    a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n &= b_2 \\\\
                    &\\;\\vdots \\\\
                    a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n &= b_m
                    \\end{aligned}\\]
                    A <strong>solution</strong> of the system is a list \\((s_1, s_2, \\ldots, s_n)\\) of numbers that makes each equation true when we substitute \\(x_i = s_i\\). The <strong>solution set</strong> is the set of all solutions.</p></div>
                </div>

                <h3>Geometry in Two Dimensions</h3>

                <p>A single linear equation in two unknowns, \\(a_1 x_1 + a_2 x_2 = b\\), describes a <strong>line</strong> in \\(\\mathbb{R}^2\\). A system of two such equations describes two lines, and solving the system means finding the intersection of those lines.</p>

                <p>Three geometric configurations arise:</p>
                <ol>
                    <li><strong>The lines intersect at exactly one point.</strong> The system has a <em>unique solution</em>. This happens when the lines have different slopes.</li>
                    <li><strong>The lines are parallel and distinct.</strong> The system has <em>no solution</em>; it is <strong>inconsistent</strong>.</li>
                    <li><strong>The lines coincide.</strong> The system has <em>infinitely many solutions</em>; every point on the line is a solution.</li>
                </ol>

                <div class="env-block example">
                    <div class="env-title">Example (Three Cases in 2D)</div>
                    <div class="env-body">
                    <p><strong>Case 1 (Unique solution):</strong>
                    \\[x_1 + x_2 = 3, \\quad x_1 - x_2 = 1\\]
                    Adding the equations gives \\(2x_1 = 4\\), so \\(x_1 = 2\\) and \\(x_2 = 1\\). The lines cross at \\((2, 1)\\).</p>
                    <p><strong>Case 2 (No solution):</strong>
                    \\[x_1 + x_2 = 3, \\quad x_1 + x_2 = 5\\]
                    These equations are contradictory; the lines are parallel.</p>
                    <p><strong>Case 3 (Infinitely many solutions):</strong>
                    \\[x_1 + x_2 = 3, \\quad 2x_1 + 2x_2 = 6\\]
                    The second equation is just twice the first. Every point \\((x_1, 3 - x_1)\\) is a solution.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="viz-2d-system"></div>

                <h3>Geometry in Three Dimensions</h3>

                <p>A single linear equation in three unknowns, \\(a_1 x_1 + a_2 x_2 + a_3 x_3 = b\\), describes a <strong>plane</strong> in \\(\\mathbb{R}^3\\). A system of three equations corresponds to three planes, and the solution set is their intersection.</p>

                <p>The possible configurations are richer than in 2D:</p>
                <ul>
                    <li>Three planes intersect at a single <strong>point</strong> (unique solution).</li>
                    <li>Three planes intersect along a <strong>line</strong> (one-parameter family of solutions).</li>
                    <li>Three planes coincide in a single <strong>plane</strong> (two-parameter family).</li>
                    <li>Two or more planes are parallel, or the three planes form a triangular "prism" with no common point (no solution).</li>
                </ul>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Fundamental Trichotomy)</div>
                    <div class="env-body"><p>A system of linear equations has either
                    <ol>
                        <li>no solution (the system is <strong>inconsistent</strong>), or</li>
                        <li>exactly one solution, or</li>
                        <li>infinitely many solutions.</li>
                    </ol>
                    There is no system with exactly two, three, or any other finite number of solutions greater than one.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>Suppose the system has two distinct solutions \\(\\mathbf{s}\\) and \\(\\mathbf{t}\\). For any scalar \\(\\alpha \\in \\mathbb{R}\\), define \\(\\mathbf{u} = \\alpha \\mathbf{s} + (1 - \\alpha) \\mathbf{t}\\). Substituting into any equation \\(a_1 x_1 + \\cdots + a_n x_n = b\\):</p>
                    <p>\\[a_1 u_1 + \\cdots + a_n u_n = \\alpha(a_1 s_1 + \\cdots + a_n s_n) + (1 - \\alpha)(a_1 t_1 + \\cdots + a_n t_n) = \\alpha b + (1 - \\alpha)b = b.\\]</p>
                    <p>So \\(\\mathbf{u}\\) is also a solution for every \\(\\alpha\\). Since \\(\\mathbf{s} \\neq \\mathbf{t}\\), different values of \\(\\alpha\\) produce different solutions, giving infinitely many.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>The proof above uses a key idea that will reappear throughout this course: solution sets of linear equations are closed under <em>affine combinations</em>. When \\(b = 0\\) (a <strong>homogeneous system</strong>), the solution set is closed under all linear combinations, making it a subspace. We will formalize this in Chapter 3.</p></div>
                </div>

                <h3>The Row Picture vs. the Column Picture</h3>

                <p>Consider the system
                \\[\\begin{aligned}2x_1 + x_2 &= 5 \\\\ x_1 + 3x_2 &= 7\\end{aligned}\\]</p>

                <p>The <strong>row picture</strong> interprets each equation as a geometric object (a line in 2D, a plane in 3D). The solution is the intersection of these objects.</p>

                <p>The <strong>column picture</strong> rewrites the system as a vector equation:
                \\[x_1 \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + x_2 \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}\\]
                This asks: can we express the right-hand side as a <em>linear combination</em> of the column vectors? The solution \\((x_1, x_2) = (\\frac{8}{5}, \\frac{9}{5})\\) gives the weights of that combination.</p>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body"><p>The column picture is more fundamental for linear algebra. It asks: "What vectors can I reach by combining the columns of \\(A\\)?" This leads directly to the concept of the <strong>column space</strong> of a matrix, a central object in Chapters 3-5.</p></div>
                </div>`,

            visualizations: [
                {
                    id: 'viz-2d-system',
                    title: 'Interactive 2D System of Equations',
                    description: 'Drag the endpoints to change the two lines. The intersection point (if it exists) is shown in orange. Observe what happens when the lines become parallel.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {scale: 40});

                        // Line 1: defined by two draggable parameters (slope and intercept)
                        // Line eq: a1*x + b1*y = c1
                        var a1 = 1, b1 = 1, c1 = 3;
                        var a2 = 1, b2 = -1, c2 = 1;

                        VizEngine.createSlider(controls, 'a\u2081', -3, 3, a1, 0.5, function(v) { a1 = v; draw(); });
                        VizEngine.createSlider(controls, 'b\u2081', -3, 3, b1, 0.5, function(v) { b1 = v; draw(); });
                        VizEngine.createSlider(controls, 'c\u2081', -5, 5, c1, 0.5, function(v) { c1 = v; draw(); });
                        VizEngine.createSlider(controls, 'a\u2082', -3, 3, a2, 0.5, function(v) { a2 = v; draw(); });
                        VizEngine.createSlider(controls, 'b\u2082', -3, 3, b2, 0.5, function(v) { b2 = v; draw(); });
                        VizEngine.createSlider(controls, 'c\u2082', -5, 5, c2, 0.5, function(v) { c2 = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw line 1: a1*x + b1*y = c1
                            if (Math.abs(b1) > 0.01) {
                                var f1 = function(x) { return (c1 - a1 * x) / b1; };
                                viz.drawFunction(f1, -8, 8, viz.colors.blue, 2.5);
                            } else if (Math.abs(a1) > 0.01) {
                                var xv = c1 / a1;
                                viz.drawSegment(xv, -8, xv, 8, viz.colors.blue, 2.5);
                            }

                            // Draw line 2: a2*x + b2*y = c2
                            if (Math.abs(b2) > 0.01) {
                                var f2 = function(x) { return (c2 - a2 * x) / b2; };
                                viz.drawFunction(f2, -8, 8, viz.colors.teal, 2.5);
                            } else if (Math.abs(a2) > 0.01) {
                                var xv2 = c2 / a2;
                                viz.drawSegment(xv2, -8, xv2, 8, viz.colors.teal, 2.5);
                            }

                            // Find intersection
                            var det = a1 * b2 - a2 * b1;
                            var ctx = viz.ctx;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';

                            if (Math.abs(det) > 0.001) {
                                var ix = (c1 * b2 - c2 * b1) / det;
                                var iy = (a1 * c2 - a2 * c1) / det;
                                viz.drawPoint(ix, iy, viz.colors.orange, '(' + ix.toFixed(2) + ', ' + iy.toFixed(2) + ')', 7);

                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('Unique solution', 12, 20);
                            } else {
                                // Check consistency
                                var cross_bc = b1 * c2 - b2 * c1;
                                if (Math.abs(cross_bc) < 0.001) {
                                    ctx.fillStyle = viz.colors.yellow;
                                    ctx.fillText('Infinitely many solutions (same line)', 12, 20);
                                } else {
                                    ctx.fillStyle = viz.colors.red;
                                    ctx.fillText('No solution (parallel lines)', 12, 20);
                                }
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText(a1 + 'x + ' + b1 + 'y = ' + c1, 12, viz.height - 36);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText(a2 + 'x + ' + b2 + 'y = ' + c2, 12, viz.height - 18);
                        }

                        draw();
                        return viz;
                    }
                }
            ],

            exercises: [
                {
                    question: 'Determine whether the following system is consistent, and if so find the solution: \\[2x_1 + 3x_2 = 7, \\quad 4x_1 + 6x_2 = 14.\\]',
                    hint: 'Multiply the first equation by 2 and compare with the second.',
                    solution: 'The second equation is exactly twice the first, so they represent the same line. The system is consistent with infinitely many solutions: \\(x_1 = \\frac{7 - 3t}{2},\\; x_2 = t\\) for any \\(t \\in \\mathbb{R}\\).'
                },
                {
                    question: 'Is the equation \\(x_1 x_2 + 3x_3 = 5\\) a linear equation? Why or why not?',
                    hint: 'What is the defining property of a linear equation?',
                    solution: 'No. The term \\(x_1 x_2\\) is a product of two variables, which violates the requirement that each variable appears to the first power and is not multiplied by another variable.'
                },
                {
                    question: 'Give a geometric argument for why a system of two linear equations in two unknowns cannot have exactly three solutions.',
                    hint: 'Use the Fundamental Trichotomy theorem, or think about what two lines in the plane can do.',
                    solution: 'Two distinct lines in \\(\\mathbb{R}^2\\) can intersect at most once (since a line is determined by two points, two lines sharing two points must be identical). So the only possibilities are: no intersection (parallel), one intersection (unique solution), or the lines coincide (infinitely many solutions). Exactly three is impossible.'
                },
                {
                    question: 'Write the system \\(x_1 - 2x_2 = 4,\\; 3x_1 + x_2 = 5\\) in the column picture form \\(x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 = \\mathbf{b}\\), and find the solution.',
                    hint: 'Identify the column vectors and solve the 2x2 system by elimination or Cramer\'s rule.',
                    solution: 'Column picture: \\(x_1 \\begin{pmatrix}1\\\\3\\end{pmatrix} + x_2 \\begin{pmatrix}-2\\\\1\\end{pmatrix} = \\begin{pmatrix}4\\\\5\\end{pmatrix}\\). From the first equation, \\(x_1 = 4 + 2x_2\\). Substituting into the second: \\(3(4 + 2x_2) + x_2 = 5\\), so \\(12 + 7x_2 = 5\\), giving \\(x_2 = -1\\) and \\(x_1 = 2\\). The solution is \\((2, -1)\\).'
                },
                {
                    question: 'Consider the system \\(ax_1 + x_2 = 1,\\; 4x_1 + ax_2 = 2\\). For which values of the parameter \\(a\\) does this system have (i) a unique solution, (ii) no solution, (iii) infinitely many solutions?',
                    hint: 'Compute the determinant of the coefficient matrix \\(\\begin{pmatrix}a & 1\\\\4 & a\\end{pmatrix}\\) and determine when it is zero.',
                    solution: 'The determinant is \\(a^2 - 4\\). (i) If \\(a^2 - 4 \\neq 0\\), i.e., \\(a \\neq \\pm 2\\), the system has a unique solution. (ii) If \\(a = 2\\): the system becomes \\(2x_1 + x_2 = 1\\) and \\(4x_1 + 2x_2 = 2\\), which are the same line; infinitely many solutions. (iii) If \\(a = -2\\): the system becomes \\(-2x_1 + x_2 = 1\\) and \\(4x_1 - 2x_2 = 2\\), i.e., \\(-2x_1 + x_2 = 1\\) and \\(-2x_1 + x_2 = -1\\), which is inconsistent; no solution.'
                }
            ]
        },

        // ===================== Section 2: Augmented Matrices and Elementary Row Operations =====================
        {
            id: 'ch00-sec02',
            title: 'Augmented Matrices and Elementary Row Operations',
            content: `<h2>Augmented Matrices and Elementary Row Operations</h2>

                <p>Writing out systems of equations with all the variables is tedious and error-prone, especially for large systems. The key insight is that the <em>essential information</em> in a linear system is carried by the coefficients and the constant terms, not by the variable symbols. This motivates the use of matrices.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Coefficient Matrix and Augmented Matrix)</div>
                    <div class="env-body"><p>Given a system of \\(m\\) equations in \\(n\\) unknowns, the <strong>coefficient matrix</strong> is the \\(m \\times n\\) matrix
                    \\[A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}\\]
                    The <strong>augmented matrix</strong> appends the constant terms as an extra column:
                    \\[\\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)\\]
                    The vertical bar separates the coefficient columns from the right-hand side column.</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>The system
                    \\[\\begin{aligned}x_1 - 2x_2 + x_3 &= 0 \\\\ 2x_2 - 8x_3 &= 8 \\\\ -4x_1 + 5x_2 + 9x_3 &= -9\\end{aligned}\\]
                    has augmented matrix
                    \\[\\left(\\begin{array}{rrr|r} 1 & -2 & 1 & 0 \\\\ 0 & 2 & -8 & 8 \\\\ -4 & 5 & 9 & -9 \\end{array}\\right)\\]</p></div>
                </div>

                <h3>Elementary Row Operations</h3>

                <p>To solve the system, we transform the augmented matrix into a simpler form while preserving the solution set. The permissible transformations are called <strong>elementary row operations</strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Elementary Row Operations)</div>
                    <div class="env-body"><p>There are three types of elementary row operations on a matrix:
                    <ol>
                        <li><strong>Row Swap (Interchange):</strong> Swap two rows. Notation: \\(R_i \\leftrightarrow R_j\\).</li>
                        <li><strong>Row Scaling:</strong> Multiply a row by a nonzero constant \\(c \\neq 0\\). Notation: \\(R_i \\leftarrow cR_i\\).</li>
                        <li><strong>Row Replacement (Row Addition):</strong> Add a multiple of one row to another. Notation: \\(R_i \\leftarrow R_i + cR_j\\).</li>
                    </ol></p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Row Operations Preserve Solution Sets)</div>
                    <div class="env-body"><p>If the augmented matrix of a linear system is transformed into a new augmented matrix by one or more elementary row operations, then the new system has the same solution set as the original system. That is, the two systems are <strong>row equivalent</strong>.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>It suffices to show that each elementary row operation is <em>reversible</em> (invertible), and that both the operation and its inverse preserve solutions.</p>
                    <p><strong>Row swap</strong> \\(R_i \\leftrightarrow R_j\\): This just reorders the equations; the system is unchanged. The inverse is the same swap.</p>
                    <p><strong>Row scaling</strong> \\(R_i \\leftarrow cR_i\\) with \\(c \\neq 0\\): If \\((s_1, \\ldots, s_n)\\) satisfies the original \\(i\\)-th equation \\(a_{i1}x_1 + \\cdots = b_i\\), then it also satisfies \\(ca_{i1}x_1 + \\cdots = cb_i\\). The inverse operation is \\(R_i \\leftarrow \\frac{1}{c}R_i\\).</p>
                    <p><strong>Row replacement</strong> \\(R_i \\leftarrow R_i + cR_j\\): If \\((s_1,\\ldots,s_n)\\) satisfies both the \\(i\\)-th and \\(j\\)-th equations, then it satisfies their sum \\((a_{i1}+ca_{j1})x_1 + \\cdots = b_i + cb_j\\). The inverse is \\(R_i \\leftarrow R_i - cR_j\\).</p>
                    <p>Since each operation is invertible and both directions preserve solutions, the solution sets are identical.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body"><p>Column operations do <strong>not</strong> preserve the solution set in general, because they change the relationship between variables. Only row operations are allowed when solving linear systems.</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Applying Row Operations)</div>
                    <div class="env-body"><p>Starting from
                    \\[\\left(\\begin{array}{rrr|r} 1 & -2 & 1 & 0 \\\\ 0 & 2 & -8 & 8 \\\\ -4 & 5 & 9 & -9 \\end{array}\\right)\\]
                    Apply \\(R_3 \\leftarrow R_3 + 4R_1\\):
                    \\[\\left(\\begin{array}{rrr|r} 1 & -2 & 1 & 0 \\\\ 0 & 2 & -8 & 8 \\\\ 0 & -3 & 13 & -9 \\end{array}\\right)\\]
                    Next, \\(R_3 \\leftarrow R_3 + \\frac{3}{2}R_2\\):
                    \\[\\left(\\begin{array}{rrr|r} 1 & -2 & 1 & 0 \\\\ 0 & 2 & -8 & 8 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right)\\]
                    This is now in upper-triangular (echelon) form, ready for back substitution.</p></div>
                </div>

                <div class="viz-placeholder" data-viz="viz-row-ops"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Connection to Elementary Matrices)</div>
                    <div class="env-body"><p>Each elementary row operation on a matrix \\(A\\) can be realized as left-multiplication by an <strong>elementary matrix</strong> \\(E\\). For instance, the operation "add \\(c\\) times row \\(j\\) to row \\(i\\)" corresponds to multiplying \\(A\\) on the left by the identity matrix with \\(c\\) placed in position \\((i, j)\\). This viewpoint becomes important in Chapter 2, where we use it to derive the \\(LU\\) factorization.</p></div>
                </div>`,

            visualizations: [
                {
                    id: 'viz-row-ops',
                    title: 'Step-by-Step Row Reduction Animator',
                    description: 'Watch each elementary row operation transform the augmented matrix. Press "Next Step" to advance through the Gaussian elimination process.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {scale: 40});

                        var steps = [
                            {
                                matrix: [[1, -2, 1], [0, 2, -8], [-4, 5, 9]],
                                rhs: [0, 8, -9],
                                highlight: -1,
                                label: 'Initial augmented matrix'
                            },
                            {
                                matrix: [[1, -2, 1], [0, 2, -8], [0, -3, 13]],
                                rhs: [0, 8, -9],
                                highlight: 2,
                                label: 'R\u2083 \u2190 R\u2083 + 4R\u2081'
                            },
                            {
                                matrix: [[1, -2, 1], [0, 2, -8], [0, 0, 1]],
                                rhs: [0, 8, 3],
                                highlight: 2,
                                label: 'R\u2083 \u2190 R\u2083 + (3/2)R\u2082'
                            },
                            {
                                matrix: [[1, -2, 1], [0, 1, -4], [0, 0, 1]],
                                rhs: [0, 4, 3],
                                highlight: 1,
                                label: 'R\u2082 \u2190 (1/2)R\u2082'
                            },
                            {
                                matrix: [[1, -2, 1], [0, 1, 0], [0, 0, 1]],
                                rhs: [0, 16, 3],
                                highlight: 1,
                                label: 'R\u2082 \u2190 R\u2082 + 4R\u2083'
                            },
                            {
                                matrix: [[1, -2, 0], [0, 1, 0], [0, 0, 1]],
                                rhs: [-3, 16, 3],
                                highlight: 0,
                                label: 'R\u2081 \u2190 R\u2081 - R\u2083'
                            },
                            {
                                matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
                                rhs: [29, 16, 3],
                                highlight: 0,
                                label: 'R\u2081 \u2190 R\u2081 + 2R\u2082  (RREF)'
                            }
                        ];

                        var currentStep = 0;

                        var prevBtn = VizEngine.createButton(controls, '\u25C0 Prev', function() {
                            if (currentStep > 0) { currentStep--; draw(); }
                        });
                        var nextBtn = VizEngine.createButton(controls, 'Next Step \u25B6', function() {
                            if (currentStep < steps.length - 1) { currentStep++; draw(); }
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            currentStep = 0; draw();
                        });

                        function draw() {
                            viz.clear();
                            var s = steps[currentStep];

                            // Title
                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Step ' + currentStep + ' of ' + (steps.length - 1), viz.width / 2, 30);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText(s.label, viz.width / 2, 52);

                            // Draw augmented matrix centered
                            var cellW = 56;
                            var cellH = 34;
                            var matPx = (viz.width - 4 * cellW) / 2;
                            var matPy = 80;
                            viz.drawAugmentedMatrix(s.matrix, s.rhs, matPx, matPy, viz.colors.white, s.highlight, cellW, cellH);

                            // Step counter
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('(' + (currentStep + 1) + '/' + steps.length + ')', viz.width / 2, matPy + 3 * cellH + 30);

                            prevBtn.disabled = currentStep === 0;
                            nextBtn.disabled = currentStep === steps.length - 1;
                        }

                        draw();
                        return viz;
                    }
                }
            ],

            exercises: [
                {
                    question: 'Write the augmented matrix for the system: \\[3x_1 - x_2 = 9, \\quad x_1 + 2x_2 = -3.\\]',
                    hint: 'The augmented matrix has one row per equation, with the coefficients followed by the constant term.',
                    solution: '\\[\\left(\\begin{array}{rr|r} 3 & -1 & 9 \\\\ 1 & 2 & -3 \\end{array}\\right)\\]'
                },
                {
                    question: 'Perform the row operation \\(R_1 \\leftarrow R_1 - 3R_2\\) on the matrix \\(\\begin{pmatrix} 3 & -1 & 9 \\\\ 1 & 2 & -3 \\end{pmatrix}\\).',
                    hint: 'New row 1 = old row 1 minus 3 times row 2.',
                    solution: 'Row 1 becomes \\((3 - 3(1),\\; -1 - 3(2),\\; 9 - 3(-3)) = (0, -7, 18)\\). The resulting matrix is \\(\\begin{pmatrix} 0 & -7 & 18 \\\\ 1 & 2 & -3 \\end{pmatrix}\\).'
                },
                {
                    question: 'True or false: the row operation \\(R_1 \\leftarrow 0 \\cdot R_1\\) is a valid elementary row operation.',
                    hint: 'Review the definition of row scaling carefully.',
                    solution: 'False. Row scaling requires multiplication by a <em>nonzero</em> constant \\(c \\neq 0\\). Multiplying by 0 destroys information and is not invertible, so it is not permitted.'
                },
                {
                    question: 'Starting from \\(\\left(\\begin{array}{rr|r} 1 & 3 & 5 \\\\ 2 & 7 & 11 \\end{array}\\right)\\), use row operations to solve the system.',
                    hint: 'Eliminate the entry below the leading 1 in column 1.',
                    solution: 'Apply \\(R_2 \\leftarrow R_2 - 2R_1\\): \\(\\left(\\begin{array}{rr|r} 1 & 3 & 5 \\\\ 0 & 1 & 1 \\end{array}\\right)\\). Then \\(R_1 \\leftarrow R_1 - 3R_2\\): \\(\\left(\\begin{array}{rr|r} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\end{array}\\right)\\). Solution: \\(x_1 = 2,\\; x_2 = 1\\).'
                },
                {
                    question: 'Show that the composition of two elementary row operations is again expressible as a sequence of elementary row operations (i.e., the set of elementary row operations generates all row-equivalent transformations).',
                    hint: 'This follows from the fact that each elementary row operation is invertible and that matrix multiplication is associative.',
                    solution: 'If \\(E_1\\) and \\(E_2\\) are elementary matrices corresponding to two row operations, then \\(E_2 E_1 A\\) applies first \\(E_1\\) then \\(E_2\\) to \\(A\\). This is a sequence of two elementary row operations. Since any sequence of elementary row operations yields a row-equivalent matrix, and each is invertible, any row-equivalent matrix can be reached by a finite sequence of elementary operations.'
                },
                {
                    question: 'Explain why column operations on an augmented matrix do not generally preserve the solution set. Give a specific example.',
                    hint: 'Consider what happens if you swap column 1 and column 2.',
                    solution: 'Swapping columns 1 and 2 in the augmented matrix effectively swaps the roles of \\(x_1\\) and \\(x_2\\). For example, \\(\\left(\\begin{array}{rr|r}1 & 0 & 3\\\\0 & 1 & 5\\end{array}\\right)\\) has solution \\((x_1,x_2)=(3,5)\\). After swapping columns 1 and 2: \\(\\left(\\begin{array}{rr|r}0 & 1 & 3\\\\1 & 0 & 5\\end{array}\\right)\\), which represents \\(x_2=3,\\;x_1=5\\), a different solution. The operation changed what each column "means."'
                }
            ]
        },

        // ===================== Section 3: Gaussian Elimination and Echelon Form =====================
        {
            id: 'ch00-sec03',
            title: 'Gaussian Elimination and Echelon Form',
            content: `<h2>Gaussian Elimination and Echelon Form</h2>

                <p>Now that we have the tools (elementary row operations), we need a <em>strategy</em>: a systematic algorithm that always works, regardless of the size of the system. That algorithm is <strong>Gaussian elimination</strong>, and its goal is to transform the augmented matrix into <strong>echelon form</strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Row Echelon Form)</div>
                    <div class="env-body"><p>A matrix is in <strong>row echelon form</strong> (REF) if it satisfies the following conditions:
                    <ol>
                        <li>All rows consisting entirely of zeros are at the bottom.</li>
                        <li>The first nonzero entry in each nonzero row (called the <strong>leading entry</strong> or <strong>pivot</strong>) is to the right of the leading entry of the row above it.</li>
                        <li>All entries in a column below a leading entry are zero.</li>
                    </ol>
                    The columns containing leading entries are called <strong>pivot columns</strong>.</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Echelon Form)</div>
                    <div class="env-body"><p>The following matrix is in row echelon form (pivots marked with \\(\\boxed{\\cdot}\\)):
                    \\[\\begin{pmatrix} \\boxed{2} & 3 & -1 & 7 \\\\ 0 & \\boxed{1} & 4 & -2 \\\\ 0 & 0 & 0 & \\boxed{5} \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}\\]
                    Pivot columns are 1, 2, and 4. Column 3 is a <em>non-pivot</em> (free) column.</p>
                    <p>The following matrix is <em>not</em> in echelon form:
                    \\[\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 4 \\\\ 0 & 5 & 6 \\end{pmatrix}\\]
                    because the leading entry of row 3 is in column 2, which is not to the right of the leading entry of row 2 (column 3).</p></div>
                </div>

                <h3>The Gaussian Elimination Algorithm</h3>

                <p>Gaussian elimination proceeds from left to right, top to bottom, creating zeros below each pivot:</p>

                <div class="env-block definition">
                    <div class="env-title">Algorithm (Forward Elimination)</div>
                    <div class="env-body">
                    <p><strong>Input:</strong> An \\(m \\times n\\) matrix \\(A\\). <strong>Output:</strong> A row echelon form of \\(A\\).</p>
                    <ol>
                        <li>Start with the leftmost nonzero column. This is the first <strong>pivot column</strong>. The topmost nonzero entry in this column is the first <strong>pivot</strong>.</li>
                        <li>If the pivot position has a zero, swap the row with a row below that has a nonzero entry in this column (<strong>partial pivoting</strong>).</li>
                        <li>Use the pivot to eliminate all entries below it: for each row \\(i\\) below the pivot row, perform \\(R_i \\leftarrow R_i - \\frac{a_{ik}}{a_{pk}} R_p\\), where \\(p\\) is the pivot row and \\(k\\) is the pivot column.</li>
                        <li>Cover (ignore) the pivot row and repeat from step 1 on the remaining submatrix.</li>
                        <li>Continue until no more nonzero rows remain below the current position.</li>
                    </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Existence of Echelon Form)</div>
                    <div class="env-body"><p>Every matrix is row equivalent to a matrix in row echelon form. Gaussian elimination always terminates in a finite number of steps.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>At each stage of the algorithm, the submatrix under consideration has strictly fewer rows than at the previous stage (we remove the pivot row from consideration). Since the matrix has finitely many rows, the process must terminate. At each step, the operation creates zeros below the current pivot without disturbing the echelon structure already created above (since we only modify rows <em>below</em> the current pivot row). Therefore, when the algorithm terminates, the matrix is in row echelon form.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Full Gaussian Elimination)</div>
                    <div class="env-body"><p>Reduce to echelon form:
                    \\[\\begin{pmatrix} 0 & 1 & -4 & 8 \\\\ 2 & -3 & 2 & 1 \\\\ 4 & -8 & 12 & 1 \\end{pmatrix}\\]
                    <strong>Step 1:</strong> Column 1 has a zero on top. Swap \\(R_1 \\leftrightarrow R_2\\):
                    \\[\\begin{pmatrix} 2 & -3 & 2 & 1 \\\\ 0 & 1 & -4 & 8 \\\\ 4 & -8 & 12 & 1 \\end{pmatrix}\\]
                    <strong>Step 2:</strong> Eliminate below the pivot in column 1. \\(R_3 \\leftarrow R_3 - 2R_1\\):
                    \\[\\begin{pmatrix} 2 & -3 & 2 & 1 \\\\ 0 & 1 & -4 & 8 \\\\ 0 & -2 & 8 & -1 \\end{pmatrix}\\]
                    <strong>Step 3:</strong> Move to column 2, row 2. Pivot is 1. Eliminate below: \\(R_3 \\leftarrow R_3 + 2R_2\\):
                    \\[\\begin{pmatrix} 2 & -3 & 2 & 1 \\\\ 0 & 1 & -4 & 8 \\\\ 0 & 0 & 0 & 15 \\end{pmatrix}\\]
                    This is in row echelon form. Pivot columns: 1, 2, 4.</p></div>
                </div>

                <h3>Determining Consistency from Echelon Form</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Consistency Criterion)</div>
                    <div class="env-body"><p>A linear system is inconsistent if and only if an echelon form of its augmented matrix contains a row of the form
                    \\[\\begin{pmatrix} 0 & 0 & \\cdots & 0 & | & d \\end{pmatrix}\\]
                    where \\(d \\neq 0\\). Such a row corresponds to the equation \\(0 = d\\), which is a contradiction.</p></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>Equivalently, the system is inconsistent if and only if the rightmost column of the <em>augmented</em> matrix is a pivot column. If the last column is not a pivot column, the system is consistent (it has at least one solution).</p></div>
                </div>

                <h3>Computational Complexity</h3>

                <p>For an \\(n \\times n\\) system, Gaussian elimination requires approximately \\(\\frac{2}{3}n^3\\) arithmetic operations (multiplications and additions). This cubic scaling makes it feasible for systems with thousands of unknowns. For comparison, Cramer's rule using determinant expansion requires \\(O(n! \\cdot n)\\) operations, which is astronomically slower for large \\(n\\).</p>

                <div class="env-block warning">
                    <div class="env-title">Warning (Numerical Stability)</div>
                    <div class="env-body"><p>In practice, dividing by a very small pivot can amplify rounding errors catastrophically. This is why numerical implementations use <strong>partial pivoting</strong> (swapping to bring the largest-magnitude entry to the pivot position) or even <strong>complete pivoting</strong>. We will discuss this further in Chapter 2 when we cover \\(PA = LU\\) factorization.</p></div>
                </div>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Determine which of the following matrices are in row echelon form:<br>(a) \\(\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 5 \\\\ 0 & 0 & 0\\end{pmatrix}\\)&emsp;(b) \\(\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0\\end{pmatrix}\\)&emsp;(c) \\(\\begin{pmatrix} 0 & 1 \\\\ 1 & 0\\end{pmatrix}\\)',
                    hint: 'Check the three conditions: zero rows at bottom, leading entries move strictly to the right, zeros below each pivot.',
                    solution: '(a) Yes. Leading entries are in columns 1 and 3, staircase pattern, zeros below each. (b) Yes. Leading entries in columns 1 and 2, staircase pattern, zero row at bottom. (c) No. The leading entry of row 2 (column 1) is to the <em>left</em> of the leading entry of row 1 (column 2), violating the staircase condition.'
                },
                {
                    question: 'Use Gaussian elimination to reduce the matrix \\(\\begin{pmatrix} 1 & 3 & 5 & 7 \\\\ 3 & 5 & 7 & 9 \\\\ 5 & 7 & 9 & 1 \\end{pmatrix}\\) to row echelon form.',
                    hint: 'Eliminate column 1 below the pivot using \\(R_2 \\leftarrow R_2 - 3R_1\\) and \\(R_3 \\leftarrow R_3 - 5R_1\\), then continue with column 2.',
                    solution: '\\(R_2 \\leftarrow R_2 - 3R_1\\): \\(\\begin{pmatrix}1&3&5&7\\\\0&-4&-8&-12\\\\5&7&9&1\\end{pmatrix}\\). \\(R_3 \\leftarrow R_3 - 5R_1\\): \\(\\begin{pmatrix}1&3&5&7\\\\0&-4&-8&-12\\\\0&-8&-16&-34\\end{pmatrix}\\). \\(R_3 \\leftarrow R_3 - 2R_2\\): \\(\\begin{pmatrix}1&3&5&7\\\\0&-4&-8&-12\\\\0&0&0&-10\\end{pmatrix}\\). This is in REF with pivots in columns 1, 2, 4.'
                },
                {
                    question: 'True or false: the row echelon form of a matrix is unique.',
                    hint: 'Try reducing \\(\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\) in two different ways by choosing different scaling operations.',
                    solution: 'False. The row echelon form is <em>not</em> unique. For example, \\(\\begin{pmatrix}1&2\\\\0&-2\\end{pmatrix}\\) and \\(\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\) are both echelon forms of the same matrix (the second is obtained by scaling row 2). However, the <em>reduced</em> row echelon form (RREF) is unique, as we prove in the next section.'
                },
                {
                    question: 'For the system with augmented matrix \\(\\left(\\begin{array}{rrr|r}2&4&-2&2\\\\4&9&-3&8\\\\-2&-3&7&10\\end{array}\\right)\\), determine whether the system is consistent by reducing to echelon form.',
                    hint: 'Perform forward elimination and check whether a row of the form \\((0\\;0\\;0\\;|\\;d)\\) with \\(d \\neq 0\\) appears.',
                    solution: '\\(R_2 \\leftarrow R_2 - 2R_1\\): \\(\\left(\\begin{array}{rrr|r}2&4&-2&2\\\\0&1&1&4\\\\-2&-3&7&10\\end{array}\\right)\\). \\(R_3 \\leftarrow R_3 + R_1\\): \\(\\left(\\begin{array}{rrr|r}2&4&-2&2\\\\0&1&1&4\\\\0&1&5&12\\end{array}\\right)\\). \\(R_3 \\leftarrow R_3 - R_2\\): \\(\\left(\\begin{array}{rrr|r}2&4&-2&2\\\\0&1&1&4\\\\0&0&4&8\\end{array}\\right)\\). No contradictory row appears, so the system is consistent. (Back substitution gives \\(x_3=2, x_2=2, x_1=-1\\).)'
                },
                {
                    question: 'Explain why Gaussian elimination requires approximately \\(\\frac{2}{3}n^3\\) operations for an \\(n \\times n\\) matrix. (You may count each multiplication-addition pair as one operation.)',
                    hint: 'When eliminating column \\(k\\), each of the \\(n-k\\) rows below the pivot requires \\(n-k\\) operations.',
                    solution: 'At step \\(k\\) (eliminating column \\(k\\)), there are \\(n - k\\) rows to update, and each row has \\(n - k\\) entries to modify (the entries from column \\(k+1\\) to \\(n\\)). So step \\(k\\) costs roughly \\((n-k)^2\\) operations. Summing: \\(\\sum_{k=1}^{n-1}(n-k)^2 = \\sum_{j=1}^{n-1}j^2 \\approx \\frac{n^3}{3}\\). Counting both multiplications and additions doubles this to approximately \\(\\frac{2n^3}{3}\\).'
                }
            ]
        },

        // ===================== Section 4: Reduced Row Echelon Form and Back Substitution =====================
        {
            id: 'ch00-sec04',
            title: 'Reduced Row Echelon Form and Back Substitution',
            content: `<h2>Reduced Row Echelon Form and Back Substitution</h2>

                <p>Row echelon form is enough to determine whether a system is consistent, but to read off the solution cleanly, we go one step further to <strong>reduced row echelon form</strong> (RREF). This form makes the solution completely transparent.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Reduced Row Echelon Form)</div>
                    <div class="env-body"><p>A matrix is in <strong>reduced row echelon form</strong> (RREF) if it satisfies all the conditions for row echelon form, plus:
                    <ol>
                        <li>Each leading entry (pivot) is equal to 1.</li>
                        <li>Each pivot is the <em>only</em> nonzero entry in its column.</li>
                    </ol></p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>The following matrix is in RREF:
                    \\[\\begin{pmatrix} 1 & 0 & 5 & 0 \\\\ 0 & 1 & -2 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}\\]
                    Pivot columns are 1, 2, and 4. Each pivot is 1, and each pivot column has zeros everywhere except at the pivot.</p>
                    <p>The following is in REF but <em>not</em> RREF:
                    \\[\\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & 1 & -4 \\\\ 0 & 0 & 5 \\end{pmatrix}\\]
                    because the pivots are not all 1, and pivot columns have nonzero entries above the pivots.</p></div>
                </div>

                <h3>The Gauss-Jordan Algorithm</h3>

                <p>To reach RREF from REF, we perform <strong>back substitution via row operations</strong> (also called <strong>Gauss-Jordan elimination</strong>):</p>

                <div class="env-block definition">
                    <div class="env-title">Algorithm (Back Elimination / Gauss-Jordan)</div>
                    <div class="env-body">
                    <p>Starting from a matrix in row echelon form:</p>
                    <ol>
                        <li>Scale each pivot row so that the pivot becomes 1: \\(R_i \\leftarrow \\frac{1}{a_{ip}}R_i\\).</li>
                        <li>Working from the rightmost pivot to the leftmost, use each pivot to eliminate all entries <em>above</em> it: for each row \\(j\\) above row \\(i\\), perform \\(R_j \\leftarrow R_j - a_{jp}R_i\\).</li>
                    </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Uniqueness of RREF)</div>
                    <div name="rref-uniqueness" class="env-body"><p>Every matrix is row equivalent to exactly one matrix in reduced row echelon form. That is, the RREF of a matrix is <strong>unique</strong>.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>We prove uniqueness by showing that the RREF is determined by the solution set of the associated homogeneous system, which is invariant under row operations.</p>
                    <p>Suppose matrices \\(R\\) and \\(R'\\) are both in RREF and are row equivalent to the same matrix \\(A\\). Since row operations preserve solution sets, the homogeneous systems \\(R\\mathbf{x} = \\mathbf{0}\\) and \\(R'\\mathbf{x} = \\mathbf{0}\\) have the same solution set \\(S\\).</p>
                    <p><strong>Step 1: Same pivot columns.</strong> Column \\(j\\) is a pivot column of \\(R\\) if and only if the standard basis vector \\(\\mathbf{e}_j\\) is <em>not</em> a linear combination of the previous columns of \\(R\\). Since \\(R\\) and \\(R'\\) have the same null space, they have the same pivot columns.</p>
                    <p><strong>Step 2: Same entries.</strong> Let the common pivot columns be \\(j_1 < j_2 < \\cdots < j_r\\). In RREF, column \\(j_k\\) of \\(R\\) is \\(\\mathbf{e}_k\\) (the \\(k\\)-th standard basis vector of \\(\\mathbb{R}^m\\)), and similarly for \\(R'\\). For a non-pivot column \\(j\\), the RREF condition forces the column to be the unique vector that makes the \\(j\\)-th variable expressible in terms of the free variables according to the null space. Since the null spaces agree, the non-pivot columns also agree.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>The uniqueness of RREF is one of the most important structural results in elementary linear algebra. It means that two matrices are row equivalent if and only if they have the same RREF. This gives a <em>canonical form</em> for row equivalence classes.</p></div>
                </div>

                <h3>Reading Solutions from RREF</h3>

                <p>Once the augmented matrix is in RREF, solutions can be read off directly:</p>
                <ul>
                    <li>Variables corresponding to <strong>pivot columns</strong> are called <strong>leading variables</strong> (or basic variables). Their values are determined.</li>
                    <li>Variables corresponding to <strong>non-pivot columns</strong> are called <strong>free variables</strong>. They can take any value.</li>
                </ul>

                <div class="env-block example">
                    <div class="env-title">Example (Reading Solutions)</div>
                    <div class="env-body"><p>The RREF augmented matrix
                    \\[\\left(\\begin{array}{rrrr|r} 1 & 0 & 5 & 0 & 3 \\\\ 0 & 1 & -2 & 0 & -1 \\\\ 0 & 0 & 0 & 1 & 4 \\end{array}\\right)\\]
                    corresponds to the system \\(x_1 + 5x_3 = 3\\), \\(x_2 - 2x_3 = -1\\), \\(x_4 = 4\\). The free variable is \\(x_3 = t\\), and the solution is:
                    \\[\\begin{aligned}x_1 &= 3 - 5t \\\\ x_2 &= -1 + 2t \\\\ x_3 &= t \\\\ x_4 &= 4\\end{aligned}\\]
                    In vector form:
                    \\[\\mathbf{x} = \\begin{pmatrix}3 \\\\ -1 \\\\ 0 \\\\ 4\\end{pmatrix} + t\\begin{pmatrix}-5 \\\\ 2 \\\\ 1 \\\\ 0\\end{pmatrix}, \\quad t \\in \\mathbb{R}.\\]</p></div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition (Number of Solutions)</div>
                    <div class="env-body"><p>Let \\(A\\) be the coefficient matrix of a consistent system of \\(m\\) equations in \\(n\\) unknowns, and let \\(r\\) be the number of pivots (the <strong>rank</strong> of \\(A\\)).
                    <ul>
                        <li>If \\(r = n\\) (every column is a pivot column), the system has a <strong>unique solution</strong>.</li>
                        <li>If \\(r < n\\), the system has <strong>infinitely many solutions</strong>, parameterized by \\(n - r\\) free variables.</li>
                    </ul></p></div>
                </div>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Reduce the matrix \\(\\begin{pmatrix}1 & 2 & -1 & 3 \\\\ 2 & 4 & 1 & 0 \\\\ 3 & 6 & 0 & 3\\end{pmatrix}\\) to RREF.',
                    hint: 'Start with forward elimination, then do back substitution. Notice what happens in the second column.',
                    solution: '\\(R_2 \\leftarrow R_2 - 2R_1,\\; R_3 \\leftarrow R_3 - 3R_1\\): \\(\\begin{pmatrix}1&2&-1&3\\\\0&0&3&-6\\\\0&0&3&-6\\end{pmatrix}\\). \\(R_3 \\leftarrow R_3-R_2\\): \\(\\begin{pmatrix}1&2&-1&3\\\\0&0&3&-6\\\\0&0&0&0\\end{pmatrix}\\). \\(R_2 \\leftarrow \\frac{1}{3}R_2\\): \\(\\begin{pmatrix}1&2&-1&3\\\\0&0&1&-2\\\\0&0&0&0\\end{pmatrix}\\). \\(R_1 \\leftarrow R_1+R_2\\): \\(\\begin{pmatrix}1&2&0&1\\\\0&0&1&-2\\\\0&0&0&0\\end{pmatrix}\\). This is RREF. Pivots in columns 1 and 3; columns 2 and 4 are free.'
                },
                {
                    question: 'A system has augmented matrix with RREF \\(\\left(\\begin{array}{rrr|r}1&0&0&2\\\\0&1&0&-3\\\\0&0&1&5\\\\0&0&0&0\\end{array}\\right)\\). How many solutions does the system have? What are they?',
                    hint: 'Count pivot columns vs. total variable columns.',
                    solution: 'There are 3 variables and 3 pivots (\\(r = n = 3\\)), so the solution is unique: \\((x_1, x_2, x_3) = (2, -3, 5)\\). The zero row simply indicates that the fourth equation was redundant.'
                },
                {
                    question: 'Prove that if a homogeneous system \\(A\\mathbf{x} = \\mathbf{0}\\) has more unknowns than equations (\\(n > m\\)), then it has a nontrivial solution.',
                    hint: 'What is the maximum possible rank \\(r\\)?',
                    solution: 'The rank \\(r\\) satisfies \\(r \\leq m\\) (at most one pivot per row) and \\(r \\leq n\\). Since \\(n > m\\), we have \\(r \\leq m < n\\), so there are at least \\(n - r \\geq n - m \\geq 1\\) free variables. Free variables can be set to nonzero values, producing nontrivial solutions.'
                },
                {
                    question: 'Find the RREF of \\(\\left(\\begin{array}{rrr|r}0&1&2&3\\\\0&0&0&0\\\\1&-1&0&1\\end{array}\\right)\\) and write the general solution.',
                    hint: 'Start by swapping rows to get a nonzero entry in the (1,1) position.',
                    solution: '\\(R_1 \\leftrightarrow R_3\\): \\(\\left(\\begin{array}{rrr|r}1&-1&0&1\\\\0&0&0&0\\\\0&1&2&3\\end{array}\\right)\\). \\(R_2 \\leftrightarrow R_3\\): \\(\\left(\\begin{array}{rrr|r}1&-1&0&1\\\\0&1&2&3\\\\0&0&0&0\\end{array}\\right)\\). \\(R_1 \\leftarrow R_1+R_2\\): \\(\\left(\\begin{array}{rrr|r}1&0&2&4\\\\0&1&2&3\\\\0&0&0&0\\end{array}\\right)\\). Free variable: \\(x_3 = t\\). Solution: \\(x_1 = 4-2t,\\; x_2 = 3-2t,\\; x_3 = t\\).'
                },
                {
                    question: 'Explain geometrically why the RREF of a matrix is unique, even though the REF is not.',
                    hint: 'Think about what the RREF encodes about the solution set.',
                    solution: 'The RREF directly encodes the solution set: each leading variable is expressed as an explicit linear function of the free variables. Since the solution set is determined by the original matrix (it is invariant under row operations), and since the RREF is the unique way to express the leading variables in terms of the free variables with the variables partitioned into leading/free by pivot position, the RREF must be unique. REF is not unique because it allows arbitrary scaling of pivots and does not eliminate above pivots, leaving multiple valid representations.'
                }
            ]
        },

        // ===================== Section 5: Parametric Solutions and Free Variables =====================
        {
            id: 'ch00-sec05',
            title: 'Parametric Solutions and Free Variables',
            content: `<h2>Parametric Solutions and Free Variables</h2>

                <p>When a consistent system has infinitely many solutions, we describe the entire solution set using <strong>parametric form</strong>. This representation cleanly separates the "particular" solution from the "homogeneous" part, foreshadowing a fundamental structural result that permeates all of linear algebra.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Pivot and Free Variables)</div>
                    <div class="env-body"><p>After reducing the augmented matrix of a consistent system to RREF:
                    <ul>
                        <li>A <strong>pivot variable</strong> (basic variable) corresponds to a pivot column. Its value is determined by the free variables.</li>
                        <li>A <strong>free variable</strong> corresponds to a non-pivot column. It can take any real value.</li>
                    </ul>
                    If there are \\(r\\) pivots among \\(n\\) variables, there are \\(n - r\\) free variables.</p></div>
                </div>

                <h3>Writing Solutions in Parametric Vector Form</h3>

                <p>The parametric vector form expresses the general solution as a sum of a <strong>particular solution</strong> plus a linear combination of <strong>special solutions</strong> to the homogeneous system.</p>

                <div class="env-block example">
                    <div class="env-title">Example (Two Free Variables)</div>
                    <div class="env-body"><p>Consider the system with RREF augmented matrix
                    \\[\\left(\\begin{array}{rrrrr|r} 1 & 0 & -3 & 0 & 2 & 1 \\\\ 0 & 1 & 2 & 0 & -5 & 4 \\\\ 0 & 0 & 0 & 1 & 3 & 7 \\end{array}\\right)\\]
                    Pivot variables: \\(x_1, x_2, x_4\\). Free variables: \\(x_3 = s,\\; x_5 = t\\).</p>
                    <p>From the RREF:
                    \\[\\begin{aligned}x_1 &= 1 + 3s - 2t \\\\ x_2 &= 4 - 2s + 5t \\\\ x_3 &= s \\\\ x_4 &= 7 - 3t \\\\ x_5 &= t\\end{aligned}\\]
                    In parametric vector form:
                    \\[\\mathbf{x} = \\underbrace{\\begin{pmatrix}1\\\\4\\\\0\\\\7\\\\0\\end{pmatrix}}_{\\mathbf{x}_p} + s\\underbrace{\\begin{pmatrix}3\\\\-2\\\\1\\\\0\\\\0\\end{pmatrix}}_{\\mathbf{v}_1} + t\\underbrace{\\begin{pmatrix}-2\\\\5\\\\0\\\\-3\\\\1\\end{pmatrix}}_{\\mathbf{v}_2}\\]
                    The vector \\(\\mathbf{x}_p\\) is a <strong>particular solution</strong> (obtained by setting all free variables to 0). The vectors \\(\\mathbf{v}_1\\) and \\(\\mathbf{v}_2\\) are <strong>special solutions</strong> of the homogeneous system \\(A\\mathbf{x} = \\mathbf{0}\\).</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Structure of the General Solution)</div>
                    <div class="env-body"><p>If \\(\\mathbf{x}_p\\) is any particular solution of the consistent system \\(A\\mathbf{x} = \\mathbf{b}\\), then the general solution is
                    \\[\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h\\]
                    where \\(\\mathbf{x}_h\\) ranges over all solutions of the homogeneous system \\(A\\mathbf{x} = \\mathbf{0}\\). In other words:
                    \\[\\{\\text{solutions of } A\\mathbf{x} = \\mathbf{b}\\} = \\mathbf{x}_p + \\{\\text{solutions of } A\\mathbf{x} = \\mathbf{0}\\} = \\mathbf{x}_p + \\text{Null}(A).\\]</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p><strong>(\\(\\supseteq\\)):</strong> If \\(A\\mathbf{x}_p = \\mathbf{b}\\) and \\(A\\mathbf{x}_h = \\mathbf{0}\\), then \\(A(\\mathbf{x}_p + \\mathbf{x}_h) = A\\mathbf{x}_p + A\\mathbf{x}_h = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}\\), so \\(\\mathbf{x}_p + \\mathbf{x}_h\\) is a solution.</p>
                    <p><strong>(\\(\\subseteq\\)):</strong> If \\(\\mathbf{x}\\) is any solution, i.e., \\(A\\mathbf{x} = \\mathbf{b}\\), then \\(A(\\mathbf{x} - \\mathbf{x}_p) = \\mathbf{b} - \\mathbf{b} = \\mathbf{0}\\), so \\(\\mathbf{x}_h := \\mathbf{x} - \\mathbf{x}_p\\) is a solution of the homogeneous system, and \\(\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Interpretation</div>
                    <div class="env-body"><p>The solution set of \\(A\\mathbf{x} = \\mathbf{b}\\) is a <strong>translate</strong> (or "shifted copy") of the null space of \\(A\\). If the null space is a line through the origin, then the solution set of \\(A\\mathbf{x} = \\mathbf{b}\\) is a line that passes through \\(\\mathbf{x}_p\\) instead. If the null space is a plane, the solution set is a plane translated away from the origin. This is the linear algebra analog of the fact that the general solution of a nonhomogeneous ODE is a particular solution plus the complementary (homogeneous) solution.</p></div>
                </div>

                <div class="viz-placeholder" data-viz="viz-parametric-sol"></div>

                <h3>Homogeneous Systems</h3>

                <p>A system \\(A\\mathbf{x} = \\mathbf{0}\\) always has the <strong>trivial solution</strong> \\(\\mathbf{x} = \\mathbf{0}\\). It has nontrivial solutions if and only if there are free variables (i.e., \\(\\text{rank}(A) < n\\)).</p>

                <div class="env-block corollary">
                    <div class="env-title">Corollary</div>
                    <div class="env-body"><p>A homogeneous system with more unknowns than equations (\\(n > m\\)) always has a nontrivial solution.</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Homogeneous System)</div>
                    <div class="env-body"><p>Solve \\(A\\mathbf{x} = \\mathbf{0}\\) where \\(A = \\begin{pmatrix}1 & 3 & -1 \\\\ 2 & 6 & -2\\end{pmatrix}\\).</p>
                    <p>Row reduce: \\(R_2 \\leftarrow R_2 - 2R_1\\) gives \\(\\begin{pmatrix}1&3&-1\\\\0&0&0\\end{pmatrix}\\).</p>
                    <p>Free variables: \\(x_2 = s,\\; x_3 = t\\). Pivot variable: \\(x_1 = -3s + t\\).</p>
                    <p>Solution:
                    \\[\\mathbf{x} = s\\begin{pmatrix}-3\\\\1\\\\0\\end{pmatrix} + t\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}\\]
                    The null space of \\(A\\) is a 2-dimensional plane through the origin in \\(\\mathbb{R}^3\\).</p></div>
                </div>

                <h3>Summary: The Complete Solution Algorithm</h3>

                <div class="env-block remark">
                    <div class="env-title">The Complete Algorithm for Solving \\(A\\mathbf{x} = \\mathbf{b}\\)</div>
                    <div class="env-body">
                    <ol>
                        <li>Form the augmented matrix \\([A \\mid \\mathbf{b}]\\).</li>
                        <li>Row reduce to RREF using Gaussian elimination followed by Gauss-Jordan back substitution.</li>
                        <li>If a row \\((0\\;0\\;\\cdots\\;0\\;|\\;d)\\) with \\(d \\neq 0\\) appears, the system is <strong>inconsistent</strong>. Stop.</li>
                        <li>Otherwise, identify pivot variables and free variables from the RREF.</li>
                        <li>Express pivot variables in terms of free variables.</li>
                        <li>Write the solution in parametric vector form: \\(\\mathbf{x} = \\mathbf{x}_p + t_1 \\mathbf{v}_1 + \\cdots + t_k \\mathbf{v}_k\\).</li>
                    </ol>
                    </div>
                </div>`,

            visualizations: [
                {
                    id: 'viz-parametric-sol',
                    title: 'Parametric Solution Set Visualizer',
                    description: 'For the system \\(x_1 + 2x_2 = b\\), the solution set is a line in \\(\\mathbb{R}^2\\). Drag the slider to change \\(b\\) and see the solution line shift. When \\(b = 0\\), the solution passes through the origin (the null space).',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {scale: 40});
                        var bVal = 3;

                        VizEngine.createSlider(controls, 'b', -5, 5, bVal, 0.5, function(v) {
                            bVal = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // The system: x1 + 2*x2 = b
                            // Solution: x1 = b - 2t, x2 = t
                            // Direction vector: (-2, 1)
                            // Particular solution: (b, 0)

                            // Draw the null space line (b=0) always, in muted color
                            // Line through origin with direction (-2,1)
                            viz.drawLine(0, 0, -2, 1, viz.colors.muted, 1, true);

                            // Draw the solution line for current b
                            // Passes through (b, 0) with direction (-2, 1)
                            viz.drawLine(bVal, 0, bVal - 2, 1, viz.colors.blue, 2.5);

                            // Particular solution point
                            viz.drawPoint(bVal, 0, viz.colors.orange, 'x_p = (' + bVal.toFixed(1) + ', 0)', 7);

                            // Draw direction vector from particular solution
                            viz.drawVector(bVal, 0, bVal - 2, 1, viz.colors.teal, 'v = (-2,1)', 2);

                            // Origin
                            viz.drawPoint(0, 0, viz.colors.white, null, 4);

                            // Labels
                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('x\u2081 + 2x\u2082 = ' + bVal.toFixed(1), 12, 20);

                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('Null space (b = 0)', 12, 38);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Solution set = x_p + Null(A)', 12, 56);

                            // Show parametric form
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('x = (' + bVal.toFixed(1) + ', 0) + t(-2, 1)', viz.width - 12, viz.height - 12);
                        }

                        draw();
                        return viz;
                    }
                }
            ],

            exercises: [
                {
                    question: 'For the system with RREF augmented matrix \\(\\left(\\begin{array}{rrrr|r}1&0&2&0&3\\\\0&1&-1&0&2\\\\0&0&0&1&-1\\end{array}\\right)\\), write the general solution in parametric vector form.',
                    hint: 'Identify pivot columns (1, 2, 4) and free columns (3). Set \\(x_3 = t\\).',
                    solution: 'Free variable: \\(x_3 = t\\). From the RREF: \\(x_1 = 3 - 2t,\\; x_2 = 2 + t,\\; x_4 = -1\\). In parametric vector form: \\[\\mathbf{x} = \\begin{pmatrix}3\\\\2\\\\0\\\\-1\\end{pmatrix} + t\\begin{pmatrix}-2\\\\1\\\\1\\\\0\\end{pmatrix}.\\]'
                },
                {
                    question: 'Find all solutions of the homogeneous system \\(\\begin{pmatrix}1&2&1&0\\\\2&4&0&2\\end{pmatrix}\\mathbf{x} = \\mathbf{0}\\).',
                    hint: 'Row reduce to RREF, identify free variables, write special solutions.',
                    solution: '\\(R_2 \\leftarrow R_2 - 2R_1\\): \\(\\begin{pmatrix}1&2&1&0\\\\0&0&-2&2\\end{pmatrix}\\). \\(R_2 \\leftarrow -\\frac{1}{2}R_2\\): \\(\\begin{pmatrix}1&2&1&0\\\\0&0&1&-1\\end{pmatrix}\\). \\(R_1 \\leftarrow R_1 - R_2\\): \\(\\begin{pmatrix}1&2&0&1\\\\0&0&1&-1\\end{pmatrix}\\). Free: \\(x_2 = s, x_4 = t\\). Solution: \\(\\mathbf{x} = s(-2,1,0,0)^T + t(-1,0,1,1)^T\\).'
                },
                {
                    question: 'Let \\(\\mathbf{x}_1\\) and \\(\\mathbf{x}_2\\) be two solutions of \\(A\\mathbf{x} = \\mathbf{b}\\). Show that \\(\\mathbf{x}_1 - \\mathbf{x}_2\\) is a solution of \\(A\\mathbf{x} = \\mathbf{0}\\).',
                    hint: 'Use the linearity of matrix-vector multiplication.',
                    solution: '\\(A(\\mathbf{x}_1 - \\mathbf{x}_2) = A\\mathbf{x}_1 - A\\mathbf{x}_2 = \\mathbf{b} - \\mathbf{b} = \\mathbf{0}\\). Therefore \\(\\mathbf{x}_1 - \\mathbf{x}_2 \\in \\text{Null}(A)\\). This is the key fact behind the theorem that the solution set of \\(A\\mathbf{x} = \\mathbf{b}\\) is a translate of the null space.'
                },
                {
                    question: 'A \\(3 \\times 5\\) matrix \\(A\\) has rank 3. How many free variables does the homogeneous system \\(A\\mathbf{x} = \\mathbf{0}\\) have? Describe the solution set geometrically.',
                    hint: 'Free variables = \\(n - r\\). Think about the dimension of the null space.',
                    solution: 'Free variables: \\(5 - 3 = 2\\). The null space is a 2-dimensional subspace (a plane through the origin) in \\(\\mathbb{R}^5\\). For any consistent \\(A\\mathbf{x} = \\mathbf{b}\\), the solution set would be a translated copy of this 2-dimensional plane.'
                },
                {
                    question: 'Suppose a \\(4 \\times 4\\) system \\(A\\mathbf{x} = \\mathbf{b}\\) is consistent and has a unique solution. What can you conclude about the rank of \\(A\\)? What about \\(A\\mathbf{x} = \\mathbf{c}\\) for an arbitrary \\(\\mathbf{c}\\)?',
                    hint: 'Unique solution means no free variables. What does rank 4 imply about the RREF?',
                    solution: 'Unique solution requires \\(r = n = 4\\) (every column is a pivot column). Since \\(A\\) is \\(4 \\times 4\\) with rank 4, the RREF of \\(A\\) is the \\(4 \\times 4\\) identity matrix. This means \\(A\\) is invertible, and \\(A\\mathbf{x} = \\mathbf{c}\\) has a unique solution \\(\\mathbf{x} = A^{-1}\\mathbf{c}\\) for <em>every</em> \\(\\mathbf{c} \\in \\mathbb{R}^4\\).'
                },
                {
                    question: 'Consider the system \\(x_1 + x_2 + x_3 = 1,\\; 2x_1 + 2x_2 + 2x_3 = 2\\). Find the solution set and describe it geometrically in \\(\\mathbb{R}^3\\).',
                    hint: 'The second equation is redundant. How many free variables are there after row reduction?',
                    solution: 'Row reduction gives \\(\\begin{pmatrix}1&1&1&|&1\\\\0&0&0&|&0\\end{pmatrix}\\). Free variables: \\(x_2 = s,\\; x_3 = t\\). Solution: \\(\\mathbf{x} = (1,0,0)^T + s(-1,1,0)^T + t(-1,0,1)^T\\). Geometrically, this is a <strong>plane</strong> in \\(\\mathbb{R}^3\\) passing through \\((1,0,0)\\), parallel to the vectors \\((-1,1,0)\\) and \\((-1,0,1)\\). It is the plane \\(x_1 + x_2 + x_3 = 1\\).'
                }
            ]
        }
    ]
});
