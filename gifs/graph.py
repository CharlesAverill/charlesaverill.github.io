import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.animation as animation

# Define the range of x and y
x = np.linspace(-10, 10, 100)
y = np.linspace(-10, 10, 100)

# Avoid division by zero by removing y=0
y = y[y != 0]

# Create a meshgrid
X, Y = np.meshgrid(x, y)

import math
ops = [
    ("cosabs", "cosabs", lambda x, y: np.cos(np.abs(x) + np.abs(y)) * (np.abs(x) + np.abs(y))),
    ("intdiv", "//", lambda x, y: x // y),
    ("div", "/", lambda x, y: x / y),
    ("plus", "+", lambda x, y: x + y),
    ("minus", "-", lambda x, y: x - y),
    ("times", "*", lambda x, y: x * y),
    ("mod", "%", lambda x, y: x % y),
    ("xor", "^", lambda x, y: x.astype(np.int32) ^ y.astype(np.int32)),
    ("band", "&", lambda x, y: x.astype(np.int32) & y.astype(np.int32)),
    ("bor", "|", lambda x, y: x.astype(np.int32) | y.astype(np.int32)),
    ("rshift", ">>", lambda x, y: x.astype(np.int32) >> y.astype(np.int32)),
    ("lshift", "<<", lambda x, y: x.astype(np.int32) << y.astype(np.int32)),
    ("pow", "**", lambda x, y: x ** y),
]

for opname, ops, op in ops:
    print(opname)
    # Compute the function using integer division
    Z = op(X, Y)

    # Filter Z values to be within the range [-10, 10]
    Z = np.clip(Z, -10, 10)

    # Create the plot
    fig = plt.figure(figsize=(10, 7))
    ax = fig.add_subplot(111, projection='3d')

    # Use a surface plot instead of a wireframe for solid lines
    ax.plot_surface(X, Y, Z, cmap='viridis', edgecolor='k')

    # Labels
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_zlabel(f'f(X, Y) = X {ops} Y')
    ax.set_title(f'3D Plot of {opname} Function')
    #ax.set_zlim(-10, 10)

    # Function to update the rotation
    def update(frame):
        ax.view_init(elev=30, azim=frame)  # Rotate around Z-axis
        return ax,

    # Create animation
    ani = animation.FuncAnimation(fig, update, frames=np.arange(0, 360, 1), interval=25)

    writer = animation.FFMpegWriter(fps=60)
    ani.save(f'{opname}.gif', writer=writer)

    plt.show()

