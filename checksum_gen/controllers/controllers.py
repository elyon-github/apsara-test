# -*- coding: utf-8 -*-
from odoo import http


class ChecksumGen(http.Controller):
    @http.route('/checksum_gen/checksum_gen', auth='public')
    def index(self, **kw):
        return "Hello, world"

    @http.route('/checksum_gen/checksum_gen/objects', auth='public')
    def list(self, **kw):
        return http.request.render('checksum_gen.listing', {
            'root': '/checksum_gen/checksum_gen',
            'objects': http.request.env['checksum_gen.checksum_gen'].search([]),
        })

    @http.route('/checksum_gen/checksum_gen/objects/<model("checksum_gen.checksum_gen"):obj>', auth='public')
    def object(self, obj, **kw):
        return http.request.render('checksum_gen.object', {
            'object': obj
        })
