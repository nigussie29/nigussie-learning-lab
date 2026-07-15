const linearAlgebraFormulas = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Formula Library",

  description:
    "A structured reference of essential Linear Algebra formulas with meaning, interpretation, examples, and module connections.",

  categories: [
    "Vectors",
    "Matrices",
    "Systems",
    "Determinants",
    "Vector Spaces",
    "Transformations",
    "Eigenvalues",
    "Orthogonality",
    "Least Squares",
    "Singular Value Decomposition",
    "Numerical Methods",
    "Artificial Intelligence",
  ],

  formulas: [
    {
      id: "vector-magnitude",
      category: "Vectors",
      moduleNumbers: [1],
      name: "Vector Magnitude",
      formula: "||v|| = sqrt(v1^2 + v2^2 + ... + vn^2)",

      meaning:
        "Measures the length or size of a vector.",

      intuition:
        "Magnitude is the distance from the origin to the endpoint of the vector.",

      variables: [
        {
          symbol: "v",
          meaning: "The vector",
        },
        {
          symbol: "vi",
          meaning: "The ith component of the vector",
        },
      ],

      example:
        "For v = [3, 4], ||v|| = sqrt(3^2 + 4^2) = 5.",

      applications: [
        "Distance",
        "Velocity",
        "Force",
        "Normalization",
        "Machine-learning feature scaling",
      ],

      relatedFormulaIds: [
        "unit-vector",
        "dot-product",
        "cosine-similarity",
      ],
    },

    {
      id: "unit-vector",
      category: "Vectors",
      moduleNumbers: [1],
      name: "Unit Vector",
      formula: "u = v / ||v||",

      meaning:
        "Creates a vector with magnitude 1 in the same direction as a nonzero vector.",

      intuition:
        "A unit vector keeps direction and removes the original size.",

      variables: [
        {
          symbol: "u",
          meaning: "The normalized unit vector",
        },
        {
          symbol: "v",
          meaning: "The original nonzero vector",
        },
      ],

      example:
        "For v = [3, 4], u = [3/5, 4/5].",

      applications: [
        "Direction representation",
        "Computer graphics",
        "Robotics",
        "Physics",
        "Cosine similarity",
      ],

      warnings: [
        "The zero vector cannot be normalized.",
      ],

      relatedFormulaIds: [
        "vector-magnitude",
        "cosine-similarity",
      ],
    },

    {
      id: "vector-addition",
      category: "Vectors",
      moduleNumbers: [1],
      name: "Vector Addition",
      formula:
        "u + v = [u1 + v1, u2 + v2, ..., un + vn]",

      meaning:
        "Combines two vectors by adding corresponding components.",

      intuition:
        "Vector addition combines movements, forces, or feature changes.",

      example:
        "[1, 2] + [3, 4] = [4, 6].",

      applications: [
        "Displacement",
        "Force combination",
        "Motion",
        "Data updates",
      ],

      relatedFormulaIds: [
        "scalar-multiplication",
        "linear-combination",
      ],
    },

    {
      id: "scalar-multiplication",
      category: "Vectors",
      moduleNumbers: [1],
      name: "Scalar Multiplication",
      formula:
        "cv = [cv1, cv2, ..., cvn]",

      meaning:
        "Multiplies every component of a vector by the same scalar.",

      intuition:
        "The scalar stretches, shrinks, or reverses the vector.",

      example:
        "2[1, -3] = [2, -6].",

      applications: [
        "Scaling",
        "Velocity change",
        "Weighted combinations",
        "Linear combinations",
      ],

      relatedFormulaIds: [
        "vector-addition",
        "linear-combination",
      ],
    },

    {
      id: "dot-product",
      category: "Vectors",
      moduleNumbers: [1, 8, 12],
      name: "Dot Product",
      formula:
        "u · v = u1v1 + u2v2 + ... + unvn",

      meaning:
        "Produces a scalar that measures alignment between two vectors.",

      intuition:
        "The dot product is large and positive when vectors point similarly, zero when perpendicular, and negative when they point in opposite directions.",

      example:
        "[1, 2] · [3, 4] = 1(3) + 2(4) = 11.",

      applications: [
        "Work in physics",
        "Projection",
        "Orthogonality",
        "Cosine similarity",
        "Neural-network computation",
      ],

      relatedFormulaIds: [
        "cosine-similarity",
        "vector-projection",
        "orthogonality-condition",
      ],
    },

    {
      id: "cosine-similarity",
      category: "Artificial Intelligence",
      moduleNumbers: [1, 12],
      name: "Cosine Similarity",
      formula:
        "cos(theta) = (u · v) / (||u|| ||v||)",

      meaning:
        "Measures directional similarity between two nonzero vectors.",

      intuition:
        "It compares angle rather than raw magnitude.",

      range:
        "From -1 to 1",

      interpretation: [
        {
          value: "1",
          meaning: "Same direction",
        },
        {
          value: "0",
          meaning: "Orthogonal or unrelated direction",
        },
        {
          value: "-1",
          meaning: "Opposite direction",
        },
      ],

      applications: [
        "Document similarity",
        "Embeddings",
        "Recommendation systems",
        "Semantic search",
        "Image comparison",
      ],

      warnings: [
        "Both vectors must be nonzero.",
      ],

      relatedFormulaIds: [
        "dot-product",
        "vector-magnitude",
        "unit-vector",
      ],
    },

    {
      id: "matrix-addition",
      category: "Matrices",
      moduleNumbers: [2],
      name: "Matrix Addition",
      formula:
        "(A + B)ij = Aij + Bij",

      meaning:
        "Adds matrices entry by entry.",

      requirement:
        "Matrices must have the same dimensions.",

      example:
        "[[1, 2], [3, 4]] + [[5, 6], [7, 8]] = [[6, 8], [10, 12]].",

      applications: [
        "Combining datasets",
        "Adding transformations",
        "Updating model parameters",
      ],

      relatedFormulaIds: [
        "matrix-scalar-multiplication",
        "matrix-multiplication",
      ],
    },

    {
      id: "matrix-scalar-multiplication",
      category: "Matrices",
      moduleNumbers: [2],
      name: "Matrix Scalar Multiplication",
      formula:
        "(cA)ij = cAij",

      meaning:
        "Multiplies every entry of a matrix by one scalar.",

      example:
        "2[[1, 2], [3, 4]] = [[2, 4], [6, 8]].",

      applications: [
        "Scaling transformations",
        "Weighted models",
        "Parameter updates",
      ],

      relatedFormulaIds: [
        "matrix-addition",
        "matrix-multiplication",
      ],
    },

    {
      id: "matrix-transpose",
      category: "Matrices",
      moduleNumbers: [2],
      name: "Matrix Transpose",
      formula:
        "(A^T)ij = Aji",

      meaning:
        "Creates a new matrix by switching rows and columns.",

      intuition:
        "The matrix is reflected across its main diagonal.",

      example:
        "If A = [[1, 2], [3, 4]], then A^T = [[1, 3], [2, 4]].",

      applications: [
        "Dot products",
        "Least squares",
        "Symmetric matrices",
        "Neural-network calculations",
      ],

      relatedFormulaIds: [
        "normal-equations",
        "symmetric-matrix-condition",
      ],
    },

    {
      id: "matrix-multiplication",
      category: "Matrices",
      moduleNumbers: [2, 6, 12],
      name: "Matrix Multiplication",
      formula:
        "(AB)ij = sum over k of AikBkj",

      meaning:
        "Combines rows of the first matrix with columns of the second matrix.",

      requirement:
        "The number of columns of A must equal the number of rows of B.",

      outputDimensions:
        "If A is m × n and B is n × p, then AB is m × p.",

      intuition:
        "Matrix multiplication combines transformations, relationships, or weighted features.",

      applications: [
        "Composition of transformations",
        "Neural networks",
        "Computer graphics",
        "Scientific computing",
        "Data transformation",
      ],

      warnings: [
        "Matrix multiplication is generally not commutative.",
        "AB and BA may have different values or one may be undefined.",
      ],

      relatedFormulaIds: [
        "matrix-vector-product",
        "transformation-composition",
        "neural-layer",
      ],
    },

    {
      id: "matrix-vector-product",
      category: "Matrices",
      moduleNumbers: [2, 6, 12],
      name: "Matrix-Vector Product",
      formula:
        "y = Ax",

      meaning:
        "Transforms an input vector into an output vector.",

      intuition:
        "Each output component is a weighted combination of input components.",

      applications: [
        "Linear transformations",
        "Neural-network layers",
        "Coordinate changes",
        "Systems of equations",
      ],

      relatedFormulaIds: [
        "matrix-multiplication",
        "linear-transformation",
        "neural-layer",
      ],
    },

    {
      id: "linear-system-matrix-form",
      category: "Systems",
      moduleNumbers: [3],
      name: "Matrix Form of a Linear System",
      formula:
        "Ax = b",

      meaning:
        "Represents a system of linear equations using a coefficient matrix, unknown vector, and constant vector.",

      variables: [
        {
          symbol: "A",
          meaning: "Coefficient matrix",
        },
        {
          symbol: "x",
          meaning: "Unknown vector",
        },
        {
          symbol: "b",
          meaning: "Constant vector",
        },
      ],

      applications: [
        "Engineering systems",
        "Economics",
        "Networks",
        "Optimization",
        "Scientific models",
      ],

      relatedFormulaIds: [
        "inverse-solution",
        "least-squares-solution",
      ],
    },

    {
      id: "inverse-solution",
      category: "Systems",
      moduleNumbers: [3, 4],
      name: "Inverse-Matrix Solution",
      formula:
        "x = A^-1 b",

      meaning:
        "Solves a square linear system when the matrix is invertible.",

      requirement:
        "A must be square and invertible.",

      warnings: [
        "Computing an inverse directly is often less efficient and less stable than solving the system numerically.",
      ],

      applications: [
        "Theoretical system solving",
        "Transformation reversal",
      ],

      relatedFormulaIds: [
        "linear-system-matrix-form",
        "matrix-inverse",
      ],
    },

    {
      id: "two-by-two-determinant",
      category: "Determinants",
      moduleNumbers: [4],
      name: "Determinant of a 2×2 Matrix",
      formula:
        "det([[a, b], [c, d]]) = ad - bc",

      meaning:
        "Measures signed area scaling and determines invertibility.",

      interpretation: [
        {
          condition: "det(A) > 0",
          meaning: "Orientation is preserved",
        },
        {
          condition: "det(A) < 0",
          meaning: "Orientation is reversed",
        },
        {
          condition: "det(A) = 0",
          meaning: "Dimension is collapsed and A is singular",
        },
      ],

      applications: [
        "Area scaling",
        "Invertibility",
        "Orientation",
        "Change of variables",
      ],

      relatedFormulaIds: [
        "matrix-inverse",
        "characteristic-equation",
      ],
    },

    {
      id: "matrix-inverse",
      category: "Determinants",
      moduleNumbers: [4],
      name: "Inverse of a 2×2 Matrix",
      formula:
        "A^-1 = (1 / det(A)) [[d, -b], [-c, a]]",

      requirement:
        "det(A) must not equal zero.",

      meaning:
        "Produces a matrix that reverses the action of A.",

      identity:
        "AA^-1 = A^-1A = I",

      relatedFormulaIds: [
        "two-by-two-determinant",
        "inverse-solution",
      ],
    },

    {
      id: "determinant-product",
      category: "Determinants",
      moduleNumbers: [4],
      name: "Determinant of a Product",
      formula:
        "det(AB) = det(A)det(B)",

      meaning:
        "The scaling factors of composed transformations multiply.",

      applications: [
        "Transformation composition",
        "Invertibility",
        "Geometric scaling",
      ],

      relatedFormulaIds: [
        "matrix-multiplication",
        "two-by-two-determinant",
      ],
    },

    {
      id: "linear-combination",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Linear Combination",
      formula:
        "w = c1v1 + c2v2 + ... + ckvk",

      meaning:
        "Builds a new vector using scaled sums of existing vectors.",

      intuition:
        "Linear combinations describe everything a set of vectors can generate.",

      applications: [
        "Span",
        "Basis",
        "Coordinate representation",
        "Feature combinations",
      ],

      relatedFormulaIds: [
        "span-definition",
        "basis-coordinate-representation",
      ],
    },

    {
      id: "span-definition",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Span",
      formula:
        "span(v1, ..., vk) = {c1v1 + ... + ckvk}",

      meaning:
        "The set of every possible linear combination of the listed vectors.",

      intuition:
        "Span describes the entire space generated by the vectors.",

      relatedFormulaIds: [
        "linear-combination",
        "linear-independence-condition",
      ],
    },

    {
      id: "linear-independence-condition",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Linear Independence Condition",
      formula:
        "c1v1 + ... + ckvk = 0 implies c1 = ... = ck = 0",

      meaning:
        "The vectors are independent when the zero vector can be formed only by using all zero coefficients.",

      intuition:
        "Independent vectors contain no redundancy.",

      relatedFormulaIds: [
        "span-definition",
        "basis-definition",
      ],
    },

    {
      id: "basis-definition",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Basis Condition",
      formula:
        "A basis is linearly independent and spans the space.",

      meaning:
        "A basis is an efficient set of vectors that generates the entire space without redundancy.",

      applications: [
        "Coordinate systems",
        "Compression",
        "Feature spaces",
        "Change of basis",
      ],

      relatedFormulaIds: [
        "linear-independence-condition",
        "basis-coordinate-representation",
      ],
    },

    {
      id: "basis-coordinate-representation",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Coordinates Relative to a Basis",
      formula:
        "v = c1b1 + c2b2 + ... + cnbn",

      meaning:
        "Represents a vector using coefficients relative to basis vectors.",

      relatedFormulaIds: [
        "basis-definition",
        "change-of-basis",
      ],
    },

    {
      id: "rank-nullity",
      category: "Vector Spaces",
      moduleNumbers: [5],
      name: "Rank-Nullity Theorem",
      formula:
        "rank(A) + nullity(A) = number of columns of A",

      meaning:
        "Splits the input dimension into directions preserved by the transformation and directions mapped to zero.",

      applications: [
        "System solution structure",
        "Information loss",
        "Dimensional analysis",
      ],

      relatedFormulaIds: [
        "linear-transformation",
        "null-space-definition",
      ],
    },

    {
      id: "linear-transformation",
      category: "Transformations",
      moduleNumbers: [6],
      name: "Linearity Conditions",
      formula:
        "T(u + v) = T(u) + T(v) and T(cu) = cT(u)",

      meaning:
        "Defines a transformation that preserves addition and scalar multiplication.",

      applications: [
        "Geometry",
        "Robotics",
        "Graphics",
        "Computer vision",
        "AI",
      ],

      relatedFormulaIds: [
        "matrix-vector-product",
        "transformation-composition",
      ],
    },

    {
      id: "rotation-matrix",
      category: "Transformations",
      moduleNumbers: [6],
      name: "Two-Dimensional Rotation Matrix",
      formula:
        "R(theta) = [[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]",

      meaning:
        "Rotates vectors counterclockwise by angle theta.",

      properties: [
        "Preserves length",
        "Preserves angles",
        "Determinant equals 1",
      ],

      applications: [
        "Robotics",
        "Graphics",
        "Animation",
        "Coordinate transformation",
      ],

      relatedFormulaIds: [
        "linear-transformation",
        "orthogonal-matrix-condition",
      ],
    },

    {
      id: "scaling-matrix",
      category: "Transformations",
      moduleNumbers: [6],
      name: "Two-Dimensional Scaling Matrix",
      formula:
        "S = [[sx, 0], [0, sy]]",

      meaning:
        "Scales the x- and y-directions independently.",

      relatedFormulaIds: [
        "two-by-two-determinant",
        "linear-transformation",
      ],
    },

    {
      id: "shear-matrix",
      category: "Transformations",
      moduleNumbers: [6],
      name: "Horizontal Shear Matrix",
      formula:
        "H = [[1, k], [0, 1]]",

      meaning:
        "Shifts the x-coordinate in proportion to the y-coordinate.",

      relatedFormulaIds: [
        "linear-transformation",
        "matrix-multiplication",
      ],
    },

    {
      id: "transformation-composition",
      category: "Transformations",
      moduleNumbers: [6],
      name: "Composition of Transformations",
      formula:
        "(T2 composed with T1)(x) = T2(T1(x))",

      matrixForm:
        "If T1(x) = Ax and T2(x) = Bx, then T2(T1(x)) = BAx.",

      meaning:
        "Sequential transformations correspond to matrix multiplication.",

      warning:
        "Order matters. BA usually does not equal AB.",

      relatedFormulaIds: [
        "matrix-multiplication",
        "linear-transformation",
      ],
    },

    {
      id: "null-space-definition",
      category: "Transformations",
      moduleNumbers: [5, 6],
      name: "Null Space",
      formula:
        "N(A) = {x : Ax = 0}",

      meaning:
        "Contains all input vectors mapped to the zero vector.",

      intuition:
        "The null space represents information lost by the transformation.",

      relatedFormulaIds: [
        "rank-nullity",
        "linear-system-matrix-form",
      ],
    },

    {
      id: "eigenvalue-equation",
      category: "Eigenvalues",
      moduleNumbers: [7],
      name: "Eigenvalue Equation",
      formula:
        "Av = lambda v",

      meaning:
        "An eigenvector keeps its direction under the transformation and is scaled by the eigenvalue.",

      variables: [
        {
          symbol: "A",
          meaning: "Square matrix",
        },
        {
          symbol: "v",
          meaning: "Nonzero eigenvector",
        },
        {
          symbol: "lambda",
          meaning: "Eigenvalue",
        },
      ],

      applications: [
        "PCA",
        "PageRank",
        "Stability",
        "Vibration",
        "Dynamical systems",
      ],

      relatedFormulaIds: [
        "characteristic-equation",
        "diagonalization",
      ],
    },

    {
      id: "characteristic-equation",
      category: "Eigenvalues",
      moduleNumbers: [7],
      name: "Characteristic Equation",
      formula:
        "det(A - lambda I) = 0",

      meaning:
        "Finds eigenvalues of a square matrix.",

      relatedFormulaIds: [
        "eigenvalue-equation",
        "two-by-two-determinant",
      ],
    },

    {
      id: "diagonalization",
      category: "Eigenvalues",
      moduleNumbers: [7],
      name: "Diagonalization",
      formula:
        "A = PDP^-1",

      meaning:
        "Represents a matrix using an eigenvector basis and a diagonal eigenvalue matrix.",

      requirements: [
        "A must have enough linearly independent eigenvectors.",
      ],

      applications: [
        "Repeated transformations",
        "Matrix powers",
        "Dynamical systems",
        "Differential equations",
      ],

      relatedFormulaIds: [
        "eigenvalue-equation",
        "matrix-power-diagonalization",
      ],
    },

    {
      id: "matrix-power-diagonalization",
      category: "Eigenvalues",
      moduleNumbers: [7],
      name: "Matrix Powers Using Diagonalization",
      formula:
        "A^k = PD^kP^-1",

      meaning:
        "Makes repeated matrix multiplication easier when A is diagonalizable.",

      applications: [
        "Long-term system behavior",
        "Population models",
        "Markov processes",
      ],

      relatedFormulaIds: [
        "diagonalization",
        "eigenvalue-equation",
      ],
    },

    {
      id: "orthogonality-condition",
      category: "Orthogonality",
      moduleNumbers: [8],
      name: "Orthogonality Condition",
      formula:
        "u · v = 0",

      meaning:
        "Two vectors are orthogonal when their dot product is zero.",

      applications: [
        "Projection",
        "Basis construction",
        "Signal decomposition",
        "Least squares",
      ],

      relatedFormulaIds: [
        "dot-product",
        "vector-projection",
      ],
    },

    {
      id: "vector-projection",
      category: "Orthogonality",
      moduleNumbers: [8, 9],
      name: "Projection of a onto b",
      formula:
        "proj_b(a) = ((a · b) / (b · b)) b",

      meaning:
        "Finds the component of vector a in the direction of vector b.",

      intuition:
        "Projection gives the closest point on the line generated by b.",

      warnings: [
        "The vector b must be nonzero.",
      ],

      applications: [
        "Least squares",
        "Graphics",
        "Signal processing",
        "Data approximation",
      ],

      relatedFormulaIds: [
        "orthogonality-condition",
        "least-squares-solution",
      ],
    },

    {
      id: "projection-residual",
      category: "Orthogonality",
      moduleNumbers: [8, 9],
      name: "Projection Residual",
      formula:
        "r = a - proj_b(a)",

      meaning:
        "Measures the component of a perpendicular to b.",

      property:
        "r · b = 0",

      relatedFormulaIds: [
        "vector-projection",
        "orthogonality-condition",
      ],
    },

    {
      id: "gram-schmidt",
      category: "Orthogonality",
      moduleNumbers: [8],
      name: "Gram-Schmidt Step",
      formula:
        "u2 = v2 - proj_u1(v2)",

      meaning:
        "Removes from v2 the component in the direction of u1.",

      fullProcess:
        "Repeat projection subtraction and normalization to create an orthonormal basis.",

      applications: [
        "QR factorization",
        "Orthogonal bases",
        "Numerical methods",
      ],

      relatedFormulaIds: [
        "vector-projection",
        "qr-factorization",
      ],
    },

    {
      id: "least-squares-objective",
      category: "Least Squares",
      moduleNumbers: [9],
      name: "Least-Squares Objective",
      formula:
        "minimize ||Ax - b||^2",

      meaning:
        "Finds the vector x that makes Ax as close as possible to b.",

      applications: [
        "Regression",
        "Data fitting",
        "Estimation",
        "Prediction",
      ],

      relatedFormulaIds: [
        "normal-equations",
        "least-squares-solution",
      ],
    },

    {
      id: "normal-equations",
      category: "Least Squares",
      moduleNumbers: [9],
      name: "Normal Equations",
      formula:
        "A^T A x_hat = A^T b",

      meaning:
        "Transforms a least-squares problem into a square system.",

      derivationIdea:
        "The residual b - Ax_hat must be orthogonal to the column space of A.",

      warnings: [
        "Normal equations can worsen numerical conditioning.",
        "QR or SVD methods are often more stable.",
      ],

      relatedFormulaIds: [
        "least-squares-objective",
        "least-squares-solution",
        "qr-factorization",
      ],
    },

    {
      id: "least-squares-solution",
      category: "Least Squares",
      moduleNumbers: [9],
      name: "Least-Squares Solution",
      formula:
        "x_hat = (A^T A)^-1 A^T b",

      requirement:
        "A must have linearly independent columns.",

      meaning:
        "Provides the best-fit coefficient vector under the stated condition.",

      warnings: [
        "Directly computing the inverse is generally not recommended in numerical code.",
      ],

      relatedFormulaIds: [
        "normal-equations",
        "least-squares-objective",
      ],
    },

    {
      id: "svd",
      category: "Singular Value Decomposition",
      moduleNumbers: [10, 12],
      name: "Singular Value Decomposition",
      formula:
        "A = U Sigma V^T",

      meaning:
        "Decomposes any matrix into orthogonal input directions, scaling values, and orthogonal output directions.",

      variables: [
        {
          symbol: "U",
          meaning: "Left singular vectors",
        },
        {
          symbol: "Sigma",
          meaning: "Diagonal matrix of singular values",
        },
        {
          symbol: "V",
          meaning: "Right singular vectors",
        },
      ],

      applications: [
        "Image compression",
        "PCA",
        "Recommendation systems",
        "Denoising",
        "Low-rank approximation",
      ],

      relatedFormulaIds: [
        "rank-k-approximation",
        "svd-reconstruction-error",
      ],
    },

    {
      id: "rank-k-approximation",
      category: "Singular Value Decomposition",
      moduleNumbers: [10],
      name: "Rank-k Approximation",
      formula:
        "Ak = sum from i=1 to k of sigma_i u_i v_i^T",

      meaning:
        "Approximates a matrix using its k most important singular components.",

      intuition:
        "Large singular values preserve dominant structure.",

      applications: [
        "Compression",
        "Noise reduction",
        "Dimensionality reduction",
      ],

      relatedFormulaIds: [
        "svd",
        "svd-reconstruction-error",
      ],
    },

    {
      id: "svd-reconstruction-error",
      category: "Singular Value Decomposition",
      moduleNumbers: [10],
      name: "Frobenius Reconstruction Error",
      formula:
        "||A - Ak||F",

      meaning:
        "Measures total matrix-entry error between the original and approximation.",

      relatedFormulaIds: [
        "rank-k-approximation",
        "frobenius-norm",
      ],
    },

    {
      id: "frobenius-norm",
      category: "Singular Value Decomposition",
      moduleNumbers: [10, 11],
      name: "Frobenius Norm",
      formula:
        "||A||F = sqrt(sum over i,j of Aij^2)",

      meaning:
        "Measures the total size of a matrix using all entries.",

      applications: [
        "Matrix error",
        "Approximation quality",
        "Optimization",
      ],

      relatedFormulaIds: [
        "svd-reconstruction-error",
      ],
    },

    {
      id: "condition-number",
      category: "Numerical Methods",
      moduleNumbers: [11],
      name: "Two-Norm Condition Number",
      formula:
        "kappa(A) = sigma_max / sigma_min",

      meaning:
        "Measures how sensitive a system is to small changes in input.",

      interpretation: [
        {
          condition: "Condition number near 1",
          meaning: "Well-conditioned",
        },
        {
          condition: "Very large condition number",
          meaning: "Potentially sensitive or ill-conditioned",
        },
      ],

      applications: [
        "Numerical reliability",
        "Solver selection",
        "Error analysis",
      ],

      relatedFormulaIds: [
        "relative-error-bound",
        "svd",
      ],
    },

    {
      id: "relative-error-bound",
      category: "Numerical Methods",
      moduleNumbers: [11],
      name: "Relative Error Bound",
      formula:
        "relative solution error is approximately bounded by kappa(A) times relative input error",

      meaning:
        "Explains how conditioning can amplify small input errors.",

      relatedFormulaIds: [
        "condition-number",
      ],
    },

    {
      id: "lu-factorization",
      category: "Numerical Methods",
      moduleNumbers: [11],
      name: "LU Factorization",
      formula:
        "A = LU",

      meaning:
        "Decomposes a matrix into lower- and upper-triangular factors.",

      applications: [
        "Repeated system solving",
        "Determinant calculation",
        "Numerical algorithms",
      ],

      relatedFormulaIds: [
        "linear-system-matrix-form",
        "qr-factorization",
      ],
    },

    {
      id: "qr-factorization",
      category: "Numerical Methods",
      moduleNumbers: [8, 9, 11],
      name: "QR Factorization",
      formula:
        "A = QR",

      meaning:
        "Decomposes a matrix into an orthogonal matrix Q and upper-triangular matrix R.",

      applications: [
        "Least squares",
        "Eigenvalue algorithms",
        "Numerically stable solving",
      ],

      relatedFormulaIds: [
        "gram-schmidt",
        "normal-equations",
      ],
    },

    {
      id: "neural-layer",
      category: "Artificial Intelligence",
      moduleNumbers: [12],
      name: "Dense Neural-Network Layer",
      formula:
        "z = Wx + b",

      meaning:
        "Applies a weighted matrix transformation and adds a bias vector.",

      variables: [
        {
          symbol: "x",
          meaning: "Input feature vector",
        },
        {
          symbol: "W",
          meaning: "Weight matrix",
        },
        {
          symbol: "b",
          meaning: "Bias vector",
        },
        {
          symbol: "z",
          meaning: "Layer output before activation",
        },
      ],

      applications: [
        "Machine learning",
        "Deep learning",
        "Classification",
        "Representation learning",
      ],

      relatedFormulaIds: [
        "matrix-vector-product",
        "affine-transformation",
      ],
    },

    {
      id: "affine-transformation",
      category: "Artificial Intelligence",
      moduleNumbers: [12],
      name: "Affine Transformation",
      formula:
        "T(x) = Ax + b",

      meaning:
        "Combines a linear transformation with a translation.",

      intuition:
        "The matrix transforms shape or features, and the bias shifts the result.",

      applications: [
        "Neural networks",
        "Computer graphics",
        "Coordinate systems",
      ],

      relatedFormulaIds: [
        "neural-layer",
        "linear-transformation",
      ],
    },

    {
      id: "batch-neural-layer",
      category: "Artificial Intelligence",
      moduleNumbers: [12],
      name: "Batch Neural-Layer Computation",
      formula:
        "Z = XW + b",

      meaning:
        "Processes several input observations at the same time.",

      dimensionExample:
        "If X is m × n and W is n × p, then Z is m × p.",

      relatedFormulaIds: [
        "matrix-multiplication",
        "neural-layer",
      ],
    },

    {
      id: "pca-projection",
      category: "Artificial Intelligence",
      moduleNumbers: [7, 10, 12],
      name: "PCA Projection",
      formula:
        "Z = X_centered Wk",

      meaning:
        "Projects centered data onto selected principal directions.",

      variables: [
        {
          symbol: "X_centered",
          meaning: "Mean-centered data matrix",
        },
        {
          symbol: "Wk",
          meaning: "Matrix containing selected principal directions",
        },
        {
          symbol: "Z",
          meaning: "Lower-dimensional representation",
        },
      ],

      applications: [
        "Dimensionality reduction",
        "Visualization",
        "Noise reduction",
        "Feature extraction",
      ],

      relatedFormulaIds: [
        "eigenvalue-equation",
        "svd",
      ],
    },
  ],

  notationReference: [
    {
      symbol: "v",
      meaning: "Vector",
    },
    {
      symbol: "A",
      meaning: "Matrix",
    },
    {
      symbol: "A^T",
      meaning: "Transpose of A",
    },
    {
      symbol: "A^-1",
      meaning: "Inverse of A",
    },
    {
      symbol: "det(A)",
      meaning: "Determinant of A",
    },
    {
      symbol: "||v||",
      meaning: "Vector norm or magnitude",
    },
    {
      symbol: "u · v",
      meaning: "Dot product",
    },
    {
      symbol: "span(v1, ..., vk)",
      meaning: "Span of listed vectors",
    },
    {
      symbol: "N(A)",
      meaning: "Null space of A",
    },
    {
      symbol: "lambda",
      meaning: "Eigenvalue",
    },
    {
      symbol: "Sigma",
      meaning: "Singular-value matrix",
    },
    {
      symbol: "x_hat",
      meaning: "Estimated or least-squares solution",
    },
  ],

  formulaStudyMethod: [
    {
      step: 1,
      title: "Name",
      description:
        "Identify the formula and the mathematical problem it addresses.",
    },
    {
      step: 2,
      title: "Meaning",
      description:
        "Explain what every variable and operation represents.",
    },
    {
      step: 3,
      title: "Derive",
      description:
        "Study or reproduce the derivation when appropriate.",
    },
    {
      step: 4,
      title: "Visualize",
      description:
        "Connect the formula to geometry, data, or transformation.",
    },
    {
      step: 5,
      title: "Calculate",
      description:
        "Complete examples by hand.",
    },
    {
      step: 6,
      title: "Verify",
      description:
        "Check the result using Python or an alternative method.",
    },
    {
      step: 7,
      title: "Apply",
      description:
        "Use the formula in a meaningful context.",
    },
    {
      step: 8,
      title: "Explain",
      description:
        "Teach the formula using clear language and evidence.",
    },
  ],

  lumineryGuidance: {
    message:
      "Do not memorize a formula before understanding the problem it solves and the meaning of every mathematical object inside it.",

    recommendation:
      "For every formula, explain it in words, draw or visualize it, calculate one example, verify it with Python, and identify one application.",
  },
};

export function getFormulaById(id) {
  return linearAlgebraFormulas.formulas.find(
    (formula) => formula.id === id
  );
}

export function getFormulasByCategory(category) {
  return linearAlgebraFormulas.formulas.filter(
    (formula) =>
      formula.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFormulasForModule(moduleNumber) {
  return linearAlgebraFormulas.formulas.filter((formula) =>
    formula.moduleNumbers.includes(Number(moduleNumber))
  );
}

export function searchLinearAlgebraFormulas(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return linearAlgebraFormulas.formulas;
  }

  return linearAlgebraFormulas.formulas.filter((formula) => {
    const searchableContent = [
      formula.name,
      formula.category,
      formula.formula,
      formula.meaning,
      formula.intuition,
      formula.example,
      ...(formula.applications || []),
      ...(formula.relatedFormulaIds || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedQuery);
  });
}

export default linearAlgebraFormulas;