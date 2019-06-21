<header>
  <nav class="navbar navbar-expand navbar-primary">
    <div class="container">
      <a class="navbar-brand"></a>
      <ul class="navbar-nav">
        <li class="nav-item user">
          <i class="far fa-user"></i>
          Guest User
        </li>
      </ul>
    </div>
  </nav>
  <div class="brand">
    <img src="{ imagePath('./logo.svg') }" class="logo" alt="Fishub">
    <span class="name">Fishub</span>
  </div>
  <nav class="navbar navbar-expand navbar-secondary">
    <div class="container justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#">Baits</a>
        </li>
        <li class="nav-item">
          <a href="#">Tackle Box</a>
          <span class="badge badge-pill">10</span>
        </li>
        <li class="nav-item">
          <a href="#">Activity</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<script>
  import { imagePath } from '../utilities/images';
</script>