window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch19',
    number: 19,
    title: 'Applications of Linear Algebra',
    subtitle: 'From Google\'s PageRank to quantum states — linear algebra everywhere',
    sections: [
        // ============================================================
        // SECTION 1: Markov Chains and Steady States
        // ============================================================
        {
            id: 'ch19-sec01',
            title: 'Markov Chains and Steady States',
            content: `
                <h2>Markov Chains and Steady States</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We introduce stochastic matrices and Markov chains, prove the existence of steady-state vectors, and show how eigenvalue analysis determines long-run behavior. This section ties together matrix multiplication, eigenvalues, and diagonalization in a single compelling application.</p>

                <div class="env-block intuition">
                    <div class="env-title">Where Linear Algebra Meets Probability</div>
                    <div class="env-body">
                        <p>A Markov chain models a system that randomly transitions between states. At each time step, the probability of moving to a new state depends only on the current state, not on the history. This "memoryless" property makes Markov chains amenable to matrix analysis: multiplying by the transition matrix advances the system one step.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.1 (Stochastic Matrix)</div>
                    <div class="env-body">
                        <p>A square matrix \\(P\\) is <strong>(column) stochastic</strong> if:</p>
                        <ul>
                            <li>All entries are nonnegative: \\(p_{ij} \\geq 0\\).</li>
                            <li>Each column sums to 1: \\(\\sum_{i} p_{ij} = 1\\) for every \\(j\\).</li>
                        </ul>
                        <p>The entry \\(p_{ij}\\) represents the probability of transitioning from state \\(j\\) to state \\(i\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.2 (Weather Model)</div>
                    <div class="env-body">
                        <p>Suppose tomorrow's weather depends only on today's: if it's sunny, there's a 70% chance of sun and 30% chance of rain tomorrow. If it's rainy, there's a 40% chance of sun and 60% chance of rain. The transition matrix is</p>
                        \\[P = \\begin{bmatrix} 0.7 & 0.4 \\\\ 0.3 & 0.6 \\end{bmatrix}.\\]
                        <p>If today is sunny, \\(\\mathbf{x}_0 = (1, 0)^T\\), then tomorrow's probabilities are \\(\\mathbf{x}_1 = P\\mathbf{x}_0 = (0.7, 0.3)^T\\), and the day after: \\(\\mathbf{x}_2 = P^2 \\mathbf{x}_0 = (0.61, 0.39)^T\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.3 (Properties of Stochastic Matrices)</div>
                    <div class="env-body">
                        <p>Let \\(P\\) be a column stochastic matrix. Then:</p>
                        <ol>
                            <li>\\(\\lambda = 1\\) is always an eigenvalue of \\(P\\).</li>
                            <li>All eigenvalues \\(\\lambda\\) satisfy \\(|\\lambda| \\leq 1\\).</li>
                            <li>The product of two stochastic matrices is stochastic.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of (1)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathbf{1} = (1, 1, \\ldots, 1)^T\\). Since each column of \\(P\\) sums to 1, we have \\(\\mathbf{1}^T P = \\mathbf{1}^T\\), i.e., \\(P^T \\mathbf{1} = \\mathbf{1}\\). So \\(\\lambda = 1\\) is an eigenvalue of \\(P^T\\), hence also of \\(P\\) (since \\(P\\) and \\(P^T\\) have the same eigenvalues).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.4 (Steady-State Vector)</div>
                    <div class="env-body">
                        <p>A <strong>steady-state vector</strong> (or stationary distribution) for \\(P\\) is a probability vector \\(\\mathbf{q}\\) (nonneg entries summing to 1) such that \\(P\\mathbf{q} = \\mathbf{q}\\). It is an eigenvector for \\(\\lambda = 1\\), normalized to be a probability vector.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.5 (Perron-Frobenius, simplified)</div>
                    <div class="env-body">
                        <p>If \\(P\\) is a column stochastic matrix with all entries strictly positive, then:</p>
                        <ol>
                            <li>\\(\\lambda = 1\\) is a simple eigenvalue (algebraic multiplicity 1).</li>
                            <li>All other eigenvalues satisfy \\(|\\lambda| < 1\\).</li>
                            <li>There is a unique steady-state vector \\(\\mathbf{q}\\).</li>
                            <li>For any initial probability vector \\(\\mathbf{x}_0\\), \\(\\lim_{k \\to \\infty} P^k \\mathbf{x}_0 = \\mathbf{q}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.6</div>
                    <div class="env-body">
                        <p>For the weather model, find the steady state. We solve \\(P\\mathbf{q} = \\mathbf{q}\\), i.e., \\((P - I)\\mathbf{q} = \\mathbf{0}\\):</p>
                        \\[\\begin{bmatrix} -0.3 & 0.4 \\\\ 0.3 & -0.4 \\end{bmatrix} \\begin{bmatrix} q_1 \\\\ q_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}.\\]
                        <p>This gives \\(0.3q_1 = 0.4q_2\\), so \\(q_1 = \\frac{4}{3}q_2\\). With \\(q_1 + q_2 = 1\\): \\(q_1 = \\frac{4}{7}\\), \\(q_2 = \\frac{3}{7}\\). In the long run, about 57.1% of days are sunny and 42.9% are rainy, regardless of the starting weather.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="markov-chain-sim"></div>

                <div class="env-block remark">
                    <div class="env-title">Convergence Rate</div>
                    <div class="env-body">
                        <p>The rate of convergence to the steady state is governed by the second-largest eigenvalue \\(|\\lambda_2|\\). The "mixing time" scales as \\(1 / (1 - |\\lambda_2|)\\): if \\(|\\lambda_2|\\) is close to 1, convergence is slow. This is directly relevant to MCMC methods in statistics.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'markov-chain-sim',
                    title: 'Markov Chain Simulator',
                    description: 'Set transition probabilities and watch the probability distribution converge to the steady state. The bar chart shows the evolving distribution; the dashed lines mark the steady state.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 1, originX: 0, originY: 0 });

                        // 3-state Markov chain
                        var P = [
                            [0.5, 0.3, 0.1],
                            [0.3, 0.4, 0.3],
                            [0.2, 0.3, 0.6]
                        ];
                        var state = [1, 0, 0]; // start in state 1
                        var history = [[1, 0, 0]];
                        var step = 0;
                        var maxSteps = 50;
                        var steadyState = null;

                        // Compute steady state via power iteration
                        function computeSteady() {
                            var v = [1/3, 1/3, 1/3];
                            for (var i = 0; i < 200; i++) {
                                var nv = [0, 0, 0];
                                for (var r = 0; r < 3; r++)
                                    for (var c = 0; c < 3; c++)
                                        nv[r] += P[r][c] * v[c];
                                v = nv;
                            }
                            return v;
                        }
                        steadyState = computeSteady();

                        VizEngine.createSlider(controls, 'P(1\u21901): ', 0, 1, P[0][0], 0.05, function(v) {
                            P[0][0] = v;
                            var rem = 1 - v;
                            P[1][0] = rem * 0.6;
                            P[2][0] = rem * 0.4;
                            reset();
                        });

                        var btnRow = document.createElement('div');
                        btnRow.style.cssText = 'display:flex;gap:8px;justify-content:center;margin-top:4px;';

                        VizEngine.createButton(btnRow, 'Step', function() {
                            if (step < maxSteps) {
                                var ns = [0, 0, 0];
                                for (var r = 0; r < 3; r++)
                                    for (var c = 0; c < 3; c++)
                                        ns[r] += P[r][c] * state[c];
                                state = ns;
                                history.push([state[0], state[1], state[2]]);
                                step++;
                                draw();
                            }
                        });

                        VizEngine.createButton(btnRow, 'Run 20 Steps', function() {
                            for (var s = 0; s < 20 && step < maxSteps; s++) {
                                var ns = [0, 0, 0];
                                for (var r = 0; r < 3; r++)
                                    for (var c = 0; c < 3; c++)
                                        ns[r] += P[r][c] * state[c];
                                state = ns;
                                history.push([state[0], state[1], state[2]]);
                                step++;
                            }
                            draw();
                        });

                        VizEngine.createButton(btnRow, 'Reset', function() { reset(); });
                        container.appendChild(btnRow);

                        function reset() {
                            state = [1, 0, 0];
                            history = [[1, 0, 0]];
                            step = 0;
                            steadyState = computeSteady();
                            draw();
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var w = viz.width, h = viz.height;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('3-State Markov Chain', w / 2, 20);

                            // Draw state diagram (top section)
                            var stateColors = [viz.colors.blue, viz.colors.teal, viz.colors.orange];
                            var stateNames = ['S\u2081', 'S\u2082', 'S\u2083'];
                            var cx = [w * 0.2, w * 0.5, w * 0.8];
                            var cy = [80, 80, 80];
                            var rad = 22;

                            // Draw states
                            for (var i = 0; i < 3; i++) {
                                // Glow based on probability
                                ctx.fillStyle = stateColors[i] + '44';
                                ctx.beginPath();
                                ctx.arc(cx[i], cy[i], rad + state[i] * 15, 0, Math.PI * 2);
                                ctx.fill();

                                ctx.fillStyle = stateColors[i];
                                ctx.beginPath();
                                ctx.arc(cx[i], cy[i], rad, 0, Math.PI * 2);
                                ctx.fill();

                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(stateNames[i], cx[i], cy[i] - 6);
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText((state[i] * 100).toFixed(1) + '%', cx[i], cy[i] + 10);
                            }

                            // Draw bar chart of current distribution
                            var barY0 = 130, barH = 120, barW = 50;
                            var barX = [w * 0.2 - barW/2, w * 0.5 - barW/2, w * 0.8 - barW/2];

                            // Background
                            ctx.fillStyle = '#0e0e28';
                            ctx.fillRect(barX[0] - 20, barY0 - 5, w * 0.6 + barW + 40, barH + 30);

                            for (var j = 0; j < 3; j++) {
                                var bh = state[j] * barH;
                                ctx.fillStyle = stateColors[j] + '66';
                                ctx.fillRect(barX[j], barY0 + barH - bh, barW, bh);
                                ctx.strokeStyle = stateColors[j];
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(barX[j], barY0 + barH - bh, barW, bh);

                                // Steady state line
                                if (steadyState) {
                                    var ssY = barY0 + barH - steadyState[j] * barH;
                                    ctx.strokeStyle = stateColors[j];
                                    ctx.lineWidth = 1;
                                    ctx.setLineDash([4, 3]);
                                    ctx.beginPath();
                                    ctx.moveTo(barX[j] - 8, ssY);
                                    ctx.lineTo(barX[j] + barW + 8, ssY);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                }

                                ctx.fillStyle = stateColors[j];
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(stateNames[j], barX[j] + barW/2, barY0 + barH + 14);
                            }

                            // History plot (convergence over time)
                            var plotY0 = barY0 + barH + 40;
                            var plotH = h - plotY0 - 30;
                            var plotX0 = 50;
                            var plotW = w - 80;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotX0, plotY0);
                            ctx.lineTo(plotX0, plotY0 + plotH);
                            ctx.lineTo(plotX0 + plotW, plotY0 + plotH);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Step', plotX0 + plotW / 2, plotY0 + plotH + 18);
                            ctx.textAlign = 'right';
                            ctx.fillText('1.0', plotX0 - 6, plotY0 + 4);
                            ctx.fillText('0.0', plotX0 - 6, plotY0 + plotH + 4);

                            // Draw steady state dashed lines
                            if (steadyState) {
                                for (var k = 0; k < 3; k++) {
                                    var sy = plotY0 + plotH - steadyState[k] * plotH;
                                    ctx.strokeStyle = stateColors[k] + '55';
                                    ctx.lineWidth = 1;
                                    ctx.setLineDash([3, 3]);
                                    ctx.beginPath();
                                    ctx.moveTo(plotX0, sy);
                                    ctx.lineTo(plotX0 + plotW, sy);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                }
                            }

                            // Plot history lines
                            if (history.length > 1) {
                                for (var ch = 0; ch < 3; ch++) {
                                    ctx.strokeStyle = stateColors[ch];
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    for (var t = 0; t < history.length; t++) {
                                        var px = plotX0 + (t / maxSteps) * plotW;
                                        var py = plotY0 + plotH - history[t][ch] * plotH;
                                        if (t === 0) ctx.moveTo(px, py);
                                        else ctx.lineTo(px, py);
                                    }
                                    ctx.stroke();
                                }
                            }

                            // Info
                            ctx.fillStyle = viz.colors.muted;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Step ' + step, w - 12, plotY0 + plotH + 18);

                            if (steadyState) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Steady: (' + steadyState[0].toFixed(3) + ', ' + steadyState[1].toFixed(3) + ', ' + steadyState[2].toFixed(3) + ')', 12, h - 8);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the steady-state vector for \\(P = \\begin{bmatrix} 0.6 & 0.2 \\\\ 0.4 & 0.8 \\end{bmatrix}\\).',
                    hint: 'Solve \\((P - I)\\mathbf{q} = \\mathbf{0}\\) with the constraint \\(q_1 + q_2 = 1\\).',
                    solution: '\\(P - I = \\begin{bmatrix} -0.4 & 0.2 \\\\ 0.4 & -0.2 \\end{bmatrix}\\). The equation gives \\(-0.4q_1 + 0.2q_2 = 0\\), so \\(q_2 = 2q_1\\). With \\(q_1 + q_2 = 1\\): \\(q_1 = 1/3\\), \\(q_2 = 2/3\\). The steady state is \\(\\mathbf{q} = (1/3, 2/3)^T\\).'
                },
                {
                    question: 'Show that the product of two column stochastic matrices is column stochastic.',
                    hint: 'Show that if each column of \\(A\\) and \\(B\\) sums to 1, then each column of \\(AB\\) sums to 1. Use \\(\\mathbf{1}^T A = \\mathbf{1}^T\\).',
                    solution: 'Let \\(A\\) and \\(B\\) be column stochastic. Each entry of \\(AB\\) is nonneg (product and sum of nonneg numbers). Column sums: \\(\\mathbf{1}^T(AB) = (\\mathbf{1}^T A)B = \\mathbf{1}^T B = \\mathbf{1}^T\\). So each column of \\(AB\\) sums to 1. Hence \\(AB\\) is column stochastic.'
                },
                {
                    question: 'A particle moves on a 3-node graph. From node 1, it goes to 2 or 3 with equal probability. From node 2, it goes to 1 with probability 1. From node 3, it goes to 1 or 2 with equal probability. Write the transition matrix and find the steady state.',
                    hint: 'Column \\(j\\) of \\(P\\) gives the transition probabilities <em>from</em> state \\(j\\).',
                    solution: '\\(P = \\begin{bmatrix} 0 & 1 & 0.5 \\\\ 0.5 & 0 & 0.5 \\\\ 0.5 & 0 & 0 \\end{bmatrix}\\). Solving \\((P-I)\\mathbf{q} = \\mathbf{0}\\): Row reduction gives \\(q_2 = q_1/2\\) and \\(q_3 = q_1/4\\). With \\(q_1 + q_2 + q_3 = 1\\): \\(q_1(1 + 1/2 + 1/4) = 1\\), so \\(q_1 = 4/7\\), \\(q_2 = 2/7\\), \\(q_3 = 1/7\\).'
                },
                {
                    question: 'If \\(P\\) is a stochastic matrix and \\(\\lambda\\) is an eigenvalue of \\(P\\), prove that \\(|\\lambda| \\leq 1\\).',
                    hint: 'Let \\(P\\mathbf{v} = \\lambda \\mathbf{v}\\) and consider the component \\(v_k\\) with the largest absolute value.',
                    solution: 'Let \\(\\mathbf{v}\\) be an eigenvector with \\(P\\mathbf{v} = \\lambda \\mathbf{v}\\). Let \\(|v_k| = \\max_i |v_i|\\). Then \\(|\\lambda||v_k| = |\\lambda v_k| = |(P\\mathbf{v})_k| = |\\sum_j p_{kj} v_j| \\leq \\sum_j p_{kj} |v_j| \\leq |v_k| \\sum_j p_{kj} = |v_k|\\). Since \\(v_k \\neq 0\\), we get \\(|\\lambda| \\leq 1\\).'
                },
                {
                    question: 'Compute \\(P^k\\) for \\(P = \\begin{bmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{bmatrix}\\) using diagonalization, and verify that \\(\\lim_{k \\to \\infty} P^k\\) exists.',
                    hint: 'Find the eigenvalues and eigenvectors of \\(P\\), write \\(P = SDS^{-1}\\), then \\(P^k = SD^kS^{-1}\\).',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 1\\), \\(\\lambda_2 = 0.5\\). Eigenvectors: \\(\\mathbf{v}_1 = (3, 2)^T\\) (for \\(\\lambda = 1\\)), \\(\\mathbf{v}_2 = (1, -1)^T\\) (for \\(\\lambda = 0.5\\)). So \\(P^k = \\frac{1}{5}\\begin{bmatrix} 3 & 1 \\\\ 2 & -1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 0 & 0.5^k \\end{bmatrix}\\begin{bmatrix} 1 & 1 \\\\ 2 & -3 \\end{bmatrix}\\). As \\(k \\to \\infty\\), \\(0.5^k \\to 0\\), so \\(P^k \\to \\frac{1}{5}\\begin{bmatrix} 3 & 3 \\\\ 2 & 2 \\end{bmatrix}\\). Each column is \\((3/5, 2/5)^T\\), the steady state.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Google PageRank
        // ============================================================
        {
            id: 'ch19-sec02',
            title: 'Google PageRank',
            content: `
                <h2>Google PageRank</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We derive the PageRank algorithm as an application of Markov chains. The web is modeled as a directed graph, and PageRank scores are the components of the dominant eigenvector of a modified stochastic matrix.</p>

                <div class="env-block intuition">
                    <div class="env-title">The Random Surfer</div>
                    <div class="env-body">
                        <p>Imagine a web surfer who clicks links at random. On each page, they follow one of the outgoing links chosen uniformly at random. The "importance" of a page is the fraction of time the surfer spends on it in the long run. This is precisely the steady-state probability of the underlying Markov chain.</p>
                    </div>
                </div>

                <h3>The Web as a Directed Graph</h3>

                <p>Model the web as a directed graph \\(G = (V, E)\\) with \\(n\\) pages (nodes). Page \\(j\\) has outgoing links to pages in \\(L(j)\\). The <strong>link matrix</strong> \\(H\\) has entries:</p>
                \\[h_{ij} = \\begin{cases} 1/|L(j)| & \\text{if } j \\to i, \\\\ 0 & \\text{otherwise}. \\end{cases}\\]

                <p>Each column of \\(H\\) sums to 1 (if page \\(j\\) has at least one outgoing link), making \\(H\\) a stochastic matrix.</p>

                <div class="env-block warning">
                    <div class="env-title">Dangling Nodes</div>
                    <div class="env-body">
                        <p>A page with no outgoing links (a "dangling node") produces an all-zero column in \\(H\\), violating the stochastic property. The standard fix is to replace the zero column with \\(\\frac{1}{n}\\mathbf{1}\\) (the surfer teleports to a random page when stuck).</p>
                    </div>
                </div>

                <h3>The Google Matrix</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.7 (Google Matrix)</div>
                    <div class="env-body">
                        <p>The <strong>Google matrix</strong> is</p>
                        \\[G = \\alpha S + (1 - \\alpha) \\frac{1}{n} \\mathbf{1}\\mathbf{1}^T\\]
                        <p>where \\(S\\) is the stochastic version of \\(H\\) (dangling nodes fixed), \\(\\alpha \\in (0,1)\\) is the <strong>damping factor</strong> (Google uses \\(\\alpha = 0.85\\)), and \\(\\frac{1}{n}\\mathbf{1}\\mathbf{1}^T\\) is the uniform teleportation matrix.</p>
                    </div>
                </div>

                <p>Interpretation: with probability \\(\\alpha\\), the surfer follows a random link; with probability \\(1 - \\alpha\\), they "get bored" and jump to a uniformly random page. The teleportation ensures:</p>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 19.8</div>
                    <div class="env-body">
                        <p>The Google matrix \\(G\\) is column stochastic with all entries strictly positive. By the Perron-Frobenius theorem (Theorem 19.5), there exists a unique steady-state vector \\(\\boldsymbol{\\pi}\\), and \\(G^k \\mathbf{x} \\to \\boldsymbol{\\pi}\\) for any initial distribution \\(\\mathbf{x}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.9 (PageRank)</div>
                    <div class="env-body">
                        <p>The <strong>PageRank vector</strong> \\(\\boldsymbol{\\pi}\\) is the unique probability vector satisfying \\(G\\boldsymbol{\\pi} = \\boldsymbol{\\pi}\\). The PageRank of page \\(i\\) is \\(\\pi_i\\).</p>
                    </div>
                </div>

                <h3>The Power Method</h3>

                <p>PageRank is computed by the power method: starting from \\(\\mathbf{x}_0 = \\frac{1}{n}\\mathbf{1}\\), iterate \\(\\mathbf{x}_{k+1} = G\\mathbf{x}_k\\) until convergence. The convergence rate is \\(|\\lambda_2| \\leq \\alpha\\), so smaller \\(\\alpha\\) means faster convergence but less fidelity to the link structure.</p>

                <div class="env-block example">
                    <div class="env-title">Example 19.10</div>
                    <div class="env-body">
                        <p>Consider a tiny web with 4 pages: 1\\(\\to\\)2, 1\\(\\to\\)3, 2\\(\\to\\)1, 3\\(\\to\\)1, 3\\(\\to\\)4, 4\\(\\to\\)3. The link matrix is</p>
                        \\[H = \\begin{bmatrix} 0 & 1 & 1/2 & 0 \\\\ 1/2 & 0 & 0 & 0 \\\\ 1/2 & 0 & 0 & 1 \\\\ 0 & 0 & 1/2 & 0 \\end{bmatrix}.\\]
                        <p>With \\(\\alpha = 0.85\\): \\(G = 0.85 H + 0.15 \\cdot \\frac{1}{4}\\mathbf{1}\\mathbf{1}^T\\). Power iteration converges to approximately \\(\\boldsymbol{\\pi} \\approx (0.368, 0.142, 0.288, 0.202)^T\\). Page 1 has the highest PageRank because it receives links from pages 2, 3 (which themselves are linked).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.11 (Convergence of Power Method)</div>
                    <div class="env-body">
                        <p>For the Google matrix with damping factor \\(\\alpha\\), the power method converges geometrically:</p>
                        \\[\\|\\mathbf{x}_k - \\boldsymbol{\\pi}\\|_1 \\leq 2\\alpha^k.\\]
                        <p>With \\(\\alpha = 0.85\\), roughly 50 iterations suffice for 10 digits of accuracy.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Historical Note</div>
                    <div class="env-body">
                        <p>PageRank was introduced by Larry Page and Sergey Brin in 1998 while they were PhD students at Stanford. The key insight was that the "importance" of a web page is determined by the importance of the pages linking to it (a recursive definition resolved by eigenvector computation). This application of the Perron-Frobenius theorem to web search launched one of the most valuable companies in history.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'For a web with 3 pages where 1\\(\\to\\)2, 2\\(\\to\\)3, 3\\(\\to\\)1, write the link matrix \\(H\\) and find the PageRank without damping (\\(\\alpha = 1\\)).',
                    hint: 'This is a cycle graph. By symmetry, what should the steady state be?',
                    solution: '\\(H = \\begin{bmatrix} 0 & 0 & 1 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}\\). By symmetry, the steady state is \\(\\boldsymbol{\\pi} = (1/3, 1/3, 1/3)^T\\). Verification: \\(H\\boldsymbol{\\pi} = \\boldsymbol{\\pi}\\). \\(\\checkmark\\) All pages are equally important in a cycle.'
                },
                {
                    question: 'Explain why the damping factor \\(\\alpha < 1\\) is necessary. What goes wrong if \\(\\alpha = 1\\)?',
                    hint: 'Think about disconnected components and dangling nodes.',
                    solution: 'With \\(\\alpha = 1\\), the matrix \\(G = S\\) may not have all positive entries (e.g., disconnected graph). This means the eigenvalue 1 may not be simple, and there may be multiple steady states (or no convergence). The Perron-Frobenius theorem requires strictly positive entries. The teleportation term \\((1-\\alpha)\\frac{1}{n}\\mathbf{1}\\mathbf{1}^T\\) ensures all entries are positive, guaranteeing a unique steady state and convergence from any starting vector.'
                },
                {
                    question: 'If a page has no incoming links, what can you say about its PageRank as \\(\\alpha \\to 1\\)?',
                    hint: 'The only "flow" into such a page comes from the teleportation term.',
                    solution: 'A page with no incoming links receives flow only from teleportation, which contributes \\((1-\\alpha)/n\\) from each page, totaling \\((1-\\alpha)\\). As \\(\\alpha \\to 1\\), this tends to 0, so the PageRank of an unlinked page vanishes. Intuitively, if nobody links to you, you are unimportant.'
                },
                {
                    question: 'Show that the \\(\\ell^1\\) norm of the PageRank vector equals 1, i.e., \\(\\sum_i \\pi_i = 1\\).',
                    hint: 'The PageRank vector is a probability vector by definition. Alternatively, show that \\(G\\) preserves the \\(\\ell^1\\) norm of probability vectors.',
                    solution: 'By definition, \\(\\boldsymbol{\\pi}\\) is a probability vector (nonneg entries summing to 1). Alternatively: \\(\\mathbf{1}^T G = \\mathbf{1}^T\\) since \\(G\\) is column stochastic, so \\(\\mathbf{1}^T \\boldsymbol{\\pi} = \\mathbf{1}^T G \\boldsymbol{\\pi} = \\mathbf{1}^T \\boldsymbol{\\pi}\\), confirming that the sum is preserved. Starting from \\(\\mathbf{1}^T \\mathbf{x}_0 = 1\\), all iterates have \\(\\ell^1\\) norm 1, so the limit does too.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Systems of Differential Equations
        // ============================================================
        {
            id: 'ch19-sec03',
            title: 'Systems of Differential Equations',
            content: `
                <h2>Systems of Differential Equations</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We solve the system \\(\\mathbf{x}'(t) = A\\mathbf{x}(t)\\) using eigenvalues and eigenvectors, define the matrix exponential \\(e^{At}\\), and classify the behavior of 2D linear systems by their phase portraits.</p>

                <div class="env-block intuition">
                    <div class="env-title">From Scalar to System</div>
                    <div class="env-body">
                        <p>The scalar ODE \\(x' = ax\\) has solution \\(x(t) = e^{at}x(0)\\). We extend this to systems: \\(\\mathbf{x}' = A\\mathbf{x}\\) has solution \\(\\mathbf{x}(t) = e^{At}\\mathbf{x}(0)\\), where the matrix exponential \\(e^{At}\\) generalizes the scalar exponential. Diagonalization makes computation tractable.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.12 (Linear System of ODEs)</div>
                    <div class="env-body">
                        <p>A <strong>first-order linear system</strong> is</p>
                        \\[\\mathbf{x}'(t) = A\\mathbf{x}(t), \\quad \\mathbf{x}(0) = \\mathbf{x}_0\\]
                        <p>where \\(A\\) is a constant \\(n \\times n\\) matrix and \\(\\mathbf{x}(t) \\in \\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.13 (Matrix Exponential)</div>
                    <div class="env-body">
                        <p>The <strong>matrix exponential</strong> of an \\(n \\times n\\) matrix \\(A\\) is</p>
                        \\[e^A = I + A + \\frac{A^2}{2!} + \\frac{A^3}{3!} + \\cdots = \\sum_{k=0}^{\\infty} \\frac{A^k}{k!}.\\]
                        <p>This series converges for every matrix \\(A\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.14 (Solution via Matrix Exponential)</div>
                    <div class="env-body">
                        <p>The unique solution to \\(\\mathbf{x}' = A\\mathbf{x}\\), \\(\\mathbf{x}(0) = \\mathbf{x}_0\\) is</p>
                        \\[\\mathbf{x}(t) = e^{At}\\mathbf{x}_0.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Differentiating term by term: \\(\\frac{d}{dt} e^{At} = \\sum_{k=1}^{\\infty} \\frac{k A^k t^{k-1}}{k!} = A \\sum_{k=1}^{\\infty} \\frac{(At)^{k-1}}{(k-1)!} = A e^{At}\\). So \\(\\mathbf{x}(t) = e^{At}\\mathbf{x}_0\\) satisfies \\(\\mathbf{x}' = Ae^{At}\\mathbf{x}_0 = A\\mathbf{x}(t)\\), and \\(\\mathbf{x}(0) = e^0 \\mathbf{x}_0 = I\\mathbf{x}_0 = \\mathbf{x}_0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h3>Computing \\(e^{At}\\) via Diagonalization</h3>

                <p>If \\(A = PDP^{-1}\\) where \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then</p>
                \\[e^{At} = Pe^{Dt}P^{-1} = P\\operatorname{diag}(e^{\\lambda_1 t}, \\ldots, e^{\\lambda_n t})P^{-1}.\\]

                <p>The general solution is a linear combination of modes \\(e^{\\lambda_i t}\\mathbf{v}_i\\):</p>
                \\[\\mathbf{x}(t) = c_1 e^{\\lambda_1 t}\\mathbf{v}_1 + c_2 e^{\\lambda_2 t}\\mathbf{v}_2 + \\cdots + c_n e^{\\lambda_n t}\\mathbf{v}_n\\]
                <p>where the constants \\(c_i\\) are determined by \\(\\mathbf{x}(0) = c_1 \\mathbf{v}_1 + \\cdots + c_n \\mathbf{v}_n\\).</p>

                <div class="env-block example">
                    <div class="env-title">Example 19.15</div>
                    <div class="env-body">
                        <p>Solve \\(\\mathbf{x}' = \\begin{bmatrix} -1 & 1 \\\\ 0 & -2 \\end{bmatrix}\\mathbf{x}\\) with \\(\\mathbf{x}(0) = (1, 3)^T\\).</p>
                        <p>Eigenvalues: \\(\\lambda_1 = -1\\), \\(\\lambda_2 = -2\\). Eigenvectors: \\(\\mathbf{v}_1 = (1, 0)^T\\), \\(\\mathbf{v}_2 = (1, -1)^T\\).</p>
                        <p>General solution: \\(\\mathbf{x}(t) = c_1 e^{-t}(1, 0)^T + c_2 e^{-2t}(1, -1)^T\\).</p>
                        <p>From \\(\\mathbf{x}(0) = (1, 3)^T\\): \\(c_1 + c_2 = 1\\) and \\(-c_2 = 3\\), so \\(c_2 = -3\\), \\(c_1 = 4\\).</p>
                        <p>Solution: \\(\\mathbf{x}(t) = 4e^{-t}(1, 0)^T - 3e^{-2t}(1, -1)^T = (4e^{-t} - 3e^{-2t}, 3e^{-2t})^T\\).</p>
                        <p>Both eigenvalues are negative, so \\(\\mathbf{x}(t) \\to \\mathbf{0}\\) as \\(t \\to \\infty\\). The origin is a <strong>stable node</strong>.</p>
                    </div>
                </div>

                <h3>Phase Portrait Classification (2D)</h3>

                <p>For \\(2 \\times 2\\) real matrices, the eigenvalues determine the phase portrait:</p>
                <ul>
                    <li><strong>Stable node:</strong> \\(\\lambda_1, \\lambda_2 < 0\\) (real). All trajectories converge to the origin.</li>
                    <li><strong>Unstable node:</strong> \\(\\lambda_1, \\lambda_2 > 0\\) (real). All trajectories diverge from the origin.</li>
                    <li><strong>Saddle point:</strong> \\(\\lambda_1 > 0 > \\lambda_2\\) (real). Trajectories approach along one eigendirection, diverge along the other.</li>
                    <li><strong>Stable spiral:</strong> \\(\\lambda = \\alpha \\pm \\beta i\\) with \\(\\alpha < 0\\). Trajectories spiral inward.</li>
                    <li><strong>Unstable spiral:</strong> \\(\\alpha > 0\\). Trajectories spiral outward.</li>
                    <li><strong>Center:</strong> \\(\\alpha = 0\\), \\(\\beta \\neq 0\\). Closed elliptical orbits.</li>
                </ul>

                <div class="viz-placeholder" data-viz="phase-portrait"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.16 (Stability)</div>
                    <div class="env-body">
                        <p>The origin is a <strong>stable equilibrium</strong> of \\(\\mathbf{x}' = A\\mathbf{x}\\) (i.e., \\(\\mathbf{x}(t) \\to \\mathbf{0}\\) for all initial conditions) if and only if all eigenvalues of \\(A\\) have negative real parts.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Higher-Order ODEs</div>
                    <div class="env-body">
                        <p>Any \\(n\\)-th order linear ODE can be converted to a first-order system. For example, \\(y'' + 3y' + 2y = 0\\) becomes \\(\\mathbf{x}' = \\begin{bmatrix} 0 & 1 \\\\ -2 & -3 \\end{bmatrix}\\mathbf{x}\\) with \\(\\mathbf{x} = (y, y')^T\\). The eigenvalues of the companion matrix are the roots of the characteristic polynomial of the ODE.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'phase-portrait',
                    title: 'Phase Portrait of \\(\\mathbf{x}\' = A\\mathbf{x}\\)',
                    description: 'Adjust the matrix entries to see different types of phase portraits: stable/unstable nodes, saddle points, spirals, and centers. Trajectories are drawn from multiple initial conditions.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 35 });

                        var a11 = -1, a12 = 1, a21 = -1, a22 = -1;

                        VizEngine.createSlider(controls, 'a\u2081\u2081: ', -3, 3, a11, 0.2, function(v) { a11 = v; });
                        VizEngine.createSlider(controls, 'a\u2081\u2082: ', -3, 3, a12, 0.2, function(v) { a12 = v; });
                        VizEngine.createSlider(controls, 'a\u2082\u2081: ', -3, 3, a21, 0.2, function(v) { a21 = v; });
                        VizEngine.createSlider(controls, 'a\u2082\u2082: ', -3, 3, a22, 0.2, function(v) { a22 = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var A = [[a11, a12], [a21, a22]];

                            // Draw trajectories from various initial conditions
                            var initials = [];
                            var r = 4;
                            for (var ang = 0; ang < 2 * Math.PI; ang += Math.PI / 6) {
                                initials.push([r * Math.cos(ang), r * Math.sin(ang)]);
                            }
                            // Add a few inner ones
                            for (var ang2 = 0; ang2 < 2 * Math.PI; ang2 += Math.PI / 4) {
                                initials.push([1.5 * Math.cos(ang2), 1.5 * Math.sin(ang2)]);
                            }

                            var trajColors = [viz.colors.blue + 'aa', viz.colors.teal + 'aa', viz.colors.orange + 'aa', viz.colors.purple + 'aa'];

                            for (var idx = 0; idx < initials.length; idx++) {
                                var x = initials[idx][0];
                                var y = initials[idx][1];
                                var dt = 0.02;
                                var steps = 500;
                                var color = trajColors[idx % trajColors.length];
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.2;
                                ctx.beginPath();
                                var sp = viz.toScreen(x, y);
                                ctx.moveTo(sp[0], sp[1]);
                                var prevX = x, prevY = y;
                                for (var s = 0; s < steps; s++) {
                                    var dx = A[0][0] * x + A[0][1] * y;
                                    var dy = A[1][0] * x + A[1][1] * y;
                                    x += dx * dt;
                                    y += dy * dt;
                                    if (Math.abs(x) > 10 || Math.abs(y) > 10) break;
                                    sp = viz.toScreen(x, y);
                                    ctx.lineTo(sp[0], sp[1]);
                                }
                                ctx.stroke();

                                // Draw arrowhead at end or midpoint
                                if (Math.abs(x) < 10 && Math.abs(y) < 10) {
                                    var adx = x - prevX;
                                    var ady = y - prevY;
                                    var al = Math.sqrt(adx*adx + ady*ady);
                                    if (al > 0.01) {
                                        var angle = Math.atan2(-ady, adx); // screen coords
                                        var sEnd = viz.toScreen(x, y);
                                        var sa = Math.atan2(sEnd[1] - viz.toScreen(prevX, prevY)[1], sEnd[0] - viz.toScreen(prevX, prevY)[0]);
                                        ctx.fillStyle = color;
                                        ctx.beginPath();
                                        ctx.moveTo(sEnd[0], sEnd[1]);
                                        ctx.lineTo(sEnd[0] - 8*Math.cos(sa - 0.4), sEnd[1] - 8*Math.sin(sa - 0.4));
                                        ctx.lineTo(sEnd[0] - 8*Math.cos(sa + 0.4), sEnd[1] - 8*Math.sin(sa + 0.4));
                                        ctx.closePath();
                                        ctx.fill();
                                    }
                                }
                            }

                            // Eigenvalue info
                            var tr = a11 + a22;
                            var det = a11 * a22 - a12 * a21;
                            var disc = tr * tr - 4 * det;
                            var typeStr = '';
                            var typeColor = viz.colors.white;

                            if (disc >= 0) {
                                var sq = Math.sqrt(disc);
                                var l1 = (tr + sq) / 2;
                                var l2 = (tr - sq) / 2;
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03BB\u2081 = ' + l1.toFixed(3), 10, 16);
                                ctx.fillText('\u03BB\u2082 = ' + l2.toFixed(3), 10, 32);

                                if (l1 < -1e-6 && l2 < -1e-6) { typeStr = 'Stable Node'; typeColor = viz.colors.green; }
                                else if (l1 > 1e-6 && l2 > 1e-6) { typeStr = 'Unstable Node'; typeColor = viz.colors.red; }
                                else if (l1 * l2 < -1e-6) { typeStr = 'Saddle Point'; typeColor = viz.colors.orange; }
                                else { typeStr = 'Degenerate'; typeColor = viz.colors.yellow; }
                            } else {
                                var re = tr / 2;
                                var im = Math.sqrt(-disc) / 2;
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03BB = ' + re.toFixed(3) + ' \u00b1 ' + im.toFixed(3) + 'i', 10, 16);

                                if (Math.abs(re) < 1e-6) { typeStr = 'Center'; typeColor = viz.colors.blue; }
                                else if (re < 0) { typeStr = 'Stable Spiral'; typeColor = viz.colors.green; }
                                else { typeStr = 'Unstable Spiral'; typeColor = viz.colors.red; }
                            }

                            ctx.fillStyle = typeColor;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(typeStr, 10, 52);

                            // Origin marker
                            viz.drawPoint(0, 0, viz.colors.white, null, 4);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Solve \\(\\mathbf{x}\' = \\begin{bmatrix} 1 & 0 \\\\ 0 & -2 \\end{bmatrix} \\mathbf{x}\\) with \\(\\mathbf{x}(0) = (3, 5)^T\\). What type of equilibrium is the origin?',
                    hint: 'The matrix is already diagonal. Each component satisfies a scalar ODE.',
                    solution: 'Since \\(A\\) is diagonal: \\(x_1\' = x_1\\) and \\(x_2\' = -2x_2\\). Solutions: \\(x_1(t) = 3e^t\\), \\(x_2(t) = 5e^{-2t}\\). Eigenvalues are \\(1 > 0 > -2\\), so the origin is a <strong>saddle point</strong>. \\(x_1\\) grows, \\(x_2\\) decays.'
                },
                {
                    question: 'Compute \\(e^{At}\\) where \\(A = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\). What kind of motion does this system produce?',
                    hint: 'Find the eigenvalues of \\(A\\). They are purely imaginary. What is \\(e^{i\\theta}\\)?',
                    solution: 'Eigenvalues: \\(\\pm i\\). Using the series directly or Euler\'s formula: \\(e^{At} = \\begin{bmatrix} \\cos t & -\\sin t \\\\ \\sin t & \\cos t \\end{bmatrix}\\). This is a rotation matrix! The system produces <strong>circular orbits</strong> (center). Every solution rotates around the origin with period \\(2\\pi\\).'
                },
                {
                    question: 'Show that \\(\\det(e^A) = e^{\\operatorname{tr}(A)}\\) for any square matrix \\(A\\).',
                    hint: 'If \\(A\\) is diagonalizable, \\(A = PDP^{-1}\\) and \\(e^A = Pe^DP^{-1}\\). Compute both determinants.',
                    solution: 'If \\(A = PDP^{-1}\\) with \\(D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), then \\(e^A = P\\operatorname{diag}(e^{\\lambda_1}, \\ldots, e^{\\lambda_n})P^{-1}\\). So \\(\\det(e^A) = \\prod e^{\\lambda_i} = e^{\\sum \\lambda_i} = e^{\\operatorname{tr}(A)}\\). The result extends to non-diagonalizable matrices by continuity (every matrix is a limit of diagonalizable ones) or by using Jordan form.'
                },
                {
                    question: 'Convert the second-order ODE \\(y\'\' + 5y\' + 6y = 0\\) to a first-order system and solve it with \\(y(0) = 1\\), \\(y\'(0) = 0\\).',
                    hint: 'Let \\(x_1 = y\\), \\(x_2 = y\'\\). Then \\(x_1\' = x_2\\), \\(x_2\' = -6x_1 - 5x_2\\).',
                    solution: 'The system is \\(\\mathbf{x}\' = \\begin{bmatrix} 0 & 1 \\\\ -6 & -5 \\end{bmatrix}\\mathbf{x}\\). Eigenvalues: \\(\\lambda^2 + 5\\lambda + 6 = 0\\), so \\(\\lambda_1 = -2\\), \\(\\lambda_2 = -3\\). Eigenvectors: \\(\\mathbf{v}_1 = (1, -2)^T\\), \\(\\mathbf{v}_2 = (1, -3)^T\\). General solution: \\(\\mathbf{x}(t) = c_1 e^{-2t}(1,-2)^T + c_2 e^{-3t}(1,-3)^T\\). From \\(y(0) = 1\\): \\(c_1 + c_2 = 1\\). From \\(y\'(0) = 0\\): \\(-2c_1 - 3c_2 = 0\\), so \\(c_1 = 3\\), \\(c_2 = -2\\). Hence \\(y(t) = 3e^{-2t} - 2e^{-3t}\\).'
                },
                {
                    question: 'For the system \\(\\mathbf{x}\' = A\\mathbf{x}\\), show that if \\(A\\) is skew-symmetric (\\(A^T = -A\\)), then \\(\\|\\mathbf{x}(t)\\|\\) is constant (the "energy" is conserved).',
                    hint: 'Compute \\(\\frac{d}{dt}\\|\\mathbf{x}\\|^2 = \\frac{d}{dt}(\\mathbf{x}^T \\mathbf{x})\\) using the product rule.',
                    solution: '\\(\\frac{d}{dt}\\|\\mathbf{x}\\|^2 = 2\\mathbf{x}^T \\mathbf{x}\' = 2\\mathbf{x}^T A \\mathbf{x}\\). Since \\(A\\) is skew-symmetric, \\(\\mathbf{x}^T A \\mathbf{x} = 0\\) (proven in Chapter 18, Exercise 2). So \\(\\frac{d}{dt}\\|\\mathbf{x}\\|^2 = 0\\), meaning \\(\\|\\mathbf{x}(t)\\|\\) is constant. The eigenvalues of a skew-symmetric matrix are purely imaginary, consistent with center-type behavior.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Fourier Series and Signal Processing
        // ============================================================
        {
            id: 'ch19-sec04',
            title: 'Fourier Series and Signal Processing',
            content: `
                <h2>Fourier Series and Signal Processing</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We reinterpret Fourier series as orthogonal decomposition in a function space. The Fourier coefficients are inner products (projections), and the convergence of Fourier series is the function-space analogue of the projection theorem from Chapter 15. This connects abstract linear algebra to practical signal analysis.</p>

                <div class="env-block intuition">
                    <div class="env-title">Functions as Vectors</div>
                    <div class="env-body">
                        <p>A function \\(f\\) on \\([0, 2\\pi]\\) can be thought of as an "infinite-dimensional vector," with one component for each point \\(x \\in [0, 2\\pi]\\). The set of square-integrable functions forms a vector space \\(L^2[0, 2\\pi]\\), and the trigonometric functions \\(\\{1, \\cos x, \\sin x, \\cos 2x, \\sin 2x, \\ldots\\}\\) form an orthogonal basis, just as \\(\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}\\) forms an orthogonal basis for \\(\\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.17 (\\(L^2\\) Inner Product)</div>
                    <div class="env-body">
                        <p>For functions \\(f, g \\colon [0, 2\\pi] \\to \\mathbb{R}\\), the <strong>inner product</strong> is</p>
                        \\[\\langle f, g \\rangle = \\int_0^{2\\pi} f(x) g(x) \\, dx.\\]
                        <p>This satisfies all the axioms of an inner product (linearity, symmetry, positive definiteness).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 19.18 (Orthogonality of Trigonometric Functions)</div>
                    <div class="env-body">
                        <p>The functions \\(\\{1, \\cos nx, \\sin nx : n = 1, 2, 3, \\ldots\\}\\) are orthogonal in \\(L^2[0, 2\\pi]\\):</p>
                        \\[\\langle \\cos mx, \\cos nx \\rangle = \\pi \\delta_{mn}, \\quad \\langle \\sin mx, \\sin nx \\rangle = \\pi \\delta_{mn}, \\quad \\langle \\cos mx, \\sin nx \\rangle = 0\\]
                        <p>for \\(m, n \\geq 1\\), and \\(\\langle 1, 1 \\rangle = 2\\pi\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.19 (Fourier Series)</div>
                    <div class="env-body">
                        <p>The <strong>Fourier series</strong> of \\(f \\in L^2[0, 2\\pi]\\) is</p>
                        \\[f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left(a_n \\cos nx + b_n \\sin nx\\right)\\]
                        <p>where the <strong>Fourier coefficients</strong> are:</p>
                        \\[a_n = \\frac{1}{\\pi} \\int_0^{2\\pi} f(x) \\cos nx \\, dx, \\qquad b_n = \\frac{1}{\\pi} \\int_0^{2\\pi} f(x) \\sin nx \\, dx.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Projection Formula</div>
                    <div class="env-body">
                        <p>The Fourier coefficients are precisely the projection formula from Chapter 15:</p>
                        \\[a_n = \\frac{\\langle f, \\cos nx \\rangle}{\\langle \\cos nx, \\cos nx \\rangle} = \\frac{\\langle f, \\cos nx \\rangle}{\\pi}.\\]
                        <p>This is the infinite-dimensional analogue of \\(\\hat{x}_i = \\frac{\\langle \\mathbf{v}, \\mathbf{e}_i \\rangle}{\\langle \\mathbf{e}_i, \\mathbf{e}_i \\rangle}\\) from orthogonal projection in \\(\\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.20 (Parseval's Identity)</div>
                    <div class="env-body">
                        <p>If \\(f \\in L^2[0, 2\\pi]\\), then</p>
                        \\[\\frac{1}{\\pi}\\int_0^{2\\pi} |f(x)|^2 \\, dx = \\frac{a_0^2}{2} + \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2).\\]
                        <p>This is the function-space version of the Pythagorean theorem: \\(\\|\\mathbf{v}\\|^2 = \\sum c_i^2\\) in an orthonormal basis.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.21 (Square Wave)</div>
                    <div class="env-body">
                        <p>The square wave \\(f(x) = \\begin{cases} 1 & 0 < x < \\pi \\\\ -1 & \\pi < x < 2\\pi \\end{cases}\\) has Fourier series</p>
                        \\[f(x) = \\frac{4}{\\pi}\\left(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots\\right) = \\frac{4}{\\pi}\\sum_{k=0}^{\\infty} \\frac{\\sin(2k+1)x}{2k+1}.\\]
                        <p>Only odd sine terms appear (because \\(f\\) is odd and has half-wave symmetry). As we add more terms, the partial sums approximate the square wave more closely.</p>
                    </div>
                </div>

                <h3>Applications in Signal Processing</h3>

                <p>In signal processing, the Fourier transform decomposes a signal into its frequency components. Key applications include:</p>
                <ul>
                    <li><strong>Filtering:</strong> Remove unwanted frequency components (noise reduction, equalization).</li>
                    <li><strong>Compression:</strong> Keep only the largest Fourier coefficients (JPEG, MP3).</li>
                    <li><strong>Spectral analysis:</strong> Identify periodic patterns in data (astronomy, seismology).</li>
                </ul>

                <div class="env-block remark">
                    <div class="env-title">The DFT and FFT</div>
                    <div class="env-body">
                        <p>The <strong>Discrete Fourier Transform</strong> (DFT) replaces integrals with finite sums and is the workhorse of computational signal processing. It can be written as multiplication by the \\(n \\times n\\) Fourier matrix \\(F_n\\) with entries \\((F_n)_{jk} = \\omega^{jk}\\) where \\(\\omega = e^{-2\\pi i/n}\\). The columns of \\(F_n\\) are orthogonal. The <strong>Fast Fourier Transform</strong> (FFT) computes the DFT in \\(O(n \\log n)\\) operations instead of \\(O(n^2)\\), making it one of the most important algorithms in computing.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Verify that \\(\\int_0^{2\\pi} \\cos(mx)\\sin(nx)\\, dx = 0\\) for all positive integers \\(m, n\\).',
                    hint: 'Use the product-to-sum formula: \\(\\cos(mx)\\sin(nx) = \\frac{1}{2}[\\sin((m+n)x) - \\sin((m-n)x)]\\).',
                    solution: 'Applying the product-to-sum formula, the integral becomes \\(\\frac{1}{2}\\int_0^{2\\pi}[\\sin((m+n)x) - \\sin((m-n)x)]\\, dx\\). For any nonzero integer \\(k\\), \\(\\int_0^{2\\pi} \\sin(kx)\\, dx = [-\\cos(kx)/k]_0^{2\\pi} = 0\\). If \\(m = n\\), the second term is \\(\\sin(0) = 0\\). In all cases, the integral is 0.'
                },
                {
                    question: 'Compute the Fourier coefficients \\(a_0, a_1, b_1\\) for \\(f(x) = x\\) on \\([0, 2\\pi]\\).',
                    hint: 'Use integration by parts for \\(\\int_0^{2\\pi} x \\cos x \\, dx\\) and \\(\\int_0^{2\\pi} x \\sin x \\, dx\\).',
                    solution: '\\(a_0 = \\frac{1}{\\pi}\\int_0^{2\\pi} x\\, dx = \\frac{1}{\\pi} \\cdot 2\\pi^2 = 2\\pi\\). \\(a_1 = \\frac{1}{\\pi}\\int_0^{2\\pi} x\\cos x\\, dx = \\frac{1}{\\pi}[x\\sin x + \\cos x]_0^{2\\pi} = \\frac{1}{\\pi}(0 + 1 - 0 - 1) = 0\\). \\(b_1 = \\frac{1}{\\pi}\\int_0^{2\\pi} x \\sin x \\, dx = \\frac{1}{\\pi}[-x\\cos x + \\sin x]_0^{2\\pi} = \\frac{1}{\\pi}(-2\\pi) = -2\\).'
                },
                {
                    question: 'Explain why Parseval\'s identity is the infinite-dimensional Pythagorean theorem.',
                    hint: 'In \\(\\mathbb{R}^n\\) with orthonormal basis \\(\\{\\mathbf{u}_i\\}\\), \\(\\|\\mathbf{v}\\|^2 = \\sum (\\mathbf{v} \\cdot \\mathbf{u}_i)^2\\). Compare with Parseval.',
                    solution: 'In \\(\\mathbb{R}^n\\), if \\(\\mathbf{v} = \\sum c_i \\mathbf{u}_i\\) in an orthonormal basis, then \\(\\|\\mathbf{v}\\|^2 = \\sum c_i^2\\) (Pythagorean theorem). In \\(L^2\\), the function \\(f\\) is "decomposed" into the orthogonal basis \\(\\{1/\\sqrt{2}, \\cos nx/\\sqrt{\\pi}, \\sin nx/\\sqrt{\\pi}\\}\\), and Parseval says \\(\\|f\\|^2 = \\sum (\\text{coefficients})^2\\). The "length" of the function (its \\(L^2\\) norm) equals the sum of squares of its Fourier coefficients, just as in finite dimensions.'
                },
                {
                    question: 'The DFT of a vector \\(\\mathbf{x} \\in \\mathbb{C}^n\\) is \\(\\hat{\\mathbf{x}} = F_n \\mathbf{x}\\) where \\((F_n)_{jk} = \\omega^{jk}\\), \\(\\omega = e^{-2\\pi i/n}\\). Show that the columns of \\(F_n\\) are orthogonal and find \\(\\|\\text{col}_k(F_n)\\|^2\\).',
                    hint: 'Compute the inner product of columns \\(k\\) and \\(\\ell\\): \\(\\sum_{j=0}^{n-1} \\overline{\\omega^{jk}} \\omega^{j\\ell} = \\sum_{j=0}^{n-1} \\omega^{j(\\ell - k)}\\). This is a geometric series.',
                    solution: 'The inner product is \\(\\sum_{j=0}^{n-1} \\omega^{j(\\ell-k)}\\). If \\(\\ell \\neq k\\), this is a geometric series with ratio \\(\\omega^{\\ell-k} \\neq 1\\), summing to \\(\\frac{1 - \\omega^{n(\\ell-k)}}{1 - \\omega^{\\ell-k}} = \\frac{1 - 1}{1 - \\omega^{\\ell-k}} = 0\\). If \\(\\ell = k\\), each term is 1, giving sum \\(n\\). So the columns are orthogonal with \\(\\|\\text{col}_k\\|^2 = n\\), and \\(\\frac{1}{\\sqrt{n}}F_n\\) is unitary.'
                },
                {
                    question: 'Why does JPEG image compression work? Explain in terms of the energy compaction property of the DCT (a variant of the DFT).',
                    hint: 'Think about what "smooth" image patches look like in the frequency domain.',
                    solution: 'Natural images are mostly smooth, with sharp edges being rare. In the frequency domain (DCT), a smooth signal concentrates most of its energy (sum of squares of coefficients) in the low-frequency components, with high-frequency coefficients being small. JPEG quantizes (rounds to zero) the small high-frequency coefficients, keeping only the few large ones. By Parseval, this preserves most of the signal energy (image quality) while dramatically reducing the data. This is lossy compression: the reconstructed image is close to but not identical to the original.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Linear Algebra in Data Science
        // ============================================================
        {
            id: 'ch19-sec05',
            title: 'Linear Algebra in Data Science',
            content: `
                <h2>Linear Algebra in Data Science</h2>

                <p class="section-roadmap"><strong>Section roadmap.</strong> We introduce Principal Component Analysis (PCA), the most fundamental dimensionality reduction technique. PCA is built entirely from linear algebra: the covariance matrix, its eigendecomposition, and orthogonal projection. We connect PCA to the SVD from Chapter 17.</p>

                <div class="env-block intuition">
                    <div class="env-title">The Curse of Dimensionality</div>
                    <div class="env-body">
                        <p>Real-world data often lives in high-dimensional spaces (thousands of features), but the "interesting" variation lies in a much lower-dimensional subspace. PCA finds this subspace by identifying the directions of maximum variance; these directions are the eigenvectors of the covariance matrix. Projection onto these directions reduces dimensionality while preserving the most information.</p>
                    </div>
                </div>

                <h3>The Covariance Matrix</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.22 (Sample Covariance Matrix)</div>
                    <div class="env-body">
                        <p>Given \\(m\\) data points \\(\\mathbf{x}_1, \\ldots, \\mathbf{x}_m \\in \\mathbb{R}^n\\), let \\(\\bar{\\mathbf{x}} = \\frac{1}{m}\\sum_{i=1}^m \\mathbf{x}_i\\) be the mean. The <strong>sample covariance matrix</strong> is</p>
                        \\[\\Sigma = \\frac{1}{m-1} \\sum_{i=1}^{m} (\\mathbf{x}_i - \\bar{\\mathbf{x}})(\\mathbf{x}_i - \\bar{\\mathbf{x}})^T = \\frac{1}{m-1} X_c^T X_c\\]
                        <p>where \\(X_c\\) is the centered data matrix (rows are \\((\\mathbf{x}_i - \\bar{\\mathbf{x}})^T\\)).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 19.23</div>
                    <div class="env-body">
                        <p>The covariance matrix \\(\\Sigma\\) is symmetric and positive semidefinite.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Symmetry: \\(\\Sigma^T = \\frac{1}{m-1}(X_c^T X_c)^T = \\frac{1}{m-1}X_c^T X_c = \\Sigma\\). Positive semidefiniteness: for any \\(\\mathbf{v}\\), \\(\\mathbf{v}^T \\Sigma \\mathbf{v} = \\frac{1}{m-1}\\mathbf{v}^T X_c^T X_c \\mathbf{v} = \\frac{1}{m-1}\\|X_c \\mathbf{v}\\|^2 \\geq 0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h3>Principal Component Analysis (PCA)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.24 (Principal Components)</div>
                    <div class="env-body">
                        <p>The <strong>principal components</strong> of a dataset are the eigenvectors of the covariance matrix \\(\\Sigma\\), ordered by decreasing eigenvalue:</p>
                        \\[\\Sigma \\mathbf{u}_k = \\lambda_k \\mathbf{u}_k, \\quad \\lambda_1 \\geq \\lambda_2 \\geq \\cdots \\geq \\lambda_n \\geq 0.\\]
                        <p>The \\(k\\)-th eigenvalue \\(\\lambda_k\\) is the variance of the data along the direction \\(\\mathbf{u}_k\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.25 (Optimal Variance)</div>
                    <div class="env-body">
                        <p>The first principal component \\(\\mathbf{u}_1\\) is the unit vector that maximizes the variance of the projected data:</p>
                        \\[\\mathbf{u}_1 = \\arg\\max_{\\|\\mathbf{u}\\| = 1} \\operatorname{Var}(\\mathbf{u}^T \\mathbf{X}) = \\arg\\max_{\\|\\mathbf{u}\\| = 1} \\mathbf{u}^T \\Sigma \\mathbf{u}.\\]
                        <p>This is the Rayleigh quotient maximization from Chapter 18! The maximum is \\(\\lambda_1\\).</p>
                        <p>More generally, the \\(k\\)-th principal component maximizes variance subject to being orthogonal to the first \\(k-1\\) components.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pca-demo"></div>

                <h3>Dimensionality Reduction</h3>

                <p>To reduce \\(n\\)-dimensional data to \\(d\\) dimensions, project onto the first \\(d\\) principal components:</p>
                \\[\\tilde{\\mathbf{x}}_i = U_d^T (\\mathbf{x}_i - \\bar{\\mathbf{x}}) \\in \\mathbb{R}^d\\]
                <p>where \\(U_d = [\\mathbf{u}_1 | \\cdots | \\mathbf{u}_d]\\) has the top \\(d\\) eigenvectors as columns.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.26 (Fraction of Variance Explained)</div>
                    <div class="env-body">
                        <p>The fraction of total variance captured by the first \\(d\\) principal components is</p>
                        \\[\\frac{\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_d}{\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n}.\\]
                        <p>In practice, one chooses \\(d\\) so that this ratio exceeds a threshold (e.g., 0.95).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.27</div>
                    <div class="env-body">
                        <p>A dataset of 1000 images, each \\(100 \\times 100\\) pixels, lives in \\(\\mathbb{R}^{10000}\\). The covariance matrix \\(\\Sigma\\) is \\(10000 \\times 10000\\). If the first 50 eigenvalues capture 95% of the total variance, we can represent each image by just 50 numbers (the projections onto the top 50 eigenvectors) instead of 10000 pixels, a 200x compression with only 5% information loss.</p>
                    </div>
                </div>

                <h3>Connection to SVD</h3>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 19.28</div>
                    <div class="env-body">
                        <p>If \\(X_c = U \\Sigma_s V^T\\) is the SVD of the centered data matrix (Chapter 17), then:</p>
                        <ul>
                            <li>The principal components are the columns of \\(V\\) (right singular vectors).</li>
                            <li>The eigenvalues of the covariance matrix are \\(\\lambda_k = \\sigma_k^2 / (m-1)\\).</li>
                        </ul>
                        <p>In practice, PCA is computed via SVD of \\(X_c\\) rather than eigendecomposition of \\(\\Sigma\\), as SVD is numerically more stable.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Beyond PCA</div>
                    <div class="env-body">
                        <p>PCA is the starting point for a family of techniques in data science: kernel PCA (nonlinear extension), sparse PCA (for interpretability), independent component analysis (ICA), and autoencoders (neural network generalization). All of these rest on the linear algebra foundations developed in this course.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'pca-demo',
                    title: 'PCA on 2D Data',
                    description: 'A cloud of 2D data points is shown. The principal components (eigenvectors of the covariance matrix) are drawn as arrows from the mean. Drag the "Rotation" and "Stretch" sliders to change the data distribution and see how the principal components adapt.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 30 });

                        var angle = 0.5;
                        var stretch = 3;
                        var points = [];
                        var numPoints = 80;

                        VizEngine.createSlider(controls, 'Rotation: ', 0, Math.PI, angle, 0.05, function(v) { angle = v; generatePoints(); });
                        VizEngine.createSlider(controls, 'Stretch: ', 1, 6, stretch, 0.2, function(v) { stretch = v; generatePoints(); });

                        // Seeded random for reproducibility
                        var seed = 42;
                        function seededRandom() {
                            seed = (seed * 16807 + 0) % 2147483647;
                            return (seed - 1) / 2147483646;
                        }

                        function gaussRandom() {
                            var u = 0, v = 0;
                            while (u === 0) u = seededRandom();
                            while (v === 0) v = seededRandom();
                            return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
                        }

                        // Generate initial standard normal samples
                        var rawPoints = [];
                        for (var i = 0; i < numPoints; i++) {
                            rawPoints.push([gaussRandom(), gaussRandom()]);
                        }

                        function generatePoints() {
                            var ca = Math.cos(angle), sa = Math.sin(angle);
                            points = [];
                            for (var i = 0; i < numPoints; i++) {
                                var x = rawPoints[i][0] * stretch;
                                var y = rawPoints[i][1];
                                // Rotate
                                points.push([ca * x - sa * y, sa * x + ca * y]);
                            }
                        }
                        generatePoints();

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            if (points.length === 0) return;

                            // Compute mean
                            var mx = 0, my = 0;
                            for (var i = 0; i < points.length; i++) {
                                mx += points[i][0];
                                my += points[i][1];
                            }
                            mx /= points.length;
                            my /= points.length;

                            // Compute covariance matrix
                            var cxx = 0, cxy = 0, cyy = 0;
                            for (var i = 0; i < points.length; i++) {
                                var dx = points[i][0] - mx;
                                var dy = points[i][1] - my;
                                cxx += dx * dx;
                                cxy += dx * dy;
                                cyy += dy * dy;
                            }
                            var n1 = points.length - 1;
                            cxx /= n1; cxy /= n1; cyy /= n1;

                            // Eigenvalues of covariance matrix
                            var covMat = [[cxx, cxy], [cxy, cyy]];
                            var tr = cxx + cyy;
                            var det = cxx * cyy - cxy * cxy;
                            var disc = tr * tr - 4 * det;
                            var lam1, lam2, ev1, ev2;
                            if (disc < 0) disc = 0;
                            var sq = Math.sqrt(disc);
                            lam1 = (tr + sq) / 2;
                            lam2 = (tr - sq) / 2;
                            ev1 = VizEngine.eigenvector2(covMat, lam1);
                            ev2 = VizEngine.eigenvector2(covMat, lam2);

                            // Draw data points
                            for (var i = 0; i < points.length; i++) {
                                viz.drawPoint(points[i][0], points[i][1], viz.colors.blue + '88', null, 3);
                            }

                            // Draw mean
                            viz.drawPoint(mx, my, viz.colors.white, 'mean', 5);

                            // Draw principal components as arrows from mean
                            var scale1 = Math.sqrt(lam1) * 2;
                            var scale2 = Math.sqrt(lam2) * 2;
                            viz.drawVector(mx, my, mx + ev1[0] * scale1, my + ev1[1] * scale1, viz.colors.orange, 'PC1', 3);
                            viz.drawVector(mx, my, mx + ev2[0] * scale2, my + ev2[1] * scale2, viz.colors.teal, 'PC2', 3);

                            // Draw projection lines onto PC1
                            ctx.strokeStyle = viz.colors.orange + '22';
                            ctx.lineWidth = 0.5;
                            for (var i = 0; i < points.length; i++) {
                                var dx = points[i][0] - mx;
                                var dy = points[i][1] - my;
                                var proj = dx * ev1[0] + dy * ev1[1];
                                var px = mx + proj * ev1[0];
                                var py = my + proj * ev1[1];
                                var s1 = viz.toScreen(points[i][0], points[i][1]);
                                var s2 = viz.toScreen(px, py);
                                ctx.beginPath();
                                ctx.moveTo(s1[0], s1[1]);
                                ctx.lineTo(s2[0], s2[1]);
                                ctx.stroke();
                            }

                            // Draw covariance ellipse (1 std dev)
                            var ellAngle = Math.atan2(ev1[1], ev1[0]);
                            viz.drawEllipse(mx, my, Math.sqrt(lam1), Math.sqrt(lam2), ellAngle, null, viz.colors.purple + 'aa');

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Covariance Matrix:', 10, 14);
                            ctx.fillStyle = viz.colors.muted;
                            ctx.fillText('[' + cxx.toFixed(2) + ', ' + cxy.toFixed(2) + ']', 10, 30);
                            ctx.fillText('[' + cxy.toFixed(2) + ', ' + cyy.toFixed(2) + ']', 10, 46);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('\u03BB\u2081 = ' + lam1.toFixed(3) + ' (' + (100 * lam1 / (lam1 + lam2)).toFixed(1) + '% var)', 10, 66);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('\u03BB\u2082 = ' + lam2.toFixed(3) + ' (' + (100 * lam2 / (lam1 + lam2)).toFixed(1) + '% var)', 10, 82);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Given data points \\((1,2)\\), \\((3,4)\\), \\((5,6)\\), compute the sample mean and the \\(2 \\times 2\\) covariance matrix.',
                    hint: 'The mean is the average of each coordinate. Then compute \\(\\Sigma = \\frac{1}{m-1}\\sum (\\mathbf{x}_i - \\bar{\\mathbf{x}})(\\mathbf{x}_i - \\bar{\\mathbf{x}})^T\\).',
                    solution: 'Mean: \\(\\bar{\\mathbf{x}} = (3, 4)^T\\). Deviations: \\((-2,-2)\\), \\((0,0)\\), \\((2,2)\\). \\(\\Sigma = \\frac{1}{2}[(-2,-2)^T(-2,-2) + (0,0)^T(0,0) + (2,2)^T(2,2)] = \\frac{1}{2}\\begin{bmatrix} 8 & 8 \\\\ 8 & 8 \\end{bmatrix} = \\begin{bmatrix} 4 & 4 \\\\ 4 & 4 \\end{bmatrix}\\). The data lies perfectly on a line, so \\(\\Sigma\\) is rank 1 (positive semidefinite but not definite).'
                },
                {
                    question: 'For the covariance matrix \\(\\Sigma = \\begin{bmatrix} 4 & 4 \\\\ 4 & 4 \\end{bmatrix}\\) from the previous exercise, find the principal components and explain what PCA tells us.',
                    hint: 'Find the eigenvalues and eigenvectors. What does a zero eigenvalue mean?',
                    solution: 'Eigenvalues: \\(\\lambda_1 = 8\\), \\(\\lambda_2 = 0\\). Eigenvector for \\(\\lambda_1\\): \\(\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}(1,1)^T\\). 100% of the variance is along the direction \\((1,1)\\); the data is perfectly one-dimensional. PCA with \\(d = 1\\) loses no information. This confirms that the original data lies on the line \\(y = x + 1\\).'
                },
                {
                    question: 'Prove that the total variance \\(\\sum_{k=1}^n \\lambda_k\\) equals the trace of \\(\\Sigma\\).',
                    hint: 'Use the fact that the trace equals the sum of eigenvalues.',
                    solution: 'Since \\(\\Sigma\\) is symmetric with eigenvalues \\(\\lambda_1, \\ldots, \\lambda_n\\), we have \\(\\operatorname{tr}(\\Sigma) = \\sum \\lambda_k\\). But \\(\\operatorname{tr}(\\Sigma) = \\sigma_{11} + \\sigma_{22} + \\cdots + \\sigma_{nn}\\) is the sum of individual variable variances. So the total variance (sum of all variable variances) equals the sum of the eigenvalues, and PCA redistributes this total variance among the principal components.'
                },
                {
                    question: 'Show that PCA gives the best \\(d\\)-dimensional linear approximation to the data in the least-squares sense.',
                    hint: 'The reconstruction error is \\(\\sum_{i} \\|\\mathbf{x}_i - \\hat{\\mathbf{x}}_i\\|^2\\) where \\(\\hat{\\mathbf{x}}_i\\) is the projection onto the \\(d\\)-dimensional subspace. Use the fact that projection minimizes distance.',
                    solution: 'The reconstruction error when projecting onto a \\(d\\)-dimensional subspace spanned by orthonormal \\(\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_d\\}\\) is \\(\\sum_i \\|\\mathbf{x}_i - \\bar{\\mathbf{x}} - \\sum_{k=1}^d (\\mathbf{u}_k^T(\\mathbf{x}_i - \\bar{\\mathbf{x}}))\\mathbf{u}_k\\|^2 = (m-1)\\sum_{k=d+1}^n \\mathbf{u}_k^T \\Sigma \\mathbf{u}_k\\). To minimize error, we want to minimize \\(\\sum_{k=d+1}^n \\mathbf{u}_k^T \\Sigma \\mathbf{u}_k\\), equivalently maximize \\(\\sum_{k=1}^d \\mathbf{u}_k^T \\Sigma \\mathbf{u}_k\\). By the Rayleigh quotient characterization, this is maximized when \\(\\mathbf{u}_1, \\ldots, \\mathbf{u}_d\\) are the top \\(d\\) eigenvectors of \\(\\Sigma\\).'
                },
                {
                    question: 'A dataset has covariance eigenvalues \\(\\lambda_1 = 10, \\lambda_2 = 3, \\lambda_3 = 1, \\lambda_4 = 0.5, \\lambda_5 = 0.1\\). How many principal components do you need to capture at least 90% of the variance?',
                    hint: 'Compute the cumulative fraction of variance explained.',
                    solution: 'Total variance = \\(10 + 3 + 1 + 0.5 + 0.1 = 14.6\\). PC1: \\(10/14.6 = 68.5\\%\\). PC1-2: \\(13/14.6 = 89.0\\%\\). PC1-3: \\(14/14.6 = 95.9\\%\\). We need \\(d = 3\\) principal components to exceed 90%. This reduces the dimensionality from 5 to 3 while preserving 95.9% of the variance.'
                },
                {
                    question: 'Explain how the SVD of the centered data matrix \\(X_c\\) relates to PCA, and why SVD is preferred over eigendecomposition of \\(\\Sigma\\) in practice.',
                    hint: 'If \\(X_c = U\\Sigma_s V^T\\), what is \\(X_c^T X_c\\)?',
                    solution: '\\(X_c^T X_c = V \\Sigma_s^T \\Sigma_s V^T = V \\operatorname{diag}(\\sigma_k^2) V^T\\). So the covariance matrix \\(\\frac{1}{m-1}X_c^T X_c\\) has eigenvalues \\(\\sigma_k^2/(m-1)\\) and eigenvectors as columns of \\(V\\). SVD is preferred because: (1) it avoids forming \\(X_c^T X_c\\) explicitly (which squares the condition number); (2) it is numerically more stable; (3) efficient algorithms exist (e.g., truncated SVD for computing only the top \\(d\\) components).'
                }
            ]
        }
    ]
});
