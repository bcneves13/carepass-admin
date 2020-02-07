import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private apiUrl = env.openapi;
	private httpOptions: any = {};

	constructor(private http: HttpClient) {
		this.httpOptions.headers = new HttpHeaders({
			'Content-Type': 'application/json',
		});
	}

	private run(method: string, url: string, body?: string, params?: any): Promise<any> {
		if (params && typeof (params) !== 'undefined') {
			this.httpOptions.params = params;
    }
		return new Promise((res: any, rej) => {
			let request = this.http[method](this.apiUrl + url, this.httpOptions);
			if (method === 'post' || method === 'put') {
				request = this.http[method](this.apiUrl + url, body, this.httpOptions);
			}
			request.toPromise().then((response: any) => {
				this.responseHandler(response).then(res).catch(rej);
			}).catch((err: any) => {
				this.errorHandler(err);
				rej(err);
			});
		});
	}

	private errorHandler(error: any): any {
		if (error.status === 401) {
			console.log('aqui pode deslogar o cara talvez');
		} else {
			alert(error.message);
		}
	}

	private responseHandler(response: any): Promise<any> {
		return new Promise(res => {
			res(response);
		});
	}

	public get(url: string, params: any = {}): Promise<any> {
		return this.run('get', url, '', params);
	}

	public post(url: string, body: any = {}): Promise<any> {
		return this.run('post', url, body);
	}

	public put(url: string, body: any = {}): Promise<any> {
		return this.run('put', url, body);
	}

	public delete(url: string, id: string | number): Promise<any> {
		return this.run('delete', url, '', { id });
	}
}
