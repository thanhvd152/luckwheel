// Danh sách thành viên tham gia sự kiện 12-13/12/2025
let employees = [
    { id: 1, name: "Nguyễn Đức Quang", phone: "0984312864", image: "Icon-ABBank.webp", used: false },
    { id: 2, name: "Ngọc Thọt iOS", phone: "0903238990", image: "Icon-ABBank.webp", used: false },
    { id: 3, name: "Bùi Xuân Vũ", phone: "0965080111", image: "images/vu.png", used: false },
    { id: 4, name: "Phan Văn Hoàn", phone: "0335098229", image: "Icon-ABBank.webp", used: false },
    { id: 5, name: "Phạm Minh Tân", phone: "0378405034", image: "images/tanpm.png", used: false },
    { id: 6, name: "Bùi Ngọc Sơn", phone: "0328771443", image: "Icon-ABBank.webp", used: false },
    { id: 7, name: "Lê Văn Đức Cớp WEB", phone: "0976393238", image: "Icon-ABBank.webp", used: false },
    { id: 8, name: "Nguyễn Tùng Lâm", phone: "0982162220", image: "images/lamnt.png", used: false },
    { id: 9, name: "Nguyễn Trần Sơn", phone: "0972421894", image: "images/sonnt9.png", used: false },
    { id: 10, name: "Giáp Văn Vĩnh", phone: "0969536509", image: "Icon-ABBank.webp", used: false },
    { id: 11, name: "viethq", phone: "0912353456", image: "images/viethq.png", used: false },
    { id: 12, name: "Sửu", phone: "0865486754", image: "Icon-ABBank.webp", used: false },
    { id: 13, name: "Phạm Văn Tùng", phone: "0985623823", image: "images/tungpv.png", used: false },
    { id: 14, name: "Vũ Đình Thanh", phone: "0363958716", image: "images/thanhvd.png", used: false },
    { id: 15, name: "Ducpm6", phone: "0378113760", image: "images/ducpm.png", used: false },
    { id: 16, name: "Hưởng", phone: "0966323766", image: "Icon-ABBank.webp", used: false },
    { id: 17, name: "Đặng Thanh Minh", phone: "0349802165", image: "images/minhdt.png", used: false },
    { id: 18, name: "Trịnh Quốc Nhân", phone: "0936485200", image: "Icon-ABBank.webp", used: false },
    { id: 19, name: "Đàm Văn Quang", phone: "0346540128", image: "Icon-ABBank.webp", used: false },
    { id: 20, name: "YênDV", phone: "0965533329", image: "images/yendv.png", used: false },
    { id: 21, name: "Nguyễn Văn Đại", phone: "0966535218", image: "Icon-ABBank.webp", used: false },
    { id: 22, name: "Nguyễn Ngọc Trí", phone: "0379599273", image: "images/tri.png", used: false },
    { id: 23, name: "Đào Mạnh Hoàng", phone: "0973519446", image: "images/hoangdm.png", used: false },
    { id: 24, name: "Nguyễn Đức Huy", phone: "0349612486", image: "images/huynd3.png", used: false },
    { id: 25, name: "Nghĩa Design ", phone: "0394543883", image: "Icon-ABBank.webp", used: false },
    { id: 26, name: "Nguyễn Hồng Sơn", phone: "0974182365", image: "Icon-ABBank.webp", used: false },
    { id: 27, name: "BOSS Nguyễn Ngọc Thanh", phone: "0904832202", image: "images/thanhnn2.png", used: false },
    { id: 28, name: "Hoài Hà", phone: "0978953618", image: "images/hoaih.png", used: false },


];

let tasks = [
  { "id": 1, "text": "Hát 1 bài hoặc uống 1 chén" },
  { "id": 2, "text": "Uống 1 chén hoặc hát 1 bài" },
  { "id": 3, "text": "Chỉ định bạn khác cùng team uống 2 chén" },
  { "id": 4, "text": "Đồng khởi với 1 bạn tự chỉ định 1 chén hoặc nộp phạt 200k" },
  { "id": 5, "text": "Đồng khởi với 1 bạn chỉ định 1 chén" },
  { "id": 6, "text": "Chỉ định khách mời uống 2 chén" },
  { "id": 7, "text": "Nộp phạt 200k hoặc tự uống 2 chén" },
  { "id": 8, "text": "Trả lời câu đố (sai: uống 1 chén hoặc phạt 200k)" },
  { "id": 9, "text": "Kể 1 câu chuyện vui" },
  { "id": 10, "text": "Nhảy 1 điệu nhảy" },
  { "id": 11, "text": "Tự uống 1 chén rồi chọn người tiếp theo uống 1 chén" },
  { "id": 12, "text": "Tất cả người cùng team (BE, IOS, ANDROID, SA, DEVOPS) đồng khởi 1 chén" },
  { "id": 13, "text": "Chỉ định người bên phải uống 2 chén" },
  { "id": 14, "text": "Chỉ định người bên trái uống 2 chén" },
  { "id": 15, "text": "Uống 1 chén nếu không làm được 5 cái chống đẩy" },
  { "id": 16, "text": "Được thưởng 100k" },
  { "id": 17, "text": "Nhắn tin cho người yêu cũ nói muốn quay lại hoặc uống 2 chén hoặc nộp phạt 200k" },
  { "id": 16, "text": "Được người bên kế bên trái thưởng 100k, hoặc người bên trái uống 1 chén" },
  { "id": 18, "text": "Khen một người thật lòng hoặc uống 1 chén" },
  { "id": 19, "text": "Không kể được 3 món ăn có chữ 'nước' thì uống 1 chén" },
  { "id": 20, "text": "Để mọi người xem lịch sử YouTube gần nhất hoặc nộp phạt 300k" },
  { "id": 21, "text": "Chỉ định 1 người kể bí mật nhỏ – từ chối: uống 1 chén hoặc phạt 200k" },
  { "id": 22, "text": "Đồng khởi vòng tròn: ai dừng đầu tiên uống 1 chén" },
  { "id": 23, "text": "Bốc thăm 1 người – cả hai cùng uống 1 chén" },
  { "id": 24, "text": "Gọi 1 người ngoài cuộc nói 'Tớ nhớ cậu' hoặc nộp phạt 300k" },
  { "id": 25, "text": "Đứng lên pose dáng 5 giây – ngại thì uống 1 chén" },
  { "id": 26, "text": "Kể 3 điểm tốt về bản thân, thiếu mỗi điểm uống 1 chén" },
  { "id": 27, "text": "Chọn người bên trái hoặc phải: người đó uống 1 chén" },
  { "id": 28, "text": "Oẳn tù tì với người kế bên phải, thua uống 1 chén" },
  { "id": 29, "text": "Không đọc ngược được tên mình thì uống 1 chén" },
  { "id": 30, "text": "Làm mặt xấu 1 tấm cho nhóm – từ chối uống 1 chén" },
  { "id": 31, "text": "Hỏi nhanh 3 câu về 1 người chơi – sai mỗi câu uống 1 chén" },
  { "id": 32, "text": "Cạch với 1 người bất kỳ và cả hai cùng uống 1 chén" },
  { "id": 33, "text": "Đổi điện thoại với người bên cạnh 30 giây hoặc phạt 300k" },
  { "id": 34, "text": "Giả giọng nhân vật hoạt hình – không làm được uống 1 chén" },
  { "id": 35, "text": "Chỉ định 1 người nói 3 điều họ ghét – nếu họ không nói: bạn uống 1 chén" },
  { "id": 36, "text": "Không nhớ tên 3 người chơi trong bàn thì uống 1 chén" },
  { "id": 37, "text": "Cả nhóm hỏi 1 câu khó – nếu trả lời sai uống 2 chén hoặc phạt 200k" },
  { "id": 38, "text": "Phạt 200k và chỉ định 1 người uống 1 chén" }
]

let history = [];
let nextEmployeeId = 25;
let nextTaskId = 11;

// Wheel variables
let canvas, ctx;
let wheelRotation = 0;
let isSpinning = false;
let spinSpeed = 0;
let targetRotation = 0;
let bgMusic = new Audio('nhacnen.mp3'); // Nhạc nền
bgMusic.loop = true; // Lặp lại nhạc nền
let winSounds = [new Audio('winner.mp3'), new Audio('winner2.mp3')]; // Danh sách nhạc chiến thắng
let lastWinSoundIndex = 0;

// Vibrant color palette for wheel segments
const colors = [
    '#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCF7F', '#95E1D3',
    '#F38181', '#AA96DA', '#FCBAD3', '#A8D8EA', '#FFAAA5',
    '#FF8B94', '#A8E6CF', '#FFD3B6', '#FFAAA5', '#AA96DA',
    '#C7CEEA', '#FFDAC1', '#FF8B94', '#B4F8C8', '#FBE7C6',
    '#A0E7E5', '#FFAEBC', '#B4F8C8', '#FFC6FF'
];

// Initialize
function init() {
    canvas = document.getElementById('wheelCanvas');
    ctx = canvas.getContext('2d');

    renderEmployees();
    renderTasks();
    renderHistory();
    updateStats();
    drawWheel();
}

// Draw the wheel
function drawWheel() {
    const availableEmployees = employees.filter(e => !e.used);

    if (availableEmployees.length === 0) {
        // Draw empty wheel
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Draw circle
        ctx.beginPath();
        const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 20;
        ctx.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#f0f0f0';
        ctx.fill();

        // Draw text
        ctx.fillStyle = '#999';
        ctx.font = 'bold 32px Quicksand';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Không còn người nào!', 0, 0);

        ctx.restore();
        return;
    }

    const numSegments = availableEmployees.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context
    ctx.save();

    // Translate to center
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Rotate entire wheel
    ctx.rotate(wheelRotation);

    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 20;

    // Draw segments
    for (let i = 0; i < numSegments; i++) {
        const startAngle = i * anglePerSegment;
        const endAngle = (i + 1) * anglePerSegment;

        // Draw segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        // Draw border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw text
        ctx.save();
        ctx.rotate(startAngle + anglePerSegment / 2);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Quicksand';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        ctx.fillText(availableEmployees[i].name, maxRadius - 20, 0);
        ctx.restore();
    }

    // Draw center circle (for button area)
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();

    ctx.restore();
}

// Spin the wheel
function spinWheel() {
    if (isSpinning) return;

    const availableEmployees = employees.filter(e => !e.used);

    if (availableEmployees.length === 0) {
        alert('Tất cả nhân viên đã được chọn! Vui lòng reset game.');
        return;
    }

    if (tasks.length === 0) {
        alert('Vui lòng thêm ít nhất 1 công việc!');
        return;
    }

    isSpinning = true;
    document.getElementById('spinBtn').disabled = true;

    // Random number of rotations (5-10 full spins) + random final position
    const numSegments = availableEmployees.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;
    const randomSegment = Math.floor(Math.random() * numSegments);
    const extraRotations = 10 + Math.random() * 10; // 10-20 full rotations

    // Calculate target rotation (pointer is at top, so we need to adjust)
    targetRotation = wheelRotation + (extraRotations * 2 * Math.PI) + (randomSegment * anglePerSegment) + (anglePerSegment / 2);
    spinSpeed = 0.5; // Initial speed

    // Stop winner sound if playing
    winSounds.forEach(sound => {
        if (!sound.paused) {
            sound.pause();
        }
        sound.currentTime = 0;
    });

    // Play background music
    bgMusic.currentTime = 0;
    bgMusic.play().catch(e => console.log('Background music play failed:', e));

    animateWheel();
}

// Animate wheel spinning
function animateWheel() {
    if (!isSpinning) return;

    const diff = targetRotation - wheelRotation;

    if (Math.abs(diff) > 0.01) {
        // Ease out effect
        spinSpeed = diff * 0.025;
        wheelRotation += spinSpeed;
        drawWheel();
        requestAnimationFrame(animateWheel);
    } else {
        // Spinning complete
        wheelRotation = targetRotation;
        drawWheel();
        isSpinning = false;
        document.getElementById('spinBtn').disabled = false;
        
        // Stop background music
        bgMusic.pause();
        bgMusic.currentTime = 0;

        // Determine winner
        selectWinner();
    }
}

// Select winner based on wheel position
function selectWinner() {
    const availableEmployees = employees.filter(e => !e.used);
    const numSegments = availableEmployees.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;

    // The pointer is visually at the top (12 o'clock position)
    // In Canvas arc system: 0 is 3 o'clock, increasing clockwise
    // So 12 o'clock is 270 degrees or 3*PI/2 or -PI/2
    const pointerAngle = 3 * Math.PI / 2;

    // We want to find the segment angle that aligns with the pointerAngle after rotation
    // segmentAngle + rotation = pointerAngle
    // segmentAngle = pointerAngle - rotation
    let relativeAngle = pointerAngle - wheelRotation;

    // Normalize to [0, 2π)
    relativeAngle = (relativeAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    // Calculate index
    let winningIndex = Math.floor(relativeAngle / anglePerSegment);

    // Ensure index is valid
    winningIndex = winningIndex % numSegments;

    const selectedEmployee = availableEmployees[winningIndex];
    const selectedTask = tasks[Math.floor(Math.random() * tasks.length)];

    // Mark employee as used
    const empIndex = employees.findIndex(e => e.id === selectedEmployee.id);
    employees[empIndex].used = true;

    // Display result
    // Display result with image
    let imageHtml = '';
    if (selectedEmployee.image) {
        imageHtml = `<img src="${selectedEmployee.image}" alt="${selectedEmployee.name}" class="winner-image">`;
    }

    document.getElementById('selectedTaskDisplay').innerHTML = `
        ${imageHtml}
        <div><strong>${selectedEmployee.name}</strong> - ${selectedTask.text}</div>
    `;

    // Show popup
    showPopup();

    // Play winner sound
    // Alternate between sounds (xen kẽ)
    lastWinSoundIndex = (lastWinSoundIndex + 1) % winSounds.length;
    const winSound = winSounds[lastWinSoundIndex];
    
    winSound.currentTime = 0;
    winSound.play().catch(e => console.log('Audio play failed:', e));

    // Add to history
    history.unshift({
        employee: selectedEmployee,
        task: selectedTask
    });

    // Update UI
    renderEmployees();
    renderHistory();
    updateStats();
    triggerFireworks();
}

// Update statistics
function updateStats() {
    const total = employees.length;
    const remaining = employees.filter(e => !e.used).length;

    document.getElementById('totalEmployees').textContent = total;
    document.getElementById('remainingEmployees').textContent = remaining;
}

// Render employee list
function renderEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.className = `employee-item ${employee.used ? 'used' : ''}`;
        div.innerHTML = `
            ${employee.image ? `<img src="${employee.image}" class="employee-avatar" onerror="this.style.display='none'">` : ''}
            <div class="employee-info">
                <div class="employee-name">${employee.name}</div>
                <div class="employee-phone">${employee.phone}</div>
            </div>
            <button class="btn-delete" onclick="deleteEmployee(${employee.id})">🗑️</button>
        `;
        employeeList.appendChild(div);
    });
}

// Render task list
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-item';
        div.innerHTML = `
            <div class="task-text">${task.text}</div>
            <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
        `;
        taskList.appendChild(div);
    });
}

// Render history
function renderHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = '<div style="text-align: center; color: #999; padding: 20px;">Chưa có lịch sử</div>';
        return;
    }

    history.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div class="history-employee">🎯 ${item.employee.name} (${item.employee.phone})</div>
            <div class="history-task">📌 ${item.task.text}</div>
        `;
        historyList.appendChild(div);
    });
}

// Add employee
function addEmployee() {
    const nameInput = document.getElementById('employeeName');
    const phoneInput = document.getElementById('employeePhone');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !phone) {
        alert('Vui lòng nhập đầy đủ tên và số điện thoại!');
        return;
    }

    employees.push({
        id: nextEmployeeId++,
        name: name,
        phone: phone,
        used: false
    });

    nameInput.value = '';
    phoneInput.value = '';

    renderEmployees();
    updateStats();
    drawWheel();
}

// Delete employee
function deleteEmployee(id) {
    if (confirm('Bạn có chắc muốn xóa nhân viên này?')) {
        employees = employees.filter(e => e.id !== id);
        renderEmployees();
        updateStats();
        drawWheel();
    }
}

// Add task
function addTask() {
    const taskInput = document.getElementById('taskName');
    const text = taskInput.value.trim();

    if (!text) {
        alert('Vui lòng nhập công việc!');
        return;
    }

    tasks.push({
        id: nextTaskId++,
        text: text
    });

    taskInput.value = '';
    renderTasks();
}

// Delete task
function deleteTask(id) {
    if (confirm('Bạn có chắc muốn xóa công việc này?')) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }
}

// Reset game
function resetGame() {
    if (confirm('Bạn có chắc muốn reset game? Tất cả lịch sử sẽ bị xóa.')) {
        // Reset all employees
        employees.forEach(e => e.used = false);

        // Clear history
        history = [];

        // Reset display
        document.getElementById('selectedTaskDisplay').textContent = 'Nhấn QUAY để bắt đầu';
        
        // Close popup if open
        closePopup();

        // Reset wheel rotation
        wheelRotation = 0;

        // Update UI
        renderEmployees();
        renderHistory();
        updateStats();
        drawWheel();
    }
}

// Popup functions
function showPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.classList.add('show');
}

function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.classList.remove('show');
}

// Close popup when clicking on overlay
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
});

// Initialize when page loads
window.addEventListener('DOMContentLoaded', init);

// Trigger fireworks effect
function triggerFireworks() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
