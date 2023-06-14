
type ADto = { id: string, name: string, age: number };
class ApiAConnector {
    getData(): ADto[] {
        return [
            { id: '123', name: 'Yolo Nator', age: 12 },
            { id: '456', name: 'Kim Possible', age: 45 },
            { id: '789', name: 'Peter Paule', age: 32 },
        ]
    };
}

type BDto = { id: string, firstName: string, lastName: string, gender };
class ApiBConnector {
    fetchUsers(): BDto[] {
        return [
            { id: '123', firstName: 'Yolo', lastName: 'Nator', gender: 'm' },
            { id: '456', firstName: 'Kim', lastName: 'Possible', gender: 'f' },
            { id: '789', firstName: 'Peter', lastName: 'Paule', gender: 'm' },
        ]
    };
}

export type RequestedUserType = { id: string, name: string, gender: string };

export interface UserApi {
    fetchUserData(): RequestedUserType[];
}

export class ApiAdapterA implements UserApi {
    private readonly apiA = new ApiAConnector();
    
    fetchUserData(): RequestedUserType[] {
        return this.apiA.getData().map(
            user => ({ id: user.id, name: user.name, gender: null })
        );
    }
}

export class ApiAdapterB implements UserApi {
    private readonly apiB = new ApiBConnector();
    
    fetchUserData(): RequestedUserType[] {
        return this.apiB.fetchUsers().map(
            user => ({ id: user.id, name: `${user.firstName} ${user.lastName}`, gender: user.gender })
        );
    }
}


