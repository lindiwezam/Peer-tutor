import Tutor from "../models/Tutor.js";
import User from '../models/User.js';
import express from 'express';

const router = express.Router();

export const createTutor = async (req, res) => {
    try {
        const tutor = await Tutor.create(req, res);
        res.json(tutor);
    } catch (err) {
            res.status(500).json(err.message);
        }
    };

export const getTutors = async (req, res) => {
    try {
        const tutor = await Tutor.find().populate("user");
        res.json(tutor);
    } catch (error) {
        res.status(500).json(err.message);
    }
};