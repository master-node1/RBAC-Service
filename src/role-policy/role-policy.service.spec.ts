import { Test, TestingModule } from '@nestjs/testing';
import { RolePolicyService } from './role-policy.service';

describe('RolePolicyService', () => {
  let service: RolePolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolePolicyService],
    }).compile();

    service = module.get<RolePolicyService>(RolePolicyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
