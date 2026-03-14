// ================================================================
// Chapter 5 — Four Fundamental Subspaces
// Creative theme: "The Complete Picture"
//   Every m x n matrix A defines four subspaces that together tell
//   the full story of A as a linear map.  Column space and null
//   space live in R^n and R^m in complementary pairs, linked by
//   the Fundamental Theorem of Linear Algebra.  Strang's four-
//   subspace diagram is the crowning achievement of this chapter.
// ================================================================
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Four Fundamental Subspaces',
    subtitle: 'Column space, null space, row space, left null space — the complete picture',
    sections: [
        // ============================================================
        //  SECTION 1 — Column Space and Null Space
        // ============================================================
        {
            id: 'ch05-sec01',
            title: 'Column Space and Null Space',
            content: `
                <h2>Column Space and Null Space</h2>

                <div class="env-block motivation">
                    <div class="env-title">The Two Sides of \\(A\\mathbf{x} = \\mathbf{b}\\)</div>
                    <div class="env-body">
                        <p>Every \\(m \\times n\\) matrix \\(A\\) defines a linear map \\(T(\\mathbf{x}) = A\\mathbf{x}\\) from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\).  Two fundamental questions arise: (1) <em>What can \\(A\\) hit?</em> (the column space) and (2) <em>What does \\(A\\) crush to zero?</em> (the null space).  These two subspaces, together with their counterparts for \\(A^T\\), form the four fundamental subspaces that completely describe the geometry of \\(A\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 — Column Space</div>
                    <div class="env-body">
                        <p>The <strong>column space</strong> (or <strong>range</strong>) of an \\(m \\times n\\) matrix \\(A\\) is</p>
                        \\[
                            C(A) = \\{A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n\\} = \\operatorname{span}\\{\\mathbf{a}_1, \\ldots, \\mathbf{a}_n\\},
                        \\]
                        <p>where \\(\\mathbf{a}_1, \\ldots, \\mathbf{a}_n\\) are the columns of \\(A\\).  This is a subspace of \\(\\mathbb{R}^m\\) with \\(\\dim C(A) = \\operatorname{rank}(A)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.2 — Null Space (Kernel)</div>
                    <div class="env-body">
                        <p>The <strong>null space</strong> (or <strong>kernel</strong>) of \\(A\\) is</p>
                        \\[
                            N(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}.
                        \\]
                        <p>This is a subspace of \\(\\mathbb{R}^n\\) with \\(\\dim N(A) = n - \\operatorname{rank}(A)\\) (by the Rank-Nullity Theorem).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.3 — Computing \\(C(A)\\)</div>
                    <div class="env-body">
                        <p>To find a basis for \\(C(A)\\):</p>
                        <ol>
                            <li>Row reduce \\(A\\) to echelon form.</li>
                            <li>Identify the pivot columns.</li>
                            <li>The corresponding columns <em>of the original matrix \\(A\\)</em> form a basis for \\(C(A)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Use the pivot columns of \\(A\\), <em>not</em> the pivot columns of the echelon form.  Row operations change the column space!  (They preserve the row space, but alter which columns are actually present.)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Finding \\(C(A)\\) and \\(N(A)\\)</div>
                    <div class="env-body">
                        <p>Let \\(A = \\begin{pmatrix}1 & 3 & 5 & 2\\\\2 & 6 & 10 & 4\\\\1 & 3 & 6 & 5\\end{pmatrix}\\).  Row reduce:</p>
                        \\[
                            A \\to \\begin{pmatrix}1 & 3 & 5 & 2\\\\0 & 0 & 0 & 0\\\\0 & 0 & 1 & 3\\end{pmatrix} \\to \\begin{pmatrix}1 & 3 & 5 & 2\\\\0 & 0 & 1 & 3\\\\0 & 0 & 0 & 0\\end{pmatrix}.
                        \\]
                        <p>Pivots in columns 1 and 3.  So a basis for \\(C(A)\\) is</p>
                        \\[
                            \\left\\{\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix},\\;\\begin{pmatrix}5\\\\10\\\\6\\end{pmatrix}\\right\\}.
                        \\]
                        <p>For \\(N(A)\\): free variables are \\(x_2\\) and \\(x_4\\).  Back-substitute from the echelon form to get</p>
                        \\[
                            \\mathbf{x} = x_2\\begin{pmatrix}-3\\\\1\\\\0\\\\0\\end{pmatrix} + x_4\\begin{pmatrix}13\\\\0\\\\-3\\\\1\\end{pmatrix}.
                        \\]
                        <p>So \\(\\dim C(A) = 2\\) and \\(\\dim N(A) = 2\\), consistent with \\(2 + 2 = 4 = n\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.4 — Structure of Solutions to \\(A\\mathbf{x} = \\mathbf{b}\\)</div>
                    <div class="env-body">
                        <p>If \\(A\\mathbf{x} = \\mathbf{b}\\) is consistent with a particular solution \\(\\mathbf{x}_p\\), then the complete solution set is the <strong>affine subspace</strong></p>
                        \\[
                            \\{\\mathbf{x}_p + \\mathbf{h} : \\mathbf{h} \\in N(A)\\} = \\mathbf{x}_p + N(A).
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If \\(A\\mathbf{x}_p = \\mathbf{b}\\) and \\(\\mathbf{h} \\in N(A)\\), then \\(A(\\mathbf{x}_p + \\mathbf{h}) = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}\\).  Conversely, if \\(A\\mathbf{x} = \\mathbf{b}\\), then \\(A(\\mathbf{x} - \\mathbf{x}_p) = \\mathbf{0}\\), so \\(\\mathbf{x} - \\mathbf{x}_p \\in N(A)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Picture: Column Space and Null Space</div>
                    <div class="env-body">
                        <p>For a \\(2 \\times 2\\) matrix, if \\(\\operatorname{rank}(A) = 1\\), then \\(C(A)\\) is a line through the origin in \\(\\mathbb{R}^2\\) (the output space), and \\(N(A)\\) is a line through the origin in \\(\\mathbb{R}^2\\) (the input space).  The matrix "projects" the entire plane onto a line, collapsing one direction to zero.  The visualization below lets you explore this.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-col-null-space"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-col-null-space',
                    title: 'Column Space & Null Space of a 2\u00D72 Matrix',
                    description: 'Drag the matrix entries to see how the column space (orange line/plane) and null space (blue line/point) change.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { scale: 40 });
                        var ctx = viz.ctx;

                        var a = 1, b = 2, c = 0.5, d = 1;

                        var sA = VizEngine.createSlider(controls, 'a\u2081\u2081', -3, 3, a, 0.1, function(v) { a = v; });
                        var sB = VizEngine.createSlider(controls, 'a\u2081\u2082', -3, 3, b, 0.1, function(v) { b = v; });
                        var sC = VizEngine.createSlider(controls, 'a\u2082\u2081', -3, 3, c, 0.1, function(v) { c = v; });
                        var sD = VizEngine.createSlider(controls, 'a\u2082\u2082', -3, 3, d, 0.1, function(v) { d = v; });

                        VizEngine.createButton(controls, 'Rank 1', function() {
                            a = 1; b = 2; c = 0.5; d = 1;
                            sA.value = a; sB.value = b; sC.value = c; sD.value = d;
                        });
                        VizEngine.createButton(controls, 'Rank 2', function() {
                            a = 1; b = 0; c = 0; d = 1;
                            sA.value = a; sB.value = b; sC.value = c; sD.value = d;
                        });
                        VizEngine.createButton(controls, 'Rank 0', function() {
                            a = 0; b = 0; c = 0; d = 0;
                            sA.value = a; sB.value = b; sC.value = c; sD.value = d;
                        });

                        function draw() {
                            viz.clear();
                            var M = [[a, b], [c, d]];
                            var det = VizEngine.det2(M);
                            var rank;
                            var tol = 0.05;

                            // Determine rank
                            if (Math.abs(a) < tol && Math.abs(b) < tol && Math.abs(c) < tol && Math.abs(d) < tol) {
                                rank = 0;
                            } else if (Math.abs(det) < tol) {
                                rank = 1;
                            } else {
                                rank = 2;
                            }

                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw column space
                            if (rank === 2) {
                                // Full plane
                                ctx.fillStyle = viz.colors.orange + '11';
                                ctx.fillRect(0, 0, viz.width, viz.height);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('C(A) = \u211D\u00B2 (full plane)', viz.width - 10, viz.height - 10);
                            } else if (rank === 1) {
                                // Line through origin in direction of first nonzero column
                                var colX = a, colY = c;
                                if (Math.abs(colX) < tol && Math.abs(colY) < tol) {
                                    colX = b; colY = d;
                                }
                                viz.drawLine(0, 0, colX, colY, viz.colors.orange, 2.5);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('C(A): line', viz.width - 10, viz.height - 10);
                            } else {
                                viz.drawPoint(0, 0, viz.colors.orange, 'C(A) = {0}', 6);
                            }

                            // Draw null space
                            if (rank === 2) {
                                viz.drawPoint(0, 0, viz.colors.blue, 'N(A) = {0}', 5);
                            } else if (rank === 1) {
                                // Null space direction: solve Ax = 0
                                var nx, ny;
                                if (Math.abs(a) > tol || Math.abs(b) > tol) {
                                    // First row: ax + by = 0 => direction (-b, a)
                                    nx = -b; ny = a;
                                } else {
                                    // Second row: cx + dy = 0 => direction (-d, c)
                                    nx = -d; ny = c;
                                }
                                viz.drawLine(0, 0, nx, ny, viz.colors.blue, 2.5, false);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('N(A): line', 10, viz.height - 10);
                            } else {
                                ctx.fillStyle = viz.colors.blue + '11';
                                ctx.fillRect(0, 0, viz.width, viz.height);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('N(A) = \u211D\u00B2 (full plane)', 10, viz.height - 10);
                            }

                            // Draw column vectors
                            viz.drawVec(a, c, viz.colors.orange, 'col\u2081', 2);
                            viz.drawVec(b, d, viz.colors.yellow, 'col\u2082', 2);

                            // Info box
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(8, 8, 220, 72);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('A = [' + a.toFixed(1) + ' ' + b.toFixed(1) + ' ; ' + c.toFixed(1) + ' ' + d.toFixed(1) + ']', 16, 14);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('rank = ' + rank + ',  nullity = ' + (2 - rank), 16, 36);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('det = ' + det.toFixed(3), 16, 56);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find a basis for the column space and null space of \\(A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 0 & 1\\\\1 & 2 & 1\\end{pmatrix}\\).',
                    hint: 'Row reduce \\(A\\) to find pivot columns.  For \\(N(A)\\), solve \\(A\\mathbf{x} = \\mathbf{0}\\) using back-substitution from the echelon form.',
                    solution: 'Row reduce: \\(R_3 - R_1 \\to \\begin{pmatrix}1&2&0\\\\0&0&1\\\\0&0&1\\end{pmatrix} \\to \\begin{pmatrix}1&2&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}\\).  Pivots in columns 1 and 3.  Basis for \\(C(A)\\): \\(\\{(1,0,1)^T, (0,1,1)^T\\}\\) (columns 1 and 3 of \\(A\\)).  Free variable \\(x_2\\): from RREF, \\(x_1 = -2x_2\\), \\(x_3 = 0\\).  Basis for \\(N(A)\\): \\(\\{(-2,1,0)^T\\}\\).'
                },
                {
                    question: 'True or false: if \\(\\mathbf{b} \\in C(A)\\), then \\(A\\mathbf{x} = \\mathbf{b}\\) has exactly one solution.',
                    hint: 'Being in the column space guarantees consistency, but what about uniqueness?',
                    solution: 'False.  \\(\\mathbf{b} \\in C(A)\\) guarantees <em>at least</em> one solution, but if \\(N(A) \\neq \\{\\mathbf{0}\\}\\), there are infinitely many.  The full solution set is \\(\\mathbf{x}_p + N(A)\\).'
                },
                {
                    question: 'Show that \\(C(A) = \\{\\mathbf{0}\\}\\) if and only if \\(A = 0\\) (the zero matrix).',
                    hint: 'If \\(C(A) = \\{\\mathbf{0}\\}\\), what can you say about each column of \\(A\\)?',
                    solution: '(\\(\\Leftarrow\\)) If \\(A = 0\\), then \\(A\\mathbf{x} = \\mathbf{0}\\) for all \\(\\mathbf{x}\\), so \\(C(A) = \\{\\mathbf{0}\\}\\).  (\\(\\Rightarrow\\)) If \\(C(A) = \\{\\mathbf{0}\\}\\), then in particular \\(A\\mathbf{e}_j = \\mathbf{0}\\) for each standard basis vector, so every column of \\(A\\) is \\(\\mathbf{0}\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(3 \\times 5\\) with \\(\\operatorname{rank}(A) = 3\\).  What is \\(\\dim N(A)\\)?  Is \\(A\\mathbf{x} = \\mathbf{b}\\) solvable for every \\(\\mathbf{b} \\in \\mathbb{R}^3\\)?',
                    hint: 'Use Rank-Nullity.  For surjectivity, compare \\(\\dim C(A)\\) to \\(\\dim \\mathbb{R}^3\\).',
                    solution: '\\(\\dim N(A) = 5 - 3 = 2\\).  Since \\(\\dim C(A) = 3 = \\dim \\mathbb{R}^3\\), the column space is all of \\(\\mathbb{R}^3\\), so \\(A\\mathbf{x} = \\mathbf{b}\\) is solvable for every \\(\\mathbf{b}\\).  (Each solution is non-unique, as nullity = 2.)'
                },
                {
                    question: 'Prove that \\(N(A) = N(A^T A)\\) for any real matrix \\(A\\).',
                    hint: 'Show \\(N(A) \\subseteq N(A^TA)\\) trivially.  For the reverse, if \\(A^TA\\mathbf{x} = \\mathbf{0}\\), compute \\(\\mathbf{x}^T A^T A \\mathbf{x}\\).',
                    solution: '(\\(\\subseteq\\)) If \\(A\\mathbf{x} = \\mathbf{0}\\), then \\(A^TA\\mathbf{x} = A^T\\mathbf{0} = \\mathbf{0}\\).  (\\(\\supseteq\\)) If \\(A^TA\\mathbf{x} = \\mathbf{0}\\), then \\(\\mathbf{x}^TA^TA\\mathbf{x} = 0\\), i.e., \\(\\|A\\mathbf{x}\\|^2 = 0\\), so \\(A\\mathbf{x} = \\mathbf{0}\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 2 — Row Space and Left Null Space
        // ============================================================
        {
            id: 'ch05-sec02',
            title: 'Row Space and Left Null Space',
            content: `
                <h2>Row Space and Left Null Space</h2>

                <p>We now turn to the two subspaces associated with \\(A^T\\).  Together with the column space and null space, they form the four fundamental subspaces of \\(A\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.5 — Row Space</div>
                    <div class="env-body">
                        <p>The <strong>row space</strong> of an \\(m \\times n\\) matrix \\(A\\) is</p>
                        \\[
                            C(A^T) = \\operatorname{span}\\{\\text{rows of } A\\}.
                        \\]
                        <p>Equivalently, \\(C(A^T)\\) is the column space of \\(A^T\\).  This is a subspace of \\(\\mathbb{R}^n\\) with \\(\\dim C(A^T) = \\operatorname{rank}(A)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.6 — Left Null Space</div>
                    <div class="env-body">
                        <p>The <strong>left null space</strong> of \\(A\\) is</p>
                        \\[
                            N(A^T) = \\{\\mathbf{y} \\in \\mathbb{R}^m : A^T\\mathbf{y} = \\mathbf{0}\\} = \\{\\mathbf{y} \\in \\mathbb{R}^m : \\mathbf{y}^T A = \\mathbf{0}^T\\}.
                        \\]
                        <p>This is a subspace of \\(\\mathbb{R}^m\\) with \\(\\dim N(A^T) = m - \\operatorname{rank}(A)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why "Left" Null Space?</div>
                    <div class="env-body">
                        <p>The name comes from \\(\\mathbf{y}^T A = \\mathbf{0}^T\\): the vector \\(\\mathbf{y}\\) multiplies \\(A\\) from the <em>left</em>.  Geometrically, \\(\\mathbf{y}\\) is orthogonal to every column of \\(A\\), which explains its intimate relationship with the column space.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.7 — Computing the Row Space</div>
                    <div class="env-body">
                        <p>Row operations <em>preserve</em> the row space.  Therefore, the nonzero rows of any echelon form of \\(A\\) form a basis for \\(C(A^T)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Each elementary row operation replaces a row with a linear combination of rows.  The new row lies in the span of the old rows, and the operation is invertible, so the reverse also holds.  Hence the row space is unchanged.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Computing All Four Subspaces</div>
                    <div class="env-body">
                        <p>Let \\(A = \\begin{pmatrix}1 & 2 & 3\\\\2 & 4 & 7\\end{pmatrix}\\).  Row reduce: \\(R_2 - 2R_1 \\to \\begin{pmatrix}1&2&3\\\\0&0&1\\end{pmatrix}\\).</p>
                        <ul>
                            <li><strong>\\(C(A)\\):</strong> Pivot columns 1, 3. Basis: \\(\\{(1,2)^T, (3,7)^T\\}\\).  \\(\\dim = 2\\).</li>
                            <li><strong>\\(N(A)\\):</strong> Free variable \\(x_2\\).  From RREF: \\(x_3 = 0\\), \\(x_1 = -2x_2\\).  Basis: \\(\\{(-2,1,0)^T\\}\\).  \\(\\dim = 1\\).</li>
                            <li><strong>\\(C(A^T)\\):</strong> Nonzero rows of echelon form: \\(\\{(1,2,3), (0,0,1)\\}\\).  \\(\\dim = 2\\).</li>
                            <li><strong>\\(N(A^T)\\):</strong> \\(\\dim = m - r = 2 - 2 = 0\\).  So \\(N(A^T) = \\{\\mathbf{0}\\}\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Summary Table of the Four Subspaces</div>
                    <div class="env-body">
                        <table style="width:100%;border-collapse:collapse;margin:8px 0;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="text-align:left;padding:4px 8px;">Subspace</th>
                                <th style="text-align:left;padding:4px 8px;">Lives in</th>
                                <th style="text-align:left;padding:4px 8px;">Dimension</th>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Column space \\(C(A)\\)</td>
                                <td style="padding:4px 8px;">\\(\\mathbb{R}^m\\)</td>
                                <td style="padding:4px 8px;">\\(r\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Null space \\(N(A)\\)</td>
                                <td style="padding:4px 8px;">\\(\\mathbb{R}^n\\)</td>
                                <td style="padding:4px 8px;">\\(n - r\\)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #1a1a40;">
                                <td style="padding:4px 8px;">Row space \\(C(A^T)\\)</td>
                                <td style="padding:4px 8px;">\\(\\mathbb{R}^n\\)</td>
                                <td style="padding:4px 8px;">\\(r\\)</td>
                            </tr>
                            <tr>
                                <td style="padding:4px 8px;">Left null space \\(N(A^T)\\)</td>
                                <td style="padding:4px 8px;">\\(\\mathbb{R}^m\\)</td>
                                <td style="padding:4px 8px;">\\(m - r\\)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Find a basis for the row space of \\(A = \\begin{pmatrix}1 & 0 & 2\\\\0 & 1 & 3\\\\2 & 1 & 7\\end{pmatrix}\\).',
                    hint: 'Row reduce and take the nonzero rows.',
                    solution: '\\(R_3 - 2R_1 \\to \\begin{pmatrix}1&0&2\\\\0&1&3\\\\0&1&3\\end{pmatrix} \\to \\begin{pmatrix}1&0&2\\\\0&1&3\\\\0&0&0\\end{pmatrix}\\).  Basis for \\(C(A^T)\\): \\(\\{(1,0,2), (0,1,3)\\}\\).'
                },
                {
                    question: 'Find the left null space of \\(A = \\begin{pmatrix}1 & 2\\\\3 & 6\\\\5 & 10\\end{pmatrix}\\).',
                    hint: 'Compute \\(N(A^T)\\) by solving \\(A^T\\mathbf{y} = \\mathbf{0}\\), or equivalently row-reduce \\(A^T\\).',
                    solution: '\\(A^T = \\begin{pmatrix}1&3&5\\\\2&6&10\\end{pmatrix}\\).  Row reduce: \\(\\begin{pmatrix}1&3&5\\\\0&0&0\\end{pmatrix}\\).  Free variables \\(y_2, y_3\\): \\(y_1 = -3y_2 - 5y_3\\).  Basis for \\(N(A^T)\\): \\(\\{(-3,1,0)^T, (-5,0,1)^T\\}\\).  Dimension = \\(3 - 1 = 2\\).'
                },
                {
                    question: 'Prove that \\(\\mathbf{b} \\in C(A)\\) if and only if \\(\\mathbf{y}^T\\mathbf{b} = 0\\) for every \\(\\mathbf{y} \\in N(A^T)\\).',
                    hint: 'One direction: if \\(\\mathbf{b} = A\\mathbf{x}\\) and \\(\\mathbf{y}^TA = \\mathbf{0}\\), then \\(\\mathbf{y}^T\\mathbf{b} = \\mathbf{y}^TA\\mathbf{x} = 0\\).  The other requires a dimension argument.',
                    solution: '(\\(\\Rightarrow\\)) If \\(\\mathbf{b} = A\\mathbf{x}\\) and \\(\\mathbf{y} \\in N(A^T)\\), then \\(\\mathbf{y}^T\\mathbf{b} = \\mathbf{y}^TA\\mathbf{x} = (A^T\\mathbf{y})^T\\mathbf{x} = \\mathbf{0}^T\\mathbf{x} = 0\\).  (\\(\\Leftarrow\\)) The set of vectors orthogonal to all of \\(N(A^T)\\) is \\(N(A^T)^\\perp\\).  By the Fundamental Theorem Part 2 (Section 4), \\(N(A^T)^\\perp = C(A)\\).  So \\(\\mathbf{b}\\) orthogonal to all of \\(N(A^T)\\) implies \\(\\mathbf{b} \\in C(A)\\).'
                },
                {
                    question: 'If \\(A\\) is a \\(4 \\times 6\\) matrix of rank 3, give the dimension of each of the four fundamental subspaces.',
                    hint: 'Use the table: \\(\\dim C(A) = r\\), \\(\\dim N(A) = n - r\\), \\(\\dim C(A^T) = r\\), \\(\\dim N(A^T) = m - r\\).',
                    solution: '\\(r = 3\\), \\(m = 4\\), \\(n = 6\\).  \\(\\dim C(A) = 3\\), \\(\\dim N(A) = 3\\), \\(\\dim C(A^T) = 3\\), \\(\\dim N(A^T) = 1\\).'
                },
                {
                    question: 'Show that row operations do not change the null space of a matrix.',
                    hint: 'If \\(A\\) row-reduces to \\(R\\), show that \\(A\\mathbf{x} = \\mathbf{0}\\) iff \\(R\\mathbf{x} = \\mathbf{0}\\).',
                    solution: 'Each elementary row operation is multiplication by an invertible matrix \\(E\\): \\(R = EA\\).  Then \\(A\\mathbf{x} = \\mathbf{0} \\Rightarrow R\\mathbf{x} = EA\\mathbf{x} = \\mathbf{0}\\).  Conversely, \\(R\\mathbf{x} = \\mathbf{0} \\Rightarrow A\\mathbf{x} = E^{-1}R\\mathbf{x} = \\mathbf{0}\\).  So \\(N(A) = N(R)\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 3 — The Fundamental Theorem (Part 1: Dimensions)
        // ============================================================
        {
            id: 'ch05-sec03',
            title: 'The Fundamental Theorem (Part 1)',
            content: `
                <h2>The Fundamental Theorem of Linear Algebra (Part 1: Dimensions)</h2>

                <p>We have computed the dimensions of all four subspaces.  Let us now state the result as a unified theorem.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.8 — Fundamental Theorem of Linear Algebra, Part 1</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be an \\(m \\times n\\) matrix of rank \\(r\\).  Then:</p>
                        <ol>
                            <li>\\(C(A)\\) is an \\(r\\)-dimensional subspace of \\(\\mathbb{R}^m\\).</li>
                            <li>\\(N(A)\\) is an \\((n-r)\\)-dimensional subspace of \\(\\mathbb{R}^n\\).</li>
                            <li>\\(C(A^T)\\) is an \\(r\\)-dimensional subspace of \\(\\mathbb{R}^n\\).</li>
                            <li>\\(N(A^T)\\) is an \\((m-r)\\)-dimensional subspace of \\(\\mathbb{R}^m\\).</li>
                        </ol>
                        <p>In particular, the dimensions satisfy:</p>
                        \\[
                            \\dim C(A^T) + \\dim N(A) = n \\quad \\text{and} \\quad \\dim C(A) + \\dim N(A^T) = m.
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Statements (1) and (2) are the Rank-Nullity Theorem applied to \\(A\\).  Statement (3) follows from row rank = column rank: \\(\\dim C(A^T) = \\operatorname{rank}(A^T) = \\operatorname{rank}(A) = r\\).  Statement (4) is the Rank-Nullity Theorem applied to \\(A^T\\): \\(\\dim N(A^T) = m - \\operatorname{rank}(A^T) = m - r\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Counting Pattern</div>
                    <div class="env-body">
                        <p>The dimensions come in complementary pairs:</p>
                        <ul>
                            <li>In \\(\\mathbb{R}^n\\): row space (\\(r\\)) and null space (\\(n - r\\)) account for all \\(n\\) dimensions.</li>
                            <li>In \\(\\mathbb{R}^m\\): column space (\\(r\\)) and left null space (\\(m - r\\)) account for all \\(m\\) dimensions.</li>
                        </ul>
                        <p>The rank \\(r\\) is the single number linking all four spaces. It is the "bridge" between the input space \\(\\mathbb{R}^n\\) and the output space \\(\\mathbb{R}^m\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Verifying the Dimension Count</div>
                    <div class="env-body">
                        <p>Let \\(A = \\begin{pmatrix}1 & 0 & 1\\\\0 & 1 & 1\\end{pmatrix}\\), so \\(m = 2\\), \\(n = 3\\), \\(r = 2\\).</p>
                        <ul>
                            <li>\\(\\dim C(A) = 2\\) (both columns \\((1,0)^T\\) and \\((0,1)^T\\) are independent; \\(C(A) = \\mathbb{R}^2\\)).</li>
                            <li>\\(\\dim N(A) = 3 - 2 = 1\\) (null space: \\(\\operatorname{span}\\{(-1,-1,1)^T\\}\\)).</li>
                            <li>\\(\\dim C(A^T) = 2\\) (row space: \\(\\operatorname{span}\\{(1,0,1),(0,1,1)\\}\\)).</li>
                            <li>\\(\\dim N(A^T) = 2 - 2 = 0\\) (left null space is trivial).</li>
                        </ul>
                        <p>Check: \\(2 + 1 = 3 = n\\) and \\(2 + 0 = 2 = m\\). \\(\\checkmark\\)</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.9 — Column Rank Equals Row Rank (Revisited)</div>
                    <div class="env-body">
                        <p>Part 1 immediately gives another proof: \\(\\dim C(A) = r = \\dim C(A^T)\\), confirming that column rank equals row rank without a separate argument.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.10 — Rank of Products and Special Matrices</div>
                    <div class="env-body">
                        <p>For an \\(m \\times n\\) matrix \\(A\\):</p>
                        <ul>
                            <li>\\(\\operatorname{rank}(A^T A) = \\operatorname{rank}(A)\\).  (Because \\(N(A^TA) = N(A)\\), so nullities are equal, and both are \\(n\\)-column matrices.)</li>
                            <li>If \\(P\\) is invertible (\\(m \\times m\\)) and \\(Q\\) is invertible (\\(n \\times n\\)), then \\(\\operatorname{rank}(PAQ) = \\operatorname{rank}(A)\\).</li>
                        </ul>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'For a \\(3 \\times 3\\) matrix of rank 1, describe each of the four fundamental subspaces geometrically (as subsets of \\(\\mathbb{R}^3\\)).',
                    hint: 'In \\(\\mathbb{R}^3\\), dimension 1 = line, dimension 2 = plane.',
                    solution: '\\(C(A)\\) is a line through the origin in \\(\\mathbb{R}^3\\) (\\(\\dim = 1\\)).  \\(N(A^T)\\) is a plane through the origin in \\(\\mathbb{R}^3\\) (\\(\\dim = 2\\)).  \\(C(A^T)\\) is a line through the origin in \\(\\mathbb{R}^3\\) (\\(\\dim = 1\\)).  \\(N(A)\\) is a plane through the origin in \\(\\mathbb{R}^3\\) (\\(\\dim = 2\\)).'
                },
                {
                    question: 'Prove that \\(\\operatorname{rank}(A^T A) = \\operatorname{rank}(A)\\) using the Rank-Nullity Theorem.',
                    hint: 'Show \\(N(A) = N(A^TA)\\), then both matrices have the same nullity and the same number of columns.',
                    solution: 'We showed \\(N(A) = N(A^TA)\\) in Exercise 5 of Section 1.  Both \\(A\\) and \\(A^TA\\) have \\(n\\) columns.  By Rank-Nullity, \\(\\operatorname{rank}(A^TA) = n - \\dim N(A^TA) = n - \\dim N(A) = \\operatorname{rank}(A)\\).'
                },
                {
                    question: 'If \\(A\\) is \\(5 \\times 3\\), what is the maximum possible rank?  If \\(\\operatorname{rank}(A) = 3\\), describe \\(N(A)\\) and \\(N(A^T)\\).',
                    hint: 'Rank is at most \\(\\min(m,n) = 3\\).',
                    solution: 'Maximum rank = \\(\\min(5,3) = 3\\).  If \\(\\operatorname{rank} = 3\\): \\(N(A) = \\{\\mathbf{0}\\}\\) (\\(\\dim = 3-3 = 0\\)).  \\(N(A^T)\\) has \\(\\dim = 5-3 = 2\\), a plane in \\(\\mathbb{R}^5\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(m \\times n\\).  Show that \\(A\\mathbf{x} = \\mathbf{b}\\) is solvable for every \\(\\mathbf{b}\\) if and only if \\(\\operatorname{rank}(A) = m\\).',
                    hint: 'Solvability for all \\(\\mathbf{b}\\) means \\(C(A) = \\mathbb{R}^m\\).',
                    solution: '\\(A\\mathbf{x} = \\mathbf{b}\\) solvable for all \\(\\mathbf{b}\\) iff \\(C(A) = \\mathbb{R}^m\\) iff \\(\\dim C(A) = m\\) iff \\(\\operatorname{rank}(A) = m\\).'
                },
                {
                    question: 'If \\(AB = 0\\) (the zero matrix), prove that \\(C(B) \\subseteq N(A)\\).  What does this say about \\(\\operatorname{rank}(A) + \\operatorname{rank}(B) \\le n\\) when \\(A\\) is \\(m \\times n\\) and \\(B\\) is \\(n \\times p\\)?',
                    hint: 'Every column of \\(B\\) gets mapped to zero by \\(A\\).',
                    solution: 'If \\(AB = 0\\), then for every column \\(\\mathbf{b}_j\\) of \\(B\\), \\(A\\mathbf{b}_j = \\mathbf{0}\\), so \\(\\mathbf{b}_j \\in N(A)\\).  Hence \\(C(B) \\subseteq N(A)\\), giving \\(\\operatorname{rank}(B) = \\dim C(B) \\le \\dim N(A) = n - \\operatorname{rank}(A)\\).  Therefore \\(\\operatorname{rank}(A) + \\operatorname{rank}(B) \\le n\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 4 — Orthogonal Complements and Part 2
        // ============================================================
        {
            id: 'ch05-sec04',
            title: 'Orthogonal Complements and Part 2',
            content: `
                <h2>Orthogonal Complements and the Fundamental Theorem, Part 2</h2>

                <p>Part 1 told us the <em>dimensions</em> of the four subspaces.  Part 2 reveals their <em>geometric relationship</em>: they are orthogonal complements.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.11 — Orthogonal Complement</div>
                    <div class="env-body">
                        <p>Let \\(W\\) be a subspace of \\(\\mathbb{R}^n\\).  The <strong>orthogonal complement</strong> of \\(W\\) is</p>
                        \\[
                            W^\\perp = \\{\\mathbf{v} \\in \\mathbb{R}^n : \\mathbf{v} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}.
                        \\]
                        <p>\\(W^\\perp\\) is a subspace of \\(\\mathbb{R}^n\\), and \\(\\dim W + \\dim W^\\perp = n\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.12 — Direct Sum Decomposition</div>
                    <div class="env-body">
                        <p>For any subspace \\(W\\) of \\(\\mathbb{R}^n\\),</p>
                        \\[
                            \\mathbb{R}^n = W \\oplus W^\\perp.
                        \\]
                        <p>That is, every \\(\\mathbf{v} \\in \\mathbb{R}^n\\) can be written uniquely as \\(\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp\\) with \\(\\mathbf{w} \\in W\\) and \\(\\mathbf{w}^\\perp \\in W^\\perp\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Since \\(\\dim W + \\dim W^\\perp = n\\) and \\(W \\cap W^\\perp = \\{\\mathbf{0}\\}\\) (if \\(\\mathbf{v} \\in W \\cap W^\\perp\\), then \\(\\mathbf{v} \\cdot \\mathbf{v} = 0\\), so \\(\\mathbf{v} = \\mathbf{0}\\)), the dimension formula gives \\(\\dim(W + W^\\perp) = \\dim W + \\dim W^\\perp = n\\), so \\(W + W^\\perp = \\mathbb{R}^n\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.13 — Fundamental Theorem of Linear Algebra, Part 2</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be an \\(m \\times n\\) matrix.  Then:</p>
                        <ol>
                            <li>\\(N(A) = C(A^T)^\\perp\\), or equivalently \\(C(A^T) = N(A)^\\perp\\). Hence \\(\\mathbb{R}^n = C(A^T) \\oplus N(A)\\).</li>
                            <li>\\(N(A^T) = C(A)^\\perp\\), or equivalently \\(C(A) = N(A^T)^\\perp\\). Hence \\(\\mathbb{R}^m = C(A) \\oplus N(A^T)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) \\(\\mathbf{x} \\in N(A) \\Leftrightarrow A\\mathbf{x} = \\mathbf{0} \\Leftrightarrow\\) every row of \\(A\\) is orthogonal to \\(\\mathbf{x} \\Leftrightarrow \\mathbf{x}\\) is orthogonal to every vector in \\(C(A^T) \\Leftrightarrow \\mathbf{x} \\in C(A^T)^\\perp\\).</p>
                        <p>(2) Apply (1) to \\(A^T\\): \\(N(A^T) = C((A^T)^T)^\\perp = C(A)^\\perp\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Orthogonality Picture</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{R}^n\\), the row space and the null space are perpendicular to each other: every vector in \\(N(A)\\) is orthogonal to every vector in \\(C(A^T)\\).  They split \\(\\mathbb{R}^n\\) into two complementary, perpendicular pieces.  Likewise in \\(\\mathbb{R}^m\\), the column space and left null space are perpendicular complements.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Orthogonality Check</div>
                    <div class="env-body">
                        <p>For \\(A = \\begin{pmatrix}1 & 0 & 1\\\\0 & 1 & 1\\end{pmatrix}\\):</p>
                        <ul>
                            <li>\\(C(A^T) = \\operatorname{span}\\{(1,0,1),(0,1,1)\\}\\).</li>
                            <li>\\(N(A) = \\operatorname{span}\\{(-1,-1,1)\\}\\).</li>
                        </ul>
                        <p>Check orthogonality: \\((1,0,1) \\cdot (-1,-1,1) = -1+0+1 = 0\\) \\(\\checkmark\\) and \\((0,1,1) \\cdot (-1,-1,1) = 0-1+1 = 0\\) \\(\\checkmark\\).  The three dimensions sum to \\(2+1=3 = n\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.14 — Testing Membership via Orthogonality</div>
                    <div class="env-body">
                        <p>A vector \\(\\mathbf{b} \\in \\mathbb{R}^m\\) lies in \\(C(A)\\) if and only if \\(\\mathbf{b}\\) is orthogonal to every vector in \\(N(A^T)\\).  This provides an alternative test for the consistency of \\(A\\mathbf{x} = \\mathbf{b}\\).</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Find \\(W^\\perp\\) for \\(W = \\operatorname{span}\\{(1,2,3)\\}\\) in \\(\\mathbb{R}^3\\).',
                    hint: '\\(W^\\perp = \\{(x,y,z) : x + 2y + 3z = 0\\}\\), a plane.',
                    solution: '\\(\\mathbf{v} \\in W^\\perp\\) iff \\((x,y,z) \\cdot (1,2,3) = 0\\), i.e., \\(x + 2y + 3z = 0\\).  Setting \\(y = s\\), \\(z = t\\): \\(x = -2s - 3t\\).  Basis: \\(\\{(-2,1,0), (-3,0,1)\\}\\).  \\(\\dim W^\\perp = 2 = 3 - 1\\).'
                },
                {
                    question: 'Prove that \\((W^\\perp)^\\perp = W\\) for any subspace \\(W\\) of \\(\\mathbb{R}^n\\).',
                    hint: 'Show \\(W \\subseteq (W^\\perp)^\\perp\\) and then compare dimensions.',
                    solution: 'If \\(\\mathbf{w} \\in W\\), then \\(\\mathbf{w} \\cdot \\mathbf{v} = 0\\) for all \\(\\mathbf{v} \\in W^\\perp\\), so \\(\\mathbf{w} \\in (W^\\perp)^\\perp\\).  Thus \\(W \\subseteq (W^\\perp)^\\perp\\).  Also \\(\\dim(W^\\perp)^\\perp = n - \\dim W^\\perp = n - (n - \\dim W) = \\dim W\\).  Equal dimensions with inclusion implies equality.'
                },
                {
                    question: 'Let \\(A\\) be \\(m \\times n\\).  Show that \\(\\operatorname{rank}(A^T A) = \\operatorname{rank}(A)\\) using orthogonal complements.',
                    hint: 'Show \\(C(A^T A) = C(A^T)\\) by proving they have the same orthogonal complement.',
                    solution: 'We know \\(N(A^TA) = N(A)\\).  Taking orthogonal complements in \\(\\mathbb{R}^n\\): \\(N(A^TA)^\\perp = N(A)^\\perp\\), i.e., \\(C((A^TA)^T) = C(A^T)\\), i.e., \\(C(A^TA) = C(A^T)\\).  Hence \\(\\operatorname{rank}(A^TA) = \\dim C(A^TA) = \\dim C(A^T) = \\operatorname{rank}(A)\\).'
                },
                {
                    question: 'Verify Part 2 of the Fundamental Theorem for \\(A = \\begin{pmatrix}1 & 2\\\\3 & 6\\end{pmatrix}\\) by computing all four subspaces and checking orthogonality.',
                    hint: 'Rank 1 matrix.  Compute \\(C(A)\\), \\(N(A)\\), \\(C(A^T)\\), \\(N(A^T)\\) and check that each pair is orthogonal.',
                    solution: '\\(\\operatorname{rank} = 1\\).  \\(C(A) = \\operatorname{span}\\{(1,3)^T\\}\\), \\(N(A^T) = \\operatorname{span}\\{(-3,1)^T\\}\\).  Check: \\((1,3) \\cdot (-3,1) = 0\\).  \\(C(A^T) = \\operatorname{span}\\{(1,2)\\}\\), \\(N(A) = \\operatorname{span}\\{(-2,1)^T\\}\\).  Check: \\((1,2) \\cdot (-2,1) = 0\\).  Both pairs are orthogonal, confirming \\(\\mathbb{R}^2 = C(A^T) \\oplus N(A)\\) and \\(\\mathbb{R}^2 = C(A) \\oplus N(A^T)\\).'
                },
                {
                    question: 'Prove: if \\(W_1\\) and \\(W_2\\) are subspaces of \\(\\mathbb{R}^n\\) with \\(W_1 \\subseteq W_2\\), then \\(W_2^\\perp \\subseteq W_1^\\perp\\).',
                    hint: 'Take any \\(\\mathbf{v} \\in W_2^\\perp\\) and show it is orthogonal to all vectors in \\(W_1\\).',
                    solution: 'If \\(\\mathbf{v} \\in W_2^\\perp\\), then \\(\\mathbf{v} \\cdot \\mathbf{w} = 0\\) for all \\(\\mathbf{w} \\in W_2\\).  Since \\(W_1 \\subseteq W_2\\), this holds in particular for all \\(\\mathbf{w} \\in W_1\\), so \\(\\mathbf{v} \\in W_1^\\perp\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 5 — The Complete Picture
        // ============================================================
        {
            id: 'ch05-sec05',
            title: 'The Complete Picture',
            content: `
                <h2>The Complete Picture: Strang's Diagram</h2>

                <p>We now bring everything together into a single picture that Gilbert Strang calls "the most important diagram in linear algebra."  This diagram shows how the matrix \\(A\\) maps between the four subspaces.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.15 — The Complete Mapping Picture</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be \\(m \\times n\\) with rank \\(r\\).  The linear map \\(T(\\mathbf{x}) = A\\mathbf{x}\\) from \\(\\mathbb{R}^n\\) to \\(\\mathbb{R}^m\\):</p>
                        <ol>
                            <li>maps \\(N(A)\\) to \\(\\{\\mathbf{0}\\}\\) (the null space gets crushed),</li>
                            <li>maps \\(C(A^T)\\) <em>bijectively</em> onto \\(C(A)\\) (the row space maps one-to-one onto the column space),</li>
                            <li>misses \\(N(A^T)\\) entirely (no vector maps into the left null space, except \\(\\mathbf{0}\\)).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) is the definition of the null space.</p>
                        <p>(2) The restriction of \\(T\\) to \\(C(A^T)\\) has trivial kernel: if \\(\\mathbf{x} \\in C(A^T)\\) and \\(A\\mathbf{x} = \\mathbf{0}\\), then \\(\\mathbf{x} \\in C(A^T) \\cap N(A) = \\{\\mathbf{0}\\}\\) (since they are orthogonal complements).  So \\(T|_{C(A^T)}\\) is injective.  Since \\(\\dim C(A^T) = r = \\dim C(A)\\), it is also surjective onto \\(C(A)\\).</p>
                        <p>(3) \\(C(A) \\cap N(A^T) = \\{\\mathbf{0}\\}\\) (orthogonal complements), so no nonzero vector in \\(N(A^T)\\) is in the range of \\(T\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Strang's Four-Subspace Diagram</div>
                    <div class="env-body">
                        <p>Picture two copies of Euclidean space side by side.  On the left, \\(\\mathbb{R}^n\\) splits into the row space \\(C(A^T)\\) (dimension \\(r\\)) and the null space \\(N(A)\\) (dimension \\(n-r\\)), meeting only at the origin and perpendicular to each other.  On the right, \\(\\mathbb{R}^m\\) splits into the column space \\(C(A)\\) (dimension \\(r\\)) and the left null space \\(N(A^T)\\) (dimension \\(m-r\\)), also perpendicular.</p>
                        <p>The matrix \\(A\\) acts as a bridge: it maps the row space bijectively onto the column space (preserving dimension \\(r\\)), and crushes the null space to zero.  Nothing lands in the left null space except \\(\\mathbf{0}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-four-subspaces-diagram"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.16 — The Rank Theorem (Unified)</div>
                    <div class="env-body">
                        <p>For any \\(m \\times n\\) matrix \\(A\\) of rank \\(r\\):</p>
                        \\[
                            \\underbrace{\\dim C(A)}_{=r} + \\underbrace{\\dim N(A^T)}_{=m-r} = m, \\qquad \\underbrace{\\dim C(A^T)}_{=r} + \\underbrace{\\dim N(A)}_{=n-r} = n.
                        \\]
                        <p>Moreover, the two pairs are orthogonal complements, so:</p>
                        \\[
                            \\mathbb{R}^n = C(A^T) \\oplus N(A), \\qquad \\mathbb{R}^m = C(A) \\oplus N(A^T).
                        \\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — The Full Picture for a Projection Matrix</div>
                    <div class="env-body">
                        <p>Let \\(P = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 0\\end{pmatrix}\\) (projection onto the \\(xy\\)-plane).  Here \\(m = n = 3\\), \\(r = 2\\).</p>
                        <ul>
                            <li>\\(C(P) = \\operatorname{span}\\{\\mathbf{e}_1, \\mathbf{e}_2\\}\\) (the \\(xy\\)-plane).</li>
                            <li>\\(N(P) = \\operatorname{span}\\{\\mathbf{e}_3\\}\\) (the \\(z\\)-axis).</li>
                            <li>\\(C(P^T) = C(P)\\) (since \\(P = P^T\\)).</li>
                            <li>\\(N(P^T) = N(P)\\) (since \\(P = P^T\\)).</li>
                        </ul>
                        <p>The map crushes the \\(z\\)-axis to the origin and maps the \\(xy\\)-plane identically to itself.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why This Matters</div>
                    <div class="env-body">
                        <p>The four-subspace picture is the foundation for:</p>
                        <ul>
                            <li><strong>Least squares:</strong> When \\(A\\mathbf{x} = \\mathbf{b}\\) has no solution, the best approximation is the projection of \\(\\mathbf{b}\\) onto \\(C(A)\\).</li>
                            <li><strong>SVD:</strong> The singular value decomposition finds orthonormal bases for all four subspaces simultaneously.</li>
                            <li><strong>Pseudoinverse:</strong> The Moore-Penrose pseudoinverse \\(A^+\\) inverts the bijection from \\(C(A^T)\\) to \\(C(A)\\) and maps \\(N(A^T)\\) to \\(\\mathbf{0}\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-col-null-viz"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-four-subspaces-diagram',
                    title: 'Strang\'s Four Fundamental Subspaces Diagram',
                    description: 'Enter a matrix to see all four fundamental subspaces, their dimensions, and the mapping between them.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { width: 700, height: 420, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;

                        var mat = [[1,2,3],[2,4,7]];
                        var rows = 2, cols = 3;

                        var inputDiv = document.createElement('div');
                        inputDiv.style.cssText = 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px;';
                        var mLabel = document.createElement('span');
                        mLabel.style.cssText = 'color:#c9d1d9;font-size:0.82rem;';
                        mLabel.textContent = 'Matrix A (rows ; cols ,):';
                        var mInput = document.createElement('input');
                        mInput.type = 'text';
                        mInput.value = '1,2,3; 2,4,7';
                        mInput.style.cssText = 'padding:4px 8px;border:1px solid #30363d;border-radius:4px;background:#161b22;color:#c9d1d9;font-size:0.82rem;width:260px;font-family:monospace;';
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
                            var m = matrix.map(function(r) { return r.slice(); });
                            var nr = m.length, nc = m[0].length;
                            var pivotCols = [];
                            var pr = 0;
                            for (var c = 0; c < nc && pr < nr; c++) {
                                var maxRow = pr;
                                for (var r = pr + 1; r < nr; r++) {
                                    if (Math.abs(m[r][c]) > Math.abs(m[maxRow][c])) maxRow = r;
                                }
                                if (Math.abs(m[maxRow][c]) < 1e-10) continue;
                                var tmp = m[pr]; m[pr] = m[maxRow]; m[maxRow] = tmp;
                                pivotCols.push(c);
                                var s = m[pr][c];
                                for (var j = 0; j < nc; j++) m[pr][j] /= s;
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
                            var r = result.rank;
                            var m = rows, n = cols;

                            var boxW = 260, boxH = 150;
                            var leftX = 30, rightX = 400;
                            var topY = 40, botY = 230;
                            var midX = 350;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Four Fundamental Subspaces of A (' + m + '\u00D7' + n + ', rank ' + r + ')', 350, 22);

                            // Left side: R^n
                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(leftX, topY, boxW, boxH);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(leftX, topY, boxW, boxH);

                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(leftX, botY, boxW, boxH);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(leftX, botY, boxW, boxH);

                            // Right side: R^m
                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(rightX, topY, boxW, boxH);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(rightX, topY, boxW, boxH);

                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(rightX, botY, boxW, boxH);
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(rightX, botY, boxW, boxH);

                            // Labels
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';

                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Row Space C(A\u1D40)', leftX + boxW / 2, topY + 8);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('dim = ' + r, leftX + boxW / 2, topY + 30);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('in \u211D\u207F (n = ' + n + ')', leftX + boxW / 2, topY + 50);

                            // Basis of row space
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px monospace';
                            var rrefResult = result.rref;
                            for (var i = 0; i < r && i < 3; i++) {
                                var rowStr = '(' + rrefResult[i].map(function(v) { return Math.abs(v) < 0.005 ? '0' : v.toFixed(1); }).join(', ') + ')';
                                ctx.fillText(rowStr, leftX + boxW / 2, topY + 72 + i * 18);
                            }
                            if (r > 3) ctx.fillText('...', leftX + boxW / 2, topY + 72 + 54);

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Null Space N(A)', leftX + boxW / 2, botY + 8);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('dim = ' + (n - r), leftX + boxW / 2, botY + 30);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('in \u211D\u207F (n = ' + n + ')', leftX + boxW / 2, botY + 50);

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Column Space C(A)', rightX + boxW / 2, topY + 8);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('dim = ' + r, rightX + boxW / 2, topY + 30);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('in \u211D\u1D50 (m = ' + m + ')', rightX + boxW / 2, topY + 50);

                            // Basis of column space (pivot columns of original)
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px monospace';
                            for (var i = 0; i < result.pivots.length && i < 3; i++) {
                                var pc = result.pivots[i];
                                var colStr = '(' + mat.map(function(row) { return Math.abs(row[pc]) < 0.005 ? '0' : row[pc].toFixed(1); }).join(', ') + ')';
                                ctx.fillText(colStr, rightX + boxW / 2, topY + 72 + i * 18);
                            }

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('Left Null Space N(A\u1D40)', rightX + boxW / 2, botY + 8);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('dim = ' + (m - r), rightX + boxW / 2, botY + 30);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('in \u211D\u1D50 (m = ' + m + ')', rightX + boxW / 2, botY + 50);

                            // Arrows showing the map A
                            // Top: C(A^T) -> C(A) (bijection)
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            ctx.moveTo(leftX + boxW + 5, topY + boxH / 2);
                            ctx.lineTo(rightX - 5, topY + boxH / 2);
                            ctx.stroke();
                            // Arrowhead
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath();
                            ctx.moveTo(rightX - 5, topY + boxH / 2);
                            ctx.lineTo(rightX - 15, topY + boxH / 2 - 6);
                            ctx.lineTo(rightX - 15, topY + boxH / 2 + 6);
                            ctx.closePath();
                            ctx.fill();

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('A: bijection', midX, topY + boxH / 2 - 6);
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textBaseline = 'top';
                            ctx.fillText('(one-to-one & onto)', midX, topY + boxH / 2 + 4);

                            // Bottom: N(A) -> {0}
                            ctx.strokeStyle = viz.colors.red + 'aa';
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(leftX + boxW + 5, botY + boxH / 2);
                            ctx.lineTo(rightX - 5, botY + boxH / 2);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            // Arrowhead
                            ctx.fillStyle = viz.colors.red + 'aa';
                            ctx.beginPath();
                            ctx.moveTo(rightX - 5, botY + boxH / 2);
                            ctx.lineTo(rightX - 15, botY + boxH / 2 - 6);
                            ctx.lineTo(rightX - 15, botY + boxH / 2 + 6);
                            ctx.closePath();
                            ctx.fill();

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('A: crushed to 0', midX, botY + boxH / 2 - 6);

                            // Orthogonality indicators
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('\u27C2', leftX + boxW / 2, topY + boxH + (botY - topY - boxH) / 2);
                            ctx.fillText('\u27C2', rightX + boxW / 2, topY + boxH + (botY - topY - boxH) / 2);

                            // Dimension summary at bottom
                            var sumY = botY + boxH + 20;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u211D\u207F = C(A\u1D40) \u2295 N(A) :  ' + r + ' + ' + (n - r) + ' = ' + n, 160, sumY);
                            ctx.fillText('\u211D\u1D50 = C(A) \u2295 N(A\u1D40) :  ' + r + ' + ' + (m - r) + ' = ' + m, 530, sumY);
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

                        VizEngine.createButton(controls, '2\u00D73 rank 2', function() {
                            mInput.value = '1,2,3; 2,4,7';
                            mat = [[1,2,3],[2,4,7]]; rows = 2; cols = 3; draw();
                        });
                        VizEngine.createButton(controls, '3\u00D73 rank 2', function() {
                            mInput.value = '1,0,1; 0,1,1; 1,1,2';
                            mat = [[1,0,1],[0,1,1],[1,1,2]]; rows = 3; cols = 3; draw();
                        });
                        VizEngine.createButton(controls, '3\u00D72 rank 1', function() {
                            mInput.value = '1,2; 3,6; 5,10';
                            mat = [[1,2],[3,6],[5,10]]; rows = 3; cols = 2; draw();
                        });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'ch05-col-null-viz',
                    title: 'Column Space & Null Space in \\(\\mathbb{R}^2\\): Interactive',
                    description: 'Drag the endpoint of a vector x in the input space (left) and see Ax in the output space (right). The null space direction is shown in blue, the row space direction in teal.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, { width: 700, height: 320, scale: 35 });
                        var ctx = viz.ctx;

                        // Use two viewports: left = input R^n, right = output R^m
                        var leftCx = 175, rightCx = 525;
                        var cy = 160;

                        var a = 1, b = 2, c = 0.5, d = 1;
                        var pt = viz.addDraggable('x', 2, 1, viz.colors.white, 8);

                        var sA = VizEngine.createSlider(controls, 'a', -2, 2, 1, 0.1, function(v) { a = v; });
                        var sB = VizEngine.createSlider(controls, 'b', -2, 2, 2, 0.1, function(v) { b = v; });
                        var sC = VizEngine.createSlider(controls, 'c', -2, 2, 0.5, 0.1, function(v) { c = v; });
                        var sD = VizEngine.createSlider(controls, 'd', -2, 2, 1, 0.1, function(v) { d = v; });

                        function toScreenL(x, y) { return [leftCx + x * 35, cy - y * 35]; }
                        function toScreenR(x, y) { return [rightCx + x * 35, cy - y * 35]; }
                        function toMathL(sx, sy) { return [(sx - leftCx) / 35, (cy - sy) / 35]; }

                        // Override draggable coordinate mapping
                        viz.toMath = toMathL;
                        viz.toScreen = function(x, y) { return toScreenL(x, y); };

                        function drawAxesAt(cx, cy2, label) {
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(cx - 150, cy2); ctx.lineTo(cx + 150, cy2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cx, cy2 - 140); ctx.lineTo(cx, cy2 + 140); ctx.stroke();
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(label, cx, cy2 + 142);
                        }

                        function drawVecAt(cx2, cy2, x, y, color, label, lw) {
                            var s = 35;
                            var sx1 = cx2, sy1 = cy2;
                            var sx2 = cx2 + x * s, sy2 = cy2 - y * s;
                            var dx = sx2 - sx1, dy = sy2 - sy1, len = Math.sqrt(dx*dx + dy*dy);
                            if (len < 1) return;
                            var angle = Math.atan2(dy, dx);
                            ctx.strokeStyle = color; ctx.lineWidth = lw || 2;
                            ctx.beginPath(); ctx.moveTo(sx1, sy1);
                            ctx.lineTo(sx2 - Math.cos(angle)*8, sy2 - Math.sin(angle)*8);
                            ctx.stroke();
                            ctx.fillStyle = color;
                            ctx.beginPath();
                            ctx.moveTo(sx2, sy2);
                            ctx.lineTo(sx2 - 10*Math.cos(angle - Math.PI/6), sy2 - 10*Math.sin(angle - Math.PI/6));
                            ctx.lineTo(sx2 - 10*Math.cos(angle + Math.PI/6), sy2 - 10*Math.sin(angle + Math.PI/6));
                            ctx.closePath(); ctx.fill();
                            if (label) {
                                var ux = -dy/len, uy = dx/len;
                                ctx.fillStyle = color;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText(label, (sx1+sx2)/2 + ux*14, (sy1+sy2)/2 + uy*14);
                            }
                        }

                        function drawLineAt(cx2, cy2, dx, dy, color, lw) {
                            var s = 35;
                            var len = Math.sqrt(dx*dx+dy*dy);
                            if (len < 0.01) return;
                            var ux = dx/len, uy = dy/len;
                            var ext = 200;
                            ctx.strokeStyle = color; ctx.lineWidth = lw || 1.5;
                            ctx.beginPath();
                            ctx.moveTo(cx2 - ux*ext, cy2 + uy*ext);
                            ctx.lineTo(cx2 + ux*ext, cy2 - uy*ext);
                            ctx.stroke();
                        }

                        function draw() {
                            viz.clear();
                            var M = [[a,b],[c,d]];
                            var det = VizEngine.det2(M);

                            // Divider
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4,4]);
                            ctx.beginPath(); ctx.moveTo(350, 0); ctx.lineTo(350, 320); ctx.stroke();
                            ctx.setLineDash([]);

                            drawAxesAt(leftCx, cy, 'Input \u211D\u00B2');
                            drawAxesAt(rightCx, cy, 'Output \u211D\u00B2');

                            // Compute Ax
                            var ax = a * pt.x + b * pt.y;
                            var ay = c * pt.x + d * pt.y;

                            var rank;
                            var tol = 0.05;
                            if (Math.abs(a)<tol && Math.abs(b)<tol && Math.abs(c)<tol && Math.abs(d)<tol) rank = 0;
                            else if (Math.abs(det) < tol) rank = 1;
                            else rank = 2;

                            if (rank === 1) {
                                // Draw null space and row space in input
                                var nx, ny;
                                if (Math.abs(a) > tol || Math.abs(b) > tol) {
                                    nx = -b; ny = a;
                                } else {
                                    nx = -d; ny = c;
                                }
                                drawLineAt(leftCx, cy, nx, ny, viz.colors.blue + '88', 1.5);
                                drawLineAt(leftCx, cy, a, c, viz.colors.teal + '88', 1.5);

                                // Draw column space in output
                                var colX = a, colY = c;
                                if (Math.abs(colX) < tol && Math.abs(colY) < tol) { colX = b; colY = d; }
                                drawLineAt(rightCx, cy, colX, colY, viz.colors.orange + '88', 1.5);
                            }

                            // Draw x in input
                            drawVecAt(leftCx, cy, pt.x, pt.y, viz.colors.white, 'x', 2.5);
                            // Draw Ax in output
                            drawVecAt(rightCx, cy, ax, ay, viz.colors.orange, 'Ax', 2.5);

                            // Draw draggable point
                            var psx = leftCx + pt.x * 35;
                            var psy = cy - pt.y * 35;
                            ctx.fillStyle = viz.colors.white + '33';
                            ctx.beginPath(); ctx.arc(psx, psy, 12, 0, Math.PI*2); ctx.fill();
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath(); ctx.arc(psx, psy, 6, 0, Math.PI*2); ctx.fill();

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('x = (' + pt.x.toFixed(1) + ', ' + pt.y.toFixed(1) + ')', 10, 8);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Ax = (' + ax.toFixed(1) + ', ' + ay.toFixed(1) + ')', 10, 26);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('rank = ' + rank, 10, 44);

                            if (rank === 1) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Blue: N(A)', 10, 62);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.fillText('Teal: C(A\u1D40)', 10, 78);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('Orange: C(A)', 360, 8);
                            }
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'For \\(A = \\begin{pmatrix}1 & 1\\\\1 & 1\\end{pmatrix}\\), draw Strang\'s four-subspace diagram.  Label each subspace with a basis and its dimension.',
                    hint: '\\(\\operatorname{rank} = 1\\).  Find each subspace explicitly.',
                    solution: '\\(r = 1\\), \\(m = n = 2\\).  \\(C(A) = \\operatorname{span}\\{(1,1)^T\\}\\) (dim 1).  \\(N(A^T) = \\operatorname{span}\\{(-1,1)^T\\}\\) (dim 1).  \\(C(A^T) = \\operatorname{span}\\{(1,1)\\}\\) (dim 1).  \\(N(A) = \\operatorname{span}\\{(-1,1)^T\\}\\) (dim 1).  \\(A\\) maps the line \\((1,1)\\) in the input to the line \\((1,1)\\) in the output, and crushes \\((-1,1)\\) to zero.'
                },
                {
                    question: 'Prove that the restriction \\(A|_{C(A^T)}: C(A^T) \\to C(A)\\) is a bijection.',
                    hint: 'Show injectivity using \\(C(A^T) \\cap N(A) = \\{\\mathbf{0}\\}\\), and surjectivity using equal dimensions.',
                    solution: '<strong>Injective:</strong> If \\(\\mathbf{x} \\in C(A^T)\\) and \\(A\\mathbf{x} = \\mathbf{0}\\), then \\(\\mathbf{x} \\in C(A^T) \\cap N(A) = \\{\\mathbf{0}\\}\\) (orthogonal complements intersect trivially).  <strong>Surjective:</strong> \\(A\\) maps \\(C(A^T)\\) into \\(C(A)\\).  Since \\(\\dim C(A^T) = r = \\dim C(A)\\) and the map is injective, it must be surjective.'
                },
                {
                    question: 'Let \\(A\\) be \\(m \\times n\\) with \\(\\operatorname{rank}(A) = \\min(m,n)\\) (full rank).  What simplifications occur in the four-subspace picture?',
                    hint: 'Consider the two cases \\(r = m \\le n\\) and \\(r = n \\le m\\) separately.',
                    solution: 'If \\(r = m \\le n\\): \\(C(A) = \\mathbb{R}^m\\) (surjective), \\(N(A^T) = \\{\\mathbf{0}\\}\\), \\(\\dim N(A) = n - m\\).  The map is onto but not one-to-one.  If \\(r = n \\le m\\): \\(N(A) = \\{\\mathbf{0}\\}\\) (injective), \\(C(A^T) = \\mathbb{R}^n\\), \\(\\dim N(A^T) = m - n\\).  The map is one-to-one but not onto.'
                },
                {
                    question: 'If \\(P\\) is an orthogonal projection matrix (\\(P^2 = P = P^T\\)), show that \\(C(P) = C(P^T)\\) and \\(N(P) = N(P^T)\\), and verify that \\(C(P) \\perp N(P)\\).',
                    hint: 'Since \\(P = P^T\\), the column space equals the row space and the null space equals the left null space.',
                    solution: '\\(P = P^T\\) immediately gives \\(C(P) = C(P^T)\\) and \\(N(P) = N(P^T)\\).  By Part 2, \\(C(P^T) \\perp N(P)\\), i.e., \\(C(P) \\perp N(P)\\).  This confirms that \\(P\\) decomposes \\(\\mathbb{R}^n\\) into the range of \\(P\\) and its orthogonal complement (the null space), and projects onto the range.'
                },
                {
                    question: 'Given an \\(m \\times n\\) matrix \\(A\\), describe how the SVD \\(A = U\\Sigma V^T\\) relates to the four fundamental subspaces.',
                    hint: 'The columns of \\(V\\) and \\(U\\) provide orthonormal bases.  Which columns correspond to which subspaces?',
                    solution: 'Let \\(A = U\\Sigma V^T\\) where \\(r = \\operatorname{rank}(A)\\).  The first \\(r\\) columns of \\(V\\) form an orthonormal basis for \\(C(A^T)\\) (row space).  The remaining \\(n - r\\) columns of \\(V\\) form an orthonormal basis for \\(N(A)\\).  The first \\(r\\) columns of \\(U\\) form an orthonormal basis for \\(C(A)\\) (column space).  The remaining \\(m - r\\) columns of \\(U\\) form an orthonormal basis for \\(N(A^T)\\) (left null space).  The SVD simultaneously diagonalizes the map across all four subspaces.'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix}1 & 0 & 2\\\\0 & 1 & 1\\\\1 & 1 & 3\\end{pmatrix}\\).  Find bases for all four fundamental subspaces and verify the dimension counts.',
                    hint: 'Row reduce \\(A\\) and its transpose.  Note that the third row is the sum of the first two.',
                    solution: 'Row reduce: \\(R_3 - R_1 - R_2 \\to 0\\), giving echelon form \\(\\begin{pmatrix}1&0&2\\\\0&1&1\\\\0&0&0\\end{pmatrix}\\).  Rank \\(r = 2\\), \\(m = n = 3\\).  \\(C(A)\\): pivot cols 1, 2 of \\(A\\): \\(\\{(1,0,1)^T,(0,1,1)^T\\}\\) (dim 2).  \\(N(A)\\): \\(x_3\\) free, \\(x_1 = -2x_3\\), \\(x_2 = -x_3\\).  Basis: \\(\\{(-2,-1,1)^T\\}\\) (dim 1).  \\(C(A^T)\\): rows of echelon form: \\(\\{(1,0,2),(0,1,1)\\}\\) (dim 2).  \\(N(A^T)\\): solve \\(A^T\\mathbf{y} = 0\\): \\(\\{(1,1,-1)^T\\}\\) (dim 1).  Check: \\(2+1=3\\) and \\(2+1=3\\). Orthogonality: \\((1,0,2)\\cdot(-2,-1,1)=0\\), \\((0,1,1)\\cdot(-2,-1,1)=0\\). \\(\\checkmark\\)'
                }
            ]
        }
    ]
});
