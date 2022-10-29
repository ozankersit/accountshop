import { httpService } from '../../../services/api';
import type {NextApiRequest, NextApiResponse} from 'next'
import { API_URL } from '../../../constans/urls';
import { UAA_SERVICE } from '../../../constans/services';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await httpService.post(API_URL + UAA_SERVICE + `uaa/oauth/token`, new URLSearchParams({
      'grant_type': 'password',
      username: req.body.username,
      password: req.body.password
    }), {
      headers: {
        Authorization: 'Basic ' + btoa('web_client:web_clnt'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(value => {
      res.status(200).json(value?.data)
    })
  } else {
    res.status(405).end()
  }
}
