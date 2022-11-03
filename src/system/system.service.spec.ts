import { Test, TestingModule } from '@nestjs/testing';
import { SystemService } from './system.service';

jest.mock('./system.model');

describe('SystemService', () => {
  let service: SystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemService],
    }).compile();

    service = module.get<SystemService>(SystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    service.findAll().then(() => {
      
     })

  });

});
