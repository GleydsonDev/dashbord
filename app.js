// ══════════════ DADOS ══════════════
const DATA = {"maquinas": [{"host": "HCNRNHOTEDTT9B2", "cpu": "I3 4GERA", "setor": "HOTELARIA", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNHOTEDTY9B2", "cpu": "I3 4G", "setor": "HOTELARIA", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNROUPDTHYR2", "cpu": "I3 8G", "setor": "ROUPARIA", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNROUPDTM8F3", "cpu": "I5 10G", "setor": "ROUPARIA", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNMANUDTX862", "cpu": "I3 4G", "setor": "MANUTENÇÃO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNMANUDT6009", "cpu": "I3 7G", "setor": "MANUTENÇÃO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNMANUDTNDQ2", "cpu": "I5 6G", "setor": "MANUTENÇÃO", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I5 6ªG", "cpu_gen": 6, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNMANUDTCOOR", "cpu": "I5 6G", "setor": "MANUTENÇÃO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I5 6ªG", "cpu_gen": 6, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNNUTRDTMHD2", "cpu": "I5 13G", "setor": "LACTÁRIO", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I5 13ªG", "cpu_gen": 13, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNNUTRDT6502", "cpu": "I3 3G", "setor": "NUTRIÇÃO", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 3ªG", "cpu_gen": 3, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_CBRZPK2", "cpu": "I3 7G", "setor": "NUTRIÇÃO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNLABSDT5LB3", "cpu": "I3 9G", "setor": "LABORATÓRIO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I3 9ªG", "cpu_gen": 9, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNLABSDTMSL2", "cpu": "I3 7G", "setor": "LABORATÓRIO", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_BD4SWQD2", "cpu": "I3 7G", "setor": "LABORATÓRIO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNFAR0DT59D3", "cpu": "I5 10G", "setor": "FARMÁCIA CENTRAL", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "SÓ RONDA"}, {"host": "HCNRNGUIASDTVN2", "cpu": "I3 7G", "setor": "COORDENAÇÃO ENFERMAGEM", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNFAR2DT2HRC", "cpu": "I5 8G", "setor": "FARMÁCIA 2º ANDAR", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 8ªG", "cpu_gen": 8, "cpu_fam": "I5", "origem": "SÓ RONDA"}, {"host": "HCNRNFARM2DT2VY", "cpu": "I3 8G", "setor": "FARMÁCIA 2º ANDAR", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNFAR2DTL5FQ", "cpu": "I3 7G", "setor": "FARMÁCIA 2º ANDAR", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNFAR2DT2V72", "cpu": "I3 8G", "setor": "FARMÁCIA 2º ANDAR", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRUTI2DTDMNL", "cpu": "I3 4G", "setor": "UTI 2B", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNUTI2DT7QK2", "cpu": "I5 7G", "setor": "UTI 2B", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I5 7ªG", "cpu_gen": 7, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNUTI2DTW862", "cpu": "I3 4G", "setor": "UTI 2A", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNDIREDT9630", "cpu": "I5 10G", "setor": "DIRETORIA", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "SÓ RONDA"}, {"host": "HCNRNGCOMDTSVN3", "cpu": "I3 8G", "setor": "COMERCIAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNAGCIDTHJ82", "cpu": "I3 4G", "setor": "AGENDAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNOPMEDT7QK2", "cpu": "PENTIUM", "setor": "OPME", "os": "WIN 10 PRO", "decisao": "TROCAR", "cpu_label": "PENTIUM", "cpu_gen": 0, "cpu_fam": "PENTIUM", "origem": "AD + RONDA"}, {"host": "HCNRNOPMEDTMLG2", "cpu": "I3 6G", "setor": "OPME", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNOPMEDTGL22", "cpu": "I3 4G", "setor": "OPME", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNOPMEDTPZX1", "cpu": "I3 3G", "setor": "OPME", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 3ªG", "cpu_gen": 3, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNOPMEDT69Q9", "cpu": "I3 4G", "setor": "OPME", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNOPMEDTM8F3", "cpu": "I5 10G", "setor": "OPME", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNUTI1DT9268", "cpu": "I3 8G", "setor": "UTI 1 A", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRNUTI1DTNPEI", "cpu": "I5 10G", "setor": "UTI 1 A", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNFAR1DTHFV1", "cpu": "I3 7G", "setor": "FARMÁCIA 1", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNCMEVDTZZ02", "cpu": "I3 4G", "setor": "CME", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "hcn_2alaApc4", "cpu": "i5 10g", "setor": "RECEPÇÃO PS", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN_HX1BY04", "cpu": "I5 13G", "setor": "RECEPÇÃO PS", "os": "WIN 10 PRO", "decisao": "ATUALIZAR", "cpu_label": "I5 13ªG", "cpu_gen": 13, "cpu_fam": "I5", "origem": "SÓ RONDA"}, {"host": "HCN_RN_CP168S1", "cpu": "I3 7G", "setor": "IMAGEM", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_BBDQWWQ2", "cpu": "I3 7G", "setor": "IMAGEM", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRN_6D5K2K2", "cpu": "I3 6G", "setor": "HEMODINÂMICA", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_4K5Z9X2", "cpu": "I5 8G", "setor": "HEMODINÂMICA", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I5 8ªG", "cpu_gen": 8, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN-43C01Y1", "cpu": "I3 7G", "setor": "CENTRAL ELETIVA", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNTOTEMLAB", "cpu": "I5 7G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I5 7ªG", "cpu_gen": 7, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCN_RN_FGLLDQ2", "cpu": "I3 7G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_ADMINPC1", "cpu": "I3 4G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_1784716", "cpu": "I3 4G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_RN_0KMI3Q", "cpu": "I3 4G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRNPC-BKB3642", "cpu": "I3 4G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_G593NZ1", "cpu": "I5 3G", "setor": "RECEPÇÃO IMAGEM", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I5 3ªG", "cpu_gen": 3, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN-CP158S1", "cpu": "I3 7G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCN_PSGUICHE2", "cpu": "I3 7G", "setor": "RECEPÇÃO CENTRAL", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_UTI3_PC2", "cpu": "I3 8G", "setor": "TRIAGEM PS", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_DJ7TKJ3", "cpu": "I5 10G", "setor": "SESMT", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN_CCTZPK2", "cpu": "I3 7G", "setor": "SESMT", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_DWR3W3", "cpu": "I3 9G", "setor": "SESMT", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I3 9ªG", "cpu_gen": 9, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRN_HCP22H2", "cpu": "I3 6G", "setor": "SESMT", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCNRN_4H7TKJ3", "cpu": "I3 7G", "setor": "SESMT", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_1J7TKJ3", "cpu": "I5 10G", "setor": "RH", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN_4PM34N3", "cpu": "I5 10", "setor": "JURIDICO", "os": "WIN 10", "decisao": "VERIFICAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRN_28PQ2J2", "cpu": "I3 6G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_QG0E72R", "cpu": "I5 8G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 8ªG", "cpu_gen": 8, "cpu_fam": "I5", "origem": "SÓ RONDA"}, {"host": "HCNRN_GKHKC72", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_6YGKRM3", "cpu": "I5 10G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "hcn_pcfat02", "cpu": "i5 8g", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 8ªG", "cpu_gen": 8, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCN_RN_2PFNLG2", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_6D2Q2K2", "cpu": "I3 6G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_RN_FHK27Z2", "cpu": "I3 6G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 6ªG", "cpu_gen": 6, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_69QD542", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_GK8S172", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_RN_JHFWC2", "cpu": "I3 7G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}, {"host": "HCN_PCFINAN01", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_RN_6CTM862", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCN_FATURAMPC10", "cpu": "I5 10G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCN_RN_DSKRZX1", "cpu": "I3 4G", "setor": "FATURAMENTO", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 4ªG", "cpu_gen": 4, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_2TT6VW2", "cpu": "I3 8G", "setor": "CENTRAL DE GUIAS", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "HCNRN_3J7TKJ3", "cpu": "I5 10G", "setor": "CENTRAL DE GUIAS", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I5 10ªG", "cpu_gen": 10, "cpu_fam": "I5", "origem": "AD + RONDA"}, {"host": "HCNRNPE3BDT7610", "cpu": "I3 8G", "setor": "ANALISE DE PRONTUÁRIO", "os": "WIN 10", "decisao": "ATUALIZAR", "cpu_label": "I3 8ªG", "cpu_gen": 8, "cpu_fam": "I3", "origem": "AD + RONDA"}, {"host": "DESKTOP-32P0MA8", "cpu": "I3 7G", "setor": "SEGURANÇA", "os": "WIN 10", "decisao": "TROCAR", "cpu_label": "I3 7ªG", "cpu_gen": 7, "cpu_fam": "I3", "origem": "SÓ RONDA"}], "so_wilson": ["HCN_RN_0KMY3Q", "HCN_RN_9MSJJ82", "HCN_RN_JHFVVC2", "HCNRN_1YGKRM3", "HCNRN_33OSE75", "HCNRN_3XNLLG2", "HCNRN_3Z08P63", "HCNRN_460YZX1", "HCNRN_BDQWWQ2", "HCNRN_C393NZ1", "HCNRN_CIV8GDL", "HCNRN_CMSK5V2", "HCNRN_DWR3W63", "HCNRNGUIASDTF22", "HCNRNGUIASDTJ82", "HCNRNPE2BDTN5V2", "HCNRNPE2CDT7316", "HCNRNUTI1DT4542", "HCNRNUTI1DT6QK2", "HCNRNUTI1DTD297", "HCNRNUTI2DTLF22"], "so_relatorio": ["HCNRN_BD4SWQD2", "HCNRNFAR0DT59D3", "HCNRNFAR2DT2HRC", "HCNRNFARM2DT2VY", "HCNRNFAR2DTL5FQ", "HCNRNFAR2DT2V72", "HCNRNDIREDT9630", "HCNRNAGCIDTHJ82", "HCNRNFAR1DTHFV1", "HCNRNCMEVDTZZ02", "HCNRN_HX1BY04", "HCNRN_BBDQWWQ2", "HCNRN-43C01Y1", "HCN_RN_0KMI3Q", "HCNRN-CP158S1", "HCNRN_DWR3W3", "HCNRN_HCP22H2", "HCNRN_QG0E72R", "HCN_RN_JHFWC2", "DESKTOP-32P0MA8"], "sugestoes": [{"ad": "HCN_RN_0KMY3Q", "ronda": "HCN_RN_0KMI3Q", "dist": 1}, {"ad": "HCN_RN_JHFVVC2", "ronda": "HCN_RN_JHFWC2", "dist": 2}, {"ad": "HCNRN_BDQWWQ2", "ronda": "HCNRN_BBDQWWQ2", "dist": 1}, {"ad": "HCNRN_DWR3W63", "ronda": "HCNRN_DWR3W3", "dist": 1}], "total_wilson": 80, "total_ronda": 79, "ambos": 59};

const M = DATA.maquinas;

// ══════════════ GOOGLE SHEETS API ══════════════
const API_URL = 'https://script.google.com/macros/s/AKfycbx0b9yL0ochYV7b1Sq0C6q0X4Mzj5x-q88BNWzh6FaMc4exwxQJ2xVv0OM9qe3GBLnm/exec';
let done = {};

async function loadDone(){
  showToast('Carregando progresso...', 'info');
  try {
    const data = await fetchJSONP(API_URL + '?action=getAll');
    done = data || {};
    showToast('Progresso carregado ✓', 'ok');
  } catch(e) {
    console.warn('loadDone error:', e);
    try { done = JSON.parse(localStorage.getItem('hcn_done')) || {}; } catch(e2){ done={}; }
    showToast('Usando dados locais', 'warn');
  }
  render();
  updateProgress();
  // Polling 30s
  setInterval(async () => {
    try {
      const data = await fetchJSONP(API_URL + '?action=getAll');
      if(data){ done = data; render(); updateProgress(); }
    } catch(e){}
  }, 30000);
}

function fetchJSONP(url){
  return new Promise((resolve, reject) => {
    const cb = 'cb_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    const script = document.createElement('script');
    const timeout = setTimeout(() => {
      try { delete window[cb]; document.head.removeChild(script); } catch(e){}
      reject(new Error('JSONP timeout'));
    }, 10000);
    window[cb] = (data) => {
      clearTimeout(timeout);
      try { delete window[cb]; document.head.removeChild(script); } catch(e){}
      resolve(data);
    };
    // Pegar a URL final após redirect do Google Script
    const finalUrl = url.replace(
      'script.google.com/macros/s/',
      'script.googleusercontent.com/macros/echo?user_content_key='
    );
    script.src = url + '&callback=' + cb + '&t=' + Date.now();
    script.onerror = () => {
      clearTimeout(timeout);
      try { delete window[cb]; document.head.removeChild(script); } catch(e){}
      reject(new Error('script load error'));
    };
    document.head.appendChild(script);
  });
}

function saveDone(host, isDone){
  try { localStorage.setItem('hcn_done', JSON.stringify(done)); } catch(e){}
  // no-cors: dispara sem bloquear, sem ler resposta
  fetch(API_URL + '?action=set&host=' + encodeURIComponent(host) + '&done=' + isDone, {
    method: 'GET', mode: 'no-cors', redirect: 'follow'
  }).catch(()=>{});
  // Backup: pixel
  const img = new Image();
  img.src = API_URL + '?action=set&host=' + encodeURIComponent(host) + '&done=' + isDone + '&t=' + Date.now();
}

function showToast(msg, type){
  let t = document.getElementById('toast');
  if(!t){ t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast ' + (type||'ok');
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>{ t.style.opacity='0'; }, 2800);
}

// ══════════════ KPIs HERO ══════════════
const nTrocar = M.filter(m=>m.decisao==='TROCAR').length;
const nAtualizar = M.filter(m=>m.decisao==='ATUALIZAR').length;
const nVerificar = M.filter(m=>m.decisao==='VERIFICAR').length;
const pct = Math.round(nTrocar / M.length * 100);

document.getElementById('kTotal').textContent = M.length;
document.getElementById('kTrocar').textContent = nTrocar;
document.getElementById('kAtualizar').textContent = nAtualizar;
document.getElementById('kVerificar').textContent = nVerificar;
document.getElementById('heroTrocarPct').textContent = pct + '%';

// ══════════════ DECISÃO EXECUTIVA ══════════════
document.getElementById('execTitle').textContent =
  `Aquisição de ${nTrocar} novas estações + upgrade de ${nAtualizar} máquinas para Windows 11.`;
document.getElementById('execBody').innerHTML =
  `Das <strong>${M.length} estações vistoriadas presencialmente</strong>, ${nTrocar} (${pct}%) possuem processadores abaixo da 8ª geração Intel e <strong>não atendem ao requisito mínimo do Windows 11</strong> — precisam ser substituídas. ` +
  `As ${nAtualizar} máquinas restantes já possuem hardware compatível e podem receber o upgrade sem custo de equipamento. ` +
  (nVerificar ? `${nVerificar} estação segue pendente de classificação. ` : '') +
  `Além disso, a auditoria de inventário identificou <strong>${DATA.so_wilson.length} registros no AD sem correspondência física</strong> e <strong>${DATA.so_relatorio.length} máquinas em uso fora da lista do domínio</strong> — detalhes na seção de auditoria.`;

// ══════════════ GRÁFICOS ══════════════
Chart.defaults.font.family = "'Inter',sans-serif";
Chart.defaults.color = '#44566B';

// Donut decisão
new Chart(document.getElementById('chDonut'), {
  type:'doughnut',
  data:{
    labels:['Trocar','Atualizar','Verificar'],
    datasets:[{data:[nTrocar,nAtualizar,nVerificar],
      backgroundColor:['#E23D3D','#12A46F','#E9A13B'], borderWidth:3, borderColor:'#fff'}]
  },
  options:{
    cutout:'62%',
    plugins:{legend:{position:'bottom',labels:{padding:16,usePointStyle:true}},
      tooltip:{callbacks:{label:c=>` ${c.label}: ${c.raw} máquinas (${Math.round(c.raw/M.length*100)}%)`}}}
  }
});

// Por setor (stacked horizontal, ordenado por total)
const setores = {};
M.forEach(m=>{
  if(!setores[m.setor]) setores[m.setor]={TROCAR:0,ATUALIZAR:0,VERIFICAR:0};
  setores[m.setor][m.decisao]++;
});
const setorArr = Object.entries(setores)
  .map(([s,v])=>({s, t:v.TROCAR, a:v.ATUALIZAR, v:v.VERIFICAR, tot:v.TROCAR+v.ATUALIZAR+v.VERIFICAR}))
  .sort((x,y)=>y.tot-x.tot);

new Chart(document.getElementById('chSetor'), {
  type:'bar',
  data:{
    labels:setorArr.map(x=>x.s),
    datasets:[
      {label:'Trocar', data:setorArr.map(x=>x.t), backgroundColor:'#E23D3D', borderRadius:4},
      {label:'Atualizar', data:setorArr.map(x=>x.a), backgroundColor:'#12A46F', borderRadius:4},
      {label:'Verificar', data:setorArr.map(x=>x.v), backgroundColor:'#E9A13B', borderRadius:4}
    ]
  },
  options:{
    indexAxis:'y', responsive:true, maintainAspectRatio:false,
    scales:{x:{stacked:true,ticks:{stepSize:2}}, y:{stacked:true,ticks:{font:{size:11}}}},
    plugins:{legend:{position:'bottom',labels:{usePointStyle:true}}}
  }
});
document.getElementById('chSetor').parentElement.style.height = Math.max(300, setorArr.length*22+80)+'px';

// Por geração de processador
const gens = {};
M.forEach(m=>{
  const g = m.cpu_gen===0 ? 'Pentium' : (m.cpu_gen==null ? 'N/D' : m.cpu_gen+'ª ger.');
  if(!gens[g]) gens[g]={n:0, compat: m.cpu_gen>=8};
  gens[g].n++;
});
const genOrder = Object.keys(gens).sort((a,b)=>{
  const va = a==='Pentium'?-1 : parseInt(a)||99;
  const vb = b==='Pentium'?-1 : parseInt(b)||99;
  return va-vb;
});
new Chart(document.getElementById('chGen'), {
  type:'bar',
  data:{
    labels:genOrder,
    datasets:[{
      label:'Máquinas',
      data:genOrder.map(g=>gens[g].n),
      backgroundColor:genOrder.map(g=>gens[g].compat?'#12A46F':'#E23D3D'),
      borderRadius:6
    }]
  },
  options:{
    plugins:{legend:{display:false},
      tooltip:{callbacks:{footer:items=>{
        const g=items[0].label;
        return gens[g].compat ? '✓ Compatível com Windows 11' : '✗ Abaixo do mínimo (8ª geração)';
      }}}},
    scales:{y:{ticks:{stepSize:5}}}
  }
});

// ══════════════ AUDITORIA ══════════════
document.getElementById('aWilson').textContent = DATA.total_wilson;
document.getElementById('aAmbos').textContent = DATA.ambos;
document.getElementById('aSoAd').textContent = DATA.so_wilson.length;
document.getElementById('aSoRonda').textContent = DATA.so_relatorio.length;

document.getElementById('listSoAd').innerHTML =
  DATA.so_wilson.map(h=>`<span class="hostchip">${h}</span>`).join('');
document.getElementById('listSoRonda').innerHTML =
  DATA.so_relatorio.map(h=>`<span class="hostchip">${h}</span>`).join('');
document.getElementById('typoList').innerHTML =
  DATA.sugestoes.map(s=>
    `<div class="typo-pair">
      <span class="hostchip" style="border-color:#2E7CD6">AD: ${s.ad}</span>
      <span class="arrow">≈</span>
      <span class="hostchip" style="border-color:#7B3FD1">Ronda: ${s.ronda}</span>
    </div>`).join('');

// ══════════════ TABELA ══════════════
const tbody = document.getElementById('tbody');
const fBusca = document.getElementById('fBusca');
const fSetor = document.getElementById('fSetor');
const fDecisao = document.getElementById('fDecisao');
const fOrigem = document.getElementById('fOrigem');
const fStatus = document.getElementById('fStatus');

// popular filtro de setores
[...new Set(M.map(m=>m.setor))].sort().forEach(s=>{
  fSetor.insertAdjacentHTML('beforeend', `<option value="${s}">${s}</option>`);
});

let sortKey = 'setor', sortDir = 1;

function chipDecisao(d){
  const cls = d==='TROCAR'?'trocar':(d==='ATUALIZAR'?'atualizar':'verificar');
  return `<span class="chip ${cls}">${d}</span>`;
}
function chipOrigem(o){
  return o==='AD + RONDA'
    ? `<span class="chip origem-a">AD + Ronda</span>`
    : `<span class="chip origem-r">Só ronda</span>`;
}

function filtered(){
  const q = fBusca.value.trim().toLowerCase();
  return M.filter(m=>{
    if(fSetor.value && m.setor!==fSetor.value) return false;
    if(fDecisao.value && m.decisao!==fDecisao.value) return false;
    if(fOrigem.value && m.origem!==fOrigem.value) return false;
    if(fStatus.value==='done' && !done[m.host]) return false;
    if(fStatus.value==='pendente' && done[m.host]) return false;
    if(q){
      const blob = (m.host+' '+m.setor+' '+m.cpu_label+' '+m.cpu+' '+m.os+' '+m.decisao).toLowerCase();
      if(!blob.includes(q)) return false;
    }
    return true;
  }).sort((a,b)=>{
    const va=(a[sortKey]||'').toString(), vb=(b[sortKey]||'').toString();
    return va.localeCompare(vb,'pt-BR')*sortDir;
  });
}

function render(){
  const rows = filtered();
  tbody.innerHTML = rows.length ? rows.map(m=>`
    <tr class="${done[m.host]?'done':''}" data-host="${m.host}">
      <td class="host">${m.host}</td>
      <td>${m.setor}</td>
      <td style="font-family:var(--mono);font-size:13px">${m.cpu_label}</td>
      <td>${m.os}</td>
      <td>${chipDecisao(m.decisao)}</td>
      <td>${chipOrigem(m.origem)}</td>
      <td class="td-center">
        <input type="checkbox" class="chk" ${done[m.host]?'checked':''}
          aria-label="Marcar ${m.host} como concluída">
      </td>
    </tr>`).join('')
  : `<tr class="empty-row"><td colspan="7">Nenhuma máquina corresponde aos filtros. Limpe a busca e tente novamente.</td></tr>`;

  document.getElementById('countInfo').textContent =
    `Exibindo ${rows.length} de ${M.length} estações`;
  updateProgress();
}

function updateProgress(){
  const n = M.filter(m=>done[m.host]).length;
  const p = Math.round(n/M.length*100);
  document.getElementById('pFill').style.width = p+'%';
  document.getElementById('pTxt').textContent = `${n} de ${M.length} concluídas (${p}%)`;
}

// eventos
tbody.addEventListener('change', async e=>{
  if(!e.target.classList.contains('chk')) return;
  const host = e.target.closest('tr').dataset.host;
  if(e.target.checked) done[host]=true; else delete done[host];
  e.target.closest('tr').classList.toggle('done', !!done[host]);
  updateProgress();
  await saveDone(host, !!done[host]);
  showToast(done[host] ? host + ' marcada ✓' : host + ' desmarcada', 'ok');
});

[fBusca,fSetor,fDecisao,fOrigem,fStatus].forEach(el=>{
  el.addEventListener('input', render);
});
document.getElementById('btnLimpar').addEventListener('click', ()=>{
  fBusca.value=''; fSetor.value=''; fDecisao.value=''; fOrigem.value=''; fStatus.value='';
  render();
});
document.querySelectorAll('thead th[data-k]').forEach(th=>{
  th.addEventListener('click', ()=>{
    const k = th.dataset.k;
    if(sortKey===k) sortDir*=-1; else { sortKey=k; sortDir=1; }
    render();
  });
});

// ══════════════ TOAST CSS ══════════════
(function(){
  const s = document.createElement('style');
  s.textContent = `
    #toast { position:fixed; bottom:28px; right:28px; padding:12px 20px; border-radius:10px;
      font-family:'Inter',sans-serif; font-size:14px; font-weight:500; z-index:9999;
      transition:opacity .4s ease; opacity:0; pointer-events:none; max-width:320px; }
    #toast.ok { background:#0C1B2A; color:#6FD3A8; border:1px solid #1e3a52; }
    #toast.warn { background:#FCF3E3; color:#8A5A10; border:1px solid #E9A13B; }
    #toast.info { background:#EAF2FC; color:#2E7CD6; border:1px solid #2E7CD6; }
  `;
  document.head.appendChild(s);
})();

// ══════════════ INICIALIZAR ══════════════
loadDone();
