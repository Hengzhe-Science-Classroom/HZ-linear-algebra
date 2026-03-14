// === Chapter 3: Vector Spaces & Subspaces ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: 'Vector Spaces & Subspaces',
    subtitle: 'The abstract framework: axioms, examples, and subspaces',
    sections: [
        // ===== SECTION 1: The Axioms of a Vector Space =====
        {
            id: 'sec-axioms',
            title: 'The Axioms of a Vector Space',
            content: `
<h2>The Axioms of a Vector Space</h2>

<div class="env-block intuition">
<div class="env-title">From Arrows to Axioms</div>
<div class="env-body">
<p>So far, we have worked with column vectors in \\(\\mathbb{R}^n\\): concrete lists of numbers. We can add them and scale them. But the same two operations, addition and scalar multiplication, appear in many other mathematical objects: polynomials, matrices, continuous functions, sequences. Rather than re-derive every theorem for each setting, we extract the <em>common rules</em> into a set of axioms. Any collection of objects satisfying these rules is called a <strong>vector space</strong>, and every theorem about vector spaces applies simultaneously to all of them.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 3.1 — Vector Space</div>
<div class="env-body">
<p>A <strong>vector space</strong> over \\(\\mathbb{R}\\) (or more generally over a field \\(F\\)) is a set \\(V\\) together with two operations:</p>
<ul>
<li><strong>Vector addition:</strong> \\(+\\colon V \\times V \\to V\\)</li>
<li><strong>Scalar multiplication:</strong> \\(\\cdot\\colon \\mathbb{R} \\times V \\to V\\)</li>
</ul>
<p>satisfying the following eight axioms for all \\(u, v, w \\in V\\) and all \\(\\alpha, \\beta \\in \\mathbb{R}\\):</p>

<table style="width:100%;border-collapse:collapse;margin:12px 0;">
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;width:30px;">(A1)</td>
<td style="padding:6px;">\\(u + v = v + u\\)</td>
<td style="padding:6px;color:#6e7681;">Commutativity of addition</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(A2)</td>
<td style="padding:6px;">\\((u + v) + w = u + (v + w)\\)</td>
<td style="padding:6px;color:#6e7681;">Associativity of addition</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(A3)</td>
<td style="padding:6px;">There exists \\(0 \\in V\\) such that \\(v + 0 = v\\) for all \\(v\\)</td>
<td style="padding:6px;color:#6e7681;">Additive identity</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(A4)</td>
<td style="padding:6px;">For each \\(v\\), there exists \\(-v\\) such that \\(v + (-v) = 0\\)</td>
<td style="padding:6px;color:#6e7681;">Additive inverse</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(S1)</td>
<td style="padding:6px;">\\(\\alpha(\\beta v) = (\\alpha \\beta) v\\)</td>
<td style="padding:6px;color:#6e7681;">Compatibility of scalar mult.</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(S2)</td>
<td style="padding:6px;">\\(1 \\cdot v = v\\)</td>
<td style="padding:6px;color:#6e7681;">Multiplicative identity</td>
</tr>
<tr style="border-bottom:1px solid #30363d;">
<td style="padding:6px;color:#8b949e;">(D1)</td>
<td style="padding:6px;">\\(\\alpha(u + v) = \\alpha u + \\alpha v\\)</td>
<td style="padding:6px;color:#6e7681;">Distributivity over vector addition</td>
</tr>
<tr>
<td style="padding:6px;color:#8b949e;">(D2)</td>
<td style="padding:6px;">\\((\\alpha + \\beta) v = \\alpha v + \\beta v\\)</td>
<td style="padding:6px;color:#6e7681;">Distributivity over scalar addition</td>
</tr>
</table>

<p>The elements of \\(V\\) are called <strong>vectors</strong>; elements of \\(\\mathbb{R}\\) are called <strong>scalars</strong>.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark</div>
<div class="env-body">
<p>The zero vector \\(0\\) is unique: if \\(0'\\) also satisfies (A3), then \\(0 = 0 + 0' = 0'\\). Similarly, the additive inverse \\(-v\\) is unique for each \\(v\\). These are consequences of the axioms, not separate assumptions.</p>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 3.1 — Basic Properties</div>
<div class="env-body">
<p>In any vector space \\(V\\):</p>
<ol>
<li>\\(0 \\cdot v = 0\\) for all \\(v \\in V\\) (the scalar zero times any vector gives the zero vector).</li>
<li>\\(\\alpha \\cdot 0 = 0\\) for all \\(\\alpha \\in \\mathbb{R}\\).</li>
<li>\\((-1) \\cdot v = -v\\) for all \\(v \\in V\\).</li>
<li>If \\(\\alpha v = 0\\), then \\(\\alpha = 0\\) or \\(v = 0\\).</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>(1) \\(0 \\cdot v = (0 + 0)v = 0v + 0v\\) by (D2). Subtracting \\(0v\\) from both sides gives \\(0 = 0v\\).</p>
<p>(2) \\(\\alpha \\cdot 0 = \\alpha(0 + 0) = \\alpha \\cdot 0 + \\alpha \\cdot 0\\) by (D1). Subtract \\(\\alpha \\cdot 0\\).</p>
<p>(3) \\(v + (-1)v = 1 \\cdot v + (-1)v = (1 + (-1))v = 0v = 0\\) using (D2) and part (1). So \\((-1)v\\) is the additive inverse of \\(v\\).</p>
<p>(4) Suppose \\(\\alpha \\neq 0\\). Then \\(v = 1 \\cdot v = (\\alpha^{-1} \\alpha) v = \\alpha^{-1}(\\alpha v) = \\alpha^{-1} \\cdot 0 = 0\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.1 — \\(\\mathbb{R}^n\\) as the Prototype</div>
<div class="env-body">
<p>The set \\(\\mathbb{R}^n\\) of column vectors with \\(n\\) real entries is a vector space under componentwise addition and scalar multiplication:</p>
\\[\\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} + \\begin{pmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix} = \\begin{pmatrix} x_1 + y_1 \\\\ \\vdots \\\\ x_n + y_n \\end{pmatrix}, \\qquad \\alpha \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} = \\begin{pmatrix} \\alpha x_1 \\\\ \\vdots \\\\ \\alpha x_n \\end{pmatrix}.\\]
<p>All eight axioms follow from the properties of real number arithmetic. The zero vector is \\((0, \\ldots, 0)^T\\).</p>
</div>
</div>
`,
            exercises: [
                {
                    question: 'Prove that the additive inverse \\(-v\\) is unique in any vector space.',
                    hint: 'Suppose both \\(w_1\\) and \\(w_2\\) satisfy \\(v + w_i = 0\\). Compute \\(w_1 = w_1 + 0 = w_1 + (v + w_2) = \\ldots\\)',
                    solution: 'Suppose \\(v + w_1 = 0\\) and \\(v + w_2 = 0\\). Then \\(w_1 = w_1 + 0 = w_1 + (v + w_2) = (w_1 + v) + w_2 = 0 + w_2 = w_2\\). So the additive inverse is unique.'
                },
                {
                    question: 'Which of the eight axioms fails if we define "scalar multiplication" on \\(\\mathbb{R}^2\\) by \\(\\alpha \\cdot (x, y) = (\\alpha x, 0)\\)?',
                    hint: 'Check axiom (S2): \\(1 \\cdot (x, y) = ?\\)',
                    solution: '(S2) fails: \\(1 \\cdot (x, y) = (1 \\cdot x,\\, 0) = (x, 0) \\neq (x, y)\\) in general. Also (D2) and (S1) fail for similar reasons.'
                },
                {
                    question: 'Consider the set \\(\\mathbb{R}^+\\) of positive real numbers with "addition" defined as \\(x \\oplus y = xy\\) (multiplication) and "scalar multiplication" defined as \\(\\alpha \\odot x = x^\\alpha\\). Is this a vector space?',
                    hint: 'Check each axiom. What is the "zero vector" (additive identity)? What is the "additive inverse" of \\(x\\)?',
                    solution: 'Yes! (A1) \\(xy = yx\\). (A2) \\((xy)z = x(yz)\\). (A3) Identity is 1 since \\(x \\cdot 1 = x\\). (A4) Inverse of \\(x\\) is \\(1/x\\) since \\(x \\cdot (1/x) = 1\\). (S1) \\((x^\\beta)^\\alpha = x^{\\alpha\\beta}\\). (S2) \\(x^1 = x\\). (D1) \\((xy)^\\alpha = x^\\alpha y^\\alpha\\). (D2) \\(x^{\\alpha+\\beta} = x^\\alpha x^\\beta\\). All axioms hold.'
                },
                {
                    question: 'Does the set \\(\\{(x, y) \\in \\mathbb{R}^2 : x \\geq 0\\}\\) form a vector space under the usual operations?',
                    hint: 'Is the set closed under scalar multiplication?',
                    solution: 'No. Take \\(v = (1, 0)\\), which is in the set. Then \\((-1) \\cdot v = (-1, 0)\\), which has \\(x = -1 < 0\\) and is not in the set. So the set is not closed under scalar multiplication; it is not a vector space.'
                },
                {
                    question: 'Prove Proposition 3.1(4): if \\(\\alpha v = 0\\), then \\(\\alpha = 0\\) or \\(v = 0\\).',
                    hint: 'This is a proof by cases. Suppose \\(\\alpha \\neq 0\\) and show \\(v = 0\\).',
                    solution: 'Suppose \\(\\alpha v = 0\\) and \\(\\alpha \\neq 0\\). Since \\(\\alpha \\neq 0\\), the scalar \\(\\alpha^{-1}\\) exists. Multiply both sides by \\(\\alpha^{-1}\\): \\(\\alpha^{-1}(\\alpha v) = \\alpha^{-1} \\cdot 0 = 0\\). By (S1), \\((\\alpha^{-1}\\alpha)v = 0\\), so \\(1 \\cdot v = 0\\), hence \\(v = 0\\) by (S2).'
                }
            ]
        },

        // ===== SECTION 2: Examples of Vector Spaces =====
        {
            id: 'sec-examples',
            title: 'Examples of Vector Spaces',
            content: `
<h2>Examples of Vector Spaces</h2>

<div class="env-block intuition">
<div class="env-title">The Axioms in Action</div>
<div class="env-body">
<p>The power of the abstract definition lies in its broad applicability. We now survey the most important vector spaces beyond \\(\\mathbb{R}^n\\). Each example requires verifying the eight axioms, but once that is done, <em>every</em> theorem from linear algebra applies to it automatically.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.2 — The Space of Polynomials \\(\\mathcal{P}_n\\)</div>
<div class="env-body">
<p>Let \\(\\mathcal{P}_n\\) denote the set of polynomials of degree at most \\(n\\) with real coefficients:</p>
\\[\\mathcal{P}_n = \\{ a_0 + a_1 t + a_2 t^2 + \\cdots + a_n t^n : a_i \\in \\mathbb{R} \\}.\\]
<p>With the usual addition and scalar multiplication of polynomials, \\(\\mathcal{P}_n\\) is a vector space. The zero vector is the zero polynomial \\(p(t) = 0\\).</p>
<p>We also define \\(\\mathcal{P} = \\bigcup_{n=0}^{\\infty} \\mathcal{P}_n\\), the space of all polynomials (of any degree). This is also a vector space.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.3 — The Space of \\(m \\times n\\) Matrices \\(\\mathbb{R}^{m \\times n}\\)</div>
<div class="env-body">
<p>The set of all \\(m \\times n\\) matrices with real entries forms a vector space under matrix addition and scalar multiplication. The zero vector is the \\(m \\times n\\) zero matrix.</p>
<p>Note: matrix multiplication is <em>not</em> part of the vector space structure. We are only using addition and scalar multiplication.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.4 — The Space of Continuous Functions \\(C[a,b]\\)</div>
<div class="env-body">
<p>Let \\(C[a,b]\\) be the set of all continuous real-valued functions on the interval \\([a,b]\\). With pointwise operations:</p>
\\[(f + g)(x) = f(x) + g(x), \\qquad (\\alpha f)(x) = \\alpha \\cdot f(x),\\]
<p>\\(C[a,b]\\) is a vector space. The zero vector is the function \\(f(x) = 0\\) for all \\(x \\in [a,b]\\).</p>
<p>This is an <strong>infinite-dimensional</strong> vector space (we will make this precise in Chapter 4).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.5 — The Space of Real Sequences</div>
<div class="env-body">
<p>The set \\(\\mathbb{R}^\\infty\\) of all infinite sequences \\((a_1, a_2, a_3, \\ldots)\\) of real numbers is a vector space under componentwise operations. This space contains many interesting subsets (convergent sequences, bounded sequences, etc.) that are themselves vector spaces.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.6 — The Trivial Vector Space</div>
<div class="env-body">
<p>The set \\(\\{0\\}\\) containing only the zero vector is a vector space (the <strong>trivial</strong> or <strong>zero</strong> vector space). All eight axioms are trivially satisfied.</p>
</div>
</div>

<h3>Non-Examples</h3>

<p>It is equally instructive to see what fails when a structure is <em>not</em> a vector space.</p>

<div class="env-block example">
<div class="env-title">Non-Example 3.1</div>
<div class="env-body">
<p>The set \\(\\mathbb{Z}^n\\) of integer vectors is <em>not</em> a vector space over \\(\\mathbb{R}\\), because it is not closed under scalar multiplication: \\(\\frac{1}{2}(1, 0, \\ldots, 0) = (\\frac{1}{2}, 0, \\ldots, 0) \\notin \\mathbb{Z}^n\\).</p>
<p>(However, \\(\\mathbb{Z}^n\\) is a <em>module</em> over \\(\\mathbb{Z}\\), which is a related algebraic structure.)</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Non-Example 3.2</div>
<div class="env-body">
<p>The set of polynomials of degree <em>exactly</em> \\(n\\) (not "at most \\(n\\)") is not a vector space, because it is not closed under addition: \\((t^2 + t) + (-t^2 + 1) = t + 1\\), which has degree 1, not 2.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">A Unifying Perspective</div>
<div class="env-body">
<p>All the examples above share the same abstract structure. A theorem proved about abstract vector spaces, such as "every linearly independent set can be extended to a basis" (Chapter 4), applies to \\(\\mathbb{R}^3\\), to \\(\\mathcal{P}_5\\), to \\(C[0,1]\\), and to any other vector space, without re-proof. This is the power of abstraction.</p>
</div>
</div>
`,
            exercises: [
                {
                    question: 'Verify all eight vector space axioms for \\(\\mathcal{P}_2\\), the space of polynomials of degree at most 2.',
                    hint: 'Let \\(p(t) = a_0 + a_1 t + a_2 t^2\\) and \\(q(t) = b_0 + b_1 t + b_2 t^2\\). Check each axiom.',
                    solution: '(A1) \\(p + q = (a_0+b_0) + (a_1+b_1)t + (a_2+b_2)t^2 = q + p\\). (A2) Associativity follows from real number associativity. (A3) Zero polynomial \\(0 + 0t + 0t^2\\). (A4) \\(-p = -a_0 - a_1 t - a_2 t^2\\). (S1) \\(\\alpha(\\beta p) = (\\alpha\\beta)p\\) by real number associativity. (S2) \\(1 \\cdot p = p\\). (D1) \\(\\alpha(p+q) = \\alpha p + \\alpha q\\) by distributivity of reals. (D2) \\((\\alpha+\\beta)p = \\alpha p + \\beta p\\) similarly.'
                },
                {
                    question: 'Is the set of all \\(2 \\times 2\\) symmetric matrices a vector space? What about the set of all \\(2 \\times 2\\) invertible matrices?',
                    hint: 'Check closure. Is the sum of two symmetric matrices symmetric? Is the sum of two invertible matrices invertible?',
                    solution: 'Symmetric matrices: Yes. If \\(A^T = A\\) and \\(B^T = B\\), then \\((A+B)^T = A^T + B^T = A + B\\). The zero matrix is symmetric, and \\((-A)^T = -A\\). All axioms hold. Invertible matrices: No. \\(I + (-I) = 0\\), which is not invertible (not even in the set). The set is not closed under addition.'
                },
                {
                    question: 'Define operations on \\(\\mathbb{R}^2\\) by \\((x_1,y_1) \\oplus (x_2,y_2) = (x_1+x_2, 0)\\) and \\(\\alpha \\odot (x,y) = (\\alpha x, \\alpha y)\\). Which axioms fail?',
                    hint: 'Check the identity axiom: what vector \\((a,b)\\) satisfies \\((x,y) \\oplus (a,b) = (x,y)\\) for all \\((x,y)\\)?',
                    solution: '(A3) fails. We need \\((x+a, 0) = (x, y)\\) for all \\(x, y\\). This requires \\(a = 0\\) and \\(0 = y\\) for all \\(y\\), which is impossible. Also (S2) is problematic: \\(1 \\odot (x, y) = (x, y)\\), but \\((x, y) \\oplus (0, 0) = (x, 0) \\neq (x, y)\\) in general, so the "identity" does not work properly with the addition.'
                },
                {
                    question: 'Show that \\(C^1[a,b]\\), the set of continuously differentiable functions on \\([a,b]\\), is a vector space.',
                    hint: 'Verify closure: is the sum of two \\(C^1\\) functions again \\(C^1\\)? Is a scalar multiple of a \\(C^1\\) function \\(C^1\\)?',
                    solution: 'If \\(f, g \\in C^1[a,b]\\), then \\(f+g\\) is differentiable with \\((f+g)\' = f\' + g\'\\) continuous, so \\(f+g \\in C^1\\). Similarly \\((\\alpha f)\' = \\alpha f\'\\) is continuous. The zero function is \\(C^1\\). The additive inverse \\(-f\\) has derivative \\(-f\'\\), which is continuous. The axioms involving commutativity, associativity, and distributivity follow from the pointwise definitions. So \\(C^1[a,b]\\) is a vector space.'
                },
                {
                    question: 'Is the set of solutions to the differential equation \\(y\'\' + y = 0\\) a vector space?',
                    hint: 'The general solution is \\(y = c_1 \\cos t + c_2 \\sin t\\). Check closure under addition and scalar multiplication.',
                    solution: 'Yes. If \\(y_1\'\' + y_1 = 0\\) and \\(y_2\'\' + y_2 = 0\\), then \\((y_1+y_2)\'\' + (y_1+y_2) = (y_1\'\'+y_1) + (y_2\'\'+y_2) = 0\\). Similarly \\((\\alpha y)\'\' + \\alpha y = \\alpha(y\'\'+y) = 0\\). The zero function satisfies the equation. All axioms hold (inherited from the function space). This solution space has dimension 2, with basis \\(\\{\\cos t, \\sin t\\}\\).'
                }
            ]
        },

        // ===== SECTION 3: Subspaces =====
        {
            id: 'sec-subspaces',
            title: 'Subspaces',
            content: `
<h2>Subspaces</h2>

<div class="env-block intuition">
<div class="env-title">Worlds Within Worlds</div>
<div class="env-body">
<p>The four fundamental subspaces of a matrix (column space, null space, row space, left null space) are the central objects of linear algebra. Before we can study them, we need the general concept of a <strong>subspace</strong>: a subset of a vector space that is itself a vector space under the same operations.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 3.2 — Subspace</div>
<div class="env-body">
<p>A subset \\(W \\subseteq V\\) of a vector space \\(V\\) is a <strong>subspace</strong> if \\(W\\) is itself a vector space under the operations inherited from \\(V\\).</p>
</div>
</div>

<p>Checking all eight axioms for every candidate subspace would be tedious. Fortunately, most axioms are inherited automatically, and we only need to verify three simple conditions:</p>

<div class="env-block theorem">
<div class="env-title">Theorem 3.1 — The Subspace Test</div>
<div class="env-body">
<p>A nonempty subset \\(W \\subseteq V\\) is a subspace if and only if:</p>
<ol>
<li><strong>Zero:</strong> \\(0 \\in W\\).</li>
<li><strong>Closed under addition:</strong> If \\(u, w \\in W\\), then \\(u + w \\in W\\).</li>
<li><strong>Closed under scalar multiplication:</strong> If \\(w \\in W\\) and \\(\\alpha \\in \\mathbb{R}\\), then \\(\\alpha w \\in W\\).</li>
</ol>
<p>Equivalently, conditions (2) and (3) can be combined: \\(W\\) is a subspace if and only if \\(W\\) is nonempty and for all \\(u, w \\in W\\) and \\(\\alpha, \\beta \\in \\mathbb{R}\\), we have \\(\\alpha u + \\beta w \\in W\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>If \\(W\\) is a subspace, it satisfies all vector space axioms, so (1)-(3) hold. Conversely, suppose (1)-(3) hold. Properties (A1), (A2), (S1), (S2), (D1), (D2) are inherited from \\(V\\) (they hold for all vectors in \\(V\\), hence certainly for vectors in \\(W\\)). (A3) holds by condition (1). For (A4): given \\(w \\in W\\), condition (3) with \\(\\alpha = -1\\) gives \\(-w \\in W\\). Since the operations on \\(W\\) are the same as in \\(V\\), all axioms are satisfied.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.7 — Lines and Planes Through the Origin</div>
<div class="env-body">
<p>In \\(\\mathbb{R}^3\\):</p>
<ul>
<li>A <strong>line through the origin</strong> is a subspace: \\(W = \\{ t \\, v : t \\in \\mathbb{R} \\}\\) for some nonzero \\(v\\).</li>
<li>A <strong>plane through the origin</strong> is a subspace: \\(W = \\{ s \\, u + t \\, v : s, t \\in \\mathbb{R} \\}\\) for some nonparallel \\(u, v\\).</li>
<li>A line or plane that does <em>not</em> pass through the origin is <em>not</em> a subspace (it fails condition 1).</li>
</ul>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.8 — The Null Space</div>
<div class="env-body">
<p>For an \\(m \\times n\\) matrix \\(A\\), the <strong>null space</strong> (or kernel) is</p>
\\[\\text{Nul}(A) = \\{ x \\in \\mathbb{R}^n : Ax = 0 \\}.\\]
<p>This is a subspace of \\(\\mathbb{R}^n\\): (1) \\(A \\cdot 0 = 0\\); (2) if \\(Ax = 0\\) and \\(Ay = 0\\), then \\(A(x+y) = 0\\); (3) \\(A(\\alpha x) = \\alpha(Ax) = 0\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.9 — The Column Space</div>
<div class="env-body">
<p>The <strong>column space</strong> of an \\(m \\times n\\) matrix \\(A\\) is</p>
\\[\\text{Col}(A) = \\{ Ax : x \\in \\mathbb{R}^n \\} = \\text{span of the columns of } A.\\]
<p>This is a subspace of \\(\\mathbb{R}^m\\). The system \\(Ax = b\\) is consistent if and only if \\(b \\in \\text{Col}(A)\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 3.2 — Intersection of Subspaces</div>
<div class="env-body">
<p>If \\(W_1\\) and \\(W_2\\) are subspaces of \\(V\\), then \\(W_1 \\cap W_2\\) is also a subspace of \\(V\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>\\(0 \\in W_1\\) and \\(0 \\in W_2\\), so \\(0 \\in W_1 \\cap W_2\\). If \\(u, w \\in W_1 \\cap W_2\\), then \\(u, w \\in W_1\\) and \\(u, w \\in W_2\\), so \\(u + w \\in W_1\\) and \\(u + w \\in W_2\\), hence \\(u + w \\in W_1 \\cap W_2\\). Similarly for scalar multiples.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block warning">
<div class="env-title">Union of Subspaces</div>
<div class="env-body">
<p>The <strong>union</strong> \\(W_1 \\cup W_2\\) is generally <em>not</em> a subspace. For instance, in \\(\\mathbb{R}^2\\), the \\(x\\)-axis \\(W_1 = \\{(x,0)\\}\\) and \\(y\\)-axis \\(W_2 = \\{(0,y)\\}\\) are both subspaces, but \\((1,0) + (0,1) = (1,1) \\notin W_1 \\cup W_2\\).</p>
<p>The correct way to "combine" subspaces is the <strong>sum</strong> \\(W_1 + W_2 = \\{w_1 + w_2 : w_1 \\in W_1,\\, w_2 \\in W_2\\}\\), which is always a subspace.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-subspace-test"></div>
`,
            visualizations: [
                {
                    id: 'viz-subspace-test',
                    title: 'Subspaces of \\(\\mathbb{R}^2\\): Lines Through the Origin',
                    description: 'Drag the direction vector to change the line. The line through the origin is always a subspace. Toggle to see a shifted line (not a subspace) that fails to contain the origin.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        let showShifted = false;
                        const toggleBtn = VizEngine.createButton(controls, 'Toggle: shifted line', () => {
                            showShifted = !showShifted;
                            toggleBtn.textContent = showShifted ? 'Toggle: through origin' : 'Toggle: shifted line';
                        });

                        const dir = viz.addDraggable('dir', 2, 1, viz.colors.blue, 8, (wx, wy) => {
                            dir.x = wx; dir.y = wy;
                        });

                        viz.animate(() => {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const dx = dir.x, dy = dir.y;
                            const len = Math.sqrt(dx * dx + dy * dy);
                            if (len < 0.1) { viz.drawDraggables(); return; }

                            if (!showShifted) {
                                // Line through origin
                                viz.drawLine(0, 0, dx, dy, viz.colors.blue + '88', 2);
                                viz.drawVec(dx, dy, viz.colors.blue, 'v');
                                viz.drawVec(-dx, -dy, viz.colors.teal, '-v', 1.5);
                                viz.drawVec(2 * dx, 2 * dy, viz.colors.purple, '2v', 1.5);
                                viz.drawPoint(0, 0, viz.colors.green, '0', 6);

                                viz.screenText('Subspace: line through origin', 20, 20, viz.colors.green, 13, 'left', 'top');
                                viz.screenText('Contains 0, closed under +, closed under scalar mult.', 20, 38, '#8b949e', 11, 'left', 'top');
                            } else {
                                // Shifted line (not through origin)
                                const shift = 1.5;
                                const nx = -dy / len, ny = dx / len;
                                const ox = nx * shift, oy = ny * shift;
                                viz.drawLine(ox, oy, ox + dx, oy + dy, viz.colors.red + '88', 2);
                                viz.drawVector(ox, oy, ox + dx, oy + dy, viz.colors.red, 'v');
                                viz.drawPoint(ox, oy, viz.colors.orange, '', 5);
                                viz.drawPoint(0, 0, viz.colors.red, '0 not on line!', 6);

                                viz.screenText('NOT a subspace: line NOT through origin', 20, 20, viz.colors.red, 13, 'left', 'top');
                                viz.screenText('Fails: 0 is not on the line.', 20, 38, '#8b949e', 11, 'left', 'top');
                            }

                            viz.drawDraggables();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Is \\(W = \\{(x, y, z) \\in \\mathbb{R}^3 : x + 2y - z = 0\\}\\) a subspace of \\(\\mathbb{R}^3\\)?',
                    hint: 'Apply the subspace test: check that \\(0 \\in W\\) and that \\(W\\) is closed under addition and scalar multiplication.',
                    solution: 'Yes. (1) \\(0 + 2(0) - 0 = 0\\), so \\(0 \\in W\\). (2) If \\(x_1 + 2y_1 - z_1 = 0\\) and \\(x_2 + 2y_2 - z_2 = 0\\), then \\((x_1+x_2) + 2(y_1+y_2) - (z_1+z_2) = 0\\). (3) \\(\\alpha x + 2(\\alpha y) - \\alpha z = \\alpha(x+2y-z) = 0\\). All conditions hold; \\(W\\) is a subspace (a plane through the origin).'
                },
                {
                    question: 'Is \\(W = \\{(x, y) \\in \\mathbb{R}^2 : xy \\geq 0\\}\\) a subspace?',
                    hint: 'This is the union of the first and third quadrants (plus the axes). Check closure under addition.',
                    solution: 'No. \\((1, 0) \\in W\\) and \\((0, -1) \\in W\\) (both satisfy \\(xy \\geq 0\\)), but \\((1, 0) + (0, -1) = (1, -1)\\) has \\(xy = -1 < 0\\), so \\((1,-1) \\notin W\\). Not closed under addition.'
                },
                {
                    question: 'Prove that the intersection of any (possibly infinite) collection of subspaces is a subspace.',
                    hint: 'Generalize Theorem 3.2. If \\(W_\\alpha\\) is a subspace for every \\(\\alpha \\in I\\), show \\(\\bigcap_{\\alpha} W_\\alpha\\) satisfies the subspace test.',
                    solution: 'Let \\(W = \\bigcap_{\\alpha \\in I} W_\\alpha\\). (1) \\(0 \\in W_\\alpha\\) for all \\(\\alpha\\), so \\(0 \\in W\\). (2) If \\(u, v \\in W\\), then \\(u, v \\in W_\\alpha\\) for all \\(\\alpha\\), so \\(u + v \\in W_\\alpha\\) for all \\(\\alpha\\), hence \\(u + v \\in W\\). (3) Similarly for \\(\\alpha u\\).'
                },
                {
                    question: 'Prove that \\(W_1 \\cup W_2\\) is a subspace if and only if \\(W_1 \\subseteq W_2\\) or \\(W_2 \\subseteq W_1\\).',
                    hint: 'For the "only if" direction: suppose \\(W_1 \\not\\subseteq W_2\\) and \\(W_2 \\not\\subseteq W_1\\). Find vectors \\(w_1 \\in W_1 \\setminus W_2\\) and \\(w_2 \\in W_2 \\setminus W_1\\), then consider \\(w_1 + w_2\\).',
                    solution: 'If \\(W_1 \\subseteq W_2\\), then \\(W_1 \\cup W_2 = W_2\\), a subspace (and vice versa). Conversely, suppose neither contains the other. Take \\(w_1 \\in W_1 \\setminus W_2\\) and \\(w_2 \\in W_2 \\setminus W_1\\). If \\(W_1 \\cup W_2\\) is a subspace, then \\(w_1 + w_2 \\in W_1 \\cup W_2\\). Case 1: \\(w_1 + w_2 \\in W_1\\). Then \\(w_2 = (w_1 + w_2) - w_1 \\in W_1\\), contradiction. Case 2: \\(w_1 + w_2 \\in W_2\\). Then \\(w_1 = (w_1 + w_2) - w_2 \\in W_2\\), contradiction. So \\(W_1 \\cup W_2\\) is not a subspace.'
                },
                {
                    question: 'Is the set of invertible \\(n \\times n\\) matrices a subspace of \\(\\mathbb{R}^{n \\times n}\\)? Is the set of singular (non-invertible) \\(n \\times n\\) matrices a subspace?',
                    hint: 'For invertible matrices, does the zero matrix belong? For singular matrices, is the sum of two singular matrices always singular?',
                    solution: 'Invertible matrices: No. The zero matrix is not invertible, so \\(0 \\notin W\\); condition (1) fails. Singular matrices: No. For \\(n = 2\\), \\(A = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\) are both singular, but \\(A + B = I\\) is invertible. Not closed under addition.'
                }
            ]
        },

        // ===== SECTION 4: Span and Linear Combinations =====
        {
            id: 'sec-span',
            title: 'Span and Linear Combinations',
            content: `
<h2>Span and Linear Combinations</h2>

<div class="env-block definition">
<div class="env-title">Definition 3.3 — Linear Combination</div>
<div class="env-body">
<p>A <strong>linear combination</strong> of vectors \\(v_1, v_2, \\ldots, v_k \\in V\\) is any vector of the form</p>
\\[c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k,\\]
<p>where \\(c_1, \\ldots, c_k \\in \\mathbb{R}\\) are scalars (the <strong>coefficients</strong> or <strong>weights</strong>).</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 3.4 — Span</div>
<div class="env-body">
<p>The <strong>span</strong> of a set \\(S = \\{v_1, \\ldots, v_k\\}\\) is the set of all linear combinations of vectors in \\(S\\):</p>
\\[\\text{span}(S) = \\text{span}(v_1, \\ldots, v_k) = \\left\\{ \\sum_{i=1}^k c_i v_i : c_i \\in \\mathbb{R} \\right\\}.\\]
<p>By convention, \\(\\text{span}(\\emptyset) = \\{0\\}\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 3.3 — Span Is the Smallest Subspace</div>
<div class="env-body">
<p>For any subset \\(S \\subseteq V\\):</p>
<ol>
<li>\\(\\text{span}(S)\\) is a subspace of \\(V\\).</li>
<li>\\(S \\subseteq \\text{span}(S)\\).</li>
<li>If \\(W\\) is any subspace containing \\(S\\), then \\(\\text{span}(S) \\subseteq W\\).</li>
</ol>
<p>In other words, \\(\\text{span}(S)\\) is the <strong>smallest</strong> subspace of \\(V\\) that contains \\(S\\).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>(1) <em>Zero:</em> \\(0 = 0 \\cdot v_1 + \\cdots + 0 \\cdot v_k \\in \\text{span}(S)\\). <em>Closure under addition:</em> if \\(u = \\sum c_i v_i\\) and \\(w = \\sum d_i v_i\\), then \\(u + w = \\sum (c_i + d_i) v_i \\in \\text{span}(S)\\). <em>Closure under scalar multiplication:</em> \\(\\alpha u = \\sum (\\alpha c_i) v_i \\in \\text{span}(S)\\).</p>
<p>(2) \\(v_j = 0 \\cdot v_1 + \\cdots + 1 \\cdot v_j + \\cdots + 0 \\cdot v_k \\in \\text{span}(S)\\).</p>
<p>(3) If \\(W \\supseteq S\\) is a subspace, then by repeated closure, every linear combination \\(\\sum c_i v_i\\) lies in \\(W\\). So \\(\\text{span}(S) \\subseteq W\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.10 — Spans in \\(\\mathbb{R}^2\\)</div>
<div class="env-body">
<p>In \\(\\mathbb{R}^2\\):</p>
<ul>
<li>\\(\\text{span}\\bigl((1,0)\\bigr)\\) is the \\(x\\)-axis.</li>
<li>\\(\\text{span}\\bigl((1,0),\\, (0,1)\\bigr) = \\mathbb{R}^2\\).</li>
<li>\\(\\text{span}\\bigl((1,2),\\, (2,4)\\bigr)\\) is a single line (since \\((2,4) = 2(1,2)\\)).</li>
<li>\\(\\text{span}\\bigl((1,1),\\, (1,-1)\\bigr) = \\mathbb{R}^2\\) (because \\((a,b) = \\frac{a+b}{2}(1,1) + \\frac{a-b}{2}(1,-1)\\)).</li>
</ul>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 3.5 — Spanning Set</div>
<div class="env-body">
<p>A set \\(S \\subseteq V\\) is a <strong>spanning set</strong> for \\(V\\) if \\(\\text{span}(S) = V\\), i.e., every vector in \\(V\\) can be written as a linear combination of vectors in \\(S\\). We say \\(S\\) <strong>spans</strong> \\(V\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.11</div>
<div class="env-body">
<p>The standard basis vectors \\(e_1, \\ldots, e_n\\) span \\(\\mathbb{R}^n\\). The polynomials \\(1, t, t^2, \\ldots, t_n\\) span \\(\\mathcal{P}_n\\). Any single nonzero vector spans a line through the origin.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Computational Test for Spanning</div>
<div class="env-body">
<p>To check whether \\(\\{v_1, \\ldots, v_k\\}\\) spans \\(\\mathbb{R}^m\\), form the matrix \\(A = \\begin{pmatrix} v_1 & \\cdots & v_k \\end{pmatrix}\\) and row-reduce. The set spans \\(\\mathbb{R}^m\\) if and only if \\(A\\) has a pivot in every row, i.e., \\(\\text{rank}(A) = m\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-span-2d"></div>
`,
            visualizations: [
                {
                    id: 'viz-span-2d',
                    title: 'Interactive Span Visualizer in \\(\\mathbb{R}^2\\)',
                    description: 'Drag vectors \\(v_1\\) (blue) and \\(v_2\\) (orange) to see their span. When the vectors are non-parallel, they span all of \\(\\mathbb{R}^2\\). When parallel, they span only a line.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const v1 = viz.addDraggable('v1', 2, 1, viz.colors.blue, 8, (wx, wy) => {
                            v1.x = Math.round(wx * 4) / 4;
                            v1.y = Math.round(wy * 4) / 4;
                        });
                        const v2 = viz.addDraggable('v2', -1, 2, viz.colors.orange, 8, (wx, wy) => {
                            v2.x = Math.round(wx * 4) / 4;
                            v2.y = Math.round(wy * 4) / 4;
                        });

                        let showCombos = true;
                        VizEngine.createButton(controls, 'Toggle grid of combos', () => {
                            showCombos = !showCombos;
                        });

                        viz.animate(() => {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const det = v1.x * v2.y - v1.y * v2.x;
                            const isParallel = Math.abs(det) < 0.05;

                            if (showCombos && !isParallel) {
                                // Draw a grid of linear combinations
                                for (let a = -3; a <= 3; a += 0.5) {
                                    for (let b = -3; b <= 3; b += 0.5) {
                                        const px = a * v1.x + b * v2.x;
                                        const py = a * v1.y + b * v2.y;
                                        viz.drawPoint(px, py, viz.colors.purple + '33', null, 2);
                                    }
                                }
                            }

                            if (isParallel) {
                                // Span is a line
                                const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
                                const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
                                if (len1 > 0.1) {
                                    viz.drawLine(0, 0, v1.x, v1.y, viz.colors.purple + '66', 3);
                                } else if (len2 > 0.1) {
                                    viz.drawLine(0, 0, v2.x, v2.y, viz.colors.purple + '66', 3);
                                }
                            } else {
                                // Span is R^2 - show parallelogram
                                viz.drawParallelogram([v1.x, v1.y], [v2.x, v2.y], viz.colors.purple + '15', viz.colors.purple + '44', 1);
                            }

                            // Draw vectors
                            viz.drawVec(v1.x, v1.y, viz.colors.blue, 'v\u2081');
                            viz.drawVec(v2.x, v2.y, viz.colors.orange, 'v\u2082');

                            // Status
                            const detStr = det.toFixed(2);
                            if (isParallel) {
                                viz.screenText('Vectors are parallel (or zero). Span is a line (or {0}).', viz.width / 2, viz.height - 40, viz.colors.red, 13);
                                viz.screenText('det = ' + detStr + ' \u2248 0', viz.width / 2, viz.height - 20, '#8b949e', 11);
                            } else {
                                viz.screenText('Vectors span all of \u211d\u00b2.', viz.width / 2, viz.height - 40, viz.colors.green, 13);
                                viz.screenText('det = ' + detStr + ' \u2260 0', viz.width / 2, viz.height - 20, '#8b949e', 11);
                            }

                            viz.screenText('v\u2081 = (' + v1.x.toFixed(1) + ', ' + v1.y.toFixed(1) + ')', 15, 20, viz.colors.blue, 12, 'left', 'top');
                            viz.screenText('v\u2082 = (' + v2.x.toFixed(1) + ', ' + v2.y.toFixed(1) + ')', 15, 38, viz.colors.orange, 12, 'left', 'top');

                            viz.drawDraggables();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Express the vector \\((5, 3)\\) as a linear combination of \\(v_1 = (1, 1)\\) and \\(v_2 = (1, -1)\\).',
                    hint: 'Solve \\(c_1(1,1) + c_2(1,-1) = (5,3)\\), i.e., the system \\(c_1 + c_2 = 5\\), \\(c_1 - c_2 = 3\\).',
                    solution: 'Adding the equations: \\(2c_1 = 8\\), so \\(c_1 = 4\\). Then \\(c_2 = 5 - 4 = 1\\). So \\((5,3) = 4(1,1) + 1(1,-1)\\).'
                },
                {
                    question: 'Does the vector \\(b = (1, 2, 3)\\) lie in the span of \\(v_1 = (1, 0, 1)\\) and \\(v_2 = (0, 1, 1)\\)?',
                    hint: 'Solve \\(c_1 v_1 + c_2 v_2 = b\\), which gives a system of 3 equations in 2 unknowns. Is it consistent?',
                    solution: 'The system is \\(c_1 = 1\\), \\(c_2 = 2\\), \\(c_1 + c_2 = 3\\). The first two equations give \\(c_1 = 1, c_2 = 2\\), and indeed \\(1 + 2 = 3\\). So yes, \\(b = 1 \\cdot v_1 + 2 \\cdot v_2\\).'
                },
                {
                    question: 'Show that \\(\\text{span}(v_1, v_2, v_3) = \\text{span}(v_1, v_2)\\) if \\(v_3 = 2v_1 - v_2\\).',
                    hint: 'Show inclusion in both directions. Clearly \\(\\text{span}(v_1, v_2) \\subseteq \\text{span}(v_1, v_2, v_3)\\). For the reverse, show that any combination involving \\(v_3\\) can be rewritten without \\(v_3\\).',
                    solution: '\\(\\subseteq\\): \\(c_1 v_1 + c_2 v_2 = c_1 v_1 + c_2 v_2 + 0 \\cdot v_3\\), so span\\((v_1,v_2) \\subseteq\\) span\\((v_1,v_2,v_3)\\). \\(\\supseteq\\): \\(c_1 v_1 + c_2 v_2 + c_3 v_3 = c_1 v_1 + c_2 v_2 + c_3(2v_1 - v_2) = (c_1 + 2c_3)v_1 + (c_2 - c_3)v_2 \\in\\) span\\((v_1, v_2)\\).'
                },
                {
                    question: 'Prove that \\(\\text{span}(S)\\) is the intersection of all subspaces containing \\(S\\).',
                    hint: 'Use Theorem 3.3(3): span\\((S)\\) is contained in every subspace \\(W \\supseteq S\\). Also, span\\((S)\\) is itself a subspace containing \\(S\\).',
                    solution: 'Let \\(\\mathcal{W} = \\{W : W \\text{ is a subspace and } S \\subseteq W\\}\\). By Theorem 3.3(1-2), span\\((S) \\in \\mathcal{W}\\), so \\(\\bigcap \\mathcal{W} \\subseteq\\) span\\((S)\\). By Theorem 3.3(3), span\\((S) \\subseteq W\\) for every \\(W \\in \\mathcal{W}\\), so span\\((S) \\subseteq \\bigcap \\mathcal{W}\\). Therefore span\\((S) = \\bigcap \\mathcal{W}\\).'
                },
                {
                    question: 'Find a spanning set for the solution space of \\(x_1 + 2x_2 - x_3 + x_4 = 0\\).',
                    hint: 'This is one equation in four unknowns. The free variables are \\(x_2, x_3, x_4\\). Express \\(x_1\\) in terms of them and write the general solution as a linear combination.',
                    solution: '\\(x_1 = -2x_2 + x_3 - x_4\\). The general solution is \\((x_1,x_2,x_3,x_4) = x_2(-2,1,0,0) + x_3(1,0,1,0) + x_4(-1,0,0,1)\\). So \\(\\{(-2,1,0,0),\\, (1,0,1,0),\\, (-1,0,0,1)\\}\\) is a spanning set for the solution space.'
                }
            ]
        },

        // ===== SECTION 5: Linear Independence =====
        {
            id: 'sec-independence',
            title: 'Linear Independence',
            content: `
<h2>Linear Independence</h2>

<div class="env-block intuition">
<div class="env-title">No Redundancy</div>
<div class="env-body">
<p>In the span examples above, we saw that adding a vector already in the span of others does not enlarge the span. The set \\(\\{(1,2),\\, (2,4)\\}\\) spans only a line, no better than \\(\\{(1,2)\\}\\) alone. The second vector is <strong>redundant</strong>. Linear independence captures the idea of "no redundancy": every vector in the set contributes something new to the span.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 3.6 — Linear Independence</div>
<div class="env-body">
<p>A set of vectors \\(\\{v_1, v_2, \\ldots, v_k\\}\\) in a vector space \\(V\\) is <strong>linearly independent</strong> if the only solution to</p>
\\[c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k = 0\\]
<p>is the trivial solution \\(c_1 = c_2 = \\cdots = c_k = 0\\).</p>
<p>If a nontrivial solution exists (at least one \\(c_i \\neq 0\\)), the set is <strong>linearly dependent</strong>.</p>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 3.2 — Equivalent Characterizations</div>
<div class="env-body">
<p>The following are equivalent for \\(\\{v_1, \\ldots, v_k\\}\\):</p>
<ol>
<li>The set is linearly dependent.</li>
<li>At least one \\(v_j\\) is a linear combination of the others.</li>
<li>There is a "first" dependent vector: for some \\(j \\geq 2\\), \\(v_j \\in \\text{span}(v_1, \\ldots, v_{j-1})\\).</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>(1) \\(\\Rightarrow\\) (2): If \\(\\sum c_i v_i = 0\\) with some \\(c_j \\neq 0\\), then \\(v_j = -\\frac{1}{c_j}\\sum_{i \\neq j} c_i v_i\\).</p>
<p>(2) \\(\\Rightarrow\\) (1): If \\(v_j = \\sum_{i \\neq j} d_i v_i\\), then \\(\\sum_{i \\neq j} d_i v_i + (-1) v_j = 0\\), a nontrivial combination.</p>
<p>(1) \\(\\Rightarrow\\) (3): Among all nontrivial combinations \\(\\sum c_i v_i = 0\\), let \\(j\\) be the largest index with \\(c_j \\neq 0\\). Then \\(v_j = -\\frac{1}{c_j}\\sum_{i < j} c_i v_i \\in \\text{span}(v_1, \\ldots, v_{j-1})\\).</p>
<p>(3) \\(\\Rightarrow\\) (1): Immediate from (2) \\(\\Rightarrow\\) (1).</p>
<div class="qed">∎</div>
</div>
</div>

<h3>Geometric Meaning</h3>

<div class="env-block remark">
<div class="env-title">Geometry of Independence in \\(\\mathbb{R}^2\\) and \\(\\mathbb{R}^3\\)</div>
<div class="env-body">
<p>In \\(\\mathbb{R}^2\\): two vectors are linearly independent if and only if they are <strong>not parallel</strong> (not scalar multiples of each other). Independent vectors span a parallelogram of nonzero area.</p>
<p>In \\(\\mathbb{R}^3\\): three vectors are linearly independent if and only if they are <strong>not coplanar</strong>. Independent vectors span a parallelepiped of nonzero volume.</p>
</div>
</div>

<h3>Testing for Independence</h3>

<div class="env-block theorem">
<div class="env-title">Theorem 3.4 — Column Rank Test for Independence</div>
<div class="env-body">
<p>The vectors \\(v_1, \\ldots, v_k \\in \\mathbb{R}^n\\) are linearly independent if and only if the matrix \\(A = \\begin{pmatrix} v_1 & \\cdots & v_k \\end{pmatrix}\\) has rank \\(k\\) (i.e., the homogeneous system \\(Ax = 0\\) has only the trivial solution).</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>The equation \\(c_1 v_1 + \\cdots + c_k v_k = 0\\) is equivalent to \\(A c = 0\\) where \\(c = (c_1, \\ldots, c_k)^T\\). This has only the trivial solution if and only if \\(A\\) has a pivot in every column, i.e., \\(\\text{rank}(A) = k\\).</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 3.12</div>
<div class="env-body">
<p>Test independence of \\(v_1 = (1, 2, 3)\\), \\(v_2 = (4, 5, 6)\\), \\(v_3 = (7, 8, 9)\\).</p>
<p>Form the matrix and row reduce:</p>
\\[\\begin{pmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\\\ 3 & 6 & 9 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 4 & 7 \\\\ 0 & -3 & -6 \\\\ 0 & -6 & -12 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 4 & 7 \\\\ 0 & -3 & -6 \\\\ 0 & 0 & 0 \\end{pmatrix}.\\]
<p>Rank = 2 < 3, so the vectors are <strong>linearly dependent</strong>. Indeed, \\(v_3 = 2v_2 - v_1\\).</p>
</div>
</div>

<div class="env-block corollary">
<div class="env-title">Corollary 3.1</div>
<div class="env-body">
<p>Any set of more than \\(n\\) vectors in \\(\\mathbb{R}^n\\) is linearly dependent.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>If \\(k > n\\), the matrix \\(A\\) has \\(n\\) rows and \\(k\\) columns with \\(k > n\\). There are at most \\(n\\) pivots, so \\(\\text{rank}(A) \\leq n < k\\). There must be a free variable, so \\(Ac = 0\\) has a nontrivial solution.</p>
<div class="qed">∎</div>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 3.5 — The Two-Vector Test</div>
<div class="env-body">
<p>Two vectors \\(\\{v_1, v_2\\}\\) are linearly dependent if and only if one is a scalar multiple of the other. In \\(\\mathbb{R}^2\\), this is equivalent to \\(\\det\\begin{pmatrix} v_1 & v_2 \\end{pmatrix} = 0\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-independence-2d"></div>
`,
            visualizations: [
                {
                    id: 'viz-independence-2d',
                    title: 'Linear Independence Checker in \\(\\mathbb{R}^2\\)',
                    description: 'Drag vectors \\(v_1\\) (blue) and \\(v_2\\) (orange). When they are linearly independent, the parallelogram has nonzero area. When dependent (parallel), the area collapses to zero.',
                    setup(body, controls) {
                        const viz = new VizEngine(body, { scale: 40 });

                        const v1 = viz.addDraggable('v1', 2, 1, viz.colors.blue, 8, (wx, wy) => {
                            v1.x = Math.round(wx * 4) / 4;
                            v1.y = Math.round(wy * 4) / 4;
                        });
                        const v2 = viz.addDraggable('v2', 1, 2, viz.colors.orange, 8, (wx, wy) => {
                            v2.x = Math.round(wx * 4) / 4;
                            v2.y = Math.round(wy * 4) / 4;
                        });

                        viz.animate(() => {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const det = v1.x * v2.y - v1.y * v2.x;
                            const isDependent = Math.abs(det) < 0.05;

                            // Draw parallelogram
                            if (!isDependent) {
                                viz.drawParallelogram(
                                    [v1.x, v1.y], [v2.x, v2.y],
                                    viz.colors.green + '20', viz.colors.green + '55', 1.5
                                );
                            }

                            // Draw vectors
                            viz.drawVec(v1.x, v1.y, viz.colors.blue, 'v\u2081');
                            viz.drawVec(v2.x, v2.y, viz.colors.orange, 'v\u2082');

                            // Dependence relation when dependent
                            if (isDependent) {
                                const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
                                const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
                                if (len1 > 0.1 && len2 > 0.1) {
                                    const ratio = (Math.abs(v1.x) > 0.01) ? (v2.x / v1.x) : (v2.y / v1.y);
                                    viz.screenText('v\u2082 = ' + ratio.toFixed(2) + ' v\u2081  (dependent!)', viz.width / 2, viz.height - 60, viz.colors.red, 13);
                                }
                            }

                            // Status
                            const statusColor = isDependent ? viz.colors.red : viz.colors.green;
                            const statusText = isDependent ? 'LINEARLY DEPENDENT' : 'LINEARLY INDEPENDENT';
                            viz.screenText(statusText, viz.width / 2, viz.height - 38, statusColor, 14);
                            viz.screenText('det = ' + det.toFixed(2) + '  |  Area = ' + Math.abs(det).toFixed(2), viz.width / 2, viz.height - 18, '#8b949e', 11);

                            // Coords
                            viz.screenText('v\u2081 = (' + v1.x.toFixed(1) + ', ' + v1.y.toFixed(1) + ')', 15, 20, viz.colors.blue, 12, 'left', 'top');
                            viz.screenText('v\u2082 = (' + v2.x.toFixed(1) + ', ' + v2.y.toFixed(1) + ')', 15, 38, viz.colors.orange, 12, 'left', 'top');

                            // Equation test
                            viz.screenText('c\u2081v\u2081 + c\u2082v\u2082 = 0  \u21d2  ' + (isDependent ? 'nontrivial solution exists' : 'only c\u2081=c\u2082=0'), 15, 56, '#6e7681', 11, 'left', 'top');

                            viz.drawDraggables();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether \\(\\{(1, 0, -1),\\, (2, 1, 0),\\, (0, -1, -2)\\}\\) is linearly independent.',
                    hint: 'Form the matrix with these as columns and row reduce, or check if the third is a combination of the first two.',
                    solution: 'Row reduce: \\(\\begin{pmatrix}1&2&0\\\\0&1&-1\\\\-1&0&-2\\end{pmatrix} \\to \\begin{pmatrix}1&2&0\\\\0&1&-1\\\\0&2&-2\\end{pmatrix} \\to \\begin{pmatrix}1&2&0\\\\0&1&-1\\\\0&0&0\\end{pmatrix}\\). Rank = 2 < 3: <strong>dependent</strong>. Indeed \\(v_3 = -2v_1 + v_2\\), verified: \\((-2, 0, 2) + (2, 1, 0) = (0, 1, 2)\\). Wait, that gives \\((0,1,2)\\), not \\((0,-1,-2)\\). Let me recheck: \\(v_3 = 2v_1 - v_2 = (2,0,-2)-(2,1,0) = (0,-1,-2)\\). Yes, \\(v_3 = 2v_1 - v_2\\).'
                },
                {
                    question: 'Prove that \\(\\{v\\}\\) (a single vector) is linearly independent if and only if \\(v \\neq 0\\).',
                    hint: 'Consider the equation \\(cv = 0\\) and use Proposition 3.1(4).',
                    solution: 'If \\(v \\neq 0\\): \\(cv = 0\\) implies \\(c = 0\\) (by Proposition 3.1(4)), so \\(\\{v\\}\\) is independent. If \\(v = 0\\): \\(1 \\cdot 0 = 0\\) is a nontrivial combination (\\(c = 1 \\neq 0\\)), so \\(\\{0\\}\\) is dependent.'
                },
                {
                    question: 'Show that the functions \\(1, \\cos^2 t, \\sin^2 t\\) are linearly dependent in \\(C[0, 2\\pi]\\).',
                    hint: 'Recall the Pythagorean identity.',
                    solution: '\\(\\cos^2 t + \\sin^2 t = 1\\) for all \\(t\\), so \\(1 \\cdot 1 + (-1) \\cos^2 t + (-1) \\sin^2 t = 0\\). The coefficients \\((1, -1, -1)\\) are not all zero, so the functions are linearly dependent.'
                },
                {
                    question: 'Prove that \\(\\{1, t, t^2, \\ldots, t^n\\}\\) is linearly independent in \\(\\mathcal{P}_n\\).',
                    hint: 'A polynomial of degree \\(\\leq n\\) that equals zero for all \\(t\\) must have all coefficients zero.',
                    solution: 'Suppose \\(c_0 + c_1 t + c_2 t^2 + \\cdots + c_n t^n = 0\\) for all \\(t \\in \\mathbb{R}\\). A nonzero polynomial of degree \\(\\leq n\\) has at most \\(n\\) roots, but this polynomial has infinitely many roots (every real number). So it must be the zero polynomial: \\(c_0 = c_1 = \\cdots = c_n = 0\\).'
                },
                {
                    question: 'If \\(\\{v_1, v_2, v_3\\}\\) is linearly independent, must \\(\\{v_1, v_2\\}\\) also be linearly independent?',
                    hint: 'If \\(c_1 v_1 + c_2 v_2 = 0\\), what can you say using the independence of the larger set?',
                    solution: 'Yes. If \\(c_1 v_1 + c_2 v_2 = 0\\), then \\(c_1 v_1 + c_2 v_2 + 0 \\cdot v_3 = 0\\). By independence of \\(\\{v_1, v_2, v_3\\}\\), we must have \\(c_1 = c_2 = 0\\). So \\(\\{v_1, v_2\\}\\) is independent. In general, every subset of a linearly independent set is linearly independent.'
                },
                {
                    question: 'Show that four vectors in \\(\\mathbb{R}^3\\) must be linearly dependent, regardless of which vectors are chosen.',
                    hint: 'This is Corollary 3.1 with \\(n = 3\\), \\(k = 4\\). Relate it to the number of pivots.',
                    solution: 'The matrix \\(A = (v_1 \\mid v_2 \\mid v_3 \\mid v_4)\\) has 3 rows and 4 columns. It has at most 3 pivots, so rank \\(\\leq 3 < 4\\). There is at least one free variable, so \\(Ac = 0\\) has a nontrivial solution, meaning the vectors are dependent. This is a fundamental constraint: you cannot have more independent directions than the dimension of the space.'
                }
            ]
        }
    ]
});
