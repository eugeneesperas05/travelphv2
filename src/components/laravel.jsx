<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.7.0/dist/css/bootstrap.min.css">
  <link href="{{ asset('css/navbar.css') }}" rel="stylesheet">
  <title>TravelPH</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="{{ url('/') }}">TravelPH</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/') }}">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/Destination') }}">Destination</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/TravelInspiration') }}">Travel Inspiration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/Map') }}">Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/About') }}">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/Contact') }}">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.7.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
