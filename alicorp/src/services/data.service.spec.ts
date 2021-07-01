import { DataService } from './data.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('Service: User', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dataService = new DataService(httpClientSpy as any);
  });

  it('should return list of users', () => {
    const expectedUsers = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    dataService.getUsers();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return server error 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    dataService.getUsers();
    expect(dataService.getUsers).toBeUndefined();
  });

  it('should return server error 404 when try delete user', () => {
    const users = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    dataService.deleteUser;
    expect(dataService.deleteUser).toBeUndefined();
  });
});
