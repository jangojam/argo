import * as models from '../../../models';
import requests from './requests';

export class WorkflowHistoryService {
    public list(): Promise<models.Workflow[]> {
        return requests
            .get(`/workflowhistory`)
            .then(res => res.body as models.WorkflowList)
            .then(list => list.items || []);
    }
}
