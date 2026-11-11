(function () {
  const STORAGE_KEY_BURGERS = "mc_cola_burgers_v6";
  const STORAGE_KEY_CONDIMENTS = "mc_cola_condiments_v6";
  const STORAGE_KEY_USERS = "mc_cola_users_v1";
  const STORAGE_KEY_CURRENT_USER = "mc_cola_current_user_v1";

  const DEFAULT_USERS = [
    {
      id: "maik",
      name: "Maik",
      character: "Subaru",
      avatar: "images/users/maik-subaru.jpg"
    },
    {
      id: "gabriel",
      name: "Gabriel",
      character: "Luffy",
      avatar: "images/users/gabriel-luffy.jpg"
    },
    {
      id: "lauana",
      name: "Lauana",
      character: "Luluzinha",
      avatar: "images/users/lauana-luluzinha.jpg"
    }
  ];

  const DEFAULT_BURGERS = JSON.parse(JSON.stringify(BURGERS));
  const DEFAULT_CONDIMENTS = JSON.parse(JSON.stringify(CONDIMENTS));

  let burgersData = loadBurgersFromStorage();
  let condimentsData = loadCondimentsFromStorage();
  let usersData = loadUsersFromStorage();
  let currentUserId = localStorage.getItem(STORAGE_KEY_CURRENT_USER) || "maik";

  // Elementos da Tela de Identificação de Usuário e Canto Superior Direito
  const userSelectScreenEl = document.getElementById("user-select-screen");
  const userProfilesGridEl = document.getElementById("user-profiles-grid");
  const activeUserAvatarEl = document.getElementById("active-user-avatar");
  const activeUserNameEl = document.getElementById("active-user-name");
  const activeUserDisplayBox = document.getElementById("active-user-display-box");
  const activeUserEditBox = document.getElementById("active-user-edit-box");
  const activeUserNameInput = document.getElementById("active-user-name-input");
  const editUserNameBtn = document.getElementById("edit-user-name-btn");
  const saveUserNameBtn = document.getElementById("save-user-name-btn");
  const cancelUserNameBtn = document.getElementById("cancel-user-name-btn");
  const switchUserBtn = document.getElementById("switch-user-btn");
  const switchUserAvatarBtn = document.getElementById("switch-user-avatar-btn");

  // Elementos da Tela Inicial
  const gridEl = document.getElementById("burger-grid");
  const emptyStateEl = document.getElementById("empty-state");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const toggleShowInactiveBtn = document.getElementById("toggle-show-inactive-btn");
  const inactiveToggleIcon = document.getElementById("inactive-toggle-icon");
  const inactiveToggleLabel = document.getElementById("inactive-toggle-label");
  const countInactiveEl = document.getElementById("count-inactive");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  const countAllEl = document.getElementById("count-all");

  // Botões do Topo (Administração / Criação)
  const newBurgerBtn = document.getElementById("new-burger-btn");
  const manageCondimentsBtn = document.getElementById("manage-condiments-btn");
  const exportDataBtn = document.getElementById("export-data-btn");
  const resetDefaultBtn = document.getElementById("reset-default-btn");

  // Elementos do Modal do Hambúrguer (Visualização Estilo Placa Vertical)
  const modalEl = document.getElementById("detail-modal");
  const modalWindowBox = document.getElementById("modal-window-box");
  const modalHeaderView = document.getElementById("modal-header-view");
  const modalFooterView = document.getElementById("modal-footer-view");
  const modalImgEl = document.getElementById("modal-burger-img");
  const modalNameEl = document.getElementById("modal-burger-name");
  const modalBunEl = document.getElementById("modal-burger-bun");
  const modalCategoryBadge = document.getElementById("modal-category-badge");
  const modalTongBadge = document.getElementById("modal-tong-badge");
  const modalPackBadge = document.getElementById("modal-packaging-badge");
  const modalBodyScrollEl = document.getElementById("modal-body-scroll");
  const modalBodyEl = document.getElementById("modal-body");
  const toggleBurgerActiveBtn = document.getElementById("toggle-burger-active-btn");
  const toggleActiveModalIcon = document.getElementById("toggle-active-modal-icon");
  const toggleActiveModalText = document.getElementById("toggle-active-modal-text");
  const toggleEditBtn = document.getElementById("toggle-edit-btn");
  const closeTopBtn = document.getElementById("modal-close-top");
  const closeBottomBtn = document.getElementById("modal-close-bottom");
  const prevBurgerBtn = document.getElementById("prev-burger-btn");
  const nextBurgerBtn = document.getElementById("next-burger-btn");
  const prevBurgerLabel = document.getElementById("prev-burger-label");
  const nextBurgerLabel = document.getElementById("next-burger-label");

  // Elementos do Modal do Hambúrguer (Edição)
  const modalHeaderEdit = document.getElementById("modal-header-edit");
  const modalFooterEdit = document.getElementById("modal-footer-edit");
  const editMetaPanel = document.getElementById("edit-burger-meta-panel");
  const editImgPreview = document.getElementById("edit-burger-img-preview");
  const editFileInput = document.getElementById("edit-burger-file-input");
  const editImageInput = document.getElementById("edit-burger-image");
  const editNameInput = document.getElementById("edit-burger-name");
  const editCategorySelect = document.getElementById("edit-burger-category");
  const editTongSelect = document.getElementById("edit-burger-tong");
  const editTongLabelInput = document.getElementById("edit-burger-tong-label");
  const editBunInput = document.getElementById("edit-burger-bun");
  const editPackagingInput = document.getElementById("edit-burger-packaging");
  const editActiveSelect = document.getElementById("edit-burger-active");
  const saveEditBtn = document.getElementById("save-edit-btn");
  const saveEditBottomBtn = document.getElementById("save-edit-bottom-btn");
  const cancelEditBtn = document.getElementById("cancel-edit-btn");
  const cancelEditBottomBtn = document.getElementById("cancel-edit-bottom-btn");
  const duplicateBurgerBtn = document.getElementById("duplicate-burger-btn");
  const deleteBurgerBtn = document.getElementById("delete-burger-btn");
  const addSectionBtn = document.getElementById("add-section-btn");

  // Elementos do Modal de Condimentos
  const condimentsModalEl = document.getElementById("condiments-modal");
  const closeCondimentsModalBtn = document.getElementById("close-condiments-modal-btn");
  const doneCondimentsBtn = document.getElementById("done-condiments-btn");
  const condimentsListEl = document.getElementById("condiments-manager-list");
  const newCondNameInput = document.getElementById("new-cond-name");
  const newCondTypeSelect = document.getElementById("new-cond-type");
  const newCondImageInput = document.getElementById("new-cond-image");
  const newCondFileInput = document.getElementById("new-cond-file");
  const createCondimentBtn = document.getElementById("create-condiment-btn");

  // Toast
  const toastEl = document.getElementById("toast-notification");
  let toastTimer = null;

  // Estado de navegação e edição
  let activeCategory = "all";
  let showInactiveBurgers = false;
  let searchQuery = "";
  let filteredBurgers = [];
  let currentBurgerId = null;
  let isEditing = false;
  let draftBurger = null;
  let isCreatingNewBurger = false;

  const CATEGORY_LABELS = {
    bovinos: "Clássico Bovino",
    tasty: "Linha Tasty",
    crispy: "Linha Crispy",
    "aves-peixe": "Frango & Peixe",
    brabos: "Brabos & Especiais"
  };

  const BUN_PRESETS = [
    { label: "🍞 Pão Regular (Coroa)", value: "images/condiments/pao-aberto-coroa.jpg" },
    { label: "🍞 Pão com Gergelim (Coroa)", value: "images/condiments/pao-aberto-gergelim.jpg" },
    { label: "🍞🍞 Pão Duplo Coroa + Clube (Big Mac)", value: "images/condiments/pao-aberto-clube-duplo.jpg" },
    { label: "🍞 Pão Escuro (Cheddar McMelt)", value: "images/condiments/pao-aberto-escuro.jpg" },
    { label: "🍞 Pão Base Inferior", value: "images/condiments/pao-aberto-base.jpg" }
  ];

  function loadBurgersFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_BURGERS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Erro ao carregar hambúrgueres salvos:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_BURGERS));
  }

  function loadCondimentsFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CONDIMENTS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          return { ...JSON.parse(JSON.stringify(DEFAULT_CONDIMENTS)), ...parsed };
        }
      }
    } catch (e) {
      console.warn("Erro ao carregar condimentos salvos:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CONDIMENTS));
  }

  function loadUsersFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_USERS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === DEFAULT_USERS.length) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Erro ao carregar usuários salvos:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_USERS));
  }

  function saveUsersToStorage(message) {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(usersData));
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, currentUserId);
      if (message) showToast(message);
    } catch (e) {
      console.warn("Erro ao salvar usuário:", e);
    }
  }

  function getCurrentUser() {
    return usersData.find((u) => u.id === currentUserId) || usersData[0];
  }

  function updateTopRightUserWidget() {
    const user = getCurrentUser();
    if (!user) return;
    if (activeUserAvatarEl) {
      activeUserAvatarEl.src = user.avatar;
      activeUserAvatarEl.alt = user.name;
    }
    if (activeUserNameEl) {
      activeUserNameEl.textContent = user.name;
    }
  }

  function syncBodyScrollLock() {
    const anyModalOpen =
      (userSelectScreenEl && !userSelectScreenEl.hidden) ||
      (modalEl && !modalEl.hidden) ||
      (condimentsModalEl && !condimentsModalEl.hidden);

    document.documentElement.classList.toggle("modal-open", !!anyModalOpen);
    document.body.classList.toggle("modal-open", !!anyModalOpen);
    document.body.style.overflow = anyModalOpen ? "hidden" : "";
  }

  function selectUserProfile(userId) {
    const user = usersData.find((u) => u.id === userId);
    if (!user) return;
    currentUserId = user.id;
    saveUsersToStorage(`👋 Olá, ${user.name}! Bom trabalho na linha!`);
    updateTopRightUserWidget();
    if (userSelectScreenEl) {
      userSelectScreenEl.hidden = true;
      document.body.classList.remove("user-screen-open");
    }
    syncBodyScrollLock();
  }

  function openUserSelectScreen() {
    cancelTopRightNameEdit();
    renderUserSelectionScreen();
    if (userSelectScreenEl) {
      userSelectScreenEl.hidden = false;
      document.body.classList.add("user-screen-open");
    }
    syncBodyScrollLock();
  }

  function renderUserSelectionScreen() {
    if (!userProfilesGridEl) return;
    userProfilesGridEl.innerHTML = "";

    usersData.forEach((user) => {
      const isSelected = user.id === currentUserId;
      const card = document.createElement("div");
      card.className = `user-profile-card ${isSelected ? "is-current-user" : ""}`;
      card.setAttribute("role", "listitem");

      card.innerHTML = `
        <button type="button" class="user-card-select-area" title="Entrar como ${user.name}">
          <div class="user-avatar-ring">
            <img src="${user.avatar}" alt="${user.name}" class="user-card-avatar-img" />
          </div>
          <div class="user-card-name">${user.name}</div>
          <span class="user-enter-pill">Entrar na Linha ➔</span>
        </button>

        <div class="user-card-rename-area">
          <button type="button" class="user-card-rename-trigger" title="Alterar nome deste perfil">
            ✏️ Alterar nome
          </button>
          <div class="user-card-rename-form" hidden>
            <input
              type="text"
              class="user-card-rename-input"
              maxlength="28"
              value="${user.name.replace(/"/g, "&quot;")}"
              placeholder="Nome do usuário"
            />
            <div class="user-card-rename-btns">
              <button type="button" class="user-card-rename-save">Salvar</button>
              <button type="button" class="user-card-rename-cancel">Cancelar</button>
            </div>
          </div>
        </div>
      `;

      const selectAreaBtn = card.querySelector(".user-card-select-area");
      selectAreaBtn.addEventListener("click", () => {
        selectUserProfile(user.id);
      });

      const renameTrigger = card.querySelector(".user-card-rename-trigger");
      const renameForm = card.querySelector(".user-card-rename-form");
      const renameInput = card.querySelector(".user-card-rename-input");
      const renameSave = card.querySelector(".user-card-rename-save");
      const renameCancel = card.querySelector(".user-card-rename-cancel");

      renameTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        renameTrigger.hidden = true;
        renameForm.hidden = false;
        renameInput.value = user.name;
        renameInput.focus();
        renameInput.select();
      });

      const commitCardRename = () => {
        const newName = renameInput.value.trim();
        if (newName) {
          user.name = newName;
          saveUsersToStorage(`✓ Nome atualizado para "${newName}"!`);
          updateTopRightUserWidget();
          renderUserSelectionScreen();
        } else {
          renameForm.hidden = true;
          renameTrigger.hidden = false;
        }
      };

      renameSave.addEventListener("click", (e) => {
        e.stopPropagation();
        commitCardRename();
      });

      renameCancel.addEventListener("click", (e) => {
        e.stopPropagation();
        renameForm.hidden = true;
        renameTrigger.hidden = false;
      });

      renameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitCardRename();
        } else if (e.key === "Escape") {
          renameForm.hidden = true;
          renameTrigger.hidden = false;
        }
      });

      userProfilesGridEl.appendChild(card);
    });
  }

  function openTopRightNameEdit() {
    const user = getCurrentUser();
    if (!user || !activeUserEditBox || !activeUserDisplayBox) return;
    activeUserDisplayBox.hidden = true;
    activeUserEditBox.hidden = false;
    activeUserNameInput.value = user.name;
    activeUserNameInput.focus();
    activeUserNameInput.select();
  }

  function saveTopRightNameEdit() {
    const user = getCurrentUser();
    if (!user || !activeUserNameInput) return;
    const newName = activeUserNameInput.value.trim();
    if (newName) {
      user.name = newName;
      saveUsersToStorage(`✓ Nome alterado para "${newName}"!`);
      updateTopRightUserWidget();
      renderUserSelectionScreen();
    }
    cancelTopRightNameEdit();
  }

  function cancelTopRightNameEdit() {
    if (!activeUserEditBox || !activeUserDisplayBox) return;
    activeUserEditBox.hidden = true;
    activeUserDisplayBox.hidden = false;
  }

  function saveToStorage(message) {
    try {
      localStorage.setItem(STORAGE_KEY_BURGERS, JSON.stringify(burgersData));
      localStorage.setItem(STORAGE_KEY_CONDIMENTS, JSON.stringify(condimentsData));
      showToast(message || "✓ Alterações salvas automaticamente!");
    } catch (e) {
      alert("Atenção: Não foi possível salvar no armazenamento local (imagem muito grande).");
    }
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2800);
  }

  function normalizeText(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function countTotalSteps(burger) {
    return (burger.sections || []).reduce((acc, sec) => acc + (sec.steps || []).length, 0);
  }

  function inferBunImage(burger, section, secIdx) {
    if (section.bunImage) return section.bunImage;
    const titleUpper = (section.title || "").toUpperCase();
    const bunUpper = (burger.bun || "").toUpperCase();
    if (bunUpper.includes("ESCURO")) return "images/condiments/pao-aberto-escuro.jpg";
    if (titleUpper.includes("CLUBE")) return "images/condiments/pao-aberto-clube-duplo.jpg";
    if (titleUpper.includes("BASE") || secIdx > 0) return "images/condiments/pao-aberto-base.jpg";
    if (bunUpper.includes("GERGELIM")) return "images/condiments/pao-aberto-gergelim.jpg";
    return "images/condiments/pao-aberto-coroa.jpg";
  }

  function readFileAsDataURL(file, callback) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => callback(ev.target.result);
    reader.readAsDataURL(file);
  }

  function isBurgerActive(burger) {
    return burger && burger.active !== false;
  }

  function updateModalActiveButtonState(burger) {
    if (!toggleBurgerActiveBtn || !burger) return;
    const active = isBurgerActive(burger);
    toggleBurgerActiveBtn.classList.toggle("is-active", active);
    toggleBurgerActiveBtn.classList.toggle("is-inactive", !active);
    if (toggleActiveModalIcon) {
      toggleActiveModalIcon.textContent = active ? "🟢" : "⚪";
    }
    if (toggleActiveModalText) {
      toggleActiveModalText.textContent = active ? "ATIVO" : "DESATIVADO";
    }
  }

  function toggleBurgerActiveById(burgerId) {
    const burger = burgersData.find((b) => b.id === burgerId);
    if (!burger) return;
    const nextState = !isBurgerActive(burger);
    burger.active = nextState;

    const msg = nextState
      ? `🟢 "${burger.name}" ativado na linha!`
      : `⚪ "${burger.name}" desativado da linha!`;
    saveToStorage(msg);

    if (currentBurgerId === burgerId && !modalEl.hidden && !isEditing) {
      updateModalActiveButtonState(burger);
    }
    filterList();
  }

  function filterList() {
    const activeCount = burgersData.filter((b) => isBurgerActive(b)).length;
    const inactiveCount = burgersData.length - activeCount;

    if (countAllEl) {
      countAllEl.textContent = showInactiveBurgers ? burgersData.length : activeCount;
    }
    if (countInactiveEl) {
      countInactiveEl.textContent = inactiveCount;
    }
    if (toggleShowInactiveBtn) {
      toggleShowInactiveBtn.classList.toggle("active", showInactiveBurgers);
      if (inactiveToggleIcon) {
        inactiveToggleIcon.textContent = showInactiveBurgers ? "👁️" : "🙈";
      }
      if (inactiveToggleLabel) {
        inactiveToggleLabel.textContent = showInactiveBurgers
          ? "Ocultar Desativados"
          : "Mostrar Desativados";
      }
    }

    const q = normalizeText(searchQuery.trim());

    filteredBurgers = burgersData.filter((burger) => {
      if (!showInactiveBurgers && !isBurgerActive(burger)) {
        return false;
      }
      const matchesCat = activeCategory === "all" || burger.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;

      const nameMatch = normalizeText(burger.name).includes(q);
      const bunMatch = normalizeText(burger.bun).includes(q);
      const ingredientMatch = (burger.sections || []).some((sec) =>
        (sec.steps || []).some((st) => {
          const cond = condimentsData[st.condiment];
          const displayName = st.customName || (cond ? cond.name : st.condiment);
          return (
            normalizeText(displayName).includes(q) ||
            normalizeText(st.amount).includes(q) ||
            normalizeText(st.note).includes(q)
          );
        })
      );

      return nameMatch || bunMatch || ingredientMatch;
    });

    renderGrid();
  }

  function renderGrid() {
    gridEl.innerHTML = "";

    if (filteredBurgers.length === 0) {
      emptyStateEl.hidden = false;
      return;
    }

    emptyStateEl.hidden = true;

    filteredBurgers.forEach((burger) => {
      const totalItems = countTotalSteps(burger);
      const active = isBurgerActive(burger);
      const card = document.createElement("div");
      card.className = `burger-card ${active ? "" : "burger-card-inactive"}`;
      card.setAttribute("role", "listitem");
      card.tabIndex = 0;

      const tongBadgeClass = burger.tong === "green" ? "tong-green" : "tong-red";
      const tongShortText = burger.tong === "green" ? "🟢 Aves/Peixe" : "🔴 Bovino";

      card.innerHTML = `
        <div class="burger-card-top-bar">
          <div class="card-top-left-actions">
            <button
              type="button"
              class="card-toggle-active-btn ${active ? "is-active" : "is-inactive"}"
              title="${active ? "Toque para desativar este hambúrguer" : "Toque para ativar este hambúrguer"}"
            >
              ${active ? "🟢 Ativo" : "⚪ Desativado"}
            </button>
            <button type="button" class="card-quick-edit-btn" title="Editar este hambúrguer">
              ✏️ Editar
            </button>
          </div>
          <span class="card-tong-indicator ${tongBadgeClass}">${tongShortText}</span>
        </div>
        <div class="burger-img-box">
          <img src="${burger.image || "images/burgers/big-mac.jpg"}" alt="${burger.name}" loading="lazy" />
          ${!active ? '<span class="card-inactive-overlay-badge">DESATIVADO NA LINHA</span>' : ""}
        </div>
        <div class="burger-card-title">${burger.name}</div>
        <div class="burger-card-sub">${totalItems} itens na montagem</div>
      `;

      const toggleActiveBtn = card.querySelector(".card-toggle-active-btn");
      toggleActiveBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleBurgerActiveById(burger.id);
      });

      const quickEditBtn = card.querySelector(".card-quick-edit-btn");
      quickEditBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openBurgerModalById(burger.id, true);
      });

      card.addEventListener("click", () => openBurgerModalById(burger.id, false));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openBurgerModalById(burger.id, false);
        }
      });

      gridEl.appendChild(card);
    });

    // Card extra no fim da grade para Criar Novo Hambúrguer rapidamente
    const addCard = document.createElement("button");
    addCard.type = "button";
    addCard.className = "burger-card burger-card-add-new";
    addCard.innerHTML = `
      <div class="add-new-circle">＋</div>
      <div class="burger-card-title">Criar Novo Hambúrguer</div>
      <div class="burger-card-sub">Adicionar lanche ao cardápio</div>
    `;
    addCard.addEventListener("click", startCreateNewBurger);
    gridEl.appendChild(addCard);
  }

  function openBurgerModalById(burgerId, startInEditMode) {
    const burger = burgersData.find((b) => b.id === burgerId);
    if (!burger) return;

    currentBurgerId = burgerId;
    isCreatingNewBurger = false;

    if (startInEditMode) {
      enterEditMode(burger, false);
    } else {
      isEditing = false;
      draftBurger = null;
      renderModalView(burger);
    }

    modalEl.hidden = false;
    syncBodyScrollLock();
    if (modalBodyScrollEl) {
      modalBodyScrollEl.scrollTop = 0;
      modalBodyScrollEl.scrollLeft = 0;
    }
  }

  // =========================================================================
  // RENDERIZAÇÃO DA PLACA VERTICAL DE MONTAGEM (ESTILO FOTO DA LINHA)
  // =========================================================================
  function renderModalView(burger) {
    if (modalWindowBox) modalWindowBox.classList.remove("is-editing");
    modalHeaderView.hidden = false;
    modalFooterView.hidden = false;
    modalHeaderEdit.hidden = true;
    modalFooterEdit.hidden = true;
    if (editMetaPanel) editMetaPanel.hidden = true;

    modalImgEl.src = burger.image || "images/burgers/big-mac.jpg";
    modalImgEl.alt = burger.name;
    modalNameEl.textContent = burger.name;
    modalBunEl.textContent = `🍞 ${burger.bun || ""} • ⬆️ Montagem de baixo (Pão) para cima`;

    modalCategoryBadge.textContent =
      burger.categoryLabel || CATEGORY_LABELS[burger.category] || "Cardápio";
    modalTongBadge.textContent =
      burger.tongLabel ||
      (burger.tong === "green" ? "Pegador Verde • UHC 93°C" : "Pegador Vermelho • UHC 85°C");
    modalTongBadge.className = `meta-pill tong-pill ${
      burger.tong === "green" ? "tong-green" : "tong-red"
    }`;
    modalPackBadge.textContent = `📦 ${burger.packaging || "Embalagem Padrão"}`;
    updateModalActiveButtonState(burger);

    modalBodyEl.className = "board-columns-stage";
    modalBodyEl.innerHTML = "";

    (burger.sections || []).forEach((section, secIdx) => {
      const colEl = document.createElement("div");
      colEl.className = "board-column";

      // Pilha de condimentos: o CSS usa flex-direction: column-reverse,
      // portanto steps[0] fica logo acima do pão (1º) e o último fica no topo (ex: Carne).
      const stackHtml = (section.steps || [])
        .map((step, idx) => {
          const cond = condimentsData[step.condiment] || {
            name: step.condiment,
            image: "images/condiments/molho-big-mac.jpg",
            type: "sauce"
          };
          const displayName = step.customName || cond.name;
          const displayImg = step.customImage || cond.image;
          const cType = cond.type || "sauce";
          const isProtein = cType === "beef" || cType === "poultry" || cType === "fish";

          return `
            <div class="stack-item type-${cType} ${isProtein ? "is-protein" : ""}">
              <div class="stack-visual">
                <img src="${displayImg}" alt="${displayName}" />
              </div>
              <div class="stack-info">
                <div class="stack-qty-line">
                  <span class="stack-qty">${step.amount || ""}</span>
                  <span class="stack-step-num" title="Ordem de aplicação a partir do pão">${idx + 1}º</span>
                </div>
                <div class="stack-name">${displayName}</div>
                ${step.note ? `<div class="stack-note">${step.note}</div>` : ""}
              </div>
            </div>
          `;
        })
        .join("");

      const bunImg = inferBunImage(burger, section, secIdx);

      colEl.innerHTML = `
        <div class="board-stack">
          ${stackHtml}
        </div>
        <div class="board-bun-base">
          <div class="bun-visual">
            <img src="${bunImg}" alt="${section.title}" />
          </div>
          <div class="bun-info">
            <span class="bun-title-tag">${section.title}</span>
            ${section.subtitle ? `<span class="bun-sub-note">${section.subtitle}</span>` : ""}
          </div>
        </div>
      `;

      modalBodyEl.appendChild(colEl);
    });

    // Atualizar botões Anterior / Próximo
    const currentIdx = filteredBurgers.findIndex((b) => b.id === burger.id);
    if (currentIdx !== -1 && filteredBurgers.length > 0) {
      const prevIdx = (currentIdx - 1 + filteredBurgers.length) % filteredBurgers.length;
      const nextIdx = (currentIdx + 1) % filteredBurgers.length;
      prevBurgerLabel.textContent = filteredBurgers[prevIdx].name;
      nextBurgerLabel.textContent = filteredBurgers[nextIdx].name;
    }
  }

  // =========================================================================
  // MODO DE EDIÇÃO COMPLETA E CRIAÇÃO DE HAMBÚRGUER (COLUNAS VERTICAIS)
  // =========================================================================
  function startCreateNewBurger() {
    const newId = "lanche-" + Date.now();
    const blankBurger = {
      id: newId,
      name: "Novo Hambúrguer",
      category: activeCategory === "all" ? "bovinos" : activeCategory,
      categoryLabel:
        CATEGORY_LABELS[activeCategory === "all" ? "bovinos" : activeCategory] || "Clássico Bovino",
      image: "images/burgers/big-mac.jpg",
      bun: "Pão com Gergelim • Tostagem 22s a 293°C",
      tong: activeCategory === "aves-peixe" ? "green" : "red",
      tongLabel:
        activeCategory === "aves-peixe"
          ? "Pegador Verde • UHC 93°C"
          : "Pegador Vermelho • UHC 85°C",
      packaging: "Caixa Rígida ou Lâmina (Fechamento Bombom)",
      sections: [
        {
          title: "COROA",
          subtitle: "Condimentação de baixo para cima sobre a Coroa",
          bunImage: "images/condiments/pao-aberto-gergelim.jpg",
          steps: [
            {
              condiment: "mostarda",
              amount: "1/40 oz",
              note: "1 tiro micro-pistola"
            },
            {
              condiment: "ketchup",
              amount: "1/3 oz",
              note: "1 tiro centralizado"
            },
            {
              condiment: "queijoCheddar",
              amount: "1 unid.",
              note: "1 fatia de queijo Cheddar"
            },
            {
              condiment: "carne4_1",
              amount: "1 unid. (4:1)",
              note: "Pegador Vermelho"
            }
          ]
        },
        {
          title: "BASE",
          subtitle: "Pão Inferior para fechamento",
          bunImage: "images/condiments/pao-aberto-base.jpg",
          steps: []
        }
      ]
    };

    currentBurgerId = newId;
    isCreatingNewBurger = true;
    enterEditMode(blankBurger, true);
    modalEl.hidden = false;
    syncBodyScrollLock();
    if (modalBodyScrollEl) {
      modalBodyScrollEl.scrollTop = 0;
      modalBodyScrollEl.scrollLeft = 0;
    }
  }

  function enterEditMode(burgerObj, isNew) {
    isEditing = true;
    isCreatingNewBurger = !!isNew;
    draftBurger = JSON.parse(JSON.stringify(burgerObj));

    if (modalWindowBox) modalWindowBox.classList.add("is-editing");
    modalHeaderView.hidden = true;
    modalFooterView.hidden = true;
    modalHeaderEdit.hidden = false;
    modalFooterEdit.hidden = false;
    if (editMetaPanel) editMetaPanel.hidden = false;

    deleteBurgerBtn.hidden = isCreatingNewBurger;
    duplicateBurgerBtn.hidden = isCreatingNewBurger;

    // Preencher campos gerais do painel de metadados
    editImgPreview.src = draftBurger.image || "images/burgers/big-mac.jpg";
    editImageInput.value = draftBurger.image || "";
    editNameInput.value = draftBurger.name || "";
    editCategorySelect.value = draftBurger.category || "bovinos";
    editTongSelect.value = draftBurger.tong || "red";
    editTongLabelInput.value = draftBurger.tongLabel || "";
    editBunInput.value = draftBurger.bun || "";
    editPackagingInput.value = draftBurger.packaging || "";
    if (editActiveSelect) {
      editActiveSelect.value = isBurgerActive(draftBurger) ? "true" : "false";
    }

    renderEditSections();
    if (modalBodyScrollEl) modalBodyScrollEl.scrollTop = 0;
  }

  function syncHeaderInputsToDraft() {
    if (!draftBurger) return;
    draftBurger.name = editNameInput.value.trim() || "Hambúrguer Sem Nome";
    draftBurger.image = editImageInput.value.trim() || "images/burgers/big-mac.jpg";
    draftBurger.category = editCategorySelect.value;
    draftBurger.categoryLabel = CATEGORY_LABELS[draftBurger.category] || "Clássico Bovino";
    draftBurger.tong = editTongSelect.value;
    draftBurger.tongLabel =
      editTongLabelInput.value.trim() ||
      (draftBurger.tong === "green" ? "Pegador Verde • UHC 93°C" : "Pegador Vermelho • UHC 85°C");
    draftBurger.bun = editBunInput.value.trim();
    draftBurger.packaging = editPackagingInput.value.trim();
    if (editActiveSelect) {
      draftBurger.active = editActiveSelect.value !== "false";
    }
  }

  function buildCondimentOptionsHtml(selectedId) {
    const entries = Object.values(condimentsData).sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR")
    );
    const opts = entries
      .map((c) => {
        const sel = c.id === selectedId ? "selected" : "";
        return `<option value="${c.id}" ${sel}>${c.name}</option>`;
      })
      .join("");
    return `${opts}<option value="__NEW__">＋ Criar novo condimento...</option>`;
  }

  function buildBunPresetOptionsHtml(currentBunImg) {
    const isPreset = BUN_PRESETS.some((p) => p.value === currentBunImg);
    const opts = BUN_PRESETS.map((p) => {
      const sel = p.value === currentBunImg ? "selected" : "";
      return `<option value="${p.value}" ${sel}>${p.label}</option>`;
    }).join("");
    const customOpt = !isPreset
      ? `<option value="${(currentBunImg || "").replace(/"/g, "&quot;")}" selected>📷 Foto Personalizada</option>`
      : "";
    return `${opts}${customOpt}`;
  }

  function renderEditSections() {
    modalBodyEl.className = "board-columns-stage editing-stage";
    modalBodyEl.innerHTML = "";

    (draftBurger.sections || []).forEach((section, secIdx) => {
      section.bunImage = inferBunImage(draftBurger, section, secIdx);

      const colPanel = document.createElement("div");
      colPanel.className = "edit-column-panel";

      // Cabeçalho da Coluna Vertical
      const headerEl = document.createElement("div");
      headerEl.className = "edit-column-header";
      headerEl.innerHTML = `
        <div class="edit-column-header-top">
          <span class="edit-col-badge">Coluna ${secIdx + 1} da Placa</span>
          <div class="section-edit-actions">
            <button type="button" class="icon-ctrl-btn move-sec-left" title="Mover coluna para a esquerda">◀</button>
            <button type="button" class="icon-ctrl-btn move-sec-right" title="Mover coluna para a direita">▶</button>
            <button type="button" class="icon-ctrl-btn danger remove-sec-btn" title="Excluir esta coluna">🗑️ Coluna</button>
          </div>
        </div>
        <input
          type="text"
          class="edit-input edit-input-sm section-title-input"
          value="${(section.title || "").replace(/"/g, "&quot;")}"
          placeholder="Título do Pão (ex: COROA, COROA + CLUBE, BASE)"
        />
        <input
          type="text"
          class="edit-input edit-input-sm section-subtitle-input"
          value="${(section.subtitle || "").replace(/"/g, "&quot;")}"
          placeholder="Observação desta metade (opcional)"
        />
      `;

      headerEl.querySelector(".section-title-input").addEventListener("input", (e) => {
        section.title = e.target.value;
      });

      headerEl.querySelector(".section-subtitle-input").addEventListener("input", (e) => {
        section.subtitle = e.target.value;
      });

      headerEl.querySelector(".move-sec-left").addEventListener("click", () => {
        if (secIdx === 0) return;
        const temp = draftBurger.sections[secIdx - 1];
        draftBurger.sections[secIdx - 1] = draftBurger.sections[secIdx];
        draftBurger.sections[secIdx] = temp;
        renderEditSections();
      });

      headerEl.querySelector(".move-sec-right").addEventListener("click", () => {
        if (secIdx >= draftBurger.sections.length - 1) return;
        const temp = draftBurger.sections[secIdx + 1];
        draftBurger.sections[secIdx + 1] = draftBurger.sections[secIdx];
        draftBurger.sections[secIdx] = temp;
        renderEditSections();
      });

      headerEl.querySelector(".remove-sec-btn").addEventListener("click", () => {
        if (draftBurger.sections.length <= 1) {
          alert("O hambúrguer precisa ter pelo menos 1 coluna.");
          return;
        }
        draftBurger.sections.splice(secIdx, 1);
        renderEditSections();
      });

      colPanel.appendChild(headerEl);

      // Botão no topo da coluna para adicionar novo ingrediente no topo da pilha
      const addStepBtn = document.createElement("button");
      addStepBtn.type = "button";
      addStepBtn.className = "add-step-top-btn";
      addStepBtn.innerHTML = `＋ Adicionar Ingrediente no Topo desta Pilha`;
      addStepBtn.addEventListener("click", () => {
        section.steps.push({
          condiment: "queijoCheddar",
          amount: "1 unid.",
          note: ""
        });
        renderEditSections();
      });
      colPanel.appendChild(addStepBtn);

      // Lista vertical de ingredientes (column-reverse: o último fica no topo e o 1º fica logo acima do pão)
      const stackListEl = document.createElement("div");
      stackListEl.className = "edit-stack-list";

      (section.steps || []).forEach((step, stepIdx) => {
        const cond = condimentsData[step.condiment] || {
          id: step.condiment,
          name: step.condiment,
          image: "images/condiments/molho-big-mac.jpg",
          type: "sauce"
        };
        const currentImg = step.customImage || cond.image;
        const currentName = step.customName || cond.name;

        const rowEl = document.createElement("div");
        rowEl.className = "edit-stack-row";

        rowEl.innerHTML = `
          <div class="edit-stack-row-top">
            <span class="step-order-badge">${stepIdx + 1}º (de baixo p/ cima)</span>
            <div class="step-edit-toolbar">
              <button type="button" class="icon-ctrl-btn step-up-btn" title="Subir na pilha (mais perto do topo)">▲ Subir</button>
              <button type="button" class="icon-ctrl-btn step-down-btn" title="Descer na pilha (mais perto do pão)">▼ Descer</button>
              <button type="button" class="icon-ctrl-btn danger step-del-btn" title="Remover ingrediente">🗑️</button>
            </div>
          </div>

          <div class="edit-stack-row-main">
            <div class="edit-step-thumb-col">
              <div class="edit-step-thumb">
                <img src="${currentImg}" alt="${currentName}" />
              </div>
              <label class="upload-file-label step-photo-btn">
                📷 Foto
                <input type="file" class="step-file-input" accept="image/*" hidden />
              </label>
            </div>

            <div class="edit-step-inputs-col">
              <select class="edit-select edit-input-sm step-cond-select full-span" title="Selecionar Ingrediente">
                ${buildCondimentOptionsHtml(step.condiment)}
              </select>

              <input
                type="text"
                class="edit-input edit-input-sm step-amount-input"
                value="${(step.amount || "").replace(/"/g, "&quot;")}"
                placeholder="Qtd (ex: 1/3 oz, 12g, 1 unid.)"
                title="Quantidade exibida ao lado da foto"
              />

              <input
                type="text"
                class="edit-input edit-input-sm step-name-input"
                value="${(currentName || "").replace(/"/g, "&quot;")}"
                placeholder="Nome exibido"
                title="Nome do ingrediente"
              />

              <input
                type="text"
                class="edit-input edit-input-sm step-note-input full-span"
                value="${(step.note || "").replace(/"/g, "&quot;")}"
                placeholder="Observação curta (opcional)"
              />
            </div>
          </div>
        `;

        const selectEl = rowEl.querySelector(".step-cond-select");
        const amountInp = rowEl.querySelector(".step-amount-input");
        const nameInp = rowEl.querySelector(".step-name-input");
        const noteInp = rowEl.querySelector(".step-note-input");
        const fileInp = rowEl.querySelector(".step-file-input");

        selectEl.addEventListener("change", (e) => {
          const val = e.target.value;
          if (val === "__NEW__") {
            const newName = prompt("Digite o nome do novo condimento:");
            if (!newName || !newName.trim()) {
              selectEl.value = step.condiment;
              return;
            }
            const newId = "cond_" + Date.now();
            condimentsData[newId] = {
              id: newId,
              name: newName.trim(),
              image: "images/condiments/molho-big-mac.jpg",
              type: "sauce"
            };
            step.condiment = newId;
            delete step.customName;
            delete step.customImage;
            saveToStorage("✓ Novo condimento criado!");
            renderEditSections();
            return;
          }

          step.condiment = val;
          delete step.customName;
          delete step.customImage;
          renderEditSections();
        });

        amountInp.addEventListener("input", (e) => {
          step.amount = e.target.value;
        });

        nameInp.addEventListener("input", (e) => {
          const val = e.target.value;
          step.customName = val;
          if (condimentsData[step.condiment]) {
            condimentsData[step.condiment].name = val;
          }
        });

        noteInp.addEventListener("input", (e) => {
          step.note = e.target.value;
        });

        fileInp.addEventListener("change", (e) => {
          const file = e.target.files && e.target.files[0];
          readFileAsDataURL(file, (dataUrl) => {
            step.customImage = dataUrl;
            if (condimentsData[step.condiment]) {
              condimentsData[step.condiment].image = dataUrl;
            }
            renderEditSections();
          });
        });

        // Subir na pilha visual = ir para mais perto do topo (stepIdx + 1)
        rowEl.querySelector(".step-up-btn").addEventListener("click", () => {
          if (stepIdx >= section.steps.length - 1) return;
          const tmp = section.steps[stepIdx + 1];
          section.steps[stepIdx + 1] = section.steps[stepIdx];
          section.steps[stepIdx] = tmp;
          renderEditSections();
        });

        // Descer na pilha visual = ir para mais perto do pão na base (stepIdx - 1)
        rowEl.querySelector(".step-down-btn").addEventListener("click", () => {
          if (stepIdx === 0) return;
          const tmp = section.steps[stepIdx - 1];
          section.steps[stepIdx - 1] = section.steps[stepIdx];
          section.steps[stepIdx] = tmp;
          renderEditSections();
        });

        rowEl.querySelector(".step-del-btn").addEventListener("click", () => {
          section.steps.splice(stepIdx, 1);
          renderEditSections();
        });

        stackListEl.appendChild(rowEl);
      });

      colPanel.appendChild(stackListEl);

      // Rodapé da Coluna: Pão na Base da Pilha
      const bunFooterEl = document.createElement("div");
      bunFooterEl.className = "edit-column-bun-footer";
      bunFooterEl.innerHTML = `
        <div class="edit-bun-thumb">
          <img src="${section.bunImage}" alt="${section.title}" />
        </div>
        <div class="edit-bun-controls">
          <span class="edit-bun-label">🍞 Pão na Base desta Coluna:</span>
          <select class="edit-select edit-input-sm bun-preset-select">
            ${buildBunPresetOptionsHtml(section.bunImage)}
          </select>
        </div>
        <label class="upload-file-label step-photo-btn" style="width:auto;">
          📷 Foto Pão
          <input type="file" class="bun-file-input" accept="image/*" hidden />
        </label>
      `;

      bunFooterEl.querySelector(".bun-preset-select").addEventListener("change", (e) => {
        section.bunImage = e.target.value;
        renderEditSections();
      });

      bunFooterEl.querySelector(".bun-file-input").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        readFileAsDataURL(file, (dataUrl) => {
          section.bunImage = dataUrl;
          renderEditSections();
        });
      });

      colPanel.appendChild(bunFooterEl);
      modalBodyEl.appendChild(colPanel);
    });
  }

  function saveBurgerEdits() {
    if (!draftBurger) return;
    syncHeaderInputsToDraft();

    const existingIdx = burgersData.findIndex((b) => b.id === draftBurger.id);
    if (existingIdx !== -1) {
      burgersData[existingIdx] = JSON.parse(JSON.stringify(draftBurger));
    } else {
      burgersData.push(JSON.parse(JSON.stringify(draftBurger)));
    }

    currentBurgerId = draftBurger.id;
    isEditing = false;
    isCreatingNewBurger = false;

    saveToStorage(`✓ "${draftBurger.name}" salvo com sucesso!`);
    filterList();
    renderModalView(draftBurger);
  }

  function cancelBurgerEdits() {
    if (isCreatingNewBurger) {
      closeModal();
      return;
    }
    const orig = burgersData.find((b) => b.id === currentBurgerId);
    if (orig) {
      isEditing = false;
      draftBurger = null;
      renderModalView(orig);
    } else {
      closeModal();
    }
  }

  function duplicateCurrentBurger() {
    if (!draftBurger) return;
    syncHeaderInputsToDraft();
    const copy = JSON.parse(JSON.stringify(draftBurger));
    copy.id = "lanche-" + Date.now();
    copy.name = `${copy.name} (Cópia)`;
    burgersData.push(copy);
    currentBurgerId = copy.id;
    isCreatingNewBurger = false;
    saveToStorage(`✓ "${copy.name}" criado!`);
    filterList();
    enterEditMode(copy, false);
  }

  function deleteCurrentBurger() {
    if (!draftBurger) return;
    const confirmDel = confirm(`Tem certeza que deseja excluir "${draftBurger.name}" do cardápio?`);
    if (!confirmDel) return;

    burgersData = burgersData.filter((b) => b.id !== draftBurger.id);
    saveToStorage(`🗑️ "${draftBurger.name}" excluído.`);
    closeModal();
    filterList();
  }

  function closeModal() {
    modalEl.hidden = true;
    syncBodyScrollLock();
    currentBurgerId = null;
    isEditing = false;
    draftBurger = null;
    isCreatingNewBurger = false;
  }

  // =========================================================================
  // GERENCIADOR DE CONDIMENTOS E INSUMOS
  // =========================================================================
  function openCondimentsManager() {
    renderCondimentsManagerList();
    condimentsModalEl.hidden = false;
    syncBodyScrollLock();
  }

  function closeCondimentsManager() {
    condimentsModalEl.hidden = true;
    syncBodyScrollLock();
    filterList();
    if (!modalEl.hidden && currentBurgerId) {
      if (isEditing && draftBurger) {
        renderEditSections();
      } else {
        const b = burgersData.find((x) => x.id === currentBurgerId);
        if (b) renderModalView(b);
      }
    }
  }

  function renderCondimentsManagerList() {
    condimentsListEl.innerHTML = "";
    const list = Object.values(condimentsData).sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR")
    );

    list.forEach((cond) => {
      const itemEl = document.createElement("div");
      itemEl.className = "cond-manager-item";

      itemEl.innerHTML = `
        <div class="cond-manager-top">
          <div class="cond-manager-thumb">
            <img src="${cond.image}" alt="${cond.name}" />
          </div>
          <div class="cond-manager-fields">
            <input type="text" class="edit-input edit-input-sm cond-edit-name" value="${cond.name.replace(
              /"/g,
              "&quot;"
            )}" />
            <select class="edit-select edit-input-sm cond-edit-type">
              <option value="sauce" ${cond.type === "sauce" ? "selected" : ""}>🫙 Molho</option>
              <option value="veggie" ${cond.type === "veggie" ? "selected" : ""}>🥬 Vegetal / Cebola / Picles</option>
              <option value="cheese" ${cond.type === "cheese" ? "selected" : ""}>🧀 Queijo</option>
              <option value="meat" ${cond.type === "meat" ? "selected" : ""}>🥓 Bacon / Complemento</option>
              <option value="beef" ${cond.type === "beef" ? "selected" : ""}>🔴 Carne Bovina</option>
              <option value="poultry" ${cond.type === "poultry" ? "selected" : ""}>🟢 Frango Empanado</option>
              <option value="fish" ${cond.type === "fish" ? "selected" : ""}>🟢 Filé de Peixe</option>
              <option value="bun" ${cond.type === "bun" ? "selected" : ""}>🍞 Pão / Outros</option>
            </select>
          </div>
        </div>
        <div class="cond-manager-bottom">
          <input type="text" class="edit-input edit-input-sm cond-edit-img" value="${(
            cond.image || ""
          ).replace(/"/g, "&quot;")}" placeholder="URL/Caminho da foto" />
          <label class="upload-file-label cond-upload-btn">
            📷 Foto
            <input type="file" class="cond-edit-file" accept="image/*" hidden />
          </label>
        </div>
      `;

      const nameInp = itemEl.querySelector(".cond-edit-name");
      const typeSel = itemEl.querySelector(".cond-edit-type");
      const imgInp = itemEl.querySelector(".cond-edit-img");
      const fileInp = itemEl.querySelector(".cond-edit-file");
      const thumbImg = itemEl.querySelector("img");

      nameInp.addEventListener("change", (e) => {
        cond.name = e.target.value.trim() || cond.name;
        saveToStorage("✓ Condimento atualizado!");
      });

      typeSel.addEventListener("change", (e) => {
        cond.type = e.target.value;
        saveToStorage("✓ Tipo do condimento atualizado!");
      });

      imgInp.addEventListener("change", (e) => {
        cond.image = e.target.value.trim();
        thumbImg.src = cond.image;
        saveToStorage("✓ Foto do condimento atualizada!");
      });

      fileInp.addEventListener("change", (e) => {
        const f = e.target.files && e.target.files[0];
        readFileAsDataURL(f, (dataUrl) => {
          cond.image = dataUrl;
          imgInp.value = dataUrl;
          thumbImg.src = dataUrl;
          saveToStorage("✓ Foto do condimento enviada!");
        });
      });

      condimentsListEl.appendChild(itemEl);
    });
  }

  // =========================================================================
  // EXPORTAR data.js E RESTAURAR PADRÃO
  // =========================================================================
  function exportUpdatedDataJs() {
    const content =
      "// Arquivo data.js exportado com as personalizações feitas na Cola Visual\n\n" +
      "const CONDIMENTS = " +
      JSON.stringify(condimentsData, null, 2) +
      ";\n\n" +
      "const BURGERS = " +
      JSON.stringify(burgersData, null, 2) +
      ";\n";

    const blob = new Blob([content], { type: "application/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("💾 Arquivo data.js baixado!");
  }

  function resetToFactoryDefaults() {
    const ok = confirm(
      "Deseja restaurar todos os hambúrgueres e condimentos para o padrão original? Suas edições locais serão apagadas."
    );
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY_BURGERS);
    localStorage.removeItem(STORAGE_KEY_CONDIMENTS);
    localStorage.removeItem(STORAGE_KEY_USERS);
    burgersData = JSON.parse(JSON.stringify(DEFAULT_BURGERS));
    condimentsData = JSON.parse(JSON.stringify(DEFAULT_CONDIMENTS));
    usersData = JSON.parse(JSON.stringify(DEFAULT_USERS));
    updateTopRightUserWidget();
    renderUserSelectionScreen();
    closeModal();
    filterList();
    showToast("🔄 Cardápio restaurado para o padrão original!");
  }

  // =========================================================================
  // REGISTRO DE EVENTOS
  // =========================================================================
  newBurgerBtn.addEventListener("click", startCreateNewBurger);
  manageCondimentsBtn.addEventListener("click", openCondimentsManager);
  exportDataBtn.addEventListener("click", exportUpdatedDataJs);
  resetDefaultBtn.addEventListener("click", resetToFactoryDefaults);

  toggleEditBtn.addEventListener("click", () => {
    const b = burgersData.find((x) => x.id === currentBurgerId);
    if (b) enterEditMode(b, false);
  });

  if (toggleBurgerActiveBtn) {
    toggleBurgerActiveBtn.addEventListener("click", () => {
      if (currentBurgerId) {
        toggleBurgerActiveById(currentBurgerId);
      }
    });
  }

  if (toggleShowInactiveBtn) {
    toggleShowInactiveBtn.addEventListener("click", () => {
      showInactiveBurgers = !showInactiveBurgers;
      filterList();
    });
  }

  saveEditBtn.addEventListener("click", saveBurgerEdits);
  saveEditBottomBtn.addEventListener("click", saveBurgerEdits);
  cancelEditBtn.addEventListener("click", cancelBurgerEdits);
  cancelEditBottomBtn.addEventListener("click", cancelBurgerEdits);
  duplicateBurgerBtn.addEventListener("click", duplicateCurrentBurger);
  deleteBurgerBtn.addEventListener("click", deleteCurrentBurger);

  addSectionBtn.addEventListener("click", () => {
    if (!draftBurger) return;
    draftBurger.sections.push({
      title: "NOVA COLUNA",
      subtitle: "Descreva esta metade do pão",
      bunImage: "images/condiments/pao-aberto-base.jpg",
      steps: []
    });
    renderEditSections();
  });

  editImageInput.addEventListener("input", (e) => {
    editImgPreview.src = e.target.value.trim() || "images/burgers/big-mac.jpg";
  });

  editFileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    readFileAsDataURL(file, (dataUrl) => {
      editImageInput.value = dataUrl;
      editImgPreview.src = dataUrl;
    });
  });

  editTongSelect.addEventListener("change", (e) => {
    if (e.target.value === "green") {
      editTongLabelInput.value = "Pegador Verde • UHC 93°C";
    } else {
      editTongLabelInput.value = "Pegador Vermelho • UHC 85°C";
    }
  });

  // Eventos Gerenciador de Condimentos
  closeCondimentsModalBtn.addEventListener("click", closeCondimentsManager);
  doneCondimentsBtn.addEventListener("click", closeCondimentsManager);

  newCondFileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    readFileAsDataURL(file, (dataUrl) => {
      newCondImageInput.value = dataUrl;
    });
  });

  createCondimentBtn.addEventListener("click", () => {
    const name = newCondNameInput.value.trim();
    if (!name) {
      alert("Digite o nome do novo condimento.");
      newCondNameInput.focus();
      return;
    }
    const id = "cond_" + Date.now();
    condimentsData[id] = {
      id,
      name,
      type: newCondTypeSelect.value || "sauce",
      image: newCondImageInput.value.trim() || "images/condiments/molho-big-mac.jpg"
    };
    newCondNameInput.value = "";
    newCondImageInput.value = "";
    saveToStorage(`✓ Condimento "${name}" adicionado!`);
    renderCondimentsManagerList();
  });

  // Eventos de Filtro por Categoria
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      filterList();
    });
  });

  // Eventos de Busca Rápida
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.hidden = searchQuery.length === 0;
    filterList();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.hidden = true;
    filterList();
    searchInput.focus();
  });

  resetFiltersBtn.addEventListener("click", () => {
    activeCategory = "all";
    showInactiveBurgers = true;
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.hidden = true;
    filterBtns.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-category") === "all");
    });
    filterList();
  });

  // Eventos do Modal de Visualização
  closeTopBtn.addEventListener("click", closeModal);
  closeBottomBtn.addEventListener("click", closeModal);

  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl && !isEditing) {
      closeModal();
    }
  });

  condimentsModalEl.addEventListener("click", (e) => {
    if (e.target === condimentsModalEl) {
      closeCondimentsManager();
    }
  });

  prevBurgerBtn.addEventListener("click", () => {
    if (filteredBurgers.length === 0 || isEditing) return;
    const idx = filteredBurgers.findIndex((b) => b.id === currentBurgerId);
    const prevIdx = (idx - 1 + filteredBurgers.length) % filteredBurgers.length;
    openBurgerModalById(filteredBurgers[prevIdx].id, false);
  });

  nextBurgerBtn.addEventListener("click", () => {
    if (filteredBurgers.length === 0 || isEditing) return;
    const idx = filteredBurgers.findIndex((b) => b.id === currentBurgerId);
    const nextIdx = (idx + 1) % filteredBurgers.length;
    openBurgerModalById(filteredBurgers[nextIdx].id, false);
  });

  document.addEventListener("keydown", (e) => {
    if (!condimentsModalEl.hidden && e.key === "Escape") {
      closeCondimentsManager();
      return;
    }
    if (modalEl.hidden) return;
    if (e.key === "Escape" && !isEditing) {
      closeModal();
    } else if (e.key === "ArrowLeft" && !isEditing) {
      prevBurgerBtn.click();
    } else if (e.key === "ArrowRight" && !isEditing) {
      nextBurgerBtn.click();
    }
  });

  // Eventos de Identificação de Usuário e Edição de Nome no Topo Direito
  if (editUserNameBtn) {
    editUserNameBtn.addEventListener("click", openTopRightNameEdit);
  }
  if (activeUserNameEl) {
    activeUserNameEl.addEventListener("click", openTopRightNameEdit);
    activeUserNameEl.style.cursor = "pointer";
    activeUserNameEl.title = "Toque para alterar o nome";
  }
  if (saveUserNameBtn) {
    saveUserNameBtn.addEventListener("click", saveTopRightNameEdit);
  }
  if (cancelUserNameBtn) {
    cancelUserNameBtn.addEventListener("click", cancelTopRightNameEdit);
  }
  if (activeUserNameInput) {
    activeUserNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveTopRightNameEdit();
      } else if (e.key === "Escape") {
        cancelTopRightNameEdit();
      }
    });
  }
  if (switchUserBtn) {
    switchUserBtn.addEventListener("click", openUserSelectScreen);
  }
  if (switchUserAvatarBtn) {
    switchUserAvatarBtn.addEventListener("click", openUserSelectScreen);
  }

  // Inicializa o perfil no topo, a tela de seleção de usuário e a grade
  updateTopRightUserWidget();
  openUserSelectScreen();
  filterList();
})();
