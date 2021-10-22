import { Router, Request, Response} from 'express';


const router = Router();


router.get('/messages', (req: Request, res: Response)=>{



    res.json({
        ok: true,
        message: 'All ready!!!'
    });
});

router.post('/messages', (req: Request, res: Response)=>{
    const body = req.body.body;
    const of = req.body.of;

    res.json({
        ok: true,
        body,
        of,
        message: 'POST - ready!!!'
    });
});

router.post('/messages/:id', (req: Request, res: Response)=>{
    const body = req.body.body;
    const of = req.body.of;
    const id = req.params.id;

    res.json({
        ok: true,
        body,
        of,
        id,
        message: 'POST - ready!!!'
    });
});

export default router;