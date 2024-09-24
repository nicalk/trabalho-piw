import express from "express";
import { Router } from "express";

const router = Router();
router.get("/usuariosnovo", (req, res) => res.send("Usuario"))

module.exports = router;

// Esse seria o arqui