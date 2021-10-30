// create Manager card
const createManagerCard = (manager) => {
    return `
    <div class="card justify-content-center align-items-center mx-2 my-2" style="width: 18rem;">
      <i class="fas fa-user-tie fa-5x mt-3"></i>
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="card-text">
          <li class="id">${manager.id}</li>
          <li class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="offNum">Office Number: ${manager.offNum}</li>
        </ul>
      </div>
    </div>
    `;
  }