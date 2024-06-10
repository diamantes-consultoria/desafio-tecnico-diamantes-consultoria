// src/routes/authRoutes.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UserRepositoryPrisma } from '@/model/repositories/user.repository';
import { UserService } from '@/model/services/user.service';
import { AuthController } from '@/controllers/auth.controller';

const router = Router();
const prisma = new PrismaClient();
const userRepository = new UserRepositoryPrisma(prisma);
const userService = new UserService(userRepository);
const authController = new AuthController(userService);

router.post('/register', authController.register);
router.post('/login', authController.login);

export { router as authRoutes };
