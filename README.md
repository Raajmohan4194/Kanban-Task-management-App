# 📋 Kanban Task Manager

A modern, feature-rich Kanban board application built with React for managing tasks across different workflow stages.

## Features

✨ **Core Features**
- ✅ Kanban board with Todo, In Progress, and Done columns
- ✅ Create, edit, and delete tasks
- ✅ Drag-and-drop task movement between columns
- ✅ Task descriptions and details
- ✅ Local storage persistence (data survives page refresh)
- ✅ Responsive design (desktop and mobile)

🎨 **Optional Enhancements**
- ✅ Task priority labels (Low, Medium, High)
- ✅ Color-coded priority badges
- ✅ Search functionality
- ✅ Filter by priority
- ✅ Dark/Light theme toggle
- 📊 Task statistics (total, completed)

## Technologies

- **Frontend Framework:** React 18.2.0
- **Bundler:** Vite
- **Styling:** CSS3
- **State Management:** React Hooks
- **Storage:** Browser localStorage
- **UUID:** For unique task IDs

## Getting Started

### Prerequisites
- Node.js v18+ and npm v9+

### Installation

1. **Clone or download the project**
```bash
cd "kanban note making"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Usage

### Creating a Task
1. Fill in the "Create New Task" form in the sidebar
2. Enter a title (required)
3. Add an optional description
4. Select priority level (Low, Medium, High)
5. Choose a color tag
6. Click "Add Task"

### Managing Tasks
- **Drag & Drop:** Click and drag tasks between columns
- **Edit Task:** Click the edit (✎) icon on any task
- **Delete Task:** Click the delete (✕) button
- **Quick Move:** Use arrow buttons (← →) to move tasks between adjacent columns

### Searching & Filtering
- **Search:** Type in the search box to find tasks by title or description
- **Filter:** Use the priority dropdown to show only specific priority levels

### Theme
- Click the theme toggle (🌙/☀️) in the header to switch between dark and light modes
- Your preference is saved automatically

## Data Persistence

All tasks are automatically saved to the browser's localStorage:
- Tasks persist after page refresh
- Tasks persist even after closing and reopening the browser
- Clear browser cache to reset all tasks

## Folder Structure

```
kanban note making/
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Column.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Testing

### Manual Testing Scenarios

1. **Task Creation**
   - Create multiple tasks with different priorities
   - Verify tasks appear in the Todo column
   - Verify empty state shows when no tasks exist

2. **Drag & Drop**
   - Drag a task from Todo to In Progress
   - Drag from In Progress to Done
   - Verify task status updates immediately

3. **Task Editing**
   - Click edit button on a task
   - Modify title, description, priority
   - Click "Update Task"
   - Verify changes are saved

4. **Task Deletion**
   - Click delete button on a task
   - Verify task is removed from the board

5. **Search & Filter**
   - Type in search box
   - Verify matching tasks appear
   - Select priority filter
   - Verify only selected priority shows

6. **Theme Toggle**
   - Click theme button
   - Verify colors change to dark theme
   - Verify preference persists on refresh

7. **Data Persistence**
   - Create multiple tasks
   - Refresh the page
   - Verify all tasks remain
   - Close and reopen browser
   - Verify tasks still exist

8. **Responsiveness**
   - Test on desktop (1920px+)
   - Test on tablet (768px)
   - Test on mobile (375px)
   - Verify layout adjusts properly

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

Your app will be live at `https://<project-name>.vercel.app`

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

## Performance Optimizations

- Lazy loading of components
- CSS animations run at 60fps
- Efficient event handling
- Minimal re-renders with React hooks
- Optimized bundle size with Vite

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add custom columns
- [ ] Due dates for tasks
- [ ] Task labels/tags
- [ ] Task categories
- [ ] Undo/Redo functionality
- [ ] Keyboard shortcuts
- [ ] Task notifications
- [ ] Recurring tasks
- [ ] Team collaboration features
- [ ] Task comments/activity log

## Troubleshooting

### Tasks not saving?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Ensure you have storage space available

### Styles not loading?
- Verify all CSS files are in the correct locations
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)

### Drag and drop not working?
- This is a known limitation on mobile Safari
- Use arrow buttons to move tasks on mobile instead
- Desktop browsers work best for drag-and-drop

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the component code comments
3. Test with the latest browser version

---

**Happy task managing! 🚀📋**
