# Kanban Task Manager - Testing Guide

## Overview
This document provides comprehensive testing procedures for the Kanban Task Manager application.

## Test Scenarios

### 1. Task Creation Tests

#### Test 1.1: Create Simple Task
**Objective:** Verify a task can be created with just a title
**Steps:**
1. Open the application
2. In the "Create New Task" form, enter a task title (e.g., "Buy groceries")
3. Click "Add Task"
**Expected Results:**
- Task appears in the Todo column
- Task card displays the title
- Form clears for next entry
- Task counter updates

#### Test 1.2: Create Task with Description
**Objective:** Verify tasks can include descriptions
**Steps:**
1. Enter title: "Design homepage"
2. Enter description: "Create mockups for the landing page"
3. Select priority: High
4. Click "Add Task"
**Expected Results:**
- Task appears with title and description visible
- Priority badge shows H (High)
- Description is visible on the card

#### Test 1.3: Task Priority Levels
**Objective:** Verify all priority levels work
**Steps:**
1. Create 3 tasks with Low, Medium, and High priorities
2. Observe the priority badges
**Expected Results:**
- Low priority: Green badge with "L"
- Medium priority: Orange badge with "M"
- High priority: Red badge with "H"
- Correct colors displayed: Low (#2ecc71), Medium (#f39c12), High (#e74c3c)

#### Test 1.4: Task Color Selection
**Objective:** Verify color picker works
**Steps:**
1. Create task: "Color test"
2. Click on different color options (#3498db, #e74c3c, #2ecc71, #f39c12, #9b59b6)
3. Create task
**Expected Results:**
- Selected color is highlighted with border
- Color appears on task card border
- Different colors can be selected

### 2. Task Movement Tests

#### Test 2.1: Drag and Drop
**Objective:** Verify drag-and-drop between columns (Desktop)
**Steps:**
1. Create a task in Todo column
2. Drag task to "In Progress" column
3. Drag same task to "Done" column
**Expected Results:**
- Task moves smoothly to target column
- Task status updates immediately
- No errors in console
- Task stays in selected column on refresh

#### Test 2.2: Arrow Button Movement
**Objective:** Verify quick move buttons work
**Steps:**
1. Create task in Todo column
2. Click right arrow (→) button on task card
3. Verify task moved to In Progress
4. Click right arrow again
5. Verify task moved to Done
**Expected Results:**
- Task moves between adjacent columns
- Arrow shows only when applicable (no right arrow in Done)
- Left arrow shows only in In Progress and Done

#### Test 2.3: Invalid Movement Prevention
**Objective:** Verify cannot move beyond columns
**Steps:**
1. Create task and move to Done column
2. Observe arrow buttons
**Expected Results:**
- Right arrow is absent (can't move past Done)
- Left arrow is present (can move back)

### 3. Task Editing Tests

#### Test 3.1: Edit Task Title
**Objective:** Verify task title can be edited
**Steps:**
1. Create task with title "Original Title"
2. Click edit (✎) button
3. Change title to "Updated Title"
4. Click "Update Task"
**Expected Results:**
- Form populates with task details
- Title updates in form
- Changed title appears on card
- Original task is modified (not duplicated)

#### Test 3.2: Edit Task Description
**Objective:** Verify task description can be edited
**Steps:**
1. Create task with description "Old description"
2. Click edit button
3. Change description to "New description"
4. Click "Update Task"
**Expected Results:**
- Description field shows previous text
- New description displays on card
- Change persists on refresh

#### Test 3.3: Edit Task Priority
**Objective:** Verify priority level can be changed
**Steps:**
1. Create Low priority task
2. Edit and change to High
3. Save
**Expected Results:**
- Priority badge color changes
- Badge shows correct letter (H)
- Change persists

#### Test 3.4: Cancel Edit
**Objective:** Verify cancel button works
**Steps:**
1. Click edit on a task
2. Change some values
3. Click "Cancel"
4. Observe form
**Expected Results:**
- Form resets
- Task is not modified
- Form clears for new task

### 4. Task Deletion Tests

#### Test 4.1: Delete Task
**Objective:** Verify task deletion works
**Steps:**
1. Create a task
2. Click delete (✕) button
3. Confirm deletion if prompted
**Expected Results:**
- Task is removed from column
- Column updates count
- Total task count decreases
- Column shows empty state if last task

#### Test 4.2: Delete from Any Column
**Objective:** Verify deletion works from all columns
**Steps:**
1. Create tasks in all three columns
2. Delete one from each column
**Expected Results:**
- All tasks can be deleted
- Each removal updates correctly
- No errors occur

### 5. Search and Filter Tests

#### Test 5.1: Search by Title
**Objective:** Verify search filters by task title
**Steps:**
1. Create tasks: "Buy milk", "Buy eggs", "Cook dinner"
2. Type "Buy" in search box
**Expected Results:**
- Only tasks with "Buy" in title show
- "Cook dinner" is hidden
- Search is case-insensitive

#### Test 5.2: Search by Description
**Objective:** Verify search includes descriptions
**Steps:**
1. Create tasks with unique descriptions
2. Search for text only in description
**Expected Results:**
- Tasks with matching description are found
- Search works across title and description

#### Test 5.3: Clear Search
**Objective:** Verify search can be cleared
**Steps:**
1. Search for something
2. Clear the search box
**Expected Results:**
- All tasks reappear
- Board shows all columns' tasks

#### Test 5.4: Filter by Priority - Low
**Objective:** Verify low priority filter works
**Steps:**
1. Create tasks with Low, Medium, High priorities
2. Select "Low" from filter dropdown
**Expected Results:**
- Only Low priority tasks show
- Medium and High are hidden
- Search still works with filter

#### Test 5.5: Filter by Priority - Medium
**Objective:** Verify medium priority filter works
**Steps:**
1. Filter by Medium
**Expected Results:**
- Only Medium priority tasks show

#### Test 5.6: Filter by Priority - High
**Objective:** Verify high priority filter works
**Steps:**
1. Filter by High
**Expected Results:**
- Only High priority tasks show

#### Test 5.7: Reset Filter to All
**Objective:** Verify "All Priorities" shows all tasks
**Steps:**
1. Filter by specific priority
2. Select "All Priorities"
**Expected Results:**
- All tasks reappear regardless of priority

#### Test 5.8: Combined Search and Filter
**Objective:** Verify search and filter work together
**Steps:**
1. Create tasks with different titles and priorities
2. Search for specific text
3. Apply priority filter
**Expected Results:**
- Results filtered by both criteria
- Only matching AND priority tasks show

### 6. Local Storage Persistence Tests

#### Test 6.1: Persistence After Refresh
**Objective:** Verify data survives page refresh
**Steps:**
1. Create 3 tasks with different details
2. Move one to In Progress, one to Done
3. Press F5 or Cmd+R to refresh
4. Observe board
**Expected Results:**
- All tasks reappear
- Tasks in correct columns
- All details preserved
- Priorities and colors intact

#### Test 6.2: Persistence After Browser Close
**Objective:** Verify data survives closing browser
**Steps:**
1. Create multiple tasks in different columns
2. Close the browser completely
3. Reopen and navigate to http://localhost:5173
**Expected Results:**
- All tasks are still there
- Board state is exactly as left

#### Test 6.3: Persistence with Edits
**Objective:** Verify edited tasks persist
**Steps:**
1. Create task "Original"
2. Edit to "Modified"
3. Refresh
**Expected Results:**
- Shows "Modified" (not "Original")

#### Test 6.4: Clear Data (Reset)
**Objective:** Verify clearing localStorage resets
**Steps:**
1. Create multiple tasks
2. Open browser DevTools (F12)
3. Go to Application > localStorage
4. Delete all entries or clear entire localStorage
5. Refresh page
**Expected Results:**
- All tasks are gone
- Empty state shows
- Fresh start achieved

### 7. Theme Toggle Tests

#### Test 7.1: Switch to Dark Theme
**Objective:** Verify dark theme works
**Steps:**
1. Open application in light mode
2. Click theme toggle button (🌙)
3. Observe colors
**Expected Results:**
- Background changes to dark (#1a1a1a)
- Text changes to light color
- Cards show dark backgrounds
- All elements readable
- Theme toggle shows ☀️ icon

#### Test 7.2: Switch to Light Theme
**Objective:** Verify light theme works
**Steps:**
1. In dark mode, click theme toggle (☀️)
**Expected Results:**
- Background changes to light (#f5f7fa)
- Text changes to dark
- Cards show white backgrounds
- Theme toggle shows 🌙 icon

#### Test 7.3: Theme Persistence
**Objective:** Verify theme preference is saved
**Steps:**
1. Switch to dark theme
2. Refresh page
**Expected Results:**
- Dark theme still active
- Preference remembered

#### Test 7.4: Theme with Search
**Objective:** Verify theme works with filtered view
**Steps:**
1. Search for tasks
2. Switch theme
**Expected Results:**
- Filtered results display correctly in new theme
- No contrast issues
- All text readable

### 8. Responsive Design Tests

#### Test 8.1: Desktop Layout (1920px)
**Objective:** Verify desktop layout
**Steps:**
1. Open on desktop browser at 1920x1080
2. Observe layout
**Expected Results:**
- 3 columns visible side by side
- Sidebar on left with form and filters
- Header spans full width
- All elements have proper spacing

#### Test 8.2: Tablet Layout (768px)
**Objective:** Verify tablet responsiveness
**Steps:**
1. Resize to 768px width (tablet size)
2. Or use DevTools device emulation (iPad)
**Expected Results:**
- Layout adapts to tablet
- Sidebar may stack or reorganize
- All columns still visible
- Touch-friendly button sizes
- No horizontal scrolling needed

#### Test 8.3: Mobile Layout (375px)
**Objective:** Verify mobile responsiveness
**Steps:**
1. Resize to 375px width (mobile size)
2. Or use DevTools device emulation (iPhone)
**Expected Results:**
- Single column layout
- Form takes full width
- Tasks stack vertically
- Header text smaller but readable
- No horizontal scrolling
- Buttons easily tappable

#### Test 8.4: Mobile Task Interaction
**Objective:** Verify task interaction on mobile
**Steps:**
1. On mobile layout, try to:
   - Create a task
   - Edit a task
   - Delete a task
   - Search/filter
**Expected Results:**
- All interactions work smoothly
- No overflow issues
- Buttons are easily tappable
- Forms are usable on small screen

### 9. UI/UX Tests

#### Test 9.1: Empty State
**Objective:** Verify empty state message
**Steps:**
1. Create no tasks or delete all
**Expected Results:**
- Empty columns show "No tasks yet"
- Message centered in column
- Has dashed border and distinctive styling

#### Test 9.2: Task Counter
**Objective:** Verify task counters work
**Steps:**
1. Create tasks
2. Observe counters in column headers
3. Delete and add tasks
**Expected Results:**
- Counter shows current number of tasks per column
- Counter updates immediately
- Footer shows total and completed count

#### Test 9.3: Form Validation
**Objective:** Verify form validates input
**Steps:**
1. Try to submit empty title
2. Leave title blank and click Add
**Expected Results:**
- Alert appears: "Please enter a task title"
- Task not created
- Form remains open

#### Test 9.4: Description Length
**Objective:** Verify description limit
**Steps:**
1. Try to enter >300 characters
2. Observe the counter
**Expected Results:**
- Input stops at 300 characters
- Counter shows 300/300
- Cannot exceed limit

#### Test 9.5: Title Length
**Objective:** Verify title limit
**Steps:**
1. Try to enter >100 characters in title
**Expected Results:**
- Input stops at 100 characters
- Title is limited

### 10. Browser Compatibility Tests

#### Test 10.1: Chrome
**Objective:** Test in Google Chrome
**Steps:**
1. Open in latest Chrome version
2. Run all core tests
**Expected Results:**
- All features work
- No console errors
- Smooth performance

#### Test 10.2: Firefox
**Objective:** Test in Mozilla Firefox
**Steps:**
1. Open in latest Firefox version
2. Run all core tests
**Expected Results:**
- All features work
- Drag & drop works
- Styling correct

#### Test 10.3: Safari
**Objective:** Test in Safari
**Steps:**
1. Open in latest Safari version
2. Run all core tests
**Expected Results:**
- Application functions correctly
- Note: Drag-and-drop may have limitations

#### Test 10.4: Edge
**Objective:** Test in Microsoft Edge
**Steps:**
1. Open in latest Edge version
2. Run all core tests
**Expected Results:**
- All features work
- Performance smooth

### 11. Performance Tests

#### Test 11.1: Loading Time
**Objective:** Verify quick loading
**Steps:**
1. Open DevTools Network tab
2. Refresh page
3. Observe loading time
**Expected Results:**
- Page loads in < 2 seconds
- Small bundle size (< 500KB)

#### Test 11.2: Interaction Responsiveness
**Objective:** Verify UI is responsive
**Steps:**
1. Perform rapid clicks/interactions
2. Create, edit, delete quickly
**Expected Results:**
- No freezing or lag
- Immediate visual feedback
- No lost actions

#### Test 11.3: Large Number of Tasks
**Objective:** Test with many tasks
**Steps:**
1. Create 50+ tasks
2. Try to interact, search, filter
**Expected Results:**
- Still responsive
- Scrolling smooth
- No performance degradation

## Test Results Summary Template

```
Test Date: ___________
Tester: ___________
Browser: ___________
OS: ___________
Resolution: ___________

Test Category          | Passed | Failed | Notes
----------------------|--------|--------|-------
Task Creation         |   __   |  __    | ________
Task Movement         |   __   |  __    | ________
Task Editing          |   __   |  __    | ________
Task Deletion         |   __   |  __    | ________
Search & Filter       |   __   |  __    | ________
Persistence           |   __   |  __    | ________
Theme Toggle          |   __   |  __    | ________
Responsive Design     |   __   |  __    | ________
UI/UX                 |   __   |  __    | ________
Browser Compatibility |   __   |  __    | ________
Performance           |   __   |  __    | ________

Overall Status: ___________
Issues Found: ___________
Comments: ___________
```

## Quick Test Checklist (5 Minutes)

- [ ] Create a task
- [ ] Move task between columns (drag or buttons)
- [ ] Edit task
- [ ] Delete task
- [ ] Search for task
- [ ] Filter by priority
- [ ] Toggle dark theme
- [ ] Refresh page and verify data persists
- [ ] Test on mobile (resize to 375px)
- [ ] No console errors (F12)

## Known Limitations

1. **Drag and Drop on Mobile Safari:** Touch drag-and-drop may not work smoothly on iOS Safari. Use arrow buttons instead.
2. **Browser Storage Limits:** localStorage limited to ~5-10MB per domain. Should be sufficient for thousands of tasks.
3. **Custom Columns:** Current implementation has fixed columns (Todo, In Progress, Done).

## How to Run Tests

1. Start the dev server: `npm run dev`
2. Open http://localhost:5173
3. Open browser DevTools (F12)
4. Monitor Console for any errors
5. Follow test scenarios above
6. Document results

## Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Alt text for buttons (aria-labels present)
- [ ] Color not sole indicator
- [ ] Readable font sizes
- [ ] Sufficient color contrast

---

**Happy Testing! 🧪✅**
