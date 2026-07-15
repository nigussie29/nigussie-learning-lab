const linearAlgebraPythonLabs = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Python Laboratory",

  description:
    "A complete computational laboratory where learners implement, visualize, test, and apply linear algebra using Python, NumPy, Matplotlib, SymPy, SciPy, Pandas, and Jupyter Notebook.",

  philosophy: {
    statement:
      "Python should not replace mathematical understanding. It should make mathematical structure visible, test ideas, support experimentation, and extend what learners can build.",

    principles: [
      "Understand the mathematics before using a library function.",
      "Implement important ideas from first principles when appropriate.",
      "Verify hand calculations with code.",
      "Use visualizations to strengthen intuition.",
      "Test normal, boundary, and error cases.",
      "Interpret every computational result.",
      "Document code so another learner can reproduce the work.",
    ],
  },

  environment: {
    language: "Python",

    recommendedVersion: "Python 3.11 or newer",

    recommendedTools: [
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "GitHub",
    ],

    libraries: [
      {
        name: "NumPy",
        purpose:
          "Vectors, matrices, matrix operations, decompositions, and numerical computing.",
      },
      {
        name: "Matplotlib",
        purpose:
          "Two-dimensional and three-dimensional mathematical visualization.",
      },
      {
        name: "SymPy",
        purpose:
          "Symbolic matrix operations, exact arithmetic, and algebraic verification.",
      },
      {
        name: "SciPy",
        purpose:
          "Numerical solvers, sparse matrices, optimization, and scientific algorithms.",
      },
      {
        name: "Pandas",
        purpose:
          "Dataset preparation, tabular analysis, and regression projects.",
      },
      {
        name: "Pillow",
        purpose:
          "Image loading and processing for SVD compression projects.",
      },
    ],

    installationCommand:
      "pip install numpy matplotlib sympy scipy pandas pillow jupyter",

    notebookStandard: [
      "Title and learner name",
      "Problem statement",
      "Learning objectives",
      "Mathematical background",
      "Python implementation",
      "Tests",
      "Visualizations",
      "Interpretation",
      "Reflection",
      "References when needed",
    ],
  },

  codingStandards: [
    {
      id: "standard-01",
      title: "Meaningful names",
      description:
        "Use variable and function names that communicate mathematical meaning.",
      example:
        "Use transformation_matrix instead of tm or x1.",
    },
    {
      id: "standard-02",
      title: "Small reusable functions",
      description:
        "Separate calculations into focused functions that can be tested independently.",
      example:
        "Create magnitude(vector) rather than placing every operation in one large block.",
    },
    {
      id: "standard-03",
      title: "Input validation",
      description:
        "Check dimensions, zero vectors, singular matrices, and invalid input before calculation.",
      example:
        "Verify that matrix columns match vector length before multiplication.",
    },
    {
      id: "standard-04",
      title: "Testing",
      description:
        "Include normal, boundary, and error cases for important functions.",
      example:
        "Test normalization with a nonzero vector and reject the zero vector.",
    },
    {
      id: "standard-05",
      title: "Explanation",
      description:
        "Explain what the code calculates and what the result means mathematically.",
      example:
        "Do not stop after printing an eigenvalue. Interpret its scaling behavior.",
    },
    {
      id: "standard-06",
      title: "Reproducibility",
      description:
        "Document dependencies, inputs, random seeds, and execution order.",
      example:
        "Use a fixed random seed in experiments that compare algorithms.",
    },
  ],

  labs: [
    {
      id: "python-lab-01",
      moduleNumber: 1,
      moduleSlug: "vectors",
      title: "Python Vector Toolkit",
      level: "Foundation",
      duration: "3–5 hours",
      status: "Available",

      problem:
        "How can we represent, calculate, visualize, and compare vectors reliably using Python?",

      objectives: [
        "Represent vectors using Python lists and NumPy arrays.",
        "Implement vector addition and subtraction.",
        "Calculate magnitude.",
        "Normalize nonzero vectors.",
        "Calculate dot products.",
        "Calculate cosine similarity.",
        "Plot vectors in two dimensions.",
      ],

      concepts: [
        "Vector components",
        "Magnitude",
        "Normalization",
        "Dot product",
        "Angle",
        "Cosine similarity",
      ],

      tasks: [
        {
          number: 1,
          title: "Represent vectors",
          instructions:
            "Create vectors using both Python lists and NumPy arrays. Compare their behavior.",
        },
        {
          number: 2,
          title: "Build core functions",
          instructions:
            "Write functions for addition, subtraction, scaling, magnitude, and normalization.",
        },
        {
          number: 3,
          title: "Measure alignment",
          instructions:
            "Implement dot product and cosine similarity from first principles.",
        },
        {
          number: 4,
          title: "Visualize",
          instructions:
            "Plot vectors, sums, and differences on a coordinate plane.",
        },
        {
          number: 5,
          title: "Test",
          instructions:
            "Test zero vectors, opposite vectors, parallel vectors, and perpendicular vectors.",
        },
      ],

      starterCode: `import numpy as np
import matplotlib.pyplot as plt

def magnitude(vector):
    vector = np.array(vector, dtype=float)
    return np.sqrt(np.sum(vector ** 2))

def normalize(vector):
    vector = np.array(vector, dtype=float)
    length = magnitude(vector)

    if np.isclose(length, 0):
        raise ValueError("The zero vector cannot be normalized.")

    return vector / length`,

      expectedEvidence: [
        "Reusable vector functions",
        "At least five tests",
        "Two or more vector plots",
        "Written interpretation",
        "Reflection",
      ],

      extension:
        "Build a simple document-similarity demonstration using cosine similarity.",
    },

    {
      id: "python-lab-02",
      moduleNumber: 2,
      moduleSlug: "matrices",
      title: "Explainable Matrix Operations",
      level: "Foundation",
      duration: "4–6 hours",
      status: "Available",

      problem:
        "How can Python perform matrix operations while still making the reasoning visible?",

      objectives: [
        "Represent matrices using NumPy arrays.",
        "Inspect matrix shape.",
        "Add, subtract, and scale matrices.",
        "Calculate a transpose.",
        "Implement matrix multiplication.",
        "Validate compatible dimensions.",
        "Compare first-principles results with NumPy.",
      ],

      concepts: [
        "Rows",
        "Columns",
        "Dimensions",
        "Transpose",
        "Matrix multiplication",
        "Row-column rule",
      ],

      tasks: [
        {
          number: 1,
          title: "Inspect matrix structure",
          instructions:
            "Create matrices and report dimensions, rows, columns, and entries.",
        },
        {
          number: 2,
          title: "Implement operations",
          instructions:
            "Write functions for matrix addition, scaling, transpose, and multiplication.",
        },
        {
          number: 3,
          title: "Validate dimensions",
          instructions:
            "Reject invalid operations and provide helpful error messages.",
        },
        {
          number: 4,
          title: "Explain multiplication",
          instructions:
            "Show how each output entry is formed from one row and one column.",
        },
        {
          number: 5,
          title: "Verify",
          instructions:
            "Compare your results with NumPy using np.allclose.",
        },
      ],

      starterCode: `import numpy as np

def can_multiply(matrix_a, matrix_b):
    a = np.array(matrix_a)
    b = np.array(matrix_b)

    return a.shape[1] == b.shape[0]

def matrix_multiply(matrix_a, matrix_b):
    a = np.array(matrix_a, dtype=float)
    b = np.array(matrix_b, dtype=float)

    if not can_multiply(a, b):
        raise ValueError(
            f"Incompatible dimensions: {a.shape} and {b.shape}"
        )

    result = np.zeros((a.shape[0], b.shape[1]))

    for i in range(a.shape[0]):
        for j in range(b.shape[1]):
            result[i, j] = np.dot(a[i, :], b[:, j])

    return result`,

      expectedEvidence: [
        "Matrix operation functions",
        "Dimension validation",
        "Step-by-step multiplication example",
        "Comparison with NumPy",
        "Tests",
      ],

      extension:
        "Add identity, diagonal, symmetric, and triangular matrix detection.",
    },

    {
      id: "python-lab-03",
      moduleNumber: 3,
      moduleSlug: "systems-of-linear-equations",
      title: "Gaussian Elimination and Linear-System Solver",
      level: "Intermediate",
      duration: "5–8 hours",
      status: "Planned",

      problem:
        "How can we build a solver that reveals the row operations used to solve a system?",

      objectives: [
        "Represent an augmented matrix.",
        "Implement elementary row operations.",
        "Produce row-echelon form.",
        "Identify pivot positions.",
        "Classify solution types.",
        "Compare results with NumPy and SymPy.",
      ],

      concepts: [
        "Augmented matrix",
        "Row operations",
        "Gaussian elimination",
        "Pivot",
        "Free variable",
        "Consistency",
      ],

      tasks: [
        {
          number: 1,
          title: "Create row-operation functions",
          instructions:
            "Implement row swapping, row scaling, and row replacement.",
        },
        {
          number: 2,
          title: "Implement elimination",
          instructions:
            "Transform an augmented matrix into row-echelon form.",
        },
        {
          number: 3,
          title: "Track steps",
          instructions:
            "Store and display every row operation.",
        },
        {
          number: 4,
          title: "Classify the solution",
          instructions:
            "Identify unique, infinite, or nonexistent solutions.",
        },
        {
          number: 5,
          title: "Verify",
          instructions:
            "Compare with np.linalg.solve or SymPy where appropriate.",
        },
      ],

      starterCode: `import numpy as np

def swap_rows(matrix, row_one, row_two):
    matrix[[row_one, row_two]] = matrix[[row_two, row_one]]

def scale_row(matrix, row, scalar):
    if np.isclose(scalar, 0):
        raise ValueError("A row cannot be scaled by zero.")

    matrix[row] = scalar * matrix[row]

def replace_row(matrix, target_row, source_row, scalar):
    matrix[target_row] = (
        matrix[target_row] + scalar * matrix[source_row]
    )`,

      expectedEvidence: [
        "Row-operation functions",
        "Elimination algorithm",
        "Step history",
        "Solution classification",
        "Verification examples",
      ],

      extension:
        "Extend the solver to reduced row-echelon form.",
    },

    {
      id: "python-lab-04",
      moduleNumber: 4,
      moduleSlug: "determinants",
      title: "Determinant and Area-Scaling Explorer",
      level: "Intermediate",
      duration: "4–6 hours",
      status: "Planned",

      problem:
        "How does the determinant predict area scaling, orientation, and singularity?",

      objectives: [
        "Calculate determinants.",
        "Apply 2×2 transformation matrices.",
        "Transform a unit square.",
        "Compare original and transformed area.",
        "Detect orientation reversal.",
        "Identify singular transformations.",
      ],

      concepts: [
        "Determinant",
        "Area scaling",
        "Orientation",
        "Singularity",
        "Invertibility",
      ],

      tasks: [
        {
          number: 1,
          title: "Create a unit square",
          instructions:
            "Represent the square as a matrix of coordinate points.",
        },
        {
          number: 2,
          title: "Apply transformations",
          instructions:
            "Use several 2×2 matrices to transform the square.",
        },
        {
          number: 3,
          title: "Measure scaling",
          instructions:
            "Compare area ratio with the absolute determinant.",
        },
        {
          number: 4,
          title: "Interpret sign",
          instructions:
            "Explain how a negative determinant changes orientation.",
        },
        {
          number: 5,
          title: "Study singularity",
          instructions:
            "Use a determinant-zero matrix and describe the dimensional collapse.",
        },
      ],

      starterCode: `import numpy as np
import matplotlib.pyplot as plt

square = np.array([
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0]
], dtype=float)

transformation = np.array([
    [2, 1],
    [0, 1]
], dtype=float)

transformed_square = transformation @ square
determinant = np.linalg.det(transformation)`,

      expectedEvidence: [
        "Original and transformed plots",
        "Determinant calculations",
        "Area comparisons",
        "Orientation analysis",
        "Singular example",
      ],

      extension:
        "Extend the experiment to three-dimensional volume scaling.",
    },

    {
      id: "python-lab-05",
      moduleNumber: 5,
      moduleSlug: "vector-spaces",
      title: "Span, Independence, Basis, and Rank Investigator",
      level: "Intermediate",
      duration: "5–8 hours",
      status: "Planned",

      problem:
        "How can computation help us determine whether vectors contain redundancy and what space they generate?",

      objectives: [
        "Calculate matrix rank.",
        "Test linear independence.",
        "Identify pivot columns.",
        "Find a basis for a column space.",
        "Investigate null spaces.",
        "Connect rank and nullity.",
      ],

      concepts: [
        "Span",
        "Linear independence",
        "Basis",
        "Dimension",
        "Rank",
        "Null space",
      ],

      tasks: [
        {
          number: 1,
          title: "Build vector sets",
          instructions:
            "Create independent and dependent collections of vectors.",
        },
        {
          number: 2,
          title: "Calculate rank",
          instructions:
            "Use NumPy and SymPy to compare rank calculations.",
        },
        {
          number: 3,
          title: "Find bases",
          instructions:
            "Identify pivot columns and construct a basis.",
        },
        {
          number: 4,
          title: "Explore the null space",
          instructions:
            "Use SymPy to calculate a null-space basis.",
        },
        {
          number: 5,
          title: "Verify rank-nullity",
          instructions:
            "Check the theorem on several matrices.",
        },
      ],

      starterCode: `import numpy as np
import sympy as sp

matrix = np.array([
    [1, 2, 3],
    [2, 4, 6],
    [1, 1, 0]
], dtype=float)

numpy_rank = np.linalg.matrix_rank(matrix)

symbolic_matrix = sp.Matrix(matrix)
rref_matrix, pivot_columns = symbolic_matrix.rref()
null_space_basis = symbolic_matrix.nullspace()`,

      expectedEvidence: [
        "Independent and dependent examples",
        "Rank calculations",
        "Pivot-column analysis",
        "Basis construction",
        "Rank-nullity verification",
      ],

      extension:
        "Create a visualization of span in two or three dimensions.",
    },

    {
      id: "python-lab-06",
      moduleNumber: 6,
      moduleSlug: "linear-transformations",
      title: "Interactive Linear Transformation Studio",
      level: "Intermediate",
      duration: "6–10 hours",
      status: "Available",

      problem:
        "How can we make matrix transformations visible and interactive?",

      objectives: [
        "Create standard transformation matrices.",
        "Transform points, vectors, and shapes.",
        "Visualize scaling, shear, rotation, reflection, and projection.",
        "Compose transformations.",
        "Explain order dependence.",
      ],

      concepts: [
        "Linear transformation",
        "Matrix representation",
        "Composition",
        "Rotation",
        "Reflection",
        "Scaling",
        "Shear",
        "Projection",
      ],

      tasks: [
        {
          number: 1,
          title: "Create standard matrices",
          instructions:
            "Write functions that return scaling, rotation, shear, reflection, and projection matrices.",
        },
        {
          number: 2,
          title: "Transform a shape",
          instructions:
            "Apply each matrix to a common polygon.",
        },
        {
          number: 3,
          title: "Compose transformations",
          instructions:
            "Compare AB with BA using visible examples.",
        },
        {
          number: 4,
          title: "Animate",
          instructions:
            "Optionally animate a continuous rotation or scaling process.",
        },
        {
          number: 5,
          title: "Explain",
          instructions:
            "Describe how the matrix changes basis directions.",
        },
      ],

      starterCode: `import numpy as np

def rotation_matrix(angle_radians):
    cosine = np.cos(angle_radians)
    sine = np.sin(angle_radians)

    return np.array([
        [cosine, -sine],
        [sine, cosine]
    ])

def scaling_matrix(scale_x, scale_y):
    return np.array([
        [scale_x, 0],
        [0, scale_y]
    ])`,

      expectedEvidence: [
        "Transformation functions",
        "Shape plots",
        "Composition comparison",
        "Interpretation",
        "Optional animation",
      ],

      extension:
        "Create a Streamlit interface with interactive matrix controls.",
    },

    {
      id: "python-lab-07",
      moduleNumber: 7,
      moduleSlug: "eigenvalues-and-eigenvectors",
      title: "Eigenvalue and Eigenvector Explorer",
      level: "Advanced",
      duration: "6–10 hours",
      status: "Planned",

      problem:
        "How can we identify and visualize directions that remain stable under transformation?",

      objectives: [
        "Calculate eigenvalues and eigenvectors.",
        "Normalize eigenvectors.",
        "Plot eigendirections.",
        "Apply repeated matrix multiplication.",
        "Connect dominant eigenvalues to long-term behavior.",
      ],

      concepts: [
        "Eigenvalue equation",
        "Eigenvalue",
        "Eigenvector",
        "Eigenspace",
        "Repeated transformation",
        "Dominant eigenvalue",
      ],

      tasks: [
        {
          number: 1,
          title: "Calculate eigenpairs",
          instructions:
            "Use NumPy to calculate eigenvalues and eigenvectors.",
        },
        {
          number: 2,
          title: "Verify",
          instructions:
            "Check numerically that Av and lambda-v agree.",
        },
        {
          number: 3,
          title: "Visualize",
          instructions:
            "Plot sample vectors and eigendirections before and after transformation.",
        },
        {
          number: 4,
          title: "Repeat",
          instructions:
            "Apply the same matrix repeatedly to several vectors.",
        },
        {
          number: 5,
          title: "Interpret",
          instructions:
            "Explain the dominant long-term behavior.",
        },
      ],

      starterCode: `import numpy as np

matrix = np.array([
    [3, 1],
    [0, 2]
], dtype=float)

eigenvalues, eigenvectors = np.linalg.eig(matrix)

for index, eigenvalue in enumerate(eigenvalues):
    eigenvector = eigenvectors[:, index]

    left_side = matrix @ eigenvector
    right_side = eigenvalue * eigenvector

    print(np.allclose(left_side, right_side))`,

      expectedEvidence: [
        "Eigenpair calculations",
        "Verification tests",
        "Eigendirection plots",
        "Repeated-transformation experiment",
        "Interpretation",
      ],

      extension:
        "Apply the same ideas to a small PageRank or PCA example.",
    },

    {
      id: "python-lab-08",
      moduleNumber: 8,
      moduleSlug: "orthogonality",
      title: "Projection and Gram-Schmidt Laboratory",
      level: "Advanced",
      duration: "5–8 hours",
      status: "Planned",

      problem:
        "How can we decompose vectors into perpendicular components and construct an orthonormal basis?",

      objectives: [
        "Project one vector onto another.",
        "Calculate residuals.",
        "Verify orthogonality.",
        "Implement Gram-Schmidt.",
        "Compare with NumPy QR factorization.",
      ],

      concepts: [
        "Orthogonality",
        "Projection",
        "Residual",
        "Orthonormal basis",
        "Gram-Schmidt",
        "QR factorization",
      ],

      tasks: [
        {
          number: 1,
          title: "Implement projection",
          instructions:
            "Write a function that projects one nonzero vector onto another.",
        },
        {
          number: 2,
          title: "Calculate the residual",
          instructions:
            "Separate the original vector into projected and perpendicular parts.",
        },
        {
          number: 3,
          title: "Verify orthogonality",
          instructions:
            "Use the dot product to confirm the residual is perpendicular.",
        },
        {
          number: 4,
          title: "Implement Gram-Schmidt",
          instructions:
            "Convert an independent vector set into an orthonormal basis.",
        },
        {
          number: 5,
          title: "Compare with QR",
          instructions:
            "Compare your orthonormal vectors with np.linalg.qr.",
        },
      ],

      starterCode: `import numpy as np

def projection(vector_a, vector_b):
    a = np.array(vector_a, dtype=float)
    b = np.array(vector_b, dtype=float)

    denominator = np.dot(b, b)

    if np.isclose(denominator, 0):
        raise ValueError("Cannot project onto the zero vector.")

    return (np.dot(a, b) / denominator) * b`,

      expectedEvidence: [
        "Projection function",
        "Residual calculations",
        "Orthogonality tests",
        "Gram-Schmidt implementation",
        "QR comparison",
      ],

      extension:
        "Use orthogonal projection to approximate a signal or dataset.",
    },

    {
      id: "python-lab-09",
      moduleNumber: 9,
      moduleSlug: "least-squares",
      title: "Least-Squares Regression from First Principles",
      level: "Advanced",
      duration: "6–10 hours",
      status: "Available",

      problem:
        "How can we fit the best model when data do not lie exactly on a line?",

      objectives: [
        "Build a design matrix.",
        "Derive and solve normal equations.",
        "Calculate predictions.",
        "Calculate residuals.",
        "Visualize model fit.",
        "Compare with NumPy and Scikit-learn.",
      ],

      concepts: [
        "Least squares",
        "Projection",
        "Normal equations",
        "Regression",
        "Residual",
        "Model evaluation",
      ],

      tasks: [
        {
          number: 1,
          title: "Prepare data",
          instructions:
            "Create or load a small dataset and form the design matrix.",
        },
        {
          number: 2,
          title: "Solve the normal equations",
          instructions:
            "Calculate model coefficients using linear algebra.",
        },
        {
          number: 3,
          title: "Predict",
          instructions:
            "Generate fitted values and residuals.",
        },
        {
          number: 4,
          title: "Visualize",
          instructions:
            "Plot observed data, fitted values, and residuals.",
        },
        {
          number: 5,
          title: "Compare",
          instructions:
            "Compare with np.linalg.lstsq and Scikit-learn.",
        },
      ],

      starterCode: `import numpy as np

x_values = np.array([1, 2, 3, 4, 5], dtype=float)
y_values = np.array([2.2, 4.1, 5.9, 8.2, 9.8], dtype=float)

design_matrix = np.column_stack([
    np.ones_like(x_values),
    x_values
])

coefficients = np.linalg.solve(
    design_matrix.T @ design_matrix,
    design_matrix.T @ y_values
)

predictions = design_matrix @ coefficients
residuals = y_values - predictions`,

      expectedEvidence: [
        "Design matrix",
        "Coefficient calculation",
        "Predictions",
        "Residual analysis",
        "Method comparison",
      ],

      extension:
        "Study the effect of noise, outliers, or multiple predictors.",
    },

    {
      id: "python-lab-10",
      moduleNumber: 10,
      moduleSlug: "singular-value-decomposition",
      title: "SVD Image Compression Laboratory",
      level: "Advanced",
      duration: "8–12 hours",
      status: "Available",

      problem:
        "How can singular value decomposition reduce image storage while preserving important structure?",

      objectives: [
        "Load an image as a matrix.",
        "Calculate singular value decomposition.",
        "Create rank-k approximations.",
        "Measure reconstruction error.",
        "Compare visual quality.",
        "Estimate compression.",
      ],

      concepts: [
        "SVD",
        "Singular values",
        "Rank",
        "Low-rank approximation",
        "Compression",
        "Reconstruction error",
      ],

      tasks: [
        {
          number: 1,
          title: "Load and inspect",
          instructions:
            "Load a grayscale image and inspect its dimensions.",
        },
        {
          number: 2,
          title: "Calculate SVD",
          instructions:
            "Use np.linalg.svd and inspect singular values.",
        },
        {
          number: 3,
          title: "Reconstruct",
          instructions:
            "Create several rank-k image approximations.",
        },
        {
          number: 4,
          title: "Evaluate",
          instructions:
            "Calculate error and estimate storage for each rank.",
        },
        {
          number: 5,
          title: "Interpret",
          instructions:
            "Explain why early singular components preserve major structure.",
        },
      ],

      starterCode: `import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

image = Image.open("sample-image.png").convert("L")
image_matrix = np.array(image, dtype=float)

u_matrix, singular_values, vt_matrix = np.linalg.svd(
    image_matrix,
    full_matrices=False
)

rank = 25

compressed = (
    u_matrix[:, :rank]
    @ np.diag(singular_values[:rank])
    @ vt_matrix[:rank, :]
)`,

      expectedEvidence: [
        "Original image",
        "Singular-value plot",
        "Several reconstructions",
        "Error table",
        "Compression discussion",
      ],

      extension:
        "Process RGB color channels separately and build an interactive rank slider.",
    },

    {
      id: "python-lab-11",
      moduleNumber: 11,
      moduleSlug: "numerical-linear-algebra",
      title: "Numerical Stability and Solver Benchmark",
      level: "Advanced",
      duration: "8–12 hours",
      status: "Planned",

      problem:
        "How do conditioning and algorithm choice affect numerical reliability?",

      objectives: [
        "Calculate matrix condition numbers.",
        "Create well-conditioned and ill-conditioned systems.",
        "Perturb input values.",
        "Compare solution error.",
        "Benchmark multiple methods.",
        "Interpret numerical stability.",
      ],

      concepts: [
        "Condition number",
        "Floating-point error",
        "Numerical stability",
        "LU",
        "QR",
        "Iterative methods",
      ],

      tasks: [
        {
          number: 1,
          title: "Create systems",
          instructions:
            "Generate matrices with different condition numbers.",
        },
        {
          number: 2,
          title: "Solve",
          instructions:
            "Solve each system using one or more methods.",
        },
        {
          number: 3,
          title: "Perturb",
          instructions:
            "Change the input slightly and observe solution changes.",
        },
        {
          number: 4,
          title: "Benchmark",
          instructions:
            "Measure runtime and error.",
        },
        {
          number: 5,
          title: "Recommend",
          instructions:
            "Explain which method is most appropriate and why.",
        },
      ],

      starterCode: `import time
import numpy as np

matrix = np.array([
    [1.0, 1.0],
    [1.0, 1.000001]
])

solution = np.array([2.0, 2.000001])

condition_number = np.linalg.cond(matrix)

start_time = time.perf_counter()
computed_x = np.linalg.solve(matrix, solution)
elapsed_time = time.perf_counter() - start_time`,

      expectedEvidence: [
        "Condition-number comparison",
        "Perturbation experiment",
        "Runtime results",
        "Error analysis",
        "Engineering recommendation",
      ],

      extension:
        "Compare dense and sparse solvers on larger systems.",
    },

    {
      id: "python-lab-12",
      moduleNumber: 12,
      moduleSlug: "linear-algebra-for-ai",
      title: "Neural-Network Layer from First Principles",
      level: "Advanced",
      duration: "8–12 hours",
      status: "Available",

      problem:
        "How do vectors and matrices transform data inside a neural-network layer?",

      objectives: [
        "Represent a batch of observations as a matrix.",
        "Represent weights as a matrix.",
        "Represent biases as a vector.",
        "Implement an affine transformation.",
        "Check dimensions.",
        "Interpret outputs.",
        "Connect the computation to neural networks.",
      ],

      concepts: [
        "Feature vectors",
        "Data matrices",
        "Weight matrix",
        "Bias vector",
        "Affine transformation",
        "Neural-network layer",
      ],

      tasks: [
        {
          number: 1,
          title: "Represent the data",
          instructions:
            "Create a batch matrix where rows are observations and columns are features.",
        },
        {
          number: 2,
          title: "Create parameters",
          instructions:
            "Create a compatible weight matrix and bias vector.",
        },
        {
          number: 3,
          title: "Compute the layer",
          instructions:
            "Calculate output = inputs @ weights + bias.",
        },
        {
          number: 4,
          title: "Inspect dimensions",
          instructions:
            "Explain the shape of every matrix before and after multiplication.",
        },
        {
          number: 5,
          title: "Extend",
          instructions:
            "Add an activation function and compare outputs.",
        },
      ],

      starterCode: `import numpy as np

inputs = np.array([
    [0.5, 1.0, -0.5],
    [1.5, 0.0, 2.0]
])

weights = np.array([
    [0.2, -0.1],
    [0.7, 0.3],
    [-0.4, 0.8]
])

bias = np.array([0.1, -0.2])

layer_output = inputs @ weights + bias`,

      expectedEvidence: [
        "Dimension table",
        "Working dense-layer computation",
        "Manual verification of one output",
        "Interpretation",
        "Optional activation function",
      ],

      extension:
        "Use the layer inside a small classifier or embedding experiment.",
    },
  ],

  commonTestingRequirements: [
    "At least one normal test case",
    "At least one boundary case",
    "At least one invalid-input case when applicable",
    "Comparison with a trusted library method",
    "Written interpretation of any differences",
  ],

  labRubric: [
    {
      criterion: "Mathematical accuracy",
      weight: 25,
      proficient:
        "The code correctly represents and applies the mathematics.",
    },
    {
      criterion: "Functional implementation",
      weight: 20,
      proficient:
        "The required functionality works reliably.",
    },
    {
      criterion: "Testing and validation",
      weight: 15,
      proficient:
        "The learner uses meaningful tests and handles important errors.",
    },
    {
      criterion: "Visualization",
      weight: 15,
      proficient:
        "Visual output strengthens mathematical interpretation.",
    },
    {
      criterion: "Code quality",
      weight: 15,
      proficient:
        "The code is organized, readable, reusable, and documented.",
    },
    {
      criterion: "Interpretation and reflection",
      weight: 10,
      proficient:
        "The learner explains results, limitations, and next steps.",
    },
  ],

  completionRequirements: {
    minimumRequiredLabs: 10,
    requiredLabIds: [
      "python-lab-01",
      "python-lab-02",
      "python-lab-03",
      "python-lab-06",
      "python-lab-07",
      "python-lab-08",
      "python-lab-09",
      "python-lab-10",
      "python-lab-11",
      "python-lab-12",
    ],
    minimumLabScore: 80,
    codeRepositoryRequired: true,
    reflectionRequired: true,
    testingRequired: true,

    statement:
      "Python laboratory completion requires correct mathematics, working code, testing, explanation, and reproducible evidence.",
  },

  lumineryGuidance: {
    message:
      "Do not begin by asking which NumPy function gives the answer. Begin by asking what the mathematical operation means and what shape the result should have.",

    recommendation:
      "Predict the result, implement the idea, verify it with a library, visualize it when possible, and explain any difference.",
  },
};

export function getPythonLabById(id) {
  return linearAlgebraPythonLabs.labs.find((lab) => lab.id === id);
}

export function getPythonLabForModule(moduleNumber) {
  return linearAlgebraPythonLabs.labs.find(
    (lab) => lab.moduleNumber === Number(moduleNumber)
  );
}

export function getAvailablePythonLabs() {
  return linearAlgebraPythonLabs.labs.filter(
    (lab) => lab.status === "Available"
  );
}

export function getRequiredPythonLabs() {
  return linearAlgebraPythonLabs.completionRequirements.requiredLabIds
    .map((id) => getPythonLabById(id))
    .filter(Boolean);
}

export function calculatePythonLabScore(scores = {}) {
  const total = linearAlgebraPythonLabs.labRubric.reduce(
    (sum, criterion) => {
      const score = Number(scores[criterion.criterion] ?? 0);

      return sum + score * (criterion.weight / 100);
    },
    0
  );

  return Number(total.toFixed(2));
}

export default linearAlgebraPythonLabs;