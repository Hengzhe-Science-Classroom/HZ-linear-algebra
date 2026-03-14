window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: 'Matrix Operations',
    subtitle: 'Addition, scalar multiplication, and the art of matrix multiplication',
    sections: [
        // ===================== Section 1: Matrices as Data and Notation =====================
        {
            id: 'ch01-sec01',
            title: 'Matrices as Data and Notation',
            content: `<h2>Matrices as Data and Notation</h2>

                <div class="env-block intuition">
                    <div class="env-title">From Systems to Matrices</div>
                    <div class="env-body"><p>In Chapter 0, matrices appeared as a bookkeeping device for systems of linear equations. But matrices are far more than that. A matrix is a fundamental mathematical object in its own right: it can represent a linear transformation, encode a dataset, describe a graph, or store the coefficients of a quadratic form. This chapter develops the algebra of matrices, the rules by which they can be combined, and the key properties that make matrix algebra both powerful and subtle.</p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Matrix)</div>
                    <div class="env-body"><p>An <strong>\\(m \\times n\\) matrix</strong> is a rectangular array of numbers (or scalars) arranged in \\(m\\) rows and \\(n\\) columns:
                    \\[A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}\\]
                    The entry in row \\(i\\) and column \\(j\\) is denoted \\(a_{ij}\\) or \\((A)_{ij}\\) or \\(A_{ij}\\). We write \\(A \\in \\mathbb{R}^{m \\times n}\\) (or \\(A \\in M_{m \\times n}(\\mathbb{R})\\)) to indicate that \\(A\\) is an \\(m \\times n\\) matrix with real entries. When \\(m = n\\), we call \\(A\\) a <strong>square matrix</strong> of order \\(n\\).</p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Equality of Matrices)</div>
                    <div class="env-body"><p>Two matrices \\(A\\) and \\(B\\) are <strong>equal</strong> if and only if they have the same dimensions \\(m \\times n\\) and \\(a_{ij} = b_{ij}\\) for all \\(1 \\leq i \\leq m\\) and \\(1 \\leq j \\leq n\\).</p></div>
                </div>

                <h3>Rows, Columns, and Vectors</h3>

                <p>A matrix can be viewed in terms of its <strong>rows</strong> or its <strong>columns</strong>:</p>
                <ul>
                    <li>The \\(i\\)-th <strong>row</strong> of \\(A\\) is the \\(1 \\times n\\) row vector \\(\\mathbf{a}_i^T = (a_{i1}, a_{i2}, \\ldots, a_{in})\\).</li>
                    <li>The \\(j\\)-th <strong>column</strong> of \\(A\\) is the \\(m \\times 1\\) column vector \\(\\mathbf{a}_j = \\begin{pmatrix}a_{1j} \\\\ a_{2j} \\\\ \\vdots \\\\ a_{mj}\\end{pmatrix}\\).</li>
                </ul>

                <p>We can write \\(A\\) compactly as
                \\[A = \\begin{pmatrix} \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\end{pmatrix}\\]
                where each \\(\\mathbf{a}_j\\) is a column vector. This <strong>column view</strong> of matrices is central to linear algebra.</p>

                <h3>Special Matrices</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition (Special Matrices)</div>
                    <div class="env-body">
                    <ul>
                        <li><strong>Zero matrix</strong> \\(O_{m \\times n}\\): All entries are 0. Often written simply as \\(O\\) or \\(0\\) when dimensions are clear.</li>
                        <li><strong>Identity matrix</strong> \\(I_n\\): The \\(n \\times n\\) square matrix with 1s on the main diagonal and 0s elsewhere. That is, \\((I_n)_{ij} = \\delta_{ij}\\) (the Kronecker delta).</li>
                        <li><strong>Diagonal matrix</strong>: A square matrix where \\(a_{ij} = 0\\) for \\(i \\neq j\\). Written \\(\\text{diag}(d_1, d_2, \\ldots, d_n)\\).</li>
                        <li><strong>Upper triangular matrix</strong>: A square matrix where \\(a_{ij} = 0\\) for \\(i > j\\) (all entries below the diagonal are zero).</li>
                        <li><strong>Lower triangular matrix</strong>: A square matrix where \\(a_{ij} = 0\\) for \\(i < j\\).</li>
                    </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>
                    \\[I_3 = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}, \\quad
                    D = \\text{diag}(2, -1, 5) = \\begin{pmatrix}2&0&0\\\\0&-1&0\\\\0&0&5\\end{pmatrix}\\]
                    \\[U = \\begin{pmatrix}1&3&-2\\\\0&4&7\\\\0&0&-1\\end{pmatrix} \\text{ (upper triangular)}, \\quad
                    L = \\begin{pmatrix}2&0&0\\\\-1&3&0\\\\4&0&5\\end{pmatrix} \\text{ (lower triangular)}\\]</p></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>A matrix that is both upper and lower triangular is a diagonal matrix. The identity matrix is a special diagonal matrix. These hierarchies of structure (general \\(\\supset\\) triangular \\(\\supset\\) diagonal \\(\\supset\\) scalar \\(\\cdot I\\)) will recur throughout the course.</p></div>
                </div>

                <h3>Vectors as Special Matrices</h3>

                <p>A column vector \\(\\mathbf{v} \\in \\mathbb{R}^n\\) is an \\(n \\times 1\\) matrix, and a row vector is a \\(1 \\times n\\) matrix. This identification allows us to treat vector operations as special cases of matrix operations, unifying the theory.</p>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Let \\(A = \\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}\\). What are the dimensions of \\(A\\)? What is \\(a_{23}\\)? Write out the second column of \\(A\\).',
                    hint: 'Recall: \\(a_{ij}\\) means the entry in row \\(i\\), column \\(j\\).',
                    solution: '\\(A\\) is \\(2 \\times 3\\) (2 rows, 3 columns). \\(a_{23} = 6\\) (row 2, column 3). The second column is \\(\\begin{pmatrix}2\\\\5\\end{pmatrix}\\).'
                },
                {
                    question: 'How many entries does a \\(100 \\times 100\\) diagonal matrix have? How many of them can be nonzero?',
                    hint: 'A diagonal matrix has nonzero entries only on the main diagonal.',
                    solution: 'Total entries: \\(100 \\times 100 = 10{,}000\\). At most 100 can be nonzero (those on the main diagonal). The remaining 9,900 are zero.'
                },
                {
                    question: 'True or false: the \\(3 \\times 2\\) zero matrix and the \\(2 \\times 3\\) zero matrix are equal.',
                    hint: 'Equality requires the same dimensions.',
                    solution: 'False. Even though all entries are zero, the matrices have different dimensions (\\(3 \\times 2\\) vs. \\(2 \\times 3\\)), so they are not equal.'
                },
                {
                    question: 'Write the \\(4 \\times 4\\) identity matrix. Which entries are on the "main diagonal"?',
                    hint: 'The main diagonal consists of entries \\(a_{ii}\\).',
                    solution: '\\[I_4 = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&1&0\\\\0&0&0&1\\end{pmatrix}\\] The main diagonal entries are \\(a_{11}=1,\\; a_{22}=1,\\; a_{33}=1,\\; a_{44}=1\\).'
                },
                {
                    question: 'Give an example of a matrix that is both upper triangular and lower triangular. What general statement can you make?',
                    hint: 'What entries must be zero in both cases?',
                    solution: 'Any diagonal matrix works, for example \\(\\begin{pmatrix}3&0\\\\0&-7\\end{pmatrix}\\). In general: a matrix is both upper and lower triangular if and only if it is diagonal. Upper triangular requires \\(a_{ij}=0\\) for \\(i>j\\); lower triangular requires \\(a_{ij}=0\\) for \\(i<j\\). Together, \\(a_{ij}=0\\) for all \\(i \\neq j\\).'
                }
            ]
        },

        // ===================== Section 2: Matrix Addition and Scalar Multiplication =====================
        {
            id: 'ch01-sec02',
            title: 'Matrix Addition and Scalar Multiplication',
            content: `<h2>Matrix Addition and Scalar Multiplication</h2>

                <p>The simplest operations on matrices are performed entry by entry, mirroring the familiar operations on vectors.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Matrix Addition)</div>
                    <div class="env-body"><p>If \\(A\\) and \\(B\\) are both \\(m \\times n\\) matrices, their <strong>sum</strong> \\(A + B\\) is the \\(m \\times n\\) matrix defined by
                    \\[(A + B)_{ij} = a_{ij} + b_{ij}\\]
                    for all \\(i, j\\). Addition is only defined for matrices of the <em>same size</em>.</p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Scalar Multiplication)</div>
                    <div class="env-body"><p>If \\(c\\) is a scalar and \\(A\\) is an \\(m \\times n\\) matrix, the <strong>scalar multiple</strong> \\(cA\\) is the \\(m \\times n\\) matrix defined by
                    \\[(cA)_{ij} = c \\cdot a_{ij}\\]
                    for all \\(i, j\\).</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>
                    \\[\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix} + \\begin{pmatrix}5&6\\\\7&8\\end{pmatrix} = \\begin{pmatrix}6&8\\\\10&12\\end{pmatrix}, \\quad
                    3\\begin{pmatrix}1&-2\\\\0&4\\end{pmatrix} = \\begin{pmatrix}3&-6\\\\0&12\\end{pmatrix}\\]</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Algebraic Properties of Matrix Addition and Scalar Multiplication)</div>
                    <div class="env-body"><p>Let \\(A, B, C \\in \\mathbb{R}^{m \\times n}\\) and \\(c, d \\in \\mathbb{R}\\). Then:
                    <ol>
                        <li><strong>Commutativity:</strong> \\(A + B = B + A\\)</li>
                        <li><strong>Associativity of addition:</strong> \\((A + B) + C = A + (B + C)\\)</li>
                        <li><strong>Additive identity:</strong> \\(A + O = A\\)</li>
                        <li><strong>Additive inverse:</strong> \\(A + (-A) = O\\), where \\((-A)_{ij} = -a_{ij}\\)</li>
                        <li><strong>Distributivity over matrix addition:</strong> \\(c(A + B) = cA + cB\\)</li>
                        <li><strong>Distributivity over scalar addition:</strong> \\((c + d)A = cA + dA\\)</li>
                        <li><strong>Associativity of scalar multiplication:</strong> \\(c(dA) = (cd)A\\)</li>
                        <li><strong>Scalar identity:</strong> \\(1 \\cdot A = A\\)</li>
                    </ol></p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>All properties follow from the corresponding properties of real numbers applied entry-by-entry. For example, commutativity: \\((A+B)_{ij} = a_{ij} + b_{ij} = b_{ij} + a_{ij} = (B+A)_{ij}\\) for all \\(i,j\\), so \\(A+B = B+A\\). Distributivity: \\((c(A+B))_{ij} = c(a_{ij}+b_{ij}) = ca_{ij}+cb_{ij} = (cA+cB)_{ij}\\). The remaining properties are equally straightforward.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Vector Space of Matrices)</div>
                    <div class="env-body"><p>The eight properties above are precisely the axioms for a <strong>vector space</strong>. This means that the set \\(\\mathbb{R}^{m \\times n}\\) of all \\(m \\times n\\) real matrices, equipped with matrix addition and scalar multiplication, forms a vector space over \\(\\mathbb{R}\\). Its dimension is \\(mn\\), and a natural basis consists of the matrices \\(E_{ij}\\) that have 1 in position \\((i,j)\\) and 0 elsewhere. We will study vector spaces abstractly in Chapter 3.</p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Matrix Subtraction)</div>
                    <div class="env-body"><p>We define \\(A - B = A + (-1)B\\), i.e., \\((A - B)_{ij} = a_{ij} - b_{ij}\\).</p></div>
                </div>

                <h3>Linear Combinations of Matrices</h3>

                <p>Just as we form linear combinations of vectors, we can form <strong>linear combinations of matrices</strong>:</p>
                <p>\\[c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k\\]</p>
                <p>This is computed entry-by-entry. For instance, any \\(2 \\times 2\\) matrix can be written as a linear combination of the four "standard basis matrices":
                \\[\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = a\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix} + b\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix} + c\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix} + d\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\]</p>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body"><p>You cannot add matrices of different sizes. The expression \\(\\begin{pmatrix}1&2\\end{pmatrix} + \\begin{pmatrix}1\\\\2\\end{pmatrix}\\) is <strong>undefined</strong>, even though both have two entries. Dimensions must match exactly.</p></div>
                </div>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Compute \\(2\\begin{pmatrix}1&-1\\\\2&3\\end{pmatrix} - 3\\begin{pmatrix}0&4\\\\-1&2\\end{pmatrix}\\).',
                    hint: 'Scale each matrix first, then subtract entry by entry.',
                    solution: '\\(2\\begin{pmatrix}1&-1\\\\2&3\\end{pmatrix} = \\begin{pmatrix}2&-2\\\\4&6\\end{pmatrix}\\), \\(3\\begin{pmatrix}0&4\\\\-1&2\\end{pmatrix} = \\begin{pmatrix}0&12\\\\-3&6\\end{pmatrix}\\). Difference: \\(\\begin{pmatrix}2-0&-2-12\\\\4-(-3)&6-6\\end{pmatrix} = \\begin{pmatrix}2&-14\\\\7&0\\end{pmatrix}\\).'
                },
                {
                    question: 'Find all \\(2 \\times 2\\) matrices \\(X\\) such that \\(X + \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix} = \\begin{pmatrix}5&5\\\\5&5\\end{pmatrix}\\).',
                    hint: 'Subtract the known matrix from both sides.',
                    solution: '\\(X = \\begin{pmatrix}5&5\\\\5&5\\end{pmatrix} - \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix} = \\begin{pmatrix}4&3\\\\2&1\\end{pmatrix}\\). The solution is unique.'
                },
                {
                    question: 'Prove that if \\(A + B = A + C\\), then \\(B = C\\) (cancellation law for matrix addition).',
                    hint: 'Add \\(-A\\) to both sides.',
                    solution: 'Add \\(-A\\) to both sides: \\(-A + (A + B) = -A + (A + C)\\). By associativity: \\((-A+A)+B = (-A+A)+C\\), so \\(O+B = O+C\\), hence \\(B = C\\).'
                },
                {
                    question: 'What is the dimension of the vector space \\(\\mathbb{R}^{3 \\times 4}\\)? Give a basis.',
                    hint: 'Each entry position contributes one basis element.',
                    solution: 'Dimension = \\(3 \\times 4 = 12\\). A basis consists of the 12 matrices \\(E_{ij}\\) for \\(1 \\leq i \\leq 3,\\; 1 \\leq j \\leq 4\\), where \\(E_{ij}\\) has 1 in position \\((i,j)\\) and 0 elsewhere.'
                },
                {
                    question: 'Let \\(S\\) be the set of all symmetric \\(2 \\times 2\\) matrices (i.e., matrices \\(A\\) with \\(A = A^T\\)). Show that \\(S\\) is closed under addition and scalar multiplication, and find a basis for \\(S\\).',
                    hint: 'A \\(2 \\times 2\\) symmetric matrix has the form \\(\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}\\).',
                    solution: 'If \\(A = A^T\\) and \\(B = B^T\\), then \\((A+B)^T = A^T+B^T = A+B\\), so \\(A+B\\) is symmetric. Similarly, \\((cA)^T = cA^T = cA\\). So \\(S\\) is closed under both operations and is a subspace of \\(\\mathbb{R}^{2\\times 2}\\). Every element of \\(S\\) can be written as \\(a\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix} + b\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix} + c\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\). These three matrices are linearly independent, so they form a basis. The dimension of \\(S\\) is 3.'
                }
            ]
        },

        // ===================== Section 3: Matrix Multiplication =====================
        {
            id: 'ch01-sec03',
            title: 'Matrix Multiplication',
            content: `<h2>Matrix Multiplication</h2>

                <p>Matrix multiplication is the most important operation in linear algebra, and also the most surprising. Unlike addition, matrix multiplication is <em>not</em> defined entry-by-entry; instead, it follows a "row times column" rule that encodes the composition of linear transformations.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Matrix Multiplication)</div>
                    <div class="env-body"><p>Let \\(A\\) be an \\(m \\times n\\) matrix and \\(B\\) be an \\(n \\times p\\) matrix. The <strong>product</strong> \\(AB\\) is the \\(m \\times p\\) matrix whose \\((i, j)\\)-entry is the dot product of the \\(i\\)-th row of \\(A\\) with the \\(j\\)-th column of \\(B\\):
                    \\[(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{in}b_{nj}\\]
                    The product \\(AB\\) is defined <strong>only when</strong> the number of columns of \\(A\\) equals the number of rows of \\(B\\).</p></div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Dimension Compatibility</div>
                    <div class="env-body"><p>
                    \\[\\underbrace{A}_{m \\times \\boxed{n}} \\cdot \\underbrace{B}_{\\boxed{n} \\times p} = \\underbrace{AB}_{m \\times p}\\]
                    The inner dimensions must match. The outer dimensions give the size of the product.</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>
                    \\[\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}\\begin{pmatrix}7&8\\\\9&10\\\\11&12\\end{pmatrix} = \\begin{pmatrix}1\\cdot7+2\\cdot9+3\\cdot11 & 1\\cdot8+2\\cdot10+3\\cdot12 \\\\ 4\\cdot7+5\\cdot9+6\\cdot11 & 4\\cdot8+5\\cdot10+6\\cdot12\\end{pmatrix} = \\begin{pmatrix}58&64\\\\139&154\\end{pmatrix}\\]
                    The product of a \\(2 \\times 3\\) and a \\(3 \\times 2\\) matrix is \\(2 \\times 2\\).</p></div>
                </div>

                <div class="viz-placeholder" data-viz="viz-mat-mult"></div>

                <h3>Four Ways to View Matrix Multiplication</h3>

                <p>The richness of matrix multiplication comes from the multiple ways to interpret it. Each viewpoint illuminates different aspects of linear algebra.</p>

                <div class="env-block remark">
                    <div class="env-title">Four Perspectives on \\(AB = C\\)</div>
                    <div class="env-body">
                    <p><strong>1. Entry-level (dot product):</strong> \\(c_{ij} = (\\text{row } i \\text{ of } A) \\cdot (\\text{col } j \\text{ of } B)\\).</p>
                    <p><strong>2. Column view:</strong> Each column of \\(C\\) is a linear combination of the columns of \\(A\\), with coefficients from the corresponding column of \\(B\\):
                    \\[C\\mathbf{e}_j = A(B\\mathbf{e}_j) = A\\mathbf{b}_j\\]
                    That is, column \\(j\\) of \\(AB\\) equals \\(A\\) times column \\(j\\) of \\(B\\).</p>
                    <p><strong>3. Row view:</strong> Each row of \\(C\\) is a linear combination of the rows of \\(B\\), with coefficients from the corresponding row of \\(A\\).</p>
                    <p><strong>4. Outer product view:</strong> \\(AB = \\sum_{k=1}^{n} (\\text{col } k \\text{ of } A)(\\text{row } k \\text{ of } B)\\), a sum of rank-1 matrices.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Column View)</div>
                    <div class="env-body"><p>Let \\(A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}\\). The columns of \\(AB\\) are:
                    \\[\\text{Col 1 of } AB = A\\begin{pmatrix}5\\\\7\\end{pmatrix} = 5\\begin{pmatrix}1\\\\3\\end{pmatrix} + 7\\begin{pmatrix}2\\\\4\\end{pmatrix} = \\begin{pmatrix}19\\\\43\\end{pmatrix}\\]
                    \\[\\text{Col 2 of } AB = A\\begin{pmatrix}6\\\\8\\end{pmatrix} = 6\\begin{pmatrix}1\\\\3\\end{pmatrix} + 8\\begin{pmatrix}2\\\\4\\end{pmatrix} = \\begin{pmatrix}22\\\\50\\end{pmatrix}\\]
                    So \\(AB = \\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}\\).</p></div>
                </div>

                <h3>Algebraic Properties of Matrix Multiplication</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Properties of Matrix Multiplication)</div>
                    <div class="env-body"><p>Let \\(A, B, C\\) be matrices of appropriate sizes and \\(c\\) a scalar. Then:
                    <ol>
                        <li><strong>Associativity:</strong> \\(A(BC) = (AB)C\\)</li>
                        <li><strong>Left distributivity:</strong> \\(A(B + C) = AB + AC\\)</li>
                        <li><strong>Right distributivity:</strong> \\((A + B)C = AC + BC\\)</li>
                        <li><strong>Scalar compatibility:</strong> \\(c(AB) = (cA)B = A(cB)\\)</li>
                        <li><strong>Identity:</strong> \\(I_m A = A = A I_n\\) for \\(A \\in \\mathbb{R}^{m \\times n}\\)</li>
                    </ol></p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Associativity)</div>
                    <div class="env-body"><p>Let \\(A \\in \\mathbb{R}^{m \\times n}\\), \\(B \\in \\mathbb{R}^{n \\times p}\\), \\(C \\in \\mathbb{R}^{p \\times q}\\). We must show \\((A(BC))_{ij} = ((AB)C)_{ij}\\) for all \\(i, j\\).</p>
                    <p>\\[(A(BC))_{ij} = \\sum_{k=1}^n a_{ik}(BC)_{kj} = \\sum_{k=1}^n a_{ik}\\left(\\sum_{l=1}^p b_{kl}c_{lj}\\right) = \\sum_{k=1}^n \\sum_{l=1}^p a_{ik}b_{kl}c_{lj}\\]</p>
                    <p>\\[((AB)C)_{ij} = \\sum_{l=1}^p (AB)_{il}c_{lj} = \\sum_{l=1}^p \\left(\\sum_{k=1}^n a_{ik}b_{kl}\\right)c_{lj} = \\sum_{l=1}^p \\sum_{k=1}^n a_{ik}b_{kl}c_{lj}\\]</p>
                    <p>Since finite sums can be reordered, both expressions equal \\(\\sum_{k,l} a_{ik}b_{kl}c_{lj}\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <h3>What Matrix Multiplication Is NOT</h3>

                <div class="env-block warning">
                    <div class="env-title">Warning (Non-Properties)</div>
                    <div class="env-body"><p>Matrix multiplication differs from multiplication of numbers in several critical ways:
                    <ol>
                        <li><strong>Not commutative in general:</strong> \\(AB \\neq BA\\) in most cases. Even if both products are defined, they need not be equal. For example, \\(\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix} = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\) but \\(\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix} = \\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\).</li>
                        <li><strong>No zero-product property:</strong> \\(AB = O\\) does not imply \\(A = O\\) or \\(B = O\\). The example above shows \\(AB \\neq O\\) but \\(BA = O\\).</li>
                        <li><strong>No cancellation:</strong> \\(AB = AC\\) does not imply \\(B = C\\) (unless \\(A\\) is invertible).</li>
                    </ol></p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Non-Commutativity)</div>
                    <div class="env-body"><p>Let \\(A = \\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}\\). Then:
                    \\[AB = \\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}, \\quad BA = \\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}\\]
                    These are not equal, confirming \\(AB \\neq BA\\).</p></div>
                </div>

                <h3>Matrix-Vector Product and Linear Systems</h3>

                <div class="env-block proposition">
                    <div class="env-title">Proposition</div>
                    <div class="env-body"><p>The system of linear equations \\(A\\mathbf{x} = \\mathbf{b}\\) can be written equivalently as
                    \\[x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n = \\mathbf{b}\\]
                    where \\(\\mathbf{a}_j\\) are the columns of \\(A\\). That is, \\(\\mathbf{b}\\) is a linear combination of the columns of \\(A\\) with weights given by \\(\\mathbf{x}\\).</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>By the column view of matrix multiplication, \\(A\\mathbf{x} = x_1 \\mathbf{a}_1 + \\cdots + x_n \\mathbf{a}_n\\). Setting this equal to \\(\\mathbf{b}\\) gives the result.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <h3>Matrix Multiplication as Composition</h3>

                <div class="env-block intuition">
                    <div class="env-title">Composition Interpretation</div>
                    <div class="env-body"><p>If \\(T_A\\) and \\(T_B\\) are linear transformations represented by matrices \\(A\\) and \\(B\\), then the composition \\(T_A \\circ T_B\\) is represented by the product \\(AB\\). This is <em>why</em> matrix multiplication is defined the way it is. The "row-dot-column" formula is not arbitrary; it is forced by the requirement that matrix multiplication encode composition of linear maps. We will explore this connection deeply in Chapter 6.</p></div>
                </div>

                <div class="viz-placeholder" data-viz="viz-composition"></div>`,

            visualizations: [
                {
                    id: 'viz-mat-mult',
                    title: 'Matrix Multiplication Visualizer',
                    description: 'Watch how each entry of the product \\(AB\\) is computed as a dot product of a row of \\(A\\) with a column of \\(B\\). Click entries of the result to highlight the corresponding row-column pair.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {scale: 40});

                        // Fixed 2x3 times 3x2 example
                        var A = [[1, 2, 3], [4, 5, 6]];
                        var B = [[7, 8], [9, 10], [11, 12]];
                        // C = AB (2x2)
                        var C = [[58, 64], [139, 154]];

                        var highlightRow = -1;
                        var highlightCol = -1;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var cellW = 44;
                            var cellH = 30;

                            // Layout positions
                            var aX = 30, aY = 100;
                            var bX = 210, bY = 20;
                            var cX = 210, cY = 100;

                            // Label A
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('A (2\u00d73)', aX + 1.5 * cellW, aY - 16);

                            // Label B
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('B (3\u00d72)', bX + cellW, bY - 16);

                            // Label C = AB
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('AB (2\u00d72)', cX + cellW, cY - 16);

                            // Draw matrix A
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            for (var i = 0; i < 2; i++) {
                                for (var j = 0; j < 3; j++) {
                                    var isHl = (highlightRow === i);
                                    ctx.fillStyle = isHl ? viz.colors.blue : '#1a1a40';
                                    ctx.fillRect(aX + j * cellW, aY + i * cellH, cellW - 2, cellH - 2);
                                    ctx.fillStyle = isHl ? viz.colors.white : viz.colors.blue;
                                    ctx.fillText(A[i][j], aX + j * cellW + cellW / 2 - 1, aY + i * cellH + cellH / 2);
                                }
                            }

                            // Draw matrix B
                            for (var i = 0; i < 3; i++) {
                                for (var j = 0; j < 2; j++) {
                                    var isHl = (highlightCol === j);
                                    ctx.fillStyle = isHl ? viz.colors.teal : '#1a1a40';
                                    ctx.fillRect(bX + j * cellW, bY + i * cellH, cellW - 2, cellH - 2);
                                    ctx.fillStyle = isHl ? viz.colors.white : viz.colors.teal;
                                    ctx.fillText(B[i][j], bX + j * cellW + cellW / 2 - 1, bY + i * cellH + cellH / 2);
                                }
                            }

                            // Draw product C
                            for (var i = 0; i < 2; i++) {
                                for (var j = 0; j < 2; j++) {
                                    var isHl = (highlightRow === i && highlightCol === j);
                                    ctx.fillStyle = isHl ? viz.colors.orange : '#1a1a40';
                                    ctx.fillRect(cX + j * cellW, cY + i * cellH, cellW - 2, cellH - 2);
                                    ctx.fillStyle = isHl ? viz.colors.white : viz.colors.orange;
                                    ctx.fillText(C[i][j], cX + j * cellW + cellW / 2 - 1, cY + i * cellH + cellH / 2);
                                }
                            }

                            // Show computation if highlighted
                            if (highlightRow >= 0 && highlightCol >= 0) {
                                var r = highlightRow;
                                var c = highlightCol;
                                var compStr = '';
                                var terms = [];
                                for (var k = 0; k < 3; k++) {
                                    terms.push(A[r][k] + '\u00b7' + B[k][c]);
                                }
                                compStr = 'C[' + (r + 1) + ',' + (c + 1) + '] = ' + terms.join(' + ') + ' = ' + C[r][c];
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(compStr, viz.width / 2, cY + 2 * cellH + 30);

                                // Draw connecting lines
                                ctx.strokeStyle = viz.colors.yellow + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                // Row of A to result
                                ctx.beginPath();
                                ctx.moveTo(aX + 3 * cellW, aY + r * cellH + cellH / 2);
                                ctx.lineTo(cX, cY + r * cellH + cellH / 2);
                                ctx.stroke();
                                // Col of B to result
                                ctx.beginPath();
                                ctx.moveTo(bX + c * cellW + cellW / 2, bY + 3 * cellH);
                                ctx.lineTo(cX + c * cellW + cellW / 2, cY);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            } else {
                                ctx.fillStyle = viz.colors.muted;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Click an entry of AB to see its computation', viz.width / 2, cY + 2 * cellH + 30);
                            }
                        }

                        // Click handler
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var cellW = 44;
                            var cellH = 30;
                            var cX = 210, cY = 100;
                            var col = Math.floor((mx - cX) / cellW);
                            var row = Math.floor((my - cY) / cellH);
                            if (row >= 0 && row < 2 && col >= 0 && col < 2) {
                                highlightRow = row;
                                highlightCol = col;
                            } else {
                                highlightRow = -1;
                                highlightCol = -1;
                            }
                            draw();
                        });

                        var cycleIdx = 0;
                        VizEngine.createButton(controls, 'Cycle Entries', function() {
                            highlightRow = Math.floor(cycleIdx / 2);
                            highlightCol = cycleIdx % 2;
                            cycleIdx = (cycleIdx + 1) % 4;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Clear', function() {
                            highlightRow = -1;
                            highlightCol = -1;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-composition',
                    title: 'Matrix Product as Composition of Transformations',
                    description: 'See how the product \\(AB\\) represents applying transformation \\(B\\) first, then \\(A\\). Adjust the matrices to see how the composed transformation changes. The grid shows the effect on the standard basis vectors.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {scale: 45});

                        // Matrix A (applied second)
                        var a11 = 1, a12 = -0.5, a21 = 0.5, a22 = 1;
                        // Matrix B (applied first)
                        var b11 = 0.7, b12 = 0, b21 = 0, b22 = 1.3;

                        VizEngine.createSlider(controls, 'a\u2081\u2081', -2, 2, a11, 0.1, function(v) { a11 = v; draw(); });
                        VizEngine.createSlider(controls, 'a\u2081\u2082', -2, 2, a12, 0.1, function(v) { a12 = v; draw(); });
                        VizEngine.createSlider(controls, 'a\u2082\u2081', -2, 2, a21, 0.1, function(v) { a21 = v; draw(); });
                        VizEngine.createSlider(controls, 'a\u2082\u2082', -2, 2, a22, 0.1, function(v) { a22 = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var A = [[a11, a12], [a21, a22]];
                            var B = [[b11, b12], [b21, b22]];
                            var AB = VizEngine.matMul(A, B);

                            // Draw B's transformed grid (faint)
                            viz.drawTransformedGrid(B, 4, viz.colors.teal + '33', 0.4);

                            // Draw AB's transformed grid
                            viz.drawTransformedGrid(AB, 4, viz.colors.orange + '55', 0.7);

                            // Draw transformed unit square for B
                            viz.drawTransformedUnitSquare(B, viz.colors.teal + '22', viz.colors.teal, 1.5);

                            // Draw transformed unit square for AB
                            viz.drawTransformedUnitSquare(AB, viz.colors.orange + '22', viz.colors.orange, 2);

                            // Draw basis vectors after B
                            var be1 = VizEngine.matVec(B, [1, 0]);
                            var be2 = VizEngine.matVec(B, [0, 1]);
                            viz.drawVec(be1[0], be1[1], viz.colors.teal, 'Be\u2081', 1.5);
                            viz.drawVec(be2[0], be2[1], viz.colors.teal, 'Be\u2082', 1.5);

                            // Draw basis vectors after AB
                            var abe1 = VizEngine.matVec(AB, [1, 0]);
                            var abe2 = VizEngine.matVec(AB, [0, 1]);
                            viz.drawVec(abe1[0], abe1[1], viz.colors.orange, 'ABe\u2081', 2);
                            viz.drawVec(abe2[0], abe2[1], viz.colors.orange, 'ABe\u2082', 2);

                            // Labels
                            var ctx = viz.ctx;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('B (applied first)', 12, 18);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('AB (composition)', 12, 36);

                            // Show AB matrix
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('AB = [' + AB[0][0].toFixed(2) + ', ' + AB[0][1].toFixed(2) + '; ' + AB[1][0].toFixed(2) + ', ' + AB[1][1].toFixed(2) + ']', viz.width - 12, viz.height - 12);
                        }

                        draw();
                        return viz;
                    }
                }
            ],

            exercises: [
                {
                    question: 'Let \\(A = \\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}1&-1\\\\4&2\\end{pmatrix}\\). Compute \\(AB\\) and \\(BA\\). Are they equal?',
                    hint: 'Use the row-column dot product rule for each entry.',
                    solution: '\\(AB = \\begin{pmatrix}2\\cdot1+1\\cdot4 & 2(-1)+1\\cdot2\\\\0\\cdot1+3\\cdot4 & 0(-1)+3\\cdot2\\end{pmatrix} = \\begin{pmatrix}6&0\\\\12&6\\end{pmatrix}\\). \\(BA = \\begin{pmatrix}1\\cdot2+(-1)\\cdot0 & 1\\cdot1+(-1)\\cdot3\\\\4\\cdot2+2\\cdot0 & 4\\cdot1+2\\cdot3\\end{pmatrix} = \\begin{pmatrix}2&-2\\\\8&10\\end{pmatrix}\\). They are not equal: \\(AB \\neq BA\\).'
                },
                {
                    question: 'Find two nonzero \\(2 \\times 2\\) matrices \\(A\\) and \\(B\\) such that \\(AB = O\\) (the zero matrix).',
                    hint: 'Try \\(A\\) whose columns are in the null space of... wait, try matrices where the column space of \\(B\\) lies in the null space of \\(A\\).',
                    solution: 'Take \\(A = \\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}\\). Then \\(AB = \\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\). Both \\(A\\) and \\(B\\) are nonzero, but their product is zero. This works because every column of \\(B\\) is a multiple of \\((1,-1)^T\\), which is in the null space of \\(A\\).'
                },
                {
                    question: 'Prove that \\(I_n A = A\\) for any \\(n \\times p\\) matrix \\(A\\). (Do not just say "it is obvious.")',
                    hint: 'Compute the \\((i,j)\\)-entry of \\(I_n A\\) using the definition.',
                    solution: '\\((I_n A)_{ij} = \\sum_{k=1}^n (I_n)_{ik} a_{kj} = \\sum_{k=1}^n \\delta_{ik} a_{kj} = a_{ij}\\), since \\(\\delta_{ik} = 1\\) only when \\(k = i\\) and is 0 otherwise. Thus \\((I_n A)_{ij} = a_{ij}\\) for all \\(i,j\\), so \\(I_n A = A\\).'
                },
                {
                    question: 'Let \\(A\\) be \\(m \\times n\\) and \\(B\\) be \\(n \\times p\\). Show that if \\(A\\) has a row of zeros, then \\(AB\\) has the corresponding row of zeros.',
                    hint: 'Use the row-column formula for entries in that row.',
                    solution: 'Suppose row \\(i\\) of \\(A\\) is all zeros, i.e., \\(a_{ik} = 0\\) for all \\(k\\). Then \\((AB)_{ij} = \\sum_{k=1}^n a_{ik} b_{kj} = \\sum_{k=1}^n 0 \\cdot b_{kj} = 0\\) for every \\(j\\). So row \\(i\\) of \\(AB\\) is also all zeros.'
                },
                {
                    question: 'Compute the product using the outer product view: \\(\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\begin{pmatrix}4&5\\end{pmatrix}\\).',
                    hint: 'This is a \\(3 \\times 1\\) times \\(1 \\times 2\\) product, giving a \\(3 \\times 2\\) matrix. It is already a single outer product.',
                    solution: '\\(\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\begin{pmatrix}4&5\\end{pmatrix} = \\begin{pmatrix}1\\cdot4&1\\cdot5\\\\2\\cdot4&2\\cdot5\\\\3\\cdot4&3\\cdot5\\end{pmatrix} = \\begin{pmatrix}4&5\\\\8&10\\\\12&15\\end{pmatrix}\\). This is a rank-1 matrix (each row is a scalar multiple of \\((4,5)\\)).'
                },
                {
                    question: 'How many scalar multiplications are needed to compute the product of an \\(m \\times n\\) matrix with an \\(n \\times p\\) matrix?',
                    hint: 'Each entry of the product requires \\(n\\) multiplications.',
                    solution: 'The product is an \\(m \\times p\\) matrix with \\(mp\\) entries. Each entry requires \\(n\\) multiplications (one for each term in the dot product). Total: \\(mnp\\) scalar multiplications.'
                }
            ]
        },

        // ===================== Section 4: Matrix Transpose and Symmetric Matrices =====================
        {
            id: 'ch01-sec04',
            title: 'Matrix Transpose and Symmetric Matrices',
            content: `<h2>Matrix Transpose and Symmetric Matrices</h2>

                <p>The transpose operation "reflects" a matrix across its main diagonal, converting rows to columns and vice versa. This seemingly simple operation has profound consequences throughout linear algebra.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Transpose)</div>
                    <div class="env-body"><p>The <strong>transpose</strong> of an \\(m \\times n\\) matrix \\(A\\) is the \\(n \\times m\\) matrix \\(A^T\\) defined by
                    \\[(A^T)_{ij} = a_{ji}\\]
                    In other words, the \\(i\\)-th row of \\(A^T\\) is the \\(i\\)-th column of \\(A\\) (written as a row).</p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>
                    \\[A = \\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}, \\quad A^T = \\begin{pmatrix}1&4\\\\2&5\\\\3&6\\end{pmatrix}\\]
                    Note that \\(A\\) is \\(2 \\times 3\\) and \\(A^T\\) is \\(3 \\times 2\\).</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Properties of the Transpose)</div>
                    <div class="env-body"><p>Let \\(A, B\\) be matrices of appropriate sizes and \\(c\\) a scalar. Then:
                    <ol>
                        <li>\\((A^T)^T = A\\)</li>
                        <li>\\((A + B)^T = A^T + B^T\\)</li>
                        <li>\\((cA)^T = cA^T\\)</li>
                        <li>\\((AB)^T = B^T A^T\\) &emsp; <em>(note the reversal of order!)</em></li>
                    </ol></p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of (4): \\((AB)^T = B^T A^T\\)</div>
                    <div class="env-body"><p>Let \\(A \\in \\mathbb{R}^{m \\times n}\\) and \\(B \\in \\mathbb{R}^{n \\times p}\\). Then \\(AB \\in \\mathbb{R}^{m \\times p}\\), so \\((AB)^T \\in \\mathbb{R}^{p \\times m}\\). Also, \\(B^T \\in \\mathbb{R}^{p \\times n}\\) and \\(A^T \\in \\mathbb{R}^{n \\times m}\\), so \\(B^T A^T \\in \\mathbb{R}^{p \\times m}\\). The dimensions match.</p>
                    <p>For the entries:
                    \\[((AB)^T)_{ij} = (AB)_{ji} = \\sum_{k=1}^n a_{jk} b_{ki}\\]
                    \\[(B^T A^T)_{ij} = \\sum_{k=1}^n (B^T)_{ik}(A^T)_{kj} = \\sum_{k=1}^n b_{ki} a_{jk} = \\sum_{k=1}^n a_{jk} b_{ki}\\]
                    These are equal for all \\(i, j\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why the Order Reverses</div>
                    <div class="env-body"><p>The identity \\((AB)^T = B^T A^T\\) is the matrix analog of the "socks and shoes" principle: to undo putting on socks then shoes, you remove shoes first, then socks. If \\(A\\) and \\(B\\) represent transformations, transposing the composition reverses their order. This reversal pattern appears repeatedly: \\((ABC)^T = C^T B^T A^T\\), and similarly for inverses: \\((AB)^{-1} = B^{-1}A^{-1}\\).</p></div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary</div>
                    <div class="env-body"><p>For any matrices \\(A_1, A_2, \\ldots, A_k\\) of compatible sizes:
                    \\[(A_1 A_2 \\cdots A_k)^T = A_k^T \\cdots A_2^T A_1^T\\]</p></div>
                </div>

                <h3>Symmetric and Skew-Symmetric Matrices</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition (Symmetric and Skew-Symmetric)</div>
                    <div class="env-body"><p>A square matrix \\(A\\) is:
                    <ul>
                        <li><strong>Symmetric</strong> if \\(A^T = A\\), i.e., \\(a_{ij} = a_{ji}\\) for all \\(i, j\\).</li>
                        <li><strong>Skew-symmetric</strong> (or <strong>antisymmetric</strong>) if \\(A^T = -A\\), i.e., \\(a_{ij} = -a_{ji}\\) for all \\(i, j\\).</li>
                    </ul></p></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body"><p>
                    \\[S = \\begin{pmatrix}1&2&3\\\\2&4&5\\\\3&5&6\\end{pmatrix} \\text{ (symmetric)}, \\quad K = \\begin{pmatrix}0&2&-3\\\\-2&0&5\\\\3&-5&0\\end{pmatrix} \\text{ (skew-symmetric)}\\]
                    Notice that the diagonal entries of a skew-symmetric matrix must be zero (since \\(a_{ii} = -a_{ii}\\) implies \\(a_{ii} = 0\\)).</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Symmetric Decomposition)</div>
                    <div class="env-body"><p>Every square matrix \\(A\\) can be uniquely decomposed as
                    \\[A = S + K\\]
                    where \\(S = \\frac{1}{2}(A + A^T)\\) is symmetric and \\(K = \\frac{1}{2}(A - A^T)\\) is skew-symmetric.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p><strong>Existence:</strong> Define \\(S = \\frac{1}{2}(A + A^T)\\) and \\(K = \\frac{1}{2}(A - A^T)\\). Then \\(S + K = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T) = A\\). We verify: \\(S^T = \\frac{1}{2}(A^T + A) = S\\) (symmetric), and \\(K^T = \\frac{1}{2}(A^T - A) = -K\\) (skew-symmetric).</p>
                    <p><strong>Uniqueness:</strong> Suppose \\(A = S' + K'\\) with \\(S'\\) symmetric and \\(K'\\) skew-symmetric. Then \\(A^T = S' - K'\\). Adding: \\(A + A^T = 2S'\\), so \\(S' = \\frac{1}{2}(A + A^T) = S\\). Subtracting: \\(A - A^T = 2K'\\), so \\(K' = K\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition</div>
                    <div class="env-body"><p>For any matrix \\(A \\in \\mathbb{R}^{m \\times n}\\):
                    <ul>
                        <li>\\(A^T A\\) is a symmetric \\(n \\times n\\) matrix.</li>
                        <li>\\(AA^T\\) is a symmetric \\(m \\times m\\) matrix.</li>
                    </ul></p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>\\((A^T A)^T = A^T (A^T)^T = A^T A\\), so \\(A^T A\\) is symmetric. Similarly for \\(AA^T\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>The matrices \\(A^T A\\) and \\(AA^T\\) will play a central role in the theory of least squares (Chapter 15) and the singular value decomposition (Chapter 17). Symmetric matrices have especially nice spectral properties: all eigenvalues are real, and they admit an orthogonal diagonalization (the spectral theorem, Chapter 16).</p></div>
                </div>

                <h3>The Transpose and Inner Products</h3>

                <p>For column vectors \\(\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n\\), the dot product can be written as a matrix product:
                \\[\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v}\\]
                This is a \\(1 \\times n\\) times \\(n \\times 1\\) product, yielding a \\(1 \\times 1\\) matrix (a scalar). This notation cleanly connects the inner product to matrix algebra and leads to the identity:
                \\[(A\\mathbf{u}) \\cdot \\mathbf{v} = (A\\mathbf{u})^T \\mathbf{v} = \\mathbf{u}^T A^T \\mathbf{v} = \\mathbf{u} \\cdot (A^T \\mathbf{v})\\]</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Transpose and Inner Products)</div>
                    <div class="env-body"><p>For any \\(m \\times n\\) matrix \\(A\\) and vectors \\(\\mathbf{u} \\in \\mathbb{R}^n\\), \\(\\mathbf{v} \\in \\mathbb{R}^m\\):
                    \\[\\langle A\\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{u}, A^T \\mathbf{v} \\rangle\\]
                    This is the defining property of the <strong>adjoint</strong> of a linear map with respect to the standard inner product.</p></div>
                </div>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Compute the transpose of \\(A = \\begin{pmatrix}1&0&-2\\\\3&5&1\\\\-1&4&7\\end{pmatrix}\\) and verify that \\((A^T)^T = A\\).',
                    hint: 'Swap rows and columns.',
                    solution: '\\(A^T = \\begin{pmatrix}1&3&-1\\\\0&5&4\\\\-2&1&7\\end{pmatrix}\\). Taking the transpose again gives back \\(\\begin{pmatrix}1&0&-2\\\\3&5&1\\\\-1&4&7\\end{pmatrix} = A\\). Verified.'
                },
                {
                    question: 'Let \\(A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}\\). Verify that \\((AB)^T = B^T A^T\\) by computing both sides.',
                    hint: 'Compute \\(AB\\) first, then take its transpose. Separately compute \\(B^T A^T\\).',
                    solution: '\\(AB = \\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}\\), so \\((AB)^T = \\begin{pmatrix}19&43\\\\22&50\\end{pmatrix}\\). \\(B^T = \\begin{pmatrix}5&7\\\\6&8\\end{pmatrix}\\), \\(A^T = \\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}\\). \\(B^T A^T = \\begin{pmatrix}5+14&15+28\\\\6+16&18+32\\end{pmatrix} = \\begin{pmatrix}19&43\\\\22&50\\end{pmatrix}\\). They agree.'
                },
                {
                    question: 'Decompose \\(A = \\begin{pmatrix}1&4\\\\2&3\\end{pmatrix}\\) into the sum of a symmetric and a skew-symmetric matrix.',
                    hint: 'Use \\(S = \\frac{1}{2}(A + A^T)\\) and \\(K = \\frac{1}{2}(A - A^T)\\).',
                    solution: '\\(A^T = \\begin{pmatrix}1&2\\\\4&3\\end{pmatrix}\\). \\(S = \\frac{1}{2}\\begin{pmatrix}2&6\\\\6&6\\end{pmatrix} = \\begin{pmatrix}1&3\\\\3&3\\end{pmatrix}\\). \\(K = \\frac{1}{2}\\begin{pmatrix}0&2\\\\-2&0\\end{pmatrix} = \\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}\\). Check: \\(S + K = \\begin{pmatrix}1&4\\\\2&3\\end{pmatrix} = A\\). \\(S^T = S\\) and \\(K^T = -K\\).'
                },
                {
                    question: 'Show that for any \\(m \\times n\\) matrix \\(A\\), the matrix \\(A^T A\\) is always symmetric and has non-negative diagonal entries.',
                    hint: 'For the diagonal: what is the \\((j,j)\\)-entry of \\(A^T A\\)?',
                    solution: 'Symmetry: \\((A^T A)^T = A^T(A^T)^T = A^T A\\). Diagonal entries: \\((A^T A)_{jj} = \\sum_{i=1}^m (A^T)_{ji} A_{ij} = \\sum_{i=1}^m a_{ij}^2 \\geq 0\\). Each diagonal entry is a sum of squares, which is always non-negative.'
                },
                {
                    question: 'If \\(A\\) is an \\(n \\times n\\) skew-symmetric matrix and \\(\\mathbf{x} \\in \\mathbb{R}^n\\), show that \\(\\mathbf{x}^T A \\mathbf{x} = 0\\).',
                    hint: 'Note that \\(\\mathbf{x}^T A \\mathbf{x}\\) is a \\(1 \\times 1\\) matrix (a scalar), so it equals its own transpose.',
                    solution: 'Since \\(\\mathbf{x}^T A \\mathbf{x}\\) is a scalar, \\(\\mathbf{x}^T A \\mathbf{x} = (\\mathbf{x}^T A \\mathbf{x})^T = \\mathbf{x}^T A^T \\mathbf{x} = \\mathbf{x}^T(-A)\\mathbf{x} = -\\mathbf{x}^T A \\mathbf{x}\\). So \\(2\\mathbf{x}^T A \\mathbf{x} = 0\\), giving \\(\\mathbf{x}^T A \\mathbf{x} = 0\\).'
                }
            ]
        },

        // ===================== Section 5: Block Matrices and Partitioned Multiplication =====================
        {
            id: 'ch01-sec05',
            title: 'Block Matrices and Partitioned Multiplication',
            content: `<h2>Block Matrices and Partitioned Multiplication</h2>

                <p>Large matrices often have internal structure that can be exploited by partitioning them into <strong>blocks</strong> (sub-matrices). Block multiplication greatly simplifies both theoretical arguments and practical computation.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Block Matrix)</div>
                    <div class="env-body"><p>A <strong>block matrix</strong> (or <strong>partitioned matrix</strong>) is a matrix that has been divided into sub-matrices (blocks) by drawing horizontal and vertical lines through it. For example:
                    \\[M = \\left(\\begin{array}{cc|c} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ \\hline 7 & 8 & 9 \\end{array}\\right) = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix}\\]
                    where \\(A = \\begin{pmatrix}1&2\\\\4&5\\end{pmatrix}\\), \\(B = \\begin{pmatrix}3\\\\6\\end{pmatrix}\\), \\(C = \\begin{pmatrix}7&8\\end{pmatrix}\\), \\(D = (9)\\).</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Block Multiplication)</div>
                    <div class="env-body"><p>If matrices \\(M\\) and \\(N\\) are partitioned into blocks in a <strong>compatible</strong> way (i.e., the column partition of \\(M\\) matches the row partition of \\(N\\)), then their product can be computed by treating the blocks as if they were individual entries:
                    \\[\\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} \\begin{pmatrix} E & F \\\\ G & H \\end{pmatrix} = \\begin{pmatrix} AE + BG & AF + BH \\\\ CE + DG & CF + DH \\end{pmatrix}\\]
                    provided all the indicated matrix products and sums are well-defined.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body"><p>The proof proceeds by verifying that the entry-by-entry definition of matrix multiplication gives the same result as the block formula. Since the blocks partition the rows and columns completely, each entry \\((i,j)\\) of the product falls into exactly one block of the result. The computation of that entry involves summing over \\(k\\), and the range of \\(k\\) is partitioned by the column blocks of \\(M\\) (= row blocks of \\(N\\)) into sub-sums that correspond exactly to the sub-products in the block formula. Commutativity of addition allows rearranging the sum into the block form.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example (Block Multiplication)</div>
                    <div class="env-body"><p>Let \\(M = \\begin{pmatrix} I_2 & B \\\\ O & I_3 \\end{pmatrix}\\) where \\(B\\) is \\(2 \\times 3\\). Then:
                    \\[M^2 = \\begin{pmatrix} I_2 & B \\\\ O & I_3 \\end{pmatrix}\\begin{pmatrix} I_2 & B \\\\ O & I_3 \\end{pmatrix} = \\begin{pmatrix} I_2 \\cdot I_2 + B \\cdot O & I_2 \\cdot B + B \\cdot I_3 \\\\ O \\cdot I_2 + I_3 \\cdot O & O \\cdot B + I_3 \\cdot I_3 \\end{pmatrix} = \\begin{pmatrix} I_2 & 2B \\\\ O & I_3 \\end{pmatrix}\\]
                    This is much simpler than multiplying a \\(5 \\times 5\\) matrix entry by entry!</p></div>
                </div>

                <h3>Column and Row Partitions</h3>

                <p>Two especially useful partitions arise naturally from the structure of a matrix:</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Column and Row Partitions)</div>
                    <div class="env-body"><p>Every \\(m \\times n\\) matrix \\(A\\) can be partitioned by columns:
                    \\[A = \\begin{pmatrix} \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\end{pmatrix}\\]
                    or by rows:
                    \\[A = \\begin{pmatrix} \\mathbf{r}_1^T \\\\ \\mathbf{r}_2^T \\\\ \\vdots \\\\ \\mathbf{r}_m^T \\end{pmatrix}\\]
                    where \\(\\mathbf{a}_j\\) is the \\(j\\)-th column (an \\(m \\times 1\\) vector) and \\(\\mathbf{r}_i^T\\) is the \\(i\\)-th row (a \\(1 \\times n\\) vector).</p></div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition (Column-Row Interpretation)</div>
                    <div class="env-body"><p>Using the column partition of \\(A\\) and the row partition of \\(B\\):
                    \\[AB = \\sum_{k=1}^n \\mathbf{a}_k \\mathbf{r}_k^T\\]
                    where \\(\\mathbf{a}_k\\) is the \\(k\\)-th column of \\(A\\) (size \\(m \\times 1\\)) and \\(\\mathbf{r}_k^T\\) is the \\(k\\)-th row of \\(B\\) (size \\(1 \\times p\\)). Each term \\(\\mathbf{a}_k \\mathbf{r}_k^T\\) is an \\(m \\times p\\) <strong>outer product</strong> (a rank-1 matrix).</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>The \\((i,j)\\)-entry of \\(\\sum_{k=1}^n \\mathbf{a}_k \\mathbf{r}_k^T\\) is \\(\\sum_{k=1}^n (\\mathbf{a}_k)_i (\\mathbf{r}_k^T)_j = \\sum_{k=1}^n a_{ik} b_{kj} = (AB)_{ij}\\).</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <h3>Block Diagonal Matrices</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition (Block Diagonal Matrix)</div>
                    <div class="env-body"><p>A <strong>block diagonal matrix</strong> has square matrices \\(A_1, A_2, \\ldots, A_k\\) on the diagonal and zero blocks elsewhere:
                    \\[\\text{diag}(A_1, A_2, \\ldots, A_k) = \\begin{pmatrix} A_1 & O & \\cdots & O \\\\ O & A_2 & \\cdots & O \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ O & O & \\cdots & A_k \\end{pmatrix}\\]</p></div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition (Block Diagonal Products)</div>
                    <div class="env-body"><p>If \\(M = \\text{diag}(A_1, \\ldots, A_k)\\) and \\(N = \\text{diag}(B_1, \\ldots, B_k)\\), then
                    \\[MN = \\text{diag}(A_1 B_1, A_2 B_2, \\ldots, A_k B_k)\\]
                    In other words, block diagonal matrices multiply "block by block." This makes them computationally efficient: instead of multiplying one large matrix, we multiply several smaller ones independently.</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body"><p>By block multiplication, the \\((i,j)\\) block of \\(MN\\) is \\(\\sum_{l=1}^k M_{il} N_{lj}\\). Since \\(M\\) is block diagonal, \\(M_{il} = O\\) for \\(i \\neq l\\) and \\(M_{ii} = A_i\\). Similarly, \\(N_{lj} = O\\) for \\(l \\neq j\\). So the sum reduces to a single term: \\((MN)_{ij} = A_i B_j\\) if \\(i = j\\), and \\(O\\) otherwise.</p>
                    <div class="qed">&#8718;</div></div>
                </div>

                <h3>Applications of Block Matrices</h3>

                <div class="env-block example">
                    <div class="env-title">Example (Block Upper Triangular)</div>
                    <div class="env-body"><p>Block triangular structure often arises in applications. Consider
                    \\[M = \\begin{pmatrix} A & B \\\\ O & D \\end{pmatrix}\\]
                    where \\(A\\) and \\(D\\) are square. If \\(A\\) and \\(D\\) are invertible, then \\(M\\) is invertible with
                    \\[M^{-1} = \\begin{pmatrix} A^{-1} & -A^{-1}BD^{-1} \\\\ O & D^{-1} \\end{pmatrix}\\]
                    This can be verified by block multiplication: \\(MM^{-1} = I\\).</p></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Looking Ahead)</div>
                    <div class="env-body"><p>Block matrices are not just a computational convenience; they reveal structural properties:
                    <ul>
                        <li>The <strong>\\(LU\\) factorization</strong> (Chapter 2) can be derived using block elimination.</li>
                        <li>The <strong>Schur complement</strong> \\(D - CA^{-1}B\\) arises from block Gaussian elimination and plays a central role in optimization, statistics, and control theory.</li>
                        <li><strong>Jordan canonical form</strong> (Chapter 12) is a block diagonal matrix of Jordan blocks.</li>
                    </ul></p></div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition (Schur Complement)</div>
                    <div class="env-body"><p>Given a block matrix \\(M = \\begin{pmatrix}A&B\\\\C&D\\end{pmatrix}\\) where \\(A\\) is invertible, the <strong>Schur complement</strong> of \\(A\\) in \\(M\\) is
                    \\[M/A = D - CA^{-1}B\\]
                    Block Gaussian elimination on \\(M\\) gives:
                    \\[\\begin{pmatrix}I&O\\\\-CA^{-1}&I\\end{pmatrix}\\begin{pmatrix}A&B\\\\C&D\\end{pmatrix} = \\begin{pmatrix}A&B\\\\O&D-CA^{-1}B\\end{pmatrix}\\]
                    The matrix \\(M\\) is invertible if and only if both \\(A\\) and \\(M/A\\) are invertible.</p></div>
                </div>`,

            visualizations: [],

            exercises: [
                {
                    question: 'Let \\(M = \\begin{pmatrix}I_2 & A\\\\O & I_3\\end{pmatrix}\\) where \\(A\\) is \\(2 \\times 3\\). Compute \\(M^3\\) using block multiplication.',
                    hint: 'First find \\(M^2\\) (shown in the text), then compute \\(M^2 \\cdot M\\).',
                    solution: 'From the example, \\(M^2 = \\begin{pmatrix}I_2&2A\\\\O&I_3\\end{pmatrix}\\). Then \\(M^3 = M^2 \\cdot M = \\begin{pmatrix}I_2\\cdot I_2 + 2A\\cdot O & I_2\\cdot A + 2A\\cdot I_3\\\\O&I_3\\end{pmatrix} = \\begin{pmatrix}I_2&3A\\\\O&I_3\\end{pmatrix}\\). In general, \\(M^n = \\begin{pmatrix}I_2&nA\\\\O&I_3\\end{pmatrix}\\).'
                },
                {
                    question: 'Let \\(M = \\text{diag}(A, B)\\) with \\(A = \\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}3\\end{pmatrix}\\). Compute \\(M^2\\).',
                    hint: 'Block diagonal matrices multiply block-by-block.',
                    solution: '\\(M^2 = \\text{diag}(A^2, B^2)\\). \\(A^2 = \\begin{pmatrix}1&4\\\\0&1\\end{pmatrix}\\), \\(B^2 = (9)\\). So \\(M^2 = \\begin{pmatrix}1&4&0\\\\0&1&0\\\\0&0&9\\end{pmatrix}\\).'
                },
                {
                    question: 'Verify the formula for the inverse of a block upper triangular matrix: show that \\(\\begin{pmatrix}A&B\\\\O&D\\end{pmatrix}\\begin{pmatrix}A^{-1}&-A^{-1}BD^{-1}\\\\O&D^{-1}\\end{pmatrix} = I\\).',
                    hint: 'Perform block multiplication and simplify using \\(AA^{-1} = I\\) and \\(DD^{-1} = I\\).',
                    solution: 'Top-left: \\(A \\cdot A^{-1} + B \\cdot O = I + O = I\\). Top-right: \\(A(-A^{-1}BD^{-1}) + B \\cdot D^{-1} = -BD^{-1} + BD^{-1} = O\\). Bottom-left: \\(O \\cdot A^{-1} + D \\cdot O = O\\). Bottom-right: \\(O \\cdot (-A^{-1}BD^{-1}) + D \\cdot D^{-1} = O + I = I\\). Result: \\(\\begin{pmatrix}I&O\\\\O&I\\end{pmatrix} = I\\). Verified.'
                },
                {
                    question: 'Write the matrix product \\(AB\\) as a sum of outer products (rank-1 matrices) when \\(A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\) and \\(B = \\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}\\). Verify by computing the sum.',
                    hint: 'Column 1 of \\(A\\) times row 1 of \\(B\\), plus column 2 of \\(A\\) times row 2 of \\(B\\).',
                    solution: '\\(AB = \\begin{pmatrix}1\\\\3\\end{pmatrix}\\begin{pmatrix}5&6\\end{pmatrix} + \\begin{pmatrix}2\\\\4\\end{pmatrix}\\begin{pmatrix}7&8\\end{pmatrix} = \\begin{pmatrix}5&6\\\\15&18\\end{pmatrix} + \\begin{pmatrix}14&16\\\\28&32\\end{pmatrix} = \\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}\\). This matches the standard computation.'
                },
                {
                    question: 'Let \\(M = \\begin{pmatrix}2I_2&I_2\\\\3I_2&4I_2\\end{pmatrix}\\). This is a \\(4 \\times 4\\) matrix. Compute \\(\\det(M)\\) using the Schur complement formula \\(\\det(M) = \\det(A) \\cdot \\det(D - CA^{-1}B)\\), where \\(A = 2I_2,\\; B = I_2,\\; C = 3I_2,\\; D = 4I_2\\).',
                    hint: 'Compute \\(A^{-1} = \\frac{1}{2}I_2\\), then find the Schur complement \\(D - CA^{-1}B\\).',
                    solution: '\\(A^{-1} = \\frac{1}{2}I_2\\). Schur complement: \\(D - CA^{-1}B = 4I_2 - 3I_2 \\cdot \\frac{1}{2}I_2 \\cdot I_2 = 4I_2 - \\frac{3}{2}I_2 = \\frac{5}{2}I_2\\). \\(\\det(A) = \\det(2I_2) = 4\\). \\(\\det(M/A) = \\det(\\frac{5}{2}I_2) = \\frac{25}{4}\\). So \\(\\det(M) = 4 \\cdot \\frac{25}{4} = 25\\).'
                }
            ]
        }
    ]
});
