# Architecture Decisions

## Technology Stack
- **Frontend**: HTML5, CSS3, vanilla JavaScript
- **No frameworks**: Keep it simple and lightweight
- **Testing**: Custom test framework (no external dependencies)

## Game Architecture
- **MVC pattern**: Separate concerns between game logic, rendering, and input
- **Game loop**: Fixed timestep for consistent gameplay
- **Grid-based**: 20x20 grid for snake movement
- **Canvas vs DOM**: Using DOM for simplicity and accessibility

## Testing Strategy
- **Unit tests**: Test individual game functions
- **Integration tests**: Test game flow
- **Automated fixes**: Attempt up to 3 iterations on test failures