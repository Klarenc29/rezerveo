import type { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import type { ApiResponse } from '../types';

/** Validation + sanitization rules for the booking payload. */
export const bookingValidationRules = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required.')
    .isLength({ max: 120 })
    .withMessage('Full name is too long.')
    .escape(),
  body('businessName')
    .trim()
    .notEmpty()
    .withMessage('Business name is required.')
    .isLength({ max: 160 })
    .withMessage('Business name is too long.')
    .escape(),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Enter a valid email address.')
    .normalizeEmail()
    .isLength({ max: 200 }),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .isLength({ min: 5, max: 40 })
    .withMessage('Enter a valid phone number.')
    .matches(/^[+]?[0-9\s().-]{5,40}$/)
    .withMessage('Phone number contains invalid characters.'),
  body('businessType')
    .trim()
    .notEmpty()
    .withMessage('Business type is required.')
    .isLength({ max: 80 })
    .escape(),
  body('teamSize')
    .trim()
    .notEmpty()
    .withMessage('Team size is required.')
    .isLength({ max: 40 })
    .escape(),
  body('message')
    .trim()
    .optional({ values: 'falsy' })
    .isLength({ max: 2000 })
    .withMessage('Message is too long (2000 characters max).')
    .escape(),
  // Honeypot — must remain empty; real users never see this field.
  body('company').optional().isString(),
];

/** Collect validation errors into the standard API envelope. */
export function handleValidation(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
    return;
  }

  const errors = result.array().map((e) => ({
    field: 'path' in e ? e.path : 'unknown',
    message: e.msg as string,
  }));

  const payload: ApiResponse = {
    success: false,
    message: 'Please correct the highlighted fields.',
    errors,
  };
  res.status(422).json(payload);
}
