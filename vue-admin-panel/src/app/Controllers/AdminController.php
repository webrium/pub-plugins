<?php

namespace App\Controllers;

class AdminController
{
  /**
   * Serves the same SPA shell for /admin and every /admin/<page> path —
   * Vue Router (client-side) renders the right page from the browser URL,
   * so this one action has to answer for all of them, including a hard
   * refresh deep on a sub-page.
   */
  public function index()
  {
    return view('layouts/Admin');
  }
}
