import { useMutation } from "react-query";

import { ApiError } from "~typings/core";
import {
  GenerateChallengeRequestDto,
  GenerateChallengeResponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
  VerifyChallengeRequestDto,
  VerifyChallengeResponseDto,
} from "~typings/types";

import { generateChallenge, register, verifyChallenge } from "./service";

export const useGenerateChallenge = () => {
  const generateChallengeMutation = useMutation<
    GenerateChallengeResponseDto,
    ApiError,
    GenerateChallengeRequestDto
  >((generateChallengeRequestDto: GenerateChallengeRequestDto) =>
    generateChallenge(generateChallengeRequestDto)
  );

  return { generateChallengeMutation };
};

export const useVerifyChallenge = () => {
  const verifyChallengeMutation = useMutation<
    VerifyChallengeResponseDto,
    ApiError,
    VerifyChallengeRequestDto
  >((verifyChallengeRequestDto: VerifyChallengeRequestDto) =>
    verifyChallenge(verifyChallengeRequestDto)
  );

  return { verifyChallengeMutation };
};

export const useRegister = () => {
  const registerMutation = useMutation<
    RegisterResponseDto,
    ApiError,
    RegisterRequestDto
  >((registerRequestDto: RegisterRequestDto) => register(registerRequestDto));

  return { registerMutation };
};