import jwt
import datetime
from django.conf import settings


def create_token(payload, type):
    if type == 'access':
        exp = datetime.datetime.utcnow() + datetime.timedelta(hours=12)
    elif type == "refresh":
        # 2주
        exp = datetime.datetime.utcnow() + datetime.timedelta(weeks=2)
    else:
        raise Exception("Invalid tokenType")
    
    payload['exp'] = exp
    payload['iat'] = datetime.datetime.utcnow()
    encoded = jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

    return encoded