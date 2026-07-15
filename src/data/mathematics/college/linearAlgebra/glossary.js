const linearAlgebraGlossary = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Glossary",

  description:
    "A searchable reference of essential linear algebra terms, symbols, ideas, and applications.",

  categories: [
    "Foundations",
    "Vectors",
    "Matrices",
    "Systems",
    "Determinants",
    "Vector Spaces",
    "Transformations",
    "Eigenvalues",
    "Orthogonality",
    "Least Squares",
    "SVD",
    "Numerical Methods",
    "Artificial Intelligence",
  ],

  terms: [
    {
      id: "scalar",
      term: "Scalar",
      category: "Foundations",
      symbol: "c",
      definition:
        "A single numerical value used to represent magnitude, quantity, or scale.",
      intuition:
        "A scalar tells how much, but not which direction.",
      example:
        "Temperature, mass, speed, and the number 5 are scalars.",
      relatedTerms: ["Vector", "Scalar Multiplication", "Magnitude"],
    },
    {
      id: "vector",
      term: "Vector",
      category: "Vectors",
      symbol: "v",
      definition:
        "An ordered collection of numbers that can represent magnitude, direction, position, features, or data.",
      intuition:
        "A vector is an arrow in geometry and a structured data object in computing.",
      example:
        "The vector [3, 4] can represent movement three units right and four units up.",
      relatedTerms: ["Scalar", "Magnitude", "Direction", "Component"],
    },
    {
      id: "component",
      term: "Component",
      category: "Vectors",
      symbol: "v_i",
      definition:
        "One numerical entry of a vector.",
      intuition:
        "Each component describes one coordinate, feature, or direction.",
      example:
        "In [2, -1, 5], the second component is -1.",
      relatedTerms: ["Vector", "Coordinate", "Entry"],
    },
    {
      id: "magnitude",
      term: "Magnitude",
      category: "Vectors",
      symbol: "||v||",
      definition:
        "The length or size of a vector.",
      intuition:
        "Magnitude tells how long the vector is, regardless of its direction.",
      example:
        "The magnitude of [3, 4] is 5.",
      relatedTerms: ["Norm", "Unit Vector", "Distance"],
    },
    {
      id: "norm",
      term: "Norm",
      category: "Vectors",
      symbol: "||v||",
      definition:
        "A function that measures the size or length of a vector.",
      intuition:
        "A norm generalizes the idea of distance from the origin.",
      example:
        "The Euclidean norm of [3, 4] equals 5.",
      relatedTerms: ["Magnitude", "Distance", "Normalization"],
    },
    {
      id: "unit-vector",
      term: "Unit Vector",
      category: "Vectors",
      symbol: "u",
      definition:
        "A vector whose magnitude equals 1.",
      intuition:
        "A unit vector represents direction without carrying extra length.",
      example:
        "The normalized form of [3, 4] is [3/5, 4/5].",
      relatedTerms: ["Normalization", "Magnitude", "Direction"],
    },
    {
      id: "normalization",
      term: "Normalization",
      category: "Vectors",
      symbol: "v / ||v||",
      definition:
        "The process of scaling a nonzero vector so that its magnitude becomes 1.",
      intuition:
        "Normalization keeps direction and removes original size.",
      example:
        "Normalizing [6, 8] produces [0.6, 0.8].",
      relatedTerms: ["Unit Vector", "Norm", "Scaling"],
    },
    {
      id: "vector-addition",
      term: "Vector Addition",
      category: "Vectors",
      symbol: "u + v",
      definition:
        "The operation of adding corresponding components of two vectors.",
      intuition:
        "Vector addition combines movements, forces, or data changes.",
      example:
        "[1, 2] + [3, 4] = [4, 6].",
      relatedTerms: ["Vector", "Linear Combination", "Resultant"],
    },
    {
      id: "scalar-multiplication",
      term: "Scalar Multiplication",
      category: "Vectors",
      symbol: "cv",
      definition:
        "The operation of multiplying every component of a vector by the same scalar.",
      intuition:
        "Scalar multiplication stretches, shrinks, or reverses a vector.",
      example:
        "2[1, -3] = [2, -6].",
      relatedTerms: ["Scalar", "Vector", "Scaling"],
    },
    {
      id: "dot-product",
      term: "Dot Product",
      category: "Vectors",
      symbol: "u · v",
      definition:
        "A scalar produced by multiplying corresponding vector components and adding the results.",
      intuition:
        "The dot product measures alignment between two vectors.",
      example:
        "[1, 2] · [3, 4] = 11.",
      relatedTerms: ["Cosine Similarity", "Orthogonality", "Projection"],
    },
    {
      id: "cosine-similarity",
      term: "Cosine Similarity",
      category: "Artificial Intelligence",
      symbol: "cos(theta)",
      definition:
        "A normalized measure of similarity based on the angle between two vectors.",
      intuition:
        "Vectors pointing in similar directions have high cosine similarity.",
      example:
        "Cosine similarity is widely used to compare text embeddings.",
      relatedTerms: ["Dot Product", "Embedding", "Angle"],
    },
    {
      id: "orthogonal-vectors",
      term: "Orthogonal Vectors",
      category: "Orthogonality",
      symbol: "u · v = 0",
      definition:
        "Two vectors whose dot product is zero.",
      intuition:
        "Orthogonal vectors are perpendicular in geometric settings.",
      example:
        "[1, 0] and [0, 1] are orthogonal.",
      relatedTerms: ["Dot Product", "Perpendicular", "Orthonormal"],
    },
    {
      id: "matrix",
      term: "Matrix",
      category: "Matrices",
      symbol: "A",
      definition:
        "A rectangular array of numbers organized into rows and columns.",
      intuition:
        "A matrix can represent data, a system, a transformation, or model parameters.",
      example:
        "[[1, 2], [3, 4]] is a 2 by 2 matrix.",
      relatedTerms: ["Row", "Column", "Entry", "Transformation"],
    },
    {
      id: "matrix-entry",
      term: "Matrix Entry",
      category: "Matrices",
      symbol: "a_ij",
      definition:
        "A single element located in row i and column j of a matrix.",
      intuition:
        "An entry is one value inside the matrix structure.",
      example:
        "In A, a_23 means row 2, column 3.",
      relatedTerms: ["Matrix", "Row", "Column"],
    },
    {
      id: "matrix-dimensions",
      term: "Matrix Dimensions",
      category: "Matrices",
      symbol: "m × n",
      definition:
        "The number of rows and columns in a matrix.",
      intuition:
        "Dimensions describe the shape of a matrix.",
      example:
        "A matrix with 3 rows and 4 columns has dimensions 3 × 4.",
      relatedTerms: ["Matrix", "Row", "Column"],
    },
    {
      id: "row-matrix",
      term: "Row Matrix",
      category: "Matrices",
      definition:
        "A matrix containing exactly one row.",
      intuition:
        "A row matrix is a horizontal list of values.",
      example:
        "[1, 2, 3] is a 1 × 3 row matrix.",
      relatedTerms: ["Column Matrix", "Vector", "Matrix"],
    },
    {
      id: "column-matrix",
      term: "Column Matrix",
      category: "Matrices",
      definition:
        "A matrix containing exactly one column.",
      intuition:
        "A column matrix is often treated as a vector.",
      example:
        "[[1], [2], [3]] is a 3 × 1 column matrix.",
      relatedTerms: ["Row Matrix", "Vector", "Matrix"],
    },
    {
      id: "square-matrix",
      term: "Square Matrix",
      category: "Matrices",
      definition:
        "A matrix with the same number of rows and columns.",
      intuition:
        "Square matrices can represent transformations from a space back to itself.",
      example:
        "A 3 × 3 matrix is square.",
      relatedTerms: ["Determinant", "Inverse Matrix", "Identity Matrix"],
    },
    {
      id: "zero-matrix",
      term: "Zero Matrix",
      category: "Matrices",
      symbol: "0",
      definition:
        "A matrix in which every entry is zero.",
      intuition:
        "The zero matrix acts like zero under matrix addition.",
      example:
        "[[0, 0], [0, 0]] is a zero matrix.",
      relatedTerms: ["Matrix Addition", "Additive Identity"],
    },
    {
      id: "identity-matrix",
      term: "Identity Matrix",
      category: "Matrices",
      symbol: "I",
      definition:
        "A square matrix with ones on the main diagonal and zeros elsewhere.",
      intuition:
        "The identity matrix leaves vectors unchanged.",
      example:
        "I₂ = [[1, 0], [0, 1]].",
      relatedTerms: ["Inverse Matrix", "Square Matrix", "Transformation"],
    },
    {
      id: "diagonal-matrix",
      term: "Diagonal Matrix",
      category: "Matrices",
      definition:
        "A square matrix whose non-diagonal entries are zero.",
      intuition:
        "Diagonal matrices scale coordinate directions independently.",
      example:
        "[[2, 0], [0, 5]] scales x by 2 and y by 5.",
      relatedTerms: ["Eigenvalues", "Diagonalization", "Square Matrix"],
    },
    {
      id: "symmetric-matrix",
      term: "Symmetric Matrix",
      category: "Matrices",
      symbol: "Aᵀ = A",
      definition:
        "A square matrix equal to its transpose.",
      intuition:
        "A symmetric matrix mirrors across its main diagonal.",
      example:
        "[[1, 2], [2, 3]] is symmetric.",
      relatedTerms: ["Transpose", "Orthogonal Diagonalization", "Eigenvectors"],
    },
    {
      id: "transpose",
      term: "Transpose",
      category: "Matrices",
      symbol: "Aᵀ",
      definition:
        "A matrix formed by switching rows and columns.",
      intuition:
        "The transpose reflects matrix entries across the main diagonal.",
      example:
        "The transpose of [[1, 2], [3, 4]] is [[1, 3], [2, 4]].",
      relatedTerms: ["Symmetric Matrix", "Dot Product", "Orthogonality"],
    },
    {
      id: "matrix-addition",
      term: "Matrix Addition",
      category: "Matrices",
      symbol: "A + B",
      definition:
        "The operation of adding corresponding entries of two matrices with equal dimensions.",
      intuition:
        "Matrix addition combines two structures entry by entry.",
      example:
        "[[1, 2]] + [[3, 4]] = [[4, 6]].",
      relatedTerms: ["Matrix", "Scalar Multiplication", "Zero Matrix"],
    },
    {
      id: "matrix-multiplication",
      term: "Matrix Multiplication",
      category: "Matrices",
      symbol: "AB",
      definition:
        "An operation combining rows of the first matrix with columns of the second matrix.",
      intuition:
        "Matrix multiplication represents composition, interaction, and weighted combination.",
      example:
        "A 2 × 3 matrix can multiply a 3 × 4 matrix to produce a 2 × 4 matrix.",
      relatedTerms: ["Composition", "Dot Product", "Transformation"],
    },
    {
      id: "matrix-product-entry",
      term: "Matrix Product Entry",
      category: "Matrices",
      symbol: "(AB)_ij",
      definition:
        "The dot product of row i of A with column j of B.",
      intuition:
        "Every output entry combines one row and one column.",
      example:
        "The top-left entry of AB comes from the first row of A and first column of B.",
      relatedTerms: ["Matrix Multiplication", "Dot Product"],
    },
    {
      id: "commutative",
      term: "Commutative",
      category: "Foundations",
      definition:
        "A property in which changing the order of an operation does not change the result.",
      intuition:
        "Matrix multiplication is usually not commutative.",
      example:
        "In general, AB is not equal to BA.",
      relatedTerms: ["Matrix Multiplication", "Associative", "Distributive"],
    },
    {
      id: "associative",
      term: "Associative",
      category: "Foundations",
      definition:
        "A property in which grouping does not change the result.",
      example:
        "(AB)C = A(BC).",
      relatedTerms: ["Matrix Multiplication", "Commutative"],
    },
    {
      id: "linear-system",
      term: "System of Linear Equations",
      category: "Systems",
      definition:
        "A collection of linear equations that must be satisfied simultaneously.",
      intuition:
        "A linear system represents several interacting constraints.",
      example:
        "x + y = 5 and x - y = 1 form a linear system.",
      relatedTerms: ["Solution Set", "Augmented Matrix", "Gaussian Elimination"],
    },
    {
      id: "solution-set",
      term: "Solution Set",
      category: "Systems",
      definition:
        "The collection of all values that satisfy a system or equation.",
      intuition:
        "A system may have one, none, or infinitely many solutions.",
      relatedTerms: ["Consistent", "Inconsistent", "Free Variable"],
    },
    {
      id: "consistent-system",
      term: "Consistent System",
      category: "Systems",
      definition:
        "A system with at least one solution.",
      relatedTerms: ["Inconsistent System", "Solution Set"],
    },
    {
      id: "inconsistent-system",
      term: "Inconsistent System",
      category: "Systems",
      definition:
        "A system with no solution.",
      intuition:
        "The constraints contradict one another.",
      relatedTerms: ["Consistent System", "Row Reduction"],
    },
    {
      id: "augmented-matrix",
      term: "Augmented Matrix",
      category: "Systems",
      definition:
        "A matrix containing the coefficients and constants of a linear system.",
      intuition:
        "It compresses a system into a form suitable for row operations.",
      relatedTerms: ["Linear System", "Gaussian Elimination", "RREF"],
    },
    {
      id: "elementary-row-operation",
      term: "Elementary Row Operation",
      category: "Systems",
      definition:
        "A valid operation on matrix rows that preserves the solution set.",
      intuition:
        "These operations simplify systems without changing their solutions.",
      example:
        "Swap rows, multiply a row by a nonzero scalar, or add a multiple of one row to another.",
      relatedTerms: ["Gaussian Elimination", "Row Echelon Form"],
    },
    {
      id: "row-echelon-form",
      term: "Row Echelon Form",
      category: "Systems",
      abbreviation: "REF",
      definition:
        "A simplified matrix form in which pivot positions move to the right as rows move downward.",
      relatedTerms: ["RREF", "Pivot", "Gaussian Elimination"],
    },
    {
      id: "reduced-row-echelon-form",
      term: "Reduced Row-Echelon Form",
      category: "Systems",
      abbreviation: "RREF",
      definition:
        "A row-echelon matrix in which every pivot equals 1 and is the only nonzero entry in its column.",
      intuition:
        "RREF makes the solution structure immediately visible.",
      relatedTerms: ["Pivot", "Free Variable", "Gaussian Elimination"],
    },
    {
      id: "pivot",
      term: "Pivot",
      category: "Systems",
      definition:
        "A leading nonzero entry used to organize row reduction and identify basic variables.",
      relatedTerms: ["Pivot Column", "Free Variable", "Rank"],
    },
    {
      id: "free-variable",
      term: "Free Variable",
      category: "Systems",
      definition:
        "A variable not associated with a pivot column.",
      intuition:
        "Free variables generate families of solutions.",
      relatedTerms: ["Pivot Variable", "Solution Set", "Null Space"],
    },
    {
      id: "gaussian-elimination",
      term: "Gaussian Elimination",
      category: "Systems",
      definition:
        "A systematic method of using row operations to solve linear systems.",
      relatedTerms: ["Augmented Matrix", "RREF", "Pivot"],
    },
    {
      id: "determinant",
      term: "Determinant",
      category: "Determinants",
      symbol: "det(A)",
      definition:
        "A scalar associated with a square matrix that measures signed scaling and indicates invertibility.",
      intuition:
        "The determinant tells how a transformation changes area or volume.",
      example:
        "A determinant of zero means the transformation collapses dimension.",
      relatedTerms: ["Invertibility", "Singular Matrix", "Orientation"],
    },
    {
      id: "singular-matrix",
      term: "Singular Matrix",
      category: "Determinants",
      definition:
        "A square matrix with determinant zero and no inverse.",
      intuition:
        "A singular transformation loses information or collapses space.",
      relatedTerms: ["Determinant", "Inverse Matrix", "Rank"],
    },
    {
      id: "invertible-matrix",
      term: "Invertible Matrix",
      category: "Determinants",
      definition:
        "A square matrix that has an inverse.",
      intuition:
        "An invertible transformation can be completely reversed.",
      relatedTerms: ["Inverse Matrix", "Determinant", "Identity Matrix"],
    },
    {
      id: "inverse-matrix",
      term: "Inverse Matrix",
      category: "Matrices",
      symbol: "A⁻¹",
      definition:
        "A matrix that reverses the action of another matrix.",
      example:
        "AA⁻¹ = I.",
      relatedTerms: ["Identity Matrix", "Invertible Matrix", "Determinant"],
    },
    {
      id: "orientation",
      term: "Orientation",
      category: "Determinants",
      definition:
        "The directional ordering of a coordinate system or transformed shape.",
      intuition:
        "A negative determinant reverses orientation.",
      relatedTerms: ["Determinant", "Reflection", "Signed Area"],
    },
    {
      id: "linear-combination",
      term: "Linear Combination",
      category: "Vector Spaces",
      definition:
        "A sum of vectors multiplied by scalars.",
      example:
        "3u - 2v is a linear combination of u and v.",
      relatedTerms: ["Span", "Basis", "Linear Independence"],
    },
    {
      id: "span",
      term: "Span",
      category: "Vector Spaces",
      definition:
        "The set of all linear combinations of a collection of vectors.",
      intuition:
        "Span describes everything those vectors can generate.",
      relatedTerms: ["Linear Combination", "Basis", "Subspace"],
    },
    {
      id: "vector-space",
      term: "Vector Space",
      category: "Vector Spaces",
      definition:
        "A set of objects that can be added and scaled while satisfying vector-space properties.",
      intuition:
        "A vector space generalizes familiar coordinate vectors.",
      relatedTerms: ["Subspace", "Basis", "Dimension"],
    },
    {
      id: "subspace",
      term: "Subspace",
      category: "Vector Spaces",
      definition:
        "A subset of a vector space that is itself a vector space.",
      intuition:
        "A subspace is a smaller space closed under addition and scaling.",
      relatedTerms: ["Vector Space", "Span", "Null Space"],
    },
    {
      id: "linear-independence",
      term: "Linear Independence",
      category: "Vector Spaces",
      definition:
        "A property in which no vector in a set can be formed from the others.",
      intuition:
        "Independent vectors contain no redundancy.",
      relatedTerms: ["Basis", "Span", "Rank"],
    },
    {
      id: "linear-dependence",
      term: "Linear Dependence",
      category: "Vector Spaces",
      definition:
        "A property in which at least one vector can be expressed as a combination of others.",
      intuition:
        "Dependent vectors contain redundancy.",
      relatedTerms: ["Linear Independence", "Basis", "Determinant"],
    },
    {
      id: "basis",
      term: "Basis",
      category: "Vector Spaces",
      definition:
        "A linearly independent set of vectors that spans a vector space.",
      intuition:
        "A basis is an efficient coordinate system for a space.",
      relatedTerms: ["Dimension", "Span", "Linear Independence"],
    },
    {
      id: "dimension",
      term: "Dimension",
      category: "Vector Spaces",
      definition:
        "The number of vectors in a basis for a vector space.",
      intuition:
        "Dimension counts independent directions.",
      relatedTerms: ["Basis", "Rank", "Vector Space"],
    },
    {
      id: "column-space",
      term: "Column Space",
      category: "Vector Spaces",
      definition:
        "The span of the columns of a matrix.",
      intuition:
        "The column space contains all possible outputs of the matrix transformation.",
      relatedTerms: ["Image", "Rank", "Linear Transformation"],
    },
    {
      id: "row-space",
      term: "Row Space",
      category: "Vector Spaces",
      definition:
        "The span of the rows of a matrix.",
      relatedTerms: ["Column Space", "Rank", "RREF"],
    },
    {
      id: "null-space",
      term: "Null Space",
      category: "Vector Spaces",
      definition:
        "The set of all vectors mapped to the zero vector by a matrix.",
      symbol: "N(A)",
      intuition:
        "The null space describes information lost by a transformation.",
      relatedTerms: ["Kernel", "Free Variable", "Rank-Nullity"],
    },
    {
      id: "rank",
      term: "Rank",
      category: "Vector Spaces",
      definition:
        "The dimension of the column space or row space of a matrix.",
      intuition:
        "Rank measures how much independent information a matrix contains.",
      relatedTerms: ["Column Space", "Dimension", "Nullity"],
    },
    {
      id: "nullity",
      term: "Nullity",
      category: "Vector Spaces",
      definition:
        "The dimension of the null space of a matrix.",
      relatedTerms: ["Null Space", "Rank", "Rank-Nullity Theorem"],
    },
    {
      id: "rank-nullity-theorem",
      term: "Rank-Nullity Theorem",
      category: "Vector Spaces",
      definition:
        "A theorem stating that rank plus nullity equals the number of columns of a matrix.",
      relatedTerms: ["Rank", "Nullity", "Linear Transformation"],
    },
    {
      id: "linear-transformation",
      term: "Linear Transformation",
      category: "Transformations",
      symbol: "T",
      definition:
        "A mapping that preserves vector addition and scalar multiplication.",
      intuition:
        "A linear transformation moves vectors without bending the structure of space.",
      relatedTerms: ["Matrix Representation", "Kernel", "Image"],
    },
    {
      id: "kernel",
      term: "Kernel",
      category: "Transformations",
      definition:
        "The set of all inputs mapped to the zero vector by a transformation.",
      intuition:
        "The kernel shows what information disappears.",
      relatedTerms: ["Null Space", "Linear Transformation", "Injective"],
    },
    {
      id: "image",
      term: "Image",
      category: "Transformations",
      definition:
        "The set of all possible outputs of a transformation.",
      intuition:
        "The image shows what the transformation can produce.",
      relatedTerms: ["Column Space", "Range", "Linear Transformation"],
    },
    {
      id: "rotation",
      term: "Rotation",
      category: "Transformations",
      definition:
        "A transformation that turns vectors around the origin by an angle.",
      relatedTerms: ["Transformation Matrix", "Orthogonal Matrix", "Angle"],
    },
    {
      id: "reflection",
      term: "Reflection",
      category: "Transformations",
      definition:
        "A transformation that mirrors vectors across a line or plane.",
      relatedTerms: ["Orientation", "Orthogonal Matrix", "Determinant"],
    },
    {
      id: "shear",
      term: "Shear",
      category: "Transformations",
      definition:
        "A transformation that shifts one coordinate in proportion to another.",
      intuition:
        "A shear slants shapes without rotating them uniformly.",
      relatedTerms: ["Linear Transformation", "Matrix"],
    },
    {
      id: "projection",
      term: "Projection",
      category: "Orthogonality",
      definition:
        "A transformation that maps a vector onto a line or subspace.",
      intuition:
        "Projection finds the closest component inside a chosen direction or space.",
      relatedTerms: ["Orthogonality", "Residual", "Least Squares"],
    },
    {
      id: "eigenvector",
      term: "Eigenvector",
      category: "Eigenvalues",
      symbol: "v",
      definition:
        "A nonzero vector whose direction is unchanged by a linear transformation.",
      intuition:
        "An eigenvector points along a stable direction.",
      relatedTerms: ["Eigenvalue", "Eigenspace", "Diagonalization"],
    },
    {
      id: "eigenvalue",
      term: "Eigenvalue",
      category: "Eigenvalues",
      symbol: "λ",
      definition:
        "The scalar by which an eigenvector is stretched, compressed, or reversed.",
      relatedTerms: ["Eigenvector", "Characteristic Polynomial", "Diagonalization"],
    },
    {
      id: "eigenvalue-equation",
      term: "Eigenvalue Equation",
      category: "Eigenvalues",
      symbol: "Av = λv",
      definition:
        "The equation defining an eigenvector and its eigenvalue.",
      relatedTerms: ["Eigenvector", "Eigenvalue", "Eigenspace"],
    },
    {
      id: "characteristic-polynomial",
      term: "Characteristic Polynomial",
      category: "Eigenvalues",
      definition:
        "The polynomial obtained from det(A - λI).",
      intuition:
        "Its roots are the eigenvalues of the matrix.",
      relatedTerms: ["Eigenvalue", "Determinant", "Characteristic Equation"],
    },
    {
      id: "eigenspace",
      term: "Eigenspace",
      category: "Eigenvalues",
      definition:
        "The set of all eigenvectors associated with one eigenvalue, together with the zero vector.",
      relatedTerms: ["Eigenvector", "Subspace", "Null Space"],
    },
    {
      id: "diagonalization",
      term: "Diagonalization",
      category: "Eigenvalues",
      definition:
        "The process of representing a matrix as PDP⁻¹, where D is diagonal.",
      intuition:
        "Diagonalization expresses a transformation using eigenvector coordinates.",
      relatedTerms: ["Eigenvalues", "Eigenvectors", "Diagonal Matrix"],
    },
    {
      id: "orthonormal",
      term: "Orthonormal",
      category: "Orthogonality",
      definition:
        "A set of vectors that are mutually orthogonal and each have magnitude 1.",
      relatedTerms: ["Orthogonal", "Unit Vector", "Basis"],
    },
    {
      id: "orthogonal-complement",
      term: "Orthogonal Complement",
      category: "Orthogonality",
      definition:
        "The set of all vectors perpendicular to every vector in a given subspace.",
      relatedTerms: ["Subspace", "Projection", "Null Space"],
    },
    {
      id: "gram-schmidt",
      term: "Gram-Schmidt Process",
      category: "Orthogonality",
      definition:
        "A method for converting linearly independent vectors into an orthonormal basis.",
      relatedTerms: ["Orthonormal Basis", "Projection", "QR Factorization"],
    },
    {
      id: "residual",
      term: "Residual",
      category: "Least Squares",
      definition:
        "The difference between an observed value and its approximation or prediction.",
      intuition:
        "A residual measures what the model failed to explain.",
      relatedTerms: ["Least Squares", "Projection", "Error"],
    },
    {
      id: "least-squares",
      term: "Least Squares",
      category: "Least Squares",
      definition:
        "A method for finding the best approximate solution by minimizing squared error.",
      intuition:
        "Least squares finds the closest possible fit when exact agreement is impossible.",
      relatedTerms: ["Projection", "Residual", "Regression"],
    },
    {
      id: "normal-equations",
      term: "Normal Equations",
      category: "Least Squares",
      symbol: "AᵀAx = Aᵀb",
      definition:
        "A system used to calculate a least-squares solution.",
      relatedTerms: ["Least Squares", "Projection", "Transpose"],
    },
    {
      id: "regression",
      term: "Regression",
      category: "Least Squares",
      definition:
        "A method for modeling relationships between variables.",
      intuition:
        "Linear regression uses least squares to fit a line or model.",
      relatedTerms: ["Least Squares", "Residual", "Prediction"],
    },
    {
      id: "singular-value-decomposition",
      term: "Singular Value Decomposition",
      abbreviation: "SVD",
      category: "SVD",
      symbol: "A = UΣVᵀ",
      definition:
        "A factorization that decomposes any matrix into orthogonal directions and scaling values.",
      intuition:
        "SVD explains a matrix as rotation, scaling, and rotation.",
      relatedTerms: ["Singular Value", "Low-Rank Approximation", "PCA"],
    },
    {
      id: "singular-value",
      term: "Singular Value",
      category: "SVD",
      definition:
        "A nonnegative scaling factor in singular value decomposition.",
      intuition:
        "Large singular values represent important directions in the data.",
      relatedTerms: ["SVD", "Rank", "Low-Rank Approximation"],
    },
    {
      id: "low-rank-approximation",
      term: "Low-Rank Approximation",
      category: "SVD",
      definition:
        "An approximation of a matrix using only its most important singular components.",
      intuition:
        "It keeps major structure while discarding less important detail.",
      relatedTerms: ["SVD", "Compression", "Dimensionality Reduction"],
    },
    {
      id: "condition-number",
      term: "Condition Number",
      category: "Numerical Methods",
      definition:
        "A measure of how sensitive a problem is to small changes in input.",
      intuition:
        "A large condition number means small errors can strongly affect the answer.",
      relatedTerms: ["Conditioning", "Numerical Stability", "Singular Values"],
    },
    {
      id: "numerical-stability",
      term: "Numerical Stability",
      category: "Numerical Methods",
      definition:
        "The ability of an algorithm to control error during computation.",
      relatedTerms: ["Floating-Point Error", "Condition Number", "Algorithm"],
    },
    {
      id: "floating-point-error",
      term: "Floating-Point Error",
      category: "Numerical Methods",
      definition:
        "Error created because computers represent real numbers with limited precision.",
      relatedTerms: ["Numerical Stability", "Rounding Error", "Conditioning"],
    },
    {
      id: "lu-factorization",
      term: "LU Factorization",
      category: "Numerical Methods",
      symbol: "A = LU",
      definition:
        "A decomposition of a matrix into lower- and upper-triangular matrices.",
      relatedTerms: ["Linear Systems", "Factorization", "Numerical Methods"],
    },
    {
      id: "qr-factorization",
      term: "QR Factorization",
      category: "Numerical Methods",
      symbol: "A = QR",
      definition:
        "A decomposition into an orthogonal matrix Q and upper-triangular matrix R.",
      relatedTerms: ["Gram-Schmidt", "Least Squares", "Orthogonality"],
    },
    {
      id: "sparse-matrix",
      term: "Sparse Matrix",
      category: "Numerical Methods",
      definition:
        "A matrix in which most entries are zero.",
      intuition:
        "Sparse matrices can often be stored and processed very efficiently.",
      relatedTerms: ["Numerical Computing", "Large Systems", "Graphs"],
    },
    {
      id: "embedding",
      term: "Embedding",
      category: "Artificial Intelligence",
      definition:
        "A vector representation of an object such as a word, image, product, or user.",
      intuition:
        "Embeddings place similar objects near one another in vector space.",
      relatedTerms: ["Vector", "Cosine Similarity", "Latent Space"],
    },
    {
      id: "feature-vector",
      term: "Feature Vector",
      category: "Artificial Intelligence",
      definition:
        "A vector containing measurable characteristics of one observation.",
      example:
        "Age, income, credit score, and debt may form a customer feature vector.",
      relatedTerms: ["Vector", "Dataset", "Machine Learning"],
    },
    {
      id: "weight-matrix",
      term: "Weight Matrix",
      category: "Artificial Intelligence",
      definition:
        "A matrix of learnable parameters used in a neural-network layer.",
      intuition:
        "The weight matrix controls how inputs are combined and transformed.",
      relatedTerms: ["Neural Network", "Matrix Multiplication", "Bias"],
    },
    {
      id: "bias-vector",
      term: "Bias Vector",
      category: "Artificial Intelligence",
      definition:
        "A learnable vector added to a matrix transformation in a neural layer.",
      relatedTerms: ["Weight Matrix", "Affine Transformation", "Neural Network"],
    },
    {
      id: "affine-transformation",
      term: "Affine Transformation",
      category: "Artificial Intelligence",
      symbol: "Ax + b",
      definition:
        "A linear transformation followed by a translation.",
      intuition:
        "Many neural-network layers compute an affine transformation before applying an activation function.",
      relatedTerms: ["Linear Transformation", "Weight Matrix", "Bias Vector"],
    },
    {
      id: "principal-component-analysis",
      term: "Principal Component Analysis",
      abbreviation: "PCA",
      category: "Artificial Intelligence",
      definition:
        "A dimensionality-reduction method that identifies directions of greatest variation.",
      intuition:
        "PCA compresses data while preserving important structure.",
      relatedTerms: ["Eigenvectors", "SVD", "Dimensionality Reduction"],
    },
    {
      id: "dimensionality-reduction",
      term: "Dimensionality Reduction",
      category: "Artificial Intelligence",
      definition:
        "The process of representing data using fewer variables while preserving useful information.",
      relatedTerms: ["PCA", "SVD", "Low-Rank Approximation"],
    },
    {
      id: "tensor",
      term: "Tensor",
      category: "Artificial Intelligence",
      definition:
        "A multidimensional array that generalizes scalars, vectors, and matrices.",
      intuition:
        "A scalar is 0D, a vector is 1D, a matrix is 2D, and tensors extend to higher dimensions.",
      relatedTerms: ["Vector", "Matrix", "Deep Learning"],
    },
    {
      id: "latent-space",
      term: "Latent Space",
      category: "Artificial Intelligence",
      definition:
        "A learned lower-dimensional representation of hidden structure in data.",
      relatedTerms: ["Embedding", "SVD", "PCA"],
    },
  ],
};

export function getGlossaryTermById(id) {
  return linearAlgebraGlossary.terms.find((item) => item.id === id);
}

export function getGlossaryTermsByCategory(category) {
  return linearAlgebraGlossary.terms.filter(
    (item) => item.category === category
  );
}

export function searchLinearAlgebraGlossary(query) {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    return linearAlgebraGlossary.terms;
  }

  return linearAlgebraGlossary.terms.filter((item) => {
    const searchableText = [
      item.term,
      item.category,
      item.definition,
      item.intuition,
      item.example,
      ...(item.relatedTerms || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(cleanQuery);
  });
}

export default linearAlgebraGlossary;