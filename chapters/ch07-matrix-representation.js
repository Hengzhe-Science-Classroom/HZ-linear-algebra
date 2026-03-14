window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'Matrix Representation & Similarity',
    subtitle: 'Every linear map is a matrix \u2014 once you choose a basis',
    sections: [
        // ============================================================
        // Section 1: The Matrix of a Linear Map
        // ============================================================
        {
            id: 'ch07-sec01',
            title: 'The Matrix of a Linear Map',
            content: `
                <h2>The Matrix of a Linear Map</h2>

                <div class="env-block motivation">
                    <div class="env-title">From Maps to Matrices</div>
                    <div class="env-body">
                        <p>In Chapter 6, we studied linear maps abstractly. But for computation we need numbers, and numbers come from choosing bases. Once we fix a basis for the domain and a basis for the codomain, every linear map corresponds to a unique matrix, and every matrix corresponds to a unique linear map. This is the bridge between abstract linear algebra and concrete matrix algebra.</p>
                        <p><strong>Chapter roadmap:</strong> We construct the matrix of a linear map relative to chosen bases, then study what happens when we change bases (the change-of-basis matrix), discover that matrices representing the same map in different bases are "similar," identify which properties are preserved under similarity, and preview diagonalization as the art of finding a basis that makes the matrix as simple as possible.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.1 (Matrix of a Linear Map)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) and \\(W\\) be finite-dimensional vector spaces with ordered bases \\(\\mathcal{B} = \\{v_1, \\ldots, v_n\\}\\) and \\(\\mathcal{C} = \\{w_1, \\ldots, w_m\\}\\) respectively. Let \\(T: V \\to W\\) be a linear map.</p>
                        <p>For each basis vector \\(v_j\\), write \\(T(v_j)\\) in the basis \\(\\mathcal{C}\\):</p>
                        \\[T(v_j) = \\sum_{i=1}^m a_{ij}\\, w_i, \\qquad j = 1, \\ldots, n.\\]
                        <p>The \\(m \\times n\\) matrix \\(A = (a_{ij})\\) is called the <strong>matrix of \\(T\\) relative to \\(\\mathcal{B}\\) and \\(\\mathcal{C}\\)</strong>, denoted \\([T]_{\\mathcal{B}}^{\\mathcal{C}}\\) or \\(\\mathcal{M}(T, \\mathcal{B}, \\mathcal{C})\\).</p>
                        <p>The \\(j\\)-th column of \\(A\\) is the coordinate vector \\([T(v_j)]_{\\mathcal{C}}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The recipe is simple: apply \\(T\\) to each basis vector of the domain, then express the result as coordinates in the codomain basis. Stack the coordinate columns side by side to get the matrix. The matrix is the "numerical encoding" of \\(T\\) relative to the chosen bases.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.1 (Matrix-Vector Multiplication = Map Application)</div>
                    <div class="env-body">
                        <p>Let \\(A = [T]_{\\mathcal{B}}^{\\mathcal{C}}\\). For any \\(v \\in V\\) with coordinate vector \\([v]_{\\mathcal{B}} = (\\alpha_1, \\ldots, \\alpha_n)^\\top\\),</p>
                        \\[[T(v)]_{\\mathcal{C}} = A\\,[v]_{\\mathcal{B}}.\\]
                        <p>In words: multiplying the matrix by the coordinate vector of the input gives the coordinate vector of the output.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(v = \\sum_{j=1}^n \\alpha_j v_j\\). By linearity,</p>
                        \\[T(v) = \\sum_{j=1}^n \\alpha_j T(v_j) = \\sum_{j=1}^n \\alpha_j \\left(\\sum_{i=1}^m a_{ij} w_i\\right) = \\sum_{i=1}^m \\left(\\sum_{j=1}^n a_{ij} \\alpha_j\\right) w_i.\\]
                        <p>So the \\(i\\)-th coordinate of \\(T(v)\\) in the basis \\(\\mathcal{C}\\) is \\(\\sum_j a_{ij} \\alpha_j\\), which is exactly the \\(i\\)-th entry of the matrix product \\(A \\cdot (\\alpha_1, \\ldots, \\alpha_n)^\\top\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.1 (Differentiation Matrix)</div>
                    <div class="env-body">
                        <p>Let \\(D: \\mathcal{P}_2 \\to \\mathcal{P}_1\\) be differentiation, with bases \\(\\mathcal{B} = \\{1, x, x^2\\}\\) and \\(\\mathcal{C} = \\{1, x\\}\\).</p>
                        <ul>
                            <li>\\(D(1) = 0 = 0 \\cdot 1 + 0 \\cdot x\\), so column 1 is \\((0, 0)^\\top\\).</li>
                            <li>\\(D(x) = 1 = 1 \\cdot 1 + 0 \\cdot x\\), so column 2 is \\((1, 0)^\\top\\).</li>
                            <li>\\(D(x^2) = 2x = 0 \\cdot 1 + 2 \\cdot x\\), so column 3 is \\((0, 2)^\\top\\).</li>
                        </ul>
                        \\[[D]_{\\mathcal{B}}^{\\mathcal{C}} = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}.\\]
                        <p>Check: \\(D(3 + 2x + 5x^2) = 2 + 10x\\). Indeed, \\(\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 10 \\end{pmatrix}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.2 (Rotation Matrix)</div>
                    <div class="env-body">
                        <p>Let \\(R_\\theta: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) be counterclockwise rotation by \\(\\theta\\), with the standard basis \\(\\mathcal{E} = \\{e_1, e_2\\}\\).</p>
                        <ul>
                            <li>\\(R_\\theta(e_1) = (\\cos\\theta, \\sin\\theta)\\), column 1 = \\((\\cos\\theta, \\sin\\theta)^\\top\\).</li>
                            <li>\\(R_\\theta(e_2) = (-\\sin\\theta, \\cos\\theta)\\), column 2 = \\((-\\sin\\theta, \\cos\\theta)^\\top\\).</li>
                        </ul>
                        \\[[R_\\theta]_{\\mathcal{E}}^{\\mathcal{E}} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.2 (Composition Corresponds to Matrix Multiplication)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to W\\) and \\(S: W \\to U\\) be linear maps. Fix bases \\(\\mathcal{B}\\) for \\(V\\), \\(\\mathcal{C}\\) for \\(W\\), \\(\\mathcal{D}\\) for \\(U\\). Then</p>
                        \\[[S \\circ T]_{\\mathcal{B}}^{\\mathcal{D}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} \\cdot [T]_{\\mathcal{B}}^{\\mathcal{C}}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any \\(v \\in V\\),</p>
                        \\[[(S \\circ T)(v)]_{\\mathcal{D}} = [S(T(v))]_{\\mathcal{D}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} \\cdot [T(v)]_{\\mathcal{C}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} \\cdot [T]_{\\mathcal{B}}^{\\mathcal{C}} \\cdot [v]_{\\mathcal{B}}.\\]
                        <p>Since this holds for all \\(v\\), the matrices must be equal: \\([S \\circ T]_{\\mathcal{B}}^{\\mathcal{D}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} \\cdot [T]_{\\mathcal{B}}^{\\mathcal{C}}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>This theorem explains <em>why</em> matrix multiplication is defined the way it is. It is not an arbitrary convention; it is forced by the requirement that composition of maps corresponds to multiplication of their representing matrices.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.1 (The Isomorphism \\(\\mathcal{L}(V,W) \\cong M_{m \\times n}(F)\\))</div>
                    <div class="env-body">
                        <p>Fix bases \\(\\mathcal{B}\\) for \\(V\\) and \\(\\mathcal{C}\\) for \\(W\\). The map \\(T \\mapsto [T]_{\\mathcal{B}}^{\\mathcal{C}}\\) is an isomorphism of vector spaces from \\(\\mathcal{L}(V,W)\\) to \\(M_{m \\times n}(F)\\). In particular, \\(\\dim \\mathcal{L}(V,W) = mn\\).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Let \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^3\\) be defined by \\(T(x,y) = (x+y, 2x, x-y)\\). Find \\([T]_{\\mathcal{E}_2}^{\\mathcal{E}_3}\\) where \\(\\mathcal{E}_2, \\mathcal{E}_3\\) are the standard bases.',
                    hint: 'Compute \\(T(e_1)\\) and \\(T(e_2)\\), then form the columns.',
                    solution: '\\(T(1,0) = (1, 2, 1)\\) and \\(T(0,1) = (1, 0, -1)\\). So \\([T] = \\begin{pmatrix} 1 & 1 \\\\ 2 & 0 \\\\ 1 & -1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) be reflection across the line \\(y = x\\). Find the matrix of \\(T\\) with respect to the standard basis.',
                    hint: 'Where does \\(e_1 = (1,0)\\) go under this reflection? Where does \\(e_2 = (0,1)\\) go?',
                    solution: '\\(T(1,0) = (0,1)\\) and \\(T(0,1) = (1,0)\\). So \\([T] = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(T: \\mathcal{P}_1 \\to \\mathcal{P}_2\\) be defined by \\(T(p)(x) = x \\cdot p(x)\\) (multiplication by \\(x\\)). Using \\(\\mathcal{B} = \\{1, x\\}\\) and \\(\\mathcal{C} = \\{1, x, x^2\\}\\), find \\([T]_{\\mathcal{B}}^{\\mathcal{C}}\\).',
                    hint: 'Compute \\(T(1) = x\\) and \\(T(x) = x^2\\), then write them in the \\(\\mathcal{C}\\) basis.',
                    solution: '\\(T(1) = x = 0 \\cdot 1 + 1 \\cdot x + 0 \\cdot x^2\\), giving column \\((0,1,0)^\\top\\). \\(T(x) = x^2 = 0 \\cdot 1 + 0 \\cdot x + 1 \\cdot x^2\\), giving column \\((0,0,1)^\\top\\). So \\([T] = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(S, T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) have standard-basis matrices \\(A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\). Find the matrix of \\(S \\circ T\\) and \\(T \\circ S\\). Are they equal?',
                    hint: 'The matrix of \\(S \\circ T\\) is \\(AB\\), and \\(T \\circ S\\) is \\(BA\\).',
                    solution: '\\(AB = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ 1 & 0 \\end{pmatrix}\\). \\(BA = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 2 \\end{pmatrix}\\). They are not equal; matrix multiplication is not commutative.'
                },
                {
                    question: 'Let \\(T: \\mathbb{R}^2 \\to \\mathbb{R}^2\\) have matrix \\(A\\) relative to the standard basis, and let \\(\\mathcal{B} = \\{(1,1), (1,-1)\\}\\). Find \\([T]_{\\mathcal{B}}^{\\mathcal{B}}\\) when \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\).',
                    hint: 'Compute \\(T(1,1) = (4,4)\\) and \\(T(1,-1) = (2, -2)\\). Express each in the \\(\\mathcal{B}\\) basis.',
                    solution: '\\(T(1,1) = (4,4) = 4(1,1) + 0(1,-1)\\) gives column \\((4,0)^\\top\\). \\(T(1,-1) = (2,-2) = 0(1,1) + 2(1,-1)\\) gives column \\((0,2)^\\top\\). So \\([T]_{\\mathcal{B}}^{\\mathcal{B}} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix}\\). The matrix is diagonal in the eigenbasis!'
                }
            ]
        },

        // ============================================================
        // Section 2: Change of Basis Matrix
        // ============================================================
        {
            id: 'ch07-sec02',
            title: 'Change of Basis Matrix',
            content: `
                <h2>Change of Basis Matrix</h2>

                <div class="env-block motivation">
                    <div class="env-title">What Happens When We Switch Coordinates?</div>
                    <div class="env-body">
                        <p>A vector does not change when we change the basis; only its <em>coordinates</em> change. The change-of-basis matrix translates coordinates from one basis to another. It is the key ingredient in understanding how the matrix of a linear map transforms when we switch bases.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.2 (Change of Basis Matrix / Transition Matrix)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{B} = \\{v_1, \\ldots, v_n\\}\\) and \\(\\mathcal{B}' = \\{v_1', \\ldots, v_n'\\}\\) be two ordered bases of a vector space \\(V\\). The <strong>change-of-basis matrix</strong> (or <strong>transition matrix</strong>) from \\(\\mathcal{B}\\) to \\(\\mathcal{B}'\\), denoted \\(P_{\\mathcal{B} \\to \\mathcal{B}'}\\), is the \\(n \\times n\\) matrix whose \\(j\\)-th column is \\([v_j]_{\\mathcal{B}'}\\): the coordinate vector of the old basis vector \\(v_j\\) in the new basis \\(\\mathcal{B}'\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.3 (Change of Basis Formula)</div>
                    <div class="env-body">
                        <p>For any \\(v \\in V\\),</p>
                        \\[[v]_{\\mathcal{B}'} = P_{\\mathcal{B} \\to \\mathcal{B}'}^{-1} \\cdot [v]_{\\mathcal{B}}.\\]
                        <p>Equivalently, if we let \\(P = P_{\\mathcal{B}' \\to \\mathcal{B}}\\) (the matrix whose columns are the new basis vectors expressed in the old basis), then</p>
                        \\[[v]_{\\mathcal{B}'} = P^{-1} [v]_{\\mathcal{B}}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The identity map \\(I: V \\to V\\) satisfies \\(I(v) = v\\) for all \\(v\\). Its matrix relative to \\(\\mathcal{B}\\) (domain basis) and \\(\\mathcal{B}'\\) (codomain basis) is exactly the transition matrix. By Theorem 7.1,</p>
                        \\[[I(v)]_{\\mathcal{B}'} = [I]_{\\mathcal{B}}^{\\mathcal{B}'} \\cdot [v]_{\\mathcal{B}},\\]
                        <p>but \\([I(v)]_{\\mathcal{B}'} = [v]_{\\mathcal{B}'}\\). Setting \\(P = P_{\\mathcal{B}' \\to \\mathcal{B}}\\) (columns are \\([v_j']_{\\mathcal{B}}\\)), we have \\([I]_{\\mathcal{B}}^{\\mathcal{B}'} = P^{-1}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of \\(P\\) as the matrix whose columns are the new basis vectors written in the old coordinates. To go from old coordinates to new coordinates, you "undo" \\(P\\) by multiplying by \\(P^{-1}\\). The matrix \\(P\\) "encodes" the new basis; \\(P^{-1}\\) "decodes" into the new coordinate system.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.3</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{R}^2\\), let \\(\\mathcal{B} = \\{e_1, e_2\\}\\) (standard) and \\(\\mathcal{B}' = \\{(1,1), (1,-1)\\}\\).</p>
                        <p>The transition matrix \\(P = P_{\\mathcal{B}' \\to \\mathcal{B}}\\) has columns \\((1,1)^\\top\\) and \\((1,-1)^\\top\\):</p>
                        \\[P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\qquad P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1/2 & 1/2 \\\\ 1/2 & -1/2 \\end{pmatrix}.\\]
                        <p>For \\(v = (3, 1)\\) in standard coordinates:</p>
                        \\[[v]_{\\mathcal{B}'} = P^{-1} \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}.\\]
                        <p>Check: \\(2(1,1) + 1(1,-1) = (3, 1)\\). Correct!</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch07-change-basis"></div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.1 (Properties of Transition Matrices)</div>
                    <div class="env-body">
                        <ol>
                            <li>\\(P_{\\mathcal{B} \\to \\mathcal{B}} = I\\).</li>
                            <li>\\(P_{\\mathcal{B} \\to \\mathcal{B}'} \\cdot P_{\\mathcal{B}' \\to \\mathcal{B}} = I\\), i.e., \\(P_{\\mathcal{B} \\to \\mathcal{B}'}^{-1} = P_{\\mathcal{B}' \\to \\mathcal{B}}\\).</li>
                            <li>\\(P_{\\mathcal{B} \\to \\mathcal{B}''} = P_{\\mathcal{B}' \\to \\mathcal{B}''} \\cdot P_{\\mathcal{B} \\to \\mathcal{B}'}\\) (chain rule for basis changes).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The convention for change-of-basis matrices varies across textbooks. Some define \\(P\\) so that \\([v]_{\\mathcal{B}'} = P [v]_{\\mathcal{B}}\\) (our \\(P^{-1}\\)); others use the convention here. Always check which convention your source uses!</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ch07-change-basis',
                    title: 'Change of Basis Visualizer',
                    description: 'Drag the blue handles to define new basis vectors \\(v_1\'\\) and \\(v_2\'\\). The grid transforms to show the new coordinate system, and you can see how coordinates of the red test point change.',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {width: 560, height: 420, scale: 45});

                        // New basis vectors (draggable)
                        const b1 = viz.addDraggable('b1', 1.5, 0.5, viz.colors.blue, 8, () => draw());
                        const b2 = viz.addDraggable('b2', -0.5, 1.5, viz.colors.teal, 8, () => draw());
                        // Test point
                        const pt = viz.addDraggable('pt', 2, 1, viz.colors.red, 7, () => draw());

                        const infoDiv = document.createElement('div');
                        infoDiv.style.cssText = 'margin-top:6px;font-size:12px;color:#8b949e;line-height:1.7;font-family:monospace;';
                        controls.appendChild(infoDiv);

                        function draw() {
                            viz.clear();

                            // New basis matrix P (columns = new basis in standard coords)
                            const P = [[b1.x, b2.x], [b1.y, b2.y]];
                            const det = VizEngine.det2(P);

                            // Draw new coordinate grid
                            if (Math.abs(det) > 0.01) {
                                for (let t = -6; t <= 6; t++) {
                                    // Lines along b1 direction at integer multiples of b2
                                    const ox = t * b2.x, oy = t * b2.y;
                                    viz.drawSegment(ox - 6*b1.x, oy - 6*b1.y, ox + 6*b1.x, oy + 6*b1.y, viz.colors.blue + '18', 0.8);
                                    // Lines along b2 direction at integer multiples of b1
                                    const ox2 = t * b1.x, oy2 = t * b1.y;
                                    viz.drawSegment(ox2 - 6*b2.x, oy2 - 6*b2.y, ox2 + 6*b2.x, oy2 + 6*b2.y, viz.colors.teal + '18', 0.8);
                                }
                            }

                            // Standard grid and axes
                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw new basis vectors
                            viz.drawVector(0, 0, b1.x, b1.y, viz.colors.blue, "v\u2081'", 2.5);
                            viz.drawVector(0, 0, b2.x, b2.y, viz.colors.teal, "v\u2082'", 2.5);

                            // Test point
                            viz.drawPoint(pt.x, pt.y, viz.colors.red, null, 6);

                            // Compute new coordinates if basis is valid
                            if (Math.abs(det) > 0.01) {
                                // P^{-1} = (1/det) * [[d, -b],[-c, a]]
                                const invP = [[P[1][1]/det, -P[0][1]/det], [-P[1][0]/det, P[0][0]/det]];
                                const newCoords = VizEngine.matVec(invP, [pt.x, pt.y]);

                                // Draw decomposition lines
                                const comp1x = newCoords[0] * b1.x, comp1y = newCoords[0] * b1.y;
                                const comp2x = newCoords[1] * b2.x, comp2y = newCoords[1] * b2.y;
                                viz.drawSegment(0, 0, comp1x, comp1y, viz.colors.blue + '88', 1.5, true);
                                viz.drawSegment(comp1x, comp1y, comp1x + comp2x, comp1y + comp2y, viz.colors.teal + '88', 1.5, true);

                                infoDiv.innerHTML =
                                    'Standard coords: (' + pt.x.toFixed(2) + ', ' + pt.y.toFixed(2) + ')<br>' +
                                    "New coords [v]<sub>B'</sub>: (" + newCoords[0].toFixed(2) + ', ' + newCoords[1].toFixed(2) + ')<br>' +
                                    'P = [' + b1.x.toFixed(2) + ' ' + b2.x.toFixed(2) + '; ' + b1.y.toFixed(2) + ' ' + b2.y.toFixed(2) + ']<br>' +
                                    'det(P) = ' + det.toFixed(3);
                            } else {
                                infoDiv.innerHTML = '<span style="color:#f85149">Basis vectors are linearly dependent! det = ' + det.toFixed(3) + '</span>';
                            }

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'In \\(\\mathbb{R}^2\\), let \\(\\mathcal{B} = \\{(1,0), (0,1)\\}\\) and \\(\\mathcal{B}\' = \\{(2,1), (1,1)\\}\\). Find the change-of-basis matrix \\(P\\) and use it to find \\([(5, 3)]_{\\mathcal{B}\'}\\).',
                    hint: 'P has columns = new basis vectors in old coordinates. Compute \\(P^{-1} \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}\\).',
                    solution: '\\(P = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}\\), \\(P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}\\). \\([(5,3)]_{\\mathcal{B}\'} = P^{-1}(5,3)^\\top = (2, 1)^\\top\\). Check: \\(2(2,1) + 1(1,1) = (5,3)\\).'
                },
                {
                    question: 'Show that the change-of-basis matrix between any two bases is always invertible.',
                    hint: 'It is the matrix of the identity map relative to two bases.',
                    solution: 'The transition matrix \\(P_{\\mathcal{B}\' \\to \\mathcal{B}}\\) is the matrix of the identity map \\(I: V \\to V\\) with domain basis \\(\\mathcal{B}\'\\) and codomain basis \\(\\mathcal{B}\\). Since \\(I\\) is an isomorphism, its matrix is invertible. Alternatively, its columns are the coordinates of basis vectors (hence linearly independent), so the matrix has full rank.'
                },
                {
                    question: 'Let \\(\\mathcal{B} = \\{1, x, x^2\\}\\) and \\(\\mathcal{B}\' = \\{1, 1+x, 1+x+x^2\\}\\) be bases for \\(\\mathcal{P}_2\\). Find \\(P_{\\mathcal{B}\' \\to \\mathcal{B}}\\).',
                    hint: 'Express each element of \\(\\mathcal{B}\'\\) in the \\(\\mathcal{B}\\) basis.',
                    solution: '\\(1 = 1 \\cdot 1 + 0 \\cdot x + 0 \\cdot x^2\\), \\(1+x = 1 \\cdot 1 + 1 \\cdot x + 0 \\cdot x^2\\), \\(1+x+x^2 = 1 \\cdot 1 + 1 \\cdot x + 1 \\cdot x^2\\). So \\(P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}\\).'
                },
                {
                    question: 'Prove the chain rule: \\(P_{\\mathcal{B} \\to \\mathcal{B}\'\'} = P_{\\mathcal{B}\' \\to \\mathcal{B}\'\'} \\cdot P_{\\mathcal{B} \\to \\mathcal{B}\'}\\).',
                    hint: 'Use the fact that transition matrices represent the identity map, and composition of identity maps is the identity.',
                    solution: 'The identity map \\(I: V \\to V\\) can be factored as \\(I = I \\circ I\\). Using the composition formula (Theorem 7.2), \\([I]_{\\mathcal{B}}^{\\mathcal{B}\'\'} = [I]_{\\mathcal{B}\'}^{\\mathcal{B}\'\'} \\cdot [I]_{\\mathcal{B}}^{\\mathcal{B}\'}\\), which is \\(P_{\\mathcal{B} \\to \\mathcal{B}\'\'} = P_{\\mathcal{B}\' \\to \\mathcal{B}\'\'} \\cdot P_{\\mathcal{B} \\to \\mathcal{B}\'}\\).'
                },
                {
                    question: 'If \\(P\\) is an orthogonal matrix (\\(P^\\top P = I\\)), what geometric relationship holds between the old and new bases?',
                    hint: 'What does \\(P^\\top P = I\\) say about the columns of \\(P\\)?',
                    solution: 'The columns of \\(P\\) are orthonormal: \\(P^\\top P = I\\) means the columns form an orthonormal set. So the new basis is orthonormal (in the standard inner product). Geometrically, the change of basis is a rotation (possibly with reflection).'
                }
            ]
        },

        // ============================================================
        // Section 3: Similar Matrices
        // ============================================================
        {
            id: 'ch07-sec03',
            title: 'Similar Matrices',
            content: `
                <h2>Similar Matrices</h2>

                <div class="env-block motivation">
                    <div class="env-title">Same Map, Different Matrices</div>
                    <div class="env-body">
                        <p>A single linear operator \\(T: V \\to V\\) can be represented by many different matrices, one for each choice of basis. Two matrices are <strong>similar</strong> if they represent the same linear operator in different bases. Similarity is the fundamental equivalence relation of matrix algebra: similar matrices are "the same" in every way that matters.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 (Change of Basis for a Linear Operator)</div>
                    <div class="env-body">
                        <p>Let \\(T: V \\to V\\) be a linear operator, and let \\(\\mathcal{B}\\) and \\(\\mathcal{B}'\\) be two ordered bases for \\(V\\). Let \\(P = P_{\\mathcal{B}' \\to \\mathcal{B}}\\) be the change-of-basis matrix (columns = new basis vectors in old coordinates). Then</p>
                        \\[[T]_{\\mathcal{B}'} = P^{-1} [T]_{\\mathcal{B}} \\, P.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(A = [T]_{\\mathcal{B}}\\) and \\(A' = [T]_{\\mathcal{B}'}\\). For any \\(v \\in V\\),</p>
                        \\[[T(v)]_{\\mathcal{B}'} = A' [v]_{\\mathcal{B}'}.\\]
                        <p>Using the change-of-basis relations \\([v]_{\\mathcal{B}} = P [v]_{\\mathcal{B}'}\\) and \\([T(v)]_{\\mathcal{B}} = P [T(v)]_{\\mathcal{B}'}\\), we also have</p>
                        \\[P [T(v)]_{\\mathcal{B}'} = [T(v)]_{\\mathcal{B}} = A [v]_{\\mathcal{B}} = A P [v]_{\\mathcal{B}'}.\\]
                        <p>So \\([T(v)]_{\\mathcal{B}'} = P^{-1} A P [v]_{\\mathcal{B}'}\\) for all \\(v\\). Since \\([v]_{\\mathcal{B}'}\\) ranges over all of \\(F^n\\), we conclude \\(A' = P^{-1} A P\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.3 (Similar Matrices)</div>
                    <div class="env-body">
                        <p>Two \\(n \\times n\\) matrices \\(A\\) and \\(B\\) are <strong>similar</strong>, written \\(A \\sim B\\), if there exists an invertible matrix \\(P\\) such that</p>
                        \\[B = P^{-1} A P.\\]
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.2 (Similarity is an Equivalence Relation)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Reflexive:</strong> \\(A \\sim A\\) (take \\(P = I\\)).</li>
                            <li><strong>Symmetric:</strong> If \\(A \\sim B\\) via \\(P\\), then \\(B \\sim A\\) via \\(P^{-1}\\).</li>
                            <li><strong>Transitive:</strong> If \\(A \\sim B\\) via \\(P\\) and \\(B \\sim C\\) via \\(Q\\), then \\(A \\sim C\\) via \\(PQ\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) \\(I^{-1} A I = A\\).</p>
                        <p>(2) If \\(B = P^{-1}AP\\), then \\(A = PBP^{-1} = (P^{-1})^{-1} B (P^{-1})\\).</p>
                        <p>(3) If \\(B = P^{-1}AP\\) and \\(C = Q^{-1}BQ\\), then \\(C = Q^{-1}P^{-1}APQ = (PQ)^{-1}A(PQ)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The conjugation \\(P^{-1}AP\\) has a natural reading: first translate from the new coordinate system to the old one (multiply by \\(P\\)), apply the transformation \\(A\\) in the old coordinates, then translate back (multiply by \\(P^{-1}\\)). The "detour through old coordinates" shows that \\(P^{-1}AP\\) accomplishes the same transformation as \\(A\\), just described in a different language.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch07-similar-demo"></div>

                <div class="env-block example">
                    <div class="env-title">Example 7.4</div>
                    <div class="env-body">
                        <p>Consider \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\) and the basis \\(\\mathcal{B}' = \\{(1,1), (1,-1)\\}\\). The change-of-basis matrix is</p>
                        \\[P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}.\\]
                        \\[P^{-1}AP = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix}.\\]
                        <p>The matrix becomes diagonal because \\((1,1)\\) and \\((1,-1)\\) are eigenvectors of \\(A\\) with eigenvalues 4 and 2.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Similar matrices partition the set of all \\(n \\times n\\) matrices into equivalence classes (similarity classes). Each class corresponds to a single abstract linear operator. The central goal of Chapters 10-12 will be to find the simplest representative in each class (e.g., a diagonal or Jordan matrix).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ch07-similar-demo',
                    title: 'Similar Matrices: Same Transformation, Different Coordinates',
                    description: 'The same linear operator is shown in two coordinate systems. The left panel shows the standard basis; the right panel shows a rotated basis. Adjust the rotation angle to see how the matrix changes while the transformation remains the same.',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {width: 560, height: 400, scale: 40});

                        // Fixed operator matrix (in standard basis)
                        const A = [[2, 1], [0, 1.5]];
                        let basisAngle = 0.4;

                        const angleSlider = VizEngine.createSlider(controls, 'Basis rotation', -3.14, 3.14, 0.4, 0.05, v => {
                            basisAngle = v;
                            draw();
                        });

                        const infoDiv = document.createElement('div');
                        infoDiv.style.cssText = 'margin-top:6px;font-size:11px;color:#8b949e;line-height:1.7;font-family:monospace;';
                        controls.appendChild(infoDiv);

                        function draw() {
                            viz.clear();
                            const c = Math.cos(basisAngle), s = Math.sin(basisAngle);
                            const P = [[c, -s], [s, c]];
                            const Pinv = [[c, s], [-s, c]];
                            const B = VizEngine.matMul(Pinv, VizEngine.matMul(A, P));

                            // --- Left half: Standard basis ---
                            const leftCx = viz.width * 0.25;
                            const rightCx = viz.width * 0.75;

                            // Divider
                            viz.ctx.strokeStyle = viz.colors.muted;
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(viz.width / 2, 0);
                            viz.ctx.lineTo(viz.width / 2, viz.height);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Labels
                            viz.screenText('Standard Basis', leftCx, 16, viz.colors.white, 13);
                            viz.screenText('Rotated Basis', rightCx, 16, viz.colors.white, 13);

                            // Left: standard grid + transformation
                            const lOx = leftCx, lOy = viz.height / 2;
                            const sc = 28;

                            // Grid
                            for (let i = -4; i <= 4; i++) {
                                viz.ctx.strokeStyle = viz.colors.grid; viz.ctx.lineWidth = 0.5;
                                viz.ctx.beginPath(); viz.ctx.moveTo(lOx + i * sc, 30); viz.ctx.lineTo(lOx + i * sc, viz.height - 10); viz.ctx.stroke();
                                viz.ctx.beginPath(); viz.ctx.moveTo(leftCx - 4 * sc, lOy + i * sc); viz.ctx.lineTo(leftCx + 4 * sc, lOy + i * sc); viz.ctx.stroke();
                            }
                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis; viz.ctx.lineWidth = 1;
                            viz.ctx.beginPath(); viz.ctx.moveTo(leftCx - 4*sc, lOy); viz.ctx.lineTo(leftCx + 4*sc, lOy); viz.ctx.stroke();
                            viz.ctx.beginPath(); viz.ctx.moveTo(lOx, 30); viz.ctx.lineTo(lOx, viz.height - 10); viz.ctx.stroke();

                            // Transformed unit square (left)
                            function toL(x, y) { return [lOx + x * sc, lOy - y * sc]; }
                            var sq = [[0,0],[1,0],[1,1],[0,1]];
                            viz.ctx.beginPath();
                            sq.forEach((p, i) => {
                                var tp = VizEngine.matVec(A, p);
                                var sp = toL(tp[0], tp[1]);
                                i === 0 ? viz.ctx.moveTo(sp[0], sp[1]) : viz.ctx.lineTo(sp[0], sp[1]);
                            });
                            viz.ctx.closePath();
                            viz.ctx.fillStyle = viz.colors.orange + '33';
                            viz.ctx.fill();
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.stroke();

                            // Basis vectors (left)
                            var te1 = VizEngine.matVec(A, [1, 0]);
                            var te2 = VizEngine.matVec(A, [0, 1]);
                            drawArrow(toL(0,0), toL(te1[0], te1[1]), viz.colors.orange);
                            drawArrow(toL(0,0), toL(te2[0], te2[1]), viz.colors.purple);

                            // Right: rotated grid + transformation
                            var rOx = rightCx, rOy = viz.height / 2;
                            function toR(x, y) { return [rOx + x * sc, rOy - y * sc]; }

                            // Rotated grid
                            for (let i = -4; i <= 4; i++) {
                                viz.ctx.strokeStyle = viz.colors.blue + '25'; viz.ctx.lineWidth = 0.5;
                                // Lines along rotated basis 1
                                var dx1 = c * sc, dy1 = -s * sc;
                                var dx2 = -s * sc, dy2 = -c * sc;
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(rOx + i * dx2 - 4 * dx1, rOy + i * dy2 - 4 * dy1);
                                viz.ctx.lineTo(rOx + i * dx2 + 4 * dx1, rOy + i * dy2 + 4 * dy1);
                                viz.ctx.stroke();
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(rOx + i * dx1 - 4 * dx2, rOy + i * dy1 - 4 * dy2);
                                viz.ctx.lineTo(rOx + i * dx1 + 4 * dx2, rOy + i * dy1 + 4 * dy2);
                                viz.ctx.stroke();
                            }

                            // Transformed unit square (right, using B)
                            viz.ctx.beginPath();
                            sq.forEach((p, i) => {
                                var tp = VizEngine.matVec(B, p);
                                // Convert from rotated coords to screen: multiply by P then to screen
                                var stdP = VizEngine.matVec(P, tp);
                                var sp = toR(stdP[0], stdP[1]);
                                i === 0 ? viz.ctx.moveTo(sp[0], sp[1]) : viz.ctx.lineTo(sp[0], sp[1]);
                            });
                            viz.ctx.closePath();
                            viz.ctx.fillStyle = viz.colors.teal + '33';
                            viz.ctx.fill();
                            viz.ctx.strokeStyle = viz.colors.teal;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.stroke();

                            // Rotated basis vectors (right)
                            var be1 = VizEngine.matVec(B, [1, 0]);
                            var be1std = VizEngine.matVec(P, be1);
                            var be2 = VizEngine.matVec(B, [0, 1]);
                            var be2std = VizEngine.matVec(P, be2);
                            drawArrow(toR(0,0), toR(be1std[0], be1std[1]), viz.colors.orange);
                            drawArrow(toR(0,0), toR(be2std[0], be2std[1]), viz.colors.purple);

                            // Show rotated basis directions
                            drawArrow(toR(0,0), toR(c, s), viz.colors.blue + '88');
                            drawArrow(toR(0,0), toR(-s, c), viz.colors.teal + '88');

                            // Info
                            infoDiv.innerHTML =
                                'A (standard) = [' + A[0][0].toFixed(1) + ' ' + A[0][1].toFixed(1) + '; ' + A[1][0].toFixed(1) + ' ' + A[1][1].toFixed(1) + ']<br>' +
                                "B = P\u207B\u00B9AP = [" + B[0][0].toFixed(2) + ' ' + B[0][1].toFixed(2) + '; ' + B[1][0].toFixed(2) + ' ' + B[1][1].toFixed(2) + ']<br>' +
                                'det(A) = ' + VizEngine.det2(A).toFixed(2) + ', det(B) = ' + VizEngine.det2(B).toFixed(2) + '<br>' +
                                'tr(A) = ' + (A[0][0] + A[1][1]).toFixed(2) + ', tr(B) = ' + (B[0][0] + B[1][1]).toFixed(2);
                        }

                        function drawArrow(from, to, color) {
                            var ctx = viz.ctx;
                            var dx = to[0] - from[0], dy = to[1] - from[1];
                            var len = Math.sqrt(dx*dx + dy*dy);
                            if (len < 2) return;
                            var angle = Math.atan2(dy, dx);
                            ctx.strokeStyle = color; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(from[0], from[1]); ctx.lineTo(to[0], to[1]); ctx.stroke();
                            ctx.fillStyle = color; ctx.beginPath();
                            ctx.moveTo(to[0], to[1]);
                            ctx.lineTo(to[0] - 10*Math.cos(angle - 0.4), to[1] - 10*Math.sin(angle - 0.4));
                            ctx.lineTo(to[0] - 10*Math.cos(angle + 0.4), to[1] - 10*Math.sin(angle + 0.4));
                            ctx.closePath(); ctx.fill();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 3 & -2 \\\\ 0 & 1 \\end{pmatrix}\\) are similar by finding an invertible \\(P\\) with \\(B = P^{-1}AP\\).',
                    hint: 'The eigenvalues of \\(A\\) are 1 and 3. Find eigenvectors. Try \\(P\\) whose columns are eigenvectors of \\(A\\), but with column order swapped relative to the diagonalization of \\(A\\).',
                    solution: 'Eigenvectors of \\(A\\): for \\(\\lambda = 1\\), solve \\((A - I)v = 0\\): \\(v_1 = (1, 0)\\). For \\(\\lambda = 3\\), solve \\((A - 3I)v = 0\\): \\(v_2 = (1, 1)\\). Take \\(P = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\) (columns swapped: eigenvector for 3 first). Then \\(P^{-1}AP = \\begin{pmatrix} 3 & -2 \\\\ 0 & 1 \\end{pmatrix} = B\\). Verify by direct computation.'
                },
                {
                    question: 'Prove that if \\(A \\sim B\\), then \\(A^k \\sim B^k\\) for all positive integers \\(k\\).',
                    hint: 'Use \\(B = P^{-1}AP\\), and compute \\(B^k\\).',
                    solution: '\\(B^k = (P^{-1}AP)^k = P^{-1}AP \\cdot P^{-1}AP \\cdots P^{-1}AP = P^{-1}A^k P\\). (The \\(PP^{-1}\\) pairs in the middle cancel.) So \\(A^k \\sim B^k\\) via the same \\(P\\).'
                },
                {
                    question: 'Give an example of two \\(2 \\times 2\\) matrices that have the same eigenvalues but are <em>not</em> similar.',
                    hint: 'Think about \\(\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\) vs. \\(\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\).',
                    solution: '\\(I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\) and \\(J = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\) both have eigenvalue 1 (with multiplicity 2). But \\(P^{-1}IP = I \\neq J\\) for any \\(P\\). The identity matrix is only similar to itself.'
                },
                {
                    question: 'Prove: \\(A\\) is similar to a diagonal matrix if and only if there exists a basis of eigenvectors of \\(A\\).',
                    hint: 'If \\(P^{-1}AP = D\\) is diagonal, what are the columns of \\(P\\)?',
                    solution: '(\\(\\Rightarrow\\)) If \\(P^{-1}AP = D = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then \\(AP = PD\\). The \\(j\\)-th column gives \\(Ap_j = \\lambda_j p_j\\), so each column of \\(P\\) is an eigenvector. Since \\(P\\) is invertible, its columns form a basis. (\\(\\Leftarrow\\)) If \\(\\{p_1, \\ldots, p_n\\}\\) is a basis of eigenvectors with \\(Ap_j = \\lambda_j p_j\\), form \\(P = [p_1 | \\cdots | p_n]\\). Then \\(AP = PD\\), so \\(P^{-1}AP = D\\).'
                },
                {
                    question: 'Show that similar matrices represent the same linear operator. More precisely: if \\(B = P^{-1}AP\\), construct a linear operator \\(T\\) and two bases such that \\(A\\) and \\(B\\) are the matrices of \\(T\\) in those bases.',
                    hint: 'Let \\(T\\) be the operator with standard-basis matrix \\(A\\). Use \\(P\\) to define the second basis.',
                    solution: 'Define \\(T: \\mathbb{R}^n \\to \\mathbb{R}^n\\) by \\(T(x) = Ax\\). In the standard basis \\(\\mathcal{E}\\), \\([T]_{\\mathcal{E}} = A\\). Let \\(\\mathcal{B}\'\\) be the basis formed by the columns of \\(P\\). By Theorem 7.4, \\([T]_{\\mathcal{B}\'} = P^{-1}AP = B\\). Same operator, different bases.'
                }
            ]
        },

        // ============================================================
        // Section 4: Properties Preserved Under Similarity
        // ============================================================
        {
            id: 'ch07-sec04',
            title: 'Properties Preserved Under Similarity',
            content: `
                <h2>Properties Preserved Under Similarity</h2>

                <div class="env-block motivation">
                    <div class="env-title">Similarity Invariants</div>
                    <div class="env-body">
                        <p>If similar matrices represent the same linear operator, then any "intrinsic" property of the operator (one that does not depend on the choice of basis) must be shared by all similar matrices. These <strong>similarity invariants</strong> are the quantities that truly belong to the operator, not to its matrix representation. The most important ones are the trace, determinant, eigenvalues, rank, and characteristic polynomial.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.5 (Similarity Invariants)</div>
                    <div class="env-body">
                        <p>If \\(A \\sim B\\) (i.e., \\(B = P^{-1}AP\\) for some invertible \\(P\\)), then:</p>
                        <ol>
                            <li>\\(\\operatorname{tr}(A) = \\operatorname{tr}(B)\\) (same trace).</li>
                            <li>\\(\\det(A) = \\det(B)\\) (same determinant).</li>
                            <li>\\(\\operatorname{rank}(A) = \\operatorname{rank}(B)\\) (same rank).</li>
                            <li>\\(\\operatorname{nullity}(A) = \\operatorname{nullity}(B)\\) (same nullity).</li>
                            <li>\\(A\\) and \\(B\\) have the same characteristic polynomial, hence the same eigenvalues (with the same algebraic multiplicities).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1) Trace:</strong> \\(\\operatorname{tr}(P^{-1}AP) = \\operatorname{tr}(AP \\cdot P^{-1}) = \\operatorname{tr}(A)\\), using the cyclic property \\(\\operatorname{tr}(XY) = \\operatorname{tr}(YX)\\).</p>

                        <p><strong>(2) Determinant:</strong> \\(\\det(P^{-1}AP) = \\det(P^{-1})\\det(A)\\det(P) = \\frac{1}{\\det P} \\cdot \\det(A) \\cdot \\det(P) = \\det(A)\\).</p>

                        <p><strong>(3) Rank:</strong> Since \\(P\\) is invertible, the map \\(x \\mapsto Px\\) is an isomorphism \\(\\mathbb{R}^n \\to \\mathbb{R}^n\\). The column spaces of \\(A\\) and \\(B\\) have the same dimension because multiplication by invertible matrices preserves rank.</p>

                        <p><strong>(4) Nullity:</strong> Follows from (3) and the Dimension Theorem.</p>

                        <p><strong>(5) Characteristic polynomial:</strong></p>
                        \\[\\det(B - \\lambda I) = \\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.4 (Trace and Determinant of a Linear Operator)</div>
                    <div class="env-body">
                        <p>Since trace and determinant are similarity invariants, we can <em>define</em> them for a linear operator \\(T: V \\to V\\) (not just for a matrix) by choosing any basis \\(\\mathcal{B}\\) and setting</p>
                        \\[\\operatorname{tr}(T) = \\operatorname{tr}([T]_{\\mathcal{B}}), \\qquad \\det(T) = \\det([T]_{\\mathcal{B}}).\\]
                        <p>The result is independent of the choice of \\(\\mathcal{B}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.5</div>
                    <div class="env-body">
                        <p>Consider \\(A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}\\) and its similar diagonal form \\(D = \\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix}\\).</p>
                        <ul>
                            <li>\\(\\operatorname{tr}(A) = 6 = \\operatorname{tr}(D) = 4 + 2\\).</li>
                            <li>\\(\\det(A) = 9 - 1 = 8 = \\det(D) = 4 \\cdot 2\\).</li>
                            <li>Eigenvalues of both: \\(\\lambda = 4\\) and \\(\\lambda = 2\\).</li>
                            <li>Rank of both: 2.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Sharing all similarity invariants does <em>not</em> guarantee similarity! For example, \\(I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\) and \\(J = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\) have the same trace (2), determinant (1), eigenvalues (both 1), rank (2), and characteristic polynomial \\((\\lambda - 1)^2\\). But they are not similar (\\(P^{-1}IP = I \\neq J\\) for any \\(P\\)). The <em>geometric</em> multiplicity of the eigenvalue differs.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 (Trace Identities)</div>
                    <div class="env-body">
                        <p>For any \\(n \\times n\\) matrices \\(A, B\\) and scalar \\(\\alpha\\):</p>
                        <ol>
                            <li>\\(\\operatorname{tr}(A + B) = \\operatorname{tr}(A) + \\operatorname{tr}(B)\\).</li>
                            <li>\\(\\operatorname{tr}(\\alpha A) = \\alpha\\,\\operatorname{tr}(A)\\).</li>
                            <li>\\(\\operatorname{tr}(AB) = \\operatorname{tr}(BA)\\) (even if \\(AB \\neq BA\\)).</li>
                            <li>\\(\\operatorname{tr}(A) = \\sum_{i=1}^n \\lambda_i\\) (sum of eigenvalues, counted with algebraic multiplicity).</li>
                            <li>\\(\\det(A) = \\prod_{i=1}^n \\lambda_i\\) (product of eigenvalues).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1)-(2) follow directly from the definition \\(\\operatorname{tr}(A) = \\sum_i a_{ii}\\).</p>
                        <p>(3) \\(\\operatorname{tr}(AB) = \\sum_i \\sum_j a_{ij} b_{ji} = \\sum_j \\sum_i b_{ji} a_{ij} = \\operatorname{tr}(BA)\\).</p>
                        <p>(4)-(5) The characteristic polynomial is \\(\\det(A - \\lambda I) = (-1)^n (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)\\). Expanding, the coefficient of \\((-\\lambda)^{n-1}\\) gives the trace, and the constant term gives the determinant (up to sign).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The trace is the simplest similarity invariant but perhaps the most underappreciated. It is the "shadow" of the full eigenvalue structure: knowing all eigenvalues determines the trace, but not vice versa. For \\(2 \\times 2\\) matrices, knowing the trace and determinant determines the eigenvalues (via \\(\\lambda^2 - \\operatorname{tr}(A)\\lambda + \\det(A) = 0\\)).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Verify that \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 3 & 5 \\\\ 0 & 2 \\end{pmatrix}\\) are similar by checking the invariants and finding \\(P\\).',
                    hint: 'Check tr, det, eigenvalues. For \\(P\\), note both are upper triangular with eigenvalues 2 and 3. Find eigenvectors.',
                    solution: '\\(\\operatorname{tr}(A) = 5 = \\operatorname{tr}(B)\\), \\(\\det(A) = 6 = \\det(B)\\), eigenvalues \\(\\{2, 3\\}\\) for both. Eigenvectors of \\(A\\): \\((1,0)\\) for \\(\\lambda=2\\), \\((1,1)\\) for \\(\\lambda=3\\). Eigenvectors of \\(B\\): \\((-5,1)\\) for \\(\\lambda=2\\), \\((1,0)\\) for \\(\\lambda=3\\). Let \\(P_A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\), \\(P_B = \\begin{pmatrix} -5 & 1 \\\\ 1 & 0 \\end{pmatrix}\\). Then \\(P_A^{-1}AP_A = D = P_B^{-1}BP_B\\), so \\(B = (P_B P_A^{-1})^{-1} A (P_B P_A^{-1})\\).'
                },
                {
                    question: 'Prove that if \\(A\\) is nilpotent (i.e., \\(A^k = 0\\) for some \\(k\\)), then \\(\\operatorname{tr}(A) = 0\\) and \\(\\det(A) = 0\\).',
                    hint: 'What are the eigenvalues of a nilpotent matrix?',
                    solution: 'If \\(A^k = 0\\) and \\(\\lambda\\) is an eigenvalue with eigenvector \\(v\\), then \\(0 = A^k v = \\lambda^k v\\), so \\(\\lambda = 0\\). All eigenvalues are 0. Therefore \\(\\operatorname{tr}(A) = \\sum \\lambda_i = 0\\) and \\(\\det(A) = \\prod \\lambda_i = 0\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(3 \\times 3\\) with eigenvalues \\(1, 2, 4\\). Without computing \\(A\\), find \\(\\operatorname{tr}(A)\\), \\(\\det(A)\\), and \\(\\operatorname{tr}(A^2)\\).',
                    hint: 'The eigenvalues of \\(A^2\\) are the squares of the eigenvalues of \\(A\\).',
                    solution: '\\(\\operatorname{tr}(A) = 1 + 2 + 4 = 7\\). \\(\\det(A) = 1 \\cdot 2 \\cdot 4 = 8\\). The eigenvalues of \\(A^2\\) are \\(1, 4, 16\\), so \\(\\operatorname{tr}(A^2) = 1 + 4 + 16 = 21\\).'
                },
                {
                    question: 'Prove that \\(\\operatorname{tr}(AB) = \\operatorname{tr}(BA)\\) even when \\(A\\) is \\(m \\times n\\) and \\(B\\) is \\(n \\times m\\) (so \\(AB\\) and \\(BA\\) have different sizes).',
                    hint: 'Write out the trace as a double sum and swap the order of summation.',
                    solution: '\\(\\operatorname{tr}(AB) = \\sum_{i=1}^m (AB)_{ii} = \\sum_{i=1}^m \\sum_{k=1}^n a_{ik} b_{ki}\\). \\(\\operatorname{tr}(BA) = \\sum_{k=1}^n (BA)_{kk} = \\sum_{k=1}^n \\sum_{i=1}^m b_{ki} a_{ik}\\). These are the same double sum.'
                },
                {
                    question: 'Show that the rank is a similarity invariant by a direct argument (without using determinants or eigenvalues).',
                    hint: 'If \\(B = P^{-1}AP\\), relate the null spaces of \\(A\\) and \\(B\\). Use the fact that multiplication by an invertible matrix does not change rank.',
                    solution: '\\(Bx = 0 \\Leftrightarrow P^{-1}APx = 0 \\Leftrightarrow A(Px) = 0\\). So \\(x \\in \\ker B \\Leftrightarrow Px \\in \\ker A\\). Since \\(P\\) is invertible, this is a bijection between \\(\\ker B\\) and \\(\\ker A\\), so \\(\\operatorname{nullity}(B) = \\operatorname{nullity}(A)\\). By the Dimension Theorem, \\(\\operatorname{rank}(B) = n - \\operatorname{nullity}(B) = n - \\operatorname{nullity}(A) = \\operatorname{rank}(A)\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Finding Good Bases (Preview of Diagonalization)
        // ============================================================
        {
            id: 'ch07-sec05',
            title: 'Finding Good Bases',
            content: `
                <h2>Finding Good Bases: Preview of Diagonalization</h2>

                <div class="env-block motivation">
                    <div class="env-title">The Quest for the Simplest Matrix</div>
                    <div class="env-body">
                        <p>Different bases yield different matrices for the same operator, and some matrices are much simpler than others. The ideal scenario is a <strong>diagonal</strong> matrix, where the operator acts by simply scaling along each basis direction. This happens precisely when we can find a basis of eigenvectors. This section previews the diagonalization program that will be developed fully in Chapters 10-11.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.5 (Diagonalizable)</div>
                    <div class="env-body">
                        <p>An \\(n \\times n\\) matrix \\(A\\) is <strong>diagonalizable</strong> if \\(A\\) is similar to a diagonal matrix, i.e., there exists an invertible \\(P\\) such that \\(P^{-1}AP = D\\) where \\(D\\) is diagonal. Equivalently, a linear operator \\(T: V \\to V\\) is diagonalizable if there exists a basis \\(\\mathcal{B}\\) such that \\([T]_{\\mathcal{B}}\\) is diagonal.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.7 (Diagonalization Criterion)</div>
                    <div class="env-body">
                        <p>An \\(n \\times n\\) matrix \\(A\\) is diagonalizable if and only if \\(A\\) has \\(n\\) linearly independent eigenvectors.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> If \\(P^{-1}AP = D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then \\(AP = PD\\). Writing \\(P = [p_1 \\mid \\cdots \\mid p_n]\\), the \\(j\\)-th column gives \\(Ap_j = \\lambda_j p_j\\). So each column of \\(P\\) is an eigenvector, and since \\(P\\) is invertible, these \\(n\\) eigenvectors are linearly independent.</p>

                        <p><strong>(\\(\\Leftarrow\\))</strong> Conversely, if \\(p_1, \\ldots, p_n\\) are \\(n\\) linearly independent eigenvectors with \\(Ap_j = \\lambda_j p_j\\), form \\(P = [p_1 \\mid \\cdots \\mid p_n]\\). Then \\(AP = PD\\) where \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\). Since \\(P\\) is invertible, \\(P^{-1}AP = D\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.6 (A Diagonalizable Matrix)</div>
                    <div class="env-body">
                        <p>Consider \\(A = \\begin{pmatrix} 5 & -2 \\\\ -2 & 2 \\end{pmatrix}\\).</p>
                        <p><strong>Step 1: Eigenvalues.</strong> \\(\\det(A - \\lambda I) = (5 - \\lambda)(2 - \\lambda) - 4 = \\lambda^2 - 7\\lambda + 6 = (\\lambda - 1)(\\lambda - 6) = 0\\), so \\(\\lambda_1 = 1\\), \\(\\lambda_2 = 6\\).</p>
                        <p><strong>Step 2: Eigenvectors.</strong> For \\(\\lambda = 1\\): \\(\\begin{pmatrix} 4 & -2 \\\\ -2 & 1 \\end{pmatrix}v = 0\\) gives \\(v_1 = (1, 2)\\). For \\(\\lambda = 6\\): \\(\\begin{pmatrix} -1 & -2 \\\\ -2 & -4 \\end{pmatrix}v = 0\\) gives \\(v_2 = (2, -1)\\).</p>
                        <p><strong>Step 3: Diagonalize.</strong> \\(P = \\begin{pmatrix} 1 & 2 \\\\ 2 & -1 \\end{pmatrix}\\), and \\(P^{-1}AP = \\begin{pmatrix} 1 & 0 \\\\ 0 & 6 \\end{pmatrix}\\).</p>
                        <p>In the eigenbasis, \\(A\\) simply scales by 1 along \\((1,2)\\) and by 6 along \\((2,-1)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.7 (A Non-Diagonalizable Matrix)</div>
                    <div class="env-body">
                        <p>The matrix \\(A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\) has only the eigenvalue \\(\\lambda = 1\\) (double). The eigenspace is \\(\\ker(A - I) = \\ker \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\operatorname{span}\\{(1,0)\\}\\), which is 1-dimensional. We cannot find 2 linearly independent eigenvectors, so \\(A\\) is not diagonalizable.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.8 (Sufficient Condition for Diagonalizability)</div>
                    <div class="env-body">
                        <p>If an \\(n \\times n\\) matrix \\(A\\) has \\(n\\) distinct eigenvalues, then \\(A\\) is diagonalizable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We prove that eigenvectors corresponding to distinct eigenvalues are linearly independent.</p>
                        <p>Let \\(\\lambda_1, \\ldots, \\lambda_k\\) be distinct eigenvalues with eigenvectors \\(v_1, \\ldots, v_k\\). Suppose \\(\\sum_{i=1}^k c_i v_i = 0\\). Applying \\(A\\) gives \\(\\sum c_i \\lambda_i v_i = 0\\). Subtracting \\(\\lambda_k\\) times the first equation: \\(\\sum_{i=1}^{k-1} c_i (\\lambda_i - \\lambda_k) v_i = 0\\). By induction on \\(k\\), all \\(c_i(\\lambda_i - \\lambda_k) = 0\\). Since the eigenvalues are distinct, \\(\\lambda_i - \\lambda_k \\neq 0\\) for \\(i < k\\), so all \\(c_i = 0\\).</p>
                        <p>With \\(n\\) distinct eigenvalues, we get \\(n\\) linearly independent eigenvectors.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div name="env-body">
                        <p>The converse is false: a matrix can be diagonalizable even with repeated eigenvalues (e.g., \\(I\\) has only \\(\\lambda = 1\\) but is already diagonal). The precise condition involves the geometric multiplicity of each eigenvalue equaling its algebraic multiplicity. Full details come in Chapter 11.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Looking Ahead</div>
                    <div class="env-body">
                        <p>When diagonalization fails (like \\(\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\)), the next best thing is the <strong>Jordan normal form</strong>: a block-diagonal matrix with ones on the superdiagonal of each block. Every matrix over \\(\\mathbb{C}\\) is similar to a Jordan form, giving a complete classification (Chapter 12). For real symmetric matrices, something even better happens: they are <em>always</em> diagonalizable by an <em>orthogonal</em> matrix (the Spectral Theorem, Chapter 16).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.3 (Powers of Diagonalizable Matrices)</div>
                    <div class="env-body">
                        <p>If \\(A = PDP^{-1}\\) with \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then</p>
                        \\[A^k = P D^k P^{-1} = P\\,\\operatorname{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)\\,P^{-1}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.8 (Fibonacci via Diagonalization)</div>
                    <div class="env-body">
                        <p>The Fibonacci recurrence \\(F_{n+1} = F_n + F_{n-1}\\) can be written in matrix form:</p>
                        \\[\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}^n \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}.\\]
                        <p>The matrix \\(A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}\\) has eigenvalues \\(\\phi = \\frac{1+\\sqrt{5}}{2}\\) and \\(\\hat{\\phi} = \\frac{1-\\sqrt{5}}{2}\\). Diagonalizing and taking powers gives the Binet formula:</p>
                        \\[F_n = \\frac{\\phi^n - \\hat{\\phi}^n}{\\sqrt{5}}.\\]
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Diagonalize \\(A = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}\\), i.e., find \\(P\\) and \\(D\\) such that \\(A = PDP^{-1}\\).',
                    hint: 'Find eigenvalues from \\(\\det(A - \\lambda I) = 0\\), then eigenvectors.',
                    solution: '\\(\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5) = 0\\). Eigenvalues: \\(\\lambda_1 = 2, \\lambda_2 = 5\\). Eigenvector for \\(\\lambda = 2\\): solve \\(\\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix}v = 0\\), giving \\(v_1 = (1, -1)\\). For \\(\\lambda = 5\\): solve \\(\\begin{pmatrix} -1 & 2 \\\\ 1 & -2 \\end{pmatrix}v = 0\\), giving \\(v_2 = (2, 1)\\). So \\(P = \\begin{pmatrix} 1 & 2 \\\\ -1 & 1 \\end{pmatrix}\\), \\(D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}\\).'
                },
                {
                    question: 'Use diagonalization to compute \\(A^{10}\\) where \\(A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix}\\).',
                    hint: 'Diagonalize \\(A\\) first. Then \\(A^{10} = PD^{10}P^{-1}\\).',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 1, \\lambda_2 = 2\\). Eigenvectors: \\(v_1 = (1, 0)\\) for \\(\\lambda = 1\\), \\(v_2 = (1, 1)\\) for \\(\\lambda = 2\\). \\(P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\), \\(P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}\\). \\(A^{10} = P \\begin{pmatrix} 1 & 0 \\\\ 0 & 1024 \\end{pmatrix} P^{-1} = \\begin{pmatrix} 1 & 1023 \\\\ 0 & 1024 \\end{pmatrix}\\).'
                },
                {
                    question: 'Show that a projection \\(P\\) (satisfying \\(P^2 = P\\)) is diagonalizable, and its eigenvalues are 0 and 1.',
                    hint: 'If \\(P^2 = P\\), then \\(P(P - I) = 0\\). What does this say about the eigenvalues? Use the decomposition \\(V = \\ker P \\oplus \\operatorname{im} P\\).',
                    solution: 'If \\(\\lambda\\) is an eigenvalue with \\(Pv = \\lambda v\\), then \\(P^2 v = \\lambda^2 v\\) and \\(Pv = \\lambda v\\), so \\(\\lambda^2 = \\lambda\\), giving \\(\\lambda = 0\\) or \\(\\lambda = 1\\). The eigenspace for 0 is \\(\\ker P\\), and for 1 it is \\(\\operatorname{im} P\\) (since \\(w \\in \\operatorname{im} P \\Rightarrow w = Pu \\Rightarrow Pw = P^2 u = Pu = w\\)). Since \\(V = \\ker P \\oplus \\operatorname{im} P\\), the eigenvectors span \\(V\\), so \\(P\\) is diagonalizable.'
                },
                {
                    question: 'Prove that \\(A\\) and \\(A^\\top\\) always have the same eigenvalues.',
                    hint: 'Show they have the same characteristic polynomial. Use \\(\\det(M) = \\det(M^\\top)\\).',
                    solution: '\\(\\det(A^\\top - \\lambda I) = \\det((A - \\lambda I)^\\top) = \\det(A - \\lambda I)\\). So \\(A\\) and \\(A^\\top\\) have the same characteristic polynomial, hence the same eigenvalues.'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\) (rotation by \\(\\pi/2\\)). Show that \\(A\\) is not diagonalizable over \\(\\mathbb{R}\\) but is diagonalizable over \\(\\mathbb{C}\\).',
                    hint: 'Compute the characteristic polynomial. Are the roots real?',
                    solution: '\\(\\det(A - \\lambda I) = \\lambda^2 + 1\\). Over \\(\\mathbb{R}\\), this has no roots, so \\(A\\) has no real eigenvalues and is not diagonalizable over \\(\\mathbb{R}\\). Over \\(\\mathbb{C}\\), the roots are \\(\\lambda = \\pm i\\). Eigenvectors: for \\(i\\), solve \\(\\begin{pmatrix} -i & -1 \\\\ 1 & -i \\end{pmatrix}v = 0\\), giving \\(v = (1, -i)\\). For \\(-i\\): \\(v = (1, i)\\). These are linearly independent over \\(\\mathbb{C}\\), so \\(A\\) is diagonalizable over \\(\\mathbb{C}\\): \\(P^{-1}AP = \\begin{pmatrix} i & 0 \\\\ 0 & -i \\end{pmatrix}\\).'
                },
                {
                    question: 'Prove: if \\(A\\) is diagonalizable, then \\(A^\\top\\) is also diagonalizable.',
                    hint: 'If \\(A = PDP^{-1}\\), take the transpose of both sides.',
                    solution: '\\(A^\\top = (PDP^{-1})^\\top = (P^{-1})^\\top D^\\top P^\\top = (P^\\top)^{-1} D P^\\top\\). Since \\(D^\\top = D\\) (diagonal matrices are symmetric), we have \\(A^\\top = (P^\\top)^{-1} D P^\\top\\), showing \\(A^\\top\\) is similar to \\(D\\), hence diagonalizable.'
                }
            ]
        }
    ]
});
