// === Chapter 15: Least Squares ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Least Squares',
    subtitle: 'When Ax = b has no solution, find the best approximation',
    sections: [
        // ========== SECTION 1: Overdetermined Systems ==========
        {
            id: 'sec15-1-overdetermined',
            title: 'Overdetermined Systems',
            content: `
<h2>15.1 Overdetermined Systems</h2>

<p>In earlier chapters, we studied the system \\(A\\mathbf{x} = \\mathbf{b}\\) and determined when it has solutions. When \\(A\\) is \\(m \\times n\\) with \\(m > n\\), there are more equations than unknowns. Such a system is called <strong>overdetermined</strong>, and generically it has no solution at all: \\(\\mathbf{b}\\) does not lie in the column space of \\(A\\).</p>

<p>Yet this situation arises constantly in practice. If we make 100 measurements to determine 3 parameters, we have 100 equations in 3 unknowns. Due to measurement noise, no exact solution exists. We need a principled way to find the "best approximate" solution.</p>

<div class="env-block definition">
    <div class="env-title">Definition 15.1.1 (Overdetermined System)</div>
    <div class="env-body"><p>A linear system \\(A\\mathbf{x} = \\mathbf{b}\\) is <strong>overdetermined</strong> if \\(A\\) has more rows than columns (\\(m > n\\)). An overdetermined system is <strong>inconsistent</strong> (has no solution) when \\(\\mathbf{b} \\notin \\operatorname{Col}(A)\\).</p></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Geometric Picture</div>
    <div class="env-body"><p>The column space \\(\\operatorname{Col}(A)\\) is an \\(n\\)-dimensional subspace of \\(\\mathbb{R}^m\\). When \\(n < m\\), this subspace is "thin" inside \\(\\mathbb{R}^m\\). A generic \\(\\mathbf{b} \\in \\mathbb{R}^m\\) will not lie on this subspace. The "best approximation" is the point in \\(\\operatorname{Col}(A)\\) closest to \\(\\mathbf{b}\\), which is the orthogonal projection of \\(\\mathbf{b}\\) onto \\(\\operatorname{Col}(A)\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 15.1.2 (Three points, one line)</div>
    <div class="env-body"><p>Suppose we want to fit a line \\(y = c_0 + c_1 x\\) through three points \\((0, 1)\\), \\((1, 3)\\), \\((2, 4)\\). This gives the system:</p>
    \\[
    \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} c_0 \\\\ c_1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 4 \\end{pmatrix}.
    \\]
    <p>This is 3 equations in 2 unknowns. Unless the three points are perfectly collinear, the system is inconsistent. We need to find the line that comes closest to all three points simultaneously.</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 15.1.3 (Residual and Least Squares Solution)</div>
    <div class="env-body"><p>For the system \\(A\\mathbf{x} = \\mathbf{b}\\), the <strong>residual</strong> is the vector</p>
    \\[
    \\mathbf{r} = \\mathbf{b} - A\\mathbf{x}.
    \\]
    <p>A <strong>least squares solution</strong> \\(\\hat{\\mathbf{x}}\\) minimizes the squared norm of the residual:</p>
    \\[
    \\hat{\\mathbf{x}} = \\arg\\min_{\\mathbf{x} \\in \\mathbb{R}^n} \\|\\mathbf{b} - A\\mathbf{x}\\|^2.
    \\]
    <p>The quantity \\(\\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|\\) is the <strong>least squares error</strong>.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-overdetermined"></div>

<p>Why minimize the <em>squared</em> norm? There are several reasons:</p>
<ul>
<li><strong>Differentiability</strong>: The squared norm is a smooth function, so we can use calculus to find the minimum.</li>
<li><strong>Statistical justification</strong>: If measurement errors are independent and normally distributed, the least squares estimate is the maximum likelihood estimate.</li>
<li><strong>Geometric elegance</strong>: Minimizing \\(\\|\\mathbf{b} - A\\mathbf{x}\\|^2\\) is equivalent to finding the orthogonal projection of \\(\\mathbf{b}\\) onto \\(\\operatorname{Col}(A)\\).</li>
</ul>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The least squares problem is one of the most ubiquitous problems in applied mathematics. It appears in signal processing, statistics (linear regression), geodesy, machine learning, and countless engineering applications. Gauss developed the method around 1795 to predict the orbit of the asteroid Ceres.</p></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-overdetermined',
                    title: 'Projection onto Column Space',
                    description: 'The column space of \\(A\\) is a plane (shown in teal). The vector \\(\\mathbf{b}\\) (blue) does not lie in this plane. The least squares solution projects \\(\\mathbf{b}\\) onto the column space. The red dashed line is the residual \\(\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}\\), which is perpendicular to the column space.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 45 });

                        // We show a 2D view: Col(A) is a line (1D subspace) in R^2
                        const aDir = viz.addDraggable('adir', 3, 1, viz.colors.teal, 8, (wx, wy) => {
                            aDir.x = wx; aDir.y = wy;
                        });
                        const bVec = viz.addDraggable('bvec', 2, 3, viz.colors.blue, 8, (wx, wy) => {
                            bVec.x = wx; bVec.y = wy;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const ax = aDir.x, ay = aDir.y;
                            const bx = bVec.x, by = bVec.y;

                            const alen2 = ax*ax + ay*ay;
                            if (alen2 < 0.01) { viz.drawDraggables(); return; }

                            // Column space direction (line)
                            viz.drawLine(0, 0, ax, ay, viz.colors.teal + '44', 1.5);
                            viz.drawVector(0, 0, ax, ay, viz.colors.teal, 'Col(A)', 2);

                            // b
                            viz.drawVector(0, 0, bx, by, viz.colors.blue, 'b', 2.5);

                            // Projection: proj_a(b) = (a.b / a.a) * a
                            const projScalar = (ax*bx + ay*by) / alen2;
                            const px = projScalar * ax, py = projScalar * ay;

                            // Projected vector (A x-hat)
                            viz.drawVector(0, 0, px, py, viz.colors.green, 'A\u0078\u0302', 2);
                            viz.drawPoint(px, py, viz.colors.green, '', 5);

                            // Residual
                            viz.drawSegment(px, py, bx, by, viz.colors.red, 2, true);
                            viz.drawText('r', (px + bx) / 2 + 0.3, (py + by) / 2 + 0.3, viz.colors.red, 14);

                            // Right angle marker
                            const rx = bx - px, ry = by - py;
                            const rlen = Math.sqrt(rx*rx + ry*ry);
                            if (rlen > 0.2 && Math.sqrt(alen2) > 0.2) {
                                const ux = ax / Math.sqrt(alen2), uy = ay / Math.sqrt(alen2);
                                const urx = rx / rlen, ury = ry / rlen;
                                const s = 0.3;
                                viz.drawSegment(px + urx*s, py + ury*s, px + urx*s + ux*s, py + ury*s + uy*s, viz.colors.white + '55', 1);
                                viz.drawSegment(px + ux*s, py + uy*s, px + urx*s + ux*s, py + ury*s + uy*s, viz.colors.white + '55', 1);
                            }

                            // Info
                            const err = Math.sqrt((bx-px)*(bx-px) + (by-py)*(by-py));
                            viz.screenText('||r|| = ' + err.toFixed(2) + '   (least squares error)', 12, 20, viz.colors.red, 12, 'left', 'top');
                            viz.screenText('r \u22A5 Col(A)', 12, 38, viz.colors.white, 12, 'left', 'top');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether the system \\(\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} x = \\begin{pmatrix} 2 \\\\ 4 \\\\ 7 \\end{pmatrix}\\) has an exact solution. If not, find the least squares solution geometrically.',
                    hint: 'This is \\(A\\mathbf{x} = \\mathbf{b}\\) with \\(A = (1,2,3)^T\\) and \\(\\mathbf{b} = (2,4,7)^T\\). The column space is the line through \\((1,2,3)\\).',
                    solution: 'For exact solution: \\(x = 2, 2, 7/3\\). These are inconsistent, so no exact solution. The least squares solution is \\(\\hat{x} = \\frac{\\mathbf{a}^T \\mathbf{b}}{\\mathbf{a}^T \\mathbf{a}} = \\frac{2+8+21}{1+4+9} = \\frac{31}{14} \\approx 2.214\\).'
                },
                {
                    question: 'Show that if \\(\\mathbf{b} \\in \\operatorname{Col}(A)\\), the least squares error is zero.',
                    hint: 'If \\(\\mathbf{b} = A\\mathbf{x}_0\\) for some \\(\\mathbf{x}_0\\), what is \\(\\|\\mathbf{b} - A\\mathbf{x}_0\\|\\)?',
                    solution: 'If \\(\\mathbf{b} \\in \\operatorname{Col}(A)\\), then \\(\\mathbf{b} = A\\mathbf{x}_0\\) for some \\(\\mathbf{x}_0\\). The residual is \\(\\mathbf{r} = \\mathbf{b} - A\\mathbf{x}_0 = \\mathbf{0}\\), so \\(\\|\\mathbf{r}\\| = 0\\). The minimum of \\(\\|\\mathbf{b} - A\\mathbf{x}\\|^2\\) is 0, achieved at \\(\\hat{\\mathbf{x}} = \\mathbf{x}_0\\).'
                },
                {
                    question: 'Explain geometrically why the residual \\(\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}\\) must be orthogonal to \\(\\operatorname{Col}(A)\\).',
                    hint: 'Use the fact that the closest point in a subspace to a given point is obtained via orthogonal projection.',
                    solution: 'The vector \\(A\\hat{\\mathbf{x}}\\) is the closest point in \\(\\operatorname{Col}(A)\\) to \\(\\mathbf{b}\\). The vector from \\(A\\hat{\\mathbf{x}}\\) to \\(\\mathbf{b}\\) (i.e., \\(\\mathbf{r}\\)) must be perpendicular to \\(\\operatorname{Col}(A)\\); otherwise, we could move along the column space to get closer to \\(\\mathbf{b}\\), contradicting minimality. Formally, if \\(\\mathbf{r}\\) had a component in \\(\\operatorname{Col}(A)\\), subtracting it would reduce \\(\\|\\mathbf{r}\\|\\).'
                },
                {
                    question: 'For the system in Example 15.1.2, verify that no line passes through all three points \\((0,1)\\), \\((1,3)\\), \\((2,4)\\).',
                    hint: 'Check whether the augmented matrix \\([A|\\mathbf{b}]\\) has a consistent row reduction.',
                    solution: 'Row reduce: \\(\\begin{pmatrix} 1&0&1\\\\1&1&3\\\\1&2&4\\end{pmatrix} \\to \\begin{pmatrix}1&0&1\\\\0&1&2\\\\0&2&3\\end{pmatrix} \\to \\begin{pmatrix}1&0&1\\\\0&1&2\\\\0&0&-1\\end{pmatrix}\\). The last row gives \\(0 = -1\\), a contradiction. The system is inconsistent: no line passes through all three points.'
                },
                {
                    question: 'Why do we minimize \\(\\|\\mathbf{r}\\|^2\\) (the sum of squared residuals) rather than \\(\\|\\mathbf{r}\\|_1 = \\sum |r_i|\\) (the sum of absolute residuals)?',
                    hint: 'Think about differentiability and computational tractability.',
                    solution: 'The \\(\\ell^2\\) norm squared is a smooth (infinitely differentiable) function of \\(\\mathbf{x}\\), so minimization reduces to solving a linear system (the normal equations). The \\(\\ell^1\\) norm is not differentiable at zero, and its minimization requires linear programming. The \\(\\ell^2\\) approach also has a statistical justification: under Gaussian noise, it gives the maximum likelihood estimate. However, \\(\\ell^1\\) minimization (least absolute deviations) is more robust to outliers.'
                }
            ]
        },

        // ========== SECTION 2: The Normal Equations ==========
        {
            id: 'sec15-2-normal-equations',
            title: 'The Normal Equations',
            content: `
<h2>15.2 The Normal Equations</h2>

<p>We now derive the fundamental equation that characterizes the least squares solution. The key insight is geometric: the residual must be orthogonal to the column space.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 15.2.1 (Normal Equations)</div>
    <div class="env-body"><p>The vector \\(\\hat{\\mathbf{x}}\\) minimizes \\(\\|\\mathbf{b} - A\\mathbf{x}\\|^2\\) if and only if it satisfies the <strong>normal equations</strong>:</p>
    \\[
    A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}.
    \\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (Geometric)</div>
    <div class="env-body"><p>The minimum of \\(\\|\\mathbf{b} - A\\mathbf{x}\\|\\) is achieved when \\(A\\hat{\\mathbf{x}}\\) is the orthogonal projection of \\(\\mathbf{b}\\) onto \\(\\operatorname{Col}(A)\\). The residual \\(\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}\\) must be orthogonal to every column of \\(A\\):</p>
    \\[
    \\mathbf{a}_j^T (\\mathbf{b} - A\\hat{\\mathbf{x}}) = 0 \\quad \\text{for each } j = 1, \\ldots, n.
    \\]
    <p>This is equivalent to</p>
    \\[
    A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0} \\quad \\Longleftrightarrow \\quad A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}.
    \\]
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (Calculus)</div>
    <div class="env-body"><p>Define \\(f(\\mathbf{x}) = \\|\\mathbf{b} - A\\mathbf{x}\\|^2 = (\\mathbf{b} - A\\mathbf{x})^T(\\mathbf{b} - A\\mathbf{x})\\). Expanding:</p>
    \\[
    f(\\mathbf{x}) = \\mathbf{b}^T\\mathbf{b} - 2\\mathbf{x}^T A^T \\mathbf{b} + \\mathbf{x}^T A^T A \\mathbf{x}.
    \\]
    <p>The gradient is</p>
    \\[
    \\nabla f = -2 A^T \\mathbf{b} + 2 A^T A \\mathbf{x}.
    \\]
    <p>Setting \\(\\nabla f = \\mathbf{0}\\) gives \\(A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}\\). Since \\(A^T A\\) is positive semidefinite (and positive definite when \\(A\\) has full column rank), this critical point is indeed a minimum.</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 15.2.2 (Uniqueness)</div>
    <div class="env-body"><p>If \\(A\\) has linearly independent columns (full column rank), then \\(A^T A\\) is invertible and the unique least squares solution is</p>
    \\[
    \\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}.
    \\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>We show \\(A^T A\\) is invertible by showing \\(\\operatorname{Null}(A^T A) = \\{\\mathbf{0}\\}\\). If \\(A^T A \\mathbf{x} = \\mathbf{0}\\), then \\(\\mathbf{x}^T A^T A \\mathbf{x} = 0\\), i.e., \\(\\|A\\mathbf{x}\\|^2 = 0\\), so \\(A\\mathbf{x} = \\mathbf{0}\\). Since \\(A\\) has independent columns, \\(\\mathbf{x} = \\mathbf{0}\\).</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 15.2.3 (Projection Matrix)</div>
    <div class="env-body"><p>The <strong>projection matrix</strong> onto \\(\\operatorname{Col}(A)\\) is</p>
    \\[
    P = A(A^T A)^{-1} A^T.
    \\]
    <p>The projected vector is \\(\\hat{\\mathbf{b}} = P\\mathbf{b} = A\\hat{\\mathbf{x}}\\), and the residual is \\(\\mathbf{r} = (I - P)\\mathbf{b}\\).</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 15.2.4 (Properties of \\(P\\))</div>
    <div class="env-body"><p>The projection matrix \\(P = A(A^TA)^{-1}A^T\\) satisfies:</p>
    <ol>
    <li>\\(P^2 = P\\) (idempotent: projecting twice is the same as projecting once).</li>
    <li>\\(P^T = P\\) (symmetric).</li>
    <li>\\(\\operatorname{rank}(P) = n\\) (rank equals the dimension of the column space).</li>
    <li>\\(I - P\\) is the projection onto \\(\\operatorname{Col}(A)^\\perp = \\operatorname{Null}(A^T)\\).</li>
    </ol></div>
</div>

<h3>Worked Example</h3>

<div class="env-block example">
    <div class="env-title">Example 15.2.5</div>
    <div class="env-body"><p>Returning to Example 15.1.2: fit a line \\(y = c_0 + c_1 x\\) through \\((0,1)\\), \\((1,3)\\), \\((2,4)\\).</p>
    <p>\\(A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix}\\), \\(\\mathbf{b} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 4 \\end{pmatrix}\\).</p>
    \\[
    A^T A = \\begin{pmatrix} 3 & 3 \\\\ 3 & 5 \\end{pmatrix}, \\qquad A^T \\mathbf{b} = \\begin{pmatrix} 8 \\\\ 11 \\end{pmatrix}.
    \\]
    \\[
    \\hat{\\mathbf{x}} = \\begin{pmatrix} 3 & 3 \\\\ 3 & 5 \\end{pmatrix}^{-1} \\begin{pmatrix} 8 \\\\ 11 \\end{pmatrix} = \\frac{1}{6} \\begin{pmatrix} 5 & -3 \\\\ -3 & 3 \\end{pmatrix} \\begin{pmatrix} 8 \\\\ 11 \\end{pmatrix} = \\frac{1}{6} \\begin{pmatrix} 7 \\\\ 9 \\end{pmatrix} = \\begin{pmatrix} 7/6 \\\\ 3/2 \\end{pmatrix}.
    \\]
    <p>The best-fit line is \\(y = \\frac{7}{6} + \\frac{3}{2}x\\).</p></div>
</div>

<div class="env-block warning">
    <div class="env-title">Numerical Warning</div>
    <div class="env-body"><p>Although the formula \\(\\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}\\) is elegant, forming \\(A^T A\\) explicitly is numerically dangerous. The condition number of \\(A^T A\\) is the <em>square</em> of the condition number of \\(A\\): \\(\\kappa(A^T A) = \\kappa(A)^2\\). This means significant precision is lost. The QR approach (next section) avoids this squaring.</p></div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Find the least squares solution to \\(\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\\\ 1 & 0 \\end{pmatrix} \\mathbf{x} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 3 \\end{pmatrix}\\).',
                    hint: 'Form \\(A^T A\\) and \\(A^T \\mathbf{b}\\), then solve \\(A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}\\).',
                    solution: '\\(A^T A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}\\), \\(A^T \\mathbf{b} = \\begin{pmatrix} 9 \\\\ 2 \\end{pmatrix}\\). So \\(\\hat{\\mathbf{x}} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}\\). The residual is \\(\\mathbf{r} = (4,2,3)^T - (4,2,3)^T = (0,0,0)^T\\). In this case the system actually has an exact solution!'
                },
                {
                    question: 'Prove that \\(P = A(A^TA)^{-1}A^T\\) is idempotent: \\(P^2 = P\\).',
                    hint: 'Multiply \\(P\\) by itself and simplify using \\((A^TA)^{-1}(A^TA) = I\\).',
                    solution: '\\(P^2 = A(A^TA)^{-1}A^T \\cdot A(A^TA)^{-1}A^T = A(A^TA)^{-1}(A^TA)(A^TA)^{-1}A^T = A(A^TA)^{-1}A^T = P\\).'
                },
                {
                    question: 'Show that the least squares error satisfies \\(\\|\\mathbf{r}\\|^2 = \\|\\mathbf{b}\\|^2 - \\|A\\hat{\\mathbf{x}}\\|^2\\).',
                    hint: 'Use \\(\\mathbf{b} = A\\hat{\\mathbf{x}} + \\mathbf{r}\\) and the fact that \\(A\\hat{\\mathbf{x}} \\perp \\mathbf{r}\\).',
                    solution: '\\(\\|\\mathbf{b}\\|^2 = \\|A\\hat{\\mathbf{x}} + \\mathbf{r}\\|^2 = \\|A\\hat{\\mathbf{x}}\\|^2 + 2(A\\hat{\\mathbf{x}})^T\\mathbf{r} + \\|\\mathbf{r}\\|^2\\). Since \\(\\mathbf{r} \\perp \\operatorname{Col}(A)\\), the cross term \\((A\\hat{\\mathbf{x}})^T\\mathbf{r} = 0\\). Rearranging: \\(\\|\\mathbf{r}\\|^2 = \\|\\mathbf{b}\\|^2 - \\|A\\hat{\\mathbf{x}}\\|^2\\). This is the Pythagorean theorem applied to the orthogonal decomposition \\(\\mathbf{b} = \\hat{\\mathbf{b}} + \\mathbf{r}\\).'
                },
                {
                    question: 'Find the projection matrix \\(P\\) onto \\(\\operatorname{Col}(A)\\) where \\(A = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\).',
                    hint: 'Here \\(A\\) is \\(3 \\times 1\\), so \\(A^TA\\) is a scalar.',
                    solution: '\\(A^TA = 9\\), so \\(P = \\frac{1}{9}AA^T = \\frac{1}{9}\\begin{pmatrix} 1&2&2\\\\2&4&4\\\\2&4&4\\end{pmatrix}\\). Check: \\(P^2 = \\frac{1}{81}\\begin{pmatrix}1&2&2\\\\2&4&4\\\\2&4&4\\end{pmatrix}\\begin{pmatrix}1&2&2\\\\2&4&4\\\\2&4&4\\end{pmatrix} = \\frac{9}{81}\\begin{pmatrix}1&2&2\\\\2&4&4\\\\2&4&4\\end{pmatrix} = P\\). \\(\\checkmark\\)'
                },
                {
                    question: 'If \\(A\\) does not have full column rank, the normal equations \\(A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}\\) still have solutions, but they are not unique. Explain why, and describe the set of all solutions.',
                    hint: 'What is \\(\\operatorname{Null}(A^TA)\\) when \\(A\\) does not have full column rank?',
                    solution: 'When \\(A\\) has rank \\(r < n\\), \\(\\operatorname{Null}(A^TA) = \\operatorname{Null}(A) \\neq \\{\\mathbf{0}\\}\\). The normal equations are consistent (since \\(A^T\\mathbf{b} \\in \\operatorname{Col}(A^TA) = \\operatorname{Col}(A^T)\\)), so there is at least one solution \\(\\hat{\\mathbf{x}}_0\\). The general solution is \\(\\hat{\\mathbf{x}} = \\hat{\\mathbf{x}}_0 + \\mathbf{z}\\) where \\(\\mathbf{z} \\in \\operatorname{Null}(A)\\). All these solutions give the same projected vector \\(A\\hat{\\mathbf{x}} = A\\hat{\\mathbf{x}}_0\\). The unique minimum-norm solution is found using the pseudoinverse: \\(\\hat{\\mathbf{x}} = A^+ \\mathbf{b}\\).'
                }
            ]
        },

        // ========== SECTION 3: Least Squares via QR ==========
        {
            id: 'sec15-3-ls-via-qr',
            title: 'Least Squares via QR',
            content: `
<h2>15.3 Least Squares via QR</h2>

<p>The normal equations \\(A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}\\) provide a clean formula, but forming the product \\(A^T A\\) squares the condition number. The QR factorization from Chapter 14 offers a numerically superior alternative.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 15.3.1 (Least Squares via QR)</div>
    <div class="env-body"><p>Let \\(A = QR\\) be the (thin) QR factorization of \\(A\\) (\\(Q\\) is \\(m \\times n\\) with orthonormal columns, \\(R\\) is \\(n \\times n\\) upper triangular with positive diagonal). Then the least squares solution is</p>
    \\[
    \\hat{\\mathbf{x}} = R^{-1} Q^T \\mathbf{b},
    \\]
    <p>or equivalently, solve the triangular system \\(R \\hat{\\mathbf{x}} = Q^T \\mathbf{b}\\) by back-substitution.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Substitute \\(A = QR\\) into the normal equations:</p>
    \\[
    A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b} \\quad \\Longrightarrow \\quad (QR)^T(QR) \\hat{\\mathbf{x}} = (QR)^T \\mathbf{b} \\quad \\Longrightarrow \\quad R^T \\underbrace{Q^T Q}_{I} R \\hat{\\mathbf{x}} = R^T Q^T \\mathbf{b}.
    \\]
    <p>Since \\(R\\) is invertible (positive diagonal), \\(R^T\\) is also invertible. Cancel \\(R^T\\):</p>
    \\[
    R \\hat{\\mathbf{x}} = Q^T \\mathbf{b}.
    \\]
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Why QR is Better</div>
    <div class="env-body"><p>The QR approach has condition number \\(\\kappa(R) = \\kappa(A)\\), whereas the normal equations have condition number \\(\\kappa(A^T A) = \\kappa(A)^2\\). For a matrix with \\(\\kappa(A) = 10^6\\), the normal equations lose about 12 digits of precision (double precision has about 16), leaving only 4 accurate digits. The QR approach loses only 6 digits, keeping 10 accurate digits. This difference can be critical in practice.</p></div>
</div>

<h3>Algorithm Summary</h3>

<div class="env-block definition">
    <div class="env-title">Algorithm 15.3.2 (QR Least Squares)</div>
    <div class="env-body">
    <ol>
    <li>Compute \\(A = QR\\) (using Householder or modified Gram-Schmidt).</li>
    <li>Form \\(\\mathbf{d} = Q^T \\mathbf{b}\\) (matrix-vector multiply).</li>
    <li>Solve \\(R \\hat{\\mathbf{x}} = \\mathbf{d}\\) by back-substitution.</li>
    </ol>
    <p>Cost: \\(\\sim 2mn^2\\) flops for QR, plus \\(\\sim 2mn\\) for step 2, plus \\(\\sim n^2\\) for step 3.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 15.3.3</div>
    <div class="env-body"><p>Solve the least squares problem from Example 15.2.5 using QR.</p>
    <p>\\(A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix}\\), \\(\\mathbf{b} = (1, 3, 4)^T\\).</p>
    <p>Compute QR: \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{3}}(1,1,1)^T\\), and (from Gram-Schmidt) \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(-2, -1+1, 2)\\). Let us redo carefully.</p>
    <p>\\(\\mathbf{a}_1 = (1,1,1)^T\\), \\(\\|\\mathbf{a}_1\\| = \\sqrt{3}\\), \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{3}}(1,1,1)^T\\).</p>
    <p>\\(r_{12} = \\langle \\mathbf{a}_2, \\mathbf{q}_1 \\rangle = \\frac{0+1+2}{\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}\\).</p>
    <p>\\(\\mathbf{u}_2 = (0,1,2)^T - \\sqrt{3} \\cdot \\frac{1}{\\sqrt{3}}(1,1,1)^T = (0,1,2)^T - (1,1,1)^T = (-1, 0, 1)^T\\).</p>
    <p>\\(\\|\\mathbf{u}_2\\| = \\sqrt{2}\\), \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{2}}(-1, 0, 1)^T\\).</p>
    <p>So \\(R = \\begin{pmatrix} \\sqrt{3} & \\sqrt{3} \\\\ 0 & \\sqrt{2} \\end{pmatrix}\\).</p>
    <p>Step 2: \\(\\mathbf{d} = Q^T \\mathbf{b} = \\begin{pmatrix} \\frac{1+3+4}{\\sqrt{3}} \\\\ \\frac{-1+0+4}{\\sqrt{2}} \\end{pmatrix} = \\begin{pmatrix} 8/\\sqrt{3} \\\\ 3/\\sqrt{2} \\end{pmatrix}\\).</p>
    <p>Step 3: Back-substitution in \\(R\\hat{\\mathbf{x}} = \\mathbf{d}\\): \\(\\hat{x}_2 = \\frac{3/\\sqrt{2}}{\\sqrt{2}} = \\frac{3}{2}\\), \\(\\hat{x}_1 = \\frac{8/\\sqrt{3} - \\sqrt{3} \\cdot 3/2}{\\sqrt{3}} = \\frac{8/\\sqrt{3} - 3\\sqrt{3}/2}{\\sqrt{3}} = \\frac{8-9/2}{3} = \\frac{7/2}{3} = \\frac{7}{6}\\).</p>
    <p>Same answer as before: \\(\\hat{\\mathbf{x}} = (7/6, 3/2)^T\\). \\(\\checkmark\\)</p></div>
</div>

<h3>Computing the Least Squares Error</h3>

<div class="env-block proposition">
    <div class="env-title">Proposition 15.3.4</div>
    <div class="env-body"><p>Using the full QR factorization \\(A = \\hat{Q}\\hat{R}\\) (where \\(\\hat{Q}\\) is \\(m \\times m\\) orthogonal and \\(\\hat{R}\\) is \\(m \\times n\\)), the least squares error is</p>
    \\[
    \\|\\mathbf{r}\\| = \\sqrt{d_{n+1}^2 + d_{n+2}^2 + \\cdots + d_m^2}
    \\]
    <p>where \\(\\mathbf{d} = \\hat{Q}^T \\mathbf{b}\\). Only the last \\(m - n\\) entries of \\(\\mathbf{d}\\) contribute to the residual.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Since \\(\\hat{Q}\\) is orthogonal, \\(\\|\\mathbf{b} - A\\mathbf{x}\\| = \\|\\hat{Q}^T\\mathbf{b} - \\hat{Q}^T A\\mathbf{x}\\| = \\|\\mathbf{d} - \\hat{R}\\mathbf{x}\\|\\). Write \\(\\hat{R} = \\binom{R}{0}\\) and \\(\\mathbf{d} = \\binom{\\mathbf{d}_1}{\\mathbf{d}_2}\\) where \\(\\mathbf{d}_1\\) has \\(n\\) entries. Then</p>
    \\[
    \\|\\mathbf{d} - \\hat{R}\\mathbf{x}\\|^2 = \\|\\mathbf{d}_1 - R\\mathbf{x}\\|^2 + \\|\\mathbf{d}_2\\|^2.
    \\]
    <p>The first term is minimized (to zero) by \\(R\\hat{\\mathbf{x}} = \\mathbf{d}_1\\), leaving \\(\\|\\mathbf{r}\\| = \\|\\mathbf{d}_2\\|\\).</p>
    <div class="qed">&#8718;</div></div>
</div>
`,
            visualizations: [],
            exercises: [
                {
                    question: 'Using QR, solve the least squares problem \\(\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\mathbf{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}\\).',
                    hint: 'First apply Gram-Schmidt to the columns of \\(A\\), then compute \\(\\mathbf{d} = Q^T \\mathbf{b}\\), and solve \\(R\\hat{\\mathbf{x}} = \\mathbf{d}\\).',
                    solution: '\\(\\mathbf{a}_1 = (1,0,1)^T\\), \\(\\|\\mathbf{a}_1\\| = \\sqrt{2}\\), \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1,0,1)^T\\). \\(r_{12} = \\frac{1}{\\sqrt{2}}(1+0+0) = \\frac{1}{\\sqrt{2}}\\). \\(\\mathbf{u}_2 = (1,1,0)^T - \\frac{1}{2}(1,0,1)^T = (\\frac{1}{2}, 1, -\\frac{1}{2})^T\\). \\(\\|\\mathbf{u}_2\\| = \\sqrt{\\frac{1}{4}+1+\\frac{1}{4}} = \\sqrt{\\frac{3}{2}}\\). \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1,2,-1)^T\\). \\(R = \\begin{pmatrix}\\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & \\sqrt{3/2}\\end{pmatrix}\\). \\(\\mathbf{d} = Q^T\\mathbf{b} = (\\frac{3+0+2}{\\sqrt{2}}, \\frac{3+2-2}{\\sqrt{6}})^T = (\\frac{5}{\\sqrt{2}}, \\frac{3}{\\sqrt{6}})^T\\). \\(\\hat{x}_2 = \\frac{3/\\sqrt{6}}{\\sqrt{3/2}} = \\frac{3}{\\sqrt{6}} \\cdot \\sqrt{\\frac{2}{3}} = 1\\). \\(\\hat{x}_1 = \\frac{5/\\sqrt{2} - 1/\\sqrt{2}}{\\sqrt{2}} = \\frac{4/\\sqrt{2}}{\\sqrt{2}} = 2\\). \\(\\hat{\\mathbf{x}} = (2, 1)^T\\).'
                },
                {
                    question: 'Explain why solving \\(R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}\\) by back-substitution is preferable to computing \\(R^{-1}\\) explicitly.',
                    hint: 'Think about numerical stability and operation count.',
                    solution: 'Back-substitution costs only \\(O(n^2)\\) operations and introduces minimal rounding errors. Computing \\(R^{-1}\\) explicitly requires \\(O(n^3)\\) operations and can amplify rounding errors. Furthermore, we never actually need the full inverse; we only need \\(R^{-1}\\) applied to one specific vector.'
                },
                {
                    question: 'Show that the condition number \\(\\kappa(R)\\) equals \\(\\kappa(A)\\) (assuming the 2-norm).',
                    hint: 'Use the relationship between singular values and the QR factorization.',
                    solution: 'The singular values of \\(A\\) are the square roots of the eigenvalues of \\(A^T A = R^T Q^T Q R = R^T R\\). The singular values of \\(R\\) are also the square roots of the eigenvalues of \\(R^T R\\). Therefore \\(\\sigma_i(A) = \\sigma_i(R)\\) for all \\(i\\), and \\(\\kappa(A) = \\sigma_{\\max}(A)/\\sigma_{\\min}(A) = \\sigma_{\\max}(R)/\\sigma_{\\min}(R) = \\kappa(R)\\).'
                },
                {
                    question: 'Using Proposition 15.3.4, compute the least squares error for the problem in Example 15.3.3.',
                    hint: 'You need the full QR: extend \\(Q\\) to a \\(3 \\times 3\\) orthogonal matrix.',
                    solution: 'We had \\(\\mathbf{q}_1 = \\frac{1}{\\sqrt{3}}(1,1,1)^T\\), \\(\\mathbf{q}_2 = \\frac{1}{\\sqrt{2}}(-1,0,1)^T\\). A third orthonormal vector is \\(\\mathbf{q}_3 = \\frac{1}{\\sqrt{6}}(1,-2,1)^T\\). Then \\(d_3 = \\mathbf{q}_3^T \\mathbf{b} = \\frac{1}{\\sqrt{6}}(1 - 6 + 4) = \\frac{-1}{\\sqrt{6}}\\). The least squares error is \\(\\|\\mathbf{r}\\| = |d_3| = \\frac{1}{\\sqrt{6}} \\approx 0.408\\).'
                },
                {
                    question: 'What happens in the QR least squares approach when \\(A\\) does not have full column rank (i.e., \\(R\\) has a zero on the diagonal)?',
                    hint: 'If \\(r_{kk} = 0\\), the system \\(R\\hat{\\mathbf{x}} = \\mathbf{d}\\) is not uniquely solvable.',
                    solution: 'When \\(A\\) is rank-deficient, one or more diagonal entries of \\(R\\) are zero (or very small). The system \\(R\\hat{\\mathbf{x}} = \\mathbf{d}\\) becomes underdetermined. In practice, one uses column-pivoted QR (\\(AP = QR\\), where \\(P\\) is a permutation matrix) or the SVD to handle rank deficiency. Column pivoting rearranges columns so that small diagonal entries of \\(R\\) appear last, making the rank deficiency apparent.'
                }
            ]
        },

        // ========== SECTION 4: Linear Regression ==========
        {
            id: 'sec15-4-regression',
            title: 'Linear Regression',
            content: `
<h2>15.4 Linear Regression</h2>

<p>The most common application of least squares is <strong>linear regression</strong>: fitting a linear model to data. Given data points \\((x_1, y_1), \\ldots, (x_m, y_m)\\), we seek a function of a prescribed form that best approximates the data in the least squares sense.</p>

<h3>Fitting a Line</h3>

<div class="env-block definition">
    <div class="env-title">Definition 15.4.1 (Simple Linear Regression)</div>
    <div class="env-body"><p>Given data \\((x_1, y_1), \\ldots, (x_m, y_m)\\), <strong>simple linear regression</strong> finds the line \\(y = c_0 + c_1 x\\) that minimizes</p>
    \\[
    \\sum_{i=1}^m (y_i - c_0 - c_1 x_i)^2.
    \\]
    <p>This is the least squares problem \\(A\\mathbf{c} = \\mathbf{y}\\) with</p>
    \\[
    A = \\begin{pmatrix} 1 & x_1 \\\\ 1 & x_2 \\\\ \\vdots & \\vdots \\\\ 1 & x_m \\end{pmatrix}, \\qquad \\mathbf{y} = \\begin{pmatrix} y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_m \\end{pmatrix}.
    \\]</div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 15.4.2 (Closed-Form Regression Coefficients)</div>
    <div class="env-body"><p>For simple linear regression, the normal equations yield</p>
    \\[
    c_1 = \\frac{m \\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{m \\sum x_i^2 - (\\sum x_i)^2}, \\qquad c_0 = \\bar{y} - c_1 \\bar{x},
    \\]
    <p>where \\(\\bar{x} = \\frac{1}{m}\\sum x_i\\) and \\(\\bar{y} = \\frac{1}{m}\\sum y_i\\) are the sample means.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>The normal equations \\(A^TA \\hat{\\mathbf{c}} = A^T \\mathbf{y}\\) become</p>
    \\[
    \\begin{pmatrix} m & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{pmatrix} \\begin{pmatrix} c_0 \\\\ c_1 \\end{pmatrix} = \\begin{pmatrix} \\sum y_i \\\\ \\sum x_i y_i \\end{pmatrix}.
    \\]
    <p>From the first equation: \\(c_0 = \\bar{y} - c_1 \\bar{x}\\). Substituting into the second and solving for \\(c_1\\) gives the stated formula.</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="viz-placeholder" data-viz="viz-line-fit"></div>

<h3>Polynomial Regression</h3>

<p>To fit a polynomial \\(y = c_0 + c_1 x + c_2 x^2 + \\cdots + c_k x^k\\) to data, use the <strong>Vandermonde matrix</strong>:</p>

<div class="env-block definition">
    <div class="env-title">Definition 15.4.3 (Vandermonde Matrix)</div>
    <div class="env-body"><p>For polynomial regression of degree \\(k\\), the design matrix is the <strong>Vandermonde matrix</strong></p>
    \\[
    A = \\begin{pmatrix} 1 & x_1 & x_1^2 & \\cdots & x_1^k \\\\ 1 & x_2 & x_2^2 & \\cdots & x_2^k \\\\ \\vdots & & & & \\vdots \\\\ 1 & x_m & x_m^2 & \\cdots & x_m^k \\end{pmatrix}.
    \\]
    <p>The least squares solution \\(\\hat{\\mathbf{c}}\\) gives the coefficients of the best-fit polynomial.</p></div>
</div>

<div class="env-block warning">
    <div class="env-title">Ill-Conditioning</div>
    <div class="env-body"><p>Vandermonde matrices become extremely ill-conditioned as the degree \\(k\\) increases. The columns \\(1, x, x^2, \\ldots\\) become nearly linearly dependent. For high-degree fits, use orthogonal polynomials (Legendre, Chebyshev) instead of the monomial basis, or use QR factorization.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 15.4.4 (Quadratic fit)</div>
    <div class="env-body"><p>Fit \\(y = c_0 + c_1 x + c_2 x^2\\) to the data \\((-1, 1)\\), \\((0, 0)\\), \\((1, 1)\\), \\((2, 4)\\).</p>
    \\[
    A = \\begin{pmatrix} 1 & -1 & 1 \\\\ 1 & 0 & 0 \\\\ 1 & 1 & 1 \\\\ 1 & 2 & 4 \\end{pmatrix}, \\quad \\mathbf{y} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 4 \\end{pmatrix}.
    \\]
    \\[
    A^TA = \\begin{pmatrix} 4 & 2 & 6 \\\\ 2 & 6 & 8 \\\\ 6 & 8 & 18 \\end{pmatrix}, \\quad A^T\\mathbf{y} = \\begin{pmatrix} 6 \\\\ 9 \\\\ 18 \\end{pmatrix}.
    \\]
    <p>Solving: \\(\\hat{\\mathbf{c}} = (0, 0.5, 1)^T\\), so the best-fit parabola is \\(y = 0.5x + x^2\\). (This happens to fit the data nearly exactly.)</p></div>
</div>

<h3>The Coefficient of Determination \\(R^2\\)</h3>

<div class="env-block definition">
    <div class="env-title">Definition 15.4.5 (\\(R^2\\))</div>
    <div class="env-body"><p>The <strong>coefficient of determination</strong> measures how well the regression explains the variation in the data:</p>
    \\[
    R^2 = 1 - \\frac{\\|\\mathbf{y} - A\\hat{\\mathbf{c}}\\|^2}{\\|\\mathbf{y} - \\bar{y}\\mathbf{1}\\|^2} = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}}.
    \\]
    <p>Here \\(\\text{SS}_{\\text{tot}} = \\sum(y_i - \\bar{y})^2\\) is the total sum of squares and \\(\\text{SS}_{\\text{res}} = \\sum(y_i - \\hat{y}_i)^2\\) is the residual sum of squares. We always have \\(0 \\leq R^2 \\leq 1\\), with \\(R^2 = 1\\) indicating a perfect fit.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-residuals"></div>
`,
            visualizations: [
                {
                    id: 'viz-line-fit',
                    title: 'Interactive Least Squares Line Fit',
                    description: 'Drag the data points to see the best-fit line update in real time. The dashed vertical lines show the residuals. The regression coefficients and \\(R^2\\) are displayed.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40, originX: 80, originY: 320 });

                        // Initial data points
                        const pts = [
                            viz.addDraggable('p0', 1, 2, viz.colors.blue, 7, (wx, wy) => { pts[0].x = wx; pts[0].y = wy; }),
                            viz.addDraggable('p1', 2, 3.5, viz.colors.blue, 7, (wx, wy) => { pts[1].x = wx; pts[1].y = wy; }),
                            viz.addDraggable('p2', 3, 3, viz.colors.blue, 7, (wx, wy) => { pts[2].x = wx; pts[2].y = wy; }),
                            viz.addDraggable('p3', 4, 5, viz.colors.blue, 7, (wx, wy) => { pts[3].x = wx; pts[3].y = wy; }),
                            viz.addDraggable('p4', 5, 4.5, viz.colors.blue, 7, (wx, wy) => { pts[4].x = wx; pts[4].y = wy; }),
                            viz.addDraggable('p5', 6, 6, viz.colors.blue, 7, (wx, wy) => { pts[5].x = wx; pts[5].y = wy; })
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const m = pts.length;
                            let sx = 0, sy = 0, sxy = 0, sx2 = 0;
                            for (const p of pts) { sx += p.x; sy += p.y; sxy += p.x * p.y; sx2 += p.x * p.x; }

                            const denom = m * sx2 - sx * sx;
                            if (Math.abs(denom) < 1e-10) { viz.drawDraggables(); return; }

                            const c1 = (m * sxy - sx * sy) / denom;
                            const c0 = (sy - c1 * sx) / m;

                            // Draw the line
                            viz.drawFunction(x => c0 + c1 * x, -1, 12, viz.colors.teal, 2.5);

                            // Draw residuals and points
                            let ssres = 0, sstot = 0;
                            const ybar = sy / m;
                            for (const p of pts) {
                                const yhat = c0 + c1 * p.x;
                                viz.drawSegment(p.x, p.y, p.x, yhat, viz.colors.red + 'aa', 1.5, true);
                                ssres += (p.y - yhat) * (p.y - yhat);
                                sstot += (p.y - ybar) * (p.y - ybar);
                            }

                            const R2 = sstot > 1e-10 ? 1 - ssres / sstot : 1;

                            // Info panel
                            viz.screenText('y = ' + c0.toFixed(2) + ' + ' + c1.toFixed(2) + 'x', 12, 20, viz.colors.teal, 13, 'left', 'top');
                            viz.screenText('R\u00B2 = ' + R2.toFixed(4), 12, 38, viz.colors.white, 13, 'left', 'top');
                            viz.screenText('SS_res = ' + ssres.toFixed(3), 12, 56, viz.colors.red, 11, 'left', 'top');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                },
                {
                    id: 'viz-residuals',
                    title: 'Residual Visualizer',
                    description: 'Toggle between line fit and quadratic fit. The squared residuals are shown as red squares attached to each data point, illustrating what "least squares" minimizes.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35, originX: 80, originY: 310 });

                        let degree = 1;
                        VizEngine.createButton(controls, 'Line (deg 1)', () => { degree = 1; });
                        VizEngine.createButton(controls, 'Quadratic (deg 2)', () => { degree = 2; });

                        const dataPoints = [
                            viz.addDraggable('d0', 1, 2.5, viz.colors.blue, 7, (wx, wy) => { dataPoints[0].x = wx; dataPoints[0].y = wy; }),
                            viz.addDraggable('d1', 2, 1, viz.colors.blue, 7, (wx, wy) => { dataPoints[1].x = wx; dataPoints[1].y = wy; }),
                            viz.addDraggable('d2', 3, 3, viz.colors.blue, 7, (wx, wy) => { dataPoints[2].x = wx; dataPoints[2].y = wy; }),
                            viz.addDraggable('d3', 5, 2, viz.colors.blue, 7, (wx, wy) => { dataPoints[3].x = wx; dataPoints[3].y = wy; }),
                            viz.addDraggable('d4', 6, 5, viz.colors.blue, 7, (wx, wy) => { dataPoints[4].x = wx; dataPoints[4].y = wy; }),
                            viz.addDraggable('d5', 8, 6, viz.colors.blue, 7, (wx, wy) => { dataPoints[5].x = wx; dataPoints[5].y = wy; }),
                            viz.addDraggable('d6', 9, 4, viz.colors.blue, 7, (wx, wy) => { dataPoints[6].x = wx; dataPoints[6].y = wy; })
                        ];

                        function solve(xs, ys, deg) {
                            const m = xs.length;
                            const n = deg + 1;
                            // Build A^T A and A^T y
                            const ATA = Array.from({length: n}, () => new Array(n).fill(0));
                            const ATy = new Array(n).fill(0);
                            for (let i = 0; i < m; i++) {
                                for (let j = 0; j < n; j++) {
                                    ATy[j] += Math.pow(xs[i], j) * ys[i];
                                    for (let k = 0; k < n; k++) {
                                        ATA[j][k] += Math.pow(xs[i], j + k);
                                    }
                                }
                            }
                            // Solve by Gaussian elimination (small system)
                            for (let col = 0; col < n; col++) {
                                let maxRow = col;
                                for (let row = col + 1; row < n; row++) {
                                    if (Math.abs(ATA[row][col]) > Math.abs(ATA[maxRow][col])) maxRow = row;
                                }
                                [ATA[col], ATA[maxRow]] = [ATA[maxRow], ATA[col]];
                                [ATy[col], ATy[maxRow]] = [ATy[maxRow], ATy[col]];
                                if (Math.abs(ATA[col][col]) < 1e-12) continue;
                                for (let row = col + 1; row < n; row++) {
                                    const f = ATA[row][col] / ATA[col][col];
                                    for (let k = col; k < n; k++) ATA[row][k] -= f * ATA[col][k];
                                    ATy[row] -= f * ATy[col];
                                }
                            }
                            const c = new Array(n).fill(0);
                            for (let i = n - 1; i >= 0; i--) {
                                let s = ATy[i];
                                for (let j = i + 1; j < n; j++) s -= ATA[i][j] * c[j];
                                c[i] = Math.abs(ATA[i][i]) > 1e-12 ? s / ATA[i][i] : 0;
                            }
                            return c;
                        }

                        function evalPoly(c, x) {
                            let v = 0;
                            for (let i = c.length - 1; i >= 0; i--) v = v * x + c[i];
                            return v;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const xs = dataPoints.map(p => p.x);
                            const ys = dataPoints.map(p => p.y);

                            const c = solve(xs, ys, degree);

                            // Draw the curve
                            viz.drawFunction(x => evalPoly(c, x), -1, 12, viz.colors.teal, 2.5);

                            // Draw residual squares
                            let ssres = 0;
                            for (let i = 0; i < dataPoints.length; i++) {
                                const yhat = evalPoly(c, xs[i]);
                                const r = ys[i] - yhat;
                                ssres += r * r;

                                // Draw the squared residual as a translucent square
                                const side = Math.abs(r);
                                if (side > 0.05) {
                                    const x0 = xs[i], y0 = Math.min(ys[i], yhat);
                                    const sign = r > 0 ? 1 : -1;
                                    viz.drawPolygon(
                                        [[x0, yhat], [x0 + side, yhat], [x0 + side, yhat + sign * side], [x0, yhat + sign * side]],
                                        viz.colors.red + '22', viz.colors.red + '55'
                                    );
                                }

                                // Residual line
                                viz.drawSegment(xs[i], ys[i], xs[i], yhat, viz.colors.red + 'aa', 1.5, true);
                            }

                            viz.screenText('Degree ' + degree + ' fit   \u03A3r\u00B2 = ' + ssres.toFixed(3), 12, 20, viz.colors.white, 13, 'left', 'top');
                            viz.screenText('Red squares = squared residuals (minimized area)', 12, 38, viz.colors.red, 11, 'left', 'top');

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the least squares line \\(y = c_0 + c_1 x\\) for the data \\((1, 2)\\), \\((2, 3)\\), \\((3, 5)\\), \\((4, 4)\\). Compute \\(R^2\\).',
                    hint: 'Use the formulas from Theorem 15.4.2 with \\(m = 4\\).',
                    solution: '\\(\\sum x_i = 10\\), \\(\\sum y_i = 14\\), \\(\\sum x_i^2 = 30\\), \\(\\sum x_iy_i = 39\\). \\(c_1 = \\frac{4 \\cdot 39 - 10 \\cdot 14}{4 \\cdot 30 - 100} = \\frac{156 - 140}{120 - 100} = \\frac{16}{20} = 0.8\\). \\(c_0 = 14/4 - 0.8 \\cdot 10/4 = 3.5 - 2 = 1.5\\). Line: \\(y = 1.5 + 0.8x\\). Predicted: \\(\\hat{y} = (2.3, 3.1, 3.9, 4.7)\\). \\(\\text{SS}_{\\text{res}} = 0.09 + 0.01 + 1.21 + 0.49 = 1.8\\). \\(\\bar{y} = 3.5\\), \\(\\text{SS}_{\\text{tot}} = 2.25 + 0.25 + 2.25 + 0.25 = 5\\). \\(R^2 = 1 - 1.8/5 = 0.64\\).'
                },
                {
                    question: 'Show that the least squares regression line always passes through the centroid \\((\\bar{x}, \\bar{y})\\).',
                    hint: 'Use \\(c_0 = \\bar{y} - c_1 \\bar{x}\\) and evaluate the line at \\(x = \\bar{x}\\).',
                    solution: 'At \\(x = \\bar{x}\\): \\(c_0 + c_1 \\bar{x} = (\\bar{y} - c_1\\bar{x}) + c_1\\bar{x} = \\bar{y}\\). So the point \\((\\bar{x}, \\bar{y})\\) lies exactly on the regression line, regardless of the data.'
                },
                {
                    question: 'If all data points lie exactly on a line, show that \\(R^2 = 1\\).',
                    hint: 'If the data is perfectly linear, what is the residual?',
                    solution: 'If \\(y_i = c_0 + c_1 x_i\\) exactly for all \\(i\\), then the least squares solution recovers \\(c_0, c_1\\) exactly. The residual \\(\\hat{y}_i - y_i = 0\\) for all \\(i\\), so \\(\\text{SS}_{\\text{res}} = 0\\) and \\(R^2 = 1 - 0/\\text{SS}_{\\text{tot}} = 1\\).'
                },
                {
                    question: 'Explain the difference between interpolation and least squares regression. When is each appropriate?',
                    hint: 'How many parameters vs. how many data points?',
                    solution: 'Interpolation uses as many parameters as data points (degree \\(m-1\\) polynomial through \\(m\\) points), passing exactly through every point. Least squares uses fewer parameters than data points, finding the best compromise. Interpolation is appropriate when data is exact (e.g., known function values). Regression is appropriate when data contains noise/measurement error; using fewer parameters prevents overfitting and captures the underlying trend.'
                },
                {
                    question: 'Fit a model \\(y = c_1 \\sin(x) + c_2 \\cos(x)\\) to data \\((0, 1)\\), \\((\\pi/2, 2)\\), \\((\\pi, 0)\\), \\((3\\pi/2, -1)\\). Set up the design matrix \\(A\\).',
                    hint: 'This is still a linear least squares problem because it is linear in the unknowns \\(c_1, c_2\\).',
                    solution: 'The design matrix is \\(A = \\begin{pmatrix} \\sin(0) & \\cos(0) \\\\ \\sin(\\pi/2) & \\cos(\\pi/2) \\\\ \\sin(\\pi) & \\cos(\\pi) \\\\ \\sin(3\\pi/2) & \\cos(3\\pi/2) \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\\\ 0 & -1 \\\\ -1 & 0 \\end{pmatrix}\\). Then \\(A^TA = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\), \\(A^T\\mathbf{y} = \\begin{pmatrix} 0+2+0+1 \\\\ 1+0+0+0 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}\\). So \\(\\hat{\\mathbf{c}} = (3/2, 1/2)^T\\): the best fit is \\(y = \\frac{3}{2}\\sin x + \\frac{1}{2}\\cos x\\).'
                }
            ]
        },

        // ========== SECTION 5: Weighted Least Squares and Regularization ==========
        {
            id: 'sec15-5-weighted-regularization',
            title: 'Weighted Least Squares & Regularization',
            content: `
<h2>15.5 Weighted Least Squares and Regularization</h2>

<p>The ordinary least squares framework assumes that all measurements are equally reliable. In practice, some observations are more precise than others, and some problems are ill-conditioned. This section introduces two important extensions: weighting and regularization.</p>

<h3>Weighted Least Squares</h3>

<div class="env-block definition">
    <div class="env-title">Definition 15.5.1 (Weighted Least Squares)</div>
    <div class="env-body"><p>Given a system \\(A\\mathbf{x} = \\mathbf{b}\\) and a positive definite diagonal weight matrix \\(W = \\operatorname{diag}(w_1, \\ldots, w_m)\\), the <strong>weighted least squares</strong> (WLS) problem minimizes</p>
    \\[
    \\sum_{i=1}^m w_i (b_i - \\mathbf{a}_i^T \\mathbf{x})^2 = \\|W^{1/2}(\\mathbf{b} - A\\mathbf{x})\\|^2.
    \\]
    <p>Observations with larger weights \\(w_i\\) are considered more important (reliable).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 15.5.2 (WLS Normal Equations)</div>
    <div class="env-body"><p>The weighted least squares solution satisfies</p>
    \\[
    A^T W A \\hat{\\mathbf{x}} = A^T W \\mathbf{b}.
    \\]
    <p>Equivalently, this is ordinary least squares applied to the transformed system \\(W^{1/2}A \\mathbf{x} = W^{1/2}\\mathbf{b}\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Define \\(\\tilde{A} = W^{1/2}A\\) and \\(\\tilde{\\mathbf{b}} = W^{1/2}\\mathbf{b}\\). The WLS problem is \\(\\min \\|\\tilde{\\mathbf{b}} - \\tilde{A}\\mathbf{x}\\|^2\\). By the ordinary normal equations: \\(\\tilde{A}^T \\tilde{A} \\hat{\\mathbf{x}} = \\tilde{A}^T \\tilde{\\mathbf{b}}\\), i.e., \\(A^T W A \\hat{\\mathbf{x}} = A^T W \\mathbf{b}\\).</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block intuition">
    <div class="env-title">When to Use WLS</div>
    <div class="env-body"><p>Use weighted least squares when:</p>
    <ul>
    <li>Measurements have different precisions (set \\(w_i = 1/\\sigma_i^2\\) where \\(\\sigma_i\\) is the standard deviation of measurement \\(i\\)).</li>
    <li>You want certain data points to have more influence (e.g., more recent data in time series).</li>
    <li>The error variance is non-constant (heteroskedasticity).</li>
    </ul></div>
</div>

<h3>Regularization: Tikhonov / Ridge Regression</h3>

<p>When \\(A^T A\\) is ill-conditioned (nearly singular), the least squares solution \\(\\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}\\) is very sensitive to small changes in the data. <strong>Regularization</strong> stabilizes the problem by penalizing large solutions.</p>

<div class="env-block definition">
    <div class="env-title">Definition 15.5.3 (Tikhonov Regularization / Ridge Regression)</div>
    <div class="env-body"><p>The <strong>Tikhonov-regularized</strong> (or <strong>ridge regression</strong>) solution minimizes</p>
    \\[
    \\|\\mathbf{b} - A\\mathbf{x}\\|^2 + \\lambda \\|\\mathbf{x}\\|^2,
    \\]
    <p>where \\(\\lambda > 0\\) is the <strong>regularization parameter</strong>. The solution satisfies</p>
    \\[
    (A^T A + \\lambda I) \\hat{\\mathbf{x}}_\\lambda = A^T \\mathbf{b}.
    \\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Derivation</div>
    <div class="env-body"><p>Define \\(f(\\mathbf{x}) = \\|\\mathbf{b} - A\\mathbf{x}\\|^2 + \\lambda\\|\\mathbf{x}\\|^2 = \\mathbf{b}^T\\mathbf{b} - 2\\mathbf{x}^T A^T \\mathbf{b} + \\mathbf{x}^T(A^T A + \\lambda I)\\mathbf{x}\\).</p>
    <p>Setting \\(\\nabla f = -2A^T\\mathbf{b} + 2(A^T A + \\lambda I)\\mathbf{x} = \\mathbf{0}\\) gives the result. Since \\(A^T A + \\lambda I\\) is positive definite for \\(\\lambda > 0\\), the solution is always unique.</p>
    <div class="qed">&#8718;</div></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 15.5.4 (Bias-Variance Tradeoff)</div>
    <div class="env-body"><p>As \\(\\lambda\\) increases:</p>
    <ul>
    <li>\\(\\hat{\\mathbf{x}}_\\lambda \\to \\mathbf{0}\\): the solution shrinks toward zero (more <strong>bias</strong>).</li>
    <li>\\(\\kappa(A^T A + \\lambda I)\\) decreases: the solution becomes less sensitive to noise (less <strong>variance</strong>).</li>
    </ul>
    <p>The optimal \\(\\lambda\\) balances these effects. In practice, it is often chosen by cross-validation.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-regularization"></div>

<div class="env-block example">
    <div class="env-title">Example 15.5.5</div>
    <div class="env-body"><p>Consider \\(A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1.001 \\end{pmatrix}\\), \\(\\mathbf{b} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}\\).</p>
    <p>\\(A^TA = \\begin{pmatrix} 2 & 2.001 \\\\ 2.001 & 2.002001 \\end{pmatrix}\\), \\(\\kappa(A^TA) \\approx 8 \\times 10^6\\).</p>
    <p>The ordinary LS solution is highly sensitive to perturbations in \\(\\mathbf{b}\\). With \\(\\lambda = 0.01\\):</p>
    \\[
    (A^TA + 0.01 I) = \\begin{pmatrix} 2.01 & 2.001 \\\\ 2.001 & 2.012 \\end{pmatrix}, \\quad \\kappa \\approx 800.
    \\]
    <p>The condition number drops from millions to hundreds, making the solution robust.</p></div>
</div>

<h3>Other Regularization Methods</h3>

<div class="env-block remark">
    <div class="env-title">Beyond Ridge Regression</div>
    <div class="env-body"><p>Tikhonov / ridge regularization penalizes \\(\\|\\mathbf{x}\\|^2\\) (the \\(\\ell^2\\) norm squared). Other choices of penalty lead to different methods:</p>
    <ul>
    <li><strong>LASSO</strong> (\\(\\ell^1\\) penalty): minimizes \\(\\|\\mathbf{b} - A\\mathbf{x}\\|^2 + \\lambda \\|\\mathbf{x}\\|_1\\). This promotes <em>sparsity</em> (many components of \\(\\hat{\\mathbf{x}}\\) become exactly zero), making it useful for feature selection.</li>
    <li><strong>Elastic net</strong>: combines \\(\\ell^1\\) and \\(\\ell^2\\) penalties.</li>
    <li><strong>Truncated SVD</strong>: keeps only the largest singular values, discarding small ones that amplify noise.</li>
    </ul></div>
</div>
`,
            visualizations: [
                {
                    id: 'viz-regularization',
                    title: 'Ridge Regression: Effect of \\(\\lambda\\)',
                    description: 'Adjust \\(\\lambda\\) to see how regularization changes the fit. With \\(\\lambda = 0\\), you get ordinary least squares. As \\(\\lambda\\) increases, the curve flattens (coefficients shrink toward zero). Drag points to add noise.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 35, originX: 60, originY: 290 });

                        let lambda = 0;
                        VizEngine.createSlider(controls, '\u03BB', 0, 5, 0, 0.1, (val) => { lambda = val; });

                        const pts = [
                            viz.addDraggable('r0', 0.5, 1, viz.colors.blue, 6, (wx, wy) => { pts[0].x = wx; pts[0].y = wy; }),
                            viz.addDraggable('r1', 1.5, 3, viz.colors.blue, 6, (wx, wy) => { pts[1].x = wx; pts[1].y = wy; }),
                            viz.addDraggable('r2', 2.5, 2, viz.colors.blue, 6, (wx, wy) => { pts[2].x = wx; pts[2].y = wy; }),
                            viz.addDraggable('r3', 3.5, 5, viz.colors.blue, 6, (wx, wy) => { pts[3].x = wx; pts[3].y = wy; }),
                            viz.addDraggable('r4', 5, 4, viz.colors.blue, 6, (wx, wy) => { pts[4].x = wx; pts[4].y = wy; }),
                            viz.addDraggable('r5', 6, 5.5, viz.colors.blue, 6, (wx, wy) => { pts[5].x = wx; pts[5].y = wy; }),
                            viz.addDraggable('r6', 7.5, 7, viz.colors.blue, 6, (wx, wy) => { pts[6].x = wx; pts[6].y = wy; }),
                            viz.addDraggable('r7', 9, 6, viz.colors.blue, 6, (wx, wy) => { pts[7].x = wx; pts[7].y = wy; })
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const m = pts.length;
                            // Build A^T A + lambda I and A^T y for linear fit
                            let sx = 0, sy = 0, sx2 = 0, sxy = 0;
                            for (const p of pts) { sx += p.x; sy += p.y; sx2 += p.x*p.x; sxy += p.x*p.y; }

                            // (A^TA + lambda I) c = A^T y
                            const a00 = m + lambda, a01 = sx;
                            const a10 = sx, a11 = sx2 + lambda;
                            const b0 = sy, b1 = sxy;

                            const det = a00 * a11 - a01 * a10;
                            if (Math.abs(det) < 1e-12) { viz.drawDraggables(); return; }

                            const c0 = (a11 * b0 - a01 * b1) / det;
                            const c1 = (a00 * b1 - a10 * b0) / det;

                            // Also compute OLS for comparison
                            const detOLS = m * sx2 - sx * sx;
                            let c0ols = 0, c1ols = 0;
                            if (Math.abs(detOLS) > 1e-12) {
                                c1ols = (m * sxy - sx * sy) / detOLS;
                                c0ols = (sy - c1ols * sx) / m;
                            }

                            // Draw OLS line (faint)
                            if (lambda > 0.05) {
                                viz.drawFunction(x => c0ols + c1ols * x, -1, 11, viz.colors.teal + '33', 1.5);
                            }

                            // Draw ridge line
                            viz.drawFunction(x => c0 + c1 * x, -1, 11, viz.colors.teal, 2.5);

                            // Residuals
                            let ssres = 0;
                            for (const p of pts) {
                                const yhat = c0 + c1 * p.x;
                                viz.drawSegment(p.x, p.y, p.x, yhat, viz.colors.red + '88', 1, true);
                                ssres += (p.y - yhat) * (p.y - yhat);
                            }

                            const cnorm = Math.sqrt(c0*c0 + c1*c1);
                            viz.screenText('\u03BB = ' + lambda.toFixed(1) + '   y = ' + c0.toFixed(2) + ' + ' + c1.toFixed(2) + 'x', 12, 20, viz.colors.teal, 13, 'left', 'top');
                            viz.screenText('||c|| = ' + cnorm.toFixed(2) + '   SS_res = ' + ssres.toFixed(2), 12, 38, viz.colors.white, 12, 'left', 'top');
                            if (lambda > 0.05) {
                                viz.screenText('Faint line = OLS (\u03BB=0)', 12, 56, viz.colors.text, 11, 'left', 'top');
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
                    question: 'Set up the weighted least squares problem for fitting a line \\(y = c_0 + c_1 x\\) to data \\((1, 2)\\), \\((2, 4)\\), \\((3, 5)\\) with weights \\(w_1 = 1\\), \\(w_2 = 4\\), \\(w_3 = 1\\). Solve for \\(\\hat{\\mathbf{c}}\\).',
                    hint: 'The normal equations are \\(A^T W A \\hat{\\mathbf{c}} = A^T W \\mathbf{b}\\) with \\(W = \\operatorname{diag}(1, 4, 1)\\).',
                    solution: '\\(A = \\begin{pmatrix}1&1\\\\1&2\\\\1&3\\end{pmatrix}\\), \\(W = \\operatorname{diag}(1,4,1)\\), \\(\\mathbf{b} = (2,4,5)^T\\). \\(A^TWA = \\begin{pmatrix}6&12\\\\12&26\\end{pmatrix}\\), \\(A^TW\\mathbf{b} = \\begin{pmatrix}23\\\\49\\end{pmatrix}\\). Solving: \\(\\hat{c}_1 = (6\\cdot49-12\\cdot23)/(6\\cdot26-144) = (294-276)/12 = 18/12 = 3/2\\). \\(\\hat{c}_0 = (23-12\\cdot3/2)/6 = (23-18)/6 = 5/6\\). The WLS line is \\(y = 5/6 + (3/2)x\\). Compare with OLS: the WLS line passes closer to \\((2,4)\\) due to its higher weight.'
                },
                {
                    question: 'Show that as \\(\\lambda \\to \\infty\\), the ridge regression solution \\(\\hat{\\mathbf{x}}_\\lambda \\to \\mathbf{0}\\).',
                    hint: 'Factor out \\(\\lambda\\) from \\((A^TA + \\lambda I)\\).',
                    solution: '\\(\\hat{\\mathbf{x}}_\\lambda = (A^TA + \\lambda I)^{-1}A^T\\mathbf{b} = \\frac{1}{\\lambda}(\\frac{1}{\\lambda}A^TA + I)^{-1}A^T\\mathbf{b}\\). As \\(\\lambda \\to \\infty\\), \\(\\frac{1}{\\lambda}A^TA \\to 0\\) so \\((\\frac{1}{\\lambda}A^TA + I)^{-1} \\to I\\). Thus \\(\\hat{\\mathbf{x}}_\\lambda \\approx \\frac{1}{\\lambda}A^T\\mathbf{b} \\to \\mathbf{0}\\).'
                },
                {
                    question: 'Rewrite the Tikhonov problem \\(\\min \\|\\mathbf{b} - A\\mathbf{x}\\|^2 + \\lambda\\|\\mathbf{x}\\|^2\\) as an ordinary least squares problem with an augmented system.',
                    hint: 'Stack \\(A\\) on top of \\(\\sqrt{\\lambda}I\\), and \\(\\mathbf{b}\\) on top of \\(\\mathbf{0}\\).',
                    solution: 'Define \\(\\tilde{A} = \\begin{pmatrix} A \\\\ \\sqrt{\\lambda}I \\end{pmatrix}\\) and \\(\\tilde{\\mathbf{b}} = \\begin{pmatrix} \\mathbf{b} \\\\ \\mathbf{0} \\end{pmatrix}\\). Then \\(\\|\\tilde{\\mathbf{b}} - \\tilde{A}\\mathbf{x}\\|^2 = \\|\\mathbf{b} - A\\mathbf{x}\\|^2 + \\lambda\\|\\mathbf{x}\\|^2\\). The normal equations for this augmented system are \\(\\tilde{A}^T\\tilde{A}\\hat{\\mathbf{x}} = \\tilde{A}^T\\tilde{\\mathbf{b}}\\), i.e., \\((A^TA + \\lambda I)\\hat{\\mathbf{x}} = A^T\\mathbf{b}\\). This augmented-system viewpoint lets you solve ridge regression using any standard least squares solver.'
                },
                {
                    question: 'Compute the ridge regression solution for \\(A = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\\), \\(\\mathbf{b} = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\), \\(\\lambda = 1\\). Compare with the OLS solution.',
                    hint: 'Here \\(A^TA\\) is \\(1 \\times 1\\). Both normal equations are scalar.',
                    solution: 'OLS: \\(A^TA = 5\\), \\(A^T\\mathbf{b} = 13\\), \\(\\hat{x} = 13/5 = 2.6\\). Ridge: \\((5+1)\\hat{x}_\\lambda = 13\\), \\(\\hat{x}_\\lambda = 13/6 \\approx 2.167\\). The ridge solution is smaller (shrunk toward 0). OLS residual: \\(\\|(3,5)^T - 2.6(1,2)^T\\| = \\|(0.4, -0.2)\\| = \\sqrt{0.2} \\approx 0.447\\). Ridge residual: \\(\\|(3,5)^T - (13/6)(1,2)^T\\| = \\|(5/6, 2/3)\\| = \\sqrt{25/36+4/9} = \\sqrt{41/36} \\approx 1.067\\). Ridge trades a larger residual for a smaller solution norm.'
                },
                {
                    question: 'In statistics, the Gauss-Markov theorem says OLS is the Best Linear Unbiased Estimator (BLUE). Ridge regression is biased. Why might we prefer a biased estimator?',
                    hint: 'Think about the bias-variance tradeoff and mean squared error.',
                    solution: 'The mean squared error (MSE) decomposes as MSE = Bias\\(^2\\) + Variance. OLS has zero bias but can have very high variance when \\(A\\) is ill-conditioned (the solution changes wildly with small perturbations in \\(\\mathbf{b}\\)). Ridge regression introduces a small bias but dramatically reduces variance. The net MSE can be smaller, especially when the noise level is high relative to the signal. In practice, a small amount of bias is a worthwhile price for a large reduction in variance.'
                }
            ]
        }
    ]
});
