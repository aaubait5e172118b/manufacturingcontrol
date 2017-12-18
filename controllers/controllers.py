# -*- coding: utf-8 -*-
from odoo import http

class ManuControl(http.Controller):
    @http.route('/manucontrol/', type='http', auth='public', website=True)
    def index(self, **kw):
       return http.request.render('MAnufacturingControl.index', {
   })
