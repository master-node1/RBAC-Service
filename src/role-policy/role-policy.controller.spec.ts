import { Test, TestingModule } from '@nestjs/testing';
import { RolePolicyController } from './role-policy.controller';

describe('RolePolicyController', () => {
  let controller: RolePolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolePolicyController],
    }).compile();

    controller = module.get<RolePolicyController>(RolePolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
