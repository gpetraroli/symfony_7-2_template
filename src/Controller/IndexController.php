<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index()
    {
        return $this->render('layouts/base_layout.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}