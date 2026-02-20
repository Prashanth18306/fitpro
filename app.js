/* ===== EXERCISE DATABASE ===== */
const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    muscle: "Chest",
    category: "chest",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    desc: "The bench press is a foundational compound exercise that builds massive chest strength and size.",
    instructions: [
      "Lie flat on a bench and grab the barbell with a medium-width grip.",
      "Lower the bar slowly to your mid-chest.",
      "Push the bar back up until your arms are fully extended.",
      "Keep your feet flat on the floor and maintain a slight arch in your lower back."
    ]
  },
  {
    id: 2,
    name: "Deadlift",
    muscle: "Back",
    category: "back",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b591d?auto=format&fit=crop&w=800&q=80",
    desc: "The ultimate full-body strength builder, primarily targeting the posterior chain including the back and legs.",
    instructions: [
      "Stand with mid-foot under the barbell.",
      "Bend over and grab the bar with a shoulder-width grip.",
      "Bend your knees until your shins touch the bar.",
      "Lift your chest up and straighten your back.",
      "Pull the bar up while keeping it close to your body."
    ]
  },
  {
    id: 3,
    name: "Barbell Squats",
    muscle: "Legs",
    category: "legs",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    desc: "The king of all exercises. Squats build powerful legs, core stability, and overall body strength.",
    instructions: [
      "Place the barbell across your upper back (traps).",
      "Stand with feet shoulder-width apart.",
      "Lower your hips by bending your knees until your thighs are parallel to the floor.",
      "Drive back up to the starting position through your heels."
    ]
  },
  {
    id: 4,
    name: "Military Press",
    muscle: "Shoulders",
    category: "shoulders",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b591d?auto=format&fit=crop&w=800&q=80",
    desc: "A powerful overhead press that builds boulder-like shoulders and upper body stability.",
    instructions: [
      "Hold the barbell at shoulder height with a slightly wider than shoulder-width grip.",
      "Press the bar overhead until your elbows are locked out.",
      "Lower the bar back to the starting position in a controlled manner."
    ]
  },
  {
    id: 5,
    name: "Pull-Ups",
    muscle: "Back",
    category: "back",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    desc: "One of the most effective bodyweight exercises for building a wide, V-taper back.",
    instructions: [
      "Grab the pull-up bar with an overhand grip wider than shoulder-width.",
      "Pull yourself up until your chin is over the bar.",
      "Lower yourself back down with full control."
    ]
  },
  {
    id: 6,
    name: "Dumbbell Bicep Curls",
    muscle: "Biceps",
    category: "biceps",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    desc: "The classic exercise for peaking your biceps and building impressive arm size.",
    instructions: [
      "Stand with a dumbbell in each hand, palms facing forward.",
      "Curl the weights toward your shoulders while keeping your elbows stationary.",
      "Lower the weights slowly back to the start."
    ]
  },
  {
    id: 7,
    name: "Tricep Dips",
    muscle: "Triceps",
    category: "triceps",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917a63e?auto=format&fit=crop&w=800&q=80",
    desc: "An elite bodyweight movement that targets the triceps, chest, and front deltoids.",
    instructions: [
      "Support your body on dip bars with arms straight.",
      "Lower your body by bending your elbows until they are at a 90-degree angle.",
      "Push yourself back up to the starting position."
    ]
  },
  {
    id: 8,
    name: "Plank",
    muscle: "Core",
    category: "core",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1566241142559-40e1bfc26ebc?auto=format&fit=crop&w=800&q=80",
    desc: "A foundational isometric core exercise that builds incredible abdominal stability.",
    instructions: [
      "Get into a push-up position but rest your weight on your forearms instead of your hands.",
      "Keep your body in a straight line from head to heels.",
      "Hold the position for as long as possible while engaging your core."
    ]
  },
  {
    id: 9,
    name: "Glute Bridges",
    muscle: "Glutes",
    category: "glutes",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80",
    desc: "A highly effective isolation exercise for building stronger, more powerful glutes.",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Lift your hips toward the ceiling while squeezing your glutes.",
      "Hold for a second at the top and lower back down."
    ]
  }
];

/* ===== DOM ELEMENTS ===== */
const exercisesGrid = document.getElementById('exercises-grid');
const muscleCardsGrid = document.getElementById('muscle-cards-grid');
const searchInput = document.getElementById('exercise-search');
const filterTabs = document.querySelectorAll('.filter-tab');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close-btn');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const counterNums = document.querySelectorAll('.stat-num');

/* ===== FUNCTIONS ===== */

// Initialize Website
function init() {
  renderExercises(exercises);
  renderMuscleGroups();
  setupEventListeners();
  handleNavbarScroll();
  initCounters();
}

// Render Exercises
function renderExercises(data) {
  exercisesGrid.innerHTML = '';
  
  if (data.length === 0) {
    exercisesGrid.innerHTML = '<div class="no-results">No exercises found. Try a different search!</div>';
    return;
  }

  data.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.setAttribute('data-category', ex.category);
    
    card.innerHTML = `
      <div class="ex-image" style="background-image: url('${ex.image}')">
        <div class="ex-badge">${ex.difficulty}</div>
      </div>
      <div class="ex-content">
        <span class="ex-muscle">${ex.muscle}</span>
        <h3 class="ex-name">${ex.name}</h3>
        <p class="ex-desc">${ex.desc}</p>
        <div class="ex-footer">
          <div class="view-btn" onclick="openExerciseModal(${ex.id})">
            View Details <span>→</span>
          </div>
        </div>
      </div>
    `;
    exercisesGrid.appendChild(card);
  });
}

// Render Muscle Group Shortcut Cards
function renderMuscleGroups() {
  const categories = [...new Set(exercises.map(ex => ex.category))];
  const icons = {
    chest: '🏋️',
    back: '🦅',
    legs: '🦵',
    shoulders: '🛡️',
    biceps: '💪',
    triceps: '🧨',
    core: '🧱',
    glutes: '🍑',
    cardio: '🏃'
  };

  muscleCardsGrid.innerHTML = '';
  
  categories.forEach(cat => {
    const count = exercises.filter(ex => ex.category === cat).length;
    const card = document.createElement('div');
    card.className = 'muscle-card';
    card.onclick = () => filterByCategory(cat);
    
    card.innerHTML = `
      <div class="muscle-icon-bg">${icons[cat] || '🔥'}</div>
      <h3>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
      <span class="muscle-count">${count} Exercises</span>
    `;
    muscleCardsGrid.appendChild(card);
  });
}

// Filter Logic
function filterByCategory(category) {
  // Update Tabs UI
  filterTabs.forEach(tab => {
    if (tab.getAttribute('data-filter') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const filtered = category === 'all' 
    ? exercises 
    : exercises.filter(ex => ex.category === category);
  
  renderExercises(filtered);
  
  // Scroll to exercises section
  if (category !== 'all') {
    document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
  }
}

// Search Logic
function handleSearch(e) {
  const term = e.target.value.toLowerCase();
  const filtered = exercises.filter(ex => 
    ex.name.toLowerCase().includes(term) || 
    ex.muscle.toLowerCase().includes(term) ||
    ex.desc.toLowerCase().includes(term)
  );
  renderExercises(filtered);
}

// Modal Logic
window.openExerciseModal = function(id) {
  const ex = exercises.find(e => e.id === id);
  if (!ex) return;

  modalContent.innerHTML = `
    <div class="modal-body-grid">
      <div class="modal-visual">
        <img src="${ex.image}" alt="${ex.name}" style="width:100%; border-radius:20px; border:1px solid rgba(255,255,255,0.1)">
      </div>
      <div class="modal-info">
        <span class="section-tag">${ex.muscle} • ${ex.difficulty}</span>
        <h2 class="section-title" style="margin-bottom:1rem">${ex.name}</h2>
        <p class="section-subtitle" style="text-align:left; margin-bottom:2rem">${ex.desc}</p>
        
        <h4 style="color:#fff; margin-bottom:1rem">Instructions:</h4>
        <ul class="modal-steps" style="color:var(--text-muted); padding-left:1.5rem">
          ${ex.instructions.map(step => `<li style="margin-bottom:0.8rem">${step}</li>`).join('')}
        </ul>

        <div style="margin-top:3rem; display:flex; gap:1rem">
          <button class="btn btn-primary" onclick="closeModal()">Got it!</button>
          <button class="btn btn-outline">Add to Routine</button>
        </div>
      </div>
    </div>
  `;
  
  modalOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Setup Listeners
function setupEventListeners() {
  // Tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterByCategory(tab.getAttribute('data-filter'));
    });
  });

  // Search
  searchInput.addEventListener('input', handleSearch);

  // Modal Close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Hotspots
  document.querySelectorAll('.muscle-hotspot').forEach(spot => {
    spot.addEventListener('click', () => {
      const muscle = spot.getAttribute('data-muscle').toLowerCase();
      // Map body muscle names to categories if needed
      const mapping = {
        shoulders: 'shoulders',
        chest: 'chest',
        back: 'back',
        biceps: 'biceps',
        triceps: 'triceps',
        core: 'core',
        glutes: 'glutes',
        quads: 'legs',
        calves: 'legs'
      };
      filterByCategory(mapping[muscle] || 'all');
    });
  });

  // Form
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Counter Animation
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterNums.forEach(num => observer.observe(num));
}

function animateCounter(el, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    el.textContent = Math.floor(current);
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, 30);
}

// Run Init
init();
